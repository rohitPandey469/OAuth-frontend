// Slider.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button"
import styles from "./Carousel.module.css";

function Slider() {
  return (
    <div className={styles.dibba}>
    <Carousel className={styles.container} interval={5000}>
      <Carousel.Item className={styles.imgContainer}>
        <img
          className={styles.images}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="/images/carousel.png"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.imgContainer}>
        <img
          className={styles.images}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="/images/carousel.png"
        />
        
      </Carousel.Item>
      <Carousel.Item className={styles.imgContainer}>
        <img
          className={styles.images}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="/images/carousel.png"
        />
      </Carousel.Item>
    </Carousel>
    <Button className={`btn ${styles.button}`}>
        <p className={styles.text}>JOIN US</p>
    </Button>
    </div>
  );
}

export default Slider;
