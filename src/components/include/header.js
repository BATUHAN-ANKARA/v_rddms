"use client";

import React from 'react';
 
const Header = ({ onProfileClick, onSearchClick }) => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="profile" onClick={onProfileClick}>
        Profile
      </div>
      <div className="search" onClick={onSearchClick}>
        Search
      </div>
    </div>
  );
}

export default Header;
