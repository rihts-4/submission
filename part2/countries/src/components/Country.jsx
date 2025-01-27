import Weather from './Weather'

const Country = ({ country }) => {
    if (country === null) {
        return null
    } else {
        const languages = Object.values(country.languages)
        const capital = country.capital[0]
        return (
            <div>
                <h1>{country.name.common}</h1>
                capital {capital} <br />
                area {country.area}
    
                <h3>languages:</h3>
                <ul>
                    {languages.map(language =>
                        <li key={language}>{language}</li>
                    )}
                </ul>
                <img src={country.flags.png} alt={country.flags.alt} />
                <h2>Weather in {capital}</h2>
                <Weather city={capital} />
            </div>
        )
    }
}

export default Country