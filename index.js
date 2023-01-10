let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

for (var i = 0; i < testCase1.length; i++) {
  testCase1[i].totalmarks = testCase1[i].biology + testCase1[i].chemistry;
}

for (var i = 0; i < testCase1.length; i++) {
  for (j = i + 1; j < testCase1.length; j++) {
    if (testCase1[i].totalmarks < testCase1[j].totalmarks) {
      a = testCase1[i];
      testCase1[i] = testCase1[j];
      testCase1[j] = a;
    }
  }
}
var result = [];
for (var i = 0; i < testCase1.length; i++) {
  result[i] = testCase1[i].name;
}
console.log(result);
