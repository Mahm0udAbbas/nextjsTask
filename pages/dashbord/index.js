import { useEffect, useState } from "react";

function Dashbord() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    async function getAllMovie() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=6c170dfb034254eb7eb526387bef7461&page=1"
      );
      const data = await response.json();
      setMovies(data.results);
    }
    getAllMovie();
  }, []);
  const bestRateMovie = movies?.reduce((acc, mov) => {
    return mov.vote_average > acc.vote_average ? mov : acc;
  }, movies[0]);
  const lowRateMovie = movies?.reduce((acc, mov) => {
    return mov.vote_average < acc.vote_average ? mov : acc;
  }, movies[0]);
  const mostViewedMovie = movies?.reduce((acc, mov) => {
    return mov.popularity > acc.popularity ? mov : acc;
  }, movies[0]);

  if (!movies) return <div>Loading...</div>;
  else
    return (
      <div className=" w-full">
        <main>
          <div class="">
            <section>
              <div
                id="main"
                class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
              >
                <div class="bg-gray-800 pt-3">
                  <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h1 class="font-bold pl-2">Analytics</h1>
                  </div>
                </div>

                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                      <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                          <div class="rounded-full p-5 bg-green-600">
                            <i class="fa fa-wallet fa-2x fa-inverse"></i>
                          </div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                          <h2 class="font-bold uppercase text-gray-600">
                            Total Movies
                          </h2>
                          <p class="font-bold text-3xl">
                            {movies.length}
                            <span class="text-green-500">
                              <i class="fas fa-caret-up"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                      <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                          <div class="rounded-full p-5 bg-pink-600">
                            <i class="fas fa-users fa-2x fa-inverse"></i>
                          </div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                          <h2 class="font-bold uppercase text-gray-600">
                            best rate movie
                          </h2>
                          <p class="font-bold text-3xl">
                            {bestRateMovie.title}
                            <span class="text-pink-500">
                              <i class="fas fa-exchange-alt"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                      <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                          <div class="rounded-full p-5 bg-pink-600">
                            <i class="fas fa-users fa-2x fa-inverse"></i>
                          </div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                          <h2 class="font-bold uppercase text-gray-600">
                            lower rate movie
                          </h2>
                          <p class="font-bold text-3xl">
                            {lowRateMovie.title}
                            <span class="text-pink-500">
                              <i class="fas fa-exchange-alt"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                    <div class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                      <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                          <div class="rounded-full p-5 bg-yellow-600">
                            <i class="fas fa-user-plus fa-2x fa-inverse"></i>
                          </div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                          <h2 class="font-bold uppercase text-gray-600">
                            Most popular movie
                          </h2>
                          <p class="font-bold text-3xl">
                            {mostViewedMovie.title}
                            <span class="text-yellow-600">
                              <i class="fas fa-caret-up"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
}

export default Dashbord;
