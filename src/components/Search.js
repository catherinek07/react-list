import React,{useState} from 'react'
import {BiSearch,BiCaretDown} from "react-icons/bi"
function DropDown({toggleSort}){
   if (!toggleSort){return null}
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
    const [toggleSort, setToggleSort] = useState(false)
    return(
        <div id="search">
            <p>
            <BiSearch />
            <input type="text" placeholder="Search"/>
            <button type="button" 
            onClick={()=>{setToggleSort(!toggleSort)}}>
                Order <BiCaretDown /></button>
            <DropDown
            toggleSort= {toggleSort}/>
            </p>
        </div>
        

    )
}

export default Search