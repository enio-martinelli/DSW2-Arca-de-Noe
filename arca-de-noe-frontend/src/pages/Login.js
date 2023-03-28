import { useState } from 'react';
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import {MdPets} from "react-icons/md";
import { IconContext } from "react-icons";
import "./Login.css";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function retrieveUserByUsernameAndPassword() {
        if (username.trim().length === 0 || password.trim().length === 0) {
            window.location.href="https://http.dog/404.jpg";
            return;
        } else {
            try {
                const getUserResponseUsername = await fetch('http://localhost:5000/user?username=' + username + '&password=' + password);
                if (getUserResponseUsername.status === 200) {
                    /* Encaminhar para págima home */
                    window.location.href = "http://localhost:3000/";
                } else if(getUserResponseUsername.status === 404){
                    window.location.href="https://http.dog/404.jpg";
                } else if(getUserResponseUsername.status === 500){
                    window.location.href="https://http.dog/500.jpg";
                }
            }
            catch (err) {
                
                console.log('Error: ' + err);
            }
        }
    }

    return (
        <div class="login">
            <div class="header">
                <IconContext.Provider value={{className: "main-icon" }}>
                    <div>
                        <MdPets />
                    </div>
                </IconContext.Provider>
            </div>
            <div class="container">
                
                <FormInput id='username' label='Nome de Usuário' value={username} type='text' size='full' onChange={e => setUsername(e.target.value )} />
                <FormInput id='password' label='Senha' value={password} type='password' size='full' onChange={e => setPassword(e.target.value )} />
                

                <div className="m-4"></div>

                <div className="flex flex-col items-center">
                    <Button label="Login" action={retrieveUserByUsernameAndPassword} color='blue' className="menu" />
                    <Button label="Cadastre-se" link="/cadastro" color='blue' className="menu" />
                </div>

            </div>
        </div>
    );
}

export default Login;