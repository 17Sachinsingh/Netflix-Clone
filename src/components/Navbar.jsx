import React from 'react'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <div className='main' >
        <h2 className='netflix'>NETFLIX</h2>
      <li className="list">
        <ul className="home">Home</ul>
        <ul className="tvshows">TV shows</ul>
        <ul className="movies">Movies</ul>
        <ul className="recent">Recently added</ul>
      </li>
    </div>
  )
}

export default Navbar
