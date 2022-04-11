import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';
import dayjs from 'dayjs'

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)
const clock = dayjs().format('ddd, MMM D, YYYY h:mm:ss A')
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
        {/*{clock}*/}
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
