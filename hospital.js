let patients = {
    hospitalName: "Toronto Hospital",
    patientData: [
    {
        id: 1001,
        fullName: "Natalie Lew",
        dateOfBirth: new Date (1995,3,10).toDateString(),
        symptoms: 
            [   
                "cough",
                "sneeze",
                "rash"
            ]
    },
    {
        id: 1002,
        fullName: "Ben Ten",
        dateOfBirth: new Date (1992,12,3).toDateString(),
        symptoms: 
            [
                "fever",
                "swelling",
                "nausea"
            ]
    },
    {
        id: 1003,
        fullName:"Chris Mas",
        dateOfBirth: new Date (1970,12,31).toDateString(),
        symptoms:
            [
                "high temperature",
                "cough",
                "increase in apetite"
            ]
        }
    ]
   
}

let hospital;
let line;

function showPatients() {
     hospital= "<h1> "+ patients.hospitalName + " </h1>";
    
     for (let i = 0; i<patients.patientData.length; i++){
         line += "<h2> "+ patients.patientData[i].fullName + ", " +  patients.patientData[i].dateOfBirth +" </h2>";
         line += "<ul>";

         for(let Y = 0; Y<patients.patientData.length; Y++){
         
            line += "<li> " + patients.patientData[Y].symptoms[Y] + " </li>";
          
        }
        line += "</ul>";

        
    }
    let returnpatients = hospital + line;
    return returnpatients;
}
let showPatientsReturn = showPatients();
console.log(showPatientsReturn);


let randomPatientId;
function getPatients(){
     let randomPatients = Math.floor(Math.random()* patients.patientData.length);

     randomPatientId = patients.patientData[randomPatients].id;
     return randomPatientId;
}

let getPatientReturn = getPatients();
console.log(getPatientReturn);