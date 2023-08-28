import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout.tsx'
import ShopMain from './views/ShopMain.tsx'

function App() {
   return (
      <RecoilRoot>
         <BrowserRouter>
            <Routes>
               <Route path="*" element={<DefaultLayout />}>
                  <Route index element={<ShopMain />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </RecoilRoot>
   )
}

export default App
