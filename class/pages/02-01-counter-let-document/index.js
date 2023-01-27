const CounterLetDocumentPage = () => {
  const onClickCountUp = () => {
    const count = Number(document.getElementById("count").innerText) + 1;
    document.getElementById("count").innerText = count;
  };

  const onClickCountDown = () => {
    const count = Number(document.getElementById("count").innerText) - 1;
    document.getElementById("count").innerText = count;
  };

  return (
    <>
      <div id="count">0</div>
      <button onClick={onClickCountUp}>UP</button>
      <button onClick={onClickCountDown}>DOWN</button>
    </>
  );
};

export default CounterLetDocumentPage;
