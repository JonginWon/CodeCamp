import { RiseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyStar = styled(Rate)``;

const LibraryIconPage = () => {
  const [value, setValue] = useState(3);

  const qqq = (aaa: number) => {
    setValue(aaa);
  };

  return (
    <>
      <div id="qqq">
        <MyStar onChange={qqq} />
      </div>
    </>
  );
};

export default LibraryIconPage;
