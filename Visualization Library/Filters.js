function Filters({ setFilter }) {
    return (
      <div>
        <select onChange={e => setFilter(e.target.value)}>
          <option value="">All Years</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    );
  }
  
  export default Filters;
  