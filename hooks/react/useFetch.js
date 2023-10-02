// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
// Example use case
import useFetch from "./useFetch"

export default function FetchComponent() {
  const { data, loading } = useFetch("https://api.example.com/items");

  return (
    <div>
      {loading ? "Loading..." : JSON.stringify(data)}
    </div>
  )
}
