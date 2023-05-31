import { useState } from "react";

function Label(props) {
    return (
        <span>Mulitply by three {props.count} times.</span>
    );
}

export function MultiplyByThree() {
    // const {count} = props;
    const [count, setCount] = useState(2);

    const increment = () => {
        setCount (count * 3 )
    };
    return (
       <div>
        <Label count={count} />
        <button onClick = {increment}>Mulitply by three</button>
        </div> 
    );
}