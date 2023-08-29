import { useMount, useUpdateEffect } from 'react-use'
import { type GetNaverShopRequest } from '../server/api/shop.ts'
import { Container, Grid } from '@mui/material'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getShopAtomResponse } from '../recoil/getShop.ts'
import axios from 'axios'
import ItemsCard from './product/ItemsCard.tsx'

const ShopMain = () => {
   const setShopRecoil = useSetRecoilState(getShopAtomResponse)
   const getShopItem = useRecoilValue(getShopAtomResponse)
   const productItems = getShopItem.items

   const GetNaverShop = async (request: GetNaverShopRequest) => {
      try {
         await axios
            .get(`/v1/search/shop.json`, {
               params: {
                  query: request.query,
               },
               headers: {
                  'X-Naver-Client-Id': import.meta.env.VITE_NAVER_ID,
                  'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_PASS,
               },
            })
            .then((response) => {
               const data = response.data
               setShopRecoil(data)
            })
      } catch {
         console.log('error')
      }
   }

   useMount(() => {
      GetNaverShop({ query: '수영복' })
   })

   useUpdateEffect(() => {}, [getShopItem])

   return (
      <>
         <Container maxWidth="lg">
            <Grid container rowSpacing={2}>
               {productItems.map((item, index) => {
                  return (
                     <Grid item md={4} sm={6} xs={12} key={index}>
                        <ItemsCard productItems={item} />
                     </Grid>
                  )
               })}
            </Grid>
         </Container>
      </>
   )
}

export default ShopMain
