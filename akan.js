function fn(){
    var d=new Date();
    var date=parseInt(document.getElementById("day").value);
    var month=parseInt(document.getElementById("month").value) -1;
    var year=parseInt(document.getElementById("year").value);

    if (date <0||date >31){
        document.getElementById("day").innerhetml="Enter valid date";
        return false;
    }
    else if(date==""){
        document.getElementById("day").innerHtml="This field cannot be empty";
        return false;
    }
    else{
        d.setDate(date);
    }
    if (month <0||month >12){
        document.getElementById("month").innerHtml="Enter Valid month";
        return false;
    }
    else if(month==""){
        document.getElementById("month").innerHtml="This field cannot be empty";
        return false;
    }
    else{
        d.setDate(month);
    }
    if (year <0){
        document.getElementById("year").innerHtml="Enter Valid month";
        return false;
    }
    else if(year==""){
        document.getElementById("year").innerHtml="This field cannot be empty";
        return false;
    }
    else{
        d.setDate(year);
    }
    
    var day=d.getDay();
    var days=[sunday,monday,teusday,wednesday,thursday,friday,saturday];
    var male=[Kwasi,Kwadwo,Kwabena,Kwaku,Yaw,Kofi,Kwame];
    var female=[Akoswa,Adwoa,Abenaa,Akua,Yaa,Afua,Ama];

    function getAkan(){
        var ismale=document.getElementById("male").checked;
        var isfemale=document.getElementById("female").checked;
        if (ismale==true&&isfemale==false){
            if(day==0){
                alert("Yourname is" male[0]);
            }
            else if(day==1){
                alert("Yourname is" male[1]);
            }
            else if(day==2){
                alert("Yourname is" male[2]);
            }
            else if(day==3){
                alert("Yourname is" male[3]);
            }
            else if(day==4){
                alert("Yourname is" male[4]);
            }
            else if(day==5){
                alert("Yourname is" male[5]);
            }
            else if(day==6){
                alert("Yourname is" male[6]);
            }
            else {
                alert("check if you entered the correct details");
            }
         else if(ismale==false&&isfemale==true){
                if(day==0){
                    alert("Yourname is" female[0]);
                }
                else if(day==1){
                    alert("Yourname is" female[1]);
                }
                else if(day==2){
                    alert("Yourname is" female[2]);
                }
                else if(day==3){
                    alert("Yourname is" female[3]);
                }
                else if(day==3){
                    alert("Yourname is" female[3]);
                }
                else if(day==4){
                    alert("Yourname is" male[4]);
                }
                else if(day==5){
                    alert("Yourname is" male[5]);
                }
                else if(day==6){
                    alert("Yourname is" male[6]);
                }
                else{
                    alert("Check if you entered the correct details");
                }


            }
        }
    }
    getAkan();

}