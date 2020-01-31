# 2019.10.19
        
# Redis
- open source
- 메모리상에 키-값 형태로 저장
- 디스크 접근이 없어서 데이터베이스보다 속도가 빠름
- 세션정보
    - 웹세션의 한계 극복
- 유효기간 설정 가능
- 메모리 데이터베이스 -> 메모리 사양에 따라 장애가 생길 수 있음 
- 스프링부트에서 레디스 지원
- redis.client.jedis
- 데이터베이스를 이용해 시퀀스를 입력하는 것보다 작업이 수월함   
- window... Qhzbek dnlsehdn
- port: 6379 

# OAuth 인증서버
- spring security
- Access Token 
- JdbcTokenStore (최근에는 사용률 감소 -> JWD)
- 인증서버와 api서버는 나누는 편이 좋다
- access token 유효시간은 너무 길지 않게 설정할 것(탈취 가능성있음)
    - 탈취 시 database에서 해당 토큰 삭제

##### RestTemplate
- 스프링부트가 제공하는 Api client
- OpenFeign 
    - 넷플릭스에서 개발한 오픈소스
    - 소스 간결화
    - spring cloud / netflix 동일


##### elastic search
- redis보다 설치 용이
- 내부서비스에서 검색 자동완성이 있을 때. 유사어 제외 시

##### Swagger
- Api 명세 

##### Custom Exception

##### [GraphQL](https://www.baeldung.com/spring-graphql)
- 페이스북 개발한 애플리케이션 레이어 쿼리언어
- 클라이언트가 쿼리를 이용하여 필요한 정보를 서버에 요청
- graphql-spring-boot-starter
- 컨트롤러 없이 graphqlresolver를 상속받은 클래스
- .graphql  
- 클라이언트 개발자가 능동적으로 데이터 요청 가능

##### Spring Boot Actuator
- 제공하는 endpoint가 있음
- 원격으로 애플리케이션 상태 확인 가능
- 외부툴 설치없이 모니터링환경 구축 가능
- 웹에서는 막혀있는 endpoint가 많아서 설정이 필요함
    - application.yml 
    - management:
    -   endpoints:
    -       enable-by-default: true
    -       web:
    -           exposure:
    -               include: "*"
    - 필요한 내용을 넣어서 확인할 수 있음
    - info:
    -   app:
    -       name: 
    -       java:
    -           source: 


##### 터미널 -> jconsole 

##### 애플리케이션 배포
- [Maven설치](https://maven.apache.org)
- Spring Boot 프로젝트 홈 디렉토리 이동
    - $mvn package (-Dmaven.test.skip=true)
    - target 디렉터리 이동
        - $java -jar jar파일명
- jenkins
    - 배포 자동화


##### haproxy

### Convention Over Configuration, CoC
- 설정 보다는 관습(coding by convention)
- 개발자가 설정해야 하는 것은 어플리케이션의 관례를 따르지 않는 점 뿐이다
- 디폴트 설정이 아닐 때만 추가적인 설정을 하고 다른 것과 같은 설정일 때는 자동으로 처리