let people = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "도우너", age: 5},
    {name: "토비", age: 65},
    {name: "포터", age: 3}
    ]
// undefined

for(let count = 0; count < people.length; count++){
    if(people[count].age >= 19){
        console.log("성인입니다.")
    } else {
        console.log("미성년자입니다.")
    }
}                   
// VM3475:5 미성년자입니다.
// VM3475:3 성인입니다.
// VM3475:5 미성년자입니다.
// VM3475:3 성인입니다.
// VM3475:5 미성년자입니다.
// undefined

for(let count = 0; count < people.length; count++){
    if(people[count].age >= 19){
        console.log(people[count].name + "님은 성인입니다.")
    } else {
        console.log(people[count].name + "님은 미성년자입니다.")
    }
}                    
// VM3726:5 철수님은 미성년자입니다.
// VM3726:3 영희님은 성인입니다.
// VM3726:5 도우너님은 미성년자입니다.
// VM3726:3 토비님은 성인입니다.
// VM3726:5 포터님은 미성년자입니다.


const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스켓"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"}
    ]
// undefined
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM4379:2 1 레드향
// VM4379:2 2 샤인머스켓
// VM4379:2 3 산청딸기
// VM4379:2 4 한라봉
// VM4379:2 5 사과
// VM4379:2 6 애플망고
// VM4379:2 7 딸기
// VM4379:2 8 천혜향
// VM4379:2 9 과일선물세트
// VM4379:2 10 귤

for(let i=0;i<fruits.length;i++){
    console.log(`과일 차트${fruits[i].number}위는 ${fruits[i].title}입니다.`)
}
// VM4525:2 과일 차트1위는 레드향입니다.
// VM4525:2 과일 차트2위는 샤인머스켓입니다.
// VM4525:2 과일 차트3위는 산청딸기입니다.
// VM4525:2 과일 차트4위는 한라봉입니다.
// VM4525:2 과일 차트5위는 사과입니다.
// VM4525:2 과일 차트6위는 애플망고입니다.
// VM4525:2 과일 차트7위는 딸기입니다.
// VM4525:2 과일 차트8위는 천혜향입니다.
// VM4525:2 과일 차트9위는 과일선물세트입니다.
// VM4525:2 과일 차트10위는 귤입니다.
// undefined