import "./home.scss";
import home1 from "../../assets/home1.webp";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import home4 from "../../assets/home4.jpg";

export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="txt_con" data-aos="fade-right">
          <h1>
            Start small and get
            <br /> global with <span>Tella</span>
          </h1>

          <p>
            Tella is more than a retail solution. It's a growth partner for
            businesses, empowering them to suceed in an ever-evolving market.
          </p>

          <div className="btn">
            <button>explore</button>
          </div>
        </div>

        <div className="img_wrapper" data-aos="fade-left">
          <div className="main">
            <div className="img">
              <img src={home1} alt="user image" />
            </div>
            <div className="img">
              <img src={home2} alt="user image" />
            </div>
            <div className="img">
              <img src={home3} alt="user image" />
            </div>
            <div className="img">
              <img src={home4} alt="user image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
