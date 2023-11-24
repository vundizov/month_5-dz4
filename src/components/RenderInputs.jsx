import {useSelector} from "react-redux";

const RenderInputs = () => {
    const name = useSelector(state => state.name)
    const age = useSelector(state => state.age)

    return (
        <div>
            <h1>ваше имя: {name}</h1>
            <br/>
            <h2>ваш возраст:{age}</h2>
        </div>
    );
};

export default RenderInputs;