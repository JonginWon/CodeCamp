import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  # 변수의 타입 적는 곳
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    # 실제 우리가 전달할 변수 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      message
      number
    }
  }
`;

const GraphqlMutationPage = () => {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      // variables 라는 명령어가 $ 역할을 해줌
      variables: {
        // state 이름이랑 variables 이름이랑 같아도 상관 없음 (스코프 체인)
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "로지텍",
          price: 170000,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql-API 요청</button>
    </>
  );
};

export default GraphqlMutationPage;
