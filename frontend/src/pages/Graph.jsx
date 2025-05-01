import { useEffect, useState } from 'react';
import { Spin, Empty, Card, Flex } from 'antd';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import Defaultframe from '../components/Defaultframe';
import { useData } from '../context/DataContext';

Chart.register(ArcElement, Tooltip, Legend);

const GraphPage = () => {
  const { metrics, loading, reload } = useData();

  return (
    <Defaultframe>
      <Spin spinning={loading} tip="Carregando gráfico..." style={{ minHeight: 'calc(100vh - 200px)' }}>
        {metrics ? (
            <Card title="📈 Distribuição de Fraudes Detectadas">
              <Flex justify="center" style={{ maxHeight: 'calc(100vh - 260px)' }}>
                <Pie
                  data={{
                    labels: ['Legítimas', 'Fraudes'],
                    datasets: [
                      {
                        data: [1 - metrics.recall, metrics.recall],
                        backgroundColor: ['#36A2EB', '#FF6384'],
                      },
                    ],
                  }}
                />
              </Flex>
            </Card>
        ) : (
          <Empty description="Gráfico não disponível" style={{ minHeight: 'calc(100vh - 200px)' }} />
        )}
      </Spin>
    </Defaultframe>
  );
};

export default GraphPage;
