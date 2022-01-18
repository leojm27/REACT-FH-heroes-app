import React, { useMemo } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    if (!hero) {
        return <Navigate to='/' />;
    }

    const handleReturn = () => {
        navigate(-1);
        /*if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack();
        }*/
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = hero;

    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={imagePath}
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

                <h5>Characters</h5>
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
