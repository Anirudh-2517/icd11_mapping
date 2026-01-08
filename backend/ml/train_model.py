import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("📘 Loading dataset...")
df = pd.read_csv("ml/ml_model_2.csv")
print(f"✅ Dataset loaded with {len(df)} records.")
print(f"📊 Columns: {df.columns.tolist()}")

X = df[["model_name", "description", "status", "version", "created_by"]].astype(str)
y = df["associated_system"].astype(str)

X = pd.get_dummies(X)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("⚙️ Training model...")
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

accuracy = model.score(X_test, y_test)
print(f"✅ Model trained successfully with accuracy: {accuracy*100:.2f}%")

os.makedirs("backend/ml/models", exist_ok=True)
joblib.dump(model, "backend/ml/models/ayurmap_model.pkl")
print("💾 Model saved at backend/ml/models/ayurmap_model.pkl")