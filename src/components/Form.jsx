import React, { useState } from 'react'
import axios from "axios";

export const Form = ({handleIsUpdate}) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!(name && message)) {
      alert("Fill all the fields")
      return
    }

    if (name.length < 3) {
      alert("Name should atleast 3 characters")
      return
    }

    if (message.length < 10) {
      alert("Message should atleast of 10 characters")
      return
    }

    await axios.post(
      "https://loki-pager-default-rtdb.asia-southeast1.firebasedatabase.app/message.json",
      { name, message }
    )

    setName('')
    setMessage('')
    handleIsUpdate()
  }

  return (
    <form onSubmit={handleSubmit} style={styles.card}>

      <div style={styles.inputGroup}>
        <span style={styles.icon}>👤</span>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <span style={styles.icon}>✉️</span>
        <input
          type="text"
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
        />
      </div>

      <button
        type="submit"
        style={styles.button}
        onMouseOver={(e) => e.target.style.opacity = "0.8"}
        onMouseOut={(e) => e.target.style.opacity = "1"}
      >
        Send 🚀
      </button>

    </form>
  )
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "20px"
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "10px",
    padding: "10px",
    backdropFilter: "blur(10px)"
  },
  icon: {
    marginRight: "8px"
  },
  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#fff",
    width: "100%",
    fontSize: "14px"
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#fff",
    color: "#667eea",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  }
}