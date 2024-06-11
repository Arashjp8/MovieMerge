import { movies } from "../data/movies";

function MovieCard() {
  return (
    <>
      <div
        className={
          "p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-4 gap-4 w-full h-full border border-lime-700 text-gray-600"
        }
      >
        {movies.map((movie) => (
          <div
            key={movie._id}
            className={
              "lg:h-48 flex flex-col lg:flex-row border bg-gray-100 rounded-md hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-black"
            }
            onClick={() => console.log(movie.poster_path)}
          >
            <img
              src={movie.poster_path}
              loading={"lazy"}
              className={
                "md:w-full md:h-[432px] lg:w-32 lg:h-48 rounded-md lg:rounded-l-md"
              }
            />
            <div
              className={"flex flex-col gap-4 p-4 items-start justify-start"}
            >
              <span className={"text-xl"}>
                {movie.title.length > 40
                  ? movie.title.slice(0, 40) + "..."
                  : movie.title}
              </span>
              <span className={"text-lg"}>{movie.release_date}</span>
              <div className={"flex flex-row gap-6"}>
                <span
                  className={`${movie.vote_average < 50 ? "bg-red-200 text-red-700" : movie.vote_average < 70 ? "bg-yellow-200 text-yellow-700" : "bg-green-200 text-green-700"} py-1 px-2 rounded-md text-center min-w-9`}
                >
                  {movie.vote_average}
                </span>
                <button
                  className={
                    "bg-teal-200 text-md px-2 pb-1 flex flex-row items-center justify-center text-center rounded-lg hover:bg-opacity-70 transition-all duration-300 ease-in-out"
                  }
                >
                  more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default MovieCard;
