# CSS

구조화된 문서를 순차적, 종속적으로 디자인하는 문서

inline css가 internal css보다 우선 적용
internal, external css의 우선 순위는 동일
\<style>이 \<link>보다 하위에 위치할 경우 internal style이 적용됨

## 1. Three ways to insert CSS
External CSS
하나의 파일로 여러 웹 페이지에 적용할 수 있음
link style
\<link href="style.css" rel="stylesheet" type="text/css">
Internal CSS
embedding style 
head section에 작성
tag(선택자 Selector) { Property(: Value; } (선언 블록 Declaration block)
```html
tag { 
    Property: Value;
        }
```
comment : /* */
Inline CSS
style attribute

## 2. css selector
element : 태그
id : 특정 요소만 적용
class : 특정 분류 전체 적용
group : 콤마로 연결

종류 |예제| 점수
---|---|---
!important| color: blue !important;| 최우선
style=””|\<div style=””>|1000
ID|#Id|100
Class|.class|10
attribute|a[href=””]|10
pseudo-class|first-child|10
*(전체)|*, body*|0

## 3. color
RGB(red, green, blue)
16진수
ff = 255
[color hunt](https://colorhunt.co/)


## background

contain : 가장 짧은 면을 기준으로 모든 이미지가 보일 수 있게 사이즈 변경
cover : 가장 긴 면을 기준으로 덮어 줄 수 있게 설정. 이미지가 잘릴 수 있음

gradient
linear gradient : goes down/up/left/right/diagonally
1 / (사용하고 싶은 색깔의 수 - 1)  % 지정
방향 설정 2가지 
- ex) to top right
- deg


radial gradient : defined by their center
