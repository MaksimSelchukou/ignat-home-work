import React from 'react'
import {AffairType} from "./HW2";
import s from '../h2/Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    // deleteAffairCallback:any // need to fix any
    deleteAffairCallback:(_id:number)=>void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>
            <div className={s.affairName}>{props.affair.name}</div>
            <div className={s.affairName}>{props.affair.priority}</div>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
