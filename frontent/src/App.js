import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Headers'
import Footer from './components/Footer'
import { BrowserRouter as Router ,Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router >
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
