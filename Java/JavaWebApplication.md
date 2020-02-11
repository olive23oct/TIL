# Java Web Application
- wAS에 설치되어 동작하는 어플리케이션
- 자바 웹 어플리케이션에는 HTML, CSS, 이미지, 자바로 작성된 클래스(Servlet 포함, package, interface 등), 각종 설정 파일 등이 포함
- 폴더구조
```
자바 웹 어플리케이션  +----- WEB-INF 폴더 +--- web.xml파일(배포기술자, DeploymentDescriptor: servlet 3.0 미만에서는 필수, 3.0 이상에서는 어노테이션을 사용)
                    |                   |
                    |                   +--- lib폴더 --- jar파일들
                    |                   |
                    |                   +--- classes 폴더 ---- java패키지, class, 리소스 
                    |
                    +--- 각종 폴더, 이미지, 다양한 리소스 
```     

## Servlet
- 자바 웹 어플리케이션의 구성요소 중 동적인 처리를 하는 프로그램의 역할
- WAS에서 동작하는 Java 클래스
- HttpServlet 클래스를 상속받아야 함
- 서블릿과 JSP로부터 최상의 결과를 얻으려면, 웹 페이지를 개발할 때 이 두 가지를 조화롭게 사용해야 함
- 웹 페이지를 구성하는 화면은 JSP로 표현. 복잡한 프로그래밍은 서블릿으로 구현

### Servlet 작성방법
1. Servlet 3.0 spec 이상
- web.xml을 사용하지 않음
- 자바 어노테이션을 사용
2. Servlet 3.0 spec 미만
- Servlet을 등록할 때 web.xml 파일에 등록

