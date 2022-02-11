var datas = {}
var les_matieres = []
var nb_datas = 0
var page_modele = document.getElementById('modele_page')
var page_courante;

document.addEventListener('click',trier_et_imprimer)
document.addEventListener("DOMContentLoaded", traiter_bulletins);
window.addEventListener('message',traiter_bulletins)

function afficher_chargement(oui){
	document.getElementById('img_chargement').style.display = oui ? "" : "none"
}

function traiter_bulletins(e){
	afficher_chargement(true)
	//console.log("j'ai été ouvert par",window.opener.location)

	//enlever toutes les anciennes pages
	document.querySelectorAll('.page:not(#modele_page)').forEach(e => e.remove())
	/*
	liste_datas_bulletin = {}
	liste_matieres_bulletin = []
	variables_bulletins_pretes = false
	*/

	if(window.opener){

		//récupérer ici les données poussées dans liste_datas_bulletin 
		liste_datas_bulletin = window.opener.liste_datas_bulletin

		//récupérer ici les données poussées dans liste_matieres_bulletin  
		liste_matieres_bulletin = window.opener.liste_matieres_bulletin

		//récupérer ici si variables_bulletins_pretes  
		variables_bulletins_pretes = window.opener.variables_bulletins_pretes
		console.log({variables_bulletins_pretes})


		//si les variables sont prêtes 
		if((variables_bulletins_pretes || (e && e.data === 'impression')) && liste_datas_bulletin.length === liste_matieres_bulletin.length){

			console.log({liste_datas_bulletin})
			console.log({liste_matieres_bulletin})

			for(index_eleve=0;index_eleve<liste_datas_bulletin.length;index_eleve++){
				datas = liste_datas_bulletin[index_eleve]
				les_matieres = liste_matieres_bulletin[index_eleve]

				console.log({datas})
				console.log({les_matieres})


				page_courante =  page_modele.cloneNode(true)
				page_courante.id = datas['identifiant_eleve']
				page_courante.style.display = ''

				remplir_bulletins(datas, les_matieres)		
			}


			titre_et_ordre_donnees()


		}

	}else{
		console.error("Les données de bulletins ne sont pas encore prêtes. Refaire traiter_bulletins() plus tard.")
	}

	//afficher_chargement(false)

}

function titre_et_ordre_donnees(){
	mettre_titre_document()
	trier_les_pages()

}

function trier_et_imprimer(){
	titre_et_ordre_donnees()
	window.document.close();
	window.print();	

}

function mettre_titre_document(){
	if(nb_datas === 1){
		document.title = "Bulletin de " + datas['nom'] + ' ' + datas['prenoms'] //todo: changer le titre si classe entier
	}else{
		document.title = "Bulletins de la classe de " + datas['classe']
	}
}

function trier_les_pages(){
	var mylist = document.getElementById('dossier');
	var divs = mylist.getElementsByClassName('page');
	var listitems = [];
	for (i = 0; i < divs.length; i++) {
	        listitems.push(divs.item(i));
	}
	listitems.sort(function(a, b) {
	    var compA = a.getAttribute('id').toUpperCase();
	    var compB = b.getAttribute('id').toUpperCase();
	    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
	});
	for (i = 0; i < listitems.length; i++) {
	    mylist.appendChild(listitems[i]);
	}
}

function afficher(selector){
	var nb_elements = document.querySelectorAll(selector).length
	for (numero_element = 0 ; numero_element < nb_elements ; numero_element++ ){
		document.querySelectorAll(selector)[numero_element].style.display = ''
	}
}


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
		mon_element = page_courante.querySelectorAll('[name="'+cle+'"]')[0] //page_courante.getElementsByName(cle)[0]

		if(mon_element){

			//si c'est une image : assigner la src
			if (mon_element.localName === 'img'){

				mon_element.src = datas[cle]
				console.log({mon_element})
				
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

	//rajouter les notes de leleve
	//console.log({page_courante})
	document.getElementById('dossier').append(page_courante)

	//masquer le modele
	//document.getElementById('modele_page').style.display = 'none'
	afficher_chargement(false)

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

	var source =  page_courante.querySelector('.liste_matieres > tbody')
	var nouveau_noeud =  document.createElement('tr')
	nouveau_noeud.innerHTML = html_ligne_moyennes
	source.append(nouveau_noeud)
}


function ajouter_une_matiere(les_matieres){

	var source =  page_courante.querySelector('.liste_matieres > tbody')
	var nouveau_noeud =  document.createElement('tr')
	var contenu_html = une_ligne_matiere(les_matieres)

	//console.log({contenu_html})
	nouveau_noeud.innerHTML = contenu_html



	source.append(nouveau_noeud)
}

