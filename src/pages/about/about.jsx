import "./about.scss";
import about_image from "../../assets/about.jpg";
import { RiCheckDoubleFill } from "react-icons/ri";

export const About = () => {
  return (
    <section className="about_page">
      <div className="container">
        <div className="txt_con" data-aos="fade-right">
          <h2>Gbikna Limited.</h2>
          <p>We offer the following services:</p>

          <ul>
            <li>
              <span>
                <RiCheckDoubleFill />
              </span>
              Payment Applications.
            </li>

            <li>
              <span>
                <RiCheckDoubleFill />
              </span>
              Risk Analysis Using Artificial Intelligence.
            </li>

            <li>
              <span>
                <RiCheckDoubleFill />
              </span>
              Bills Payment Engine.
            </li>

            <li>
              <span>
                <RiCheckDoubleFill />
              </span>
              Data Analytics.
            </li>

            <li>
              <span>
                <RiCheckDoubleFill />
              </span>
              Terminal Management System.
            </li>

            <li>
              <span>
                <RiCheckDoubleFill />
              </span>
              Agency Banking Services.
            </li>

            <li>
              <span>
                <RiCheckDoubleFill />
              </span>
              Secured Military Web Applications.
            </li>
            <li>
              <span>
                <RiCheckDoubleFill />
              </span>
              Card Switch.
            </li>
            <li>
              <span>
                <RiCheckDoubleFill />
              </span>
              Transport Fare Solutions and Traffic Management Solutions.
            </li>
          </ul>
        </div>

        <div className="img_con">
          <img src={about_image} alt="about image" data-aos="fade-left" />
        </div>
      </div>
    </section>
  );
};
