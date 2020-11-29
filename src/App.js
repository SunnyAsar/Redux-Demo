import logo from './logo.svg';
import './App.css';
import CityForm from './components/CityForm'
import CityList from './components/cityList'

function App() {
  return (
    <div className="App">
      <CityForm />
      <CityList />
    </div>
  );
}

export default App;
