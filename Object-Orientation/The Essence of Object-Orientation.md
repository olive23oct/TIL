# Ojbect-Orientation

## 객체의 역할
- 여러 객체가 동일한 역할 수행 가능
- 역할은 대체 가능성을 의미
- 각 객체는 책임을 수행하는 방법을 자율적으로 선택 가능
- 하나의 객체가 동시에 여러 역할 수행 가능

## 객체
- 애플리케이션의 기능을 구현하기 위해 존재
- 일반적으로 객체는 다른 객체와의 협력을 통해 기능을 구현
- 1. 객체는 충분히 '협력적'이어야 한다
- 2. 객체는 총분히 '자율적'이어야 한다

- 객체는 변경가능한 상태(State)와 특징적인 행동(Behavior)을 함께 지닌 구별 가능한 실체
- 객체의 자율성 : 객체의 내부와 외부를 명확하게 구분해야 함
                객체의 사적인 부분은 객체 스스로 관리하고, 외부에서 일체 간섭할 수 없도록 차단해야 하며, 객체의 외부에서는 접근이 허락된 수단을 통해서만 객체와 의사소통해야 한다
                객체는 다른 객체가 '무엇'을 수행하는 지 알 수 있지만 '어떻게' 수행하는 지에 대해서는 알 수 없다

## 상태
- 행동의 결과는 과거에 어떤 행동이 일어났느냐에 의존
- 행동의 과정과 결과를 단순하게 기술하기 위한 개념

## 상태와 프로퍼티
- 모든 객체의 상태는 단순한 값과 객체의 집합
- property : 객체의 상태를 구성하는 모든 특징
            일반적으로 프로퍼티는 변경되지 않고 고정적(정적)
- property value : 시간의 흐름에 따라 변화(동적)            

## 메시지
- 객체 간 의사소통 수단
- 전송하는 객체 : 송신자(sender)
- 수신하는 객체 : 수신자(receiver)

## Method
- 객체가 수신된 메시지를 처리하는 방법 
- 객체 지향 프로그래밍 언어에서 메서드는 클래스 안에 포함된 함수 또는 프로시저를 통해 구현

## link
- 객체와 객체 사이의 의미 있는 연결
- 객체와 객체 사이에는 링크가 존재해야만 요청을 보내고 받을 수 있음
- -> 객체의 링크를 통해서만 메시지를 주고 받을 수 있음