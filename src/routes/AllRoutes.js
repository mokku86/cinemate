import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top rated" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
        <Route path="movie/:id" element={<MovieDetail/>} />
        <Route path="search" element={<Search apiPath="search/movie" />}/>
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}
