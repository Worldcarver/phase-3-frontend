import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import MealDisplay from "./components/MealDisplay.js"




function App() {
  const [meals, setMeals] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:9292/meals`)
      .then(res => res.json())
      .then(data => setMeals(data))
  }, [])



  return (
    <MealDisplay meals={meals}/>
  )
  

//not days for display prob
//need navbar for days, and use meals for display
//need routes for days
//find images for food
//setup seeds manually instead of faker /wrist





>>>>>>> Stashed changes
}

export default App;
