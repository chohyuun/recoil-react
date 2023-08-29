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
   // linear-gradient : 그라데이션 설정 (색상 00%: 00%까지 지정한 색상 표시)
   background: linear-gradient(
      rgba(255, 255, 255, 0) 5%,
      rgba(255, 255, 255, 0.5) 40%,
      rgba(255, 255, 255) 100%
   );
   height: 50px;
   padding: 15px 15px 5px;
   font-size: 12px;
`
