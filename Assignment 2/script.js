function task1() {
    let result = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            result = result + i + " ";
        }
    }
    document.getElementById("ans1").innerText = "Even Numbers: " + result;
}

function calculator(operator) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let ans = 0;


    switch (operator) {
        case "+":
            ans = num1 + num2;
            break;
        case "-":
            ans = num1 - num2;
            break;
        case "*":
            ans = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                ans = "Cannot divide by zero";
            } else {
                ans = num1 / num2;
            }
            break;
    }
    
    document.getElementById("ans2").innerText = "Answer is: " + ans;
}


function task3() {
    let salary = Number(document.getElementById("salary").value);
    let tax = 0;


    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0; 
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10; 
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20; 
            break;
        case (salary > 1500000):
            tax = salary * 0.30; 
            break;
        default:
            tax = 0;
    }
    
    document.getElementById("ans3").innerText = "Tax to be Paid: Rs.  " + tax;
}


function task4() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let sum = 0;

    while (n1 > 0 || n2 > 0) {
        let d1 = n1 % 10;
        let d2 = n2 % 10;
        sum = sum + (d1 * d2);
        
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    
    document.getElementById("ans4").innerText = "Sum Answer: " + sum;
}