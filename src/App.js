import './App.css';
// compenentler bura gelecek
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Contactus from './components/Contactus'

function App() {
  return (
    <>
     <Navbar />
     <Header />
     <Contactus />
    </>
  );
}

export default App;
