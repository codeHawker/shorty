import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home
 from './routes/home/home.component';
import Redirect from './routes/redirect/redirect.component';
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:shortUrl" element={<Redirect />} />
    </Routes>
  );
}

export default App;
