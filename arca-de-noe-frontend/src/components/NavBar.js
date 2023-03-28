import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import {MdPets} from "react-icons/md";
import { IconContext } from "react-icons";

export function NavBar() {
    const [floatMenuShown, setFloatMenuShown] = useState(false);

    function toggleFloatMenuShown() {
        setFloatMenuShown(!floatMenuShown);
    }

    return (
        <div className="w-full bg-blue-300 dark:bg-slate-800 text-black flex flex-row p-3 justify-between items-center">
            <IconContext.Provider value={{size: '3em'}}>
                <div>
                    <MdPets />
                </div>
            </IconContext.Provider>
            <Link to="/" className="text-blue-800 dark:text-blue-400 text-center text-base sm:text-2xl font-black uppercase select-none">Arca de Noé</Link>
            <div className="cursor-pointer">
                <MdMenu onClick={toggleFloatMenuShown} className="text-2xl sm:hidden text-black-700 dark:text-black-400 dark:hover:text-black-200 hover:text-black-900 select-none" />
                <div className="relative">
                    <div className={`absolute right-0 top-0 flex sm:hidden flex-col items-center bg-blue-400 dark:bg-slate-800 border-solid border-2 border-black dark:border-slate-600 rounded-xl p-4 drop-shadow transition-all duration-500 ${floatMenuShown ? 'visible opacity-100' : 'collapse opacity-0'}`}>
                        <Link to="/cadastro" className="text-black-700 hover:text-black-900 dark:text-black-400 dark:hover:text-black-200 mb-1 select-none">Cadastro</Link>
                        <Link to="/login" className="text-black-700 hover:text-black-900 dark:text-black-400 dark:hover:text-black-200 mb-1 select-none">Login</Link>
                        <Link to="/dogs" className="text-black-700 hover:text-black-900 dark:text-black-400 dark:hover:text-black-200 select-none">Lista de Pets</Link>
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex items-center">
                <Link to="/cadastro" className="text-black-700 hover:text-black-900 dark:text-black-400 dark:hover:text-black-200 mr-10 select-none">Cadastro</Link>
                <Link to="/login" className="text-black-700 hover:text-black-900 dark:text-black-400 dark:hover:text-black-200 mr-10 select-none">Login</Link>
                <Link to="/dogs" className="text-black-700 hover:text-black-900 dark:text-black-400 dark:hover:text-black-200 select-none">Lista de Pets</Link>
            </div>
        </div>
    );
}