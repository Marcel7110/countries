const Select = ({setRegion}) => {

    return ( 
        <select className="select" onChange={(e) => setRegion(e.target.value)}>
            <option>All</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Antarctic</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
    );
}
 
export default Select;