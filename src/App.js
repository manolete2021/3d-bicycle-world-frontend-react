import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <AppRoutes />
      </>
    </BrowserRouter>
  );
}

export default App;
