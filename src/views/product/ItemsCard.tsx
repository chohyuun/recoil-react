import { Card, CardContent, CardHeader, CardMedia, Container } from '@mui/material'
import styled from 'styled-components'
import { useState } from 'react'
import { useMount } from 'react-use'
import { useRecoilValue } from 'recoil'
import { getShopAtomResponse } from '../../recoil/getShop.ts'

// todo: item 내용 추가
const ItemsCard = ({ index }: { index: number }) => {
   const getShopItems = useRecoilValue(getShopAtomResponse)
   const productItem = getShopItems.items[index]
   const [cateStr, setCateStr] = useState('')

   const CategoryInfo = () => {
      const resultArr: string[] = []
      for (const [key, value] of Object.entries(productItem)) {
         if (key.includes('category')) {
            if (value !== '' && value !== undefined) {
               resultArr.push(value)
            } else {
               break
            }
         }
      }

      const result = resultArr.map((value) => {
         return value + ' > '
      })

      result.splice(result.length - 1, 1, result[result.length - 1].replace(' > ', ''))
      setCateStr(result.join(''))
   }

   useMount(() => {
      CategoryInfo()
   })

   return (
      <>
         <Container>
            <Card
               onClick={() => {
                  document.location.replace(productItem.link)
               }}>
               <CardHeader
                  title={<div dangerouslySetInnerHTML={{ __html: productItem.title }} />}
                  subheader={
                     <>
                        <CategoryStyle>{cateStr}</CategoryStyle>
                        <div>{productItem.mallName}</div>
                     </>
                  }
               />
               <CardMediaStyle>
                  <CardMedia
                     component="img"
                     width="300px"
                     height="250px"
                     image={productItem.image}
                  />
               </CardMediaStyle>
               <CardContent>
                  <div>가격 : {productItem.lprice}</div>
               </CardContent>
            </Card>
         </Container>
      </>
   )
}

export default ItemsCard

const CategoryStyle = styled.span`
   font-size: 12px;
   color: #848484;
`

const CardMediaStyle = styled.div`
   display: flex;
   justify-content: center;

   img {
      max-width: 90%;
      max-height: 250px;
   }
`
