import "./SearchBar.css";
function SearchBar({value, onChange, placeholder}) {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );

}

export default SearchBar;