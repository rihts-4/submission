import Country from './Country'

const DisplayCountries = ({ countries, onclick }) => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    } else if(countries.length > 1 && countries.length <= 10) {
      return countries.map(c => 
        <div key={c.name.common}>
            <p>{c.name.common}</p>
            <button onClick={() => onclick(c.name.common)}>show</button>
        </div>
    )
    } else if (countries.length === 1) {
      return (
        <Country country={countries[0]} />
      )
    }
}

export default DisplayCountries