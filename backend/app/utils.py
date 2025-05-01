import pandas as pd
import joblib
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix

model = joblib.load('model.pkl')

def load_data():
    df = pd.read_csv('../../dataset/PS_20174392719_1491204439457_log.csv')
    
    df['transaction_type'] = df['type']
    
    df = pd.get_dummies(df, columns=['type'])
        
    X = df.drop(['isFraud', 'nameOrig', 'nameDest', 'isFlaggedFraud', 'transaction_type'], axis=1)
    y = df['isFraud']
    
    return X, y, df


def predict_all():
    X, y, df_raw = load_data()
    y_pred = model.predict(X)
    df_raw['prediction'] = y_pred
    return y, y_pred, df_raw

def get_metrics():
    y_true, y_pred, df_raw = predict_all()

    total_transacoes = len(df_raw)
    total_fraudes_reais = df_raw['isFraud'].sum()
    total_fraudes_detectadas = (df_raw['prediction'] == 1).sum()
    total_legitimas = total_transacoes - total_fraudes_reais
    total_acertos = (y_true == y_pred).sum()
    total_erros = (y_true != y_pred).sum()

    metrics = {
        "accuracy": accuracy_score(y_true, y_pred),
        "precision": precision_score(y_true, y_pred, zero_division=0),
        "recall": recall_score(y_true, y_pred, zero_division=0),
        "f1_score": f1_score(y_true, y_pred, zero_division=0),
        "confusion_matrix": confusion_matrix(y_true, y_pred).tolist(),
        "total_transacoes": int(total_transacoes),
        "total_legitimas": int(total_legitimas),
        "total_fraudes_reais": int(total_fraudes_reais),
        "total_fraudes_detectadas": int(total_fraudes_detectadas),
        "total_acertos": int(total_acertos),
        "total_erros": int(total_erros),
    }

    return metrics

def get_detected_frauds():
    _, _, df_raw = predict_all()
    frauds_detected = df_raw[df_raw['prediction'] == 1].copy()

    return frauds_detected
