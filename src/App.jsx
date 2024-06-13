import Aside from './Components/Aside'
 import Wallet from './Components/Wallet'
export default function App() {
  return (
    <div className="h-screen w-screen bg-backgrouidcolor  flex">
      <div className='w-1/6'>
      <Aside/>
      </div>
     <div className='w-screen'>
     <Wallet/>
     </div>
    </div>
  )
}
