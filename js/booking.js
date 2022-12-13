function send(){
    var arr = document.getElementsByTagName('input');
    var opt = document.getElementsByTagName('option');
    console.log(opt);
    console.log(arr);
    var name = arr[0].value;
    var email = arr[1].value;
    var regExemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phone = arr[2].value;
    var regEx = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    var address = arr[3].value;
    var package = "";
    var service = "";
    var artist = "";
    var date = document.getElementById('myID').value;
    var hour = document.getElementById('hour').value;
    if(opt[1].selected){
        package = "Wedding Packages"
    } else if (opt[2].selected){
        package = "Family Packages"
    } else if (opt[3].selected){
        package = "Demo Packages"
    }
    if(opt[5].selected){
        service = "Bridal Make Up"
    } else if (opt[6].selected){
        service = "Groom Make Up"
    } else if (opt[7].selected){
        service = "Family Make Up"
    }
    else if (opt[8].selected){
        service = "Hair Styling"
    }else if (opt[9].selected){
        service = "Nails Design"
    }else if (opt[10].selected){
        service = "Children Make Up"
    }
    if(opt[12].selected){
        artist = "Artist 1"
    } else if (opt[13].selected){
        artist = "Artist 2"
    } else if (opt[14].selected){
        artist = "Artist 3"
    }
    else if (opt[15].selected){
        artist = "Artist 4"
    }
    if(name == "" || email == "" || phone == "" || address == ""){
        alert("Please fill all fields");
        return;
    }
    if(phone.match(regEx)) {}
    else {
        alert("Please enter a valid phone number.");
        return;
    };
    if(email.match(regExemail)) {}
    else {
        alert("Please enter a valid Email.");
        return;
    };
    var choice = confirm('Confirm Your Information\n'+'Name: '+name+'\n'+'Email: '+email+'\n'+'Phone Number: '+phone+'\n'+'Address: '+address+'\n'+'Packages: '+package+'\n'+'Service: '+service+'\n'+'Artist: '+artist+'\n'+'Date: '+hour+'  '+date+'\n');
    if(choice == 1){
        alert('Information Sent. We will contact you soon!')
    }
}
