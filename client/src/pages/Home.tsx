import MovieCard from "../components/MovieCard";
import useQuery from "../hooks/useQuery";

// TODO: make apikey for fetching data
// TODO: use https instead of http
// TODO: fetch data from backend
// TODO: show data in client

function Home() {
  const fetchDummy = async () => {
    const response = await fetch("https://localhost:3001/api/movie/popular");
    if (!response.ok) {
      throw new Error("network response was not okay");
    }
    return response.json();
  };

  const { data, error, isLoading, isFetching } = useQuery("movies", fetchDummy);

  console.log(data);
  console.log(error);
  console.log(isLoading);
  console.log(isFetching);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={"w-full dark:bg-slate-950"}>
      <MovieCard />
    </div>
  );
}
export default Home;
