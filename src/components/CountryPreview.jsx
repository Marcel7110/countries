import { Link } from 'react-router-dom'

const CountryPreview = ({country}) => {
    const population = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    return ( 
        <div className='country-preview'>
            <div className="image-box">
                <img src={country.flags.png} alt={country.flags.alt}/>
            </div>
            <div className='info'>
                <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
                <p><span>Population: </span> {population}</p>
                <p><span>Region: </span> {country.region}</p>
                <p><span>Capital: </span> {country.capital}</p>
            </div>
        </div> 
    );
}
 
export default CountryPreview;