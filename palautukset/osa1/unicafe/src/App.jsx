import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0) {
    return <p>No feedback given</p>
  }
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = (good / all) * 100

  return (
    <table>
      <tbody>
        <tr><td>good</td><td>{good}</td></tr>
        <tr><td>neutral</td><td>{neutral}</td></tr>
        <tr><td>bad</td><td>{bad}</td></tr>
        <tr><td>all</td><td>{all}</td></tr>
        <tr><td>average</td><td>{average}</td></tr>
        <tr><td>positive</td><td>{positive}</td></tr>
      </tbody>
    </table>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const incrementGood = newValue => {
    console.log('value now', newValue)
    setGood(newValue)
  }

  const incrementNeutral = newValue => {
    console.log('value now', newValue)
    setNeutral(newValue)
  }

  const incrementBad = newValue => {
    console.log('value now', newValue)
    setBad(newValue)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => incrementGood(good + 1)} text="good" />
      <Button onClick={() => incrementNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => incrementBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
