import {  useEffect, useRef } from "react";

export default function useClickOutside(onClick: () => void) {
  const containerRef = useRef(null);

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        console.log("close click");
        onClick();
      }
    }
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [containerRef, onClick]);

  return containerRef;
}
