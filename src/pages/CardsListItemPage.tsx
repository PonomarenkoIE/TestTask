import React from 'react'

export default function CardsListItemPage() {
  return (
    <div className='cards-list__item'>
      <img className='cards-list__item__img' src={''} />
      <div className='cards-list__item__id'>card {}</div>
      <div className='cards-list__item__subtitle'>{}</div>
    </div>
  )
}
