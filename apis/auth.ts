import { SocialSignInInfoPayload, SocialSignInResult } from '~/constants/types';
import { axiosUtils } from '~/network/axiosUtils';
import defaultRequest from '~/network/defaultRequest';
import { User } from '~/pages/api/signin';

export const requestSocialSignIn = async ({
  pId,
  accessToken,
  provider,
}: SocialSignInInfoPayload): Promise<SocialSignInResult | undefined> => {
  try {
    const response = await defaultRequest<User>({
      method: axiosUtils.POST,
      url: '/api/signin',
      requestBody: {
        pId,
        accessToken,
        provider,
      },
    });

    const { data } = response;
    const token = 'temp Token';
    return {
      user: data,
      token,
    };
  } catch (e) {
    console.error(e);
  }
};
