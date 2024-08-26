import React, { useState } from 'react'
import { ICard } from '../types'
import { Link } from 'react-router-dom'
import deleteIcon from '../img/delete.svg'
import likeIcon from '../img/like.svg'
import likeActiveIcon from '../img/likeActive.svg'
import { useDispatch } from 'react-redux'
import { cardsActions } from '../store/Cards/cards.slice'
import { favCardsActions } from '../store/favCards/favCards.slice'

interface CardsListItemProps {
  card: ICard
}

export default function CardsListItem({card}: CardsListItemProps) {
  const [isLiked, setIsLiked] = useState(false)
  const dispatch = useDispatch()

  function removeHandler() {
    dispatch(cardsActions.removeCard(card))
    if (isLiked) dispatch(favCardsActions.remove(card))
  }

  function likeHandler() {
    isLiked 
    ? dispatch(favCardsActions.remove(card))
    : dispatch(favCardsActions.add(card))

    setIsLiked(!isLiked)
  }

  return (    
      <div className='cards-list__item'>
        <img 
          className='icons icons-delete' 
          src={deleteIcon}
          onClick={removeHandler}
          alt="del" 
        />
        <img 
          className='icons icons-like' 
          src={isLiked ? likeActiveIcon : likeIcon}
          onClick={likeHandler}
          alt="like" 
        />
        <Link to={`/${card.id}`} >
          <img className='cards-list__item__img' src={card.url} alt='card'/>
          <div className='cards-list__item__id'>card {card.id}</div>
        </Link>
      </div>    
  )
}
