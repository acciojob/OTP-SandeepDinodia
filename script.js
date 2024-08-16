function onCodeInput(index){
	if(index < 5){
document.getElementsByClassName('code')[index+1].focus();
	}
}
function onBackspace(index,event){
	if(event.keyCode ===8 && index > 0){
document.getElementsByClassName('code')[index-1].focus();
	}
}
window.onload = function() {
    document.getElementsByClassName('code')[0].focus();
}