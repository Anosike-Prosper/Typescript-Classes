class Department {
  private name: string;
  private readonly id: string;
  employees: string[] = [];

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }

  describe(this: Department) {
    // this.id ='7'
    console.log(`Department: ${this.name}. ${this.id}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    // this.employees = ["james"];
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super("IT", id);
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  constructor(id: string, reports: string[]) {
    super("Accounting", id);
    this.reports = reports;
  }

  addReport(text: string) {
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
