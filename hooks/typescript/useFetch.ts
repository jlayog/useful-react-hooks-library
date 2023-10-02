interface FetchState<T> {
    data: T | null;
    loading: boolean;
  }
  
// Hook to fetch data from an API
function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ data: null, loading: true });

  // Fetch data when the component mounts
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: T) => {
        setState({ data, loading: false });
      });
  }, [url]);

  return state;
}