# Spring

## annotation
- @Entity
- @GeneratedValue(strategy =  GenerationType.IDENTITY) : 유니크한 값 자동생성

- @OneToMany(fetch = FetchType.EAGER or LAZY)
    - eager 
    - lazy 
- @Configuration

## Class
- ResponseEntity<T>
    - HttpEntity 상속받은 클래스
    - 