import { Card, Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CardScreen from "./screens/CardScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CardScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
