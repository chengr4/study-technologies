# Study Sequalize

## Terms

| Term | Description        |
| ---- | ------------------ |
| Op   | stand for Operator |

## Scopes

Scopes are used to help you reuse code. You can define commonly used queries, specifying options such as `where`, `include`, `limit`, etc.

## Associations

```javascript
// Bar table 中的 myFooId field 被設定 foreign key。這意味著每個 Bar table 的 record 都將關聯到 Foo table 的一個 record，並且這個關聯是通過 Bar 的 myFooId 欄位的值與 Foo 表格的 id 欄位的值相匹配來建立的
Foo.hasOne(Bar, {
  foreignKey: 'myFooId'
});
Bar.belongsTo(Foo);
```
