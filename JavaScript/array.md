# Array
- 참조형

```js
var array1 = [ 'a', 'b', 'c', 'd'];
var array2 = [ 12, 'string', false, function(){}, array1 ];

console.log(array1[1] + array1[3]); // bd 출력

array1.length; // 4
array1[array1.length] = 5;
```

- 배열 요소 사이의 공백 문자와 개행은 배열에 영향을 주지 않는다
- length 
    - 배열의 길이를 확인할 수 있는 속성
    - 배열의 가장 큰 인덱스 값에 1을 더하여 반환
    - 값을 가지고 있는 배열 요소의 개수와 다를 수 있음
    - 배열변수명.length
- push()
    - 배열의 마지막에 요소를 추가하는 메서드
    - 현재 length 값 위치에 새로운 요소 추가
    - 배열변수명.push(추가할 요소)
- pop() 
    - 배열의 마지막 요소를 제거하는 메서드
    - 배열 내 가장 큰 인덱스 값을 가지는 배열 요소 제거
    - 배열변수명.pop()    
