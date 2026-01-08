import sys
import pandas as pd
import joblib
import json
# Load model
model = joblib.load("backend/ml/models/ayurmap_model.pkl")
# Input from Node.js
input_json = json.loads(sys.argv[1])
df = pd.DataFrame([input_json])
df = df.astype(str)
df = pd.get_dummies(df)
# Align columns
for col in model.feature_names_in_:
    if col not in df.columns:
        df[col] = 0
df = df[model.feature_names_in_]
# Predict
prediction = model.predict(df)[0]
result = {"predicted_ayush_system": prediction}
print(json.dumps(result))