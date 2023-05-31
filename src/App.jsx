import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Description } from './components/Description';
import { Counter } from './components/counter';
import { MultiplyByTwo } from './components/countMultiplyByTwo';
import { MultiplyByThree} from './components/counterMultiplyByThree';  

function App() {
  return (
    <div className="App">
        <Header />
        <Description />
        <Counter />
        <MultiplyByTwo />
        <MultiplyByThree />
    </div>
  );
}

export default App;
