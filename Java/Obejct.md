# Object

## 객체
    - 객체는 클래스를 템플릿으로 사용하여 생성
    - 클래스는 객체에 포함되어야 할 속성과 행위를 결정하는 객체의 원본(master copy)
    - 객체의 변수는 인스턴스 변수(instance variable) 또는 멤버 변수(member variables)

## 상속(ingeritance)
    - 상속 : 한 객체가 다른 객체로부터 행위와 속성을 물려받도록 하는 것
    - extends 키워드 사용
    - 다양한 관련 클래스들을 불필요한 작업 없이 개발할 수 있게 해줌
    - 다른 클래스로부터 상속을 받는 클래스를 하위클래스(subclass)라고 함 <-> 상위클래스(superclass)
    - 한 클래스는 둘 이상의 클래스에 상속을 해줄 수 있음

## 객체 및 단순 변수 변환하기
    - 변환 유형
        - 하나의 객체를 다른 객체로 변환
        - 하나의 단순 변수를 다른 형태의 변수로 변환
        - 객체를 사용하여 단순 변수 생성
        - 단순 변수를 사용하여 객체 생성
    - 캐스팅(casting) : 정보를 새로운 형태로 변환하는 것
    - 캐스팅은 원래 데이터와는 다른 변수 또는 객체 유형의 새로운 값을 산출
    - 캐스팅 할 때 대상 값이 실제로 변경되는 것은 아니며, 원하는 형식의 새로운 변수 또는 객체가 생성됨
    - 원본(source), 대상(destination)
    - 원본이란 그것이 변수이든 아니면 객체이든, 원래 형태의 정보를 의미
    - 대상은 원본 데이터가 새로운 형식으로 변환된 버전을 의미

    - 단순 변수 캐스팅
        - 부울값은 캐스팅에서 사용할 수 없는 변수 유형
        - 정보를 새로운 형식으로 캐스팅하려면, 해당 정보 앞에 새로운 형식을 괄호로 묶어 표시
        - 크기가 큰 변수로부터 더 작은 크기의 변수 유형으로 정보를 변환할 때는 명시적 캐스팅을 해야함

    - 객체 캐스팅
                         