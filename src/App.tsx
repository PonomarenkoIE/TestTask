import React, { useEffect, useState } from 'react';
import CardsList from './components/CardsList';
import { useFetchCardsQuery } from './store/Cards/cards.api';
import { cardsActions } from './store/Cards/cards.slice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './hooks/useAppSelector';

export function App() {
  const state = useAppSelector(state => state)
  const [isFav, setIsFav] = useState(false)
  const {data} = useFetchCardsQuery()
  const dispatch = useDispatch()

  //Хранение списка карточек в store
  useEffect(() => {
    dispatch(cardsActions.setCards(data))
  }, [data])

  function clickHandler() {
    setIsFav(!isFav)
  }

  return (
    <div className="cards">
      <h1 style={{textAlign: 'center', margin: 50}}>Cards List</h1>
      <button
        className='cards-btn'
        onClick={clickHandler}
      >
        {isFav ? 'Show all cards' : 'Show favorite cards'}
      </button>
      <CardsList cardsList={isFav ? state.favCards.favCards : state.cards.cards }/>
    </div>
  );
}

export default App;