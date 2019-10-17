# JS Grammar
***
## 문과 표현식
- Statement vs Expression
- Statement -> sentence
- Expression -> phrase
```js
var a = 3 * 7; 
var b = a;
b; 

// 세 줄 모두 표현식이며 동시에 각각 표현식이 포함된 문
// var a = 3 * 7, var b = a 는 각각 변수를선언하고 동시에 어떤 값을 할당하므로 선언문(Declaration Statement)
// 앞에 var가 빠진 a = 3 이나 b = a 는 할당 표현식(Assignment Expression)
// b는 표현식이며 문. 표현식 문(Expression Statement)
```
- Declaration Statement
- Assignment Expresstion
- Expression Statement

## 콘텍스트 규칙

### 중괄호
- 객체 리터럴
- 레이블
```js 
function bar(){};
// 객체 리터럴
var a = {
    foo: bar()
}

// 레이블
{
    foo: bar()
} // 문법오류 없음
```
- Labeled Statmement
    - 예제의 foo는 bar() 문의 레이블
    - labeled jump
    - label은 따옴표로 감싸면 안됨

### 블록
```js
[] + {}; // "[object Object]"
{} + []; // 0

// 윗 줄의 {} : 실제 값(빈 객체)
// 아랫 줄 {} : 빈 불록 -> + []를 숫자 0으로 강제 변환
```
### 객체 분해
- ES6부터 분해 할당(Destructuring Assignment)시 {} 사용(객체 분해 시)
```js
function getData(){
    // ...
    return {
        a: 42,
        b: "foo"
    };
}
var { a, b } = getData();
console.log( a, b ); // 42 "foo"
// { a, b }는 { a: a, b:b }의 축약형태
/////
var res = getData();
var a = res.a;
var b = res.b; 
```

### else if
- 자바스크립트에는 else if가 없다(else if 키워드 x)
- 관용표현이므로 블럭구문을 잘 활용할 것

## 연산자 우선순위(operator precedence)
- 자바스크립트의 &&, || 연산자는 true/false가 아닌 피연산자 중 하나를 선택하여 반환
- 표현식에 연산자가 여러 개 있을 경우 어떤 규칙으로 처리되는 지에 대한 규칙
- 다수의 문을 연결하는 연산자로 ','를 사용할 때에는 이 연산자의 우선순위가 최하위임 -> 어떤 연산자보다도 ','가 먼저 묶임
- &&는 ||보다 먼저 평가됨
- [연산자우선순위](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)

## 단락평가(short circuiting)
- &&, || 연산자는 좌측 피연산자의 평가 결과만으로 전체 결과가 이미 결정될 경우 우측 피연산자의 평가는 건너뜀

## ? : vs &&,||
- &&는 ||보다, ||는 ? : 보다 우선순위가 높다

## 결합성(Associativity)
- 우선순위가 동일한 경우의 처리순서는?
- 자바스크립트의 기본 처리순서 좌측 -> 우측
- &&, || 연산자의 경우 좌측부터 결합하여 암시적인 그룹핑 발생
- 동일한 값에 대하여 동일한 표현식은 항상 동일한 순서로 평가
- 반면 삼항연산자(삼항 또는 조건 ? :)는 우측부터 결합함

## ASI
- 자동 세미콜론 삽입
