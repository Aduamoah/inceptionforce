export const ROUTE_PATHS = {
  HOME: "/",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  VERIFY: "/success",
  RECOVER: "/recoverpass",
  RESET: "/resetpass",
  FINISH: "/finishsetup",
  EMAILVERIFY: "/emailverify",
  RESETMESSAGE: "/resetmessage",
  RESETSUCCESS: "/resetsuccess",
  INVENTORY: "/inventory",
} as const;

export type ROUTE_PATHS = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS];
