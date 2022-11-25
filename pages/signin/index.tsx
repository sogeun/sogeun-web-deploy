import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import Typo from "../../components/Typo";
import { AuthTokenPayload, WebViewMessageType } from "../types";
import { sendMessage } from "../utils";

const SignIn = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleSubmit = () => {
    // 로그인 과정 끝낸 후
    router.push("/main");
    sendMessage<AuthTokenPayload>({
      type: WebViewMessageType.SIGN_IN,
      payload: {
        token: "토큰",
      },
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Typo>id</Typo>
        <input
          type="text"
          onChange={handleChangeId}
          style={{ border: "1px solid black", width: "50%" }}
        />
        <Typo>pw</Typo>
        <input
          type="password"
          onChange={handleChangePw}
          style={{ border: "1px solid black", width: "50%" }}
        />
        <button type="submit">
          <Typo>로그인</Typo>
        </button>
      </form>
    </div>
  );
};

export default SignIn;
