
const user = {
    name: "Iskandar",
    surname: "Xasanov",
    age: 22,
    status: true,
    visa: ["Canada", "USA", "South Korea"],
    fullname: function () {
      return this.name + " " + this.surname;
    },
  };
  
  let passport = {
    serries: "AC",
    number: 1231546444,
    date: {
      get: "2015",
      to: "2025",
    },
  };
  
  
  
  let newObject = Object.assign({}, user, passport);
  let key = Object.keys(newObject);
  let value = Object.values(newObject);
  let all = Object.entries(key,value)
  


  all.filter(item =>{
    let key = typeof item
    if (all[key]) {
        all.push(newObject)
    }
})
  console.log(newObject);
  
  
  
