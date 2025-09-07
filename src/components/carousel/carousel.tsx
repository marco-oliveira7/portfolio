import { useEffect, useRef, useState, useCallback } from "react";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/components/carousel/carousel.module.css";
import chatProject from "@/assets/chat.svg";
import pomoProject from "@/assets/focus.png";
import marketProject from "@/assets/market.svg";

const Carousel: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(200);
  const [currIndex, setCurrIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const items = [
    {
      img: chatProject,
      link: "https://github.com/marco-oliveira7/chat-app",
      text: "Online Chat",
    },
    {
      img: pomoProject,
      link: "https://github.com/marco-oliveira7/Pomodoro-App",
      text: "Minimalist Pomodoro",
    },
    {
      img: marketProject,
      link: "https://github.com/marco-oliveira7/Market-List-app",
      text: "Market List",
    },
  ];

  const [margin, setMargin] = useState(20);
  const intervalTime = 4000;

  // Resize handler
  const resize = useCallback(() => {
    const w = Math.max(window.innerWidth * 0.2);
    const h = window.innerHeight * 0.34;
    setWidth(w);
    setHeight(h);
    if (window.innerWidth <= 768) {
      setMargin(0);
    } else {
      setMargin(20);
    }
  }, []);

  // Mover slides
  const move = useCallback(
    (index: number) => {
      let newIndex = index;
      if (index < 0) newIndex = items.length - 1;
      if (index >= items.length) newIndex = 0;
      setCurrIndex(newIndex);
    },
    [items.length]
  );

  // Timer auto-slide
  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % items.length);
    }, intervalTime);
  }, [intervalTime, items.length]);

  // Resize listener
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  // Auto-play
  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  return (
    <div className="absolute w-full top-40">
      <div className={styles.carousel}>
        <div className={styles.carousel__body}>
          {/* Prev */}
          <div
            className={styles.carousel__prev}
            onClick={() => {
              move(currIndex - 1);
              startTimer();
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          {/* Next */}
          <div
            className={styles.carousel__next}
            onClick={() => {
              move(currIndex + 1);
              startTimer();
            }}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          {/* Slider */}
          <div
            ref={sliderRef}
            className={`${styles.carousel__slider}`}
            style={{
              width: `${width * items.length}px`,
              transform: `translate3d(${
                currIndex * -width + window.innerWidth / 2 - width / 2
              }px, 0, 0)`,
            }}
          >
            {items.map((item, i) => {
              const isActive = i === currIndex;
              const rotate =
                i < currIndex ? "rotateY(40deg)" : "rotateY(-40deg)";
              return (
                <div
                  key={i}
                  className={`${styles.carousel__slider__item} ${
                    isActive ? styles["carousel__slider__item--active"] : ""
                  }`}
                  style={{
                    width: `${width - margin * 2}px`,
                    height: `${height}px`,
                  }}
                >
                  <div
                    className={styles["item__3d-frame"]}
                    style={{
                      transform: isActive
                        ? "perspective(1200px)"
                        : `perspective(1200px) ${rotate}`,
                    }}
                  >
                    <div
                      className={`${styles["item__3d-frame__box"]} ${styles["item__3d-frame__box--front"]}`}
                    >
                      <a href={item.link} target="_blank" className="">
                        <img src={item.img} className={`scale-50 `} alt="" />
                      </a>
                    </div>
                    <div
                      className={`${styles["item__3d-frame__box"]} ${styles["item__3d-frame__box--left"]}`}
                    ></div>
                    <div
                      className={`${styles["item__3d-frame__box"]} ${styles["item__3d-frame__box--right"]}`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
