const StaticComponent = () => {
    // Actualicé un poco los datos para que se vean como un portafolio o servicios reales
    const items = [
        {
            id: 1,
            name: "Desarrollo Frontend",
            description: "Construimos interfaces rápidas, reactivas y accesibles usando las últimas tecnologías.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Diseño UI/UX",
            description: "Creamos experiencias de usuario intuitivas con un enfoque fuerte en estética y usabilidad.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop", // Cambié la imagen para que no sea repetida
        },
        {
            id: 3,
            name: "Trabajo Remoto",
            description: "Equipos distribuidos globalmente entregando soluciones digitales de alta calidad.",
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop", // Cambié la imagen para que no sea repetida
        },
    ];

    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight">
                    Componentes Estáticos Premium
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Una galería construida con Tailwind CSS mostrando un diseño moderno con efectos de cristal y animaciones fluidas.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] transition-all duration-500 transform hover:-translate-y-3"
                    >
                        {/* Contenedor de la Imagen con efecto hover */}
                        <div className="relative overflow-hidden h-64">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradiente oscuro sobre la imagen para que el texto resalte si hubiera sobre ella, o simplemente por estética */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                        </div>

                        {/* Contenido de la Tarjeta */}
                        <div className="p-8 relative">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                {item.name}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-base mb-6">
                                {item.description}
                            </p>

                            {/* Botón fantasma como flecha */}
                            <div className="mt-auto">
                                <span className="inline-flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 uppercase tracking-wider">
                                    Conocer más
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaticComponent;