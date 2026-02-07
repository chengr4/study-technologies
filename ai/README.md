# AI

## Terminology

- Logit: 是神經網絡最後一層輸出的原始分數，尚未經過激活函數轉換成機率。
- Momentum (動量): 不只看當前梯度，還記得之前的更新方向，像是物體有慣性
- Weight Decay (權重衰減): 讓權重逐漸變小，防止過擬合
- Epoch: 一次完整的訓練過程，模型看過所有訓練資料一次 (batch 的合集)

## Minimax algorithm

- 核心思想「悲觀但理性的預測」。當你在思考下一步該怎麼走時，你必須假設對手是絕頂聰明的。
- MAX（你/AI）：你的目標是讓最後的評分越大越好。
- MIN（對手）：對手的目標是讓最後的評分越小越好。

```
minimax(state) =
  if is_terminal(state):
    return utility_score(state, player)
  else if state is for max's turn:
    return the maximum result of minimax(child_state) for each child node
  else if state is for min's turn:
    return the minimum result of minimax(child_state) for each child node
```

## Heuristic Algorithms

- A* is one of the most popular one.
- 當發現一個問題「算不動（太慢）」、或是「不需要絕對完美」，且問題具有高度複雜性時，就是啟發式演算法登場的最佳時機。

### 8-Puzzle

- 空間足夠大，BFS (盲搜) 已經無法處理

> 3^22 nodes needed in BFS, 3 * 3 board

- h(n) = Misplaced Tiles + Manhattan Distance
    - Misplaced Tiles: 計算每個不在正確位置的數字個數。
    - Manhattan Distance: 計算每個數字與其目標位置之間的距離總和。
- Goal state is fixed
