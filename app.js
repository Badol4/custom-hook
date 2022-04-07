import React, { useEffect, useState } from 'react';

const coustomHook = ()=>{
    const [hook,setHook] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setHook(data))
    },[])
    return [hook,setHook]
}
export default coustomHook