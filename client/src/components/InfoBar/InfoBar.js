import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

export const InfoBar = ({ room }) => (
  <div className="infoBar flex items-center justify-between w-full h-[60px]">
    <div className="leftInnerContainer mr-[5%] flex grow-[0.5] items-center">
      <img className="mr-[5%]" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer mr-[5%] flex grow-[0.5] justify-end">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);
