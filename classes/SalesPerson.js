const { Employee } = require("./Employee")
class SalesPerson extends Employee{
    #totalSales
    constructor(clients,name,position,salary){
        super(name,position,salary)
        this.#totalSales = 0;
        this.clients = [clients];
    }
    getSalesNumber(){
        return this.#totalSales;
    }
    makeSale(amount){
        if(amount === NaN){
            return "sales made Must be a number"
        }
        
        this.#totalSales += amount;
    }
    addClient(client) {
        this.clients.push(client);
      }
      getClients() {
        return this.clients;
      }
}

module.exports = {
    SalesPerson,
}