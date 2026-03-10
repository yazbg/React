import useCounter from "../../../hooks/useCounter";

const CounterWithCustomHook = () => {
    const { count, increment, decrement, reset } = useCounter(8);
    return (
        <div className="flex flex-col items-center justify-center p-8 m-4 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-blue-500/20">
            <h2 className="text-xl font-semibold text-gray-300 mb-6 text-center tracking-wide uppercase text-sm">Contador Custom Hook</h2>

            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 drop-shadow-sm">
                {count}
            </div>

            <div className="flex gap-3 w-full">
                <button
                    onClick={decrement}
                    className="flex-1 px-4 py-3 bg-gray-700 hover:bg-red-500 hover:text-white text-gray-300 font-bold rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                    -1
                </button>
                <button
                    onClick={reset}
                    className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                    Reset
                </button>
                <button
                    onClick={increment}
                    className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                    +1
                </button>
            </div>
        </div>
    );
};

export default CounterWithCustomHook;