import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Weather App{" "}<CloudIcon /></Link>
        <span className="navbar-text">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home{" "}<HomeIcon /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weather">Weather{" "}<ThunderstormIcon /></Link>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  )
}