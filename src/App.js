import './App.css';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Hola mundo ItemListContainer" />
    </div>
  );
}

export default App;
