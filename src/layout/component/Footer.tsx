import styled from 'styled-components'

const Footer = () => {
   return (
      <>
         <footer>
            <FooterContent>
               shopping Naver Api
               <div>
                  <a
                     href="https://developers.naver.com/products/service-api/datalab/datalab.md"
                     target="_blank"
                     rel="noopener noreferrer">
                     Naver Open Api
                  </a>
               </div>
            </FooterContent>
         </footer>
      </>
   )
}

export default Footer

const FooterContent = styled.div`
   color: #848484;
   padding: 20px 15px 5px;
   font-size: 12px;
`
