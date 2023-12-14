const MainDetails = ({country}) => {
    const population = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    const native = country.name.nativeName != undefined ? Object.values(country.name.nativeName)[0].common : []
    const capital = country.capital != undefined ? country.capital.join(', ') : []

    return ( 
        <div className="box">
            <p><span>Native Name: </span>{native}</p>
            <p><span>Population: </span>{population}</p>
            <p><span>Region: </span>{country.region}</p>
            <p><span>Sub Region: </span>{country.subregion}</p>
            <p><span>Capital: </span>{capital}</p>
        </div>
     );
}
 
export default MainDetails;