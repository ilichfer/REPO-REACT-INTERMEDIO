
import { styled } from '@mui/material'
import ButtonShop from '../components/ButtonShop'
import NavBar from '../components/NavBar'

export default function Home() {
    styled('div')({
        alignItems: 'center',
    })

  return (
    <>  
    <div>
        <NavBar /> 
        <h1>lista de productos</h1>
    </div>
    </>
  )
}
