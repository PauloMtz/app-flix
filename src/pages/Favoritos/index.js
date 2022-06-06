import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Favoritos() {
    const [ filmes, setFilmes ] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@app-flix');
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    return (
        <div className='minha-lista'>
            <h1>Minha Lista</h1>
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;