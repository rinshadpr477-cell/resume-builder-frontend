import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage';
import UserForm from './pages/UserForm';
import ResumeGenerator from './pages/ResumeGenerator';
import History from './pages/History';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div style={styles.app}>
      <Header />

      <div style={styles.main}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/resume' element={<ResumeGenerator />} />
          <Route path='/form' element={<UserForm />} />
          <Route path='/history' element={<History />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
};

export default App;