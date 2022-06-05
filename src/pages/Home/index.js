import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

// https://api.themoviedb.org/3/movie/now_playing?api_key=47b3ca00a5798ec5cbc9f8707a4ed20a

function Home() {
    const [ filmes, setFilmes ] = useState([]);
    const [ carregando, setCaregando ] = useState(true);

    useEffect(() => {
        async function carregarFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '47b3ca00a5798ec5cbc9f8707a4ed20a',
                    page: 1
                }
            }); 
            
            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10));
            setCaregando(false);
        }

        carregarFilmes();
    }, [])

    if (carregando) {
        return (
            <div className='carregando'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{ filme.title }</strong>
                            <img 
                                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                                alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;