import { BoardGame } from './components/BoardGame';
import { GlobalColors } from './styles/colors';
import { GlobalStyle } from './styles/global';
import { Reset } from './styles/reset';
import Modal from 'react-modal'

Modal.setAppElement('#root');

function App() {
  return (
    <>
      <GlobalColors/>
      <GlobalStyle/>
      <BoardGame/> 
      <Reset/>
    </>
   );
}

export default App;
