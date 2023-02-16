import { Button, Modal } from "antd";
import React, { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (address: Address) => {
    console.log(address);
    console.log("aaa");
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        // open={isOpen} 오류 발생
        visible={isOpen} // 오류 해결
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
    </>
  );
};
export default App;
