class Employee {
#salary;
#isHired;
static allEmployee = [];
constructor(name,position,salary){
    this.#isHired = true;
    this.name = name;
    this.position = position;
    this.#salary = salary;
    Employee.allEmployee.push(this);
}
static getEmployee() {
    return Employee.allEmployee;
    
}
getSalary(){
    return this.#salary;
}
setSalary(amount){

   return (this.#salary = amount)
}
getStatus(){
    return this.#isHired;
}
setStatus(command){
    if(command === "hire"){
        this.#isHired = true;
    }else if(command === "fire"){
        this.#isHired = false;
    }
}
static getTotalPayroll() {
    let total = 0;
    for (let employee of Employee.allEmployees) { 
      total += employee.getSalary(); 
    }
    return total; 
  }

}


module.exports = {
    Employee,
}
