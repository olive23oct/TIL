#Ojbect-Orientation

##객체의 역할
- 여러 객체가 동일한 역할 수행 가능
- 역할은 대체 가능성을 의미
- 각 객체는 책임을 수행하는 방법을 자율적으로 선택 가능
- 하나의 객체가 동시에 여러 역할 수행 가능

##객체
- 애플리케이션의 기능을 구현하기 위해 존재
- 일반적으로 객체는 다른 객체와의 협력을 통해 기능을 구현
- 1. 객체는 충분히 '협력적'이어야 한다
- 2. 객체는 총분히 '자율적'이어야 한다

- 객체는 상태(State)와 행동(Behavior)를 함께 지닌 실체
- 객체의 자율성 : 객체의 내부와 외부를 명확하게 구분해야 함
                객체의 사적인 부분은 객체 스스로 관리하고, 외부에서 일체 간섭할 수 없도록 차단해야 하며, 객체의 외부에서는 접근이 허락된 수단을 통해서만 객체와 의사소통해야 한다
                객체는 다른 객체가 '무엇'을 수행하는 지 알 수 있지만 '어떻게' 수행하는 지에 대해서는 알 수 없다

##메시지
- 객체 간 의사소통 수단
- 전송하는 객체 : 송신자(sender)
- 수신하는 객체 : 수신자(receiver)

##Method
- 객체가 수신된 메시지를 처리하는 방법 
- 객체 지향 프로그래밍 언어에서 메서드는 클래스 안에 포함된 함수 또는 프로시저를 통해 구현