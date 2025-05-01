import React from 'react';
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function getItem(label, key, icon, children) {
    return { key, icon, children, label, };
}

const items = [
    getItem("Home", "/"),
    getItem("Métricas", "/metrics"),
    getItem("Gráfico", "/graph"),
    getItem("Transações Fraudulentas", "/frauds"),
];

const Defaultframe = ({ children }) => {
    const navigate = useNavigate();

    const handleMenuClick = (key) => {
        navigate(key);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Menu
                    theme="dark"
                    onClick={({ key }) => handleMenuClick(key)}
                    mode="horizontal"
                    defaultSelectedKeys={[window.location.pathname]}
                    items={items}
                    style={{ width: '100%' }}
                />
            </Header>
            <Content style={{ padding: '0 48px', marginTop: 24 }}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>Projeto de Detecção de Fraudes ©2025</Footer>
        </Layout>
    )
};

export default Defaultframe;
