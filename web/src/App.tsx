import './styles/global.css'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'
import './lib/dayjs'

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-5 flex flex-col gap-16'>
        <Header />

        <SummaryTable />
      </div>
    </div>   
  )
}