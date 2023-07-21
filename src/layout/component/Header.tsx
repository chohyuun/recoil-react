import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Header = () => {
   const navigate = useNavigate()
   return (
      <>
         <header>
            <HeaderLayout>
               <HeaderTitle
                  onClick={() => {
                     navigate('/')
                  }}>
                  Naver Api Shopping
               </HeaderTitle>
            </HeaderLayout>
         </header>
      </>
   )
}

export default Header

const HeaderLayout = styled.div`
   padding: 15px;
   display: flex;
   justify-content: center;
`

const HeaderTitle = styled.a`
   font-weight: 800;
`
