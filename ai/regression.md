# Regression

- Aims to predict continuous numerical values based on input data

## Regularization

Regularization is a technique that can be used to **prevent overfitting** in linear regression models and improve the generalization performance.

- By adding a penalty term to the cost function 

Regularization is an important technique for improving the performance of linear regression models, **especially when dealing with high-dimensional data or limited amounts of training data.**

### L2 Regularization (Ridge Regression)

趨向於產生「平滑」的解，能防止模型過度擬合。

### L1 Regularization (Lasso Regression)

For 特徵篩選

## Optimization Algorithms (to minimize)

## Stochastic Gradient Descent (隨機梯度下降)

- for large-scale datasets, because it is computationally efficient.

## Normal Equation

For $n = 1000000$, it need 74 GB RAM to store the matrix.

另一方面，梯度下降法 (gradient descent) 只需要非常少的記憶體，並且可以處理大規模資料集。 所以這是一個 trade-off 。

## Non-linear Regression

