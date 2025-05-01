import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

df = pd.read_csv('../../dataset/PS_20174392719_1491204439457_log.csv')

df = pd.get_dummies(df, columns=['type'])
X = df.drop(['isFraud', 'nameOrig', 'nameDest', 'isFlaggedFraud'], axis=1)
y = df['isFraud']

X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=10, max_depth=10, random_state=42)
model.fit(X_train, y_train)

joblib.dump(model, 'model.pkl')
print("✅ Modelo salvo como 'model.pkl'")
