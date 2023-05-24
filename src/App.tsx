import './App.css'
import IPonSpecs from './models/PonSpecs';
import { CalculateWithoutCoefficient, CalculateWithoutDistance, CalculateWithoutReception, CalculateWithoutTransmissionPower } from './utils/PONCalculator';

function App() {
  const calculate = () => {
    const specs : IPonSpecs = {
      transmissionPower: 100,
      receptionPower: 40,
      attenuationCoefficient: 10,
      distance: 6,
    };

    CalculateWithoutDistance(specs);
    CalculateWithoutTransmissionPower(specs);
    CalculateWithoutReception(specs);
    CalculateWithoutCoefficient(specs);
  }

  return (
    <>
      <button type="button" className='px-4 bg-violet-500 rounded font-semibold text-white h-10 hover:bg-violet-800'
        onClick={calculate}>
        Oi
      </button>
    </>
  )
}

export default App
