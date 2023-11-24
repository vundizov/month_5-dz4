
import {useDispatch} from "react-redux";
import {useState} from "react";

const Inputs = () => {
    const [name,setName ] = useState([])
    const [age,setAge ] = useState([])
    const dispatch = useDispatch()
    const handelClick = () => {
        dispatch({type: 'name' , payload:name})
        dispatch({type: 'age' , payload:Number(age)})
    }
    return (
        <div>
            <form className="w-[min(100%)] col-span-full md:col-span-1) md:col-start-1 md:col-end-2 flex flex-col justify-center gap-3 [&>*]:px-2 [&>*]:py-1 [&>input]:rounded-sm [&>button]:rounded-md [&>button]:bg-slate-300">
                <input type="text" onChange={(e)=> setName(e.target.value)}/>
                <input type="number" onChange={(e)=> setAge(e.target.value)} />
            </form>
            <button onClick={handelClick}>click</button>
        </div>
    );
};

export default Inputs;