// 백엔드에서 받아온 데이터라고 가정 (컴포넌트 위에 만든 이유: 컴포넌트가 리렌더링돼도 다시 안 만들어짐.)
const FRUITS = [
  { number: 1, title: "딸기" },
  { number: 2, title: "멜론" },
  { number: 3, title: "사과" },
  { number: 4, title: "오렌지" },
  { number: 5, title: "배" },
  { number: 6, title: "키위" },
  { number: 7, title: "바나나" },
  { number: 8, title: "레몬" },
  { number: 9, title: "망고" },
  { number: 10, title: "귤" },
];

const MapFruitsPage = () => {
  // 1. 가장 기본 예제
  // const aaa = [<div>1 레드향</div>, <div>2 딸기</div>, <div>3 멜론</div>];

  // 2. 실무 백엔드 데이터 예제
  const bbb = FRUITS.map((e) => (
    <div>
      {e.number} {e.title}
    </div>
  ));

  return (
    <>
      <div>
        {FRUITS.map((e) => (
          <div>
            {e.number} {e.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default MapFruitsPage;
