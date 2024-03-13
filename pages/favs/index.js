import { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/react";
import MovieCard from "@/components/MovieCard";
function Favourite() {
  const [favs, setFavs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getAllFavourites() {
      // const session = await getSession();
      // if (!session) signIn();
      // else
      const response = await fetch("/api/favourite");
      const favMovies = await response.json();
      setFavs(favMovies);
      setIsLoading(false);
    }
    getAllFavourites();
  }, []);
  if (isLoading) return <div>Loading ...</div>;
  else
    return (
      <div>
        <h2 className="text-4xl pb-10">Favourites Movies</h2>
        <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-x-3 gap-y-6">
          {favs.map((movie) => (
            <>
              <MovieCard
                key={movie.id}
                movie={movie}
                isFav={true}
                update={update}
              />
            </>
          ))}
        </div>
      </div>
    );
}
export default Favourite;
