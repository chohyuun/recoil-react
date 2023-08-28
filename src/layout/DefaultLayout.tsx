import Header from './component/Header.tsx'
import Footer from './component/Footer.tsx'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const DefaultLayout = () => {
   return (
      <>
         <DisplayLayout>
            <Header />
            <Content>
               <Outlet />
               <Footer />
            </Content>
         </DisplayLayout>
      </>
   )
}

export default DefaultLayout

const DisplayLayout = styled.section`
   display: flex;
`

const Content = styled.div`
   position: relative;
   flex: auto;
   height: calc(100vh - 64px);
   width: 100%;
   margin: 54px 0 0;
   padding: 0 15px 10px;
`
