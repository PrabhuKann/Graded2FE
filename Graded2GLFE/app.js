function addData(){
  var username = document.getElementById('uname').value;
  var password = document.getElementById('pwd').value;

  localStorage.setItem('userUname', username);
  localStorage.setItem('userPwd', password);
}