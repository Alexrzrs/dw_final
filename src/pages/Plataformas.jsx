import React,{useState, useEffect} from "react";
import '@styles/Plataformas.scss';
//import useGetEpisode from "../hooks/useGetEpisode";
import EpisodeCard from "@components/EpisodeCard";
import CarruselCard from "@components/CarruselCard";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";
import hbomax from "@assets/hbo-max.png";
import hulu from "@assets/hulu.png";
import itunes from "@assets/itunes.png";
import amazon from "@assets/amazon.png";
import googleplay from "@assets/google-play.png";
import vudu from "@assets/vudu.png";


const Plataformas = () => {
    const plataformas = [
        {
            title: "HBO max",
            image: hbomax,
            description: "HBO Max es la nueva plataforma de streaming que reúne todos los contenidos de HBO junto con aún más éxitos de taquilla, series generadoras de obsesión y exclusivos Max Originals. Cada mes más estrenos de peliculas y series. Muchos de ellos los puedes conseguir en la pagina oficial de HBO Max.",
            price: "$149 mensuales de suscripción"
        },
        {   title: "Hulu",
            image: hulu,
            description: "Hulu es un servicio de suscripción de vídeo bajo demanda propiedad de Hulu LLC, Disney-ABC, Fox Entertainment, NBCUniversal y Turner Broadcasting System. Está orientado principalmente a las series y programas de entretenimiento como realitys, talk shows o concursos, pero también incluye películas y documentales.",
            price: "$11.99 mensuales de suscripción"
        },
        {   title: "iTunes",
            image: itunes,
            description: "Plataforma novedosa que se usa para adquirir copias digitales de piezas audiovisuales como álbumes musicales, sencillos, episodios de series de televisión y videos musicales. Contenido nuevo y antigua a un execelente precio, para disfrutar todo tipo de contenido audivisual.",
            price: "SD/$1.99 o HD/$2.99 de alquiler"
        },
        {   title: "Amazon",
            image: amazon,
            description: "Prime Video (anteriormente Amazon Prime Video) es un servicio de streaming OTT de películas y series creado y gestionado por Amazon. Se ofrece como un servicio independiente o como parte de la suscripción a Amazon Prime. El servicio distribuye principalmente películas y series de televisión producidas por Amazon Studios y MGM Holdings o con licencia de Amazon, como los Amazon Originals, y también aloja contenido de otras cadenas, eventos deportivos en vivo, servicios de alquiler y canales de televisión en vivo con o sin costo adicional.",
            price: "SD/$1.99 o HD/$2.99 de alquiler"
        },
        {   title: "Google Play",
            image: googleplay,
            description: "Google TV es un servicio de vídeo bajo demanda operado por Google. El servicio ofrece películas y programas de televisión para su compra o alquiler, según la disponibilidad. La plataforma ofrece y vende contenido audiovisual para todo tipo de publico",
            price: "SD/$1.99 de alquiler"
        },
        {   title: "Vudu",
            image: vudu,
            description: "Servicio de transmisión para alquilar y comprar contenido de video digital, se lanza en la plataforma Amazon Fire TV, que incluye televisores inteligentes y dispositivos de TV conectados. Ofrece más de 10 mil títulos y programas de televisión gratuitos en un servicio con publicidad, además de 150 mil títulos para alquilar o comprar.",
            price: "SD/$1.99 o HD/$2.99 de alquiler"
        }
    ];
    const [search, setSearch] = useState("")
    const [episode, setEpisode] = useState([])
    const [info, setInfo] = useState({})
    const [page, setPage] = useState('https://rickandmortyapi.com/api/episode?page=1')

    useEffect(() => {
        axios.get(page)
            .then(res => {
                setEpisode(res.data.results)
                setInfo(res.data.info)
            })
    }, [page])

    const handlePageChange = (url) => {
        setPage(url)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const searcher = (e) => {
        setSearch(e.target.value);
    }

    const results = !search ? episode : episode.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
    
    return (
        <div className="plataformas">
            <div className="plataformas-container">
                <div className="plataformas-carrusel">
                    <CarruselCard plataformas={plataformas}/>
                </div>
                <h2 className="title">Episodios disponibles</h2>
                <div className="search-episodes">
                    <input className="search-input" value={search} type="text" onChange={searcher} placeholder="Buscar por nombre"/>
                    <div className="search"></div>
                </div>
                <div className="list-episodes">
                    {results.map(episode=>{
                        return <EpisodeCard episode={episode} key={episode.id}/>
                    })}
                </div>
                <div className="control-episodes">
                    {info.prev ? <FaArrowCircleLeft className="control-b" onClick={() => handlePageChange(info.prev)} /> : <div></div>}
                    <p>{page.charAt(page.length - 1)} / {info.pages}</p>
                    {info.next ? <FaArrowCircleRight className="control-b" onClick={() => handlePageChange(info.next)} /> : <div></div>}
                </div>
            </div>
        </div>
    );
}

export default Plataformas;