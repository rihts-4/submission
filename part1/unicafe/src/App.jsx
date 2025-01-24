import { useState } from "react";
const StatisticLine = ({ text, value }) => {
  if (text === 'positive') {
    return <tr>
      <td>{text}</td>
      <td>{value} %</td>
    </tr>
  } else {
    return <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  }
}

const Button = ({ text, onclick }) => 
  <button onClick={onclick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const total = good+neutral+bad

  if (total == 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  } else {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={total} />
            <StatisticLine text='average' value={(good-bad)/total} />
            <StatisticLine text='positive' value={(good/total)*100} />
          </tbody>
        </table>
      </>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' onclick={() => setGood(good + 1)} />
      <Button text='neutral' onclick={() => setNeutral(neutral + 1)} />
      <Button text='bad' onclick={() => setBad(bad + 1)} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App