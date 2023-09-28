import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Starships from './components/Starships';
import Footer from './components/footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body-content'>
        <Container>
          <Row>
            <Starships />
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
