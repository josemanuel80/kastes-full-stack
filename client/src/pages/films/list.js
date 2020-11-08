import React,{useEffect,useState} from 'react';
import {getAllFilms} from '../../lib/fetch-films.js'

const ListFilms=()=>{
    const [filmsData,setFilmsData]=useState([]);

    const fetchAllFilms=async()=>{
        const data=await getAllFilms();
        console.log(data);
        setFilmsData(data);
    };
    useEffect(()=>{
        fetchAllFilms();
    },[]);
    return (
    <main>
        <h2>List</h2>

        <ul>
            {/* {filmsData.map((filmItem,i)=>{
                return ( */}
                    {/* <li key={i}> */}
                    <li>
                        {JSON.stringify(filmsData)}                     
                    </li>
                );
            {/* })} */}
        </ul>
    </main>
    );
};
export default ListFilms;