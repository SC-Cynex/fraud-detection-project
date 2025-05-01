import { useEffect, useState } from 'react';
import { Spin, Empty, Table } from 'antd';
import Defaultframe from '../components/Defaultframe';
import { useData } from '../context/DataContext';

const FraudsPage = () => {
  const { frauds, loading, reload } = useData();

  const fraudColumns = [
    { title: 'Valor', dataIndex: 'amount' },
    { title: 'Tipo', dataIndex: 'transaction_type' },
    { title: 'Saldo Inicial Remetente', dataIndex: 'oldbalanceOrg' },
    { title: 'Saldo Após Transação Remetente', dataIndex: 'newbalanceOrig' },
    { title: 'Saldo Inicial Destinatário', dataIndex: 'oldbalanceDest' },
    { title: 'Saldo Após Transação Destinatário', dataIndex: 'newbalanceDest' },
  ];

  return (
    <Defaultframe>
      <Spin spinning={loading} tip="Carregando transações fraudulentas..." style={{ minHeight: 'calc(100vh - 200px)' }}>
        {frauds.length > 0 ? (
          <Table
            dataSource={frauds.map((f, i) => ({ key: i, ...f }))}
            columns={fraudColumns}
            pagination={{ pageSize: 10, showSizeChanger: false }}
          />
        ) : (
          <Empty description="Nenhuma transação fraudulenta detectada" style={{ minHeight: 'calc(100vh - 200px)' }}/>
        )}
      </Spin>
    </Defaultframe>
  );
};

export default FraudsPage;
