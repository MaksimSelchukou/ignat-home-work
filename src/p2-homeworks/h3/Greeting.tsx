import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addUserEnter:(e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,addUserEnter} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={addUserEnter}/>

            {/*{error && <span className="error-message">{error}</span>}*/}
            {/*{error && <div className="error-message">{error}</div> }*/}
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>

        </div>
    )
}

export default Greeting
