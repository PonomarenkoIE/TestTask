import React from 'react'
import { ICard } from '../types'
import { Link } from 'react-router-dom'

interface CardsListItemProps {
  card: ICard
}

export default function CardsListItem({card}: CardsListItemProps) {
  return (    
      <div className='cards-list__item'>
        <Link to={`/${card.id}`} >
          <img className='cards-list__item__img' src={card.url} />
          <div className='cards-list__item__id'>card {card.id}</div>
        </Link>
      </div>    
  )
}
