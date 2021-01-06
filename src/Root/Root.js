import React, {useState,useEffect} from 'react';

import './Root.scss';


function Root(props) {
    const [arr,setArr] = useState([1]);
    const [choose,setChoose] = useState(['blue', 'red', 'green', 'yellow']);

    

    return (
        <div className="Root">
            <h1>ROOT COMPONENT</h1>
            <hr/ >


        </div>
    )
}
export default Root;

    






