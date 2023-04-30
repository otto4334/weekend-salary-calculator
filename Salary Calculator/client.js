$( document ).ready( readyNow );


let employees = [];

function addEmployees(){
    // get user input, create  a new object
    let newEmployee = {
        firstName: $( '#firstNameIn' ).val(),//don't forget commas
        lastName: $( '#lastNameIn').val(),
        iD: $( '#idIn').val(),
        title: $( '#titleIn').val(),
        annualSalary: $( '#annualSalaryIn').val(),
    }
    // push the new employees into the array 
    employees.push(newEmployee);
    // empty inputs
    $( '#firstNameIn').val( '' )
    $( '#lastNameIn' ).val( '' )
    $( '#idIn' ).val( '' )
    $( '#titleIn' ).val( '' )
    $( '#annualSalaryIn' ).val( '' )
    // calculate totalMonthly
    calculatetotalMonthly();
    // update DOM
    displayPurchases();
}

function calculatetotalMonthly(){
    //loop through purchases array
    let totalSalary=0
    for (let i=0; i<employees.length; i++){
        totalSalary += Number (employees[i].annualSalary); //callprice from object
    }
  
    // for each purchase, add up total of all prices
    //  subtract totalPrices form budget for remainingBudget
    const totalMonthly = totalSalary;
    //  display remainingBudget
    let el = $( '#totalMonthly' );
    el.empty();
    el.append(totalMonthly);
}

function displayPurchases(){
    // target output by ID 
    let el = $( '#employeesOut' )
    // empty 
    el.empty();
    // loop through purchases array
   for (employee of employees){
        // for each purchase creat a list item
        el.append(`<li>${employee.firstName} ${employee.lastName} ${employee.iD} ${employee.title} ${employee.annualSalary}</li>`);
   }
   
   
}

function readyNow(){//pageload
// display budget
// target budgetOut by id
// let initialBudget = $( '#budgetOut');
// initialBudget.empty();
// initialBudget.append( budget );
// handle click event
$( '#submitButton' ).on( 'click', addEmployees )
// initial disply
calculatetotalMonthly()
}// end ready now
