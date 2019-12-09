# event
- Html 이벤트와 인터페이스가 동일하기 때문에 사용법 또한 흡사

## 주의사항
1. 이벤트 이름은 camelCase로 작성
	- Html의 onclick -> onClick
	- Html의 onkeyup -> onKeyUp
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
	- Html에서 이벤트 설정 시 큰따옴표 안에 실행 코드 작성
	- 리액트에서는 함수 형태의 객체를 전달
	- 바로 만들어서 전달해도 되고, 렌더링 부분 외부에 미리 만들어서 전달해도 됨
3. DOM 요소에만 이벤트를 설정할 수 있음
	- 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없음
	- 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수 있음

## 종류
- [리액트 매뉴얼](https://facebook.github.io/react/docs/events.html)
