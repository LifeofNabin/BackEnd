const express = require("express");
const app = express();

const nabi = [
  {
    name: "nabin",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", function (req, res) {
  const nabinKidney = nabi[0].kidneys;
  const noofKid = nabinKidney.length;
  let NoofhealthKidneys = 0;
  for (let i = 0; i < nabinKidney.length; i++) {
    if (nabinKidney[i].healthy) {
      NoofhealthKidneys = NoofhealthKidneys + 1;
    }
  }
  const NummberOfUnhealthy = noofKid - NoofhealthKidneys;
  res.json({
    noofKid,
    NoofhealthKidneys,
    NummberOfUnhealthy,
  });
});
app.listen(3000);
