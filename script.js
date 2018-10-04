// Write all your Javascript here!

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


$.ajax({
    url :`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en`,
     success:function(data){
         console.log("running");
         document.querySelector(`#img`).src=data.imageURL;
         document.querySelector(`#date`).src=date;
         document.querySelector(`#head`).innerHTML=data.info.heading;
         document.querySelector(`#heading`).innerHTML=data.sale.heading;
         document.querySelector(`#description`).innerHTML=data.info.description;
         document.querySelector(`#press`).innerHTML=data.menuOptions[0];
         document.querySelector(`#HIRING`).innerHTML=data.menuOptions[1];
         document.querySelector(`#ENTERPRISE`).innerHTML=data.menuOptions[2];
         document.querySelector(`#PRIVACYs`).innerHTML=data.menuOptions[3];
         

         
         
         document.querySelector("#date").innerHTML = months[d.getMonth()];

         
        //  document.querySelector(`#press`).innerHTML=data.menuOptions.press;
         
     }
})

function urdu(){
$.ajax({
    url :`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,
     success:function(data){
         console.log("running");
         document.querySelector(`#img`).src=data.imageURL;
         document.querySelector(`#date`).src=date;
         document.querySelector(`#head`).innerHTML=data.info.heading;
         document.querySelector(`#heading`).innerHTML=data.sale.heading;
         document.querySelector(`#description`).innerHTML=data.info.description;
         document.querySelector(`#description-second`).innerHTML=data.sale.description;
        //  document.querySelector(`#press`).innerHTML=data.menuOptions.press;
         
     }
})
}



function english(){
$.ajax({
    url :`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en`,
     success:function(data){
         console.log("running");
         document.querySelector(`#img`).src=data.imageURL;
         document.querySelector(`#date`).src=date;
         document.querySelector(`#head`).innerHTML=data.info.heading;
         document.querySelector(`#heading`).innerHTML=data.sale.heading;
         document.querySelector(`#description`).innerHTML=data.info.description;
         document.querySelector(`#description-second`).innerHTML=data.sale.description;
        //  document.querySelector(`#press`).innerHTML=data.menuOptions.press;
         
     }
})
}


function zh(){
$.ajax({
    url :`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,
     success:function(data){
         console.log("running");
         document.querySelector(`#img`).src=data.imageURL;
         document.querySelector(`#date`).src=date;
         document.querySelector(`#head`).innerHTML=data.info.heading;
         document.querySelector(`#heading`).innerHTML=data.sale.heading;
         document.querySelector(`#description`).innerHTML=data.info.description;
         document.querySelector(`#description-second`).innerHTML=data.sale.description;
        //  document.querySelector(`#press`).innerHTML=data.menuOptions.press;
         
     }
})
}