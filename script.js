const data = [
    {name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
  console.log("Developers:", developers);
  }
  
  // 2. Add Data
  function addData(person1) {
       data.push(person1);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
       data.splice(data.findIndex(person => person.profession === "admin"),1);
       console.log("removed admin from the data");
  }
  
  // 4. Concatenate Array
  function concatenateArray(newData) {
       data=data.concat(newData);
  }
  
  // 5. Average Age
  function averageAge() {
    const total=data.reduce(sum,person => sum + person.age,0);
     const averageAge= total/data.length;
    return averageAge;
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const adults=data.filter(person=>person.age > 25);
    return adults;
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    
  }
  
  // 10. Profession Count
  function getTotalProfessions() {}