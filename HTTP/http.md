# HTTP(Hypertext Transfer Protocal)
- Tim Berners-Lee와 그의 팀이 HTML과 함께 발명
- 서버와 클라이언트가 인터넷 상에서 데이터를 주고 받기 위한 프로토콜

## 장점
- 불특정 다수를 대상으로 하는 서비스에 적합
- 클라이언트와 서버가 계속 연결된 상태가 아님. => 많은 요청과 응답 가능

## 단점
- 연결이 끊어지기 때문에 클라이언트의 이전 상황을 알 수 없음(무상태, stateless)
- 때문에 정보 유지를 위해 Cookie 등의 기술이 필요

## URL vs URI
- URL(Uniform Resource Locator) + URN(Uniform Resource Name) = URI(Uniform Resource Identifier)
- URL : 리소스의 위치. 특정 웹 서버의 특정 파일에 접근하기 위한 경로 혹은 주소
- URN : 인터넷상에 존재하는 이름을 고유하게 식별하기 위해 준비된 것
- 인터넷상에 존재하는 리소스의 위치를 지정하기 위해 URL이 먼저 고안되었고, 그 후 URL을 좀 더 확장한 개념의 URI가 고안됨
- URL은 인터넷상의 주소와 같아 리소스가 옮겨지면 어디에 있는지 알 수 없게 됨
    - 때문에 인터넷상에 존재하는 리소스에 통일된 이름을 붙이기 위해 고안된 것이 URN
    - URL은 거의 이용되고 있지 않음
- URL : 요청하는 자원의 위치를 명시

### URL
- 프로토콜://ip주소(또는 도메인):port번호/경로/파일명?쿼리
- http -> port : 80
- Absolute URL
- Relative URL : 기준값이 항상 변함

## HTTP method
종류|설명
---|---
GET|정보를 요청하기 위해서 사용(select)
POST|정보를 밀어넣기 위해서 사용(insert)
PUT|정보를 업데이트 하기 위해서 사용(update)
DELETE|정보를 삭제하기 위해서 사용(delete)
HEAD|(HTTP)헤더 정보만 요청. 해당 자원이 존재하는지 혹은서버에 문제가 없는지를 확인하기 위하여 사용
OPTIONS|웹서버가 지원하는 메서드의 종류를 요청
TRACE|클라이언트의 요청을 그대로 반환

### 응답 상태 코드의 범주
상태코드|의미|설명
---|---|---
1xx|Information|요청 처리가 계속되고 있음을 나타냄
2xx|Success|요청이 성공했음을 나타냄
3xx|Redirection|요청을 종료하려면 작업이 더 필요함을 나타냄
4xx|Client Error|클라이언트 측에 기인한 오류로 요청이 실패했음을 나타냄
5xx|Server Error|서버 측에 기인한 오류로 요청이 실패했음을 나타냄
