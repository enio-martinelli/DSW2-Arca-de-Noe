import {GoChecklist} from "react-icons/go";
import {GiSittingDog} from "react-icons/gi";
import {FcApproval} from "react-icons/fc";
import { IconContext } from "react-icons";
import "./Home.css";
import { NavBar } from "../components/NavBar";

function Home() {
    return (
        <div>
            <div >
                    <NavBar />
            </div>
            <div className="grid-container">

                <div className="top">
                    <h2>Sobre a Arca de Noé</h2>
                    <p>Somos pessoas que amam pets e queremos que todos tenham alguém para cuidá-los.</p>
                    <p>Nosso trabalho é conectar as pessoas que desejam adotar um pet com diversos parceiros que possuem pets para adoção.</p>
                </div>

                <div className="titleColumns">
                    <h2>Veja como é simples</h2>
                </div>
                
                <div className="left central">
                    <IconContext.Provider value={{className: "icon" }}>
                        <div>
                            <GoChecklist />
                        </div>
                    </IconContext.Provider>
                    <bdo> Faça cadastro no nosso site e preencha as informações de perfil.</bdo>
                </div>
                <div className="middle central">
                    <IconContext.Provider value={{className: "icon" }}>
                        <div>
                            <GiSittingDog />
                        </div>
                    </IconContext.Provider>
                    <bdo>Confira nossa lista de pets disponíveis e escolha aquele que mais combina com você.</bdo>
                </div>  
                <div className="right central">
                    <IconContext.Provider value={{style:{color: "black"}, className: "icon" }}>
                        <div>
                            <FcApproval />
                        </div>
                    </IconContext.Provider>
                    <bdo>Assim que seu interesse for aprovado entramos em contato para combinar dia/hora/local para você buscar seu pet!</bdo>
                </div>

                <div className="footer">
                    <h4>Disciplina: </h4>
                    <p>Desenvolvimento de Software para Web 2</p>

                    <h4>Alunos: </h4>
                    <bdo>Augusto Luchesi Matos - 740871</bdo><br/><bdo>Enio da Costa Martinelli - 790891</bdo><br/><bdo>Kevin Vinicius Carvalho Brito - 769769</bdo>
                </div>
            </div>
        </div>
    );
}

export default Home;