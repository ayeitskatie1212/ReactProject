import { StackScreenProps } from "@react-navigation/stack";
import { CognitoUser} from '@aws-amplify/auth'
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Registration: undefined;
  ForgotPassword: undefined;
  Intro: undefined;
  Verification: {
    username: string;
  };
};

type HomeScreenProp = StackScreenProps<RootStackParamList, "Home">;
type IntroScreenProp = StackScreenProps<RootStackParamList, "Intro">;
type LoginScreenProp = StackScreenProps<RootStackParamList, "Login">;
type RegistrationScreenProp = StackScreenProps<
  RootStackParamList,
  "Registration"
>;
type ForgotPasswordScreenProp = StackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>;
type VerificationScreenProp = StackScreenProps<
  RootStackParamList,
  "Verification"
>;

type RouteType = RouteProp<RootStackParamList, "Verification">

export type {
  RootStackParamList,
  HomeScreenProp,
  IntroScreenProp,
  LoginScreenProp,
  RegistrationScreenProp,
  ForgotPasswordScreenProp,
  VerificationScreenProp,
  RouteType
};
