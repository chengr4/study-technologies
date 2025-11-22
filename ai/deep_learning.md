# Deep Learning

## Training a Multilayer Neural Network

1. Initialize the weights and biases of the network.
2. Perform forward propagation to compute the output of the network.
3. Calculate the loss function based on the predicted output and true target values.
4. Perform backward propagation to compute the gradient of the loss function with respect to the weights.
5. Update the weights using the computed gradient and a learning rate.
6. Repeat steps 2-5 for multiple epochs or until a stopping criterion is met.

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