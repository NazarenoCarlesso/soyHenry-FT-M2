import React from 'react';
import { Link } from 'react-router-dom';
import styleCard from './Card.module.css';

export default function Card({ name, image, id }) {
   return (
      <div className={styleCard.container}>
         <Link to={`/cruises/${id}`} >
            <h4>{name}</h4>
            <img src={image} alt='' />
         </Link>
      </div>
   );
}
