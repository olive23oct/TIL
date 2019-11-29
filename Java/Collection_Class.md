# Collection Framework
- 다수의 데이터를 다루기 위한 통합구조
- Collection interface


## Generics
- 컬렉션 클래스에 저장할 형(type)을 지정하고 데이터를 읽을 때 지정된 형으로 데이터를 입력받게 하는 형식
- 코드의 안정화를 위해 사용
- 컬랙션 클래스\<type> 클래스 변수 = new 컬렉션 클래스();
- 장점 : 컬렉션 클래스로 부터 데이터를 읽을 때 형변환 없이 읽을 수 있음
- 단점 : 데이터 형이 다를 경우 에러발생

### Vector
- 기존 배열의 단점을 보완하기 위한 클래스
- 유동적인 데이터 저장
- 배열 + 메소드
- 기본형은 wrapper 클래스로 변환하여 저장
- java.util

생성자|역할
---|---
Vector()|기본 생성자
Vector(int initialCapacity)|벡터의 크기를 설정하는 생성자
Vector_int initialCapacity, int capacityIncrement)|벡터의 크기와 메모리가 부족할 때 capacityIncrement만큼 증가하도록 설정하는 생성자

