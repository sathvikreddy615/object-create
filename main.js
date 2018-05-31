// const Employment = Object.create({
//     company: {
//         value: "Alana Healthcare"
//     },
//     position: {
//         value: "Business Analyst"
//     },
//     dateStarted: {
//         value: "October 2016" 
//     },
//     dateEnded: {
//         value: "April 2018"
//     },
//     location: {
//         value: "Nashville, TN"
//     }
// })

// console.log(Employment);

// Challenge 

const myJobs = (company, position, dateStarted, dateEnded, location, id) => {
    let emp = {};
        emp.company = company;
        emp.position = position;
        emp.dateStarted = dateStarted;
        emp.dateEnded = dateEnded;
        emp.location = location;
        return emp;
}

// Advanced Challenge

// 1.
let firstJob = myJobs("Vanderbilt-University", "Research Assisstant", "June 2015", "August 2015", "Nashville, TN");
let secondJob = myJobs("21st-Mortgage", "Financial Counselor", "June 2016", "September 2016", "Knoxville, TN");
let thirdJob = myJobs("Alana-Healthcare", "Business Analyst", "October 2016", "April 2018", "Nashville, TN");


// 2. 

const jobArray = [firstJob, secondJob, thirdJob];

const parentDiv = document.querySelector("#parent-div");
const article = document.createElement("article");

const addText = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        // jobArray[i].setAttribute("id", jobArray[i]['company']);
        let appendText = document.createElement("h4");
        appendText.textContent = jobArray[i];
        article.appendChild(appendText);
    }
}

parentDiv.appendChild(article);
addText(jobArray);