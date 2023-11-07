function insertMissingMonth(input) {
    let months = input.split(' ');
    let allMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    let missingMonth = "January";
    let prevousMonth = ""
    for (let i=0;i<11;i++){
        if (months.includes(allMonths[i])){
          previousMonth = allMonths[i];
          missingMonth = allMonths[i+1];
        }
    }
    let i = 0;
    while(months[i]){
      if (months[i] === previousMonth)
        months.splice(i + 1, 0, missingMonth);
      i++;
    }

    return months.join(' ');
}

let input = "January February March January February March";
let output = insertMissingMonth(input);
console.log(output);
