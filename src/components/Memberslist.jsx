import { useState, useEffect } from 'react';
import axios from 'axios';

export const Memberslist = ({isupdate}) => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    axios.get('https://loki-pager-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
      .then(response => {
        if (!response.data) return;

        let messageList = Object.values(response.data);
        messageList.reverse();

        let messageListDisplay = messageList.slice(0, 5);
        setMemberList(messageListDisplay);
      })
      .catch(err => console.log(err));
  }, [isupdate]);

  return (
    <div style={styles.container}>
      {memberList.length === 0 ? (
        <p style={{ textAlign: "center" }}>No messages yet 😢</p>
      ) : (
        memberList.map((msg, index) => (
          <div key={index} style={styles.messageCard}>
            <div style={styles.name}>{msg.name}</div>
            <div style={styles.message}>{msg.message}</div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxHeight: "250px",
    overflowY: "auto",
    padding: "5px",
     scrollbarWidth: "none",        // Firefox
    msOverflowStyle: "none" 
  },
  messageCard: {
    background: "rgba(255,255,255,0.2)",
    padding: "12px",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    
  },
  name: {
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "5px",
    color: "#fff"
  },
  message: {
    fontSize: "13px",
    opacity: "0.9",
    color: "#f1f1f1"
  }
};