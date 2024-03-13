import MovieCard from "@/components/MovieCard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=6c170dfb034254eb7eb526387bef7461&page=1"
  );
  const data = await res.json();
  const movies = data.results;
  return {
    props: {
      movies,
    },
  };
};
function Movies({ movies }) {
  const router = useRouter();
  console.log(movies);
  return (
    <>
      <div className="  mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {movies.map((movie) => {
          return (
            <>
              <MovieCard movie={movie} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
