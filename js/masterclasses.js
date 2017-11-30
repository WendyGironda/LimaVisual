var enlaces = document.querySelectorAll("a.media__link");
for(var i=0; i<enlaces.length; i++){
	enlaces[i].addEventListener("click", enviarDato);	
}
function enviarDato(event){
		//event.preventDefault();
		sessionStorage.setItem('dato', this.dataset.code);
		//alert(sessionStorage.getItem('dato')); 			
}