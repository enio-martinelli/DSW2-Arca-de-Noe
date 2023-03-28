import { NavBar } from "../components/NavBar";
import React, { useState, useEffect } from 'react';


function ViewDogs() {

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const response = await fetch('http://localhost:4000/dogs');
        const dogs = await response.json();
        setDogs(dogs);
        }
        fetchData();
    }, []);

    console.log(dogs);

    const dogRows = dogs.map(e => <tr key={e.bet_id} className="border-t border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800">
        <td className="text-center p-2">{e.name}</td>
        <td className="text-center p-2">{e.breed}</td>
        <td className="text-center p-2">{e.description}</td>
        <td className="text-center p-2">{e.phone}</td>
        <td className="text-center p-2">
        <img src={e.url_image} alt={`Imagem do cachorro ${e.name}`} />
    </td>
    </tr>);

    let text = dogs.length + 'Pets disponíveis para adoção';
    if (dogs.length === 0) {
        text = 'No momento não possuímos nenhum pet para adoção. Volte um outro dia!';
    }

    return (
        <div className="h-full min-h-screen flex flex-col dark:bg-slate-900">
            <NavBar />
            <div className="flex-1 flex flex-col items-center w-full">
                <div className="flex flex-col items-center justify-center w-full sm:m-2 sm:max-w-lg">
                    <div className="p-2 dark:text-white my-2">{text}</div>

                    {dogs.length > 0 &&
                        <table className="table-auto text-sm w-full bg-slate-200 dark:bg-slate-700 dark:text-white sm:rounded-xl overflow-hidden">
                            <thead>
                                <tr className="border-b-2 border-slate-300 dark:border-slate-500">
                                    <th className="text-center p-2">Nome</th>
                                    <th className="text-center p-2">Raça</th>
                                    <th className="text-center p-2">Descrição</th>
                                    <th className="text-center p-2">Telefone para Contato</th>
                                    <th className="text-center p-2">Foto</th>
                                </tr>
                            </thead>
                            <tbody>{dogRows}</tbody>
                        </table>}
                    <div className="m-2"></div>
                </div>
            </div>
        </div>
    );
}

export default ViewDogs;