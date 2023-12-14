import { useContext, useEffect, useState } from "react";
import { listContext } from '../context/listContext'
import { Link } from "react-router-dom";

const BorderCountries = ({country}) => {
    const { data } = useContext(listContext)
    const [borderCountries,setBorderCountries] = useState(null)
    
    useEffect(() => {
        if(data){
            let a = []
            if(country.borders != undefined){
                a = data.filter(item => country.borders.includes(item.cca3))       
            }
            setBorderCountries(a)
        }
    },[data,country])

    return ( 
        <div className="box-borders">
            <h3>Border Countries</h3>
            <div>
            {borderCountries && borderCountries.map((item,index) => (
                <Link to={`/country/${item.name.common}`} key={index}>{item.name.common}</Link>
            ))}
            </div>
        </div>
     );
}
 
export default BorderCountries;