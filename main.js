// Practice - Creat Initial Jobs

const ahc = Object.create({}, {
    company: {
        value: "Alana Healthcare",
        enumerable: true,
        writable: true
    },
    position: {
        value: "Business Analyst",
        enumerable: true,
        writable: true
    },
    dateStarted: {
        value: "October 2016",
        enumerable: true,
        writable: true 
    },
    dateEnded: {
        value: "April 2018", 
        enumerable: true,
        writable: true
    },
    location: {
        value: "Nashville, TN",
        enumerable: true,
        writable: true
    },
    salary: {
        value: "xxxx",
        enumerable: false,
        writable: false
    }
});

const twentyFirst = Object.create({}, {
    company: {
        value: "21st Mortgage",
        enumerable: true,
        writable: true
    },
    position: {
        value: "Financial Counselor",
        enumerable: true,
        writable: true
    },
    dateStarted: {
        value: "June 2016",
        enumerable: true,
        writable: true 
    },
    dateEnded: {
        value: "September 2016", 
        enumerable: true,
        writable: true
    },
    location: {
        value: "Knoxville, TN",
        enumerable: true,
        writable: true
    },
    salary: {
        value: "xxxx",
        enumerable: false,
        writable: false
    }
})

const mrh = Object.create({}, {
    company: {
        value: "Maury Regional Medical Center",
        enumerable: true,
        writable: true
    },
    position: {
        value: "Logistics Analyst Intern",
        enumerable: true,
        writable: true
    },
    dateStarted: {
        value: "May 2015",
        enumerable: true,
        writable: true 
    },
    dateEnded: {
        value: "August 2015", 
        enumerable: true,
        writable: true
    },
    location: {
        value: "Columbia, TN",
        enumerable: true,
        writable: true
    },
    salary: {
        value: "xxxx",
        enumerable: false,
        writable: false
    }
})

// Challenge 

const addJob = (companyVal, positionVal, dateStartedVal, dateEndedVal, locationVal) => {
    let newJob = Object.create({}, {
        company: {
            value: companyVal,
            enumerable: true,
            writable: true
        },
        position: {
            value: positionVal,
            enumerable: true,
            writable: true
        },
        dateStarted: {
            value: dateStartedVal,
            enumerable: true,
            writable: true 
        },
        dateEnded: {
            value: dateEndedVal, 
            enumerable: true,
            writable: true
        },
        location: {
            value: locationVal,
            enumerable: true,
            writable: true
        }
    }) 
    return newJob;  
}

let anotherJob = addJob("Nashville Software School", "Student", "May 2018", "November 2018", "Nashville, TN");
console.log(anotherJob);

let thirdJob = ahc;
console.log(ahc);

let secondJob = twentyFirst;
console.log(secondJob);

let firstJob = mrh;
console.log(mrh);

// Advanced Challenge

// 1.

let jobsArray = [firstJob, secondJob, thirdJob, anotherJob];

// 2. 

const parentDiv = document.querySelector("#parent-div");
const article = document.createElement("article");

const addText = arr => {
    for (let i = 0; i < arr.length; i++) {
        const ul = document.createElement("ul");
        ul.setAttribute("id", arr[i]['company']);
        for (let j in arr[i]) {
            let li = document.createElement("li");
            li.innerHTML += `${arr[i][j]} `;
            ul.appendChild(li);
        }
        article.appendChild(ul);
    }  
}

parentDiv.appendChild(article);
addText(jobsArray);