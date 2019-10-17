# Native

- 내장타입
- 특정 환경(브라우저 등의 클라이언트 프로그램)에 종송되지 않은 내장 객체
- String()
- Number()
- Boolean()
- Array()
- Object()
- Function()
- RegExp()
- Date()
- Error()
- Symbol() : ES6에서 추가됨

- ex)
```js
var a = new String("abc");
type of a; // "object" String이 아님

/* new String("abc")는 "abc"를 감싸는 문자열 래퍼를 생성하며  
원시 값 "abc"는 아니다 */ 
```
***

## 내부 [[Class]]
- typeof가 'object'인 값(배열 등)에는 [[Class]]라는 내부 프로퍼티가 추가로 붙는다
- 직접 접근할 수 없고 Object.prototype.toString() 메서드에 값을 넣어 호출
- 대부분 내부 [[Class]]는 해당 값과 관련된 내장 네이티브 생성자를 가리킴(그렇지 않을 경우도 있음)
- Null, undefined는 네이티브 생성자는 없지만 [[Class]]값은 Null, Undefined 
- 단순 원시 값은 해당 객체 래퍼로 자동 박싱됨

## 래퍼 박싱
- 원시 값에는 프로퍼티나 메서드가 없으므로 .lengh, .toString()으로 접근하려면 원시 값을 객체 래퍼로 감싸줘야 함
- 자바스크립트가 원시 값을 알아서 박싱함
- 굳이 직접 객체 형태로 쓰지 않아도 됨
- 수동으로 원시 값을 박싱하려면 Object() 함수를 이용
```js
var a = "abc";
var b = new String( a );
var c = Object( a );

typeof a; // "string
typeof b; // "object"
typeof c; // "object"
```

## 언박싱
- 객체 래퍼의 원시 값은 valueOf() 메서드로 추출

## native - 생성자
- 배열, 객체, 함수, 정규식 값은 리터럴 형태로 생성하는 것이 일반적
- 리터럴은 생성자 형식으로 만든 것과 동일한 종류의 객체를 생성
- 즉, 래핑되지 않은 값은 없음
- 확실히 필요해서 쓰는 것이 아니라면 생성자는 가급적 사용 지양할 것

### Array()
- Array(1,2,3)과 new Array(1,2,3)은 동일. 굳이 new를 붙이지 않아도 됨
- 인자로 숫자를 하나만 받으면 그 숫자만큼 배열의 크기를 정함
- 빈 슬롯 배열이 만들어지므로 Array(n)의 방식은 사용을 지양할 것

### Object(), Function(), RegExp()
- 특별한 의도가 없으면 사용 지양
- new Object() -> x : 리터럴 형태로 한 번에 여러 프로퍼티를 지정할 수 있음
- function() : 함수의 인자나 내용을 동적으로 정의해야 할 때 유용(매우 드문 경우). eval()의 대용품 아님
- (/^a*b+/g)
- RegExp() : 정규 표현식 패턴을 동적으로 정의할 경우 의미 있는 유틸리티
    - new RegExp("패턴", "플래그") 형식으로 사용할 것

### Date(), Error()
- 리터럴 형식이 없으므로 생성자를 사용해야 함
- Date() 
    - 날짜/시각을 인자로 받음
    - 인자를 생략하면 현재 날짜/시각으로 세팅
    - getTime() : 유닉스 타임스탬프 값(1970년 1월 1일부터 현재까지 흐른 시간을 초 단위로 환산)
    - .Date.now() : ES5에 정의된 정적 도우미 함수가 좀더 쉬움
    - ES5 이전의 경우
    ```js
    if(!Date.now){
        Date.now = function(){
            return (new Date()).getTime();
        }
    }
    ```
    - new 키워드 없이 Date()를 호출하면 현재 날짜/시각에 해당하는 문자열을 반환
- Error() 
    - 앞에 new가 있든 없든 상관 없음
    - 현재의 실행 스택 콘텍스트를 포착하여 객체에 담는 것
        - 함수 호출 스택, error 객체가 만들어진 줄 번호 등 디버깅에 도움이 될 만한 정보가 담겨있음
    - 보통 throw 연산자와 함께 사용
    - 사람이 읽기 편한 포맷으로 에러 메시지를 보려면 stack프로퍼티 대신 toString()을 호출하는 것이 좋음

### Symbol()
- ES6부터 생긴 새로운 원시 값 타입
- 충돌 염려 없이 객체 프로퍼티로 사용 가능
- 프로퍼티명으로 사용할 수 있으나, 프로그램 코드나 개발자 콘솔 창에서 심벌의 실제 값을 보거나 접근하는 것은 불가능
- Symbol.create.Symbol.iterator 식으로 Symbol 함수 객체의 정적 프로퍼티로 접근
```js
obj[ Symbol.iterator ] = function() { /* ... */ };
```
- 심벌을 직접 정의하려면 Symbol() 네이티브를 사용
- new를 붙이면 에러 발생

## 네이티브 프로토타입
- 내장 네이티브 생성자는 .prototype 객체를 가짐
- prototype 객체에는 해당 객체의 하위 타입별로 고유한 로직이 담겨 있음
- ex) 00.prototype.XYZ -> 00#XYZ로 줄여서 씀
```js
String#indexOf() // 문자열에서 특정 문자의 위치를 검색
String#charAt() // 문자열에서 특정 위치의 문자를 반환
String#substr(), String#substring(), String#slice() // 문자열의 일부를 새로운 문자열로 추출
String#toUpperCase() // 대문자
String#trim() // 앞/뒤의 공란이 제거된 새로운 문자열 생성
```
- 프로토타입 위임(Prototype Delegation) 
- 모든 함수는 Function.prototype에 정의된 apply(), call(), bind() 메서드를 사용할 수 있음
- 프로토 타입으로 디폴트 값 세팅
    - .prototypes는 이미 생성되어 내장된 상태이므로 단 한번만 생성


