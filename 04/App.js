import { Route, Routes} from 'react-router-dom' ;
import MvList from './mv2/MvList' ;
import MvInfoMain from './mv2/MvInfoMain' ;
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<MvList />} /> 
        <Route path='/MvInfoMain/:mvcd' element = {<MvInfoMain />} />
      </Routes>
    </>
  );
}

export default App;