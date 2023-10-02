// Custom hook for setting an interval
function useInterval(callback, delay) {
    useEffect(() => {
      const interval = setInterval(callback, delay);
  
      return () => clearInterval(interval);
    }, [callback, delay]);
  }

// Example use case
import useInterval from "./useInterval"

export default function IntervalComponent() {
  const [count, setCount] = useState(0);
  
  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>{count}</div>;
}
