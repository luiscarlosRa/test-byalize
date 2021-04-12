import CatsList from './components/catsList';
import bg from './images/bg.png';
import './app.scss';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <CatsList/>
    </div>
  );
}

export default App;
