import { Heading } from '@chakra-ui/react'
import Search from '../Components/Search Trains/Search.jsx'
import logo from './../assets/app-logo.svg'
export default function Layout() {
  return (
    <div>
      {/* <Heading textAlign="center" color={'white'} paddingY={'8px'}>{logo}</Heading> */}
      <img src={logo} alt="" className='block mx-auto w-52' />
      <Search />
    </div>
  )
}
