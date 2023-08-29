import {
   Card,
   CardContent,
   CardHeader,
   CardMedia,
   Container,
   Grid,
   Typography,
} from '@mui/material'
import { type NaverShopItems } from '../../server/api/shop.ts'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface Items {
   productItems: NaverShopItems
}
const ItemsCard = ({ productItems }: Items) => {
   const navigate = useNavigate()
   return (
      <>
         <Container>
            <Card
               onClick={() => {
                  navigate(productItems.link)
               }}>
               <CardHeader
                  title={<div dangerouslySetInnerHTML={{ __html: productItems.title }} />}
                  subheader={productItems.brand !== '' && <>{productItems.brand}</>}
               />
               <CardMediaStyle>
                  <CardMedia
                     component="img"
                     width="300px"
                     height="250px"
                     image={productItems.image}
                  />
               </CardMediaStyle>
               <CardContent>
                  <div>가격 : {productItems.lprice}</div>
               </CardContent>
            </Card>
         </Container>
      </>
   )
}

export default ItemsCard

const CardMediaStyle = styled.div`
   display: flex;
   justify-content: center;

   img {
      max-width: 90%;
      max-height: 250px;
   }
`
