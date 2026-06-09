import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import { Memberslist } from './components/Memberslist'

function App() {
  const [isupdate,setIsUpdate]=useState(false)

  const handleIsUpdate = () => {
  setIsUpdate(prev => !prev)
}
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>💬 Message Wall</h1>

        <Form handleIsUpdate={handleIsUpdate} />
        <Memberslist isupdate={isupdate} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "sans-serif"
  },
  card: {
    width: "420px",
    padding: "25px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    color: "#fff"
  },
  title: {
    textAlign: "center",
    marginBottom: "15px"
  }
}

export default App