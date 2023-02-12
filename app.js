const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

const users = [
  {
    name: "John",
    password: "1234",
  },
];

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIICITANBgkqhkiG9w0BAQEFAAOCAg4AMIICCQKCAgB+v0CuMyCJjVuwVC5jyJzV
eCet1uHFN1llT3HlyMG668Nvfk9MxBEoctjM6FCtO1krrJmWfstBFREZWjeKP8or
/Zyr3roHPGMtpXvP9FnTssDyvo+d0gZccQiTTf2IndOZGelHlldmL26+nGbnW8dv
hzTs2AY7XPhSU8bkcc/qxdMOOxvLoXpWzHhzclLiEK4FfN4x95zIrfhhiO29bcXq
YW6A7B1TZWnJBunWPvQAHhTWRPsA7qe5Yf3WM+pjUR9/s10Vq41Itz//+diJ+DNB
bDl8pyoDBQSpqg37LjPBsQC78PtynpbDpH0i5VyoVlMyCm24yNTw4XvuMaVdwY9c
A3w1hDAv9hxPby9SK4rfredF5QDHYVQ4j7sGenjGSh8eH/hEMQEWtGACItQpP1dW
o/ugd7QpswpH30hG7GiRArFPrqC+psGMf7Fxd4fpTIAo1xCUG5ecR5VL3PkSLmHc
1yFA9XhFlggSgcX9x1l5mFijRq2sJqeFtI38S9oE4GQvREg/tscMZiZD/eqz134G
O59htPYONmDMNdFYMLhFHHkPWOBkAOcLSJaFwAMyAxkGRDYr0l03TZbLQlXDXSeM
duIsO57nzb033ciKBybx+uOY1nWhaKC/Wkfy2W7E/RGUJkbUhhVJ0lFykXC+a1bO
nr3YSmMcX0oWIQOa8po8CQIDAQAB
-----END PUBLIC KEY-----`;

app.use(express.json());

function jwtGuard(req, res, next) {
  const idToken = req.headers.authorization;
  jwt.verify(idToken, publicKey, (err, decoded) => {
    if (err) {
      res.status(401).send("L'utilisateur n'est pas autorisé");
    } else {
      req.userToken = decoded;
      next();
    }
  });
}

app.get("/", jwtGuard, (req, res) => {
  res.send(users);
});

app.post("/auth", (req, res) => {
  const { name, password } = req.body;

  const valid = users.some(
    (user) => user.name === name && user.password === password
  );

  const token = jwt.sign({ name }, privateKey, { algorithm: "RS256" });

  if (valid) {
    res.send(token);
  } else {
    res.status(404).send("Pas trouvé");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
