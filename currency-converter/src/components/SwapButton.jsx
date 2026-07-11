function SwapButton({ onClick }) {
    return (
        <button
            type="button"
            className="flex items-center gap-1.5 border-4 border-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 font-bold text-sm hover:scale-110 hover:shadow-lg transition-transform duration-200 active:scale-95"
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5 7.5 3m0 0 4.5 4.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
            </svg>
            Swap
        </button>
    );
}

export default SwapButton;
