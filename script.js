function addNewWEField() {
    console.log("-----------WORK EXPERIENCE----------------");

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("weField");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    newNode.classList.add("mt-2");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField() {
    console.log("-----------ACADEMIC QUALIFICATION-----------------");

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let qaOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    qaOb.insertBefore(newNode,aqAddButtonOb);
}

//generating cv

function generateCV() {
    console.log("generating CV!!");
    //for name1
    let nameOb=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameOb;

    //foe name2
    document.getElementById("nameT2").innerHTML=nameOb;

    //for contact
    document.getElementById("contactT").innerHTML= document.getElementById("contactField").value;

    //for email
    document.getElementById("emailT").innerHTML= document.getElementById("emailField").value;

    //for address
    document.getElementById("addressT").innerHTML= document.getElementById("addressField").value;

    //Naukri
    document.getElementById("fbT").innerHTML= document.getElementById("fbField").value;

    //LinkdIn
    document.getElementById("linkdT").innerHTML= document.getElementById("LinkedInField").value;

    //objective
    document.getElementById("ObjectiveT").innerHTML= document.getElementById("obField").value;

    //Work Experience
    let weS=document.getElementsByClassName("weField");
    let str='';
    for (const weT of weS) {
        str=str + `<li> ${weT.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;


    //Education Qualification
    let eqS=document.getElementsByClassName("aqField");
    let str1='';
    for (const aqT of eqS) {
        str1=str1 + `<li> ${aqT.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    //code for setting image

    let file=document.getElementById("imgField").files[0];
    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);
    
    //set image to template
    reader.onload=function(){

        document.getElementById("imgT").src=reader.result;

    };
    console.log(reader.result);

    //print button
    document.getElementById('cv-form').style.display='none';
    document.getElementById("cv-template").style.display="block";

}

function printCv() {
    console.log('print cv !!');
    window.print();
}