// userInput will be declared by let because it will be modified,
// It also is assigned the value of the input element with the id of date
// its assigned that value bcaue the user has to pick a date.
let userInput = document.getElementById('date');
// setting the the date available to select will be the present or the past not the future past the current date
userInput.max = new Date().toISOString().split('T')[0];

let result = document.getElementById('result');

const calculateAge = () => {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
     y3 = y2 - y1;
     if (m2 >= m1) {
         m3 = m2 - m1;
     } else {
        y3--;
        m3 = 12 + m2 - m1;
     }
     if (d2 >= d1) {
         d3 = d2 - d1;
     } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
     }
     if(m3 < 0 ) {
        m3 = 11; 
        y3--;
     }
     result.innerHTML = `Your Age is <span>${y3}</span> Years <span>${m3}</span> Months <span>${d3}</span> Days`;
    }
    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }