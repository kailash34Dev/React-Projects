import Input from "./Input";

function InputBox({ onColorChange, color }) {
    return (
        <div className="flex flex-col gap-5 text-center p-8 sm:p-[50px] bg-white rounded-2xl w-full max-w-md mx-4 sm:mx-0 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-semibold">
                Enter any color
            </h3>
            <Input onColorChange={onColorChange} color={color} />
        </div>
    );
}

export default InputBox;
