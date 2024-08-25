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
      <h1 style={{textAlign: 'center', margin: 50}}>Cards List</h1>
      <div className='cards-list'>      
        {cardsList?.map( card => 
          <CardsListItem
            key={card.id}
            card={card}
          />
        )}
      </div>
    </>
  )
}
