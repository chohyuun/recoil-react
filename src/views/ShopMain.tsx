import { useMount } from 'react-use'
import { type GetNaverShopRequest } from '../server/api/shop.ts'
import { Container, Grid } from '@mui/material'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getShopAtomResponse } from '../recoil/getShop.ts'
import axios from 'axios'
import ItemsCard from './product/ItemsCard.tsx'

// todo: 필터 추가 (키워드 검색, 노출 개수, 정렬, 제외 항목 등)
// todo: cross platform 확인
// todo: cross browsing 개선
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
      } catch (error) {
         console.log(error)
      }
   }

   useMount(() => {
      GetNaverShop({ query: '수영복' })
   })

   return (
      <>
         <Container maxWidth="lg">
            <Grid container rowSpacing={2}>
               {productItems.length > 0 &&
                  productItems.map((item, index) => {
                     return (
                        // todo: key값 최적의 방법 찾아보기
                        <Grid item md={4} sm={6} xs={12} key={item.productId}>
                           <ItemsCard index={index} />
                        </Grid>
                     )
                  })}
            </Grid>
         </Container>
      </>
   )
}

export default ShopMain
