// Custom hook for outside clicks
function useOnClickOutside(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}
  
// Example use case
import useOnClickOutside from "./useOnClickOutside"

export default function OutsideClickComponent() {
  const ref = useRef();
  useOnClickOutside(ref, () => alert("Clicked outside!"));

  return <div ref={ref}>Click outside this box.</div>;
}
