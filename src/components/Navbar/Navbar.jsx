const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-700/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
                            Y
                        </div>
                        <span className="text-white font-bold text-xl tracking-wider">
                            Yaz<span className="text-blue-400">App</span>
                        </span>
                    </div>

                    {/* Enlaces de Navegación (Desktop) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-white hover:text-blue-400 px-3 py-2 rounded-md font-medium transition-colors">Inicio</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">Servicios</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">Portafolio</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">Contacto</a>
                        </div>
                    </div>

                    {/* Botón de Acción (Call to Action) */}
                    <div className="hidden md:block">
                        <button className="bg-white/10 hover:bg-white/20 text-white border border-gray-600 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            Iniciar Sesión
                        </button>
                    </div>

                    {/* Menú de Hamburguesa (Mobile) - Solo visual por ahora */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-300 hover:text-white focus:outline-none">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
