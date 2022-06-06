import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Favoritos() {
    const [ filmes, setFilmes ] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@app-flix');
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function excluirFilme(id) {
        //alert("ID: " + id)
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@app-flix", JSON.stringify(filtroFilmes));
    }

    return (
        <div className='minha-lista'>
            <h1>Minha Lista</h1>
            {filmes.length === 0 && <span>Sua lista está vazia :(</span>}
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;