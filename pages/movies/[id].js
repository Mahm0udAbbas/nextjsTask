import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import Image from "next/image";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  let data;
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6c170dfb034254eb7eb526387bef7461&page=1`
    );
    data = await res.json();
  } catch (e) {
    console.log(e);
  }
  return {
    props: { movie: data },
  };
};

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <section className="container mx-auto p-4 flex justify-center">
        <Card
          shadow={false}
          className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-bold text-6xl leading-[1.5]"
            >
              {movie.title}
            </Typography>
            <div className="flex gap-3 justify-center items-center">
              <div className="flex font-bold justify-center items-center ">
                <Typography className="text-white">Release Date:</Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="mb-3 ms-1 leading-[1.5]"
                >
                  <Chip value={movie.release_date} />
                </Typography>
              </div>
              <div className="flex font-bold justify-center items-center ">
                <Typography className="text-white">Vote Avarage:</Typography>
                <Typography
                  variant="span"
                  color="white"
                  className="mb-3 ms-1 leading-[1.5]"
                >
                  <Chip
                    value={movie.vote_average}
                    className={`ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold ${
                      +movie.vote_average > 7 ? "bg-green-800" : "bg-red-800"
                    }  text-white`}
                  />
                </Typography>
              </div>
            </div>
            <Typography
              variant="p"
              color="white"
              className="mb-6 font-meduim text-md leading-[1.5]"
            >
              {movie.overview}
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96 mb-6">
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
            <Button>Read More</Button>
          </CardFooter>{" "}
        </Card>
      </section>
    </>
  );
};

export default Movie;
