import mc from "./home.module.scss";
//components//
import NavBar from "../nav-bar/NavBar";
import HomeSlider from "../home-slider/HomeSlider";

const Home = () => {
  return (
    <main className={mc.container}>
      <nav>
        <NavBar />
      </nav>
      <div className={mc.slider}>
        <HomeSlider />
      </div>
    </main>
  );
};

export default Home;
