"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResponse("Nothing to look here");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #007bb5",
              marginBottom: "10px",
              color: "black",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bb5",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
        {response && (
          <p
            style={{
              marginTop: "20px",
              color: "#007bb5",
              textAlign: "center",
            }}
          >
            {response}
          </p>
        )}
      </div>
    </div>
  );
}
