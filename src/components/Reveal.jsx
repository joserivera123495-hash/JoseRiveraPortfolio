import { useEffect, useRef, useState } from "react";

// Wrap anything in <Reveal>...</Reveal> and it fades up when scrolled into view.
// Re-animates every time it enters the viewport (scrolling down OR up).
// Optional delay (ms) staggers items: <Reveal delay={120}>
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // toggle on every enter/leave instead of firing once
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px", // trigger slightly before fully in view
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;
