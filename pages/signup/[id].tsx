import React from "react";
import { useRouter } from "next/router";
import { useInterface } from "~/utils/interface";
import styled from "styled-components";
import Button from "~/components/Button";
import { ParsedStorage } from "~/utils/storage";
import routes from "~/constants/routes";

const SignUp = () => {
  const router = useRouter();
  const { pushNavigation, replaceNavigation } = useInterface();
  const id = parseInt(router.query.id as string, 10);

  const isLast = id === signupList.length;
  const matchedItem = signupList.find((v) => v.id === id);

  const handleNext = () => {
    if (isLast) {
      ParsedStorage.setItem("isSignupViewed", true);
      replaceNavigation(routes.SIGN_IN);
    } else {
      pushNavigation(`${routes.SIGN_UP}/${id + 1}`);
    }
  };

  return (
    <Container>
      <div>{matchedItem?.content}</div>
      <ButtonWrap>
        <Button title={"다음"} hasNextButton onClick={handleNext} />
      </ButtonWrap>
    </Container>
  );
};

const signupList = [
  { id: 1, content: 1 },
  { id: 2, content: 2 },
];

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14rem 2rem 4.2rem;
  height: 100%;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
`;

export default SignUp;
