import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { IAddressModalPresenterProps } from "./addressModal.types";
import * as S from "./addressModal.styles";

const AddressModalPresenter = ({
  isOpen,
  onToggleModal,
  handleComplete,
  zoneCode,
  address,
}: IAddressModalPresenterProps) => {
  return (
    <>
      <S.ZipcodeWrapper>
        <S.Zipcode
          type="text"
          readOnly
          placeholder="07250"
          defaultValue={zoneCode}
        />
        <S.ModalButton type="primary" onClick={onToggleModal}>
          우편번호 검색
        </S.ModalButton>

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
      </S.ZipcodeWrapper>
      <S.DetailedAddress readOnly defaultValue={address} />
      <S.DetailedAddress placeholder="상세 주소를 입력해주세요." />
    </>
  );
};
export default AddressModalPresenter;
