const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
  }
  
  const Content = ({ part }) => {
    const parts = part.map((part) => <Part key={part.id} part = {part} />)
    return (
      <>
        {parts}
      </>
    )
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return (
      <p><b>total of {total} exercises </b></p>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <>
        <Header course = {course.name} />
        <Content part = {course.parts}/>
        <Total parts = {course.parts} />
      </>
    )
  }
  
  export default Course