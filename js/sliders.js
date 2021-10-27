(function(){

	const sliders=[...document.querySelectorAll('.slider_body')];
	//console.log(sliders);
	const arrowNext = document.querySelector('#after');
	const arrowBefore = document.querySelector('#before');
	let value;
	arrowNext.addEventListener('click',()=>changePosition(1));

	arrowBefore.addEventListener('click',()=>changePosition(-1));


	function changePosition(change){
		//console.log(change);
		const currentElemento = Number(document.querySelector('.slider_body_show').dataset.id);

		value = currentElemento;
		value+=change;
		//console.log(value); 
		//console.log(sliders.length); 
		if (value===0  || value==sliders.length+1) {
			value = value===0 ? sliders.length : 1;
		}

		sliders[currentElemento-1].classList.toggle('slider_body_show');
		sliders[value-1].classList.toggle('slider_body_show');
		
	}

	if (window.screen.width < 768){
    	console.log("se reducio el tamaño");
  	}else{
    
  	}
   /* const cambio = document.querySelector('.personas2');
    cambio.setAttribute('data-id','2');
    cambio.classList.toggle('slider_body');*/


})()