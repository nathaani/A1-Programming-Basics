let hospitalName = "Toronto Hospital"
let patients = [
    {
        id: 1001,
        fullName: "Natalie Lew",
        dateOfBirth: new Date (1995,3,10).toDateString(),
        symptoms: 
            [
                {symptom: "cough"},
                {symptom: "sneeze"},
                {symptom: "rash"}
            ]
    },
    {
        id: 1002,
        fullName: "Ben Ten",
        dateOfBirth: new Date (1992,12,3).toDateString(),
        symptoms: 
            [
                {symptom: "fever"},
                {symptom: "swelling"},
                {symptom: "nausea"}
            ]
    },
    {
        id: 1003,
        fullName:"Chris Mas",
        dateOfBirth: new Date (1970,12,31).toDateString(),
        symptoms:
            [
                {symptom: "high temperature"},
                {symptom: "cough"},
                {symptom: "increase in apetite"}
            ]
    },
   
]