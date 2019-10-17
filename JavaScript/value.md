# 값

### 배열
- 배열 크기는 미리 정하지 않고도 선언할 수 있으며 원하는 값을 추가하면 된다
- 배열 값에 delete 연산자를 적용하면 slot을 제거할 수 있지만, 마지막 원소까지 제거해도 length 프로퍼티 값은 바뀌지 않는다
- 배열에 문자열 타입의 키/프로퍼티를 추가할 수 있으나 권장하지 않는다

### 유사배열
- 유사배열 값 : 숫자 인덱스가 가리키는 값들의 집합
- 유사배열의 값을 진짜 배열로 바꿀 때
    - indexOf(), concat(), forEach() 등
    - Array.from() : ES6

### 문자열
- 문자열과 문자 배열은 같지 않다
- 문자열은 불면 값(Immutable) / 배열은 가변 값(mutable)
    ```js
    var a = "foo";
    a[1] = "o"; // 사용가능하나 이전에는 오류
    a.charAt(1); // 옳은 접근법
    ```
- 문자열은 불변 값이므로 문자열 메서드는 그 내용을 바로 변경하지 않고 항상 새로운 문자열을 생성한 후 반환
- 반면 대부분의 배열 메서드는 그 자리에서 곧바로 원소를 수정
- 문자열을 다룰 때 유용한 대부분의 메서드는 사실상 문자열에 쓸 수 없지만, 문자열에 대해 불변 배열 메서드를 빌려 쓸 수 있다
- ex
    ```js
    var a = "foo";
    a.reverse; // undefined. reverse() 문자열의 순서를 거꾸로 뒤집은 가변 메서드
    ```
- 문자열을 바꾸고 원하는 작업을 수행한 후 다시 문자열로 되돌리는 hack
    ```js
    var c = a
        // 'a'를 문자의 배열로 분할
        .split("") 
        // 문자 배열의 순서를 거꾸로 뒤집는다
        .reverse()
        // 문자 배열을 합쳐 다시 문자열로 되돌린다
        .join("");
        c; // "oof"
    ```

### 숫자
- Nan : 자기자신과도 동등하지 않음
    - Nan 비교 방법 
        - isNan() 인자값이 숫자인지 여부를 평가 -> 결과 부정확
        - ES6 -> Number.isNan() 
- 0 : 0 / -0이 존재

### 동등비교
- Object.is() -> ES6
- ==, ===가 안전하다면 Object.is()는 사용하지 않는 편이 좋다

### 값 vs 레퍼런스
- 어떤 변수가 다른 변수를 참조할 수 없다
- 레퍼런스
    - 공유된 값을 가리킴
    - 서로 다른 n개의 레퍼런스가 있다면 이들은 저마다 항상 공유된 단일 값을 개별적으로 참조한다
- 자바스크립트에는 값 또는 레퍼런스의 할당 및 전달을 제어하는 구문 암시가 전혀 없다
- 값의 타입만으로 값-복사, 레퍼런스-복사 둘 중 한쪽이 결정된다
    ```js
    var a = 2;
    var b = a; // 'b'는 언제나 'a'에서 값을 복사한다
    b++;
    a; // 2
    b; // 3
    // a에는이 값의 초기 사본이 들어가고, b에는 또다른 사본. b를 바꿈으로써 a까지 바꿀 수 없음
    var c = [1,2,3];
    var d = c; // 'd'는 공유된 '[1,2,3]'값의 레퍼런스이다
    d.push(4);
    c; // [1,2,3,4]
    d; // [1,2,3,4]
    /* c와 d는 합성값이자 동일한 공유값 [1,2,3]에 대한 개별 레퍼런스
    .push()로 공유한 배열 값 변경
    ```
- null, undefined, string, number, boolean, symbol(ES6)의 단순 값(스칼라 원시 값 scalar primitives)은 언제나 값-복사 방식으로 할당/전달
- 객체(배열과 박싱된 객체 래퍼 전체)나 함수 등 합성 값(compound values)은 할당/전달이 반드시 레퍼런스 사본을 생성
- 레퍼런스는 변수가 아닌 값 자체를 가리키므로 A레퍼런스로 B레퍼런스가 가리키는 대상을 변경할 수는 없다
- slice() : 인자없이 slice()를 호출하면 전혀 새로운  배열의 사본을 만든다(얕은 복사 shallow copy)
- 스칼라 원시 값을 레퍼런스처럼 바뀐 값이 바로바로 반영되도록 넘기려면 원시 값을 다른 합성 값(객체, 배열) 등으로 감싸야한다
- 스칼라 원시 값을 레퍼런스 형태로 넘기려면 Number 객체 래퍼로 원시값을 박싱하면 된다

- 단순 스칼라 원시 값은 값-복사
- 합성 값은 레퍼런스-복사
