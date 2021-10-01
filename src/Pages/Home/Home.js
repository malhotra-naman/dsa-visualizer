import "./Home.css";
import "../../components/NavBar/NavBar";
import React from "react";
// import Slider from "../../components/Slider/Slider";
const HomePage = () => {
  return (
    <div>
      <div className="homePage">
        <div className="homeSection">
          <section className="first">
            <img
              className="imageContainer"
              src="https://images.unsplash.com/photo-1631804422635-eff93216d80c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              height="400"
              width="400"
            />
            <div className="contentContainer">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti, eum quaerat facilis dignissimos atque impedit ratione
              cupiditate dicta cum nesciunt temporibus, asperiores odit veniam
              animi optio ut iure! Incidunt, in. Excepturi cum quasi vitae,
              autem officia deserunt incidunt quisquam dignissimos odio quia
              exercitationem recusandae earum sapiente rem assumenda quibusdam
              aperiam nesciunt nobis! Magnam dolor culpa unde vel est. Mollitia,
              fugit. Minima nemo, aliquam eos consequatur laboriosam amet
              voluptas ad quo rerum unde! Ab sit iure libero explicabo illum ex,
              alias temporibus eius quaerat quo. Qui nemo voluptates quam
              laboriosam eaque. Vel sunt incidunt facilis ratione. Nam sunt
              velit, nulla porro aliquam doloremque distinctio inventore
              adipisci laboriosam ipsam laudantium ab, rem quidem? Ullam facilis
              saepe magni laboriosam error, doloribus laborum quia.
            </div>
          </section>
          <section className="second">
            <div className="contentContainer">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deleniti, eum quaerat facilis dignissimos atque impedit ratione
              cupiditate dicta cum nesciunt temporibus, asperiores odit veniam
              animi optio ut iure! Incidunt, in. Excepturi cum quasi vitae,
              autem officia deserunt incidunt quisquam dignissimos odio quia
              exercitationem recusandae earum sapiente rem assumenda quibusdam
              aperiam nesciunt nobis! Magnam dolor culpa unde vel est. Mollitia,
              fugit. Minima nemo, aliquam eos consequatur laboriosam amet
              voluptas ad quo rerum unde! Ab sit iure libero explicabo illum ex,
              alias temporibus eius quaerat quo. Qui nemo voluptates quam
              laboriosam eaque. Vel sunt incidunt facilis ratione. Nam sunt
              velit, nulla porro aliquam doloremque distinctio inventore
              adipisci laboriosam ipsam laudantium ab, rem quidem? Ullam facilis
              saepe magni laboriosam error, doloribus laborum quia.
            </div>
            <img
              className="imageContainer"
              src="https://images.unsplash.com/photo-1624281549236-111ac9c8fd73?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              height="400"
              width="400"
            />
          </section>
        </div>
        {/* <Slider /> */}
        <div className="vector">
          <div className="wave wave1"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
