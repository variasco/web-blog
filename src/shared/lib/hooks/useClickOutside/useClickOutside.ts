import {  MutableRefObject, useEffect, useRef } from "react";

export function useClickOutside(onClick: () => void) {
  const containerRef = useRef(null) as MutableRefObject<any>;

  useEffect(() => {
    function clickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
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
