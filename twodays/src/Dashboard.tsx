import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import NavBar from './inc/NavBar'

function Dashboard() {

    const location = useLocation()
    const data = location.state
    if(data)
    {
        console.log(data)
        const {name,year,status}=data
        console.log(name,year,status)

    }
    const urls = [
            {id: 100 ,title: "Samsung"},
            {id: 100 ,title: "Buzdolabı"},
            {id: 100 ,title: "Klima"},
            {id: 100 ,title: "Tv"},
            {id: 100 ,title: "Apple"},
    ]
    return (
        <>
            <NavBar></NavBar>
            <div>Dashboard</div>
            {urls.map((item,index)=> 
            <li key={index}> <NavLink to={'/detail/'+ item.id+'/'+index}>{item.title} </NavLink></li>
            
            )}
        </>

    )
}

export default Dashboard