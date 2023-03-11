import React, { useState } from "react";
import "./index.css";

function Openai() {
  const [chats, setChats] = useState([]);
  const [value, setValue] = useState("");

  const press = (e) => {
    if (e.key === "Enter") {
      setChats([...chats, { type: "user", message: e.target.value }]);
      setValue("");
      fetch("http://localhost:8080", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: value,
        }),
      })
        .then((res) => res.json())
        .then((res) => setChats((ch) => [...ch, { type: "ai", message: res }]));
    }
  };
  return (
    <div className="container">
      <div className="sidebar">
        <div className="button">+ New chat</div>
      </div>
      <div className="body">
        <div className="wrapper">
          <div className="main">
            {chats.map((value) => {
              return <div className={value.type}>{value.message}</div>;
            })}
          </div>
          <div className="footer">
            <input
              type="text"
              placeholder="what yout want search"
              value={value}
              onKeyDown={press}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Openai;
