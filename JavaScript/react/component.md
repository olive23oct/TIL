# Component

## props
- properties
- 컴포넌트 속성을 설정할 때 사용
- props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서만 설정할 수 있음
- this를 통해 접근

## propsTypes
- 컴포넌트의 필수 props를 지정하거나 props타입을 지정할 때 사용

```js
import PropTypes form 'prop-types';
```
- isRequired : 필수적으로 존재해야함
- 종류
	- array
	- bool
	- number
	- func
	- object
	- string
	- symbol
	- node : 렌더링할 수 있는 모든 것(숫자, 문자열, element 또는 이들로 구성된 배열)
	- element : 리액트 요소
	- instanceOf(Class) : 특정 클래스의 인스턴스
	- oneOf(['Male', 'Female']) : 주어진 배열 요소 중 값 하나
	- oneOfType([React.PropTypes.string, React.ProptTypes.number]) :  주어진 배열 안의 종류 중 하나
	- arrayOf(React.ProptTypes.number) : 주어진 종류로 구성된 배열
	- object(React.ProptTypes.number) : 주어진 종류의 값을 가진 객체
	- shape({name : React.ProptTypes.string, age: React.ProptTypes.number}) : 주어진 스키마를 가진 객체
	- any : 아무 종류 

## state
- 컴포넌트 내부에서 읽고 업데이트할 수 있는 값을 쓸 때 사용
- 언제나 기본 값을 미리 설정해야 사용할 수 있음
- this.setState()를 통해서만 값을 업데이트 해야 함
- constructor()
	- 컴포넌트의 생성자 메서드
	- state 초기값 설정
- setState() : state 값 업데이트
	- 파라미터로 전달받은 필드를 업데이트한 후 컴포넌트가 리렌더링하도록하는 트리거 역할
```js
this.setState({
	수정할 필드 이름: 값,
	수정할 필드 이름: 값
});
```
