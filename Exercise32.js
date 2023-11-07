function myLog() { // The myLog function is defined. This function returns an object with three properties: bar, foo, and prop.
   return {
      bar: 'bar',
      foo: 'foo',
      prop: function () {
          var self = this;  // Inside the prop function, a variable self is created and assigned the value of the context of prop.
          console.log(self.bar);  // bar will be referenced in the context of myLog()
          console.log(this.foo);  // foo will be referenced in the context of myLog()
          (function() {
             console.log(self.bar);  // bar will be referenced as the same context of myLog()
             console.log(this.foo);  // foo will be referenced in the context of the IIFE() that has not been defined
          })();
      }
   };
}

var obj = myLog();  // Creates object
obj.prop();  // Calls prop function

