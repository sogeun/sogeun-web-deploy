import { useRouter } from 'next/router';
import styled from 'styled-components';
import pages from '~/constants/pages';
import { useAuthActions } from '~/context/auth';
import { SocialProvider, SocialSignInPayload, WebViewMessageType } from '../../constants/types';
import { sendMessage } from '../../utils/message';

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
      <SocialButton onClick={handleSocialSignIn('kakao')}>카카오</SocialButton>
      <br />
      <SocialButton onClick={handleSocialSignIn('naver')}>네이버</SocialButton>
      <br />
      <SocialButton onClick={handleSocialSignIn('google')}>구글</SocialButton>
      <br />
      <SocialButton onClick={handleSocialSignIn('apple')}>애플</SocialButton>
    </div>
  );
};

const SocialButton = styled.button`
  ${({ theme }) => theme.typo.S1_B}
`;

export default SignIn;
