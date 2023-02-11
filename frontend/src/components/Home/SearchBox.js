import { useState } from "react"
import agent from "../../agent";
export const SearchBox = ({onSearch}) => {
    const [searchTitle, setSearchTitle] = useState('');

    const handleChange = (ev) => {
        const {value} = ev.target;
        setSearchTitle(value);
        if(value.length > 2) {
            onSearch(
                (page) => agent.Items.byTitle(searchTitle, page),
                agent.Items.byTitle(searchTitle)
            )
        }
        if(value.length === 0) {
            onSearch(
                (page) => agent.Items.all(page),
                agent.Items.all()
            )
        }
    }
    return(
        <div>
            <input 
                className="search_box" 
                name="search-box" 
                placeholder="what is that you truly desire" 
                id="search-box" 
                onChange={handleChange} 
                value={searchTitle}
                />
        </div>
    )
}