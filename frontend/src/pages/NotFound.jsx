import { Button, Result, Flex } from 'antd';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <Flex align="center" justify="center" style={{ minHeight: '100vh' }}>
            <Result
                status="404"
                title="404"
                subTitle="Ops! A página que você está tentando acessar não existe."
                extra={
                    <Button type="primary">
                        <Link to="/">🏠 Voltar para a Home</Link>
                    </Button>
                }
            />
        </Flex>
    );
};

export default NotFoundPage;
