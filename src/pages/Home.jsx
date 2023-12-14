import { useContext, useEffect, useState } from "react";
import { listContext } from "../context/listContext";
import Search from "../components/Search";
import Select from '../components/Select'
import CountryPreview from '../components/CountryPreview'
 
const Home = () => {
    const { data, error } = useContext(listContext)
    const [region,setRegion] = useState('All')
    const [filteredData,setFilteredData] = useState(data)

    useEffect(() => {
        setFilteredData(data)
    },[data])

    return ( 
        <main className="home">
            <div className="row-1">
                <Search data={data} setFilteredData={setFilteredData}/>
                <Select region={region} setRegion={setRegion}/>
            </div>
            <div className="row-2">
                {filteredData != null && filteredData.map((item,index) => {
                    if(region === 'All' || region === item.region){
                        return <CountryPreview key={index} country={item}/>
                    }else{
                        return null
                    }
                })}
            </div>
        </main>
     );
}
 
export default Home;