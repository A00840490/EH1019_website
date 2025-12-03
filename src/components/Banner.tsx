import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link to="/learn/1" className="block bg-primary py-3 px-4 text-center hover:bg-primary/90 transition-colors">
      <p className="text-primary-foreground font-medium text-sm md:text-base">
        Take the quiz to find out how culturally intelligent you are!
      </p>
    </Link>
  );
};

export default Banner;
