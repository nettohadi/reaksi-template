import Reaksi, {useState} from "reaksi";

export default function App(){
    const [count, setCount] = useState(0);
    const handleCount = (number) => {
        console.log('handlde count');
        setCount(count => count + number );
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <div>
                <button onclick={() => handleCount(1)}>+</button>
                <button onclick={() => handleCount(-1)}>-</button>
            </div>
        </div>
    );
}