import { type Address } from "react-daum-postcode";

export interface IAddressModalPresenterProps {
  isOpen: boolean;
  onToggleModal: () => void;
  handleComplete: (data: Address) => void;
  zoneCode: string;
  address: string;
}
