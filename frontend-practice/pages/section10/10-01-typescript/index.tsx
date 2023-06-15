export default function TypeScriptPage(){
    // 타입 추론
    let a = "안녕하세요"
    
    // 타입 명시
    let b: string = "반갑습니다"

    // 타입 명시가 필요한 상황
    let c: number | string = 1000
    c = "1000원"

    // 숫자 타입
    let d: number = 10

    // boolean 타입
    let e: boolean = true
    // e = "false" -> true로 작동함!
    
    // 배열 타입
    let f: number[] = [1, 2, 3, 4, 5]
    let g: string[] = ["일", "이", "삼", "사", "오"]
    let h: (string | number)[] = [1, 2, 3, "사", "오"] // 타입을 추론해서 어떤 타입을 사용하는지 알아봐야 한다.

    // 객체 타입
    interface IProfile {
        name: string
        age: number | string
        school: string
        hobby?: string // 있어도 되고, 없어도 되고
    }

    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }
    profile.name = "영희"   // 타입추론으로 string 타입만 가능
    profile.age = "8살"
    profile.hobby = "수영"

    // 함수 타입
    function add1(num1: number, num2: number, unit: string): string {
        return num1 + num2 + unit
    }
    const result1 = add1(1000, 2000, '원')  // 결과의 반환 타입도 예측이 가능하다!

    // 화살표 함수
    const add2 = (num1: number, num2: number, unit: string): string => {
        return num1 + num2 + unit
    }
    const result2 = add2(100, 200, '원')    // 결과의 반환 타입도 예측이 가능하다!

    // any 타입 (가급적 자제. 그냥 자바스크립트)
    let q: any = "철수"
    q = 123
    q = true

    return <></>
}