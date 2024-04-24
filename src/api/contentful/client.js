import * as contentful from "contentful";

const SPACE = "cvo79xgkeen2";
const ACCESS_TOKEN = "FGWul9eE2iBXm6yqJ73Wx7WSTGI09_uQYivtctj0CPo";

export const client = contentful.createClient({
  space: SPACE,
  accessToken: ACCESS_TOKEN,
});
