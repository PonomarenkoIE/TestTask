import React from 'react'
import { ICard } from '../types'

interface CardsListItemProps {
  card: ICard
}

export default function CardsListItem({card}: CardsListItemProps) {
  return (
    <div className='cards-list__item'>
      <img className='cards-list__item__img' src={card.url} />
      <div className='cards-list__item__id'>card {card.id}</div>
    </div>
  )
}
