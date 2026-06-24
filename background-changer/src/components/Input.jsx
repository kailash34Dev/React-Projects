function Input({ onColorChange, color }) {
    function handleColorChange(event) {
        let userColor = event.target.value.trim();

        if (
            /^[0-9a-fA-F]{3}$/.test(userColor) ||
            /^[0-9a-fA-F]{6}$/.test(userColor)
        ) {
            userColor = `#${userColor}`;
        }

        onColorChange(userColor);
    }

    return (
        <input
            type="text"
            placeholder="Red, Green....."
            className="w-full
                               px-4
                               py-2
                               border
                               border-gray-300
                               rounded-lg
                               shadow-sm
                               text-gray-800
                               placeholder-gray-400
                               focus:outline-none
                               focus:ring-2
                               focus:ring-blue-500
                               focus:border-blue-500
                               transition
                               duration-200"
            value={color}
            onChange={handleColorChange}
        />
    );
}

export default Input;
