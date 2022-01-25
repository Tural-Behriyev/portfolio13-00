import './App.css';
// compenentler bura gelecek
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Experience from './components/Experience'
import Contactus from './components/Contactus'
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar />
     <Header />
     <AboutMe />
     <Experience />
     <Contactus />
     <Footer />
    </>
  );
}

export default App;
