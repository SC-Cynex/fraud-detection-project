import { Spin, Empty, Row, Col, Statistic, Card, Collapse, Progress, Divider } from 'antd';
import Defaultframe from '../components/Defaultframe';
import { useData } from '../context/DataContext';

const { Panel } = Collapse;

const MetricsPage = () => {
  const { metrics, loading } = useData();

  return (
    <Defaultframe>
      <Spin spinning={loading} tip="Carregando métricas..." style={{ minHeight: 'calc(100vh - 200px)' }}>
        {metrics ? (
          <>
            <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 24 }}>
              <Col span={6}>
                <Card>
                  <Statistic title="Accuracy" value={metrics.accuracy} precision={3} />
                  <Progress type="circle" percent={Math.round(metrics.accuracy * 100)} />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic title="Precision" value={metrics.precision} precision={3} />
                  <Progress type="circle" percent={Math.round(metrics.precision * 100)} status="success" />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic title="Recall" value={metrics.recall} precision={3} />
                  <Progress type="circle" percent={Math.round(metrics.recall * 100)} status="active" />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic title="F1-Score" value={metrics.f1_score} precision={3} />
                  <Progress type="circle" percent={Math.round(metrics.f1_score * 100)} status="normal" />
                </Card>
              </Col>
            </Row>

            <Divider orientation="left">📋 Resumo de Processamento</Divider>
            <Row gutter={[16, 16]}>
              <Col span={6}><Card><Statistic title="Transações processadas" value={metrics.total_transacoes} /></Card></Col>
              <Col span={6}><Card><Statistic title="Fraudes reais" value={metrics.total_fraudes_reais} /></Card></Col>
              <Col span={6}><Card><Statistic title="Fraudes detectadas" value={metrics.total_fraudes_detectadas} /></Card></Col>
              <Col span={6}><Card><Statistic title="Transações legítimas" value={metrics.total_legitimas} /></Card></Col>
              <Col span={6}><Card><Statistic title="Previsões corretas" value={metrics.total_acertos} /></Card></Col>
              <Col span={6}><Card><Statistic title="Previsões incorretas" value={metrics.total_erros} /></Card></Col>
            </Row>

            <Divider orientation="left">📖 Explicação das Métricas</Divider>
              <Collapse accordion>
                <Panel header="✅ Accuracy (Acurácia)" key="1">
                  Mede o percentual total de previsões corretas, incluindo tanto fraudes quanto transações legítimas.
                </Panel>
                <Panel header="🎯 Precision (Precisão)" key="2">
                  Indica quantas das transações que o modelo classificou como fraudes realmente eram fraudes.
                </Panel>
                <Panel header="🔍 Recall (Revocação ou Sensibilidade)" key="3">
                  Mede quantas fraudes reais o modelo conseguiu identificar corretamente.
                </Panel>
                <Panel header="⚖️ F1-Score" key="4">
                  Média harmônica entre Precision e Recall. Indica o equilíbrio entre identificar fraudes e não errar.
                </Panel>
              </Collapse>

            <Divider orientation="left">🔍 Padrões que o Modelo Aprendeu</Divider>
            <Card>
              <p>
                O modelo foi treinado com milhares de exemplos e aprendeu a identificar padrões típicos de fraudes com base nos dados disponíveis.
                Alguns dos comportamentos mais comuns detectados são:
              </p>
              <ul style={{ paddingLeft: 20 }}>
                <li>
                  <strong>💸 Tipo de transação:</strong> A maioria das fraudes ocorre em operações do tipo
                  <code> TRANSFER </code> e <code> CASH_OUT</code>, que são movimentações diretas entre contas.
                </li>
                <li>
                  <strong>💰 Valor da transação:</strong> Fraudes costumam envolver quantias elevadas, muitas vezes correspondendo a
                  quase todo o saldo do remetente.
                </li>
                <li>
                  <strong>⚠️ Comportamento de saldo:</strong> O saldo do destinatário muitas vezes não muda após a transação,
                  indicando que o valor foi sacado ou desviado rapidamente.
                </li>
                <li>
                  <strong>🔁 Padrão isolado:</strong> Fraudes frequentemente acontecem em transações isoladas, sem histórico
                  de movimentações antes ou depois.
                </li>
              </ul>
            </Card>

          </>
        ) : (
          <Empty description="Métricas não disponíveis" style={{ minHeight: 'calc(100vh - 200px)' }} />
        )}
      </Spin>
    </Defaultframe>
  );
};

export default MetricsPage;
