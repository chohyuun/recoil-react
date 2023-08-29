import Header from './component/Header.tsx'
import Footer from './component/Footer.tsx'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const DefaultLayout = () => {
   return (
      <>
         <section>
            <Header />
            <Content>
               <Outlet />
               <Footer />
            </Content>
         </section>
      </>
   )
}

export default DefaultLayout

const Content = styled.div`
   position: relative;
   flex: auto;
   width: 100%;
   margin: 60px 0 55px;
   padding: 0 15px 10px;
`
