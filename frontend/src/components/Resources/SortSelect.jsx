function SortSelect({sortBy, setSortBy }){
    return (
        <div className="sort-select">
            <label htmlFor="sort">Sort by:</label>

            <select
                id="sort"
                value={sortBy}
                onChange={(e)=> setSortBy(e.target.value)}
            >
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="comments">Most discussed</option>
            </select>  
        </div>
    );
}

export default SortSelect;