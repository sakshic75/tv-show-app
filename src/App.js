import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ListView from './components/ListView/ListView';




function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div>
        <ListView></ListView>
          <div>
            <Routes>
              {/* <Route path="/listView" element={<ListView />} /> */} 
              {/* <Route path="/detailView" element={<DetailView />} /> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
