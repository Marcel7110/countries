import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Details from '../components/Details';
import MainDetails from '../components/MainDetails';
import BorderCountries from '../components/BorderCountries';
import arrow_back from '../assets/arrow_back.svg'

const Country = () => {
    const { name } = useParams()
    const [country,setCountry] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await response.json()
                setCountry(data[0])
            }catch(err){
                setError(true)
            }
        }
        fetchData()
    },[name])

    return ( 
        <main className='country'>
            <Link className='btn-back' to='/'><img src={arrow_back} alt='back'/>Back</Link>
            {country != null && (
                <div className='row-1'>
                    <div>
                        <img src={country.flags.svg} alt={country.flags.alt}/>
                    </div>
                    <div className='row-2'>
                        <h2>{country.name.official}</h2>
                        <MainDetails country={country}/>
                        <Details country={country}/>
                        <BorderCountries country={country}/>
                    </div>
                </div>
            )}
        </main>
    );
}
 
export default Country;