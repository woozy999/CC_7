//cc 7

// init company data
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

//part 2

// recursive function for salary
function calculateDepartmentSalary(department) {
    let totalSalary = 0;

    department.employees.forEach(employee => {
        totalSalary += employee.salary;
        if (employee.subordinates.length > 0) {
            employee.subordinates.forEach(subordinate => {
                totalSalary += calculateEmployeeSalary(subordinate);
            });
        }
    });

    return totalSalary;
}

// calc salary for individual employee and subs
function calculateEmployeeSalary(employee) {
    let salary = employee.salary;
    employee.subordinates.forEach(subordinate => {
        salary += calculateEmployeeSalary(subordinate);
    });
    return salary;
}

//part 3

// calc total salary
function calculateCompanySalary(company) {
    let totalCompanySalary = 0;

    company.departments.forEach(department => {
        totalCompanySalary += calculateDepartmentSalary(department);
    });

    return totalCompanySalary;
}

//part 4

console.log("Total salary for Engineering department: $" + calculateDepartmentSalary(company.departments[0]));
console.log("Total salary for Sales department: $" + calculateDepartmentSalary(company.departments[1]));
console.log("Total salary for the entire company: $" + calculateCompanySalary(company));
