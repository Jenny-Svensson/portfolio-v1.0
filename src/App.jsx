import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

import { Parallax, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://images.hdqwalls.com/wallpapers/auroral-forest-4k-illustration-h0.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
          <div className="headtitle" data-swiper-parallax="-400">
              Welcome,
          </div>
          <div className="title" data-swiper-parallax="-300">
            I'm Jenny Svensson
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            soon-to-be Frontend Developer.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="info-p">
              I'm currently studying to become a <span class="frontend-p">Frontend Developer</span> @ Medieinstitutet in Sweden. 
              A curious person with an eye for design, accessibility and usability. Really enjoy learning new things
              and find new creative solutions. Like to work in a structured way and always make sure to complete what I've started.
            </p>
            <p className="info-p">
              Other than that, i love spending my time at the gym lifting weights. And if not, i love to read a good detective book or 
              try a new recipe to cook for family and friends. 

              <p>&#128205; Located in: Malmö, Sweden</p>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>

          <div className="headtitle" data-swiper-parallax="-400">
              Experience
          </div>

          <div className="subtitle" data-swiper-parallax="-200">
            Skills
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>tags</p>
          </div>

          <div class="parent-grid">
            <div className="text" data-swiper-parallax="-100">
              <h3 className="subtitle">Education</h3>
                <p><strong>Frontend Developer</strong> <br></br>
                Medieinstitutet (2022 - current)</p>
                <p><strong>Information Architect</strong> <br></br>
                Malmö University (2013-2016)</p>
                <p><strong>Social Science/Economics</strong> <br></br>
                Sunnerbogymnasiet (2009-2012)</p>
            </div>

            <div className="text" data-swiper-parallax="-100">
            <h3 className="subtitle">Work</h3>
              <p>Casino Cosmopol<br></br>
              Senior Casino Associate Trainer (2017-current)</p>
              <p>AlphaGeek AB<br></br>
              Warehouse Manager (2017)</p>
              <p>Randstad <br></br>
              Warehouse worker (2017)</p>
              <p>Cherry Spelglädje AB <br></br>
              Croupier (2015 - 2017)</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="headtitle" data-swiper-parallax="-400">
              Projects
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Projects
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="headtitle" data-swiper-parallax="-400">
              Contact
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Let's connect.
          </div>
          <div className="text" data-swiper-parallax="-100">
            <div className="socialmedia-icons" data-swiper-parallax="-100">
              <a href="https://github.com/Jenny-Svensson"><i class="fa-brands fa-github-alt"></i></a>
              <a href="linkedin.com/in/jenny-svensson-210376157"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="mailto:jenny.svensson@medieinstitutet.se"><i class="fa-regular fa-envelope"></i></a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
