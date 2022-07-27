import React from "react"
import { Logo } from "../components"
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            culpa aliquid totam nisi quo. Voluptas nihil debitis, exercitationem
            labore beatae sit consequuntur doloribus. Ullam vitae ipsum, sequi
            cumque adipisci consequatur.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
