var createPerson = function(firstName, lastName){
  var person = {
    firstName : firstName,
    lastName : lastName
  };
  
  Object.defineProperty(person, "fullName", {
    get : function() {
      return this.firstName + " " + this.lastName;
    },
    configurable : true,
    enumerable : true
  });
  
  return person;
};

var createEmployee = function(firstName, lastName, position){
  var person = createPerson(firstName, lastName);
  
  person.position = position;
  
  var fullName = Object.getOwnPropertyDescriptor(person, "fullName");
  var fullNamefunction = fullName.get.bind(person);
  
  Object.defineProperty(person, "fullName", {
    get : function(){
      return fullNamefunction() + "," + this.position;
    },
    enumerable : true,
    configurable : true
  });
  
  return person;
};
