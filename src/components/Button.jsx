const Button = ({ children, blue, onClick }) => {
    // Definimos las clases base que comparten ambos botones
    const baseClasses = "relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg";

    // Definimos las clases específicas para el gradiente azul
    const blueClasses = "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 hover:shadow-blue-500/50 focus:ring-blue-500";

    // Definimos las clases específicas para el gradiente rojo/rosa
    const redClasses = "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 hover:shadow-rose-500/50 focus:ring-rose-500";

    return (
        <button
            type="button"
            className={`${baseClasses} ${blue ? blueClasses : redClasses} group`}
            onClick={onClick}
        >
            {/* Elemento decorativo: Brillo al pasar el mouse por encima */}
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>

            {/* Texto del botón (se mantiene encima de los decorativos usando relative) */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </button>
    );
};

export default Button;