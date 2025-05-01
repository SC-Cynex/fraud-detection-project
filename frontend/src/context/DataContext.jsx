import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [metrics, setMetrics] = useState(null);
  const [frauds, setFrauds] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true);
    Promise.all([
      fetch('http://localhost:8000/metrics').then(res => res.json()),
      fetch('http://localhost:8000/frauds?limit=100').then(res => res.json())
    ])
      .then(([metricsData, fraudsData]) => {
        setMetrics(metricsData);
        setFrauds(fraudsData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar dados:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ metrics, frauds, loading, reload: loadData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
