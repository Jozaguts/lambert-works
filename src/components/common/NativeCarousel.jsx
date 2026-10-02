import { useId, useRef, useState } from "react";
import "./native-carousel.css";

export default function NativeCarousel({ label, children, multiple = false }) {
  const id = useId();
  const list = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const updateEdges = () => {
    const element = list.current;
    setEdges({ start: element.scrollLeft <= 1, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 1 });
  };
  const scroll = (direction) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.current.scrollBy({ left: direction * list.current.clientWidth, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <div role="region" aria-label={label}>
      <ul tabIndex={0} aria-label={`Scroll ${label}`} id={id} ref={list} onScroll={updateEdges} className={`native-carousel ${multiple ? "native-carousel-multiple" : ""}`}>
        {children}
      </ul>
      <div className="mt-5 flex justify-center gap-3">
        <button type="button" className="btn btn-secondary" aria-controls={id} aria-label={`Previous ${label}`} disabled={edges.start} onClick={() => scroll(-1)}>Previous</button>
        <button type="button" className="btn btn-secondary" aria-controls={id} aria-label={`Next ${label}`} disabled={edges.end} onClick={() => scroll(1)}>Next</button>
      </div>
    </div>
  );
}
