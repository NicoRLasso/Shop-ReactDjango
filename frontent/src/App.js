import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Headers'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Header/>
      <main className="py-3">
        <Container>
          <HomeScreen/>
          <h1>welcome</h1>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
