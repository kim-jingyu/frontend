// 배열
const students = ["길동","철수","영희","준석"]

// 배열 길이 구하기
console.log(students.length)

// 배열의 값 꺼내기
console.log(students[1])

// 배열 맨 뒤에 값 추가
students.push("성근")
console.log(students[4])

// 배열 맨 마지막 값 삭제
console.log(students.pop()) // 성근
console.log(students[4]) // undefined

// 배열 요소 정렬
students.sort()
console.log(students[3]) // 철수

// 배열 데이터 확인
console.log(students.includes("영희")) // true

let classmates = ["철수","영희","훈이"]
console.log(classmates)
// undefined

classmates
// (3) ['철수', '영희', '훈이']

classmates[0]
// '철수'

classmates.includes("훈이")
// true

classmates.includes("맹구")
// false

classmates.length
// 3

classmates.push("맹구")
// 4

classmates.includes("맹구")
// true

classmates.length
// 4

classmates.pop()
// '맹구'

classmates.length
// 3

classmates
// (3) ['철수', '영희', '훈이']

