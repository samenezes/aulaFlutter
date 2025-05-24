import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-blue-700 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Flutter Widgets Essenciais</h1>
            <p className="text-sm">Um guia completo para iniciantes</p>
          </div>
        </header>
        
        <nav className="bg-white shadow-md py-2">
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link to="/" className="block py-2 px-4 rounded hover:bg-blue-100">
                  Início
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <main className="flex-grow py-6">
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Bem-vindo ao Flutter Widgets Essenciais</h2>
                  <p className="text-gray-700 mb-4">
                    Este site contém exemplos detalhados e explicações dos widgets mais importantes do Flutter para iniciantes.
                    Cada seção aborda um widget específico com código completo e análise linha por linha.
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">Scaffold e AppBar</h3>
                      <p className="text-sm text-gray-600">A estrutura básica de layout visual do Material Design e a barra de aplicativos.</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">Text e RichText</h3>
                      <p className="text-sm text-gray-600">Widgets para exibir texto com estilo único ou múltiplos estilos.</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">Container</h3>
                      <p className="text-sm text-gray-600">Widget versátil para pintura, posicionamento e dimensionamento.</p>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
        
        <footer className="bg-blue-800 text-white py-4 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p>Flutter Widgets Essenciais - Um guia completo para iniciantes</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
