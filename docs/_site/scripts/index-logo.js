$(window).on('load',function() {

	if(portrait("logo_etablissement")){
		$("#logo_etablissement").addClass("logo_portrait")
	}else{
		$("#logo_etablissement").removeClass("logo_portrait")
	}

	function portrait(element_name){

		w =  element_DOM(element_name).naturalWidth
		h =  element_DOM(element_name).naturalHeight
		/*
		console.log({
			w: w,
			h: h
		})
		*/
		res = (w <= h)
		//console.log(res)
		return res

	}

	appliquer_couleurs()


})