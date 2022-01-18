import React, { useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { heroesImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';
//import batman from '../../assets/dc-batman.jpg';


export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();
    const navigate = useNavigate();

    // useMemo memoriza valores, evitamos asi consultas innecesarias a la BD
    // [heroeId] es la dependencia, si cambia se vuelve a disparar la peticion
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    // path con ID erroneo, me devuelve al home
    if (!hero) {
        return <Navigate to='/' />;
    }

    const handleReturn = () => {
        navigate(-1);
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = hero;

    //const imagePath = `../../assets/${id}.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    // src={imagePath} // desde public/assets
                    // src={batman} // import
                    src={heroesImages(`./${id}.jpg`).default}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: {alter_ego}</b></li>
                    <li className="list-group-item"><b>Publisher: {publisher}</b></li>
                    <li className="list-group-item"><b>First Appearance: {first_appearance}</b></li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{characters}</p>
                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>

            </div>
        </div>
    )
}
