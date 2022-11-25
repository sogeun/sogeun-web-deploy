import { useRouter } from "next/router";
import styled from "styled-components";
import { bottomTabList } from "../../constants";
import strings from "../../constants/strings";

const BottomTabNavigator = () => {
  const router = useRouter();
  const renderBottomTabButton = bottomTabList.map((v) => {
    const handleBottomTabClick = () => {
      router.push(v.to);
    };

    const handleAddButtonClick = () => {
      window.alert("준비중");
    };
    if (v.title === strings.ADD) {
      return (
        <AddButton onClick={handleAddButtonClick} key={v.title}>
          {v.title}
        </AddButton>
      );
    }
    return (
      <TabButton onClick={handleBottomTabClick} key={v.title}>
        {v.title}
      </TabButton>
    );
  });
  return <Container>{renderBottomTabButton}</Container>;
};

const Container = styled.nav`
  width: 100%;
  height: 72px;
  border-top: 1px solid gray;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const TabButton = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid black;
`;

const AddButton = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid black;
  border-radius: 50%;
`;

export default BottomTabNavigator;
