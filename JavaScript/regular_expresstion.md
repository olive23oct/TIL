# Regular Expression

## 정규 표현식의 기본
- 문자열의 패턴을 표현하기 위한 도구
- 정규 표현식을 사용하면 문자열 안에서 특정 패턴을 가지는 문자열을 검색/추출/치환하는 처리를 직접 작성하지 않고 구현 가능
- Perl의 정규표현식을 받아들인 것(Perl5)
- ES3부터 표준

### 정규 표현식의 생성
```js
var reg = new RegExp("abc");
var reg = /abc/; // 정규 표현식 리터럴
```
- 패턴 작성 
    - 일반문자 : 숫자(0~9), 알파벳(대,소문자) 
    - 특수문자 : +, . 등
        - 정규 표현식에서 사용하는 특수문자 = 메타문자(meta character)
        - 문자로서 사용 시 메타 문자 앞에 \ 문자를 붙여야함

### 패턴 매칭
- 일치(match) : 어떤 문자열이 정규 표현식이 표현하는 문자열의 패턴을 가지고 있을 때 그 문자열을 가리켜 정규 표현식과 일치한다고 한다
- 문자열이 정규 표현식과 일치하는지 확인하는 작업을 패턴 매칭이라 함

### RegExp 객체의 메서드
- RegExp.prototype - test, exec
    - test : 정규 표현식의 문자열이 일치하는지 뜻하는 논리값 반환
    ```js
    var reg = /cat/;
    console.log(reg.test("cats and dogs")); // true
    console.log(reg.test("Cat")); // false

    // Cat가 대문자이기 때문에 불일치
    ```
    - exec : 정규 표현식과 일치하는 문자열을 검색하여 일치한 문자열을 배열로 반환
    - 반환된 배열에는 index와 input 프로퍼티가 있음
    - index 프로퍼티에는 가장 처음 일치한 위치가 들어가고 input 프로퍼티에는 일치한 문자열이 들어감
    ```js
    var reg = /Script/;
    var result = reg.exec("JavaScript");
    console.log(result[0]); // Script

    console.log(result.index); // 4
    console.log(result.input); // JavaScript
    ```

- String.prototype - match, replace, search, split

## 기본적인 정규 표현식 패턴 
- 정규 표현식의 핵심은 메타 문자를 사용한 문자열 패턴의 표현

### 리터럴 문자
- 일반 문자 = 리터럴 문자
- 정규표현식 리터럴 문자
리터럴문자|설명
---|---
유니코드문자|문자 그 자체를 뜻함(단, ^, $, \, ., *, +, ?, (, ), [, ], {, }, |는 제외)
\0|NULL문자(\u0000)
\n|개행 문자(\u000A)
\t|탭 문자(\u0009)
\v|수직 탭 문자(\u000B)
\f|다음 페이지 문자)(FF=\u000C)
\r|캐리지 리턴 문자(CR=u000D)
\xhh|16진수 hh로 지정된 ASCII 문자
\uhhh|16진수 hhhh로 지정된 유니코드 문자
\cX|제어 문자

- `^ $ \ . * + ? ( ) [ ] { } |`
- 이 메타 문자를 문자로 표현할 때는 메타 문자 앞에 \를 붙여 이스케이프
- 이 외에 자바스크립트 정규 표현식 패턴에서 이스케이프가 필요한 문자는 /

