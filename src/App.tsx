import { useState } from 'react'
import { MobileNavigation, ProductDetail } from './components'
import './App.css'

function App() {

  return (
    <>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
       

        <div>
          <ProductDetail/>
          {/* <MobileNavigation /> */}
        </div>
      </div>
    </>
  )
}

export default App
