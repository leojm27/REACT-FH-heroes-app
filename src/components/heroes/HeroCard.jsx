import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../assets/heroes/dc-batman.jpg';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `/assets/${id}.jpg`;

    return (

        <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-4">
                    <img
                        src={imagePath}
                        alt={superhero}
                        className="card-img"
                    />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title"> {superhero} </h5>
                        <p className="card-text"> {alter_ego} </p>
                        {
                            (alter_ego !== characters)
                            && <p className="card-text">{characters}</p>
                        }

                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*


<div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imagePath} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                (alter_ego !== characters)
                                && <p className="text-muted">{characters}</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>


                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>


*/


/*<div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col.md.4">
                    <img
                        src='../../assets/heroes/dc-batman.jpg'

                        className="card-img"
                        alt={superhero}
                    />
                    <p>{id}</p>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"> {superhero} </h5>
                        <p className="card-text"> {alter_ego} </p>
                        {
                            (alter_ego !== characters)
                            && <p className="card-text">{characters}</p>
                        }

                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`./hero/${id}`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>
            {superhero}
        </div>*/