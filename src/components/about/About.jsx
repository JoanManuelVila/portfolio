import './about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
        <div className="left">
          <div className="wrapper">
            <h1>About Me.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, libero tempora blanditiis excepturi vero laborum dolore, dicta quam placeat fugiat possimus, voluptas odit consectetur quasi mollitia vel deserunt. Repellat incidunt soluta accusantium modi. Pariatur ratione facere nulla accusantium aspernatur, maxime nam dolores eius quo nobis recusandae eligendi voluptatem reiciendis reprehenderit.</p>
          </div>
        </div>
        <div className="right">
            <div className="imgContainer">
                <img src="assets/man2.png" alt="" />
            </div>
        </div>
    </div>
  )
}