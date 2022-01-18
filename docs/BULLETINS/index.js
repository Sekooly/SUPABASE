var datas = {}
var les_matieres = []
window.addEventListener('message', function(e) {


	/*
	console.log({datas})
	console.log({les_matieres})
	document.title = "Bulletin de " + datas['nom'] + ' ' + datas['prenoms'] 
	remplir_bulletins(datas, les_matieres)
	*/

	//console.log("on a recu: ",e.data)

	if(e.data.datas && e.data.les_matieres){
		datas = e.data.datas
		les_matieres = e.data.les_matieres
	}else if(e.data === 'remplissage'){
		document.title = "Bulletin de " + datas['nom'] + ' ' + datas['prenoms'] 
		console.log({datas})
		console.log({les_matieres})
		remplir_bulletins(datas, les_matieres)		
	}else if(e.data === 'impression'){
		window.document.close();
		window.print();
	}

})



function une_ligne_matiere(data){
	var res = `<tr>
                <th class="gauche">
                    <strong class="nom_matiere">`+data['Matiere']+`</strong><br>
                    <span class="nom_prof">`+data['identifiant_appreciateur'] +`</span>
                </th>

                <th class="coef_matiere">
                    `+data['coef']+`
                </th>
                <th class="moy_eleve">
                    <strong>`+data['moy_eleve']+`</strong>
                </th>
                <th class="moy_ponderee_eleve">
                    `+data['moy_ponderee_eleve']+`
                </th>
                <th class="moy_min">
                    `+data['moy_min']+`
                </th>
                <th class="moy_max">
                    `+data['moy_max']+`
                </th>
                <th class="moy_classe">
                    `+data['moy_classe']+`
                </th>
                <th class="gauche contenu_appreciation">
                    `+data['contenu_appreciation']+`
                </th>
            </tr>`
	//console.log({res})
	return res;
}

function remplir_bulletins(datas,les_matieres){

	//console.log({datas})

	//données generiques
	Object.keys(datas).forEach(function(cle){
		//console.log(cle, datas[cle])

		//pour chaque clé, remplacer la donnée 
		mon_element = document.getElementById(cle)

		if(mon_element){

			//si c'est une image : assigner la src
			if (mon_element.localName === 'img'){

				mon_element.src = datas[cle]

				//imprimer la page dès que l'image est prete
				/*
		        mon_element.onload = function () {
            		window.document.close();
	    			window.print();

	    			//on n'imprime qu'une fois
	    			mon_element.onload = ""
		        };
		        */


			//si pas une image : assigner le text
			}else{

				mon_element.innerText = datas[cle]

			}


		}

	})

	for(index_matiere=0;index_matiere<les_matieres.length;index_matiere++){
		//13 matières par exemple
		ajouter_une_matiere(les_matieres[index_matiere])	
	}
	

	ajouter_ligne_moyennes(datas)


}

function ajouter_ligne_moyennes(datas){
	var html_ligne_moyennes = `
	<tr>
		<th style="border: none;"></th>
		<th class="droite"><strong>Moyenne générale</strong></th>


		<th id="moy_generale">
			<strong>`+datas['moy_generale']+`</strong>
		</th>

		<th>-</th>
		<th id="moy_min">`+datas['moy_min']+`</th>
		<th id="moy_max">`+datas['moy_max']+`</th>
		<th id="moy_classe">`+datas['moy_classe']+`</th>
		<th >Rang: <span id="rang_eleve">`+datas['rang_eleve']+`</span></th>
	</tr>


	`

	var source = document.querySelector('.liste_matieres > tbody')
	var nouveau_noeud = document.createElement('tr')
	nouveau_noeud.innerHTML = html_ligne_moyennes
	source.append(nouveau_noeud)
}


function ajouter_une_matiere(les_matieres){

	var source = document.querySelector('.liste_matieres > tbody')
	var nouveau_noeud = document.createElement('tr')
	var contenu_html = une_ligne_matiere(les_matieres)

	//console.log({contenu_html})
	nouveau_noeud.innerHTML = contenu_html



	source.append(nouveau_noeud)
}

