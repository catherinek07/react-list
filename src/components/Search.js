import {BiSearch,BiCaretDown,BiCheck} from "react-icons/bi"
function DropDown(){
    return(
        <ul>
            <li>Child Name</li>
            <li>Caretaker Name</li>
            <li>Date</li>
            <li>Increasing</li>
            <li>Decreasing</li>
        </ul>
    )
}
function Search(){
    return(
        <div id="search">
            <p>
            <BiSearch />
            <input type="text" placeholder="Search"/>
            <button type="button">Order <BiCaretDown /></button>
            <DropDown />
            </p>
        </div>
        

    )
}

export default Search