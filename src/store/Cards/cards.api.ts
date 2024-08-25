import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard, IServerResponse } from '../../types';

export const cardsApi = createApi({
  reducerPath: 'cards/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: build => ({
    fetchCards: build.query<ICard[], void>({
      query: () => `/albums/1/photos`,
      //Удаление неиспользуемого поля из ответа сервера
      transformResponse: 
        (responce: IServerResponse[]): ICard[] => 
          responce.map( (card: IServerResponse) => {
            delete card.thumbnailUrl
            return card
          })
    })
  })
});

export const {useFetchCardsQuery} = cardsApi