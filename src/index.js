import Reaksi, {useEffect, Router, Route} from "reaksi";

function Home(){
    return (<h1>Homex</h1>);
}

function About(){
    return (<h1>About</h1>);
}

function App(){
    const router = Reaksi.useRouter();
    useEffect(() => console.log('hai there'));
    return (
        <div>
            <div>
                <button onClick={() => router.push('/') }>Home</button>
                <button onClick={() => router.push('/about') }>About</button>
            </div>
            <Router>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Router>
        </div>
    );
}



Reaksi.render(<App/>, document.getElementById('root'));