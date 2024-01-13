import './Card.css';

import React, { useState } from 'react'

const Card = ({data, titulo, texto}) => {
  const [imagemClicada, setImagemClicada] = useState(false);
  const aoClicarNaImagem = () => {
    // Altera o estado para o oposto do valor atual
    setImagemClicada(!imagemClicada);
  }
  return (
    <div className='container'>
        <div className='container-primeiro'>
            <span>{data}</span>
            <img onClick={aoClicarNaImagem} src={imagemClicada ? "./coracao-preenchido.svg" : "./favoritos.svg"} alt="Ícone de coração" />
        </div>
        <div>
            <h2 className='title'>{titulo}</h2>
            <p>{texto}</p>
        </div>
    </div>
  )
}

export default Card