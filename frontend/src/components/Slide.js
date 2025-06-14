import React, { useEffect, useRef, useState } from 'react'

const Slide = ({slides}) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const leftStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "12px",
    fontSize: '30px',
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "12px",
    fontSize: '30px',
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: "ease-in-out 2s",
  };

  const dotsContainStyles = {
    display: "flex",
    justifyContent: "center",
  }

  const dotStyle = {
    margin: "0px 5px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
  }

  const prev = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const next = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  useEffect(() => {
    if (timerRef.current) {
  }
  timerRef.current = setTimeout(() => {
    next();
  }, 4000);
})

  return (
    <div style={sliderStyle}>
      <div style={leftStyles} onClick={prev}>⮜</div>
      <div style={rightStyles} onClick={next}>⮞</div>
      <div style={slideStyle}></div>
      <div style={dotsContainStyles}>
        {slides.map((slide, slideIndex) => (
          <div style={dotStyle} key={slideIndex} onClick={() => goSlide(slideIndex)}>o</div>
        ))}
      </div>
    </div>
  )
}

export default Slide