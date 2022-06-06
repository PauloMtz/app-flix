import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ filme, setFilme ] = useState({});
    const [ carregando, setCarregando ] = useState(true);

    useEffect(() => {
        async function carregarFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '47b3ca00a5798ec5cbc9f8707a4ed20a',
                    language: 'pt-BR'
                }
            })
            .then((response) => {
                //console.log(response.data)
                setFilme(response.data);
                setCarregando(false);
            })
            .catch(() => {
                console.log("Filme não encontrado");
                navigate("/", {replace: true});
                return;
            })
        }

        carregarFilme();

        return () => {
            console.log("Componente desmontado com sucesso!")
        }
    }, [navigate, id])

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@app-flix");
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if (hasFilme) {
            alert("Este filme já foi adicionado à sua lista.");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@app-flix", JSON.stringify(filmesSalvos));
        alert("Filme adicionado à sua lista com sucesso!");
    }

    if (carregando) {
        return (
            <div className='detalhes-filme'>
                <h2>Carregando detalhes do filme...</h2>
            </div>
        )
    }

    return (
        <div className='detalhes-filme'>
            <h2>{ filme.title }</h2>
            <img 
                src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a 
                        target="blank" rel='external'
                        href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;