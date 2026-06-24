import { useState } from "react";
import InputBox from "./InputBox";

function MainBox() {
    const [color, setColor] = useState("white");

    return (
        <div
            className={`flex justify-center items-center w-full h-screen`}
            style={{ backgroundColor: color }}
        >
            <InputBox onColorChange={setColor} color={color}/>
        </div>
    );
}

export default MainBox;
