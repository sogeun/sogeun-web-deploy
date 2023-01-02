import { useRouter } from 'next/router';
import styled from 'styled-components';
import pages from '~/constants/pages';
import { useAuthActions } from '~/context/auth';
import { SocialProvider, SocialSignInPayload, WebViewMessageType } from '~/constants/types';
import { sendMessage } from '~/utils/message';

const SignIn = () => {
  const router = useRouter();
  const { setToken } = useAuthActions();

  const handleSocialSignIn = (provider: SocialProvider) => () => {
    // @ts-ignore
    if (window?.ReactNativeWebView) {
      // 앱 소셜 로그인
      sendMessage<SocialSignInPayload>({
        type: WebViewMessageType.SOCIAL_SIGN_IN,
        payload: {
          provider,
        },
      });
    } else {
      // 웹 소셜 로그인
      setToken('temp token');
      router.push(pages.HOME);
    }
  };

  return (
    <div>
      <h1>Typo Test Heading1</h1>
      <h2>Typo Test Heading2</h2>
      <h3>Typo Test Heading3</h3>
      <Form
      // onSubmit={handleSubmit}
      >
        소근소근
        <input
          type="text"
          // onChange={handleChangeId}
          style={{ border: '1px solid black', width: '50%' }}
        />
        pw
        <input
          type="password"
          // onChange={handleChangePw}
          style={{ border: '1px solid black', width: '50%' }}
        />
        <button type="submit">로그인</button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.typo.B1_R_PC}
`;

export default SignIn;
