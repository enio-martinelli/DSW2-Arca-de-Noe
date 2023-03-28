import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import ListaPets from './pages/ListaPets';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cadastro" element={<Cadastro />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dogs" element={<ListaPets />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;