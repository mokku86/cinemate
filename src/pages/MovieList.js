import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath}) => {
  //this is destructuring with aliasing
  const { data:movies } = useFetch(apiPath);
  //data:movies = data is an return result from useFetch, and the values of data will be call movies from now on.
  //use Fetch return:
  //{
  //  data : [.....],
  //  loading : false,
  //  error : null
  //}
  //
  //so now the value from data which is [......] is stored into the var called movies

  
  return (
    <main>
      <section className="py-7">
        <div className="grid justify-items-center grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))] gap-4">
          
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }
        </div>
      </section>
    </main>
  )
}
