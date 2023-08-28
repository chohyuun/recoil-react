import { atom, selector } from 'recoil'
import { type GetNaverShopRequest, type GetNaverShopResponse } from '../server/api/shop.ts'

export const getShopAtomResponse = atom<GetNaverShopResponse>({
   key: 'getShopAtomResponse',
   default: {
      lastBuildDate: '',
      total: 0,
      start: 0,
      display: 0,
      items: [],
   },
})

export const getShopAtomRequest = atom<GetNaverShopRequest>({
   key: 'getShopAtomRequest',
   default: {
      query: '',
   },
})

export const getShopSelectorResponse = selector({
   key: 'getShopSelectorResponse',
   get: ({ get }): GetNaverShopResponse => {
      return get(getShopAtomResponse)
   },
})

export const getShopSelectorRequest = selector({
   key: 'getShopSelectorRequest',
   get: ({ get }): GetNaverShopRequest => {
      return get(getShopAtomRequest)
   },
})
