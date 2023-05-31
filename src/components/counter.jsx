import { useState } from "react";

function Label(props) {
    return (
        <span>I have been clicked {props.count} times.</span>
    );
}

export function Counter() {
    // const {count} = props;
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount (count + 1)
    };
    return (
       <div>
        <Label count={count} />
        <button onClick = {increment}>Increment</button>
        </div> 
    );
}