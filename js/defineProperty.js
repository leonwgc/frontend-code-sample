function Foo() {
  var _value;

  Object.defineProperty(this, 'value', {
    set: function (value) {
      if(_value!==value){
         _value = value;
         console.log('value changed');
      }
      else{
        console.log('value not change');
      }
    },
    get: function () {
      return _value;
    }
  });
}

var foo=new Foo();

console.log(foo.value);

foo.value=100;

console.log(foo.value);

foo.value=100;

