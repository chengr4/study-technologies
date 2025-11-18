# AI
# Machine Learning

- We only care about test error. 我們不希望我們的機器學習模型只是記住整個訓練集；我們希望它能「泛化」 (generalize)，能對那些與訓練資料相似但前所未見的範例也能處理得很好。
- The point of ML is to find sweet spot between underfitting and overfitting
- Maximizing likelihood objective for learning $w$
- Training, validation, test

## Error Rate

錯誤率 (Error Rate) 代表模型做出錯誤預測的樣本佔總樣本數的比例。

- Training error rate: 模型對自己已經「學過」的資料的擬合程度。
    - 越低越好，但不可以過低（aka. overfitting）
- Dev error rate: 模型的泛化能力（Generalization Ability），即模型對未見過的新資料的預測能力。
    - 調整超參數和選擇最佳模型時的關鍵指標

| 錯誤率比較 | 判斷結果 | 建議/意義 |
|-----------|---------|----------|
| train_err 低 且 dev_err 高 | 過度擬合 (Overfitting) | 模型在訓練資料上學得太好，但在新資料上表現差。應簡化模型或增加正則化。 |
| train_err 高 且 dev_err 高 | 擬合不足 (Underfitting) | 模型沒有從訓練資料中學到足夠的模式。應使用更複雜的模型或更多的特徵。 |
| train_err 低 且 dev_err 低 | 表現良好 | 模型具有良好的泛化能力。 |

## Way to avoid overfitting

1. Use a dev set to monitor the trainnig process, and stop the training when dev error increases (or pick the iteration with the best dev error, which is more commonly used).
2. Explicit control of model complexity via regularization.
3. Use more training data.

## Evaluation

- Use the right metric
- Handle data properly
    - train/dev/test split
    - no test data for tuning
- Be aware of pitfalls
    - data leakage
    - comparing models fairly
    - take care in creating data splits


### Cross-Validation and Leave-One-Out

如果能讓每一部分都輪流當一次開發集，那肯定會更好，這就是所謂的「留一法交叉驗證 (leave-one-out cross-validation)」。

### Nested Cross-Validation

## Classification

See [classification](classification.md)

## Terminology

- Stochastic: 隨機的
- Normalization (歸一化)：是一個資料預處理步驟。
    - 將資料的特徵 (features) 縮放到一個共同的、標準的範圍內
    - E.g. Min-Max Scaling, Z-score Standardization
- Regularization (正則化)：是一種訓練技術，用來防止過度擬合。
    - 懲罰過度複雜的模型
    - L1 Regularization (Lasso)：傾向於讓某些特徵的權重變為 0，有助於特徵篩選。
    - L2 Regularization (Ridge)：傾向於讓所有權重都變小，但不會變為 0。
- Generalization (泛化)：是模型的最終目標，即在新資料上的表現能力。
