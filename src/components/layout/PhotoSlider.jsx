import './PhotoSlider.css'
import { useState, useEffect, useRef } from 'react';
import IMAGENS from './Images';


const delay = 3000;


function PhotoSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === IMAGENS.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="photo-slide">
      <div className="photo-slide-slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {IMAGENS.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt="slide" className='slide-image'/>
          </div>
        ))}
      </div>

      <div className="slide-show-dots">
        {IMAGENS.map((_, idx) => (
          <div
            key={idx}
            className={`slide-show-dot${index === idx ? " dot-active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default PhotoSlider;

