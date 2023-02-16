import { Button, Modal } from "antd";
import React, { useState } from "react";
import DaumPostcodeEmbed, { type Address } from "react-daum-postcode";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    console.log(address);
    onToggleModal();
  };

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>
        Open Modal
      </Button>
      {isOpen && (
        <Modal
          title="Basic Modal"
          // open={isOpen} 오류 발생
          visible={true} // 오류 해결
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};
export default App;
