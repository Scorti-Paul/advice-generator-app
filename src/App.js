import patternDivMobile from './assets/pattern-divider-mobile.svg'
import patternDivDesktop from './assets/pattern-divider-desktop.svg'
import iconDice from './assets/icon-dice.svg'
import { useEffect, useState } from 'react';

function App() {
  const [advices, setAdvices] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json()
    const { slip } = data

    setData(slip)
    setLoading(true)
  }

  useEffect(() => {
    getData()
  }, [loading, advices])


  return (
    <main>
      {loading &&
        <div>
          <div className='bg-darkGrayishBlue mx-10  md:w-[460px]  pt-10 pb-12 rounded-xl text-center'>

            <div className='text-neonGreen/70 text-sm font-bold tracking-[3px]'>
              ADVICE #{data.id}
            </div>
            <blockquote className='text-lightCyan font-[800] px-2 py-6 text-[28px] leading-9'>
              "{data.advice}"
            </blockquote>


            {
              window.innerWidth >= 768 ?
                <img className='py-4 mx-auto' src={patternDivMobile} alt="pattern divider" /> :
                <img className='py-4 mx-auto' src={patternDivDesktop} alt="pattern divider" />
            }

          </div>
          <button onClick={() => { setAdvices(!advices) }} className='iconDice w-[70px] h-[70px] mx-auto mt-[-30px] flex justify-center items-center rounded-full bg-neonGreen hover:cursor-pointer'>
            <img className='w-2/5' src={iconDice} alt="dice icon" />
          </button>
        </div>}
    </main>
  );
}

export default App;
