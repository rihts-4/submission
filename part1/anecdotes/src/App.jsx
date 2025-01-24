import { useState } from 'react' 
const Button = (props) => {
  return (
    <button onClick={props.onclick}>{props.text}</button>
  )
}

const Day = (props) => {
  return (
    <>
      <p>{props.anecdotes[props.selected]}</p>
      <p>has {props.vote[props.selected]} votes</p>
    </>
  )
}

const Most = ({ anecdote, votes }) => {
    return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  const copy = [...vote]

  //find anecdote with most votes
  let max = copy[0]
  let bestAnecdote = anecdotes[0]
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] > max) {
      max = copy[i]
      bestAnecdote = anecdotes[i]
    }
  }

  const [selected, setSelected] = useState(0)
  
  const getRandomInt = (max, current) => {
    const maxValue = Math.floor(max)
    let random = Math.floor(Math.random() * maxValue) // The maximum is exclusive and the minimum is inclusive
    while (random == current) {
      random = Math.floor(Math.random() * maxValue)
    }
    return random
  }
  const nextClick = () => 
    setSelected(getRandomInt(anecdotes.length, selected))
  const voteClick = () => {
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Day anecdotes={anecdotes} selected={selected} vote={vote} />
      <Button onclick={voteClick} text='vote' />
      <Button onclick={nextClick} text='next anecdote' />
      <Most anecdote={bestAnecdote} votes={max} />
    </div>
  )
}

export default App