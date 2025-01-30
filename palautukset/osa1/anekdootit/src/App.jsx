import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    { text: 'If it hurts, do it more often.', votes: 0},
    { text: 'Adding manpower to a late software project makes it later!', votes: 0},
    { text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0},
    { text: 'Premature optimization is the root of all evil.', votes: 0},
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0},
    { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.', votes: 0},
    { text: 'The only way to go fast, is to go well.', votes: 0}
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    const randomInt = Math.floor(Math.random() * (anecdotes.length))
    setSelected(randomInt)
  }

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotes = Math.max(...votes)
  const mostVotedIndex = votes.findIndex(vote => vote === maxVotes)
  const mostVotedAnecdote = anecdotes[mostVotedIndex]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].text}</p>
      <p>has {votes[selected]} votes</p>
      <br />
      <Button onClick={() => voteAnecdote()} text="vote" />
      <Button onClick={() => randomAnecdote()} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{mostVotedAnecdote.text}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App