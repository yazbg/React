import React, { useCallback, useState, useMemo } from "react";

const Child = React.memo(({ counter }) => {
    console.log("Child render");
    return (
        <div className="flex flex-col items-center bg-gray-700/50 p-4 rounded-xl w-full mb-4 shadow-inner border border-gray-600/50">
            <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-semibold">Child Component</span>
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 drop-shadow-sm">
                {counter}
            </span>
        </div>
    );
})

function ExpensiveCalculation({ num }) {
    const result = useMemo(() => {
        console.log("Calculating...");
        return num * 6;
    }, [num])

    return (
        <div className="flex flex-col items-center bg-gray-700/50 p-4 rounded-xl w-full mb-6 shadow-inner border border-gray-600/50">
            <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-semibold">Expensive Calc (x6)</span>
            <span className="text-3xl font-bold text-amber-400 drop-shadow-sm">
                {result}
            </span>
        </div>
    );
}

const CounterWithReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const increment = useCallback(() => setCounter(counter => counter + 1), [])

    return (
        <div className="flex flex-col items-center justify-center p-8 m-4 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-emerald-500/20">
            <h2 className="text-xl font-bold text-gray-300 mb-6 text-center tracking-wide uppercase text-sm">React Memo Setup</h2>

            <Child counter={counter} />
            <ExpensiveCalculation num={counter} />

            <button
                onClick={increment}
                className="w-full px-4 py-3 mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Incrementar
            </button>
        </div>
    );
}

export default CounterWithReactMemo;
