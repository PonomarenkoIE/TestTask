export interface ICard {
  albumId: number
  id: number
  title: string
  url: string
}

export type IServerResponse = (ICard & {thumbnailUrl?: string})