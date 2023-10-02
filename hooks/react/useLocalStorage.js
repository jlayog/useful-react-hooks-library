// Store and retrieve data from local storage.
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  }


  // Example use case
import useLocalStorage from "./useLocalStorage"

export default function LocalStorageComponent() {
  const [name, setName] = useLocalStorage("name", "John");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>Your name is {name}</div>
    </div>
  )
}