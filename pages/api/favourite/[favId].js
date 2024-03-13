import { favMovies } from "@/data/favourite";
export default function handleFav(req, res) {
  const { favId } = req.query;
  const deleteMovie = favMovies.find((mov) => {
    return Number(mov.id) === Number(favId);
  });
  const deletMovieAtIndex = favMovies.findIndex((mov) => {
    return Number(mov.id) === Number(favId);
  });
  favMovies.splice(deletMovieAtIndex, 1);
  res.status(200).json({ name: "John Doe" });
}
