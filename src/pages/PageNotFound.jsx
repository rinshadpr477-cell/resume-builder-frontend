import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    <>
      <section style={{
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
        position: "relative"
      }}>
        <div className="box-of-star1">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star2">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star3">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star4">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div data-js="astro" className="astronaut"style={{top:'20%'}}>
          <div className="head"></div>
          <div className="arm arm-left"></div>
          <div className="arm arm-right"></div>
          <div className="body">
            <div className="panel"></div>
          </div>
          <div className="leg leg-left"></div>
          <div className="leg leg-right"></div>
          <div className="schoolbag"></div>
        </div>
       <div style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            zIndex: 10,
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
          }}>
          <h1 style={{  fontSize: "4rem",
            letterSpacing: "5px",
            textTransform: "uppercase",}}>
            404 - Lost in Space
          </h1>
          <Link to={'/'}><button className='btn btn-light mt-3 px-5 py-2'>Go Home</button></Link>
       </div>
      </section>
    </>
  )
}

export default PageNotFound
