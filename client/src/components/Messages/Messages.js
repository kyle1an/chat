import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Message } from './Message/Message';

export const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages py-[5%] overflow-auto flex-auto">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);
