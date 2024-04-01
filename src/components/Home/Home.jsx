import { useContext } from "react";
import { authContext } from "../../AuthProvider";
import { Link } from "react-router-dom";

function Home() {
  const authInfo = useContext(authContext);
  console.log(authInfo);
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Hello there, Welcome to{" "}
            <span className="text-green-500">Firm Form</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/register" className="btn text-white bg-green-500">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
