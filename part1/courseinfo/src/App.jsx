const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    [
      <p>
          {props.part} {props.exercise}
      </p>,
      <p>
        {props.part} {props.exercise}
      </p>,
      <p>
        {props.part} {props.exercise}
      </p>
    ]
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part[props.index].name} {props.part[props.index].exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course} />
      <Part part = {part} index = {0} />
      <Part part = {part} index = {1} />
      <Part part = {part} index = {2} />
      <Total exercises = {part[0].exercises + part[1].exercises + part[2].exercises} />
    </div>
  )
}

export default App