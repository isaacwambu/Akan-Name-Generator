
    function fn(){
        var d = new Date();
        var day = document.getElementById("day").value;
        var month = document.getElementById("month").value -1;
        var year = document.getElementById("year").value;

        
        if(year <= 0 || year > 2021){
            alert("enter correct year!");
        }
        else if(year ==" "){
            alert("enter correct values");
        }
        else{
            d.setYear(year);
        }
        

        if(month <= 0 || month > 12){
            alert("enter correct month!");
        }
        else if(month ==" "){
            alert("enter correct values");
        }
        else{
            d.setMonth(month);
        }



        if(day <= 0 || day > 31){
            alert("enter correct day!");
        }
        else if(day ==" "){
            alert("enter correct values");
        }
        else{
            d.setDate(day);
        }


        var dayy = d.getDay();
        var days = ["sunday", "monday", "teusday", "wednesday", "thursday", "friday", "saturday"];
        var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var female = ["Akoswa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


        function getAkan(){
            var ismale = document.getElementById("male").checked;
            var isfemale = document.getElementById("female").checked;

            if(ismale == true && isfemale == false){

                if(dayy == 0){
                    alert("Your Akan name is " +male[0]);
                }
                else if(dayy == 1){
                    alert("Your Akan name is " +male[1]);
                }
                else if(dayy == 2){
                    alert("Your Akan name is " +male[2]);
                }
                else if(dayy == 3){
                    alert("Your Akan name is " +male[3]);
                }
                else if(dayy == 4){
                    alert("Your Akan name is " +male[4]);
                }
                else if(dayy == 5){
                    alert("Your Akan name is " +male[5]);
                }
                else if(dayy == 6){
                    alert("Your Akan name is " +male[6]);
                }
                else{
                    alert("enter correct values");
                }

                
            }
            else if(ismale == false && isfemale == true){
                
                if(dayy == 0){
                    alert("Your Akan name is " +female[0]);
                }
                else if(dayy == 1){
                    alert("Your Akan name is " +female[1]);
                }
                else if(dayy == 2){
                    alert("Your Akan name is " +female[2]);
                }
                else if(dayy == 3){
                    alert("Your Akan name is " +female[3]);
                }
                else if(dayy == 4){
                    alert("Your Akan name is " +female[4]);
                }
                else if(dayy == 5){
                    alert("Your Akan name is " +female[5]);
                }
                else if(dayy == 6){
                    alert("Your Akan name is " +female[6]);
                }
                else{
                    alert("enter correct values");
                }

            }
            else{
                alert("enter correct values");
            }
        }
        getAkan();   
    }
           

                
       
       