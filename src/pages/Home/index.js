import { useEffect, useState } from 'react';
import api from '../../services/api';

// https://api.themoviedb.org/3/movie/now_playing?api_key=47b3ca00a5798ec5cbc9f8707a4ed20a

function Home() {
    const [ filmes, setFilmes ] = useState([]);

    useEffect(() => {
        async function carregarFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '47b3ca00a5798ec5cbc9f8707a4ed20a',
                    page: 1
                }
            }); console.log(response.data.results);
        }

        carregarFilmes();
    }, [])

    return (
        <div>
            <h1>Página inicial</h1>
        </div>
    )
}

export default Home;