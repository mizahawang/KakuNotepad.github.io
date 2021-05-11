/* Javascript function */

//to enable edit or changes on html body
function enableEditMode() {
    richTextField.document.designMode = "on";
}

//for button
function Edit(command) {
    richTextField.document.execCommand(command, false, null);
}
//for heading, font name, font size, font color and highlight color
function execVal(command, value) {
    richTextField.document.execCommand(command, false, value);
}

//for insertimage
function execCommandWithArg (command, arg) {
    richTextField.document.execCommand(command, false, arg);
}

/* Local Storage */

//save session to local storage
setInterval(function(){
    localStorage["text"] = richTextField.document.getElementsByTagName('body')[0].innerHTML;
    }, 1000);

//load last session
richTextField.document.getElementsByTagName('body')[0].innerHTML = localStorage["text"] ;


