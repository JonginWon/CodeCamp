import { useState } from "react";
import { type Address } from "react-daum-postcode";
import AddressModalPresenter from "./addressModal.presenter";

const addressModalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    setZoneCode(data.zonecode);
    setAddress(data.address);
    onToggleModal();
  };

  return (
    <>
      <AddressModalPresenter
        isOpen={isOpen}
        onToggleModal={onToggleModal}
        handleComplete={handleComplete}
        zoneCode={zoneCode}
        address={address}
      />
    </>
  );
};

export default addressModalContainer;
