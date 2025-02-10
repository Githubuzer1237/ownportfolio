import React, { useState } from 'react';
import s from './Card.module.scss';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Card = ({ image, name, description, technologies, link }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <div className={s.card}>
            <div className={s.image}>
                {!isImageLoaded && <Skeleton height={200} />}
                <img
                    src={image}
                    alt={description}
                    onLoad={() => setIsImageLoaded(true)}
                    style={{ display: isImageLoaded ? 'block' : 'none' }}
                />
                <Link target="_blank" className={s.link} to={link}>
                    <FaArrowRight />
                </Link>
            </div>

            <div className={s.box}>
                <div>
                    <h3>{name || <Skeleton width={100} />}</h3>
                    <p>{description || <Skeleton count={2} />}</p>
                </div>

                <ul>
                    {technologies.length > 0 ? (
                        technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))
                    ) : (
                        <Skeleton count={3} />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Card;
