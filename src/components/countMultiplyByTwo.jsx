import { useState } from "react";

function Label(props) {
    // const { count } = props.count
    return (
        <span>Multiply {props.count} by two!</span>
    );
}

export function MultiplyByTwo() {
    const [count, setCount] = useState(1);

    const multiplyByTwo = () => {
        setCount (count * 2)
    };
    return (
       <div>
            <Label count={count} />
            <button onClick = {multiplyByTwo}>Multiply by MultiplyByTwo</button>
        </div> 
    );
}