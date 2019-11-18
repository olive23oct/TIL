# ArrayList
- 자바(java.util)에서 제공되는 객체 배열이 구현된 클래스
- 객체 배열을 사용하는데 필요한 여러 메서드들이 구현되어 있음
- 주요 메서드

메서드|설명
---|---
boolean add(E e) | 요소 하나를 배열에 추가. E는 요소의 자료형을 의미
int size() | 배열에 추가된 요소 전체 개수를 반환
E get(int index) | 배열의 index 위치에 있는 요소 값을 반환
E remove(int index) | 배열의 index 위치에 있는 요소 값을 제거하고 그 값을 반환
boolean isEmpty() | 배열이 비어있는지 확인