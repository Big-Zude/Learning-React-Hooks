import React,{useState} from 'react';

const Hooks=()=>{
    const[count,setCount]=useState(0)
    return(
        <div>
            <p>You pressed this {count} times</p>
            <button onClick={()=>setCount(count+1)}>add</button>
            <br/>
            <button onClick={()=>setCount(count-1)}>Subtract</button>
        </div>
    )
}
export default Hooks;