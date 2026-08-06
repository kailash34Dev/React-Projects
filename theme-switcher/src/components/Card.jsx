function Card() {
    return (
        <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-slate-800/90 dark:border-slate-700/50 overflow-hidden group backdrop-blur-sm">
            <a href="/" className="block overflow-hidden relative">
                {/* Product badge */}
                <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-md z-10 shadow-sm tracking-wide">
                    25% OFF
                </span>

                <img
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80"
                    alt="Apple Watch Series 7"
                />
            </a>

            <div className="p-6">
                <a href="/">
                    <h5 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight
                        Sport
                    </h5>
                </a>

                {/* Rating */}
                <div className="flex items-center mb-6 gap-1.5">
                    <div className="flex text-amber-400">
                        {/* 4 solid stars */}
                        {[...Array(4)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                        {/* 1 empty star */}
                        <svg
                            className="w-4 h-4 text-slate-300 dark:text-slate-600 fill-current"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-indigo-900/50 dark:text-indigo-300 ml-1">
                        4.0
                    </span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-slate-900 dark:text-white leading-none">
                            $599
                        </span>
                        <span className="text-sm text-slate-500 line-through dark:text-slate-400 font-medium">
                            $799
                        </span>
                    </div>

                    <a
                        href="/"
                        className="text-white bg-slate-900 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-semibold rounded-xl text-sm px-5 py-3 text-center dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:focus:ring-indigo-800 transition-all duration-300 shadow-md hover:shadow-indigo-500/30 flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
