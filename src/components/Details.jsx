const Details = ({country}) => {
    const domain = country.tld[0]
    const currenies = country.currencies != undefined ? Object.keys(country.currencies) : []
    const languages = country.languages != undefined ? Object.values(country.languages) : []

    return ( 
        <div className="box">
            <p><span>Top Level Domain: </span>{domain}</p>
            <p><span>Currencies: </span>{currenies.join(', ')}</p>
            <p><span>Languages: </span>{languages.join(', ')}</p>
        </div>
     );
}
 
export default Details;