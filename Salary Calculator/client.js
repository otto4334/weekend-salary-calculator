console.log("Hello WOrld")
const submitButton = document.querySelector("#submitButton");



function handleSubmit( event ) {
    event.preventDefault();
    const tableBody = document.querySelector(".tbody");
    const firstName = document.querySelector("#firstNameIn").value;
    const lastName = document.querySelector("#lastNameIn").value;
    const id = document.querySelector("#idIn").value;
    const title = document.querySelector("#titleIn").value;
    const annualSalary = document.querySelector ("#annualSalaryIn").value;
    const monthly = document.querySelector('#totalMonthly');

    let employees = {
        firstName: firstName,
        lastName: lastName,
        iD: id,
        title: title,
        annualSalary: annualSalary

        // TODO - add properties here
      };
    let totalSalary = 0
    totalSalary += Number(employees.annualSalary);
    combinedMonthly = (totalSalary/12).toFixed(2);
    monthly.innerHTML = `Total Monthly Salary: $${combinedMonthly}`;
    
    tableBody.innerHTML += 
    `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
            <td><button onclick="removeEmployee(this)" class="remove-employee">Remove</button></td>
    </t>
    `;
}

function removeEmployee(event) {

    event.closest('tr').remove();
    totalMonthly();

}

