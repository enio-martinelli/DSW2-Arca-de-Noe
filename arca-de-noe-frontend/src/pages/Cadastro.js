import { useState } from 'react';
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import {MdPets} from "react-icons/md";
import { IconContext } from "react-icons";
import { MessageBanner } from "../components/MessageBanner";

function Cadastro() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    async function createUser() {
        if (name.trim().length === 0 || username.trim().length === 0 || email.trim().length === 0 || adress.trim().length === 0 || password.trim().length === 0) {
            window.location.href="https://http.dog/404.jpg";
            return;
        } else {
            try {
                const RequestUser = {
                    name: name,
                    email: email,
                    username: username,
                    adress: adress,
                    password: password
                };
                const putUser = await fetch('http://localhost:5000/user',{
                    headers: { 'Content-Type': 'application/json' },
                    method: 'PUT',
                    body: JSON.stringify(RequestUser),
                });
                if (putUser.status === 200) {
                    console.log("aqui");
                    /* Encaminhar para págima home */
                    setMessage('Cadastro realizado com sucesso!!');
                    setTimeout(
                    window.location.href = "http://localhost:3000/", 20000);
                    
                } else if(putUser.status === 404){
                    window.location.href="https://http.dog/404.jpg";
                } else if(putUser.status === 500){
                    window.location.href="https://http.dog/500.jpg";
                }
            }
            catch (err) {
                
                console.log('Error: ' + err);
            }
        }
    }

    return (
        <div class="cadastro">
            <div class="header">
                <IconContext.Provider value={{className: "main-icon" }}>
                    <div>
                        <MdPets />
                    </div>
                </IconContext.Provider>
            </div>
            <div class="container">
                {message &&
                     <MessageBanner type='info' content={message} />
                }
                
                <FormInput id='name' label='Nome' value={name} type='text' size='full' onChange={e => setName(e.target.value )} />
                <FormInput id='username' label='Nome de Usuário' value={username} type='text' size='full' onChange={e => setUsername(e.target.value )} />
                <FormInput id='email' label='Email' value={email} type='text' size='full' onChange={e => setEmail(e.target.value )} />
                <FormInput id='adress' label='Endereço' value={adress} type='text' size='full' onChange={e => setAdress(e.target.value )} />
                <FormInput id='password' label='Senha' value={password} type='password' size='full' onChange={e => setPassword(e.target.value )} />

                <div className="m-4"></div>

                <div className="flex flex-col items-center">
                    <Button label="Cadastrar" action={createUser} color='blue' className="menu" />
                </div>

            </div>
        </div>
    );
}

export default Cadastro;