import { interfaceExtends } from "@babel/types";

const Qqq = () => {
  // 타입추론
  let aaa = "안녕";
  aaa = 3;

  // 타입명시
  let bbb: string = "안녕";

  // 문자타입
  let ccc: string;
  ccc = "안녕";
  ccc = 3;

  // 숫자타입
  let ddd: number = 10;
  ddd = "안녕";

  // 불리언타입
  let eee: boolean = true;
  eee = false;
  eee = "false";

  // 배열타입
  let fff: number[] = [1, 2, 3];
  let ggg: string[] = ["안녕"];
  let hhh: (string | number)[] = ["철수", 10]; // 타입을 추론해서 어떤 타입 사용하는지 알아보기

  // 객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }
  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "치킨대학",
  };
  profile.age = "8살";

  // 함수타입 - 어디서 몇번이든 호출 가능하므로, 타입추론 할 수 없음(반드시, 타입명시 필요)
  const add = (number1: number, number2: number, unit: string): string => {
    return number1 + number2 + unit;
  };
  const result = add(10, 10, "안녕"); // 결과의 리턴 타입도 예측 가능

  // any타입
  let qqq: any = "철수";
  qqq = 1;
  qqq = true;

  return <div></div>;
};

export default Qqq;
