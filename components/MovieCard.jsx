import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

function MovieCard({ movie, isFav, update }) {
  const router = useRouter();
  const addToFav = async (FavMovie) => {
    const response = await fetch("/api/favourite", {
      method: "POST",
      body: JSON.stringify(FavMovie),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const removeFromFav = async (id) => {
    const response = await fetch(`/api/favourite/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    update();
  };
  return (
    <Card className="mt-6 w-full  mb-6" key={movie.id}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {movie.title}
        </Typography>
        <Typography>{movie.overview}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          className="w-full mb-2"
          onClick={() => {
            router.push("/movies/" + movie.id);
          }}
        >
          Details
        </Button>
        {isFav ? (
          <Button
            className="w-full "
            onClick={() => {
              removeFromFav(movie);
            }}
          >
            remove From Favourite
          </Button>
        ) : (
          <Button
            className="w-full "
            onClick={() => {
              addToFav(movie);
            }}
          >
            Add to Favourite
          </Button>
        )}
      </CardFooter>{" "}
    </Card>
  );
}

export default MovieCard;
