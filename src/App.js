import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import ('./pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
