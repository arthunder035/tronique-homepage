"use client";
import React, { useEffect } from "react";
import "../styles/homepage.css";
import img1 from "../public/Illustration (3) 1.svg";
import img2 from "../public/Rectangle 10.svg";
import img3 from "../public/Rectangle 11.svg";
import img4 from "../public/Rectangle 12.svg";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease", // Easing option
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="mainpage">
      <div className="blank"></div>

      <div className="sections">
        <div className="div1">
          <div className="content">
            <h1 className="header1-1">TroniQue:</h1>
            <h1 className="header1-2">
              Simplifying Tron and
              <br /> Empowering Users <br />
              with TroniQue
            </h1>
            <p className="p-1">
              Navigate the world of TRON with
              <br />
              unmatched ease and insight
            </p>
          </div>
          <div className="image">
            <Image
              src={img1}
              alt="img1"
              className="img1"
              loading="lazy"
            ></Image>
          </div>
        </div>

        <div
          className="div1"
          data-aos="fade-down-right"
          data-aos-offset="10"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="content">
            <h2 className="header2-1">Community Pulse</h2>
            <h4 className="header2-2">Explore the Pulse of the Community</h4>
            <p className="p-2">
              Dive into the vibrant discussions and gain deep insights from{" "}
              <br />
              the TRON DAO Forum. With TroniQue, you can effortlessly
              <br /> search and analyze conversations to stay on top of the
              latest
              <br /> topics, community opinions, and key discussions.
            </p>
            <button
              className="started-button"
              onClick={() =>
                window.open("https://forum.tronique.info", "_blank")
              }
            >
              Get Started <IoIosArrowRoundForward className="right" />
            </button>
          </div>
          <div className="image">
            <Image
              src={img2}
              alt="img2"
              className="img1"
              loading="lazy"
            ></Image>
          </div>
        </div>

        <div
          className="div2"
          data-aos="fade-down-left"
          data-aos-offset="30"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="content">
            <h2 className="header2-1">Market Dynamics</h2>
            <h4 className="header2-2">
              Track and Analyze Decentralized
              <br />
              Exchanges with Ease
            </h4>
            <p className="p-2">
              Stay ahead in the dynamic world of decentralized trading
              <br />
              on the TRON network. TroniQue provides real-time data <br /> and
              sophisticated analytics for all DEX trades. Understand
              <br /> market movements, track energy usage, and analyze
              <br />
              trade patterns to make informed decisions.
            </p>
            <button
              className="started-button"
              onClick={() =>
                window.open("https://trades.tronique.info", "_blank")
              }
            >
              Get Started <IoIosArrowRoundForward className="right" />
            </button>
          </div>
          <div className="image">
            <Image
              src={img3}
              alt="img3"
              className="img1"
              loading="lazy"
            ></Image>
          </div>
        </div>

        <div
          className="div1"
          data-aos="fade-down-right"
          data-aos-offset="10"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="content">
            <h2 className="header2-1">Documentation Gateway</h2>
            <h4 className="header2-2">
              Access All Essential Information in One Place
            </h4>
            <p className="p-2">
              Navigate the TRON ecosystems complexities effortlessly with
              <br /> TroniQue. Just type in a query—be it technical
              specifications,
              <br /> developer guides, or operational details—and our AI-driven
              <br /> system retrieves the information instantly. Its like having
              a<br /> knowledgeable guide right at your fingertips, making sure
              you
              <br /> get the precise data you need without the usual hassle.
            </p>
            <button
              className="started-button"
              onClick={() =>
                toast("Coming Soon 🚀", {
                  duration: 1000,
                })
              }
            >
              Get Started <IoIosArrowRoundForward className="right" />
            </button>
          </div>
          <div className="image">
            <Image
              src={img4}
              alt="img4"
              className="img1"
              loading="lazy"
            ></Image>
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "14px",
            backgroundColor: "#d2d0d0",
            color: "#000",
            boxShadow: "none",
            borderRadius: "50px",
            padding: "3px 5px",
          },
        }}
      />
    </div>
  );
};

export default Homepage;
