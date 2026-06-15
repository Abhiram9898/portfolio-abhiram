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
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [intensity, -intensity]), { stiffness: 160, damping: 24 });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-intensity, intensity]), { stiffness: 160, damping: 24 });
  const lightX = useTransform(pointerX, [0, 1], ['0%', '100%']);
  const lightY = useTransform(pointerY, [0, 1], ['0%', '100%']);
  const light = useTransform(
    [lightX, lightY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, ${glow}, transparent 38%)`,
  );

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
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
      className={`depth-card ${className}`}
    >
      <Motion.div aria-hidden="true" className="depth-card-light" style={{ background: light }} />
      {children}
    </Motion.div>
  );
}
