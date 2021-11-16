import { useState } from 'reaksi';
import './App.css';

export default function App() {
   const [count, setCount] = useState(0);
   const handleCount = (number) => {
      setCount((count) => count + number);
   };
   return (
      <div className='wrapper'>
         <div className='reaksi-logo'>
            <img
               src='https://reaksi.hadi-syahbal.com/images/Reaksi_logo.png'
               alt='reaksi-logo'
               width='100%'
               height='100%'
            />
            <h2>Reaksi JS</h2>
         </div>
         <h2>Count : {count}</h2>
         <div>
            <button onclick={() => handleCount(1)}>+</button>
            <button onclick={() => handleCount(-1)}>-</button>
         </div>
      </div>
   );
}
