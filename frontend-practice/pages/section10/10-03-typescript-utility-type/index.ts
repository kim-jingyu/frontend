export interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
}

// utility 타입

// 1. Partial 타입  -> IProfile 변수 모두 ?: 로 바꾸기
type a = Partial<IProfile>

// 2. Required 타입 -> IProfile 변수 모두 : 로 바꾸기
type b = Required<IProfile>

// 3. Pick 타입 -> IProfile 변수 중 원하는 변수 골라서 객체 만들기
type c = Pick<IProfile, "name" | "age">

// 4. Omit 타입 -> IProfile 변수 중 원하는 변수 제외해서 객체 만들기
type d = Omit<IProfile, "school">

// 5. Record 타입
type e = "철수" | "영희" | "훈이"   // Union 타입
let child1: e = "영희"  // 철수, 영희, 훈이만 된다.
let child2: string = "사과"

type f = Record<e, IProfile>    // Record 타입

// type f = {
//     철수: IProfile;
//     영희: IProfile;
//     훈이: IProfile;
// }


// 6. 객체의 key들로 Union 타입 만들기
// keyof - IProfile 에서 key만 뽑아내기
type g = keyof IProfile
let myProfile: g = "name"


// 7. type vs interface의 차이 => interface는 선언병합 가능
export interface IProfile {
    candy: number   // 선언병합으로 추가
}
// type 으로 만든 것들은 선언병합 불가능

// 8. 배운 것 응용
let profile: Partial<IProfile> = {
    candy: 10
}