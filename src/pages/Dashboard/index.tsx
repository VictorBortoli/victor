import React from "react";
import {FiChevronRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Title, Form, Repositories} from './styles';
const Dashboard: React.FC = () => {
    return(
        <>
            <Title>Explore repositorias no github</Title>
            <Form>
                <input placeholder="Digite o nome do  repositorio"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <Link to="#">
                    <img src="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="carro" />
                    <div>
                        <strong>BMW-prova</strong>
                        <p>Banana pera uva e os caraio :)</p>
                    </div>
                    <FiChevronRight/>
                </Link>
            </Repositories>
            <Repositories>
                <Link to="#">
                    <img src="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="carro" />
                    <div>
                        <strong>BMW-prova</strong>
                        <p>Banana pera uva e os caraio :)</p>
                    </div>
                    <FiChevronRight/>
                </Link>
            </Repositories>
            <Repositories>
                <Link to="#">
                    <img src="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="carro" />
                    <div>
                        <strong>BMW-prova</strong>
                        <p>Banana pera uva e os caraio :)</p>
                    </div>
                    <FiChevronRight/>
                </Link>
            </Repositories>
        </>
    );
}

export default Dashboard;
