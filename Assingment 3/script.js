// Q1
function task1() {
    let states = ["Maharashtra", "Assam", "Gujarat", "Odisha", "Punjab"];
    let result = states.filter(function(state) {
        let first = state.charAt(0).toUpperCase();
        return !(first === 'A' || first === 'E' || first === 'I' || first === 'O' || first === 'U');
    });
    document.getElementById("ans1").innerText = "Result: " + result.join(", ");
}

// Q2
function task2() {
    let str = 'I love my India';
    let result = str.split(' ').reverse().join(' ');
    document.getElementById("ans2").innerText = "Result: " + result;
}

// Q3
function task3() {
    let string = 'INDIA';
    let arr = string.split('');
    arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
    document.getElementById("ans3").innerText = "Result: " + arr.join('');
}

// Q4
function task4() {
    let str = document.getElementById("q4_str").value.toLowerCase();
    let vCount = 0, cCount = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'a' && char <= 'z') {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') vCount++;
            else cCount++;
        }
    }
    document.getElementById("ans4").innerText = "Vowels: " + vCount + " | Consonants: " + cCount;
}

// Q5
function task5() {
    let sent = document.getElementById("q5_sent").value;
    let wrong = document.getElementById("q5_wrong").value;
    let correct = document.getElementById("q5_correct").value;
    let result = sent.replace(wrong, correct);
    document.getElementById("ans5").innerText = "Corrected: " + result;
}

// Q6
function task6() {
    let arr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
    let result = arr.filter(function(num) { return num > 5; });
    document.getElementById("ans6").innerText = "Result: " + result.join(", ");
}

// Q7
function task7() {
    const students = [
        { name: "Ram", scores: [80, 70, 60] },
        { name: "Mohan", scores: [80, 70, 90] },
        { name: "Sai", scores: [60, 70, 80] },
        { name: "Hemang", scores: [90, 90, 80, 80] }
    ];
    let result = students.map(function(st) {
        let sum = st.scores.reduce(function(a, b) { return a + b; }, 0);
        return { name: st.name, average: sum / st.scores.length };
    });
    document.getElementById("ans7").innerText = JSON.stringify(result, null, 2);
}

// Q8
function task8() {
    let num = Number(document.getElementById("q8_num").value);
    while (num > 9) {
        let sum = 0, temp = num;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        num = sum;
    }
    document.getElementById("ans8").innerText = "Single Digit Sum: " + num;
}

// Q9
function task9() {
    let para = document.getElementById("q9_para").value;
    if(para.trim() === "") {
        document.getElementById("ans9").innerText = "Word Count: 0";
        return;
    }
    let words = para.trim().split(" ");
    document.getElementById("ans9").innerText = "Word Count: " + words.length;
}

// Q10
function task10() {
    let str = document.getElementById("q10_str").value;
    let result = str.split('').reverse().join('');
    document.getElementById("ans10").innerText = "Reversed: " + result;
}

// Q11
function task11() {
    const marks = {
        student1: { sub1: 41, sub2: 46, sub3: 97, sub4: 57, sub5: 37 },
        student2: { sub1: 42, sub2: 66, sub3: 88, sub4: 97, sub5: 67 },
        student3: { sub1: 44, sub2: 56, sub3: 87, sub4: 97, sub5: 37 }
    };
    let result = {};
    for (let student in marks) {
        let subjects = marks[student];
        let total = 0, count = 0;
        for (let sub in subjects) {
            total += subjects[sub];
            count++;
        }
        result[student] = { average: total / count };
    }
    document.getElementById("ans11").innerText = JSON.stringify(result, null, 2);
}