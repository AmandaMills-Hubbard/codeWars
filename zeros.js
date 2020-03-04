function noBoringZeros(n) {
  // your code
 let noZero = Number(n.toString().replace(/0+$/,''));
 return (noZero);
}



function testing(actual, expected) {
    Test.assertSimilar(actual, expected);
}

Test.describe("Basic tests",function() {
Test.it("noBoringZeros",function() {
    testing(noBoringZeros(1450), 145)
    testing(noBoringZeros(960000), 96)
    testing(noBoringZeros(1050), 105)
    testing(noBoringZeros(-1050), -105)
    testing(noBoringZeros(-105), -105)
    testing(noBoringZeros(0), 0)
})})
