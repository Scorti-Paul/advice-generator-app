import patternDivMobile from './assets/pattern-divider-mobile.svg'
import patternDivDesktop from './assets/pattern-divider-desktop.svg'
import iconDice from './assets/icon-dice.svg'

function App() {
  return (
    <main>
      <div className='bg-darkGrayishBlue mx-auto sm:w-11/12 md:w-2/5 px-4 pt-10 pb-12 rounded-xl text-center'>
        <h1 className='text-neonGreen/80 text-sm font-bold tracking-[3px] '>ADVICE #117</h1>
        <blockquote className='text-lightCyan font-[800] text-[28px] py-4 leading-9'>
          "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        </blockquote>
        {
          window.innerWidth >= 768 ?
            <img className='py-4 mx-auto' src={patternDivMobile} alt="pattern divider" /> :
            <img className='py-4 mx-auto' src={patternDivDesktop} alt="pattern divider" />
        }

      </div>
      <div className='iconDice w-[70px] h-[70px] mx-auto mt-[-30px] flex justify-center items-center rounded-full bg-neonGreen hover:cursor-pointer'>
        <img className='w-2/5' src={iconDice} alt="dice icon" />
      </div>
    </main>
  );
}

export default App;
