import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './componentes/main';
//import BasicModal from './componentes/modal';
import { RickAndMortyList } from './componentes/modal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path='/rym' element={<RickAndMortyList />} />
      </Routes>
    </Router>
  );
}

export default App;