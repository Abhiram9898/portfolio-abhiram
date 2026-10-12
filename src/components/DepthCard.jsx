import {
  motion as Motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

export default function DepthCard({
  children,
  className = '',
  intensity = 5,
  glow = 'rgba(112, 241, 255, 0.16)',
  style,
  ...motionProps
}) {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  /*
   * Smooth card rotation
   */
  const rotateX = useSpring(
    useTransform(
      pointerY,
      [0, 1],
      [intensity, -intensity]
    ),
    {
      stiffness: 180,
      damping: 24,
      mass: 0.7,
    }
  );

  const rotateY = useSpring(
    useTransform(
      pointerX,
      [0, 1],
      [-intensity, intensity]
    ),
    {
      stiffness: 180,
      damping: 24,
      mass: 0.7,
    }
  );

  /*
   * Mouse position
   */
  const lightX = useTransform(
    pointerX,
    [0, 1],
    ['0%', '100%']
  );

  const lightY = useTransform(
    pointerY,
    [0, 1],
    ['0%', '100%']
  );

  /*
   * Dynamic spotlight
   */
  const light = useTransform(
    [lightX, lightY],
    ([x, y]) =>
      `radial-gradient(
        circle at ${x} ${y},
        ${glow},
        transparent 42%
      )`
  );

  /*
   * Subtle highlight movement
   */
  const highlightX = useTransform(
    pointerX,
    [0, 1],
    ['-20%', '20%']
  );

  const highlightOpacity = useTransform(
    pointerX,
    [0, 0.5, 1],
    [0.15, 0.35, 0.15]
  );

  const handlePointerMove = (event) => {
    /*
     * Disable 3D interaction on touch devices.
     */
    if (event.pointerType === 'touch') return;

    const bounds =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - bounds.left) /
      bounds.width;

    const y =
      (event.clientY - bounds.top) /
      bounds.height;

    /*
     * Clamp values so the card never behaves strangely
     * when the pointer moves very quickly.
     */
    pointerX.set(Math.max(0, Math.min(1, x)));
    pointerY.set(Math.max(0, Math.min(1, y)));
  };

  const reset = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <Motion.div
      {...motionProps}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformPerspective: 1400,
        transformStyle: 'preserve-3d',
      }}
      className={`depth-card relative ${className}`}
    >
      {/* Main dynamic spotlight */}
      <Motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-100"
        style={{
          background: light,
        }}
      />

      {/* Moving glass highlight */}
      <Motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-1/2 -translate-x-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/[0.025] to-transparent blur-xl"
        style={{
          x: highlightX,
          opacity: highlightOpacity,
        }}
      />

      {/* Top edge highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Content */}
      <div
        className="relative z-[1] h-full"
        style={{
          transform: 'translateZ(18px)',
        }}
      >
        {children}
      </div>
    </Motion.div>
  );
}