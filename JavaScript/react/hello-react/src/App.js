import React, { Fragment } from 'react';
// var React = require('react');
// var Component = React.Component;
// 파일을 모듈화해서 사용하는 것 -> Node.js의 기능
// webpack : 번들링(파일을 묶듯이 연결)


// ES6 이전에는 자바스크립트에 class가 없었음 -> prototype
function App() {
  const text = "안녕안녕";
  return (
    <div> 
      <h1>hello react!</h1>
      <h2>버전이 다른가?? {text}</h2>
    </div> // JSX는 반드시 감싸주는 부모요소가 있어야 함 -> 컴포넌트 내부는 DOM 트리 구조 하나여야 함

    // <Fragment>
    //   <h1>hello react!</h1>
    //   <h2>버전이 다른가??</h2>      
    // </Fragment>
    // Fragment : div 등으로 감싸지 않고 여러 요소를 렌더링할 때 사용

    // 자바스크립트 표현
    

  );
}

export default App;
