import { useState } from 'react'
import './works.scss'

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: "1",
      icon: './assets/mobile.png',
      title: 'Web Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.',
      img: 'https://www.researchgate.net/profile/Abdurhman-Albasir/publication/273395974/figure/fig15/AS:667893515702279@1536249631791/Example-of-webpage-contents.png'
    },
    {
      id: "2",
      icon: './assets/globe.png',
      title: 'Mobile application',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.',
      img: 'https://www.researchgate.net/profile/Abdurhman-Albasir/publication/273395974/figure/fig15/AS:667893515702279@1536249631791/Example-of-webpage-contents.png'
    },
    {
      id: "3",
      icon: './assets/writing.png',
      title: 'Branding',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.',
      img: 'https://www.researchgate.net/profile/Abdurhman-Albasir/publication/273395974/figure/fig15/AS:667893515702279@1536249631791/Example-of-webpage-contents.png'
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='works'>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (

          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="https://www.researchgate.net/profile/Abdurhman-Albasir/publication/273395974/figure/fig15/AS:667893515702279@1536249631791/Example-of-webpage-contents.png" alt="" />
              </div>
            </div>
          </div>

        ))}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleClick()} />
    </div>
  )
}