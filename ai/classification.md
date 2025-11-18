# Classification

- Use sigmoid function to map the output to (0, 1)
- logistic regression: 用於二元分類問題（例如，判斷一封郵件是垃圾郵件還是非垃圾郵件）=> find discision boundary
- Maximum a-posteriori prediction (MAP): 給定觀測數據的情況下，選擇最有可能（機率最高）的那個參數或假設。
- Multinomial logistic regression (softmax regression): 用於多類別分類問題（例如，識別圖片中的物體是貓、狗還是鳥）

## The Perceptron Algorithm

- 感知器演算法
- 監督式學習演算法
- 用於訓練一個二元分類器 (Binary Classifier)

### Linear Separaton

> See image

- support SVM

### The Perceptron Convergence Theorem

> See image

This theorem is remarkable because:

1. it is independent of dimensionality (features)
2. it is independent of the number of training examples
3. it is independent of the order of iteration through the training set; you can iterate in any order.
4. 收斂速度由「分離難度」決定
    - 間隔越寬 (問題越簡單) => 收斂越快
    - 間隔越窄 (問題越難) => 收斂越慢

#### Proof of the Perceptron Convergence Theorem

Read https://web.engr.oregonstate.edu/~huanlian/teaching/ML/2025fall/unit2/convergence.html and understand it , if needed.

## Problems

- Non-separable data
- 對訓練資料的順序非常敏感，且後期的更新會不成比例地影響最終結果。 => voted perceptron, average perceptron



## K-NN

- 比較新資料和已標記資料之間的距離 => 預測屬於哪類或者數值
- 沒有訓練過程，也不會建立參數

3 Steps:

1. 計算新資料以及與已知資料的距離
2. 將距離從小排到大，找到最近的鄰居
3. 決定 k 值

Distance metric 的 x 和 y ，分別代表著未知和已知數據的「特徵」