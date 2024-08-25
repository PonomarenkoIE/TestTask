import React from 'react'
import { ICard } from '../types'
import CardsListItem from './CardsListItem'

interface CardsListProps {
  cardsList?: ICard[]
}

export default function CardsList({cardsList}: CardsListProps) {
  return (
    <div>
      {cardsList?.map( card => 
        <CardsListItem
          key={card.id}
          card={card}
        />
      )}
    </div>
  )
}
