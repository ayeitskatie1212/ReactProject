import { CognitoUser } from "@aws-amplify/auth";

type userDataType = {
  user: CognitoUser;
  userConfirmed: boolean;
  userSub: string;
};

export type { userDataType };
