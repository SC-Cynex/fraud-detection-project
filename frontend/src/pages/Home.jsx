import { Button, Card, Collapse, Flex, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Defaultframe from '../components/Defaultframe';
import icon1 from '../assets/images/rachaduras.png';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const HomePage = () => {
  return (
    <Defaultframe>
      <Card style={{ margin: 24 }}>
        <Flex justify="space-between" wrap="wrap">
          <div style={{ maxWidth: 600 }}>
            <Title style={{ fontFamily: 'Bebas Neue, sans-serif', fontWeight: 400 }}>
              Projeto de Detecção de Fraudes
            </Title>
            <Paragraph>
              Este projeto tem como objetivo identificar transações financeiras fraudulentas utilizando Machine Learning.
              O sistema analisa transações e gera métricas de desempenho, gráficos ilustrativos e a listagem de fraudes detectadas.
            </Paragraph>
            <Paragraph strong>Você pode acessar as seguintes seções:</Paragraph>

            <Flex align="center" justify="start" wrap="wrap" style={{ marginTop: '24px' }}>
              <Button type="primary" href="/metrics" size="large" style={{ margin: '8px' }}>
                Métricas
              </Button>
              <Button type="primary" href="/graph" size="large" style={{ margin: '8px' }}>
                Gráfico
              </Button>
              <Button type="primary" href="/frauds" size="large" style={{ margin: '8px' }}>
                Transações Fraudulentas
              </Button>
            </Flex>
          </div>

          <img
            src={icon1}
            alt="icone de fraude"
            width={250}
            height={250}
            style={{ objectFit: 'contain', marginTop: 16 }}
          />
        </Flex>
      </Card>

      <Flex justify="center" wrap="wrap" gap="16px" style={{ padding: 24 }}>
        <Card
          title="📊 Métricas"
          style={{ width: 320 }}
          hoverable
        >
          <Collapse ghost>
            <Panel header="Clique para saber mais" key="1">
              Exibe indicadores como:
              <ul>
                <li>Accuracy (acertos totais)</li>
                <li>Precision (fraudes certas)</li>
                <li>Recall (fraudes encontradas)</li>
                <li>F1-Score (equilíbrio entre ambos)</li>
              </ul>
            </Panel>
          </Collapse>
        </Card>

        <Card
          title="📈 Gráfico"
          style={{ width: 320 }}
          hoverable
        >
          <Collapse ghost>
            <Panel header="Clique para saber mais" key="2">
              Mostra a proporção entre transações legítimas e fraudulentas em formato visual (gráfico de pizza).
            </Panel>
          </Collapse>
        </Card>

        <Card
          title="🧠 Algoritmo Utilizado"
          style={{ width: 320 }}
          hoverable
        >
          <Collapse ghost>
            <Panel header="Clique para saber mais" key="3">
              O projeto utiliza o <strong>Random Forest Classifier</strong>, que combina várias Árvores de Decisão para
              obter uma previsão mais robusta — ideal para detectar fraudes em conjuntos de dados desbalanceados.
            </Panel>
          </Collapse>
        </Card>
      </Flex>
    </Defaultframe>
  );
};

export default HomePage;
