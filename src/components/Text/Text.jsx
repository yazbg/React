

const TailwindText = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden">
            {/* Elemento decorativo de fondo borroso */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Contenedor principal del texto */}
            <div className="relative z-10 text-center space-y-6 max-w-4xl">
                {/* Pequeña etiqueta superior */}
                <span className="inline-block py-1 px-3 rounded-full bg-gray-800 border border-gray-700 text-sm font-semibold text-blue-400 tracking-wide uppercase shadow-lg">
                    Impulsado por Tailwind CSS
                </span>

                {/* Título principal con gradiente */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                    <span className="block text-white mb-2">Diseño Moderno</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
                        Hecho Simple
                    </span>
                </h1>

                {/* Subtítulo descriptivo */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Crea interfaces de usuario hermosas y adaptables rápidamente utilizando las clases utilitarias de Tailwind, sin escribir una sola línea de CSS personalizado.
                </p>
            </div>
        </div>
    );
};

export default TailwindText;