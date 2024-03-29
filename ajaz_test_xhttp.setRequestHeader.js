To POST data like an HTML Form,add an HTTP header with setRequestHeader().specify the data you want to send in the send() method:
xhttp.open("POST"),
"ajax_test.asp");
xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford";)