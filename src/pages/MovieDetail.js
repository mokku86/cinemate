import { useState, useEffect } from "react";
import { useTitle } from "../hooks";
import { useParams } from "react-router-dom";
import Default from "../assets/images/default.jpg";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const pageTitle = useTitle(movie.title || 'Loading...');
  const image = movie.poster_path ? `https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}` : Default;

  useEffect(() => {
    async function fetchMovie() {
      const respon = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`);
      const json = await respon.json();

      //update movie in useState
      setMovie(json);
    }
    fetchMovie();
  }, []);
  
  
  return (
    <main>
        <section>
          <div className="max-w-screen-xl flex flex-col items-center gap-8 lg:flex-row lg:justify-center ">  
            <div className=""><img src={image} alt={movie.title} className="rounded-lg " /></div>
            <div className="max-w-full lg:max-w-lg text-gray-900 dark:text-white">
              <h1 className="text-4xl mb-2">{movie.title}</h1> 
              <p>{movie.overview}</p>

              {/* genres */}
              { movie.genres ? (
                <div className="flex flex-wrap gap-2 my-8">
                  {movie.genres.map((genre) => (
                    <span className="border-2 px-4 py-2 border-blue-500 rounded-lg" key={genre.id}>{genre.name}</span>
                  ))}
                </div>
              ) : "" }

              {/* rating */}
              <div className="flex items-center gap-2">
                <div className="mt-2 flex items-center gap-2 sm:mt-0">
                  <div className="flex items-center gap-0.5">
                    <svg className="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>  
                  </div>
                  <p className="text-bold text-gray-500 dark:text-gray-400">({movie.vote_average})</p>
                  <span className="leading-none text-gray-900 dark:text-white"> {movie.vote_count} Reviews </span>
                </div>
              </div>

              {/* info */}
              <ul className="list-none my-4">
                <li className="mb-2"><span className="font-bold">Runtime:</span> <span className="text-gray-500 dark:text-slate-500">{movie.runtime}</span></li>
                <li className="mb-2"><span className="font-bold">Budget:</span> <span className="text-gray-500 dark:text-slate-500">{movie.budget}</span></li>
                <li className="mb-2"><span className="font-bold">Revenue:</span> <span className="text-gray-500 dark:text-slate-500">{movie.revenue}</span></li>
                <li className="mb-2"><span className="font-bold">Release Date:</span> <span className="text-gray-500 dark:text-slate-500">{movie.release_date}</span></li>
                <li className="mb-2"><span className="font-bold ">IMDB Code:</span> <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="text-gray-500 underline dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400">{movie.imdb_id}</a></li>
              </ul>
            </div>
          </div>
        </section>
    </main>
  )
}
