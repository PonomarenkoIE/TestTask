import React, { useEffect } from 'react';
import CardsList from './components/CardsList';
import { useFetchCardsQuery } from './store/Cards/cards.api';
import { cardsActions } from './store/Cards/cards.slice';

function App() {
  const {data} = useFetchCardsQuery()

  //Хранение списка карточек в store
  useEffect(() => {
    cardsActions.changeCards(data)
  }, [data])

  return (
    <div className="cards">
      <CardsList cardsList={data}/>
    </div>
  );
}

export default App;
