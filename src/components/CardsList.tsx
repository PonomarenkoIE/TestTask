import React from 'react'
import { ICard } from '../types'
import CardsListItem from './CardsListItem'
import "../styles/css/CardsList.css"

interface CardsListProps {
  cardsList?: ICard[]
}

export default function CardsList({cardsList}: CardsListProps) {
  return (
    <>
      <div className='cards-list'>      
        {cardsList?.map( card =>
          <CardsListItem
            card={card}
            key={card.id}
          />
        )}
      </div>
    </>
  )
}
