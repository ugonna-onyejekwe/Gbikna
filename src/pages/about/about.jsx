import "./about.scss";
import about_image from "../../assets/about.jpg";
import { service } from "../../components/data";

export const About = () => {
  return (
    <section className="about_page" id="about">
      <div className="container">
        <div className="section1">
          <div className="txt_con" data-aos="fade-up-right">
            <small>welcome</small>
            <h2>Gbikna Limited.</h2>
            <p>
              Gbikna limited is a fintech innovator, delivering a secure,
              effective and innovative payment solutions, empowering businesses
              and financial institutes to thrive in the digital landscape.
            </p>

            <button>read more</button>
          </div>

          <div className="img_con" data-aos="fade-up-left">
            <img src={about_image} alt="about image" />
          </div>
        </div>

        <div className="section2">
          <div className="header" data-aos="fade-up">
            <h3>our services</h3>
            <p>We offer the following services:</p>
          </div>

          <div className="wrapper">
            {service.map((i, key) => {
              return (
                <div className="box" data-aos="fade-up">
                  <span>{i.icon}</span>

                  <div className="txt">
                    <h4>{i.header}</h4>
                    <p>{i.brief}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
