import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';
import './styles/global.css';
import { DataProvider } from './context/DataContext';

import HomePage from './pages/Home';
import MetricsPage from './pages/Metrics';
import GraphPage from './pages/Graph';
import FraudsPage from './pages/Frauds';
import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/metrics', element: <MetricsPage /> },
  { path: '/graph', element: <GraphPage /> },
  { path: '/frauds', element: <FraudsPage /> },
  { path: '*', element: <NotFoundPage /> },''
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
