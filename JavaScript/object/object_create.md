# 객체

## 1. 객체의 생성

- 자바스크립트의 객체 : 이름과 값을 한 쌍으로 묶은 집함
- 프로퍼티 : 이름과 값이 한 상을 이룬 것. 그것의 이름을 프로퍼티 이름 또는 키라고 함
- 값 : 모든 데이터 타입의 데이터(원시 값, 객체)를 저장할 수 있음
- 메서드 : 함수의 참조를 값으로 가진 프로퍼티

#### 객체 생성 방법
1. 객체 리터럴로 생성하는 방법
```js 
var card = { suit: "하트", rank: "A" };
```

2. 생성자로 생성하는 방법
```js
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
var card = new Card("하트", "A");
```

3. Object.create 로 생성하는 방법(ES5부터 추가됨)
```js
var card = Object.create(Object.prototype, {
    suit: {
        value: "하트",
        writable: true,
        enumerable: true,
        configurable: true 
    },
    rank: {
        value: "A",
        writabale: true,
        enumerable: true,
        configurable: true
    }
});
```
