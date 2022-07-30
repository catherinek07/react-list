import {BiTrash} from 'react-icons/bi'

function AddInfo({appointment}){
    return(
        <div id ="list">
        <ul>
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
            <p>
                <button>
                    <BiTrash />
                </button>
            </p>
        </li>
        </ul>
        </div>
    )
}

export default AddInfo



