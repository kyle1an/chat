import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

export const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 className="mb-0">
        Live Chat<br />
        Application
      </h1>
      <h3>
        created by tchellyang<br />
        using React, Express,<br />
        Node, and Socket.io
      </h3>
    </div>
    {users ? (
      <div>
        <h3>User Chatting</h3>
        <div className="activeContainer flex items-center mb-[50%]">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="flex items-center">
                {name}<img alt="Online Icon" src={onlineIcon} className="pl-2.5" />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);
