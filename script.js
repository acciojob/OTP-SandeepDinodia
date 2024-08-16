function onCodeInput(index){
	if(index < 6){
document.getElementsByClassName('code')[index].focus();
	}
}
function onBackspace(index,event){
	if(event.keyCode ===8 && index > 1){
document.getElementsByClassName('code')[index-2].focus();
	}
}