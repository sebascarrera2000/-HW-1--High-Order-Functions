const { find } = require('./data')
const data = require('./data')
// console.log(data)



// 1. Imprime el salario promedio de todos los empleados que trabajan en Amazon
const averageSalary = (employees, company) => {
    let salarioEmpleado=0
    let salarioPromedio=0
    let conteoEmpleados=0
    employees.map(function(employees) {
        if(employees.company==company) 
        {
            salarioEmpleado=salarioEmpleado+employees.salary
            conteoEmpleados=conteoEmpleados+1
           
        }   
    });

    salarioPromedio=salarioEmpleado/conteoEmpleados
    return "$"+salarioPromedio
}
console.log(`Salario promedio de los empleados de Amazon: ${averageSalary(data, 'Amazon')}`)


// 2. Imprime la lista de empleados que trabajan en el departamento de Ventas (Sales) de Facebook
const getEmployeesFrom = (employees, company, department) => {
    
    var  DepartmenEmployees =[]
    employees.map(elem =>{
        if(elem.company==company && elem.department==department )
        {
            DepartmenEmployees.push({first:elem.name.first,Last:elem.name.last}) 
        
        }   
    });

    return DepartmenEmployees
}


console.log('Empleados que trabajan en el departamento de Ventas de Facebook:')
console.log(getEmployeesFrom(data, 'Facebook', 'Sales'))

// 3. Imprime un valor booleano indicando si existe o no algún empleado de Google que gane más de USD10k 
const existEmployeesFrom = (employees, company, salary) => {
    let conteoEmpleados=0
    let SiEncontro= false;
    employees.map(function(employees) {
        if(employees.company==company && employees.salary>=salary ) 
        {
            conteoEmpleados=conteoEmpleados+1
        }   
    });
    if(conteoEmpleados>=1)
    {
        SiEncontro=true;
    }
    
    return SiEncontro
}
console.log(existEmployeesFrom(data, 'Google', 10000))

// 4. Imprime la lista de los empleados (nombre, email y fecha de nacimiento) que trabajen en Datagen
const printEmployeesFrom = (employees, company) => {
    var  employeesCompanie =[]
     employees.map(elem =>{
        if(elem.company==company  )
        {
            employeesCompanie.push({first:elem.name.first,Last:elem.name.last,email:elem.email,dob:elem.dob})   
        
        }   
    });

    return employeesCompanie
}
console.log(printEmployeesFrom(data, 'Datagen')) // son 11

// 5. Imprime la lista de empleados nacidos antes de 1990 y que trabajan en Google o Amazon
// Ordena la lista mostrando primero aquellos que ganan más





const getOlderEmployeesFrom = (employees, company1, company2) => {
    var  olderEmployees =[]
     employees.map(elem =>{
        if(elem.company==company1 || elem.company==company2 )
        {        
            date=new Date(elem.dob)
            year=date.getFullYear()


            if(year<=1990 )
            {
                olderEmployees.push(elem);
                olderEmployees.sort((a, b) => b.salary - a.salary);
                
            }
        }   
    });

    return olderEmployees
}

console.log('Empleados nacidos antes de 1990 y que trabajan en Google o Amazon, ordenados en forma descendente bajo el criterio del salario:')
console.log(getOlderEmployeesFrom(data, 'Google', 'Amazon'))    // son 9