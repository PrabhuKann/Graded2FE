function checkData() {
    var enterUname = document.getElementById('uname').value;
    var enterPwd = document.getElementById('pwd').value;

    var getUname = localStorage.getItem('userUname');
    var getPwd = localStorage.getItem('userPwd');
    if (enterUname == getUname) 
    {
        if (enterPwd == getPwd) 
        {
            alert("Login Successful");
        }
        else 
        {
            alert("wrong password");
        }
    }
    else {
        alert("invalid details");
    }
}