import PageNotFoundImage from "../assets/images/pagenotfound.jpg";
import { Button } from "../components";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main>
        <section className="flex flex-col justify-center px-2">
          <div className="flex flex-col items-center my-4">
            <p className="text-8xl text-gray-700 font-bold dark:text-white my-8">404, Oops!</p>
            <img className="max-w-lg" src={PageNotFoundImage} alt="404 Page Not Found" />
          </div>
          <div className="flex justify-center my-4">
            <Link to='/'>
              <Button>Back to Cinemate</Button>
            </Link>
          </div>
        </section>
    </main>
  )
}
