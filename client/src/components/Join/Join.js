import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

export const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuterContainer flex">
            <div className="joinInnerContainer w-[90%] sm:w-1/5">
                <h1 className="heading text-[2.5em] pb-2.5">Join</h1>
                <div>
                    <input
                        placeholder="Name"
                        className="joinInput"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder="Room"
                        className="joinInput mt-5"
                        type="text"
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </div>
                <Link
                    onClick={(e) => !name || !room ? e.preventDefault() : null}
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button className={"button mt-5"} type="submit">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
};
