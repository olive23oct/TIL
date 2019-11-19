# interitance
- 새로운 클래스를 정의할 때 이미 구현된 클래스를 상속받아서 속성이나 기능이 확장되는 클래스를 구현함
- 상속하는 클래스 : 상위 클래스, parent class, base class, super class
- 상속받는 클래스 : 하위 클래스, child class, derived class, subclass

```java
class Mammal {}
class Humman extends Mammal{

}
```
- 자바에서는 다중상속 불가(single inheritance)

## 상속을 하는 경우
- 상위 클래스는 하위 클래스보다 일반적인 개념과 기능을 가짐
- 하위 클래스는 상위 클래스보다 구체적인 개념과 기능을 가짐

## protected 
- 외부 클래스에는 private으로 하위 클래스에서는 public의 기능을 구현한 키워드
- 상위 클래스에 protected로 선언된 변수나 메서드는 다른 외부 클래스에서는 사용할 수 없지만 하위 클래스에서는 사용 가능

## 하위 클래스에서 메서드 재정의 하기
- overriding : 상위 클래스에 정의된 메서드의 구현 내용이 하위 클래스에서 구현할 내용과 맞는 경우 하위 클래스에서 동일한 이름의 메서드를 재정의 할 수 있음
    - override annotation
    - 재정의된 메서드라는 의미로 선언부가 기존의 메서드와 다른 경우 에러 발생
    - 오버라이딩 메서드 호출 : 자바에서는 항상 인스턴스의 메서드가 호출됨

## 가상메서드(virtual method)
- 메서드의 이름과 주소를 가진 가상 메서드 테이블에서 호출될 메서드의 주소를 참조함