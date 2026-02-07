# Deep Learning

## When to use DL?

```
if (
    (Highly-structured input || output that can be well aligned with) &&
    (Lots of data || convenient transfer domain) &&
    Reasonable compute
) else {
    SVMs, Random Forests, Boosting, Fourier Features
}
```

## Pre-processing

### Normalization

- Subtract mean and divide by standard deviation
- For image data – often good enough to subtract mean and divide by `max(255)`.

### Data augmentation

- Target: 讓資料多一點、難一點

## Training a Multilayer Neural Network

1. Initialize the weights and biases of the network.
2. Perform forward propagation to compute the output of the network.
3. Calculate the loss function based on the predicted output and true target values.
4. Perform backward propagation to compute the gradient of the loss function with respect to the weights.
5. Update the weights using the computed **gradients** and a **learning rate** with an **optimizer**.
    - Stochastic Gradient Descent, momentum, weight decay, early stopping, learning schedules etc.
6. Repeat steps 2-5 for multiple epochs or until a stopping criterion is met.

> Optimizer is the moving strategy; it considers past momentum or what to do when the terrain is flat.

### Weight Initialization



### Optimization

Early stopping: 

![Early Stopping](/images/early_stopping.png)

Learning rate schedules:

Typically adjust learning rate once every X per epochs

## Regularization in Deep Learning

### Dropout

- 隨機地將一個層中一部分神經元「丟棄」（dropping out）或將其輸出設為零

> Dropout is applied only during training

## Word Embeddings

| 特徵 (維度) | King (國王) | Queen (皇后) | Apple (蘋果) |
|---|---|---|---|
| 高貴程度 | 0.99 | 0.99 | 0.01 |
| 性別 (女=1) | 0.01 | 0.99 | 0.00 |
| 食物屬性 | 0.02 | 0.01 | 0.95 |
| ... | ... | ... | ... |

在這個表格中，每一行的數字組合，就是那個詞的 Embedding。

## DL vs. Traditional ML

![Machine Learning vs Deep Learning](https://i.imgur.com/9Z8X1Y0.png)

- Hand-crafted Features (ML) vs. Automatic Feature Extraction (DL)