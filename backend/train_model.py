import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

# Load dataset
data = pd.read_csv("data/model_data_60.csv")

# Example: Suppose your columns are code, name, definition, icd_tm2, icd_biomed, ayush_system
# You can adjust features and label as needed
X = data[['code', 'icd_tm2', 'icd_biomed']]  # input features
y = data['ayush_system']                     # target output

# Convert categorical columns to numeric
X = pd.get_dummies(X)
y = y.astype('category').cat.codes

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"✅ Model trained successfully with accuracy: {accuracy * 100:.2f}%")

# Save model
joblib.dump(model, "models/trained_model.pkl")
print("💾 Model saved as models/trained_model.pkl")
