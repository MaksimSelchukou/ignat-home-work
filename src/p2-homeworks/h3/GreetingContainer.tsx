import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let newUser = e.currentTarget.value
        setName(newUser) // need to fix
    }
    const addUser = () => {
        if (name.trim() !== "") {
            addUserCallback(name)
            alert(`Hello ${name} !`) // need to fix ++++++
            setName('')
        }else{
            setError('Name is required')
        }

    }
    // {error && <div className="error-message">{error}</div> }


    const addUserEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            // addUserCallback(name)
            // alert(`Hello ${name} !`)
            // setName('')
            addUser();
        }
    }

    const totalUsers = users.length // need to fix
    console.log(users)
    // console.log(users.length)

    return (
        <Greeting
            addUserEnter={addUserEnter}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
