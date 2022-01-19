import React from "react"
import "./Home.css"
import PopUp from "../popup/PopUp"
import { Link } from "react-router-dom"


const Home = () => {





  return (
    <>

      <PopUp />
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <Link to="/sign-up" className="link" >
              Sign Up!
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="link" >
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <header className="header">
        <h1>Social App</h1>
      </header>

      <section className="feed-section">
        <h3>Have a look at the feed of other users!</h3>

        <div className="feed">
          [feed other users]
        </div>
      </section>

      <footer className="footer">
        © 2022 by Jeziorna Urszula Inc.
      </footer>
    </>
  )
}

export default Home