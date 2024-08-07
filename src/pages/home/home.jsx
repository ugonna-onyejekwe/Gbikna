import { Parallax } from "react-parallax";
import "./home.scss";
import { boxData } from "../../components/data";
import homeBg from "../../assets/hero-bg.jpg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

export const Home = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 700 });
  // }, []);

  return (
    <section className="home">
      <Parallax bgImage={homeBg} bgImageAlt="the cat" strength={400}>
        <div className="wrapper">
          <div className="txt_con">
            <div className="txt" data-aos="fade-up">
              <h1>Tella</h1>
              <h3>
                Start local, go global <br /> Retail solution for all businesses
              </h3>
            </div>

            <div className="box_con" data-aos="zoom-in-up">
              {boxData.map((i, key) => {
                return (
                  <div className="box" key={key}>
                    <span>{i.icon}</span>
                    <h4>{i.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};
