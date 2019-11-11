# prototype
- 인스턴스에 아무것도 정의하지 않더라도 처음부터 사용할 수 있음

### 생성자 안에서 메서드를 정의하는 방식의 문제점
- 생성자 안에서 this 뒤에 메서드를 정의하면 그 생성자로 생성한 모든 인스턴스에 똑같은 메서드가 추가됨
- 메모리 소모량이 늘어남
- => 프로토타입 객체에 메서드를 정의하는 방식으로 해결할 수 있음

### 프로토타입 객체
- 자바스크립트에서는 함수도 객체이므로 함수 객체가 기본적으로 prototype 프로퍼티를 가지고 있음
```js
function F() {};
console.log(F.prototype); // Object {}

/* f의 함수 객체
caller : null
length : 0
name : "f"
prototpye : 
__proto__ : ...
```
- 프로토타입 객체의 프로퍼티는 생성자로 생성한 모든 인스턴스에서 그 인스턴스의 프로퍼티처럼 사용할 수 있음
```js
F.prototype.prop = "prototype value";
var obj = new F();
console.log(obj.prop); // prototype value
```


