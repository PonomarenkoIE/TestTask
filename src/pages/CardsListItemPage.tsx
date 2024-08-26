import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'
import "../styles/css/CardsListItemPage.css";

export default function CardsListItemPage() {
  const {cardId} = useParams() 
  const storeCard = useAppSelector(state => state.cards.cards[Number(cardId) - 1])

  return (
    <>
      {storeCard 
      ? 
        <div className='cards-page'>
          <img className='cards-page__img' src={storeCard.url} />
          <h2 className='cards-page__id'>Card {cardId}</h2>
          <div className='cards-page__subtitle'>{storeCard.title}</div>
        </div>
      :
        <div>Card not found!</div>
      }
    </>
  )
}
