"use strict";
class Department {
    constructor(name, id) {
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        // this.id ='7'
        console.log(`Department: ${this.name}. ${this.id}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        // this.employees = ["james"];
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super("Accounting", id);
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    getReport() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment("d2", []);
accounting.addReport("check sales");
accounting.getReport();
// const IT = new ITDepartment("1", ["yes"]);
// IT.describe();
// IT.addEmployee("prosper");
// IT.addEmployee("presh");
// // console.log(accounting.id);
// // accounting.employees[0] = "emeka";
// // console.log(accounting.employees);
// IT.printEmployeeInformation();
// console.log(IT);
// accounting.describe();
// const accountingCopy = { name: "prosper", describe: accounting.describe };
// accountingCopy.describe();
