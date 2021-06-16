function appliquer_couleurs(){
	if(data_etablissement['preferences']['couleurs']){
		console.log(data_etablissement['preferences']['couleurs'])
		//$("#style-sekooly").remove()
		element_DOM("custom-css").innerText = JSON.stringify(data_etablissement.preferences.couleurs).replaceAll('"','').replaceAll(':{','{')
	}
}

appliquer_couleurs()