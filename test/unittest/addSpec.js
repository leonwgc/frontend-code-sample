describe("A test suite", function () {
  it("add(1,1) returns 2", function () {
    expect(add(1, 1)).toBe(2);
  });

  it("add(2,3) returns 5 ", function () {
    expect(add(2, 3)).toBe(5);
  });
  
  var fun=function(){
    add('a',3);
  }
  it("add(a,3) throw TypeError ", function () {
    expect(fun).toThrow();
  });
});