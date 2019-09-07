import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/* ReactDOM.render : 컴포넌트를 페이지에 런더링하는 역할
                     react-dom 모듈을 불러와 사용할 수 있음
                     첫 번째 파라미터 -> 페이지에 렌더링할 내용을 JSX형태로 작성
                     두 번째 파라미터 -> 해당 JSX를 렌더링할 document 내부 요소를 설정
 */
serviceWorker.unregister();
