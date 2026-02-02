
import './index.css'
import Welcome from './Welcome'
import Cards from './Cards'
function App() {
 

  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <div className='mt-23'>
      <Welcome />
      </div> 
      <h1 className='text-amber-400 text-4xl md:text-6xl'> Bitian's</h1>

       <div className='card-wrapper grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-24'>
          <Cards year="First Year" className="flex-[1_1_220px] max-w-65"> </Cards>
          <Cards year="Second Year" className="flex-[1_1_220px] max-w-65"> </Cards>
          <Cards year="Buy N Sell" className="flex-[1_1_220px] max-w-65"> </Cards>
       </div>
    </div>
  )
}

export default App
