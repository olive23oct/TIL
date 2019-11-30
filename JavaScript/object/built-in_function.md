# 내장 함수
- 자바스크립트에서 제공하는 함수

## 대화상자
- alert
- prompt
- confrim

## 타이머 함수
- 특정한 시간에 특정한 함수를 실행할 수 있게 하는 함수
- 함수와 시간을 매개 변수로 이용
- 1000 milliseciond = 1초

연산자|설명
---|---
setTimeout(function, millisecond)|일정 시간이 지난 후 함수를 한 번 실행
clearTimeout(id)|일정 시간이 지난 후 함수를 한 번 실행하는 것을 중지
setInterval(function, millisecond)|일정 시간 간격으로 함수를 반복해서 실행
clearInterval(id)|일정 시간 간격으로 함수를 반복해서 실행하는 것을 중지

```js
var setId = setTimeout(function(){
    alet('test);
}, 3000);

clearTimeout(setId);
``` 
- setInterval()을 이용해 일정 시간 간격으로 특정한 기능을 수행하도록 한 후 setTimeout()을 이용하여 반복 실행을 멈추게 하는 형태를 많이 사용
- 자바스크립트 코드 블록 실행 -> 타이머 함수 실행

## encoding, decoding
- encoding 
    - 정보의 형태나 형식을 변환하는 처리 방식
    - 문자를 컴퓨터에 저장하거나 통신에 사용하기 위해 부호화하는 바업ㅂ
    - 웹 상에서 통신 시 한글의 유니코드의 오작동 방지를 위해 사용
        - ex) 웹 검색 시 %와 알파벳 대문자 조합의 주소(한글을 포함하고 있는 주소를 인코딩 한 것)

- decoding 
    - 인코딩 된 것을 다시 원래의 문자나 정보로 되돌리는 것

인코딩 함수|설명|디코딩 함수|설명
---|---|---|---
escape()|영문 알파벳과, 숫자, 일부 특수 문자(@,*,-,_,+,.,/)를 제외하고 모두 인코딩  1바이트 문자는 %XX의 형태로, 2바이트 문자는 %uXXXX 형태로 변환