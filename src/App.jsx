import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Layout from './layout/Layout';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
