import { Auth } from "aws-amplify";
import { VerificationScreenProp } from "../types/navigationTypes";

async function checkVerification(
  code: string,
  { route, navigation }: VerificationScreenProp
) {
  const { username } = route.params;
  try {
    await Auth.confirmSignUp(username, code);
    navigation.navigate("Home");
  } catch (error) {
    console.log("error confirming sign up", error);
  }
}

async function resendVerificationCode(email: string) {
  try {
    await Auth.resendSignUp(email);
    console.log("code resent successfully");
  } catch (err) {
    console.log("error resending code: ", err);
  }
}

export { checkVerification, resendVerificationCode };
