import AddNew from "./AddNew"
import SearchBar from "./SearchBar"

export default function Utilities(){
    return (
        <div className="mt-5 flex flex-row gap-5">
            <SearchBar></SearchBar>
            <AddNew></AddNew>
        </div>
    )
}