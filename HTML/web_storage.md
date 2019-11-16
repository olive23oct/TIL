# Web Storage
- HTML5에 추가된 기술
- [최신 스펙](https://www.w3.org/TR/webstorage/)

## HTTP 프로토콜(Hypertext Transfer Protocol)
- 인터넷 상에서 정보를 주고 받기 위한 서버/클라이언트 모델을 따르는 프로토콜
- 클라이언트에서 요청(request)를 보내면 서버는 요청을 처리해서 응답(response)함
- 애플리케이션 레벨의 프로토콜로 TCP/IP 위에서 작동
- 비연결성(Connectionless), 비상태성(Stateless)
    - 서버에 연결하고 요청해서 응답을 받으면 연결이 끊어짐
    - 연결이 끊어지기 때문에 클라이언트의 이전 상태를 알 수 없음

    
## Cookie
- 사용자의 정보를 웹 페이지에 저장
- 주로 개인 등록 정보 등을 저장
```js
document.cookie; 
```
- 저장기한과 용량이 정해져 있음
- key-value 저장소
- 무해하지만 몇몇 웹과 검색 엔진에 의해 허가없이 개인 정보가 유출될 수 있음
- 텍스트파일이기 때문에 사용자의 컴퓨터 프로그램을 실행시키거나 컴퓨터 내부의 정보를 유출 하는 일은 할 수 없음
