## static 변수
- 여러 인스턴스가 하나의 값을 공유할 필요가 있음
- static 변수는 처음 프로그램이 로드 될 때 데이터 영역에 생성
- 인스턴스의 생성과 상관없이 사용할 수 있으므로 클래스 이름으로 참조
- 클래스 변수, 정적변수

## static 메서드
- static 변수를 위한 기능을 제공하는 static 메서드
- static 메서드에서는 인스턴스 변수를 사용할 수 없음
- 클래스 이름을 참조하여 사용하는 메서드
- 클래스 메서드, 정적 메서드

## static 응용 - singleton pattern
- 단 하나만 존재하는 인스턴스 : singleton pattern
- 생성자는 private
- static으로 유일한 객체 생성
- 외부에서 유일한 객체를 참조할 수 있는 public static get() 메서드 구현
- ex)
```java
public class Company {
  
    private static Company instance = new Company();

    private Company(); // 기본생성자를 private로 선언해 외부에서 인스턴스 생성이 불가

    public Company getInstance() {
        
        if( instance == null) {
            instance == new Company();
        }
        return instance;
    }
}
```
- java.util의 Calendar 클래스도 singleton pattern으로 구현
```java
Calendar cal = new Calendar(); // 불가
```
