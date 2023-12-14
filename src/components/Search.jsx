const Search = ({data,setFilteredData}) => {

    const updateData = (e) => {
        const temp = data.filter((item) => item.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredData(temp)
    }

    return (
        <div className="search-box">
            <img src="search.svg" alt=""/>
            <input type="text" onChange={updateData}/>
        </div>
    );
}
 
export default Search;