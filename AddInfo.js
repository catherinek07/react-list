import {BiTrash} from 'react-icons/bi'



function AddInfo({appointment, onDeleteAppoint}){
    return(
        <li>
            <dl>
                <dt>{appointment.petName}</dt>
                <dd className="owner">
                    <dfn>{appointment.ownerName}</dfn>
                </dd>
                <dd className="desc">
                    {appointment.aptNotes}
                </dd>
                <dd className="date">
                    {appointment.aptDate}
                </dd>
            </dl>
                <button onClick={()=>{onDeleteAppoint(appointment.id)}}>
                    <BiTrash />
                </button>
        </li>
    )
}

export default AddInfo


