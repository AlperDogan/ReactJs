import React, { useState } from 'react'
import { userPasswordValid } from './util';
import { IAction, IUser } from './models/IUser'


function Login() {

    let name: string = ''
    name = 'Alper'
    const surname = 'Dogan'

    if (true) {
        let x = 'x';
        var y = 'y';
    }

    //console.log(name)

    let cities = ["İzmir", "İstanbul", "Ankara", 100, true]
    cities.splice(3, 2);

    cities = cities.filter((item, index) => (typeof item) === 'string')
    const searchIndex = cities.findIndex((item, index) => (item === 'İzmir'))
    console.log(searchIndex)

    const newPassword = userPasswordValid(50, 1212, 'abc')
    console.log(newPassword?.length)

    const user = {
        name: "Tugba",
        surname: "Ballıca Dogan",
        age: 29,
        status: true
    }

    const userx: IUser = {
        name: 'Alper',
        surname: 'Dogan',
        age: 30,
        status: true,
        email: "alper@gmail.com",  
    }

    const fncSum = (a:number, b:number) :number => {
        return a + b

    } 

    const itemAction : IAction={
            id:0,
            funcCall: fncSum
    }

    const sm =itemAction.funcCall(10,20)
    console.log("Sum: ", sm)

    const [data,setData] = useState('')
    const sendData=()=>{

        console.log(data)
    }

    return (
        <>
            <h2>User Login</h2>
            <p>User Deailt</p>

            <input onChange={(evt)=> setData(evt.target.value)}/>
            <button onClick={sendData}>SEND </button>
            <h2>{data}</h2>
            <div>{user.name}</div>
            <div>{user.surname}</div>
            <div>{userx.name}</div>
            <div>{userx.surname}</div>
            {   
                userx.age==30 && 
                <div>{userx.email}</div>
            }
            

            {cities.map((item, index) =>
                <div key={index}>
                    <li>{item.toString()}</li>
                </div>
            )}
        </>

    )
}

export default Login