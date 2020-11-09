import React from "react";
import {useState} from "react";
function useA  () {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
setCount(count+10)
    };
    return {
        count,
        handleIncrement
    };
}
export default useA;