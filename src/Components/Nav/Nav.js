import React from 'react';
import { FaDog } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <div className="nav-items-container">
        <div id="logo">
          <span>
            <FaDog />
            {' '}
            <i id="name">
              Do
              <i id="scname">ggy</i>
            </i>
          </span>
        </div>
        <div id="menu">
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
}
