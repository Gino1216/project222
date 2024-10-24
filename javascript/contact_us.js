function CheckFirstName() {
    var regName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    var el = document.getElementById('feedback1');
    var elname = document.getElementById('firstname').value;
    if(!elname.length > 0){
        el.textContent = 'Unable to empty, please enter back.';
    } 
    else { 
        
        if(!regName.test(elname)) {
            el.textContent = 'Invalid character,please re-enter.';
        }
        else 
             el.textContent = ''
        
    }
}

function CheckLastName() {
    var regName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    var el = document.getElementById('feedback2');
    var elname1 = document.getElementById('lastname').value;
    if(!elname1.length > 0){
        el.textContent = 'Unable to empty, please enter back.';
    } 
    else { 
        
        if(!regName.test(elname1)) {
            el.textContent = 'Invalid character,please re-enter.';
        }
        else 
             el.textContent = ''
        
    }
}

function  Checkemail() {
    var email = document.getElementById('email').value;
    var el = document.getElementById('feedback3');
    var mailformat = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    if (!email.length > 0){
        el.textContent = 'Unable to empty, please enter back.';
    } else {
        if (!mailformat.test(email)) {
        el.textContent = 'Invalid email, please re-enter.';
       
        }else
        el.textContent = '';
    }
}



function Checkphone() {
    var phone = document.getElementById('phone').value;
    var el = document.getElementById('feedback4');
    var telformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phone.length < 10) {
        el.textContent = 'Invalid character length, please re-enter.';
    
    }
    else {
        if(!telformat.test(phone)) {
            el.textContent = 'Invalid character, please re-enter.';
        }
        else
        el.textContent = '';
    }
}

function CheckMessage() {
    var el = document.getElementById('feedback5');
    var message = document.getElementById('message').value;
    if(message.length <= 0) {
        el.textContent = 'Please re-enter.';
    }
    else
        el.textContent = ''
}




function checksend() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (firstname === "" || lastname === "" || email === "" || phone === "" || message === "") {
        alert("Please enter enough information.");
        return;
    }

    // Dữ liệu cần gửi
    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message
    };

    // Gửi thông tin lên JSON server
    fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Kiểm tra nếu trạng thái HTTP thành công (200-299)
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        alert("Message sent successfully!");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error sending message");
        });
    }



