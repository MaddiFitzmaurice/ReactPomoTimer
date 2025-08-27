
export default function App() {

  return (
    <div className="app">
      <h1>Pomo Timer</h1>
      <div className="status-bar"></div>
      <div className="timer-box">
        <div className="timer-type-box">
          <button>Pomodoro</button>
          <button>Short Break</button>
          <button>Long Break</button>
        </div>
        <h2>25:00</h2>
        <div className="timer-func-box">
          <button>Reset</button>
          <button>Pause/Play</button>
          <button>Skip</button>
        </div>
      </div>
      <div className="info-box">
        <p>#1</p>
        <p>Time to focus!</p>
      </div>
    </div>
  )
}