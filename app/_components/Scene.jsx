"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { BlackBird, Mountain, Pig, RedBird, Sign, YellowBird } from ".";
import LeftIcon from "@/public/assets/LeftIcon";
import RightIcon from "@/public/assets/RightIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";

const Scene = () => {
  gsap.registerPlugin(MotionPathPlugin);
  const [targetBird, setTargetBird] = useState(1);
  const [direction, setDirection] = useState("right");
  useEffect(() => {}, [targetBird, direction]);
  const previousTargetBird = () => {
    setDirection("left");
    setTargetBird((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextTargetBird = () => {
    setDirection("right");
    setTargetBird((prev) => (prev === 2 ? 0 : prev + 1));
  };
  const positionBtnSetBird = (bird) => {
    switch (bird) {
      case "RedBird":
        setTargetBird(0);
        return;
      case "BlackBird":
        setTargetBird(1);
        return;
      case "YellowBird":
        setTargetBird(2);
        return;
    }
  };
  const getSlideStyle = (index) => {
    if (targetBird === 2 && index === 0 && direction === "right") {
      return { transform: `translateX(${3 * 500}px)` };
    }
    if (targetBird === 0 && index === 2 && direction === "right") {
      return { transform: `translateX(${3 * -500}px)` };
    }
    if (targetBird === 0 && index === 2 && direction === "left") {
      return { transform: `translateX(${3 * -500}px)` };
    }
    if (targetBird === 2 && index === 0 && direction === "left") {
      return { transform: `translateX(${3 * 500}px)` };
    }
    return { transform: `translateX(${0}px) ` }; // Default position
  };

  useLayoutEffect(() => {
    const fencesLeft = gsap.utils.toArray(".fence-l");
    const fencesRight = gsap.utils.toArray(".fence-r");
    const grounds = gsap.utils.toArray(".ground");
    const mountains = gsap.utils.toArray(".mountain");
    const pigs = gsap.utils.toArray(".pig");
    const redBirds = gsap.utils.toArray(".birdRed.inScene");
    const wallsL = gsap.utils.toArray(".wall-l").reverse();
    const wallsR = gsap.utils.toArray(".wall-r").reverse();
    const statRows = gsap.utils.toArray(".stat-row");

    const parent = document.querySelector(".background");
    const parentWidth = parent.getBoundingClientRect().width;
    const clouds = gsap.utils.toArray(".cloud");
    const clouds2ndWave = gsap.utils.toArray(".cloud2ndWave");

    const originalHeights = [110, 100, 80, 75, 60];
    let availableHeights = [...originalHeights];
    let availableHeights2 = [...originalHeights];

    const timeline = gsap.timeline();

    const animateElements = (targets, from, to, delay = "<") => {
      timeline.fromTo(
        targets,
        from,
        { ...to, stagger: { each: to.staggerEach || 0 } },
        delay
      );
    };

    // Animate fences
    animateElements(
      fencesLeft,
      { y: 200, x: -330 },
      { x: 0, y: 0, duration: 1, ease: "slow", staggerEach: 0.5 }
    );
    animateElements(
      fencesRight,
      { y: 200, x: 330 },
      { x: 0, y: 0, duration: 1, ease: "slow", staggerEach: 0.5 },
      "<"
    );

    // Animate walls
    animateElements(
      wallsL,
      { y: -50, opacity: 0, rotate: 20 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        rotate: 0,
        ease: "power3.in",
        staggerEach: 0.2,
      },
      "<+0.3"
    );
    animateElements(
      wallsR,
      { y: -50, opacity: 0, rotate: 20 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        rotate: 0,
        ease: "power3.in",
        staggerEach: 0.2,
      },
      "<+0.3"
    );

    // Animate static elements
    const staticAnimations = [
      {
        target: ".platform",
        from: { opacity: 0, y: 20 },
        to: { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
      },
      {
        target: ".slingshot-container",
        from: { opacity: 0, y: 40 },
        to: { y: 0, opacity: 1, duration: 1.5, ease: "power2.inOut" },
      },
      {
        target: ".wooden-sign",
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" },
      },
      {
        target: ".focused",
        from: { opacity: 0 },
        to: { opacity: 1, duration: 1, ease: "power3.inOut" },
      },
      {
        target: ".selection",
        from: { opacity: 0 },
        to: { opacity: 1, duration: 1, ease: "power3.inOut" },
      },
      {
        target: ".sign-outter-container",
        from: { opacity: 0, y: 130, rotate: 180 },
        to: { opacity: 1, rotate: 0, y: 0, duration: 1, ease: "power3.inOut" },
        delay: "<",
      },
    ];

    staticAnimations.forEach(({ target, from, to, delay = "<+0.3" }) => {
      animateElements(target, from, to, delay);
    });

    // Animate staggered elements
    const staggeredAnimations = [
      {
        target: mountains,
        from: { y: 500, opacity: 0 },
        to: {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power1.in",
          staggerEach: 0.1,
        },
      },
      {
        target: pigs,
        from: { opacity: 0 },
        to: { opacity: 1, duration: 1, ease: "power2.inOut", staggerEach: 0.5 },
        delay: "<+0.8",
      },
      {
        target: redBirds,
        from: { opacity: 0 },
        to: { opacity: 1, duration: 1, ease: "power2.inOut", staggerEach: 0.5 },
        delay: "<+0.8",
      },
      {
        target: statRows,
        from: { opacity: 0, x: -50 },
        to: {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.inOut",
          staggerEach: 0.5,
        },
        delay: "<+0.4",
      },
    ];

    staggeredAnimations.forEach(({ target, from, to, delay }) => {
      animateElements(target, from, to, delay);
    });

    // Animate moving object
    timeline.to(".onPlatform0", {
      duration: 2,
      delay: 3,
      repeat: -1,
      repeatDelay: 3,
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 450, y: -250 },
          { x: 1500, y: 500 },
        ],
        curviness: 3.5,
      },
      ease: "circ.in",
    });

    clouds.forEach((box, i) => {
      // Randomly select a height without repetition
      if (availableHeights.length === 0) {
        availableHeights = [...originalHeights]; // Reset to original state if all heights are used
      }
      const randomIndex = Math.floor(Math.random() * availableHeights.length);
      const selectedHeight = availableHeights.splice(randomIndex, 1)[0];

      const startX = -Math.random() * 500;
      const startY = Math.floor(Math.random() * 501); // Random Y position between 0 and 500
      const distance = parentWidth;
      const cloudSpeed = Math.random() * (40 - 20) + 20;
      const duration = distance / cloudSpeed;
      const shadeOfWhite = `rgb(${240 + Math.random() * 15}, ${
        240 + Math.random() * 15
      }, ${240 + Math.random() * 15})`;

      // Set initial position and height
      gsap.set(box, {
        x: startX,
        y: startY,
        height: selectedHeight,
        backgroundColor: shadeOfWhite,
      });

      const tl = gsap.timeline({
        repeat: -1,
        delay: i * 2, // Stagger based on index
      });

      tl.to(box, { opacity: 1, duration: 1 }) // Fade in
        .to(box, { x: parentWidth, duration: duration, ease: "linear" }); // Move across screen at constant speed
    });
    clouds2ndWave.forEach((box, i) => {
      // Randomly select a height without repetition
      if (availableHeights2.length === 0) {
        availableHeights2 = [...originalHeights]; // Reset to original state if all heights are used
      }
      const randomIndex = Math.floor(Math.random() * availableHeights2.length);
      const selectedHeight = availableHeights2.splice(randomIndex, 1)[0];

      const startX = -Math.random() * 500;
      const startY = Math.floor(Math.random() * 501); // Random Y position between 0 and 500
      const distance = parentWidth;
      const cloudSpeed = Math.random() * (40 - 20) + 20;
      const duration = distance / cloudSpeed;
      const shadeOfWhite = `rgb(${240 + Math.random() * 15}, ${
        240 + Math.random() * 15
      }, ${240 + Math.random() * 15})`;

      // Set initial position and height
      gsap.set(box, {
        x: startX,
        y: startY,
        height: selectedHeight,
        backgroundColor: shadeOfWhite,
      });

      const tl = gsap.timeline({
        repeat: -1,
        delay: 5 + i * 2, // Stagger based on index
      });

      tl.to(box, { opacity: 1, duration: 1 }) // Fade in
        .to(box, { x: parentWidth, duration: duration, ease: "linear" }); // Move across screen at constant speed
    });
  }, []);
  return (
    <>
      <section className="background">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
        <div className="cloud cloud4"></div>
        <div className="cloud cloud5"></div>
        <div className="cloud cloud2ndWave cloud1"></div>
        <div className="cloud cloud2ndWave cloud2"></div>
        <div className="cloud cloud2ndWave cloud3"></div>
        <div className="cloud cloud2ndWave cloud4"></div>
        <div className="cloud cloud2ndWave cloud5"></div>
        <Mountain
          width={1500}
          height={1050}
          left={520}
          color1="#abdecf"
          color2="#f2f3ea"
        />
        <Mountain
          width={1500}
          height={900}
          left={920}
          color1="#abdecf"
          color2="#f2f3ea"
        />

        <Mountain
          width={1500}
          height={900}
          left={-450}
          color1="#abdecf"
          color2="#f2f3ea"
        />
        <Mountain width={1000} height={860} left={-500} />

        <Mountain
          width={1200}
          height={1000}
          left={-930}
          color1="#24b2a4"
          color2="#61c2b1"
        />
        <Mountain
          color1="#0f476b"
          color2="#0f6480"
          height={600}
          width={1300}
          left={-630}
        />
        <Mountain
          width={1200}
          height={990}
          left={50}
          color1="#24b2a4"
          color2="#61c2b1"
        />
        <Mountain width={1000} height={800} left={400} />
        <Mountain width={1400} height={750} left={680} />
        <Mountain
          width={1000}
          height={790}
          left={1200}
          color1="#24b2a4"
          color2="#61c2b1"
        />
        <Mountain
          color1="#0f476b"
          color2="#0f6480"
          height={550}
          width={1500}
          left={60}
        />
        <Mountain
          color1="#0f476b"
          color2="#0f6480"
          height={650}
          width={1000}
          left={650}
        />
        <Mountain
          color1="#0f476b"
          color2="#0f6480"
          height={690}
          width={1200}
          left={950}
        />
        <Mountain
          width={1200}
          height={990}
          left={1450}
          color1="#24b2a4"
          color2="#61c2b1"
        />
        <Mountain width={1100} height={950} left={1850} />
        <Mountain
          width={1200}
          height={1100}
          left={2150}
          color1="#24b2a4"
          color2="#61c2b1"
        />
        <Mountain
          color1="#0f476b"
          color2="#0f6480"
          height={680}
          width={1400}
          left={1750}
        />
      </section>
      <section className="scene">
        <div className="wooden-sign-container">
          <div className="wooden-sign">
            <div className="chain chain-left">
              <div className="link"></div>
            </div>
            <div className="chain chain-right">
              <div className="link"></div>
            </div>
            <div className="wooden-board flex justify-between">
              <div className="nail"></div>
              <div className="nail"></div>
            </div>
            <div className="wooden-board"></div>
            <div className="title font-angryBirdsFont italic text-[88px]">
              ANGRY BIRDS
            </div>
          </div>
        </div>

        <div className="selection">
          <button className="selection-btn" onClick={previousTargetBird}>
            <LeftIcon />
          </button>
          <div className="flex items-center gap-6">
            <div className="position-btn-container">
              <div
                className={`position-btn ${
                  targetBird === 0 ? "position-btn-active" : ""
                }`}
                onClick={() => positionBtnSetBird("RedBird")}
              ></div>
            </div>
            <div className="position-btn-container">
              <div
                className={`position-btn ${
                  targetBird === 1 ? "position-btn-active" : ""
                }`}
                onClick={() => positionBtnSetBird("BlackBird")}
              ></div>
            </div>
            <div className="position-btn-container">
              <div
                className={`position-btn ${
                  targetBird === 2 ? "position-btn-active" : ""
                }`}
                onClick={() => positionBtnSetBird("YellowBird")}
              ></div>
            </div>
          </div>
          <button className="selection-btn" onClick={nextTargetBird}>
            <RightIcon />
          </button>
        </div>
        <Sign index={targetBird} />
        <div className="left-side">
          <div className="slingshot-container">
            <div className="slingshot"></div>
          </div>
          <RedBird position={"inScene onPlatform0"} focus={"blink-slow-3"} />
          <RedBird position={"inScene onPlatform1"} focus={"blink-slow-1"} />
          <RedBird position={"inScene onPlatform2"} focus={"blink-slow-2"} />
          <RedBird position={"inScene offPlatform"} focus={"blink-slow-3"} />
          <div className="platform">
            <div className="platforms platform1">
              <div className="platforms-walls"></div>
            </div>
            <div className="platforms platform2">
              <div className="platforms-walls"></div>
            </div>
            <div className="platforms platform3">
              <div className="platforms-walls platforms-walls-last"></div>
            </div>
          </div>
          <div className="foundation"></div>
          <div className="foundation foundation-scene-far-left"></div>
          <div className="foundation foundation-scene-left"></div>
        </div>
        <div className="right-side">
          <Pig position={"pig-rightTarget"} index={0} />
          <div className="target">
            <div className="wall-left">
              <div className="wall wall-l"></div>
              <div className="wall wall-l"></div>
              <div className="wall wall-l"></div>
              <div className="wall wall-l"></div>
            </div>
            <Pig position={"pig-aboveTarget"} index={1} />

            <Pig position={"pig-target"} index={2} />
            <div className="wall wall-r wall-top"></div>

            <div className="wall-right">
              <div className="wall wall-r"></div>
              <div className="wall wall-r"></div>
              <div className="wall wall-r"></div>
              <div className="wall wall-r"></div>
            </div>
          </div>
          <div className="foundation"></div>
          <div className="foundation foundation-scene-far-right"></div>
          <div className="foundation foundation-scene-right"></div>
        </div>

        <div className="container">
          <div
            className="slides"
            style={{
              transform: `translateX(-${targetBird * 500}px)`,
            }}
          >
            <div className={`slide `} style={getSlideStyle(0)}>
              <RedBird
                focus={targetBird === 0 ? "blink" : ""}
                position={targetBird === 0 ? "slide focused" : "slide unfocus"}
              />
            </div>
            <div className={`slide`} style={getSlideStyle(1)}>
              <BlackBird
                focus={targetBird === 1 ? "blink" : ""}
                position={targetBird === 1 ? "slide focused" : "slide unfocus"}
              />
            </div>
            <div className={`slide `} style={getSlideStyle(2)}>
              <YellowBird
                focus={targetBird === 2 ? "blink" : ""}
                position={targetBird === 2 ? "slide focused" : "slide unfocus"}
              />
            </div>
          </div>
        </div>
        <div className="ground-full"></div>
        <div className="ground ground-center"></div>
        <div className="ground ground-left"></div>
        <div className="ground ground-right"></div>
        <div className="fence fence-l fence-left">
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
        </div>
        <div className="fence fence-l fence-left-02">
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
        </div>
        <div className="fence fence-l fence-left-03">
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
        </div>
        <div className="info-sign"></div>
        <div className="fence fence-r fence-right">
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
        </div>
        <div className="fence fence-r fence-right-02">
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
        </div>
        <div className="fence fence-r fence-right-03">
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
          <div className="fences"></div>
        </div>
      </section>
    </>
  );
};

export default Scene;
