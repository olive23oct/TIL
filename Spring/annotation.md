# annotaion 
- 어노테이션 설정을 추가하려면 \<beans>에 Context 관련 네임스페이스와 스키마 문서의 위치를 등록해야 한다

1. @Component("")
- 직접 작성한 클래스를 bean으로 등록하기 위해 사용
- \<context:compnent-scan>
    - 스프링 컨터이너가 클래스 패스에 있는 클래스들을 스캔하여 @Component가 설정된 클래스들을 자동으로 객체 생성한다
- id나 name 속성 미지정 시
    - 컨테이너가 클래스 이름의 첫글자를 소문자로 변경하여 자동으로 이름을 생성해준다

2. 의존성 주입 어노테이션
annotation|설명|스프링 지원
---|---|---
@Autowired|주로 변수 위에 설정하여 해당 타입의 객체를 찾아서 자동으로 할당|o
@Qualifier|특정 객체의 이름을 이용하여 의존성 주입할 때 사용|o
@Inject|@Autowired와 동일|x
@Resource|@Autowired + @Qualifier|x

- @Autowired 
    - 생성자, 메소드, 멤버변수 위에 모두 사용 가능. 대부분 멤버변수 위에 선언하여 사용
- @Qualifier
    - 의존성 주입될 객체의 아이디나 이름을 지정할 수 있음
    - 의존성 주입 대상이 되는 타입의 객체가 두 개 이상을 때 사용

3. 
annotation|위치|의미
---|---|---
@Service|XXXServiceImple|비지니스 로직을 처리하는 Service 클래스
@Repository|XXXDAO|데이터베이스 연동을 처리하는 DAO 클래스
@Controller|XXXController|사용자 요청을 제어하는 Controller 클래스


