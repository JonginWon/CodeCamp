import { useRouter } from "next/router";

const StaticRoutingPage = () => {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-08-dynamic-routed-board-query/400");
  };

  const onClickMove2 = () => {
    router.push("/05-08-dynamic-routed-board-query/500");
  };

  const onClickMove3 = () => {
    router.push("/05-08-dynamic-routed-board-query/600");
  };

  const onClickMove100 = () => {
    router.push("/05-08-dynamic-routed-board-query/700");
  };

  return (
    <>
      <button onClick={onClickMove1}>400번 게시글</button>
      <button onClick={onClickMove2}>500번 게시글</button>
      <button onClick={onClickMove3}>600번 게시글</button>
      <button onClick={onClickMove3}>700번 게시글</button>
    </>
  );
};

export default StaticRoutingPage;
