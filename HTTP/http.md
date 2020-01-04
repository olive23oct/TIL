### URL vs URI
- URL(Uniform Resource Locator) + URN(Uniform Resource Name) = URI(Uniform Resource Identifier)
- URL : 리소스의 위치
- URN : 인터넷상에 존재하는 이름을 고유하게 식별하기 위해 준비된 것
- 인터넷상에 존재하는 리소스의 위치를 지정하기 위해 URL이 먼저 고안되었고, 그 후 URL을 좀 더 확장한 개념의 URI가 고안됨
- URL은 인터넷상의 주소와 같아 리소스가 옮겨지면 어디에 있는지 알 수 없게 됨
    - 때문에 인터넷상에 존재하는 리소스에 통일된 이름을 붙이기 위해 고안된 것이 URN
    - URL은 거의 이용되고 있지 않음

### 응답 상태 코드의 범주
상태코드|의미|설명
---|---|---
1xx|Information|요청 처리가 계속되고 있음을 나타냄
2xx|Success|요청이 성공했음을 나타냄
3xx|Redirection|요청을 종료하려면 작업이 더 필요함을 나타냄
4xx|Client Error|클라이언트 측에 기인한 오류로 요청이 실패했음을 나타냄
5xx|Server Error|서버 측에 기인한 오류로 요청이 실패했음을 나타냄
