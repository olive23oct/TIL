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
