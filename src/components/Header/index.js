import './index.css'

import {FiGlobe} from 'react-icons/fi'

import {GoThreeBars} from 'react-icons/go'

import {HiUserCircle} from 'react-icons/hi'

const Header = () => (
  <div className="header-container">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
      alt="pic"
      className="airbnb-logo"
    />
    <div className="header">
      <p className="heading">Become a host</p>
      <FiGlobe />
      <div className="hamburger">
        <div className="hamburger-icon">
          <GoThreeBars />
        </div>
        <div className="user-icon">
          <HiUserCircle />
        </div>
      </div>
    </div>
  </div>
)

export default Header
