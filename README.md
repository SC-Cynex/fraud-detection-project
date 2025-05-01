# 🔎 Projeto de Detecção de Fraudes

Este projeto tem como objetivo detectar transações financeiras fraudulentas utilizando **Machine Learning** (Random Forest) com **Python (Flask)** no backend e **React** no frontend.

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/fraud-detection-project.git
cd fraud-detection-project
```

---

### 2. Backend (Python + Flask)

> **Importante:** já precisa ter o arquivo `dataset/PS_20174392719_1491204439457_log.csv` disponível.

#### a) Instalar dependências

```bash
pip install -r requirements.txt
```

> **Arquivo `requirements.txt` recomendado:**
>
> ```
> flask
> flask-cors
> pandas
> scikit-learn
> joblib
> ```

#### b) Treinar o modelo (apenas uma vez)

```bash
python train_model.py
```

> Isso vai gerar um arquivo `model.pkl` (modelo treinado) na pasta.

> Caso o arquivo já exista não é necessário gerar novamente

#### c) Rodar a API Flask

```bash
python server.py
```

> A API estará disponível em `http://localhost:8000`

### 3. Frontend

#### a) Instalar dependências

```bash
cd frontend
npm install
```

#### b) Rodar o frontend

```bash
npm run dev
```

> A aplicação React estará disponível em `http://localhost:5173`

## ⚙️ Tecnologias Utilizadas

- **Backend:** Python, Flask, Scikit-learn, Pandas
- **Frontend:** React, Vite, Ant Design
- **Machine Learning:** Random Forest Classifier

## 📈 Funcionalidades

- Exibe métricas de avaliação (Accuracy, Precision, Recall, F1-Score).
- Mostra transações fraudulentas detectadas.
- Permite visualizar gráficos de distribuição de fraudes.
- Carregamento e navegação entre páginas fluída.
- Context API para gerenciamento centralizado dos dados.

## 🧠 Como o Modelo de Machine Learning Funciona

- O modelo foi treinado com dados rotulados (`isFraud`) para aprender padrões que indicam comportamento fraudulento.
- Durante o treinamento, o algoritmo Random Forest analisou:
  - Tipos de transação mais arriscados (`TRANSFER`, `CASH_OUT`)
  - Valores de transação suspeitos (muito altos)
  - Alterações de saldo incomuns
- Baseado nesses padrões, o modelo faz previsões confiáveis em novas transações.

## 📚 Observações

- O dataset é fictício (PaySim) mas simula dados de transações financeiras.

## 👨‍💻 Desenvolvedores

<table align="center">
  <tr>
     <td align="center"><a href="https://github.com/humberto-peres"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118866895?s=400&u=a12412e21705d58ab604be67c1e1431c80174b64&v=4" width="100px;" alt=""/><br /><sub><b>Humberto Peres</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://github.com/WesllyHn"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/117309594?v=4" width="100px;" alt=""/><br /><sub><b>Weslly Neres</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://github.com/Pellegr1n1"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/119978954?v=4" width="100px;" alt=""/><br /><sub><b>Leandro Pellegrini</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">👨‍🚀</a></td>
    <td align="center"><a href="https://github.com/v0cs"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/104214178?v=4" width="100px;" alt=""/><br /><sub><b>Vítor Celestino</b></sub></a><br /><a href="https://rocketseat.com.br/" title="Rocketseat">🚀</a></td>
    <td align="center"><a href="https://github.com/icl00ud"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98751190?v=4" width="100px;" alt=""/><br /><sub><b>Israel Schroeder</b></sub></a><br /><a href="https://github.com/icl00ud" title="Israel Moreira"></a></td>
  </tr>
</table>
