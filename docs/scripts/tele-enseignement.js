var elements_menu_haut = ["Cycles", "Classes", "Matieres", "Eleves","Profs", "Administration", "Maintenance", "Alerte", "Logs", "Visio", "Notifs", "Fichiers", "Rendus", "Topic", "Coms","Espace etablissement restant","Analyses des connexions"]
var parametres_automatiques = ["Classe_bis","Classe_Matiere", "ID_URL","URL","URL_Mapping","URL_agenda",
								"id_googlecalendar","nb_avis_donnés", "nb_avis_max","nom_fiche","taux_conseil",
								"Matiere_bis", "classe_id", "classe_bis", "type", "Derniere_consultation_notifs",
								"id_formulaire_remediation", "id_fiche", "URL_Mapping","niveau",
								"classe_bis", "id_dossier_cycle", "dossier_rendus_cycle", "liste_notifs_lues",
								"id", "Id_classe_matiere", "id_notif", "Id_source", "id_fichier", "id_dossier", "id_devoir", "id_dossier_sujetdevoir", "id_fichier_sujetdevoir", "Id_topic", "id_com", "ID_FICHIER"
								]

var elements_menu_haut_avec_modifs = ["Classes","Matieres","Eleves","Profs","Administration"]
var elements_menu_haut_avec_reset = ["Eleves","Profs","Administration"]
nom_etablissement = data_etablissement['nom_etablissement']


var champs_avec_listes_dynamiques = ['Classe','classe_bis','Classe_principale','Cycle','cycle','Matiere','Matiere_bis']
var champs_oui_ou_non = ['Est_délégué','code_hash','Reponse_sondage','Ecolage_OK','Droits_modifs', 'Droit_acces_anticipe_examen','Droit_changer_ecolage','commun_au_cycle','droit_hors_maintenance','Est_délégué']
var liste_couleurs = ['blanc','bleu ciel', 'bleu foncé', 'gris','jaune','marron','noir','orange','rose','rouge','vert clair','vert foncé', 'violet']


	
var numero_etape = recuperer("numero_etape") ? Number(recuperer("numero_etape")) : 0
var nb_etapes = 8
var nouveau_prof = []


var image_temporaire = ""
var nom_image_temporaire = ""


var mes_devoirs_a_faire = []
var mes_devoirs_rendus = []
var tous_les_eleves_de_mon_cycle = []

var mes_discussions = []
var mes_coms = []
var mes_visios = []

var mes_fichiers = []


var liste_notifs_lues = ""

/*********************** CONSEIL DE CLASSE ***********************************/
function afficher_conseil_de_classe(oui){

	if(oui){

		element_DOM('conseil_de_classes').style.display = ''; 

	}else{

		charger_classe_conseil(false);
		element_DOM('conseil_de_classes').style.display = 'none';

	}

}

function charger_classe_conseil(oui){

	if (impossible_de_cliquer()) return -1;

	if(oui){

		//la classe actuellement ouverte OU celle de l'élève
		var classe = element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim();
		var mon_type = recuperer('mon_type');
		
		if(mon_type.includes("Eleves")){
			var classe = JSON.parse(recuperer('mes_donnees'))['Classe']
			var je_suis_delegue = JSON.parse(recuperer('mes_donnees'))['Est_délégué'] ?
									JSON.parse(recuperer('mes_donnees'))['Est_délégué'] === "oui"
									: false;

			var maintenant = moment().format('yyyy-MM-DD');
			if(maintenant === "2020-07-31") je_suis_delegue = true;

			//console.log("je_suis_delegue: " + je_suis_delegue);
		}

		if(classe){
			if(mon_type.includes("Admin") || mon_type.includes("Prof") || (mon_type.includes("Eleves") && je_suis_delegue)){
				
				recuperer_la_fiche_conseil(classe);
			
			//élève non délégué
			}else{
				recuperer_MA_fiche_conseil();
			}
		}

	}else{
		quitter_previsualisation();


	}

}



function recuperer_la_fiche_conseil(classe){
	var titre = "Conseil de classe - " + classe;
	vider_fenetre(titre);
	afficher_fenetre(true);
	chargement(true);
	var url = "https://script.google.com/macros/s/AKfycbw4QT4HwGTQR_rgw_ucwjBmUIaeuT_lf3ufHDWu1nQmEHOpIseM/exec?classe="+classe;

	$.ajax({
	    url: url,
	    type: "POST",
		success: function (data) {
			chargement(false);
			//console.log(data);
			afficher_fenetre_conseil_de_classe(data['resultats'],titre);

	    },
	    error: function(data){
	    	chargement(false);
			//console.log(data);
			alert('Vérifiez que vous êtes toujours connecté à internet.');
			
	    }
	});

}

function afficher_fenetre_conseil_de_classe(data,titre){
	//data[0]: [id fiche, nom fiche]
	afficher_visualisation_fiche(data[0],titre);

	//data[1]: [eleve1, eleve2, eleve3, ...]
	lister_les_eleves(data[1]);


}

function afficher_visualisation_fiche(id_et_nom_fiche,titre){
	//console.log(id_et_nom_fiche);

	if(id_et_nom_fiche){
		visualiser(id_et_nom_fiche[1],id_et_nom_fiche[0], "", titre, recuperer('mon_type').includes('Eleves')); //pas téléchargeable pour les eleves
		$("#previsualisation")[0].style.height = "50%"


	}

}

function lister_les_eleves(liste_eleves){
	var liste_eleves_html = '<div id="liste_eleves" class="liste_eleves_conseil"></div>'
	$("#liste_eleves").remove();
	$("#fenetre").append(liste_eleves_html);
	$("#liste_eleves")[0].scrollTo(0,0);

	//pour chaque élève, dans $("#liste_eleves")
	liste_eleves.forEach(function(valeur,index){

		var identifiant_eleve = valeur['Identifiant'].toUpperCase();

		//on ajoute l'identifiant 
		$("#liste_eleves").append('<b style="color: #FF6C00;margin-bottom: 5px;" id="'+identifiant_eleve+'">' + identifiant_eleve + " </b>")

		var identifiant_eleve_bloc = element_DOM(identifiant_eleve);

		//on ajoute le bouton OEIL de l'élève -> détails via tableau software
		var oeil_tableau_html = '<span><img id="mini-image" alt="voir" class="envoi_remarque" src="https://sekooly.github.io/SUPABASE/images/img_previz.png" onclick="recuperer_details_plateforme(\''+identifiant_eleve+'\')"></span>';
		var oeil_tableau = document.createElement('div');
		oeil_tableau.innerHTML = oeil_tableau_html;
		while(oeil_tableau.firstChild) identifiant_eleve_bloc.appendChild(oeil_tableau.firstChild);

		//SI NON ELEVE
		//on ajoute le mode edition -> popup contenant:
		//avis favorable ou non (liste déroulante): pas encore d'avis // favorable // non favorable
		//observations sur l'élève -> ajout ou modif ou suppression
		var mon_type = recuperer('mon_type');
		if(mon_type!=="Eleves"){
			var mode_edition_html = '<span><img id="mini-image" alt="remarque" class="envoi_remarque" src="https://sekooly.github.io/SUPABASE/images/img_remarque.png" onclick="emettre_avis(\''+identifiant_eleve+'\')"></span>';
			var mode_edition = document.createElement('div');
			mode_edition.innerHTML = mode_edition_html;
			while(mode_edition.firstChild) identifiant_eleve_bloc.appendChild(mode_edition.firstChild);
		}
		
		//on ajoute le bouton détails de l'élève -> visualiser tous les avis sur l'élève SI ILS EXISTENT
		if (valeur['nombre_avis']>0){
			var details_html = '<span><img id="mini-image" alt="autres avis" class="envoi_remarque" src="https://sekooly.github.io/SUPABASE/images/img_details.png" onclick="recuperer_autres_avis(\''+identifiant_eleve+'\')"></span>';
			var details = document.createElement('div');
			details.innerHTML = details_html;
			while(details.firstChild) identifiant_eleve_bloc.appendChild(details.firstChild);
		}

	})
		
}

function recuperer_details_plateforme(identifiant_eleve){
	//dupliquer la fenetre de visualisation
	dupliquer_visualisation(identifiant_eleve);
	//visualiser dans cette nouvelle fenetre
	ajouter_bilan_a_la_fenetre();
	actualiser_bilan(identifiant_eleve);


}

function dupliquer_visualisation(identifiant_eleve){
	var fenetre_bis_html = '<div class="ma_fenetre" id="fenetre_bis" style="visibility: visible; opacity:95%; top: 0px; left: 0px; width: 99%; height: 99%;"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="https://sekooly.github.io/SUPABASE/images/quitter.png" id="bye_prev_bis" onclick="quitter_previsualisation_bis()" style="width: 30px; height: 30px; cursor: pointer; position: fixed; z-index: 3; top: 0px; left: 673px;"></div><div class="titre_fenetre" id="titre_fenetre_bis">Détails sur ' + identifiant_eleve + '</div><div style="position: fixed; z-index: 5; top: 616px; left: 653px;" id="conteneur_plein_ecran_bis"> <img alt="plein écran" style="position: fixed;" id="pleinecran_bis" src="https://sekooly.github.io/SUPABASE/images/img_petitecran.png" onclick="switch_mode_bis()" class="pleinecran"> </div></div>';

		//on rajoute tout
		var fenetre_bis = document.createElement('div');
		fenetre_bis.innerHTML = fenetre_bis_html

	while(fenetre_bis.firstChild) {
	    document.body.appendChild(fenetre_bis.firstChild);
	}


	//on ajuste tous les boutons MODE BIS
	ajuster_boutons_fenetre(true);
	initialisation_bouton(true);
	choisir_height_viz_si_pdf();


}

function ajouter_bilan_a_la_fenetre(){

	$("#viz1595565163988").remove();

	var tableau_html = "<div class='tableauPlaceholder previz'  id='viz1595565163988' style='position: relative;'>    <noscript>        <a href='#'>            <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;H4&#47;H4GNP92BT&#47;1_rss.png' style='border: none' />        </a>    </noscript>    <object class='tableauViz'  style='display:none;'>        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />        <param name='embed_code_version' value='3' />         <param name='site_root' value='' />        <param name='name' value='Bilanplateforme&#47lve' />        <param name='tabs' value='yes' />        <param name='toolbar' value='yes' />=        <param name='animate_transition' value='yes' />        <param name='display_static_image' value='no' />        <param name='display_spinner' value='yes' />        <param name='display_overlay' value='yes' />        <param name='display_count' value='yes' />        <param name='language' value='fr' />        <param id='filtre_identifiant' name='filter'/>    </object></div>   "

	var tableau = document.createElement('div');
	tableau.innerHTML = tableau_html;
	var la_fenetre = element_DOM("fenetre_bis");

	la_fenetre.appendChild(tableau.firstChild);


}

function actualiser_bilan(identifiant_eleve){

    var divElement = element_DOM('viz1595565163988');
    //console.log(divElement);
    var vizElement = divElement.getElementsByTagName('object')[0];
    element_DOM('filtre_identifiant').value = "Identifiant=" + identifiant_eleve;
    vizElement.style.width='100%';
    vizElement.style.height='100%';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    $("#fenetre_bis")[0].style.display = '';

}





function emettre_avis(identifiant_eleve){
	console.log("emettre_avis: " + identifiant_eleve);

	var pop_up_html  = '<div id="mini_popup"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X"  src="https://sekooly.github.io/SUPABASE/images/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div><div>Vos observations sur <b>'+identifiant_eleve+'</b>:</div><textarea id="observation" style="width: 80%;resize: none;font-size: 13px;margin-bottom: 5%;"></textarea><div style="">Passage de <b>'+identifiant_eleve+'</b> en classe supérieure:</div><select style="width: 80%;border-color: red;border-style: solid;margin-bottom: 5%;" id="avis_passage" value=""><option value=""></option><option value="Favorable">Favorable</option><option value="Non favorable">Non favorable</option></select><button type="button" class="rendre" onclick="envoyer_avis_conseil(\''+identifiant_eleve+'\')">Envoyer l\'avis</button></div>';

	var pop_up = document.createElement('div');
	pop_up.innerHTML = pop_up_html;
	while(pop_up.firstChild) document.body.appendChild(pop_up.firstChild);

	$("#avis_passage").on("change", function(e){
	    if(e.target.value==="Favorable"){
	        $("#avis_passage")[0].style.borderColor = "green";
	  }else{
	        $("#avis_passage")[0].style.borderColor = "red";
	    }
	})


}

function envoyer_avis_conseil(identifiant_eleve){


	var avis_passage = $("#avis_passage")[0].value;
	var observation = $("#observation")[0].value;

	if(avis_passage==="") return -1;


	console.log("Observation: " + avis_passage);
	console.log("avis_passage: " + observation);

	var matieres = JSON.parse(recuperer('mes_matieres'));

	//la classe actuellement ouverte OU celle de l'élève
	var classe = element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim();
	var mon_type = recuperer('mon_type');				
	if(mon_type.includes("Eleves"))
		var classe = JSON.parse(recuperer('mes_donnees'))['Classe'];

	var id_classe_eleve = "";
	matieres.some(function(valeur,index){				  
	    if(valeur['Classe'] === classe){
	        id_classe_eleve = valeur['classe_id']
	        return -1;
	    }
	});

	var identifiant_courant = recuperer('identifiant_courant').toLowerCase().trim();
	identifiant_eleve = identifiant_eleve.toLowerCase().trim();

	var url = "https://script.google.com/macros/s/AKfycbw4QT4HwGTQR_rgw_ucwjBmUIaeuT_lf3ufHDWu1nQmEHOpIseM/exec?classe="+classe+"&id_classe_eleve="+id_classe_eleve+"&avis_passage="+avis_passage+"&identifiant_remarque="+identifiant_courant+"&identifiant_eleve="+identifiant_eleve+"&observation="+observation;


	chargement(true);
	//console.log(url);

	$.ajax({
	    url: url,
	    type: "POST",
		success: function (data) {
			recuperer_la_fiche_conseil(classe);
			chargement(false);
			$('#mini_popup').remove();
			
			var msg_alerte = element_DOM("snackbar");
			// on affiche l'alerte
			msg_alerte.innerText = data;
			msg_alerte.className = "show";
			//dans 3 secondes, on masque l'alerte
			setTimeout(function(){
				msg_alerte.className = "";
			}, 3000);


	    },
	    error: function(data){
	    	chargement(false);
			//console.log(data);
			alert('Vérifiez que vous êtes toujours connecté à internet.');
			
	    }
	});
}


function recuperer_autres_avis(identifiant_eleve){
	//console.log("recuperer_autres_avis: " + identifiant_eleve);
	chargement(true);
	var url = "https://script.google.com/macros/s/AKfycbw4QT4HwGTQR_rgw_ucwjBmUIaeuT_lf3ufHDWu1nQmEHOpIseM/exec?identifiant_eleve="+identifiant_eleve.toLowerCase()+"&toutes_les_remarques=oui";

	$.ajax({
	    url: url,
	    type: "POST",
		success: function (data) {
			chargement(false);
			//console.log(data);
			afficher_toutes_les_observations(data['resultats'],identifiant_eleve);

	    },
	    error: function(data){
	    	chargement(false);
			//console.log(data);
			alert('Vérifiez que vous êtes toujours connecté à internet.');
			
	    }
	});

}

function afficher_toutes_les_observations(les_observations,identifiant_eleve){

	$("#ensemble_observations").remove();
	var ensemble_observations_html = "<div id='ensemble_observations'></div>";
	var ensemble_observations = document.createElement('div');
	ensemble_observations.innerHTML = ensemble_observations_html;
	element_DOM(identifiant_eleve).appendChild(ensemble_observations.firstChild);

	//console.log(les_observations)

	//dans l'ordre chronologique DECROISSANT
	les_observations = les_observations.sort(function tri_ordre_chrono_croissant(a, b) {
		return new Date(a.horodateur).getTime() - new Date(b.horodateur).getTime();
	});

	les_observations.forEach(function(valeur,index){
		var signe_avis_passage = valeur["avis_passage"] === "Favorable" ? "✅" : "❌"
		var vient_de_moi = valeur['identifiant_remarque'].toUpperCase() === recuperer('identifiant_courant').toUpperCase() ? " (Vous)"
							: valeur['matiere'] ? " ("+valeur['matiere']+")" : "" ;
		une_observation= '<div style="color:black;font-size:10px;padding:5px;">'+signe_avis_passage +'<b style="color:#FF6C00;">'+valeur['identifiant_remarque'].toUpperCase()+ vient_de_moi+': </b>'+valeur['observation']+'<i style="color: #bfbfbf;"> ' + afficher_date(valeur['horodateur']) + '  </i></div>';	
		$("#ensemble_observations").append(une_observation);
	})
	
}




function recuperer_MA_fiche_conseil(){

	//console.log("je récupère ma fiche");
	var identifiant_eleve = recuperer('identifiant_courant').trim().toUpperCase();


	//créer une mini fenêtre de l'identifiant
	element_DOM('fenetre').style.overflowY = "auto";
	vider_fenetre("Vos résultats");
	$("#fenetre").append('<div style="text-align:center;margin-top: 20px;margin-left: 20px;"><b style="color: #FF6C00;margin-bottom: 5px;" id="'+identifiant_eleve+'">' + identifiant_eleve + " </b></div>")

	//oeil -> tableau
	var identifiant_eleve_bloc = element_DOM(identifiant_eleve);
	var oeil_tableau_html = '<span><img alt="voir"  id="mini-image" class="envoi_remarque" src="https://sekooly.github.io/SUPABASE/images/img_previz.png" onclick="recuperer_details_plateforme(\''+identifiant_eleve+'\')"></span>';
	var oeil_tableau = document.createElement('div');
	oeil_tableau.innerHTML = oeil_tableau_html;
	while(oeil_tableau.firstChild) identifiant_eleve_bloc.appendChild(oeil_tableau.firstChild);


	//toutes les remarques dans l'ordre chronologique
	recuperer_autres_avis(identifiant_eleve);
	afficher_fenetre(true);

	
}



















/****************************** DEVOIRS **********************************/

function aide_devoirs(){
	alerte = "CONSIGNES POUR METTRE EN LIGNE UN DEVOIR: \n"
	alerte = alerte + '• Vous pouvez rendre uniquement un devoir lorsque le professeur a catégorisé un fichier de "Devoir" ou "Examen".\n'
	alerte = alerte + '• Pour rendre un devoir, choisissez le sujet que le professeur aura mis en ligne.\n'
 	alerte = alerte + "• Pour un même devoir, si vous avez plusieurs images, convertissez l'ensemble en pdf (via ce lien par exemple : https://jpg2pdf.com/fr/)\n"
 	alerte = alerte + "• Vérifiez bien l'ordre des images car cela sera pris en compte dans le fichier pdf généré. Vous pourrez ensuite mettre en ligne le seul fichier pdf.\n"
 	alerte = alerte + "• Si vous êtes sur ordinateur, vous pouvez également créer un fichier word et y coller toutes vos images. Les fichiers word (doc / docx) sont également supportés par SEKOOLY."
 
 	alert(alerte)
 
}	

function afficher_tous_les_fichiers_deja_recup(){

	$("#alerte_vide").remove();
	afficher_le_drive(true);


	Array.from($(".span_un_fichier")).forEach(function(valeur, index, array) {
		element_DOM(valeur.id).style.display="grid";
	});


	Array.from(document.getElementsByClassName("ma_liste")).forEach(function(valeur, index, array) {
		element_DOM(valeur.id).style.display="grid";
	});


	Array.from($(".titre_drive")).forEach(function(valeur, index, array) {
		element_DOM(valeur.id).style.display="initial";
	});


	return 0;

}


function afficher_fenetre_rendudevoir(oui){

	if(oui){
		element_DOM('rendu_devoir').style.visibility = "visible";
		initialisation_choix_devoir();
	}else{
		element_DOM('rendu_devoir').style.visibility = "hidden";
	} 

}

function initialisation_choix_devoir(){

	//pas de devoir chargé
	supprimer_div_devoir_choisi();

	//on supprime toute liste antérieure
	supprimer_rendus_devoirs_affiches();

	//pas d'upload possible
	element_DOM('soumettre_devoir').style.display = 'none';

	//pas de remarque de prof
	$("#remarque_prof").remove();
	$("#note_rendu").remove();

	les_devoirs = element_DOM('drive_devoirs').childNodes;
	les_examens = element_DOM('drive_examens').childNodes;
	la_liste_devoirs = element_DOM("devoir_choisi");
	//console.log(les_devoirs);


	//rien au debut
	la_liste_devoirs.innerHTML = '<option value="--">--</option>';
	element_DOM('devoir_choisi').style.borderColor = "";


	for (var i = 0; i < les_devoirs.length; i++) {
		var id_devoir = les_devoirs[i]['id'];
		//console.log("\n"+ id_devoir);

		var nom_fichier = $("span#"+id_devoir+".span_un_fichier").contents().filter(function(){ 
		  return this.nodeType == 3; 
		})[0].nodeValue;

		var un_devoir_html = '<option value="' + id_devoir + '">' + nom_fichier  + '</option>' 
		var un_devoir = document.createElement('div');
		un_devoir.innerHTML = un_devoir_html;
		la_liste_devoirs.appendChild(un_devoir.firstChild);
	}

	//inclure les examens dans la liste 
	for (var i = 0; i < les_examens.length; i++) {
		var id_examen = les_examens[i]['id'];
		//console.log("\n"+ id_examen);

		var nom_fichier = $("span#"+id_examen+".span_un_fichier").contents().filter(function(){ 
		  return this.nodeType == 3; 
		})[0].nodeValue;

		var un_examen_html = '<option value="' + id_examen + '" examen="oui">' + nom_fichier  + '</option>' 
		var un_examen = document.createElement('div');
		un_examen.innerHTML = un_examen_html;
		la_liste_devoirs.appendChild(un_examen.firstChild);
	}





	//montrer le fichier déjà uploaded au choix du devoir à rendre
	$("#devoir_choisi").on('change', function(e){

		supprimer_div_devoir_choisi();
		supprimer_rendus_devoirs_affiches();
		afficher_soumettre_devoir(false);
		changer_couleur_devoir("");
		$("#remarque_prof").remove();
		$("#note_rendu").remove();

		//pour les eleves
		if(recuperer('mon_type') === "Eleves"){
			

			if(e.target.value !== "--"){

				var est_examen = e.target.options[e.target.selectedIndex].getAttribute('examen')
				
				var date_debut = $('[id='+e.target.value+"].span_un_fichier")[0].attributes['ma_date_effet'].value

				//fin = début + 48h
				var date_fin = moment(date_debut + " 23:59","yyyy-MM-DD hh:mm").add(2,'days')._d;

				var examen_terminé = est_examen && (new Date(moment()) > date_fin)

				//console.log("examen_terminé: " + examen_terminé);

				//si examen:
				//SI ET SEULEMENT SI L'EXAMEN EST OUVRABLE et NON TERMINE
				//alerte: trop tôt pour rendre
				if(est_examen==="oui" && fichier_ouvrable(e.target.value,false)===false && examen_terminé===false){

					//alert(date_debut)
					alert("Vous ne pouvez pas encore rendre cet examen dont la date d'effet est le " + afficher_date_old(date_debut,true));
					e.target.value = "--";

				//devoirs classique
				}else{								
					recuperer_mon_devoir(e.target.value,recuperer('identifiant_courant'),examen_terminé,date_fin);
				}

				//si examen: "Rendre le devoir" devient "Rendre l'examen"
				$("#bouton_rendre_devoir")[0].innerText = est_examen==="oui"? "Rendre l'examen" : "Rendre le devoir";
				
			}

		//pour les admins et profs
		}else{
			if(e.target.value !== "--"){
				recuperer_mon_devoir(e.target.value,"");

			}
				
		}

	});




}


function recuperer_mon_devoir(id_fichier_sujetdevoir,proprietaire,examen_terminé,date_fin){




	chargement(true);
	

	supprimer_div_devoir_choisi();
	supprimer_rendus_devoirs_affiches();
	afficher_soumettre_devoir(false);
	changer_couleur_devoir("");
	$("#remarque_prof").remove();
	$("#note_rendu").remove();
	


	if(recuperer('mon_type') === "Eleves"){
		element_DOM('rendu_devoir').style.height='';

		rechercher("Rendus",'id_devoir',id_fichier_sujetdevoir+suite_notif(),"").then(snapshot => { 
			chargement(false)

			donnees_initiales = snapshot[0]
			//console.log(donnees_initiales)

			//si on a changé de devoir choisi entre temps -> on ne fait rien
			if($('#devoir_choisi')[0].value !== id_fichier_sujetdevoir) return -1;


			//deja rendu
			if(donnees_initiales!==undefined){

				data = donnees_initiales['nom_fichier']

				remarque = donnees_initiales['remarque']

				id_fichier = donnees_initiales['id_fichier']

				//rendre le border vert
				changer_couleur_devoir("green");

				//cacher le input upload
				afficher_soumettre_devoir(false);

				//rendu à afficher car il existe
				supprimer_div_devoir_choisi();
				supprimer_rendus_devoirs_affiches();
				var mon_devoir_rendu = document.createElement('div');

				//la visualisation de mon devoir
				var titre = rfc3986EncodeURIComponent(data);

				//on ne peut plus supprimer si examen terminé
				var suppression_devoir = examen_terminé ? "" : '<img alt="supprimer"  id="'+ data +'" src="https://sekooly.github.io/SUPABASE/images/img_trash.png" style="width:15px;height:15px;cursor:pointer;" onclick="supprimer_devoir(this)">'
				mon_devoir_rendu.innerHTML += '<div id="mon_devoir_rendu"> <div id="'+id_fichier+'">'+ data + '<img id="mini-image" onclick="visualiser(\''+titre+'\',\''+id_fichier+'\')" src="https://sekooly.github.io/SUPABASE/images/img_previz.png" style="padding-left:1%">'+ suppression_devoir+'</div></div>';
				
				//afficher le devoir
				element_DOM('rendu_devoir').appendChild(mon_devoir_rendu.firstChild);



				//récupérer la note si coef > 0
				note_rendu = donnees_initiales['note_rendu']
				console.log(note_rendu)
				if(note_rendu !== null){

					$("#note_rendu").remove();
					remarque = decodeURIComponent(remarque)

					var remarque_innerHTML ='<div id="note_rendu" style="text-align: justify;padding: 2%;"><b style="color: #cc3a22;">Note attribuée:</b><br>'+note_rendu+'</div>';
					var remarque_div = document.createElement('div');
					remarque_div.innerHTML = remarque_innerHTML;
					element_DOM('rendu_devoir').appendChild(remarque_div.firstChild);

				}

				//récupérer la remarque du prof
				if(remarque.length>0){

					$("#remarque_prof").remove();
					
					
					remarque = decodeURIComponent(remarque)

					var remarque_innerHTML ='<div id="remarque_prof" style="text-align: justify;padding: 2%;"><b style="color: #cc3a22;">Remarque du professeur:</b><br>'+remarque+'</div>';
					var remarque_div = document.createElement('div');
					remarque_div.innerHTML = remarque_innerHTML;
					element_DOM('rendu_devoir').appendChild(remarque_div.firstChild);

				}



			//pas encore rendu
			}else{

				if(examen_terminé){
					alert("Rendre cet examen n'est plus possible depuis le " + afficher_date(date_fin,false) +".");

				}else{

					//rendre le border rouge
					changer_couleur_devoir("red");

					//enlever le devoir rendu précédent
					supprimer_div_devoir_choisi();
					supprimer_rendus_devoirs_affiches();

					//afficher le input upload
					element_DOM('soumettre_devoir').style.display ="";
				}
			}

		}).catch(error => {
			console.error(error)
			alert("Sujet de devoir introuvable.")
			chargement(false)
		})


	//profs ou admin
	}else{


		rechercher("Rendus",'id_fichier_sujetdevoir',id_fichier_sujetdevoir,"").then(snapshot => {
			chargement(false)

			//console.log(snapshot)
			afficher_rendus_devoirs(snapshot);
		})

	}


	$('#recuperer_devoir').remove(); // on enlève le form invisible : TRES UTILE

}


function afficher_rendus_devoirs(resultats){


	

	if(!element_DOM('liste_des_devoirs_rendus')){				
		var liste_des_devoirs_rendus = document.createElement('div');
		liste_des_devoirs_rendus.id = "liste_des_devoirs_rendus";
		element_DOM('rendu_devoir').appendChild(liste_des_devoirs_rendus);
	}else{
		var liste_des_devoirs_rendus = element_DOM('liste_des_devoirs_rendus');
	}

	
	if (resultats.length === 0) element_DOM('rendu_devoir').style.height='auto';


	if (resultats.length === 0) return liste_des_devoirs_rendus.innerHTML = '<i style="color: #bfbfbf;">Pas encore de rendus pour ce devoir/examen.</i>';

	//dans l'ordre chronologique CROISSANT
	resultats.sort(function tri_ordre_chrono_decroissant(a, b) {
		return new Date(a[0]).getTime() - new Date(b[0]).getTime();
	});


	liste_des_devoirs_rendus.innerHTML = '';
	//console.log(resultats.length)


	for (var i = 0; i < resultats.length; i++) {
		//console.log(resultats[i][4] + " par " + resultats[i][5]);
		
		var un_devoir_rendu = document.createElement('div');
		un_devoir_rendu.id = resultats[i]["id_fichier"];
		un_devoir_rendu.style = 'padding: 0.5%;';
		un_devoir_rendu.innerHTML = "Devoir de "
		un_devoir_rendu.innerHTML += '<b style="color: #FF6C00;" id="proprietaire'+resultats[i]["id_fichier"]+'">' + resultats[i]["proprietaire"].toUpperCase() + " </b>";

		//si il y a une remarque -> corrigé
		var remarque = decodeURIComponent(resultats[i]["remarque"]);
		remarque= JSON.stringify(remarque).replace(/&/, "&amp;").replace(/"/g, "");
		remarque = remarque.replace(/'/g, "\\'");
		//console.log(remarque)


		if(remarque.length > 0){

			note_si_existante = resultats[i]["note_rendu"] ?  resultats[i]["note_rendu"] + "\n\n" : ""
			//CORRIGE avec au survol on affiche la remarque
			un_devoir_rendu.innerHTML += '<span id="correction_ok"><span class="correction_ok" style="font-size: 8px;color: #5ac55a;font-weight: bold;font-style: italic;" onmouseover="afficher_mon_indication(this)" onmouseout="masquer_mon_indication(this)">Corrigé</span><span class="indication" style="margin-top:5%;">'+note_si_existante+remarque+'</span></span>';

		}

		var titre = rfc3986EncodeURIComponent(resultats[i]["nom_fichier"].trim());
		var nom_proprio_devoir = ' (' + resultats[i]["proprietaire"].trim().toUpperCase() + ')';
		//console.log(resultats[i])
		var coefficient_rendu = resultats[i]["coefficient_rendu"]
		var note_rendu = resultats[i]["note_rendu"]
		
		un_devoir_rendu.innerHTML += '<img alt="voir"  id="mini-image" src="https://sekooly.github.io/SUPABASE/images/img_previz.png" onclick="visualiser(\''+ titre + '\',\'' + un_devoir_rendu.id +'\', \'' + nom_proprio_devoir + '\')">';

		un_devoir_rendu.innerHTML += '<img alt="remarque" id="mini-image" class="envoi_remarque" onclick="mettre_remarque_devoir(this,\'' + remarque +'\',' + coefficient_rendu +','+ note_rendu + ');" src="https://sekooly.github.io/SUPABASE/images/img_remarque.png">';

		un_devoir_rendu.innerHTML += '<a   id="telechargement" href = "https://drive.google.com/uc?export=download&id=' + un_devoir_rendu.id +'" download="mon_fichier.txt"><img alt="télécharger" id="mini-image" src="https://sekooly.github.io/SUPABASE/images/img_download.png"></a>';
		
		un_devoir_rendu.innerHTML += '<i style="color: #bfbfbf;">' + afficher_date(resultats[i]["date_publication"]) + '  </i>';

		//console.log(un_devoir_rendu.innerHTML);


		liste_des_devoirs_rendus.appendChild(un_devoir_rendu);
		

	}



	//juste 90% de l'écran si la liste est trop longue
	if(element_DOM('rendu_devoir').offsetHeight > screen.height){
		element_DOM('rendu_devoir').offsetHeight = "90%";
	}
	

}


function mettre_remarque_et_note(id_fichier, remarque,coefficient_rendu,note_rendu){
	/*
	console.log(remarque)
	console.log(coefficient_rendu)
	console.log(note_rendu)*/
	


	$("#remarque_et_note").remove()
	html_a_ajouter = fenetre_remarque_note(id_fichier, note_rendu ? note_rendu : 0, remarque)

	//console.log(html_a_ajouter)
	$("body").append(html_a_ajouter)


	//si pas de coefficient, on enleve note
	if(Number(coefficient_rendu) === 0){
		$("#champ_note").remove()		
	}


	//au clic de envoyer -> on poursuit
	$("#envoyer_note").on('click',function(e){

		if(Number(coefficient_rendu) > 0) note_rendu = $("#note_rendu")[0].value
		remarque_prof = $("#remarque")[0].value

		//alert("on a cliqué!" + note_rendu + " et "  + remarque_prof)
		$('#remarque_et_note').remove()

		//si pas de note -> on met null
		chargement(true);

		
		remarque_prof = encodeURIComponent(remarque_prof);
		nom_table = "Rendus"
		nom_champ_reference = "id_fichier"
		valeur_champ_reference = id_fichier

		if(Number(coefficient_rendu) > 0){
			nouvelle_remarque = {
				"note_rendu": note_rendu,
				"remarque": remarque_prof
			}

		}else{
			nouvelle_remarque = {
				"remarque": remarque_prof
			}
		}

		actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouvelle_remarque)
		
		

		if (remarque_prof.length > 0){
			
			nouvelles_donnees_notif = {
				"Date_derniere_modif": maintenant(),
				"Identifiant_derniere_modif": recuperer('identifiant_courant'),
				"Role_derniere_modif": mon_role,
			}

			var valeur_proprio_devoir = $("#proprietaire"+id_fichier)[0].innerText
			var id_notif = $("#devoir_choisi")[0].value+"-"+ valeur_proprio_devoir.trim().toLowerCase().replace(".","")
			//console.log(nouvelles_donnees_notif)
			//console.log(id_notif)
			actualiser("Notifs", "id_notif", id_notif, nouvelles_donnees_notif)
		}
			


		//au bout de 2 secondes
		setTimeout(function(){
			quitter_previsualisation()
			quitter_previsualisation_bis()
			recuperer_mon_devoir(element_DOM('devoir_choisi').value);
		}, 2000);
		
		
		chargement(false)



	})


	
}


function fenetre_remarque_note(id_fichier, note_rendu, remarque){
	//console.log(id_fichier)
	nom_proprio_devoir = $("#proprietaire" + id_fichier)[0].innerText.trim().toUpperCase()
	/*
	alert(nom_proprio_devoir)
	console.log(nom_proprio_devoir)*/
	return '<div class="ma_fenetre" id="remarque_et_note" style="visibility: visible;height: 33%;width: 280px;height: 300px;top: 35%;left: 10%;"><b style="text-align: center;"><div id="titre_fenetre" class="">Note et remarque de '+nom_proprio_devoir+' </div></b><span style=""><form id="mon_formulaire" autocomplete="off" style="padding: 0% 3% 0% 3%;height:82%;overflow-y: auto;">	<div id="champ_note"><label id="label" for="note_rendu">Note (sur 20)</label><input type="number" min=0 max=20 step=0.125 id="note_rendu" maxlength="2" style="width: 100%;" value="'+note_rendu+'"></div><br><label id="label" for="remarque">Votre remarque</label><textarea id="remarque" maxlength="300" style="width: 100%;resize: none;font-size: 13px;height: 50%;">'+remarque+'</textarea><div id="mes_boutons" style="text-align: center;padding: 1%;display: block ruby;"><button type="button" id="Annuler" onclick="$(\'#remarque_et_note\').remove()"> Annuler </button><button type="button" id="envoyer_note">Valider</button></div></form></span></div>'
	//return '<div></div>'
}

function mettre_remarque_devoir(ceci,remarque,coefficient_rendu, note_rendu){

	var remarque_decoodee = remarque.replace(/&quot;/g, "\"");	
	remarque_decoodee = decodeURIComponent(remarque_decoodee);			

	var id_fichier = ceci.parentNode.id;
	var id_prof =recuperer('identifiant_courant');
	var remarque_note_prof= mettre_remarque_et_note(id_fichier,remarque_decoodee,coefficient_rendu,note_rendu) //prompt("Votre remarque pour ce devoir: ",remarque_decoodee);
	


}


function supprimer_devoir(moi, id_fichier_donné, id_devoir_donné){

	if(id_fichier_donné){
		var id_fichier = id_fichier_donné
	}else{
		var id_fichier = moi.parentNode.id;	
	}	
	//console.log("le fichier sur drive: "+id_fichier)






	var id_devoir = $("#devoir_choisi")[0].value + suite_notif()
	if(id_devoir_donné) id_devoir = id_devoir_donné

	//console.log("le id_devoir:"+id_devoir)






	if (id_fichier_donné || id_devoir_donné){
		var accepter_suppression = true
	}else{
		var accepter_suppression = window.confirm("Êtes vous sûr de vouloir supprimer ce rendu de devoir?");
	}

	if(!accepter_suppression) return -1;

	chargement(true);

	
	//déjà le nouveau script de suppression
	var lien_script = 'https://script.google.com/macros/s/AKfycbw_04bdiepfQ0P9Ddtn6nyRPjxzxumORN4J8xm7bnmu7yO3HvQ/exec';
	var bon_API = (id_fichier_donné || id_devoir_donné) ? "API_KEY_DELETE" : "API_KEY_DEVOIR"

	var html = '<form method="post"  action="'+lien_script+'" id="supprimer_devoir" style="display: none;" >';
	html += '<input type="hidden" name="'+bon_API+'" value="' + recuperer(bon_API) + '" >';
	html += '<input type="hidden" name="id_fichier" value="' + id_fichier + '" >';
    html += '</form>';	                
	                

    //console.log(html);
    $("body").append(html);

    
    var form = $("#supprimer_devoir");


	$.ajax({
		type: "POST",
		url: lien_script,
		data: form.serialize(),
		success: function(data) {
			//console.log(data);
			afficher_alerte(data)

			
			//on met à jour la BDD: dans Rendus
			supprimer("Rendus","id_devoir",id_devoir)
			supprimer("Notifs","id_notif",id_devoir)

			//au bout de 2 secondes
			setTimeout(function(){
				recuperer_mon_devoir(element_DOM('devoir_choisi').value, recuperer('identifiant_courant'));
			}, 2000);


			chargement(false);

		},

		error: function(data){
			console.error(data);
			alert('Impossible de supprimer le rendu: vérifiez que vous êtes toujours connecté.');


			chargement(false);
		}

	});
	


	$('#supprimer_devoir').remove(); // on enlève le form invisible : TRES UTILE


}

function supprimer_div_devoir_choisi(){

	$("#file_devoir")[0].value ="";

	if(element_DOM('mon_devoir_rendu')) element_DOM('mon_devoir_rendu').remove();
}

function supprimer_rendus_devoirs_affiches(){
	if(element_DOM('liste_des_devoirs_rendus')) element_DOM('liste_des_devoirs_rendus').remove();

}


function afficher_soumettre_devoir(oui){
	if(oui){
		element_DOM('soumettre_devoir').style.display ="";
	}else{
		element_DOM('soumettre_devoir').style.display ="none";
	}
}

function changer_couleur_devoir(couleur){
	element_DOM('devoir_choisi').style.borderColor = couleur;
}

function rendre_devoir(){

	if(impossible_de_cliquer()) return -1;

	var le_devoir_choisi = $("#devoir_choisi")[0].value;
	var le_fichier_choisi = $("#file_devoir")[0].value;

	
	//TODO: interdire l'upload si la date est dépassée
	if(le_devoir_choisi !== "--" && le_fichier_choisi!=="") {


		var file = $('#file_devoir')[0].files[0];
        var fr = new FileReader();

        fr.onprogress = function(e){
        	chargement(true);
        }

        chargement(true);

        fr.onload = function(e) {
        	var lien_script = 'https://script.google.com/macros/s/AKfycbyUa45u-TGQmKEWOYf9gz5UofPBAW7FRIpF6RNadQ5RbvT1BWrU/exec';
    
        	var params = {};
            params.file = e.target.result.replace(/^.*,/, '');
            nom_fichier = file.name;

            coefficient_rendu = Number($("#"+le_devoir_choisi)[0].getAttribute('coefficient_rendu'))
            taille_fichier = file.size;

			extension = nom_fichier.split(".").pop().toUpperCase();


			id_dossier_sujetdevoir = recuperer('dossier_chargé');
			id_fichier_sujetdevoir = le_devoir_choisi;
			proprietaire = recuperer('identifiant_courant');


            mettre_devoir_en_ligne(lien_script,params, nom_fichier, extension,id_dossier_sujetdevoir,id_fichier_sujetdevoir,proprietaire,coefficient_rendu,taille_fichier);

        }

        fr.readAsDataURL(file);

	}
}


function mettre_devoir_en_ligne(lien_script,params, nom_fichier, extension,id_dossier_sujetdevoir,id_fichier_sujetdevoir,proprietaire,coefficient_rendu,taille_fichier){




    var html = '<form method="post"  action="'+lien_script+'" id="form_rendu_devoir" style="display: none;" >';

    //les propriétés du fichier
    html += '<input type="hidden" name="API_KEY_DEVOIR" value="'+recuperer('API_KEY_DEVOIR')+'" >';
	html += '<input type="hidden" name="nom_fichier" value="' + nom_fichier+ '" >';
	html += '<input type="hidden" name="extension" value="'+extension+'" >';
	html += '<input type="hidden" name="file" value="'+params.file+'" >';
	html += '<input type="hidden" name="dossier_rendus_cycle" value="' + recuperer('dossier_rendus_cycle') + '" >';
	html += '<input type="hidden" name="proprietaire" value="' + proprietaire + '" >';

	/*
	html += '<input type="hidden" name="coefficient_rendu" value="' + coefficient_rendu + '" >';
	html += '<input type="hidden" name="taille_fichier" value="' + taille_fichier + '" >';
	*/

	html += '</form>';	                
    
    //console.log("\n" + html + "\n");



    $("body").append(html);

    
    // fonction d'envoi
    $("#form_rendu_devoir").submit(function(e) {
    	
    	e.preventDefault(); // rester sur la même page
    	
    	var form = $(this);
    	var url = form.attr('action');
    	$.ajax({ type: "POST", url: url, data: form.serialize(), // serializes the form's elements.

    		//affiche le resultat obtenu par le serveur (id fichier)
    		success: function(data) {

    			//console.log(data);

    			if(data.includes("ERREUR")){
    				afficher_alerte(data,false)
    				return -1
    			}

				setTimeout(function(){
					recuperer_mon_devoir(element_DOM('devoir_choisi').value, recuperer('identifiant_courant'));
				}, 2000);

				

				
				//ajouter un element dans Rendus ET notifs 
				date_heure_actuelle = maintenant()
				nom_table = "Rendus"
				id_devoir = id_fichier_sujetdevoir+suite_notif()
				la_matiere = $("#accueil_utilisateur")[0].innerText.trim()
				//coefficient_rendu = post_resultat_asynchrone(racine_data + 'rpc/maj_coef_rendu?' + apikey,{"valeur_id_devoir":id_devoir})

				//console.log(coefficient_rendu)

				nouveau_devoir  = {
					"id_devoir": id_devoir,
					"date_publication" : date_heure_actuelle,
					"id_dossier_sujetdevoir" : id_dossier_sujetdevoir,
					"id_fichier_sujetdevoir" : id_fichier_sujetdevoir,
					"id_fichier" : data,
					"nom_fichier": nom_fichier,
					"proprietaire": recuperer('identifiant_courant'),
					"remarque" : "",
					"matiere_rendue" : la_matiere,
					"coefficient_rendu" : coefficient_rendu,
					"taille_fichier" : taille_fichier

				}
				//console.log(nouveau_devoir)
				ajouter_un_element(nom_table, nouveau_devoir, id_devoir)
				/*
				console.log()
				console.log()
				*/

				nom_table = "Notifs"
				mes_donnees = JSON.parse(recuperer("mes_donnees"))

				nouvelle_notif = {
					"id_notif":id_devoir,
					//"id_fichier_devoir": data,
					"Horodateur": date_heure_actuelle,
					"Type_notif" : "devoir",
					"Id_source" : id_fichier_sujetdevoir,
					"Intitulé" : nom_fichier,
					"Identifiant_originaire": recuperer('identifiant_courant'),
					"Role_originaire": "Eleve",
					"Identifiant_derniere_modif" : recuperer('identifiant_courant'),
					'Role_derniere_modif' : "Eleve",
					'Classe' : mes_donnees['Classe'],
					'Classe_matiere' : "(" + mes_donnees['Classe'] + "|" + la_matiere + ")" ,
					'Id_classe_matiere' : recuperer("dossier_chargé"),
					'Date_derniere_modif' : date_heure_actuelle,
					'Cycle' : mes_donnees['Cycle']
				}
				//console.log(nouvelle_notif)
				ajouter_un_element(nom_table, nouvelle_notif, id_devoir)
    			













    			// on affiche l'alerte
				afficher_alerte("Votre rendu a bien été mis en ligne.",false)

    			chargement(false);

			},

			error:function(data){
    			chargement(false);

    			console.error(data);

    			afficher_alerte(data,false)

				
			},

			done: function(data){
				chargement(false)
			}

		});
		
    });
	

    //envoyer
    $('#form_rendu_devoir').submit();
	$('#form_rendu_devoir').remove();

	
}
















	




















/********************************************* TESTS ***************************************************************/



































/****************************** LE RESTE **********************************/

function retourner_site(){

	vider_fenetre("Sekooly")
	
	visualiser("Tutoriels d'utilisation.docx","1HnsoX5_NQGhJ34WZ68p9SPvZ30jn4gKpf_cQjz2ZyUo",false,"Tutoriels d'utilisation")
	$("#telechargement").remove()
	afficher_fenetre(true)
	/*contenu = "Bonjour <span style='font-weight: bold;color: #FF6C00;'> "+recuperer('identifiant_courant').toUpperCase()+ "</span>, bienvenue sur la plateforme de télé-enseignement Sekooly !<br><br>Sur cette page, vous trouverez bientôt des tutoriels d'utilisation de Sekooly, en fonction de votre rôle au sein de votre établissement.<br><br>Cette section est en cours de construction, merci infiniment de votre patience !"
	conteneur_texte_html = '<div style="overflow: hidden auto;height: 90%;padding: 2%;"><div id="redaction" >'+contenu+'</div></div>'
	conteneur_texte = document.createElement('div')
	conteneur_texte.innerHTML = conteneur_texte_html
	$("#fenetre")[0].appendChild(conteneur_texte.firstChild)*/
	

}

function afficher_alerte(contenu,actualiser){
	// on recupere l'alerte
	var msg_alerte = element_DOM("snackbar");

	// on affiche l'alerte
	msg_alerte.innerText = contenu;
	msg_alerte.className = "show";

	//dans 3 secondeds, on masque l'alerte 
	setTimeout(function(){
		msg_alerte.className = "";
		if(actualiser) location.reload();
	}, 3000);
}

function afficher_modif_profil(){

	quitter_previsualisation();
	vider_fenetre("Votre profil");

	var mes_donnees = JSON.parse(recuperer('mes_donnees'));

	var ma_photo_de_profil = mon_detail('Photo de profil',ma_photo());

	var mon_niveau_XP = mon_detail('Niveau XP',calculer_mes_XP());

	var mes_details_identifiant =mon_detail('Identifiant',mes_donnees['Identifiant']);
	var mes_details_nom =mon_detail('Nom',mes_donnees['Nom']);
	var mes_details_prenoms =mon_detail('Prénom(s)',mes_donnees['Prénom(s)']);
	

	var mon_type =  recuperer('mon_type');

	//on enleve le S à la fin pour eleves et professeurs
	var mon_type_ou_role = mon_type.includes("Admin") ? mes_donnees['Role'] : mon_type.substring(0, mon_type.length - 1);;
	var mes_details_type = mon_detail('Rôle du profil',mon_type_ou_role);

	
	var mes_classes = mes_donnees['Classe'].replace(/;/g,"<br>");
	mes_classes = mes_classes.replace(/\(/g,"");
	mes_classes = mes_classes.replace(/\)/g,"");
	mes_classes = mes_classes.replace(/\|/g,", ");
	var mes_details_classe =mon_detail('Classe(s)',mes_classes);

	var mes_details_contact =mon_detail('Telephone',mes_donnees['Telephone']);

	var mes_details_code_acces =mon_detail('Code d\'accès',mes_donnees['Code'],true);

	var boutons = '<span id="les_boutons" style="text-align: center;position: relative;display: block;"><button type="button" id="annuler_modifs" onclick="quitter_previsualisation()"> Annuler </button><button type="button" id="valider_modifs" onclick="switch_edition()">Enregistrer</button></span>';

	var details_profil_html = '<div id="mes_details" class="mes_details">' + ma_photo_de_profil+ mon_niveau_XP + mes_details_identifiant + mes_details_nom + mes_details_prenoms + mes_details_type + mes_details_classe + mes_details_contact + mes_details_code_acces +'</div>' + boutons;

	var details_profil = document.createElement('div');
	details_profil.innerHTML = details_profil_html;

		while(details_profil.firstChild)
			element_DOM('fenetre').appendChild(details_profil.firstChild);

		mode_edition(false,true);


	afficher_fenetre(true);

}

function bouton_supprimer_pp(identifiant_courant){
	identifiant_courant = identifiant_courant ? identifiant_courant : recuperer("identifiant_courant")
	return '<img id="suppr_pp" onclick="supprimer_pp(\''+identifiant_courant+'\')" class="editer" src="https://sekooly.com/assets/images/img_trash.png" alt="supprimer">'
}

function bouton_modifier_pp(identifiant_courant){
	identifiant_courant = identifiant_courant ? identifiant_courant : recuperer("identifiant_courant")
	return '<span class="pp-upload"><label for="pp-'+identifiant_courant+'"><img src="https://sekooly.com/assets/images/img_edit.png" alt="modifier" class="editer"></label><input onchange="changer_pp(\''+identifiant_courant+'\')" accept=".png,.jpeg,.jpg,.bmp,.svg,.gif" id="pp-'+identifiant_courant+'" type="file"/> </span>'
}

function ma_photo(){
	chargement(true)
	
	var nom_table = "Fichiers"
	url = racine_data + nom_table
	url += "?proprietaire=eq." + recuperer("identifiant_courant") 
	url += "&categorie_fichier=eq.Profil"
	url += "&" + apikey
	//console.log(url)
	id_pp = get_resultat(url)[0]
	if(id_pp) id_pp = id_pp['id_fichier']

	//console.log(id_pp)
	le_lien_pp = lien_pp(id_pp)
	supprimer_si_pp_existante = id_pp ? bouton_supprimer_pp() : ""
	chargement(false)
	return "<img class='pp' id='pp_"+recuperer('identifiant_courant')+"' src=" + le_lien_pp +">" + bouton_modifier_pp() + supprimer_si_pp_existante

}

var basic_croppie
var donnees_pp
var extension_pp = ""


function url_pp(){
	return "https://script.google.com/macros/s/AKfycbzGLJpVC55WvaC2akFbRw8Y-jOr--w7wwArd0IFHZGPORNuZV8DHl7e2T0sCaeGrh-k/exec"
}


function supprimer_pp(identifiant_courant, sans_confirmation){

	if(!sans_confirmation) var confirmation = confirm("Voulez-vous supprimer cette photo de profil ? Cette action est irréversible.")

	if(confirmation || sans_confirmation){

		chargement(true)

		identifiant_courant = identifiant_courant ? identifiant_courant : recuperer("identifiant_courant")

		//supprimer sur le drive
		var url =  url_pp()
		url += "?supp_mon_id_pp=true"
		url += "&nom_etablissement=" + data_etablissement['nom_etablissement']
		url += "&identifiant=" + identifiant_courant
		url += "&supp_mon_id_pp=true"
		return get_resultat_asynchrone(url).then(function(e){
			if(!sans_confirmation) afficher_alerte(e)

			//console.log("on supprime l'ancienne photo de " + identifiant_courant)

			//supprimer dans les fichiers
			nom_table = "Fichiers"

			var url = racine_data + nom_table + "?proprietaire=eq." + identifiant_courant
			url += "&categorie_fichier=eq.Profil"
			url += "&" + apikey

			//console.log(url)
			return delete_resultat_asynchrone(url).then(function(){
				//console.log("on supprime l'ancienne photo de " + identifiant_courant + " dans la table")

				//changer localement
				//console.log("changer localement pour " + identifiant_courant)
				$("[id='pp_"+identifiant_courant+"']")[0].src = "https://sekooly.com/assets/images/default-user.svg";	
				$("#suppr_pp").remove()
				
				
				if(!sans_confirmation) chargement(false)

				
			})

		})


	}



}




function changer_pp(identifiant_courant){
	var reader = new FileReader()
	identifiant_courant = identifiant_courant ? identifiant_courant : ""

	//on crée le popup d'édition
	creer_mini_popup("","<div id='nouvelle_pp' style='overflow: hidden;width: 200px;height:300px;'></div>","Valider la photo","envoyer_pp('"+identifiant_courant+"')")
	
	//on déclare l'endroit où on fera l'édition
	basic_croppie = $('#nouvelle_pp').croppie({
	    viewport: {
	        width: 200,
	        height: 200,
	        type: 'circle'
	    },
	    boundary: {
	        width: 200,
	        height: 200
	    },
		
		enableExif: true
	});


	//on prépare la lecture de l'image
	reader.onload = function(results){
		chargement(false)
		donnees = reader.result
		//$("#mini_popup")[0].style.overflow = "auto"

		basic_croppie.croppie('bind', {
			url: donnees,
			points: [77,469,280,739]
		});
	}



	//on lit l'image pour redimensionner
	extension_pp = $("[id='pp-"+identifiant_courant+"']")[0].files[0].name.split(".").pop();
	chargement(true)
	reader.readAsDataURL($("[id='pp-"+identifiant_courant+"']")[0].files[0])


}

function envoyer_pp(identifiant_courant){
	chargement(true)
	url =  url_pp()

	identifiant_courant = identifiant_courant ? identifiant_courant : recuperer("identifiant_courant")

	//supprimer toute ancienne photo
	supprimer_pp(identifiant_courant,true).then(function(){


		//console.log("on a bien supprimé l'ancienne pp.")

		basic_croppie.croppie('result', {
			type: 'canvas',
			size: 'viewport'
		}).then(function (resp) {

			//console.log("on a récupéré l'élément croppé.")

			$("#mini_popup").remove()
			//envoyer en asynchrone
			data = {
				nom_etablissement: data_etablissement['nom_etablissement'],
				identifiant: identifiant_courant,
				API_KEY_UPLOAD : recuperer("API_KEY_UPLOAD"),
				API_KEY_DEVOIR : recuperer("API_KEY_DEVOIR"),
				extension : extension_pp,
				file: resp.replace(/^.*,/, '')

			}

			/*
			console.log(url)
			console.log(data)
			*/

			//changer sur le serveur
			post_resultat_asynchrone(url,data).then(function(valeur){
				afficher_alerte(valeur.split("|")[0])

				id_pp = valeur.split("|")[1].trim()

				date_heure_aujourdhui = maintenant()


				//envoyer le ID dans la base
				nom_table = "Fichiers"
				mes_donnees = {
					id_fichier: id_pp,
					categorie_fichier: "Profil",
					proprietaire: identifiant_courant,
					nom_fichier: identifiant_courant + "." + extension_pp,
					date_effet: moment(date_heure_aujourdhui).format("YYYY-MM-DD"),
					id_dossier: "pp",
					est_telechargeable: "non",
					date_publication: date_heure_aujourdhui,
					taille_fichier: $("[id='pp-"+identifiant_courant+"']")[0].files[0].size
				}

				var url = racine_data + nom_table + "?" + apikey
				//console.log(url)
				post_resultat_asynchrone(url, mes_donnees).then(function(){

					//changer localement
					//console.log("changer localement pour " + identifiant_courant)
					$("[id='pp_"+identifiant_courant+"']")[0].src  = resp;
					
					//ajouter le bouton supprimer photo s'il n'existe pas encore
					if($("#suppr_pp").length === 0) $("#Photo").append(bouton_supprimer_pp())

				})



				chargement(false)
			})
		});




	})

}

function calculer_mes_XP(){
	//return "585000" + " XP"
	return "En cours de construction."
}

function switch_edition(){

	var est_mode_edition = $("#valider_modifs")[0].innerText === "Enregistrer";

	//entrer en mode édition: exiger le code d'accès
	if(!est_mode_edition){
		
		var ancien_code = prompt("Indiquez votre code d'accès ACTUEL:");
		var hash_ancien_code = hasher(ancien_code)
		var vrai_code = JSON.parse(recuperer('mes_donnees'))['Code']

		/*
		console.log(hash_ancien_code)
		console.log(ancien_code)
		console.log(" VS " + vrai_code)
		*/

		//si code ok:
		if(ancien_code === vrai_code || hash_ancien_code === vrai_code){
			mode_edition(true);
		}else{
			if(ancien_code !== null)
				afficher_alerte("Le code d'accès est erroné, impossible de modifier votre profil.")
		}


	//sortir du mode édition: enregistrer les modifs
	}else{

		nom_champ = 'Code';
		valeur_champ = hasher($("#Code")[0].value) ;


		nouveau_data = {
			[nom_champ] : valeur_champ,
			"code_hash" : "ok"
		}

		//console.log(nouveau_data)
		mettre_a_jour(nom_champ,valeur_champ)

	}

	
}



function mettre_a_jour(mes_champs_str,mes_valeurs_champ_str){

	//console.log(nouveau_data)
	
	actualiser(recuperer('mon_type'), 'Identifiant', recuperer('identifiant_courant'), nouveau_data)

	//mettre à jour mes données locales
	var mes_donnees = JSON.parse(recuperer('mes_donnees'));

	mes_champs_str.split(',').forEach(function(valeur,index){
		mes_donnees[valeur] = mes_valeurs_champ_str.split(',')[index];
	});

	stocker('mes_donnees',JSON.stringify(mes_donnees));

	afficher_alerte("Votre profil a été mis à jour.");
	mode_edition(false);
	chargement(false);	


}

function mode_edition(oui,initialement){
	if(!initialement){

		var mode = oui ? "input" : "";

		//mettre en mode input OU PAS:
		//numéro de tél
		//changer_element("Telephone",mode);
		//code d'accès (ssi on a donné l'ancien)
		changer_element("Code",mode,true);

	}

	var texte_boutton = oui ? "Enregistrer" : "Modifier";				
	$("#valider_modifs")[0].innerText = texte_boutton;



}

function changer_element(id_element,type_element,est_mdp){

	var valeur_initiale_element = type_element==='input'?
		
		$("#" + id_element)[0].innerText

		: (est_mdp ?
			'•'.repeat($("#" + id_element)[0].value.length)

			: $("#" + id_element)[0].value);

	var mode_mdp = est_mdp ? 'type="password"' : "";
	var element_final_html = type_element==='input'?

		'<input id="' +id_element+'" value="'+valeur_initiale_element+'" '+ mode_mdp +'>'

		: '<span id="' +id_element+'">' + valeur_initiale_element+'</span>';


	var element_final = document.createElement('div');
	element_final.innerHTML = element_final_html;

	//recuperer le parent de l'element ancien
	var parentElement = $("#"+id_element)[0].parentNode;

	//supprimer l'element ancien
	$("#"+id_element).remove();

	//ajouter le nouvel element
	while(element_final.firstChild)
		parentElement.appendChild(element_final.firstChild);

	if(type_element==='input'){
		
		//valeur du code
		$("#"+id_element)[0].value = JSON.parse(recuperer('mes_donnees'))['Code'];

		//curseur sur l'édition
		$("#"+id_element)[0].select();

		//effacer valeur anterieur
		$("#"+id_element)[0].value = "";

		//quand on valide: switch_edition()
		$("#Code").keypress(function(e) {
			if(e.charCode===13) switch_edition();

			//& , ' " espace interdits
			if(e.charCode===38 || e.charCode===44 || e.charCode===39 || e.charCode===34 || e.charCode===32){
				afficher_alerte("Le symbole ' "+String.fromCharCode(e.charCode)+" ' est interdit.");
				return false;	
			}
		})


	}

}



function mon_detail(nom_detail,valeur_detail,mdp){

	if(mdp) valeur_detail = "•".repeat(valeur_detail.length);
	var resultat = '<div class="un_detail"><b style="color:#FF6C00">'+nom_detail+': </b><br><span id="' + nom_detail.split(" ")[0] +'">'+valeur_detail+'</span></div>';
	return resultat;
}

function sur_mobile_ou_tablette(){
	return ((window.innerWidth <= 750) || (window.innerHeight <= 750));
}

function filtrer_date_effet(){


	//on affiche TOUT LES DRIVES
	afficher_tous_les_fichiers_deja_recup();


	var condition_filtre = element_DOM('la_date_effet').value;

	$(".span_un_fichier").filter(function(valeur){

		//masquer tout ce qui ne respecte pas la condition DATE D'EFFET						
		var la_date = $(this)[0].attributes['ma_date_effet'].value;
		//console.log(la_date);
		var date_contenue = la_date.includes(condition_filtre) ;
		//alert(date_contenue);
		

		$(this)[0].style.display = date_contenue || condition_filtre === "Tous" ? "grid" : "none";

		return $(this)[0].innerHTML.includes(condition_filtre);
	
	});


	afficher_le_drive(true);
	garder_les_manuels(); //NEW
	masquer_drive_vide();
}



function rfc3986EncodeURIComponent (str) {  
    return encodeURIComponent(str).replace(/[!'()*]/g, escape);  
}

function afficher_tri_fichiers(oui){
	element_DOM('span_date_effet').style.display = oui ? "block" : "none";

}


function afficher_visio(oui){
	element_DOM('visioconference').style.display = oui ? "block" : "none";
}



function afficher_choix_date(oui){
	if (oui){
		element_DOM('choix_date').style.display="grid";
		
	}else{
		element_DOM('choix_date').style.display="none";
	}
	
	

}

function afficher_choix_coef(oui){
	if (oui){
		element_DOM('coef_rendu').style.display="";
		
	}else{
		element_DOM('coef_rendu').style.display="none";
	}
}


function afficher_ou_non_choix_fichier(oui,forcing){

	if (impossible_de_cliquer() && !forcing) return -1;

	//si dossier vie scolaire et non admin: pas de dépôt
	if(oui && !recuperer('mon_type').includes('Admin') && element_DOM('accueil_utilisateur').innerText.includes('Vie scolaire') ){
		alert("Vous n'avez pas les droits pour publier un fichier dans la Vie Scolaire.");
		return -1;
	}

	//effacer les extraits précédents
	image_temporaire = ""
	nom_image_temporaire = ""


	est_deja_affiche = (element_DOM('choix_popup').style.visibility === "visible");

	if(est_deja_affiche || !oui){
		//console.log("on va masquer");
		element_DOM('choix_popup').style.visibility = "hidden";
		
		if(!forcing){
			afficher_choix_date(false);
			afficher_choix_coef(false);
		} 
	
	//pas encore affiché, pas de forcing de masquage
	}else{
		//console.log("on va afficher");

		//TODO apres le 7 juin: reautoriser
		var autoriser_ajout_fichiers = true;
		if(!autoriser_ajout_fichiers){

			alert("Impossible de mettre en ligne des fichiers du lundi 1er au dimanche 7 Juin 2020.");
			return -1;
		}

		//on ferme toute fenêtre
		afficher_fenetre(false);
		afficher_ou_non_choix_fichier(false);

		//pas de mode bulletin par défaut
		mode_bulletin(false)

		//on affiche la fenêtre de choix de fichier
		element_DOM('choix_popup').style.visibility = "visible";
		
		//rien initialement
		element_DOM("file").value = "";
		element_DOM("categorie_choisie").value = "--";
		element_DOM("la_date_limite").value = "";
		element_DOM("date_effet_fichier").value = moment().format('yyyy-MM-DD');
		element_DOM('heure_effet').value="" //par défaut vide

		element_DOM("lheure_limite").value = "";
		
		//par défaut: choix fichier et non youtube ni extrait
		element_DOM('est_video_youtube').checked = false;	
		element_DOM('est_extrait_manuel').checked = false;	
		element_DOM('est_telechargeable').checked = true;	

		//si pas de manuels -> choix_extrait_manuel non visibles
		afficher_checkbox("choix_extrait_manuel", les_manuels_de_la_matiere() !== "")

		mode_fichier_initialement()

		//par défaut: coefficient = 0
		element_DOM('coef').value = 0	


		afficher_choix_date(false);
		afficher_choix_coef(false);

	}

}

function afficher_mon_indication(moi){
	//l'indication est forcément l'élément 1 du parent commun
	moi.parentNode.childNodes[1].style.visibility = 'visible';
}

function masquer_mon_indication(moi){
	//l'indication est forcément l'élément 1 du parent commun
	moi.parentNode.childNodes[1].style.visibility = 'hidden';
}


function impossible_de_cliquer(){
	return element_DOM('img_chargement').style.visibility === 'visible';
}


function deconnexion(){

	chargement(true);
	var ma_classe = "";
	mon_role = init_mon_role()

	effacer("mes_donnees");
	effacer("mes_matieres");
	effacer('dossier_chargé','');
	effacer('mon_type');
	effacer('les_topics');
	effacer("topic_chargé");

	effacer("nb_com_actuel");
	
	effacer("les_coms");
	effacer("les_fichiers");
	effacer('device_id');
	effacer('mes_notifs');
	effacer('ma_date_consultation');
	effacer('fichier_ouvert');
	effacer('dossier_rendus_cycle')

	effacer('quitter_multi_visio')
	effacer("nb_clics")

	image_temporaire = ""
	nom_image_temporaire = ""

	effacer('liste_params_colonnes_masquees')

	supprimer_tous_les_parametres()

	//je préviens que je vais me deconnecter puis je me deco (sous 1 seconde)
	setTimeout(function(){
		location.href= "/";
	}, 1000);
	envoyer_log(recuperer('identifiant_courant'), "Deconnexion", ma_classe, mon_role)
	
}


function recuperer_devoirs(forcing){

	if(!recuperer('dossier_chargé')) return -1;

	if(impossible_de_cliquer()) return -1;

	afficher_fenetre(false);

	var est_deja_affiche = (element_DOM('rendu_devoir').style.visibility === 'visible');

	if(forcing) est_deja_affiche = false;

	afficher_fenetre_rendudevoir(!est_deja_affiche);
}


function afficher_devoirs(oui){
	if(oui){
		element_DOM('devoirs_a_rendre').style.visibility = "visible";
	}else{
		element_DOM('devoirs_a_rendre').style.visibility = "hidden";
	}


}





function recuperer_eleves(){

	if (impossible_de_cliquer()) return -1;

	//si dossier vie scolaire et non admin: pas de dépôt
	if(!recuperer('mon_type').includes('Admin') && element_DOM('accueil_utilisateur').innerText.includes('Vie scolaire') ){
		alert("Vous n'avez pas les droits pour consulter cette liste.");
		return -1;
	}

	chargement(true);

	//la classe actuellement ouverte
	var classe = element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim();
	//si on est admin et à la première page: on récupère tout
	if (recuperer('mon_type') === "Administration") classe = "Tous";

	



	var le_cycle = JSON.parse(recuperer('mes_donnees'))['Cycle']

	nom_table = "Trombinoscope" //"Eleves"
	nom_champ_reference = classe === "Tous" ? "Cycle" : "Classe"
	valeur_champ_reference = classe === "Tous" ? le_cycle : classe
	nom_champ_a_chercher = ""



	var titre_fenetre = "Liste des élèves en " + valeur_champ_reference;
	

	vider_fenetre(titre_fenetre);

	//on affiche la fenêtre
	afficher_fenetre(true);

	/*
	console.log(nom_table)
	console.log(nom_champ_reference)
	console.log(valeur_champ_reference)
	console.log(nom_champ_a_chercher)
	*/

	rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher).then(snapshot => {
		
		traitement_la_classe(snapshot);
		chargement(false);

	}).catch(error => {
		console.error(error);
		alert('Classe introuvable, veuillez réessayer.');
		
		chargement(false);
	})



			





}



function recuperer_logs(){
	chargement(true);


	//autre que profs (donc admin) et avec les droits
	if(recuperer('mon_type') !== "Profs"){
		var classe = JSON.parse(recuperer('mes_donnees'))['Classe'];
		var nom_variable = "logs_classe"; //uniquement la connexion des élèves
		var titre_fenetre = "Historique des connexions";
	//profs
	}else{
		var classe = element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim();
		var nom_variable = "classe"; //uniquement la liste des élèves
		var titre_fenetre = "Liste des élèves en " + classe;
	}

	//on vide la fenêtre, on met le zoom + le bouton quitter
	vider_fenetre(titre_fenetre);

	//on ajoute le bouton télécharger
		var bouton_télécharger = '<a id="telechargement" style="position: fixed;z-index:3;" href = "#"><img alt="télécharger" style="width: 30px; cursor: pointer;position:fixed;" id="telechargement" src="https://sekooly.github.io/SUPABASE/images/img_download.png""></a>';
		//on le met dans l'en-tête
		var a_ajouter = document.createElement('div');
		a_ajouter.innerHTML = bouton_télécharger;
		while(a_ajouter.firstChild)
			element_DOM('entete-fenetre').appendChild(a_ajouter.firstChild);
		//ajuster le bouton
		ajuster_boutons_fenetre();
		ajuster_boutons_fenetre(true);
		choisir_height_viz_si_pdf();



	//on affiche la fenêtre
	afficher_fenetre(true);


	/*
	console.log("la classe: '" + classe +"'");
	console.log("nom_variable: '" + nom_variable +"'");
	*/

	var lien_script = 'https://script.google.com/macros/s/AKfycbzEamQPPrrqUl-_ac8Ddqf0cfWq3hPqF1Z-5qJ0JI95w2ybULd8/exec';

	var html = '<form method="post"  action="'+lien_script+'" id="recuperer_logs" style="display: none;" >';
	html += '<input type="hidden" name="' + nom_variable + '" value="'+ classe +'" >';
    html += '</form>';	                
	                
    $("body").append(html);

    var form = $("#recuperer_logs");

	$.ajax({
		type: "POST",
		url: lien_script,
		data: form.serialize(),
		success: function(data) {
			//console.log(data);

			
			traitement_logs(data['resultats']);

			//au clic de l'icône téléchargement, on download en csv
			if(element_DOM('telechargement')){
				element_DOM('telechargement').onclick = function(e){
					var contenu_fichier= convertir_csv(data['resultats']);
					contenu_fichier = encodeURIComponent(contenu_fichier);
					console.log(contenu_fichier);
					telecharger("Historique_des_connexions",contenu_fichier);
				}
			}

			//chargement(false);
			$('#recuperer_logs').remove(); // on enlève le form invisible : TRES UTILE
		},

		error: function(data){
			console.log('erreur! ' + data);
			alert('Vérifiez que vous êtes toujours connecté à internet.');
			chargement(false);
		}

	});

}



function telecharger(nom_fichier,contenu_fichier){

    var element = document.createElement('a');
	element.style.display = 'none';

    element.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + contenu_fichier);
    element.setAttribute('download', nom_fichier + ".csv");
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


var nombre_changement_ecolage = 0;

function traitement_la_classe(resultats){
	
	//au moins 1 élément: on crée ub conteneur de la liste
	var liste_des_eleves = document.createElement('div');
	liste_des_eleves.id = "liste_des_eleves";
	liste_des_eleves.className = "liste_des_eleves";

	//on ajoute la liste des logs dans la fenêtre principale
	element_DOM('fenetre').appendChild(liste_des_eleves);

	//n'afficher que mon cycle
	resultats = resultats.filter(function(valeur,index){
		return valeur['Cycle'] === JSON.parse(recuperer('mes_donnees'))['Cycle'];
	})

	resultats.forEach(function(valeur,index){

		var ecolage_eleve = "";

		//seuls les admins avec Droit_changer_ecolage peuvent changer l'écolage
		var Droit_changer_ecolage = (JSON.parse(recuperer('mes_donnees'))['Droit_changer_ecolage'] === "oui" && recuperer('mon_type').includes('Admin'));
		if (Droit_changer_ecolage) ecolage_eleve = '<span class="toggle"><label class="switch"><input class="ecolage" id="'+ valeur['Identifiant']+'" type="checkbox"><span class="slider round"></span>	</label></span>';

		var le_lien_pp = lien_pp(valeur['id_fichier'])
		var bouton_modif = recuperer('mon_type').includes('Admin') ? bouton_modifier_pp(valeur['Identifiant']) : ""
		var bouton_suppr = recuperer('mon_type').includes('Admin') && !le_lien_pp.includes("default-user.svg") ? bouton_supprimer_pp(valeur['Identifiant']) : ""
		var un_eleve = '<div class="un_eleve"><img class="pp" id="pp_'+valeur['Identifiant']+'" src='+ le_lien_pp +'>' + bouton_modif + bouton_suppr +'<div><span class="element_eleve">' + valeur['Nom'] + " " + valeur['Prénom(s)'] + " <b>" + valeur['Classe'] + '</b></span></div>' + ecolage_eleve +'</div>';
		var un_bloc_eleve = document.createElement('div');
		un_bloc_eleve.innerHTML = un_eleve;

		//on ajoute chaque élément dans le contenant liste des eleves
		while(un_bloc_eleve.firstChild) liste_des_eleves.appendChild(un_bloc_eleve.firstChild);

		//seuls les admins avec Droit_changer_ecolage peuvent changer l'écolage
		if(Droit_changer_ecolage){
			var check_ecolage = valeur['Ecolage_OK'] === "oui";
			element_DOM(valeur['Identifiant']).checked = check_ecolage;
		}

	});


	//quand le toggle est mis à jour: on change l'écolage
	$('.ecolage').on("change",function(e){

		nombre_changement_ecolage = nombre_changement_ecolage+1;

		chargement(true);

		//envoyer la nouvelle valeur dans la bdd
		var valeur_ecolage_ok = e.target.checked ? "oui" : "non"
		var maj_ecolage_ok = {
			'Ecolage_OK': valeur_ecolage_ok
		}

		var nom_table = "Eleves"
		var nom_champ_reference = "Identifiant"
		var valeur_champ_reference = e.target.id
		actualiser(nom_table, nom_champ_reference, valeur_champ_reference, maj_ecolage_ok)


		chargement(false);

	});


	//on ajoute la taille de la classe entre parenthèses
	element_DOM('titre_fenetre').innerHTML += ' (' + resultats.length + ')';

	//si NON ADMIN, on n'affiche rien si finalement y a pas de dossier chargé
	if (!recuperer('mon_type').includes("Administration") && (recuperer('dossier_chargé') === "" || recuperer('dossier_chargé') === null))  decharger_dossier_final();
}


function tri_ordre_chrono_decroissant(a, b) {
    return new Date(b.Horodateur).getTime() - new Date(a.Horodateur).getTime();
}

function traitement_logs(resultats){
	

	//if (resultats.length = 0) return -1

	//au moins 1 élément: on crée ub conteneur de la liste
	var liste_des_logs = document.createElement('div');
	liste_des_logs.style.position = "relative";
	liste_des_logs.style.overflowX = "hidden";
	liste_des_logs.style.overflowY = "auto";
	liste_des_logs.id = "liste_des_logs";
	liste_des_logs.style.height = '90%';

	//on ajoute la liste des logs dans la fenêtre principale
	element_DOM('fenetre').appendChild(liste_des_logs);


	//dans l'ordre chronologique DECROISSANT
	resultats.sort(tri_ordre_chrono_decroissant);

	resultats.forEach(function(valeur,index){

		
		var date = afficher_date(valeur['Horodateur']);
		var un_log = '<div style="padding-left: 2%;padding-bottom: 2%;">' + valeur['Statut'] + " le " + date + " " + valeur['Identifiant'] + ' </div>';

		var un_bloc_log = document.createElement('div');
		un_bloc_log.innerHTML = un_log;

		//on ajoute chaque élément dans le contenant liste des logs
		while(un_bloc_log.firstChild) liste_des_logs.appendChild(un_bloc_log.firstChild);

	});




	//on ajoute la taille de la classe entre parenthèses si on est toujours dans la fenêtre
	if(element_DOM('titre_fenetre') === "Historique des connexions")
		element_DOM('titre_fenetre').innerHTML += ' (' + resultats.length + ')';

	chargement(false);

}



function CreateTableFromJSON(json_object) {

// EXTRACT VALUE FOR HTML HEADER. 
// ('Book ID', 'Book Name', 'Category' and 'Price')
var col = [];
for (var i = 0; i < json_object.length; i++) {
	for (var key in json_object[i]) {
		if (col.indexOf(key) === -1) {
			col.push(key);
		}
	}
}

// CREATE DYNAMIC TABLE.
var table = document.createElement("table");

// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

var tr = table.insertRow(-1); // TABLE ROW.

for (var i = 0; i < col.length; i++) {
	var th = document.createElement("th"); // TABLE HEADER.
	th.innerHTML = col[i];
	tr.appendChild(th);
}

// ADD JSON DATA TO THE TABLE AS ROWS.
for (var i = 0; i < json_object.length; i++) {

	tr = table.insertRow(-1);

	for (var j = 0; j < col.length; j++) {
		var tabCell = tr.insertCell(-1);
		tabCell.innerHTML = json_object[i][col[j]];
	}
}

// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
var divContainer = element_DOM("fenetre");
divContainer.appendChild(table);

//on ajoute la taille dans le titre


}


function initialisation(){
	chargement(true);
	document.title = "Sekooly | " + nom_etablissement.toUpperCase();

	effacer("date_heure_depassement")

	//si pas de données
	if (recuperer('mes_donnees') === "" || recuperer('mon_type') === "" || recuperer('mes_donnees') === null || recuperer('mon_type') === null){

		tout_quitter()

	//pas de liste de notifs lus
	}else if(JSON.parse(recuperer("mes_donnees"))['liste_notifs_lues'] === undefined){

		tout_quitter()


	//tout est ok
	}else{
		afficher_discussions(false);
		configurer_profil();
		mon_role = init_mon_role();

		if (recuperer('dossier_chargé') !== "" && recuperer('dossier_chargé') !== null) afficher_discussions(true);
		
		return chargement_a_larrivee();
		

	}
	chargement(false);
}

function tout_quitter(){

	document.body.style.display="none";
	deconnexion();
}


function afficher_fenetre(oui){
	if(oui){
		//afficher_ou_non_choix_fichier(false);
		element_DOM('fenetre').style.visibility = 'visible';
	}else {
		element_DOM('fenetre').style.visibility = 'hidden';
	}

}

function afficher_logs(oui){				
	//tout masquer
	if( element_DOM('recup_logs')){
		if (oui) element_DOM('recup_logs').style.visibility = 'hidden' //"visible";
		if (!oui) element_DOM('recup_logs').style.visibility ="hidden";	
	}
	
}


function afficher_edt(oui){
	if(oui){
		//console.log("on affiche");
		element_DOM('recup_edt').style.display ="block";

		//si primaire: masquer
		if(JSON.parse(recuperer('mes_donnees'))['Cycle'] === "Primaire") element_DOM('recup_edt').style.display ="none";
	}else{
		//console.log("on masque");
		element_DOM('recup_edt').style.display ="none";
	}
}

function afficher_liste_eleves(oui){
	if (oui) element_DOM('recup_eleves').style.display ="";
	if (!oui) element_DOM('recup_eleves').style.display ="none";
}


function check_maintenance(){

	var lien_script = "https://script.google.com/macros/s/AKfycbxgtxDhZ9g8-lo5e4aux1otiYyWsgg38TXmZunQ1VnPZ7JpjzA/exec";
	var moi = recuperer('identifiant_courant');
	var mon_type = recuperer('mon_type').split("_")[0];
	var si_moi_existe = moi && mon_type ? "&moi=" + moi + "&mon_type=" + mon_type : ""

	var url = lien_script + '?check_maintenance=oui'+ si_moi_existe
	//console.log("maintenance: " + url);
	return $.ajax({
	    url: url,

	});


}


function mettre_le_contact_etablissement(){
  var le_contact = contact_etablissement
  
  if($("#contact_etablissement")[0]){


    $("#contact_etablissement")[0].href = "mailto:"+le_contact
    $("#contact_etablissement")[0].innerText = le_contact
    stocker('contact_etablissement',le_contact)
  }


  if($("#logo_etablissement")[0]) $("#logo_etablissement")[0].src = "https://sekooly.github.io/SUPABASE/images/" + nom_fichier_logo
  if($("#site_etablissement")[0]) $("#site_etablissement")[0].href = site_etablissement
}



function chargement_a_larrivee(){
	
	chargement(true);
	fermer_side_bar()
	mettre_le_contact_etablissement()
	rendre_td_modifiable();
	mettre_mon_mode()
	mettre_les_soons()
	ajouter_multi_visio_si_non_eleve()

	//todo : pas de lien sur l'alerte pour les primaires
	var mon_cycle = JSON.parse(recuperer('mes_donnees'))['Cycle'];


	est_en_maintenance().then(function(data){
		
		var je_peux = JSON.parse(recuperer('mes_donnees'))['droit_hors_maintenance']
		//console.log(je_peux)
	    //console.log(data)
	    //on déconnecte si maintenance, sur site, sans droits
	    if (data === "oui" && (!window.location.href.includes("file:///") && !window.location.href.includes("http://localhost:8000")) && je_peux !=="oui"){
	    	deconnexion()
	    }
	})

	//si écolage pas ok -> deconnexion automatique
	if(!mon_ecolage_est_ok()) deconnexion()


	if(!plateforme_prete()){
		return initialisation_de_la_plateforme()

	}

	mettre_en_place_les_notifications();

	//affichage de logs SSI avec les droits
	var mes_droits = JSON.parse(recuperer('mes_donnees'))['Droits_modifs'];
	//console.log("mes_droits: " + mes_droits);
	afficher_logs(mes_droits==="oui");

	if(recuperer('mon_type').includes('Administration') && mes_droits === "oui"){
		mes_matieres = get_resultat(racine_data + '/Matieres?Cycle=eq.'+ mon_cycle + '&' + apikey)
		mes_matieres = mes_matieres.sort(function(a, b) {
		  return a.Classe_Matiere > b.Classe_Matiere;
		})
		stocker("mes_matieres",JSON.stringify(mes_matieres))
	}

	//affichage si dossier chargé OU admin_bis OU eleves
	var affichage_icone_edt = (recuperer('dossier_chargé')) || (recuperer('mon_type') === "Eleves");
	//afficher_edt(affichage_icone_edt);


	//affichage de la liste SSI admin OU (prof + dossier chargé)
	affichage_liste = recuperer('mon_type').includes('Administration') || (recuperer('mon_type') === "Profs" && recuperer('dossier_chargé')!==null && recuperer('dossier_chargé')!=="");
	//console.log("on affiche la liste : " + affichage_liste);
	afficher_liste_eleves(affichage_liste);


	afficher_bulletins(false)
	if(recuperer('mon_type').includes('Eleve')) afficher_bulletins(true)
	if(recuperer('mon_type').includes('Prof')) supprimer_bulle_bulletins()

	afficher_params_si_droits_et_admin()

	//barre de scroll tout en haut
	window.scrollTo(0,0);

	//calcul du grid gap entre les elements de la barre verticale
	calcul_grid_gap_barre_verticale();



	//accueil principal
	if ((recuperer('dossier_chargé') === '' || recuperer('dossier_chargé') === null) && recuperer('mes_donnees') !== ''){

		configurer_profil();

		//PAS d'ajout de fichier ni de devoirs à l'accueil ni de visio
		afficher_ajout(false);
		//TODO
		//afficher_devoirs(recuperer('mon_type')==="Eleves"); 
		afficher_devoirs(false);
		afficher_tri_fichiers(false);
		afficher_visio(false);
		//afficher_conseil_de_classe(false);

		
		//si c'est un admin > restaurer le type en admin
		if (recuperer('mon_type').includes('Administration')) stocker('mon_type','Administration');

		ajouter_les_dossiers_dynamiques();
		afficher_alerte_etablissement()


	//à l'arrivée sur la page: on ouvre tout dossier déjà chargé
	}else{

		var id_matiere = recuperer('dossier_chargé');
		var mes_matieres = JSON.parse(recuperer('mes_matieres'));

		var la_matiere = mes_matieres.filter(function(element) {
			if (element !== null) return element['ID_URL'] === id_matiere;
		});

		//console.log('on a trouvé: ' + JSON.stringify(la_matiere[0].Matiere) + '\n');
		var titre = la_matiere[0].Classe+ "\n" + la_matiere[0].Matiere;
		if (recuperer('mon_type') === 'Eleves')  titre = la_matiere[0].Matiere;
		

		//console.log("chargeons " + id_matiere + " de titre " + titre);

		afficher_alerte_etablissement()

		return charger_dossier(id_matiere,true, titre).then(function(){


			//si un fichier déjà ouvert: on l'ouvre
			if(recuperer('fichier_ouvert')){
				var fichier_ouvert = recuperer('fichier_ouvert');
				
				//console.log("on devra ouvrir " + fichier_ouvert);
				//ATTENDRE pour ouvrir
				element_DOM(fichier_ouvert).click();
			}

		})

		
	}

		


	chargement(false);
	
}

function afficher_params_si_droits_et_admin(){
	if (recuperer('mes_donnees') && recuperer("mon_type")){
		var mes_droits = JSON.parse(recuperer('mes_donnees'))['Droits_modifs'];
		var est_admin_avec_droits = recuperer("mon_type").includes("Admin") && mes_droits==="oui"
		afficher_parametres(est_admin_avec_droits)
	}else{
		afficher_parametres(false)
	}

}


function afficher_alerte_etablissement(){
	$("#texte_alerte")[0].innerText = recuperer_alerte_etablissement()
}

function afficher_alerte_etablissement_old(){
	alerte_etablissement().then(snap => {
		$("#texte_alerte")[0].innerText = snap
	})
}


function calcul_grid_gap_barre_verticale(){
	la_barre = element_DOM('barre_verticale');

	if(la_barre){
		//la_barre.style.gridGap = ($(window).height() / (element_DOM('barre_verticale').childElementCount+1)) + "px";
		la_barre.style.gridGap = ($(window).height() / (element_DOM('barre_verticale').childElementCount+1)) + "px";
	}
	

}

function valeursUniquesDeCetteKey(array, key){
	/*
	const unique = [...new Set(array.map(item => item[key]))];
	return unique;
	*/

	if(array !== "null" && array !== null){
		const key_str = [key]
		var flags = [], output = [], l = array.length, i;
		for( i=0; i<l; i++) {
			if (array[i] !== null){
			    if(flags[array[i][key_str]]) continue;
			    flags[array[i][key_str]] = true;
			    output.push(array[i][key_str]);
		   	}

		}
	}else{
		output = []		
	}

	return output
}


function ajouter_les_dossiers_dynamiques(){
//charger dynamiquement les dossiers avec l'ID = ID DOSSIER SUR DRIVE

	afficher_le_drive(false);

	var mes_matieres = JSON.parse(recuperer('mes_matieres'));	
			
	
	
	//admin: dossiers de toutes les classes PUIS toutes les matières de la classe
	if (recuperer('mon_type') ==="Administration" ){

		
		//on recupere les classes une seule fois, avec leur ID
		var les_classes = valeursUniquesDeCetteKey(mes_matieres, 'Classe');
		var lien_classes = valeursUniquesDeCetteKey(mes_matieres, 'classe_id');


		//les_classes.sort()

		/*
		console.log(les_classes);
		console.log(lien_classes);
		*/

		//pour chaque classe, on affiche le dossier correspondant
		les_classes.some(function (valeur_classe, index_classe){

			if (valeur_classe === undefined || index_classe === undefined) return -1;

			//console.log("lien_classes[index_classe]: " + lien_classes[index_classe])
			
			//on affiche tous les dossiers HORS 'tous' (inutile)
			if(valeur_classe !== "Tous") ajouter_le_dossier(valeur_classe, lien_classes[index_classe],recuperer('mon_type'));

		})


	}else{

		ajout_dossiers_matieres(mes_matieres);

	}

	stocker_temp('dossier_chargé','');
	stocker("les_fichiers",'');
	stocker('fichier_ouvert','');
	stocker('les_topics','');
	stocker('les_coms','');


}


//eleves: dossiers de matiere
//profs: dossiers de matiere
//admin: dossiers de matière au clic d'une classe
function ajout_dossiers_matieres(mes_matieres){

	mes_matieres.some(function (arrayItem) {

		if (arrayItem !== null){

			var ma_classe = arrayItem.Classe;
		    var ma_matiere = arrayItem.Matiere;
		    var couleur_matiere = "https://sekooly.github.io/SUPABASE/images/img_dossier_" + arrayItem.Couleur_matiere.replace(/ /g,"") + ".png" 

		    if (ma_classe !==undefined && ma_matiere !== undefined){
				
			    var mon_url_matiere = arrayItem.URL;
			    var mon_ID_matiere = mon_url_matiere.split("/").pop();

			    /*
			    console.log("on va ajouter " + ma_classe + " , " + ma_matiere);
			    console.log(' de URL ' +mon_ID_matiere );
			    console.log(' ');
				*/						

			    //créer un dossier (classe,matiere)
			    if (recuperer('mon_type') === "Profs" || recuperer('mon_type') === "Administration_bis"){
			    	ma_matiere = arrayItem.Classe_Matiere;
			    }

				ajouter_le_dossier(ma_matiere,mon_ID_matiere, recuperer('mon_type'),couleur_matiere);
				
			
			}else{
				return -1; //on arrete dès que c'est vide
			}
		}
	});
}



function ajouter_le_dossier(classe_matiere,URL_classe_matiere,type_identifiant, couleur_dossier){

	//console.log($("#"+URL_classe_matiere).length)
	//n'ajouter que si le dossier n'est pas encore existant
	if($("#"+URL_classe_matiere).length > 0 ) return -1

	if (type_identifiant === "Profs" || type_identifiant === "Administration_bis"){
		var la_classe = classe_matiere.substring(classe_matiere.lastIndexOf("(") + 1, classe_matiere.lastIndexOf("|"));
		var la_matiere = classe_matiere.substring(classe_matiere.lastIndexOf("|") + 1, classe_matiere.lastIndexOf(")"));
	}else{
		var la_classe = "";
		var la_matiere = classe_matiere;

	}

	var nouveau_div=creer_nouveau_dossier();
	creer_span_div(nouveau_div,URL_classe_matiere,la_classe,la_matiere,couleur_dossier);

	//console.log("ajout du listener NON admin...");
	//pas dossier des classes
	//pas dossier des fichiers -> intermédiaire
	if (type_identifiant !== "Administration" && type_identifiant !== "Administration_final"){
		ajouter_listener_dossier(URL_classe_matiere);
	}else{		
		ajouter_listener_dossier_non_final(URL_classe_matiere);
	}
	//console.log("listener ajouté");

}

function ajouter_listener_dossier_non_final(id){

	
	element_DOM(id).addEventListener('click', function(e) {
		

		$('#accueil_utilisateur').off('click');
			//on a ouvert un dossier de classe et on veut récupérer les matières dedans
		//console.log ("on a cliqué: " + e.target.id))

		
		//on change le titre si ça vient d'un clic de dossier (ET NON BOUTON PRECEDENT)
		if (element_DOM(e.target.id)) element_DOM('accueil_utilisateur').innerHTML = element_DOM(e.target.id).innerText;

		//on efface les dossiers actuels
		element_DOM('liste_matieres').innerHTML = "";

		//on garde uniquement les matières correspondant à CETTE CLASSE
		//on crée les nouveaux dossiers de matières de CETTE CLASSE avec leurs lien
		stocker('mon_type','Administration_bis');
		var toutes_mes_matieres = JSON.parse(recuperer('mes_matieres'));
		var mes_matieres = toutes_mes_matieres.filter(function(element) {
			//console.log(JSON.stringify(element))
			if (element !== null) return element['classe_id'] === e.target.id ;
		});
		//console.log("mes_matieres : " + JSON.stringify(mes_matieres));
		ajout_dossiers_matieres(mes_matieres);

		//on ajoute le bouton retour (qui créera automatiquement les dossiers parents au clic)
		avec_bouton_back(true);

		//afficher l'EDT
		//afficher_edt(true);

		//afficher la visio
		//afficher_visio(true);

		//afficher le conseil de classe
		//afficher_conseil_de_classe(true);

		//barre de scroll tout en haut
		window.scrollTo(0,0);

	});

}

function ajouter_listener_dossier(id){

	
	element_DOM(id).addEventListener('click', function(e) {
	  //console.log ("on a cliqué: " + e.target.id);

	  charger_dossier(e.target.id,true, element_DOM(id).innerText);

	});

}



function creer_nouveau_dossier() {
    var mon_div=document.createElement("div");
    element_DOM('liste_matieres').appendChild(mon_div);
    return mon_div;
}

function creer_span_div(mon_div,URL_classe_matiere,la_classe,la_matiere,couleur_dossier) {
     
	if (la_classe !== '') { 
		var nom_classe = la_classe + '<br> ';
	}else{
		var nom_classe = "";
	}

	if(recuperer('mon_type') !== "Administration"){
		var icone = couleur_dossier;
	}else{
		var icone = "https://sekooly.github.io/SUPABASE/images/dossier_drive.png";
	}


     // var quizDiv = element_DOM("quizDiv");
     mon_div.innerHTML = '<a href="javascript:void(0)" > <span id="' + URL_classe_matiere + '"> <img class = image_centre id="'+ URL_classe_matiere + '" src="'+ icone +'">  ' + nom_classe + la_matiere + ' </a> </span>';
     
 }

function mettre_aujourdhui(){
	
	element_DOM('la_date_effet').innerHTML = "";

	var maintenant = moment();
	var id_date = maintenant.format('yyyy-MM-DD');
	var valeur_date = "Aujourd'hui";
	
	ajouter_date_filtre(id_date,valeur_date,true);
}

function ajouter_date_filtre(id_date,valeur_date,valeur_aujd){

	//on zappe si c'est aujourd'hui
	if(id_date === moment().format("yyyy-MM-DD") && !valeur_aujd ) return -1;

	var une_date_html = '<option value="' + id_date + '">' + valeur_date  + '</option>' 
	var une_date = document.createElement('div');
	une_date.innerHTML = une_date_html;

	element_DOM('la_date_effet').appendChild(une_date.firstChild);
}

function charger_dossier(id_dossier,final_booleen,titre){



	//le dossier est déjà chargé
	if (id_dossier !== "" && id_dossier !== null) {
		
		$('#accueil_utilisateur').off('click');

		$('#la_date_effet').on('change click',function(e){		
			filtrer_date_effet();						
		});

		//on enleve les topics et les coms de la matiere
		stocker('les_topics','');
		stocker("topic_chargé",'');
		stocker("nb_com_actuel",'')
		stocker("les_coms",'');

		//à l'ouverture d'une classe par un admin : il se transforme en élèves (toutes matières) avec des droits de profs (ajouter un fichier)

		chargement(true);
		afficher_les_dossiers_dynamiques(false);

		//changer le titre du document 
		element_DOM('accueil_utilisateur').innerHTML = titre;

		//ajouter un bouton back
		avec_bouton_back(true);

		//afficher les devoirs
		afficher_devoirs(true);


		//afficher le tri par date
		afficher_tri_fichiers(true);

		//afficher la viso
		afficher_visio(true);

		//afficher le conseil de classe
		//afficher_conseil_de_classe(true);

		//afficher l'EDT
		//afficher_edt(true);
			
		//ajouter le bouton ajout et LISTE pour profs 
		if (recuperer('mon_type')=== 'Profs'){
			afficher_ajout(true);
			afficher_liste_eleves(true);
			afficher_bulletins(false);

		//afficher le bouton ajout pour admins S'IL A LES DROITS
		}else if(recuperer('mon_type').includes('Administration')) {

			var mes_droits = JSON.parse(recuperer('mes_donnees'))['Droits_modifs'];
			//console.log("mes_droits: " + mes_droits);

			afficher_ajout(mes_droits==="oui");
			//on affiche aussi les logs de la classe
			afficher_liste_eleves(true);
			afficher_bulletins(true);

		//les élèves n'ont pas le droit d'ajouter des fichiers, ni de voir les logs
		}else{
			afficher_ajout(false);
			afficher_liste_eleves(false);
			afficher_bulletins(true);
		}

		//on montre qu'on charge le dossier final
		if (recuperer('mon_type') === "Administration_bis") stocker('mon_type','Administration_final');
		
		//on inclut la fonctionnalité des messages ICI
		afficher_discussions(true);


		//console.log("c'est recupéré");
		afficher_le_drive(true);


		
		
		//on a chargé un dossier: changement de la variable locale
		stocker_temp('dossier_chargé',id_dossier);
		
		//on recupere les fichiers deja en ligne
		//console.log("on va recuperer les fichiers");
		return recuperer_les_fichiers(id_dossier);

	}

}




function recuperer_les_fichiers(id_dossier){
	chargement(true);

	//on vide les zones des fichiers
	enlever_alerte_vide(false);
	
	nom_table = "Fichiers"
	nom_champ_reference = "id_dossier"
	valeur_champ_reference = recuperer('dossier_chargé')
	nom_champ_a_chercher = ""
	return rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher).then(data => {
		
		
		
		les_fichiers = "[]"
		if (data.length > 0) les_fichiers = JSON.stringify(data)
		stocker("les_fichiers",les_fichiers);

		//on traite les données ici
		traitement_fichiers_recus();
		chargement(false)


	}).catch(error => {
		console.error(error)
		alert('Erreur : fichiers impossibles à récupérer pour cette classe.')
		chargement(false)

	})


}

function enlever_alerte_vide(garder_liste){
	if(element_DOM('alerte_vide'))  element_DOM('alerte_vide').remove();

	if (garder_liste === false){
		Array.from(document.getElementsByClassName("ma_liste")).forEach(
		    function(element, index, array) {
		        element.innerHTML = "";
		        element_DOM('titre_' + element.id).style.display="none";
		    }
		);
	}
}


function dossier_vide(garder_liste){

	enlever_alerte_vide(garder_liste);

	var alerte = document.createElement('div');
	alerte.id = "alerte_vide";
	alerte.style.top = "80px";
	alerte.style.position = "relative";
	var la_date_choisie = $("#la_date_effet").find("option[value='" + $("#la_date_effet").val() + "']").text();
	alerte.innerHTML = '<i style="width: max-content;color: #d9d8db;">Il n\'y a pas encore de fichiers pour ' + la_date_choisie + '.</i>';

	afficher_le_drive(false);
	document.body.insertBefore(alerte,element_DOM('gros_conteneur')); 
}

function la_date_yyyy_mm_dd(champ_date){
	var ma_date = new Date(Date.parse(champ_date));
    var d = ma_date.getDate();
    var m = ma_date.getMonth() + 1;
    var y = ma_date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

function initialisation_date_tri(les_fichiers){

	//aujd au debut
	mettre_aujourdhui();

	var liste_unique_dates_effet = valeursUniquesDeCetteKey(les_fichiers,'date_effet');

	var liste_unique_dates_effet = liste_unique_dates_effet.sort();

	var liste_unique_dates_effet_valeurs = liste_unique_dates_effet.map(element => afficher_date(element,true)); //sans l'heure




	for (var i = 0; i < liste_unique_dates_effet.length; i++) {
		var id_date = la_date_yyyy_mm_dd(liste_unique_dates_effet[i]);
		var valeur_date = liste_unique_dates_effet_valeurs[i];
		
		ajouter_date_filtre(id_date,valeur_date);

	}

	ajouter_date_filtre("Tous","Tous les fichiers");
	var date_aujourdhui = moment().format('yyyy-MM-DD');

	//par défaut on met aujourd'hui
	element_DOM('la_date_effet').value = date_aujourdhui;


}


function traitement_fichiers_recus(){

	var les_fichiers_str = recuperer("les_fichiers");
	var les_fichiers = 	JSON.parse(les_fichiers_str);
	initialisation_date_tri(les_fichiers);


	//si NON admin -> on enlève les bulletins
	if(!recuperer('mon_type').includes('Administration')){
		les_fichiers = les_fichiers.filter(e => e['categorie_fichier'] !== "Bulletins")
	}

	//console.log(les_fichiers.length)
	//si pas de fichier: on affiche un message de vide
	if(les_fichiers_str === "" || les_fichiers.length === 0){
		dossier_vide(false);

	}else{
		enlever_alerte_vide(false);

		//trier par order alphabetique du nom_fichier
		les_fichiers.sort(function(a, b){
		    if(a.nom_fichier < b.nom_fichier) { return -1; }
		    if(a.nom_fichier > b.nom_fichier) { return 1; }
		    return 0;
		});

		//catégorisation - chaque fichier a son div de catégorie
		les_fichiers.forEach(function(valeur){

			//console.log(valeur);
			
			ma_categorie = valeur['categorie_fichier'].toLowerCase();
			
			//afficher la date limite si c'est un DEVOIR
			var nom_fichier = valeur['nom_fichier'];
			var extension_fichier = nom_fichier.split(".").pop().toLowerCase();

			var la_date_limite = afficher_date(valeur['la_date_limite'],true); // SANS l'heure
			var lheure_limite = valeur["lheure_limite"] ? " à " + valeur["lheure_limite"] : "";

			//la bonne date limite pour les examens (si 2 jours)
			if(ma_categorie==="examens" && valeur['la_date_limite'].length === 0){
				date_debut = la_date_yyyy_mm_dd(valeur['date_effet']);
				date_debut = moment(new Date(date_debut), "yyyy-MM-DD")

				//console.log("date_debut : " + date_debut)

				la_date_limite = date_debut;
				la_date_limite = la_date_limite.add(2,'days');
				la_date_limite = la_date_yyyy_mm_dd(la_date_limite)
				//console.log("la_date_limite : " + la_date_limite)
				la_date_limite = afficher_date(la_date_limite,true);
				
				lheure_limite = " à 23h59";

				//console.log("de " + afficher_date(date_debut._i,true));
				//console.log("au " + la_date_limite + lheure_limite);
			}

			//on n'affiche le coef que si > 0
			valeur_coef = valeur['coefficient_rendu'] > 0 ? "<b>Coeff. "+valeur['coefficient_rendu']+"</b>" : ''
			if(ma_categorie ==="devoirs" || ma_categorie ==="examens") nom_fichier = valeur['nom_fichier'] + '<rouge><i>(à rendre avant le ' + la_date_limite + lheure_limite +')<br>'+valeur_coef+'</i></rouge>';

			
			var nom_drive = 'drive_' + ma_categorie;
			//console.log(nom_drive)

			//console.log(valeur['heure_effet']);
			ajouter_un_fichier(valeur['id_fichier'],nom_fichier,nom_drive,extension_fichier, valeur['date_effet'], valeur['heure_effet'], valeur['est_telechargeable'], valeur['coefficient_rendu'], valeur['la_date_limite'], valeur['lheure_limite'], valeur['periode_bulletin'], valeur['destinataire_par_page'] );

		});

		
		//n'afficher que les fichiers dont la date d'effet = date actuelle et drive vide masqué
		filtrer_date_effet();

		chargement(false);


	}

	//on n'affiche rien si finalement y a pas de dossier chargé
	if (recuperer('dossier_chargé') === "" || recuperer('dossier_chargé') === null) decharger_dossier_final();


	chargement(false);

}

function garder_les_manuels(){	

	//si au moins un manuel -> afficher
	if ($("#drive_manuels")[0].children.length > 0){

		//toujours afficher les manuels
		$("#titre_drive_manuels")[0].style.display = "initial"
		$("#drive_manuels")[0].style.display = ""

		//toujours afficher les manuels
		for (var i = $("#drive_manuels")[0].children.length - 1; i >= 0; i--) {
			$("#drive_manuels")[0].children[i].style.display = ""
		}
	}


}

function highlightDays(dates,date) {
	for (var i = 0; i < dates.length; i++) {
		if (dates[i] == date) {
			return [true, 'highlight'];
		}
	}
	return [true, ''];
}   


//considérer que les VISIBLES
function masquer_drive_vide(){
	
	Array.from(document.getElementsByClassName("ma_liste")).forEach(function(valeur, index, array) {
		
		
		var nombre_de_fils = $('#'+valeur['id']).find('.span_un_fichier:visible').length;

		if(nombre_de_fils === 0){
			element_DOM(valeur.id).style.display="none";
			element_DOM('titre_' + valeur.id).style.display="none";

		}else{
			element_DOM(valeur.id).style.display="grid";
			element_DOM('titre_' + valeur.id).style.display="initial";

		}

	});

	//aucun fichier à la date choisie: alerte
	if($('#gros_conteneur').find('.span_un_fichier:visible').length === 0)
		dossier_vide(true);

}


function ajouter_un_fichier(id_fichier,nom_fichier,nom_drive,extension_fichier,date_effet,heure_effet,est_telechargeable,coefficient_rendu, date_limite, heure_limite, periode_bulletin, destinataire_par_page){




	var image_fichier = "https://sekooly.github.io/SUPABASE/images/img_icone_" + extension_fichier + ".png";
	
	//console.log("on va ajouter " + nom_fichier + " dans " + nom_drive);

	/*
	console.log("date_effet: " + date_effet);
	console.log("la_date_yyyy_mm_dd(date_effet): "  + la_date_yyyy_mm_dd(date_effet))
	*/

	//todo: sans téléchargement EN PLUS DE YOUTUBE
	var padding_yt = est_telechargeable === "oui" ?  "" : ' style="padding-top: 25%;" ' 
	var telecharger_le_fichier = est_telechargeable === "oui" ? '<img alt="télécharger" src="https://sekooly.github.io/SUPABASE/images/img_download.png" onclick="telecharger_fichier(event,this)" id="telecharger" class="download_fichier">' : ""
	var periode_bulletin = periode_bulletin ? " periode_bulletin='"+periode_bulletin+"'" : ""
	var destinataire_par_page = destinataire_par_page ? " destinataire_par_page='"+destinataire_par_page+"'" : ""
	var code_html = '<span oncontextmenu="autoriser_clic_droit_supprimer_et_renommer(event,this)" onclick="ouvrir_fichier(this)" class="span_un_fichier" id="' + id_fichier + '" ma_date_effet="'+ la_date_yyyy_mm_dd(date_effet)+'" mon_heure_effet="'+ heure_effet + '" ma_date_limite="'+ la_date_yyyy_mm_dd(date_limite)+'" mon_heure_limite="'+ heure_limite +'" est_telechargeable="'+est_telechargeable+'"    coefficient_rendu='+ coefficient_rendu + periode_bulletin  + destinataire_par_page + '    >' + telecharger_le_fichier + '<img id="' + id_fichier + '" src="'+ image_fichier +'" class="un_fichier" '+padding_yt+'>' + nom_fichier +'</span>';

	//console.log(code_html);

	var mon_fichier = document.createElement('div');
	mon_fichier.innerHTML = code_html;
	//console.log(mon_fichier);
	while(mon_fichier.firstChild) {
	    element_DOM(nom_drive).appendChild(mon_fichier.firstChild);
	}

	//si une image n'est pas chargée on met l'image par défaut
	$('#' + id_fichier + ' .un_fichier').on("error",function(e){

		console.log("on a une erreur " + JSON.stringify(e));
		$('#' + id_fichier + ' .un_fichier').attr("src","https://sekooly.github.io/SUPABASE/images/img_fichier.png");
		//console.log("on a changé sa source");
	});

	
	ajouter_cadenas_examen(id_fichier,nom_drive);


}

function ajouter_cadenas_examen(id_fichier,nom_drive){
	//si Examens: si NON OUVRABLE -> cadenas
	if (nom_drive==="drive_examens"){
		var non_ouvrable = fichier_ouvrable(id_fichier,false)===false;

		if(non_ouvrable){

			$(".span_un_fichier#"+id_fichier).append('<img alt="verrouillé" id="locked" src="https://sekooly.github.io/SUPABASE/images/img_cadenas.png" class="locked">')
		}

	}
}

function bool_examen_terminé(drive_parent, le_span_un_fichier){


	var date_debut = le_span_un_fichier.getAttribute('ma_date_effet');
	
	//fin = début + 48h
	var date_fin = moment(date_debut + " 23:59","yyyy-MM-DD hh:mm").add(2,'days')._d;

	var examen_terminé = new Date(moment()) > date_fin;
	return (drive_parent === "drive_examens" && examen_terminé);
}

function fichier_ouvrable(id_fichier,bouton_telecharger,ceci_bouton_telecharger){
	var mon_type = recuperer('mon_type');

	if(bouton_telecharger) {
		id_fichier = ceci_bouton_telecharger.parentNode.id;
	}

	var le_span_un_fichier = $("span#"+id_fichier+".span_un_fichier")[0];
	var drive_parent = le_span_un_fichier.parentNode.id;

	var lheure_effet = le_span_un_fichier.getAttribute('mon_heure_effet') ? le_span_un_fichier.getAttribute('mon_heure_effet') : "07:30"
	//var la_date_effet = new Date(le_span_un_fichier.getAttribute('ma_date_effet') + ' ' + lheure_effet); 
	var la_date_effet = moment(le_span_un_fichier.getAttribute('ma_date_effet') + ' ' + lheure_effet); 
	//console.log(la_date_effet)
	var date_heure_aujourdhui = moment(maintenant())

	//si drive_corrections ET fichier futur ET élève
	if(drive_parent === "drive_corrections"
		&& (!mon_type.includes("Admin") && !mon_type.includes("Prof"))
		&& la_date_effet > date_heure_aujourdhui){

		//console.log("ouvrable: " + false);
		return false;
	}

	



	/******************EXAMENS********************/
	var mes_donnees = JSON.parse(recuperer('mes_donnees'));
	var Droit_acces_anticipe_examen = mes_donnees['Droit_acces_anticipe_examen'] ? mes_donnees['Droit_acces_anticipe_examen'] === "oui" : mon_type==="Profs";
	//console.log("Droit_acces_anticipe_examen: " + Droit_acces_anticipe_examen)
	var examen_terminé = bool_examen_terminé(drive_parent, le_span_un_fichier);

	//console.log("examen_terminé: " + examen_terminé);

	
	//si drive_examens ET fichier (passé y a 3 jours ou futur) ET sans droits
	if(drive_parent === "drive_examens"
		&& (!Droit_acces_anticipe_examen)
		&& (la_date_effet > date_heure_aujourdhui || examen_terminé)
	){

		//console.log("ouvrable: " + false);
		return false;

	}else{
		//console.log("ouvrable: " + true);
	}

	//console.log("ouvrable: " + true);
	return true;
}

/********************* OUVRIR UN FICHIER ****************************/
function ouvrir_fichier(ceci){
	var id_fichier = ceci.id;
	var le_span_un_fichier = $('[id='+id_fichier+'].span_un_fichier')[0];

	if(!fichier_ouvrable(id_fichier)){

		var lheure_effet = le_span_un_fichier.getAttribute('mon_heure_effet') ? le_span_un_fichier.getAttribute('mon_heure_effet') : "07:30";
		//console.log(lheure_effet)

		var drive_parent = le_span_un_fichier.parentNode.id;
		//console.log(drive_parent);
		
		//todo: decommenter aux prochaines périodes d'examens
		
		if(bool_examen_terminé(drive_parent, le_span_un_fichier)){
			alert("Ce sujet d'examen n'est plus disponible.");
		}else{
			date_heure_fichier = ceci.attributes['ma_date_effet'].value+" " + lheure_effet
			alert("Ce fichier n'est pas disponible avant "+ afficher_date_old( moment(date_heure_fichier).format("DD/MM/YYYY HH:mm"))   + '.');
		}
		return -1;
		



	}else{

		stocker('fichier_ouvert',id_fichier);

		//on ajoute le nom du fichier (TEXTE DANS LE SPAN)
		var nom_fichier = $("span#"+id_fichier+".span_un_fichier").contents().filter(function(){ 
		  return this.nodeType == 3; 
		})[0].nodeValue;

		nom_fichier = rfc3986EncodeURIComponent(nom_fichier);
		//visualiser(nom_fichier,id_fichier);
		visualiser(nom_fichier,id_fichier, "", "", le_span_un_fichier.getAttribute('est_telechargeable')!=="oui")
	}

}

/********************* DOWNLOAD UN FICHIER ****************************/
function telecharger_fichier(event,ceci){

	if(!fichier_ouvrable(id_fichier,true,ceci)){

		le_span_un_fichier = $('[id='+id_fichier+'].span_un_fichier')[0];
		var lheure_effet = le_span_un_fichier.getAttribute('mon_heure_effet') ? le_span_un_fichier.getAttribute('mon_heure_effet') : "07:30";

		alert("Ce fichier n'est pas disponible avant "+afficher_date(ceci.parentNode.attributes['ma_date_effet'].value+" " + lheure_effet));
		return -1;
	}

	chargement(true);
	event.stopPropagation();
	var id_fichier=ceci.parentNode.id;
	window.location.href = "https://drive.google.com/uc?export=download&id=" + id_fichier;
		chargement(false);

}


//VIA ON CONTEXT MENU:
/********************* RENOMMER UN FICHIER 
/********************* MODIFIER CATEGORIE FICHIER SSI NON DEVOIR
/********************* MODIFIER DATE EFFET FICHIER
/********************* SUPPRIMER UN FICHIER ****************************/
function autoriser_clic_droit_supprimer_et_renommer(e,ceci){


	if(recuperer('mon_type')==="Eleves") return -1;
	if(recuperer('mon_type').includes("Administration")){
		var mes_droits = JSON.parse(recuperer('mes_donnees'))['Droits_modifs'];
		if (mes_droits!=="oui") return -1;
	}

	//si dossier vie scolaire et non admin: pas de clic droit
	if(!recuperer('mon_type').includes('Admin') && element_DOM('accueil_utilisateur').innerText.includes('Vie scolaire') ){		
		return -1;
	}


	//pour un manuel -> seulement les admin avec des droits
	if ($("#"+ceci.id)[0].parentNode.id === "drive_manuels"){
		if(!recuperer('mon_type').includes("Admin")){
			return -1;
		}else{
			if (JSON.parse(recuperer('mes_donnees'))['Droits_modifs']!=="oui") return -1;
		}
	}

	e.preventDefault();
	e.stopPropagation();

    var id_fichier = ceci.id;

    //supprimer tous les autres clic droit
	$('.clic_droit').remove();

	
	ajouter_fonction_clic_droit(e,ceci,0,"renommer_fichier","Renommer",id_fichier);
	ajouter_fonction_clic_droit(e,ceci,1,"recategoriser_fichier","Recatégoriser",id_fichier);
	ajouter_fonction_clic_droit(e,ceci,2,"changer_date_effet","Date d\'effet",id_fichier);

	//si devoir/examen -> on peut changer la date limite aussi -> offset = 1, sinon 0
	if($("#"+ceci.id)[0].parentNode.id === "drive_devoirs" || $("#"+ceci.id)[0].parentNode.id === "drive_examens"){
		ajouter_fonction_clic_droit(e,ceci,3,"changer_date_limite_rendu","Date limite de rendu",id_fichier);
		mon_offset = 1	
	}else{
		mon_offset = 0
	}

	//si c'est un bulletin -> on peut changer 1) la période du bulletin 2) la correspondance page -> élève 
	if($("#"+ceci.id)[0].parentNode.id  === "drive_bulletins"){
		ajouter_fonction_clic_droit(e,ceci,3,"changer_periode_bulletin","Période du bulletin",id_fichier);
		//ajouter_fonction_clic_droit(e,ceci,4,"changer_eleve_par_page_bulletin","Ré-assigner pages",id_fichier);
		mon_offset = mon_offset === 1 ? 2 : 1
	}
	
	//ajouter l'offset

	ajouter_fonction_clic_droit(e,ceci,3+mon_offset,"changer_coef","Coefficient",id_fichier,null,$("#"+id_fichier)[0].getAttribute("coefficient_rendu"));
	ajouter_fonction_clic_droit(e,ceci,4+mon_offset,"changer_telechargeable","Téléchargeable ou non",id_fichier);
	ajouter_fonction_clic_droit(e,ceci,5+mon_offset,"supprimer_fichier","Supprimer",id_fichier);

	//au clic de n'importe où : ça enleve le clic droit
	$(document).click(function() {
		$('.clic_droit').remove();	
		$('#clic_droit_titres_param').remove();    		

	});

}




function changer_eleve_par_page_bulletin(id_fichier,ancien_destinataire_par_page){
	chargement(true)
	nb_pages = recuperer_nb_pages_pdf(id_fichier)
	chargement(false)

	ancien_destinataire_par_page = '{"nouveau":"1","test":"2"}'
	elements_html = modif_attribution_page_eleve(nb_pages, ancien_destinataire_par_page)
	creer_mini_popup("Re-attribuez chaque page:", elements_html,"Attribuer","envoyer_modif_destinataires_bulletins('"+ancien_destinataire_par_page+"')")
	



}


function envoyer_modif_destinataires_bulletins(ancien_destinataire_par_page){

 	chargement(true)

 	//console.log(id_fichier)

	nouveau_destinataire_par_page = {1:"truc"}
	if(nouveau_destinataire_par_page === ancien_destinataire_par_page) return -1

	//on modifie dans la bdd 
	nom_table = "Fichiers"
	nom_champ_reference = "id_fichier"
	valeur_champ_reference = id_fichier
	nouveau_data = {
		'destinataire_par_page' : nouveau_destinataire_par_page
	}
	actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)
	
	setTimeout(function(){
		location.reload();
	}, 1000);

	chargement(false);

}




function modif_attribution_page_eleve(nombre_pages, ancien_destinataire_par_page){

	liste_eleves = JSON.parse(ancien_destinataire_par_page)
	console.log(liste_eleves)

	select_liste_eleves = '<select style="width: 80%;" name="numero_page" id="numero_page"><option value="eleve_de_cette_page">eleve_de_cette_page</option></select>'
	//console.log(select_liste_eleves)


	attribution = '<form id="attribution" style="margin-top: 20px;">'
	for (numero_page = 1 ; numero_page <= nombre_pages ; numero_page++){
		nom_eleve = Object.keys(liste_eleves).find(key => liste_eleves[key] === numero_page.toString())
		attribution = attribution + '<div><label for="'+numero_page+'">Page n°'+numero_page+':' + select_liste_eleves.replace(/"numero_page"/g,numero_page).replace(/"eleve_de_cette_page"/g,nom_eleve) + '</label></div>'
	}
	attribution = attribution + '</form>'
	
	return attribution
	

}




function changer_periode_bulletin(id_fichier,ancienne_periode){

	ancienne_periode = $("[id='"+id_fichier+"']")[0].getAttribute("periode_bulletin")
	var elements_html = `<div><label for="periode_bulletin"><select style="width: 60%;" id="periode_bulletin" name="periode_bulletin"><option value="PREMIER TRIMESTRE">PREMIER TRIMESTRE</option><option value="DEUXIEME TRIMESTRE">DEUXIEME TRIMESTRE</option><option value="TROISIEME TRIMESTRE">TROISIEME TRIMESTRE</option><option value="ANNUEL">ANNUEL</option></select></label></div>`
	creer_mini_popup("Choisissez la nouvelle période de ce bulletin:", elements_html,"Modifier la période","changer_periode('"+id_fichier+"','"+ancienne_periode+"')")
	$("#periode_bulletin")[0].value = ancienne_periode


}

function changer_periode(id_fichier,ancienne_periode){
	nouvelle_periode = $('#periode_bulletin')[0].value
	if(nouvelle_periode === ancienne_periode) return -1

 	chargement(true)

 	//console.log(id_fichier)

	//on modifie dans la bdd 
	nom_table = "Fichiers"
	nom_champ_reference = "id_fichier"
	valeur_champ_reference = id_fichier
	nouveau_data = {
		'periode_bulletin' : nouvelle_periode
	}
	actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)
	
	setTimeout(function(){
		location.reload();
	}, 1000);

	chargement(false);
}

function changer_telechargeable(id_fichier,ancien_telechargeable){
	
	//console.log(id_fichier)
	var categorie_actuelle = $("[id='"+id_fichier+"'].span_un_fichier")[0].parentNode.id.split("_")[1];
	var extension_fichier =  $("[id='"+id_fichier+"']")[0].innerText.split('.')[1].split('\n')[0]


	//console.log(extension_fichier)
	if(categorie_actuelle.includes("manuels")){
		alert("Impossible de rendre un manuel téléchargeable.");
		return -1;
	}else if(categorie_actuelle.includes("bulletins")){
		alert("Impossible de rendre un fichier de bulletins téléchargeable.");
		return -1;
	}else if (extension_fichier === "youtube"){
		alert("Impossible de rendre une vidéo youtube téléchargeable.");
		return -1;
	}



	var ancien_telechargeable = $(".span_un_fichier[id='"+id_fichier+"']")[0].children[0].id === "telecharger" ? "oui" : "non"

	var nouveau_telechargeable = prompt("Indiquez si 'oui' ou 'non' vous voulez que ce fichier soit téléchargeable:",ancien_telechargeable)

	if(nouveau_telechargeable === null) return -1

	chargement(true);

	nouveau_telechargeable = nouveau_telechargeable === "oui" ? "oui" : "non"


	if(nouveau_telechargeable === ancien_telechargeable) return -1;



	//on modifie dans la bdd 
	nom_table = "Fichiers"
	nom_champ_reference = "id_fichier"
	valeur_champ_reference = id_fichier
	nouveau_data = {
		'est_telechargeable' : nouveau_telechargeable
	}
	actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)
	
	setTimeout(function(){
		location.reload();
	}, 1000);

	chargement(false);


}

function changer_coef(id_fichier,ancien_coef){

	//console.log(id_fichier);
	var categorie_actuelle = $("[id="+id_fichier+'].span_un_fichier')[0].parentNode.id.split("_")[1];

	if(!categorie_actuelle.includes("devoirs") && !categorie_actuelle.includes("examens")){
		alert("Impossible de changer le coefficient d'un fichier différent d'un sujet de devoir/examen.");
		return -1;
	}




	var nouveau_coef = prompt("Indiquez le nouveau coefficient du rendu:",ancien_coef)
	/*console.log(nouveau_coef)
	console.log(nouveau_coef >= 0 )*/
	if(nouveau_coef === null) return -1
	nouveau_coef = Number(nouveau_coef)

	if(!(nouveau_coef >= 0)){
		alert("Impossible de changer le coefficient : merci de saisir un coefficient valide (>0).")
		return -1;
	}

	if(nouveau_coef === ancien_coef) return -1;


	chargement(true);

	//on modifie dans la bdd 
	nom_table = "Fichiers"
	nom_champ_reference = "id_fichier"
	valeur_champ_reference = id_fichier
	nouveau_data = {
		'coefficient_rendu' : nouveau_coef
	}
	actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)
	
	setTimeout(function(){
		location.reload();
	}, 1000);

	chargement(false);

}



function ajouter_fonction_clic_droit(e,ceci,position,fonction,affichage_nom_fonction,id_fichier, nom_class_clic_droit, nom_fichier){

	if(!nom_fichier) nom_fichier= decodeURI(encodeURIComponent(ceci.innerText).split('%0A')[0]);

	var span_clic_droit = document.createElement('span');

	if(!nom_class_clic_droit) nom_class_clic_droit = "clic_droit"
	span_clic_droit.setAttribute('class',nom_class_clic_droit);

	span_clic_droit.setAttribute('id',fonction);
	span_clic_droit.setAttribute('onclick','event.stopPropagation();'+fonction+'("' + id_fichier +'","'+ nom_fichier+'")');

	var decalage_y = position * 40;

	span_clic_droit.style.top = Number(e.clientY + decalage_y) + 'px';
	span_clic_droit.style.left = e.clientX + 'px';
	span_clic_droit.innerHTML = affichage_nom_fonction;

	ceci.appendChild(span_clic_droit);

	//au survol ça devient noir
	$(span_clic_droit).on('mouseover',function(e){
		span_clic_droit.style.filter = 'invert(100%)';
	});
	$(span_clic_droit).on('mouseout',function(e){
		span_clic_droit.style.filter = '';
	});
	$(span_clic_droit).on('click',function(e){
		//supprimer tous les div en cliquant n'importe où
		$('.clic_droit').remove();
	});

	return span_clic_droit;
}

function recategoriser_fichier(id_fichier,nom_fichier){

	//console.log(id_fichier);
	var categorie_actuelle = $("[id="+id_fichier+'].span_un_fichier')[0].parentNode.id.split("_")[1];
	//alert(categorie_actuelle)
	if(categorie_actuelle.includes("devoirs")){
		alert("Impossible de recatégoriser un devoir.");
		return -1;
	}else if(categorie_actuelle.includes("examen")){
		alert("Impossible de recatégoriser un examen.");
		return -1;
	}else{

		categorie_actuelle = categorie_actuelle.charAt(0).toUpperCase() + categorie_actuelle.slice(1);

		var liste_choix_categories = Array.from($("#categorie_choisie")[0].children).map(valeur => valeur.value);

		var liste_options = liste_choix_categories.map(valeur=> '<option value="'+valeur+'">'+valeur+'</option>');

			var ma_liste_categories = '<select id="ma_liste_categories" style="width: 80%;">'+liste_options+'</select>';

			creer_mini_popup(nom_fichier,ma_liste_categories,"Recatégoriser","mettre_a_jour_categorie('"+id_fichier+"')",categorie_actuelle,"ma_liste_categories");



	}



}

function creer_mini_popup(titre,elements_html,nom_bouton,fonction_bouton,valeur_actuelle,id_element_valeur_actuelle, valeur_actuelle_bis, id_element_valeur_actuelle_bis,taille_du_titre){

	$("#mini_popup").remove();

	//on ajoute le bouton quitter
	var bouton_quitter = '<div id="entete-fenetre" style="display: inline-flex;float: right;"><img  alt="X" src="https://sekooly.github.io/SUPABASE/images/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div>';

	var taille = taille_du_titre ? 'style="font-size: '+taille_du_titre+'px;"' : ""
	var titre_html = '<div '+taille+' >'+titre+'</div>'


	var valider_changement = '<button type="button" class="rendre" onclick="'+fonction_bouton+'">'+nom_bouton+'</button>'

	var mini_popup_html = '<div id="mini_popup">'+bouton_quitter+titre_html+elements_html+valider_changement+'</div>';

	var mini_popup = document.createElement('div');
	mini_popup.innerHTML = mini_popup_html;
	document.body.appendChild(mini_popup.firstChild);

	if ($("#"+id_element_valeur_actuelle)[0]) $("#"+id_element_valeur_actuelle)[0].value=valeur_actuelle;
	
	if($("#"+id_element_valeur_actuelle_bis)[0])
		$("#"+id_element_valeur_actuelle_bis)[0].value=valeur_actuelle_bis;


	ajuster_boutons_fenetre();
	ajuster_boutons_fenetre(true);
	choisir_height_viz_si_pdf();
}

function mettre_a_jour_categorie(id_fichier_valeur){

	var nouvelle_categorie_valeur = $("#ma_liste_categories")[0].value;
	
	if(impossible_de_cliquer()) return -1;
	if(nouvelle_categorie_valeur==="--") return -1;
	if(nouvelle_categorie_valeur === "Devoirs" || nouvelle_categorie_valeur === "Examens"){
		//TODO: avec une date et heure limite
		alert("Il est pour l'instant impossible de recatégoriser un fichier en Devoirs/Examens.");
		return -1;
	}

	chargement(true);

	//envoyer la nouvelle catégorie dans la bdd
	nom_table = "Fichiers"
	nom_champ_reference = "id_fichier"
	valeur_champ_reference = id_fichier_valeur
	nouveau_data = {
		'categorie_fichier': nouvelle_categorie_valeur
	}
	
	actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)
	setTimeout(function(){
		location.reload();
	}, 1000);


}


function changer_date_limite_rendu(id_fichier,nom_fichier){


	var nouvelle_date_effet = '<input type="date" id="nouvelle_date_effet" class="date_effet_fichier">';

	var nouvelle_heure_effet = '<input type="time" id="nouvelle_heure_effet" class="la_date_limite">';




	var ancienne_date_effet = $("[id="+id_fichier+'].span_un_fichier')[0].attributes['ma_date_limite'].value;

	var ancienne_heure_effet = $("[id="+id_fichier+'].span_un_fichier')[0].attributes['mon_heure_limite'].value ? $("[id="+id_fichier+'].span_un_fichier')[0].attributes['mon_heure_limite'].value : "07:30";




	creer_mini_popup(nom_fichier,nouvelle_date_effet+nouvelle_heure_effet,"Appliquer date limite de rendu","mettre_a_jour_date_limite_rendu('"+id_fichier+"')",ancienne_date_effet,"nouvelle_date_effet", ancienne_heure_effet, "nouvelle_heure_effet");

	//si la personne le vide: on garde l'ancienne valeur
    $('#nouvelle_date_effet').on("change", function() {
		//si c'est un devoir alors ajouter un délai
		if($('#nouvelle_date_effet')[0].value === "")
			$('#nouvelle_date_effet')[0].value = ancienne_date_effet;
    });


    $('#nouvelle_heure_effet').on("change", function() {
		//si c'est un devoir alors ajouter un délai
		if($('#nouvelle_heure_effet')[0].value === "")
			$('#nouvelle_heure_effet')[0].value = ancienne_heure_effet;
    });

    


}


function changer_date_effet(id_fichier,nom_fichier){


	var nouvelle_date_effet = '<input type="date" id="nouvelle_date_effet" class="date_effet_fichier">';

	var nouvelle_heure_effet = '<input type="time" id="nouvelle_heure_effet" class="la_date_limite">';




	var ancienne_date_effet = $("[id="+id_fichier+'].span_un_fichier')[0].attributes['ma_date_effet'].value;

	var ancienne_heure_effet = $("[id="+id_fichier+'].span_un_fichier')[0].attributes['mon_heure_effet'].value ? $("[id="+id_fichier+'].span_un_fichier')[0].attributes['mon_heure_effet'].value : "07:30";




	creer_mini_popup(nom_fichier,nouvelle_date_effet+nouvelle_heure_effet,"Appliquer date d'effet","mettre_a_jour_date_effet('"+id_fichier+"')",ancienne_date_effet,"nouvelle_date_effet", ancienne_heure_effet, "nouvelle_heure_effet");

	//si la personne le vide: on garde l'ancienne valeur
    $('#nouvelle_date_effet').on("change", function() {
		//si c'est un devoir alors ajouter un délai
		if($('#nouvelle_date_effet')[0].value === "")
			$('#nouvelle_date_effet')[0].value = ancienne_date_effet;
    });


    $('#nouvelle_heure_effet').on("change", function() {
		//si c'est un devoir alors ajouter un délai
		if($('#nouvelle_heure_effet')[0].value === "")
			$('#nouvelle_heure_effet')[0].value = ancienne_heure_effet;
    });

    


}

function mettre_a_jour_date_limite_rendu(id_fichier_valeur){
	var nouvelle_date_effet = $("#nouvelle_date_effet")[0].value;
	var nouvelle_heure_effet = $("#nouvelle_heure_effet")[0] ? $("#nouvelle_heure_effet")[0].value : "";
	
	if(impossible_de_cliquer()) return -1;
	if(nouvelle_date_effet === "") return -1;

	chargement(true);

	//envoyer la nouvelle date effet dans la bdd
	nom_table = "Fichiers"
	nom_champ_reference = "id_fichier"
	valeur_champ_reference = id_fichier_valeur
	nouveau_data = {
		'la_date_limite': nouvelle_date_effet,
		'lheure_limite': nouvelle_heure_effet,
		
	}
	
	actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)
	setTimeout(function(){
		location.reload();
	}, 1000);


	
}


function mettre_a_jour_date_effet(id_fichier_valeur){
	var nouvelle_date_effet = $("#nouvelle_date_effet")[0].value;
	var nouvelle_heure_effet = $("#nouvelle_heure_effet")[0] ? $("#nouvelle_heure_effet")[0].value : "";
	
	if(impossible_de_cliquer()) return -1;
	if(nouvelle_date_effet === "") return -1;

	chargement(true);

	//envoyer la nouvelle date effet dans la bdd
	nom_table = "Fichiers"
	nom_champ_reference = "id_fichier"
	valeur_champ_reference = id_fichier_valeur
	nouveau_data = {
		'date_effet': nouvelle_date_effet,
		'heure_effet': nouvelle_heure_effet,
		
	}
	
	actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)
	setTimeout(function(){
		location.reload();
	}, 1000);


	
}

/********************* RENOMMER UN FICHIER ************************/
function renommer_fichier(id_fichier,ancien_nom){

	ancien_nom = decodeURIComponent(ancien_nom);	
	extension_fichier = ancien_nom.split('.').pop();
	//console.log("extension_fichier:" + extension_fichier)
	ancien_nom = ancien_nom.split('.').slice(0, -1).join('.');
	//console.log("ancien_nom:" + ancien_nom)
	
	var nouveau_nom = prompt("Indiquez le nouveau nom: ",ancien_nom);

	if(nouveau_nom===null || nouveau_nom.length===0) return -1;
	chargement(true);

	nouveau_nom = nouveau_nom.trim();
	nouveau_nom = nouveau_nom + '.'+extension_fichier

	if(nouveau_nom.length >0){
	
		var identifiant = recuperer('identifiant_courant');
		var le_lien_script = "https://script.google.com/macros/s/AKfycbzUiqqvttFoMV0SJEjizhDj_vQQdkAYN0ZwS4Yiy3TMgK1ucb8e/exec";

		var url = le_lien_script + '?method=POST&id_fichier=' + id_fichier;
		var url = url+ '&nouveau_nom=' + nouveau_nom;

		//uniquement les NON eleves
		var url = url + '&API_KEY_RENAME=' + recuperer("API_KEY_RENAME");

		//console.log(nouveau_nom)

		
		$.ajax({
		    url: url,
		    type: "POST",
			success: function (data) {
				console.log(data);
				// on recupere l'alerte
				var msg_alerte = element_DOM("snackbar");

				// on affiche l'alerte
				msg_alerte.innerText = data;
				msg_alerte.className = "show";

				//on modifie dans la bdd 
				nom_table = "Fichiers"
				nom_champ_reference = "id_fichier"
				valeur_champ_reference = id_fichier
				nouveau_data = {
					'nom_fichier' : nouveau_nom
				}
				actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)


				nom_table = "Notifs"
				nom_champ_reference = "id_notif"
				valeur_champ_reference = id_fichier+suite_notif()
				nouveau_data = {
					'Intitulé' : nouveau_nom
				}
				actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)








				//dans 3 secondes, on masque l'alerte et on actualise
				setTimeout(function(){
					msg_alerte.className = "";
					location.reload();

				}, 3000);
		    },
		    error: function(data){
		      console.log(data);
		    }
		});


		

	}


}




function visualiser(nom_fichier,id_fichier, nom_proprio_devoir, titre_initial, pas_de_telechargement, mode_extrait_png_canva, mode_extrait_png_div){

	chargement(true);

	nom_fichier = decodeURIComponent(nom_fichier);

	vider_fenetre(titre_initial ? titre_initial : (nom_fichier + (nom_proprio_devoir ? nom_proprio_devoir : "")));
		
	afficher_fenetre(true);

	//console.log(mode_extrait_png_canva)
	//on ajoute le bouton télécharger sauf en cas de PAS DE TELECHARGENEMTN
	var bouton_télécharger = mode_extrait_png_canva ? '<a id="telechargement" style="position: fixed;z-index:3;" download="Bulletin.png" onclick="telecharger_canvas()"><img alt="télécharger" style="width: 30px; cursor: pointer;position:fixed;" id="'+ id_fichier+ '" src="https://sekooly.github.io/SUPABASE/images/img_download.png"></a>' :
							pas_de_telechargement ? '' :
							'<a id="telechargement" style="position: fixed;z-index:3;" href = "https://drive.google.com/uc?export=download&id=' + id_fichier +'"><img alt="télécharger" style="width: 30px; cursor: pointer;position:fixed;" id="'+ id_fichier+ '" src="https://sekooly.github.io/SUPABASE/images/img_download.png"></a>';


	if(nom_proprio_devoir){
		url = racine_data +"Rendus?id_fichier=eq."+ id_fichier+"&"+ apikey
		//console.log(url)
		donnees_devoir_a_corriger = get_resultat(url)
		remarque = donnees_devoir_a_corriger[0]['remarque']
		coefficient_rendu = donnees_devoir_a_corriger[0]['coefficient_rendu']
		note_rendu = donnees_devoir_a_corriger[0]['note_rendu']


		remarque = decodeURIComponent(remarque);
		remarque= JSON.stringify(remarque).replace(/&/, "&amp;").replace(/"/g, "");
		remarque = remarque.replace(/'/g, "\\'");


		var bouton_corriger = '<span id="'+id_fichier+'"><img id="corriger" src="https://sekooly.github.io/SUPABASE/images/img_remarque.png" style="width: 30px; height: 30px; cursor: pointer; position: fixed; z-index: 3; top: 141px; left: 913px;" onclick="mettre_remarque_devoir(this,\'' +remarque +'\',' + coefficient_rendu +','+ note_rendu + ')"></span>'


	}else{
		var bouton_corriger = ""
	}


	//console.log(bouton_télécharger)
	//on le met dans l'en-tête
	var a_ajouter = document.createElement('div');
	a_ajouter.innerHTML = bouton_corriger + bouton_télécharger;
	while(a_ajouter.firstChild)
		element_DOM('entete-fenetre').appendChild(a_ajouter.firstChild);


	nom_fichier = nom_fichier.toLowerCase();
	var extension = nom_fichier.split(".").pop();
	
	//on y met un iframe de visualisation dont la source est le fichier FORCEMENT le fichier cliqué
	var previsualisation = '<iframe id="previsualisation" class="previz"></iframe>';
	
	//si c'est une image: cas spécifique
	if(est_image(extension)) previsualisation = '<div id="previsualisation" style="width: 100%;height: 85%;"></div>';


	//si c'est un lien youtube ou sans téléchargement: pas de téléchargement
	if(est_youtube(extension)) $("#telechargement").remove()




	//TODO: si PAS téléchargement -> on cache le côté haut-droit en cas de PAS DE TELECHARGEMENT
	//console.log(pas_de_telechargement)
	//console.log(est_youtube(extension))
	//si c'est un mode_extrait_png_div -> div
	if ((pas_de_telechargement && est_youtube(extension)===false ) || mode_extrait_png_div) previsualisation = '<div id=previsualisation class="responsive-container">'

	
	//console.log(previsualisation)


	//on le met dans la fenêtre
	a_ajouter = document.createElement('div');
	a_ajouter.innerHTML = previsualisation;
	element_DOM('fenetre').appendChild(a_ajouter.firstChild);

	//lien de visu par defaut
	lien_de_visu = calcul_lien_de_visu(extension,id_fichier);

	//image: cas spécifique
	if (est_image(extension) && !mode_extrait_png_div){
		var viewer = OpenSeadragon({
	        id: "previsualisation",
	        prefixUrl: "https://sekooly.github.io/SUPABASE/openseadragon/images/",
	        tileSources: {
	            type: 'image',
	            url: lien_de_visu 
	        },
            // Show rotation buttons
		    showRotationControl: true
	    });
		
		chargement(true);
		
	    viewer.addHandler('open', function(){
			chargement(false);
		});

	//une page de pdf
	}else if(mode_extrait_png_canva){

		//console.log("ici")
		var le_inner_html = '<canvas id="vizcanva"> </canvas>'
		element_DOM('previsualisation').innerHTML = le_inner_html
		chargement(false);


	//une page pdf SUR DIV
	}else if(mode_extrait_png_div){

		//console.log("ici")
		$("#previsualisation")[0].className = ""
		chargement(false);


	//si c'est PAS une image
	}else{


		//si c'est un pdf -> ajustement du height
		choisir_height_viz_si_pdf()
		


		//TODO: si PAS youtube ET SANS téléchargement -> on cache le côté haut-droit en cas de PAS DE TELECHARGEMENT
		if (pas_de_telechargement && est_youtube(extension)===false){
			var le_inner_html = '<iframe id="viz_frame" src="'+lien_de_visu+'"    frameborder="0" scrolling="no" seamless=""></iframe><div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0px; top: 0px;"> </div>'
			element_DOM('previsualisation').innerHTML = le_inner_html
			chargement(false);
		
		//youtube OU avec telechargement
		}else{
			element_DOM('previsualisation').src = lien_de_visu;	
		}



		//dès que c'est prêt, on fit le iframe à la taille du fichier chargé??? + masquer le chargement
		$('#previsualisation').on('load', function(){
			
			//console.log("c'est prêt");
			chargement(false);

		});

		$('#viz_frame').on('load', function(e){			
			chargement(false);
		});


		//quand c'est un fichier non visualisable et que le téléchargement est automatique:
		//on attend 10 secondes puis on masque 
		setTimeout(function(){
			//si le chargement est toujours présent, on le masque puis on met un message "Pas d'aperçu possible"
			if(impossible_de_cliquer() && element_DOM('titre_fenetre') === nom_fichier){
				chargement(false);
				alert("L'aperçu du fichier " + nom_fichier + " n'est peut-être pas disponible. Vous pouvez toutefois le télécharger.")

				chargement(false);
			}

		},10000);

	}



	//on ajuste les boutons
	ajuster_boutons_fenetre();
	ajuster_boutons_fenetre(true);
	choisir_height_viz_si_pdf();

}

function est_youtube(extension){
	return extension === "youtube"
}

function est_image(extension){
	return extension.includes("bmp") || extension.includes("gif") || extension.includes("jpeg") || extension.includes("jpg") || extension.includes("png")  || extension.includes("svg")  || extension.includes("bmp");
}


function calcul_lien_de_visu(extension,id_fichier){

	//console.log(extension);

	//lien de visu par defaut
	var lien_de_visu =  "https://drive.google.com/uc?id=" + id_fichier;
	
	//si c'est un fichier excel : on change
	if(extension.includes("xls")){
		lien_de_visu = "https://docs.google.com/spreadsheets/preview?id=" + id_fichier;
	
	//si c'est un fichier word : on change
	}else if(extension.includes("doc")){
		lien_de_visu = "https://docs.google.com/document/preview?id=" + id_fichier;
	
	//si c'est un fichier ppt: on change 
	}else if(extension.includes("ppt")){
		lien_de_visu = "https://docs.google.com/presentation/preview?id=" + id_fichier;
	
	//si c'est un fichier txt OU wav: on change
	}else if(extension.includes("txt") || extension.includes("wav")){
		lien_de_visu = "https://docs.google.com/file/d/"+ id_fichier+"/preview";
	
	//si c'est un pdf ou rtf: on change
	}else if(extension.includes("pdf")  || extension.includes("rtf")){
		lien_de_visu = 'https://docs.google.com/file/d/' + id_fichier+ '/preview';

	//si c'est un mp4: on change
	}else if(extension.includes("mp4")){
		lien_de_visu = 'https://docs.google.com/file/d/' + id_fichier+ '/preview';

	//si c'est un fichier image: on change
	}else if(est_image(extension)){
		lien_de_visu = 'https://drive.google.com/uc?export=preview&id=' + id_fichier;
	

	//si c'est un lien YOUTUBE
	}else if(est_youtube(extension)){
		lien_de_visu = 'https://www.youtube.com/embed/' + id_fichier;
	}


	


	return lien_de_visu;

}

function quitter_previsualisation_bis(){
	//$("#fenetre_bis")[0].style.display = 'none';
	$("#fenetre_bis").remove();
	if (element_DOM('fenetre_bis')) element_DOM('fenetre_bis').style.overflowY = "";

}

function quitter_previsualisation(){


	if(element_DOM("previsualisation")) element_DOM("previsualisation").src="";
	if(element_DOM("viz_frame")) element_DOM("viz_frame").src="";
	

	if($("#visio")[0]) $("#visio")[0].remove(); //éviter la pub dans visio

	//$("#mini_popup").remove()

	//tout enlever les écolages
	if($(".ecolage")) $(".toggle").remove();

	stocker('fichier_ouvert','');
	element_DOM('fenetre').style.overflowY = "";
	if (element_DOM('previsualisation')) element_DOM('previsualisation').setAttribute('style','')
	afficher_fenetre(false);
}


function initialisation_bouton(bis){
	
	element_DOM('pleinecran' + (bis ? "_bis" : "")).src ="https://sekooly.github.io/SUPABASE/images/img_pleinecran.png";

	//si déjà plein écran alors on change l'icône
	if (element_DOM('fenetre' + (bis ? "_bis" : "")).style.width=== "99%") element_DOM('pleinecran' + (bis ? "_bis" : "")).src ="https://sekooly.github.io/SUPABASE/images/img_petitecran.png";
	

}

function switch_mode(forcing){


	if(!element_DOM('pleinecran')) return -1;

	var est_plein_ecran = (element_DOM('pleinecran').src.includes("https://sekooly.github.io/SUPABASE/images/img_pleinecran.png"));

	//console.log('est_plein_ecran: ' + est_plein_ecran);
	
	if (est_plein_ecran || forcing){

		element_DOM('pleinecran').src ="https://sekooly.github.io/SUPABASE/images/img_petitecran.png";

		//bcp + de top et de left
		element_DOM('fenetre').style.top = 0;
		element_DOM('fenetre').style.left= 0;
		//width et height à 99%
		element_DOM('fenetre').style.width= "99%";
		element_DOM('fenetre').style.height= "99%";


	}else{

		element_DOM('pleinecran').src ="https://sekooly.github.io/SUPABASE/images/img_pleinecran.png";
		
		//on reset tout le style
		element_DOM('fenetre').style.top ="";
		element_DOM('fenetre').style.left ="";
		element_DOM('fenetre').style.width ="";
		element_DOM('fenetre').style.height ="";

	}

	//on ajuste tous les boutons
	ajuster_boutons_fenetre();
	choisir_height_viz_si_pdf();


}


function switch_mode_bis(forcing){


	if(!element_DOM('pleinecran_bis')) return -1;

	var est_plein_ecran = (element_DOM('pleinecran_bis').src.includes("https://sekooly.github.io/SUPABASE/images/img_pleinecran.png"));

	//console.log('est_plein_ecran: ' + est_plein_ecran);
	
	if (est_plein_ecran || forcing){

		element_DOM('pleinecran_bis').src ="https://sekooly.github.io/SUPABASE/images/img_petitecran.png";

		//bcp + de top et de left
		element_DOM('fenetre_bis').style.top = 0;
		element_DOM('fenetre_bis').style.left= 0;
		//width et height à 99%
		element_DOM('fenetre_bis').style.width= "99%";
		element_DOM('fenetre_bis').style.height= "99%";


	}else{

		element_DOM('pleinecran_bis').src ="https://sekooly.github.io/SUPABASE/images/img_pleinecran.png";
		
		//on reset tout le style
		element_DOM('fenetre_bis').style.top ="";
		element_DOM('fenetre_bis').style.left ="";
		element_DOM('fenetre_bis').style.width ="";
		element_DOM('fenetre_bis').style.height ="";

	}

	//on ajuste tous les boutons MODE BIS
	ajuster_boutons_fenetre(true);
	initialisation_bouton(true);
	choisir_height_viz_si_pdf();


}

function ajuster_boutons_fenetre(bis){


	nom_bouton_plein_ecran = "conteneur_plein_ecran";
	if(bis) nom_bouton_plein_ecran = nom_bouton_plein_ecran + "_bis";

	nom_fenetre = "fenetre";
	if(bis) nom_fenetre = nom_fenetre + "_bis";

	nom_bouton_quittter = "bye_prev";
	if(bis) nom_bouton_quittter = nom_bouton_quittter + "_bis";

	nom_bouton_telecharger = "telechargement";
	if(bis) nom_bouton_telecharger = nom_bouton_telecharger + "_bis";


	le_bouton_plein_ecran = element_DOM(nom_bouton_plein_ecran);
	la_fenetre = element_DOM(nom_fenetre);
	le_bouton_quittter = element_DOM(nom_bouton_quittter);
	le_bouton_telecharger = element_DOM(nom_bouton_telecharger);
	le_bouton_corriger = element_DOM("corriger");

	if(la_fenetre){

		if(le_bouton_plein_ecran){
			var le_top = (la_fenetre.offsetTop + la_fenetre.offsetHeight-40) + "px";
			var le_left = (la_fenetre.offsetLeft + la_fenetre.offsetWidth-50) + "px";

			le_bouton_plein_ecran.style.top = le_top;
			le_bouton_plein_ecran.style.left= le_left;
			//console.log("bouton plein écran OK");
		}

		if(le_bouton_quittter){
			var le_top = (la_fenetre.offsetTop) + "px";
			var le_left = (la_fenetre.offsetLeft + la_fenetre.offsetWidth - le_bouton_quittter.offsetWidth) + "px";

			le_bouton_quittter.style.top = le_top;
			le_bouton_quittter.style.left= le_left;
			//console.log("bouton quitter OK");
		}

		if(le_bouton_telecharger){
			var le_top = (la_fenetre.offsetTop) + "px";
			var le_left = (la_fenetre.offsetLeft + la_fenetre.offsetWidth - 60) + "px";
			//console.log(le_left);

			le_bouton_telecharger.style.top = le_top;
			le_bouton_telecharger.style.left= le_left;
			//console.log("bouton télécharger OK: " + le_bouton_telecharger.style.top + " et " + le_bouton_telecharger.style.left);
		}
		
		if (le_bouton_corriger){
			var le_top = (la_fenetre.offsetTop) + "px";
			var le_left = (la_fenetre.offsetLeft + la_fenetre.offsetWidth - 90) + "px";
			//console.log(le_left);

			le_bouton_corriger.style.top = le_top;
			le_bouton_corriger.style.left= le_left;
			//console.log("bouton corriger OK: " + le_bouton_corriger.style.top + " et " + le_bouton_corriger.style.left);


			//<img id="corriger" src="https://sekooly.github.io/SUPABASE/images/img_remarque.png" style="width: 30px; height: 30px; cursor: pointer; position: fixed; z-index: 3; top: 141px; left: 913px;" onclick="">
		}

	}



}


// si on change la taille de l'écran alors on s'assure que l'affichage du bouton "plein écran" soit toujours au bon endroit
window.addEventListener("resize", function(){

	calcul_grid_gap_barre_verticale();
	if (element_DOM('conteneur_plein_ecran') || element_DOM('mini_popup')){
		ajuster_boutons_fenetre();
		ajuster_boutons_fenetre(true);
		choisir_height_viz_si_pdf();
	}
});


function afficher_discussions(oui){
	
	if(oui){
		element_DOM('afficher').style.display ="";
	}else{
		element_DOM('afficher').style.display ="none";
	}
}


function afficher_ajout(oui){
	if (!oui) {
		element_DOM('img_ajout').style.display ="none";

	}else{
		element_DOM('img_ajout').style.display ="";
	
	}
}



function afficher_les_dossiers_dynamiques(oui){
	afficher_le_drive(false);
	if (oui){
		element_DOM('liste_matieres').style.display = 'grid';
	}else{
		element_DOM('liste_matieres').style.display = 'none';
	}
	
}


function avec_bouton_back(oui){

	if (oui){

		element_DOM('bouton_precedent').innerHTML = '<img alt="<<" src="https://sekooly.github.io/SUPABASE/images/img_retour.png" width = 25 height = 25>'

		//test click 1er élément
		element_DOM('bouton_precedent').addEventListener('click', function(e) {
	  		//console.log ("on a cliqué sur retour");
			//remonter au dossier précédent
			decharger_dossier_final();

		});


	
	
	}else{

		//enleve le bouton retour
		element_DOM('bouton_precedent').innerHTML = '';

	}


	if (recuperer('mon_type') === 'Administration_bis' || recuperer('mon_type') === 'Administration_final'){
		
		element_DOM('bouton_precedent').onclick = function(){
			element_DOM('liste_matieres').innerHTML = "";
			stocker('mon_type','Administration');
			ajouter_les_dossiers_dynamiques();
			configurer_profil();
		};
	}

}

function decharger_dossier_final(){
	
	
	positionner_bulle_notif();
	positionner_pannel_notif();

	chargement(true);

	//console.log("on décharge...");

	//on enlève tout
	element_DOM('liste_matieres').innerHTML = "";
	ajouter_les_dossiers_dynamiques();
	afficher_les_dossiers_dynamiques(true);
	
	//masquer la fenêtre
	quitter_previsualisation();

	//masquer la fenêtre des devoirs
	afficher_fenetre_rendudevoir(false);
	
	//masquer la fenêtre d'ajout de fichier
	afficher_ou_non_choix_fichier(false,true);
	
	//masquer le bouton back
	avec_bouton_back(false);

	//masquer le bouton ajout
	afficher_ajout(false);

	//masquer les devoirs (pour les élèves, lister tous les devoirs)
	afficher_devoirs(false);

	//masquer le conseil de classe
	//afficher_conseil_de_classe(false);

	//masquer tri par date
	afficher_tri_fichiers(false);

	//masquer la visio
	afficher_visio(false);
	
	//masquer les zones de drive
	enlever_alerte_vide(false);

	//masquer les logs si on n'as pas les droits
	var mes_droits = JSON.parse(recuperer('mes_donnees'))['Droits_modifs'];
	//console.log("mes_droits: " + mes_droits);
	afficher_logs(mes_droits==="oui");

	//masquer l'emploi du temps SI ET SEULEMENT SI NON ELEVE
	//console.log("non eleve donc on masque");
	//afficher_edt(recuperer('mon_type')==="Eleves");


	//masquer la liste d'élèves si on n'est pas admin
	afficher_liste_eleves(recuperer('mon_type').includes("Administration"));

	afficher_bulletins(recuperer('mon_type').includes("Eleves"))

	//masquer le bouton questions
	afficher_discussions(false);

	//avec ou sans le bouton des params
	afficher_params_si_droits_et_admin();
	
	//retour aux dossiers initiaux
	stocker_temp('dossier_chargé','');
	stocker("les_fichiers",'');

	//on actualise le iframe des messages
	afficher_discussions(false);
	//pas de topics chargés
	//console.log('on décharge');
	stocker("les_topics",'');
	stocker("topic_chargé",'');
	stocker("nb_com_actuel","");
	stocker("les_coms",'');
	//console.log("c'est fait");
	//remettre le bon nom prénom
	configurer_profil();
	
	//barre de scroll tout en haut
	window.scrollTo(0,0);
	chargement(false);

	positionner_bulle_notif();
	positionner_pannel_notif();

}

function afficher_le_drive(oui){

	if (oui){
		element_DOM('gros_conteneur').style.display ="";
	
		
	}else{
		element_DOM('gros_conteneur').style.display ="";
		//console.log("c'est masqué");
	}

}


function renvoyer_lien_embedded(id_du_dossier,grid){
	
	if (id_du_dossier === '') return '';

	if (grid){
		var mode = "grid";
	}else{
		var mode = "list";
	}
	resultat =  'https://drive.google.com/embeddedfolderview?id=' + id_du_dossier + '#' + mode;
	//console.log(resultat);
	return resultat;

}



function configurer_profil(){

	$('#accueil_utilisateur').on('click',function(){
		afficher_modif_profil();
	});


	//on recupere les donnees
	mes_donnees = JSON.parse(recuperer('mes_donnees'));
	//console.log(mes_donnees);

	var affichage_classe = "";
	
	//si élève: + classe
	if (recuperer('mon_type') === 'Eleves'){
		affichage_classe = mes_donnees['Classe'];
	
	//si admin: + role
	}else if (recuperer('mon_type').includes('Administration')){
		affichage_classe = mes_donnees['Role'];

	//si prof: + professeur
	}else if (recuperer('mon_type') === 'Profs'){
		affichage_classe = 'Professeur';
	}

	//on met le nom prénoms
	element_DOM('accueil_utilisateur').innerHTML = mes_donnees['Nom'] + " " + mes_donnees['Prénom(s)'] + "  -  " + affichage_classe;


	
}



initialisation();





















/************************************ AJOUT DE FICHIER ********************************************/
function switch_mode_livres(forcing, par_defaut){

	if (par_defaut){
		console.log("par défaut")
		var mode_livre = mode_livres()
	}else{
		//console.log("avec forcing: " + forcing)
		var mode_livre = !forcing
	}

	element_DOM('choix_date_effet').style.visibility = mode_livre ? "" : "hidden"
	element_DOM('telechargeable').style.visibility = mode_livre ? "" : "hidden"

	//si on passe en mode livre -> devient non téléchargeable
	//si on passe en mode normal -> devient téléchargeable par défaut
	element_DOM('est_telechargeable').checked = mode_livre 

	
}

function mode_livres(){
	return element_DOM('choix_date_effet').style.visibility === "hidden"
}

function mode_fichier_initialement(){
	afficher_choix_youtube(false);	
	afficher_choix_extrait_manuel(false);
}

function switch_affichage_youtube(){

	//element_DOM('est_video_youtube').checked = false;
	//alert("Cette fonctionnalité n'est pas encore disponible.");


	var mode_youtube = element_DOM('est_video_youtube').checked;
	element_DOM('nom_youtube').value = ""
	element_DOM('lien_youtube').value = ""
	afficher_choix_youtube(mode_youtube);
	afficher_choix_fichier(!mode_youtube);
	afficher_checkbox('choix_extrait_manuel',!mode_youtube)
	afficher_checkbox_fichier_telechargeable(!mode_youtube);
	$("#est_telechargeable")[0].checked = !mode_youtube;


	if (mode_youtube) {

		$("#mettre_fichier_en_ligne").on("click", function (e){
			//check: le tout
			if (!pre_validation("lien_youtube")){

			//check: avec un titre
			}else if (!$('#nom_youtube')[0].value) {
				afficher_alerte("Vous devez fournir un titre représentatif de la vidéo youtube.")
				$('#nom_youtube')[0].focus()


			//check: est un lien youtube
			//check: est un lien google drive
			}else if (!est_un_lien_drive() && !est_un_lien_yt()){
				afficher_alerte("Vous devez fournir un lien youtube valable.")
				$('#lien_youtube')[0].focus()


			//tout est ok
			}else{
				chargement(true)
				



				var id_fichier =  id_youtube_video($('#lien_youtube')[0].value)
				var nom_fichier = $('#nom_youtube')[0].value + (est_un_lien_drive() ? "" : ".youtube")
				//console.log(id_fichier)
				//console.log(nom_fichier)
				var categorie_fichier = element_DOM("categorie_choisie").value;
	        	var la_date_limite = element_DOM("la_date_limite").value;
	        	var lheure_limite =  element_DOM("lheure_limite").value;
	        	var categorie_fichier = $('#categorie_choisie')[0].value;
	        	var date_effet_fichier = $('#date_effet_fichier')[0].value;
	        	var heure_effet = $('#heure_effet')[0].value;

				date_heure_actuelle = maintenant()
				mes_donnees = JSON.parse(recuperer('mes_donnees'))
				la_classe = recuperer('mon_type') === "Eleves" ? mes_donnees['Classe'] : element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim();
				la_matiere = recuperer('mon_type') === "Eleves" ? $("#accueil_utilisateur")[0].innerText : $("#accueil_utilisateur")[0].innerText.replace(la_classe,"").trim()

				le_coef =  Number($("#coef")[0].value)
				console.log("le_coef: " + le_coef)

				//stocker la donnée dans la BDD
				nouveau_fichier = {"date_publication": date_heure_actuelle,
					"id_fichier": id_fichier,
					"nom_fichier": nom_fichier,
					"id_dossier": recuperer('dossier_chargé'),
					"proprietaire": recuperer('identifiant_courant'),
					"categorie_fichier": categorie_fichier,
					"la_date_limite": la_date_limite,
					"lheure_limite": lheure_limite,
					"date_effet": date_effet_fichier,
					"heure_effet": heure_effet,
					"est_telechargeable" : "non",
					"coefficient_rendu" : le_coef,
					"taille_fichier" : 0
				}
				ajouter_un_element("Fichiers",nouveau_fichier, id_fichier)


				id_notif = id_fichier+suite_notif()
				nouvelle_notif = {
					"id_notif" : id_notif,
					"Horodateur": date_heure_actuelle,
					"Type_notif" : "fichier",
					"Id_source" : id_fichier,
					"Intitulé" : nom_fichier,
					"Identifiant_originaire": recuperer('identifiant_courant'),
					"Role_originaire": mon_role,
					"Identifiant_derniere_modif" : recuperer('identifiant_courant'),
					'Role_derniere_modif' : mon_role,
					'Classe' : la_classe,
					'Classe_matiere' : "(" + la_classe + "|" + la_matiere + ")" ,
					'Id_classe_matiere' : recuperer("dossier_chargé"),
					'Date_derniere_modif' : date_heure_actuelle,
					'Cycle' : mes_donnees['Cycle']
				}
				//console.log(nouvelle_notif)
				ajouter_un_element("Notifs",nouvelle_notif, id_notif)



				//dans 3 secondes, on masque l'alerte et on actualise
				var texte_final = (est_un_lien_drive() ? "Le fichier drive a bien été rattaché à la plateforme." : "La vidéo youtube a bien été partagée.")
				afficher_alerte(texte_final,true)



				//chargement(false)
			}
		});

	}else{
		$("#mettre_fichier_en_ligne").off("click")
	}

}

function id_youtube_video(url){
	var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	var match = url.match(regExp);
	if (match && match[2].length == 11) {
	  return match[2];
	} else {
	  return id_lien_drive(url)
	}
}

function id_lien_drive(url){
	var regExp = /[-\w]{25,}/

	return url.match(regExp) === null ? "ERREUR LIEN" : url.match(regExp)[0]
}

function est_un_lien_yt(){

    var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    var valeur_a_comparer = $("#lien_youtube")[0].value

    if (valeur_a_comparer !== ""){
    	return valeur_a_comparer.match(regExp) !== null 
    }else{
    	return false
    }
}

function est_un_lien_drive(){
	var valeur_a_comparer = $("#lien_youtube")[0].value
	var regExp = /[-\w]{25,}/

	if (valeur_a_comparer !== ""){
    	return valeur_a_comparer.match(regExp) !== null 
    }else{
    	return false
    }

}



function afficher_choix_youtube(oui){
	element_DOM('youtube').style.display = oui ? "" : "none";
}


function afficher_checkbox_fichier_telechargeable(oui){
	element_DOM('telechargeable').style.display = oui ? "" : "none";
}

function afficher_choix_fichier(oui){
	element_DOM('file').style.display = oui ? "" : "none";
}

function ne_rien_rendre(){
	//console.log("mise en ligne impossible");
	$("#mettre_fichier_en_ligne")[0].disabled = true
	$('#mettre_fichier_en_ligne').on("click","");
}

function activer_envoi_fichier(){
	//console.log("mise en ligne impossible");
	$("#mettre_fichier_en_ligne")[0].disabled = false
}


function afficher_heure_effet_si_examens(){

	//si examen	            	
	if ($('#categorie_choisie')[0].value === "Examens"){

		//	titre = Date et heure de l'épréuve
		$("#titre_date")[0].innerText = "Date et heure de l'épreuve:";	

		//	ajouter heure_effet
		$("#heure_effet")[0].style.display="";

		//forcément AVEC heure d'effet (par défaut 07:30)
		$("#heure_effet")[0].value = "07:30";



	}
	//sinon
	else{
    	//	titre = Date d'effet
    	$("#titre_date")[0].innerText = "Date d'effet:";
    	
    	//	masquer heure_effet
    	$("#heure_effet")[0].style.display="none";

    	//par défaut vide
    	$("#heure_effet")[0].value = "";
	}

}


function pre_validation(nom_champ_obli){



	//forcément une catégorie  et un fichier
	if($('#categorie_choisie')[0].value === "--"){
		afficher_alerte('Merci de choisir la catégorie de votre fichier.')
		return false;
	}else{
		//console.log("catégorie ok");
	}

	//forcément avec un file OU lien YT OU un extrait
	if (($("#"+nom_champ_obli)[0].value === "" || $("#"+nom_champ_obli)[0].value === "--") && !image_temporaire){
		afficher_alerte('Merci de choisir le fichier, l\'extrait de manuel, ou le lien youtube que vous désirez partager.')
		return false;
	}

	//forcément une date d'effet du fichier
	if($('#date_effet_fichier')[0].value === "" || $('#date_effet_fichier')[0].value === null){
		afficher_alerte("Merci de choisir la date d'effet de votre fichier.")
		return false;
	}else{
		//console.log("date d'effet ok");
	}

	//si EXAMEN: forcément un heure d'effet
	if ($("#categorie_choisie")[0].value==="Examens"){
		
		if($('#heure_effet')[0].value === "" || $('#heure_effet')[0].value === null){
			afficher_alerte("Merci de choisir l'heure d'effet de votre fichier d'Examen.")
			return false;
    	}else{
    		//console.log("heure d'effet ok");
    	}
	}

	//si devoir: forcément un date limite
	if ( ($('#categorie_choisie')[0].value === "Devoirs") && element_DOM("la_date_limite").value===""){
		afficher_alerte("Merci de choisir la date limite du devoir.")
		return false;
	}else{
		//console.log("date limite ok");
	}

	//si devoir: forcément une heure limite
	if ($('#categorie_choisie')[0].value === "Devoirs" && element_DOM("lheure_limite").value.length<5){
		afficher_alerte("Merci de choisir l'heure du devoir.")
		return false;
	}else{
		//console.log("heure limite ok");
	}



	if(impossible_de_cliquer()){
		afficher_alerte("Merci de patienter.")
		return false;	            		
	}

	return true
}










function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data.split(',')[1]);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType, name : nom_image_temporaire });
}













$(function charger_fichiers(e){

    var lien_script = "https://script.google.com/macros/s/AKfycbwKm1M_Hm2n8bAyqq3jAcDyL65EqKn1-3VMXIw4jMpzqnIeQQI/exec";
    
	var params = {
        
    };

    var nom_fichier;
    var extension;

    $('#file').on("change", function() {

    	//console.log($('#file')[0].value);
    	//console.log($('#categorie_choisie')[0].value);
    	
    	var les_fichiers = this.files;

    	var nb_fichiers = les_fichiers.length;
        	                
		var file = image_temporaire ? base64toBlob(image_temporaire,'image/png') : les_fichiers[0] ;
		//console.log(file)

        nom_fichier = nom_image_temporaire ? nom_image_temporaire : file.name ;
        //console.log(nom_fichier)

		extension = nom_fichier.split(".").pop().toUpperCase();
        //console.log(extension)

		le_coef =  Number($("#coef")[0].value)

    	$('#mettre_fichier_en_ligne').on("click", function(e) {



			e.preventDefault();

			var categorie_fichier = $('#categorie_choisie')[0].value;
		    	

			var prevalid = pre_validation("file")
			//console.log(prevalid)
			if (prevalid === false){
				return -1;
			}


			//pas plus de 25 MO par fichier
			if (file.size > 25000000){
				afficher_alerte("Votre fichier excède 25 MO: impossible de le mettre en ligne.")
				return -1;
			}

            var fr = new FileReader();

            fr.onprogress = function(e){
            	chargement(true);
            }

            fr.onload = function(e) {
            	//console.log("on load");
                params.file = e.target.result.replace(/^.*,/, '');
				//console.log("le_coef: " + le_coef)


				categorie_fichier = element_DOM("categorie_choisie").value;
		    	la_date_limite = element_DOM("la_date_limite").value;
		    	lheure_limite =  element_DOM("lheure_limite").value;
		    	date_effet_fichier = $('#date_effet_fichier')[0].value;
		    	heure_effet = $('#heure_effet')[0].value;



				//n'accepter que les pdf pour les bulletins (todo)
				if(categorie_fichier === "Bulletins"){ 
					if(extension.toLowerCase() !== "pdf"){
						afficher_alerte("Le fichier de bulletins doit être un fichier pdf.")
						chargement(false)
						//ne_rien_rendre()
						return -1;
					}

					liste_destinataires = $("#attribution").serialize().split("&")
					destinataire_par_page = {}
					liste_destinataires.forEach(function(valeur,index){
						numero_page = valeur.split("=")[0]
						id_eleve = decodeURIComponent(valeur.split("=")[1])
						if(destinataire_par_page[id_eleve]){
							destinataire_par_page[id_eleve] = destinataire_par_page[id_eleve] +','+ numero_page
						}else{
							destinataire_par_page[id_eleve] = numero_page
						}
					})
					destinataire_par_page = JSON.stringify(destinataire_par_page)
					

					periode_bulletin = $("[name='periode_bulletin']")[0].value

					//console.log(destinataire_par_page)
					//console.log(periode_bulletin)
					envoyer_le_fichier(categorie_fichier,la_date_limite,lheure_limite,date_effet_fichier,heure_effet,le_coef,file.size, destinataire_par_page, periode_bulletin);               
				//non bulletin
				}else{


					//console.log(la_date_limite)
					//console.log(lheure_limite)
					envoyer_le_fichier(categorie_fichier,la_date_limite,lheure_limite,date_effet_fichier,heure_effet,le_coef,file.size);               
				}

				
                

            }


            fr.readAsDataURL(file);


        });



    	categorie_fichier = element_DOM("categorie_choisie").value;
    	la_date_limite = element_DOM("la_date_limite").value;
    	lheure_limite =  element_DOM("lheure_limite").value;
    	date_effet_fichier = $('#date_effet_fichier')[0].value;
    	heure_effet = $('#heure_effet')[0].value;




		$("#attribution").remove()
		$("#trimestre").remove()

        //au changement du fichier -> si bulletin -> on met la liste
    	if(categorie_fichier === "Bulletins"){ 

    		
			if(extension.toLowerCase() !== "pdf"){
				afficher_alerte("Le fichier de bulletins doit être un fichier pdf.")
				chargement(false)
				//ne_rien_rendre()
				return -1;

			
			//un bulletin pdf	
			}else{

				nombre_de_pages_pdf = -1

				//compter le nombre de pages du pdf -> créer les input utiles
				var fr2 = new FileReader();
	            fr2.onload = function(e) {

	            	nombre_de_pages_pdf = 0
	            	pdf = new Uint8Array(e.target.result)
	            	try{
	            		//nombre_de_pages_pdf = fr2.result.match(/\/Type[\s]*\/Page[^s]/g).length;
	            		PDFJS.getDocument({data: pdf}).then(function(pdf) {
				    		nombre_de_pages_pdf = pdf.pdfInfo.numPages
				    		//console.log(nombre_de_pages_pdf)


							//pour chaque page -> créer une liste
							creer_attribution_page_eleve(nombre_de_pages_pdf,$("#mettre_fichier_en_ligne"))
				    	})

	            	}catch(e){
	            		console.error(e)
	            		alert("Impossible de détecter le nombre de pages du pdf : merci de réessayer avec un autre fichier.")
	            		return 0
	            	}
	            }

	            fr2.readAsArrayBuffer(file);

			}
		}

    });


    
    $('#categorie_choisie').on("change", function() {

		//si c'est un devoir alors ajouter un délai
		if($('#categorie_choisie')[0].value === "Devoirs"){
			afficher_choix_date(true);			
		}else{
			afficher_choix_date(false);
		}


		//si c'est un devoir ou un examen -> coefficient
		if($('#categorie_choisie')[0].value === "Devoirs" || $('#categorie_choisie')[0].value === "Examens"){
			afficher_choix_coef(true);
		}else{
			afficher_choix_coef(false);
		}



		
		//si c'est un manuel alors on passe au mode livres
		if($('#categorie_choisie')[0].value === "Manuels"){			
			switch_mode_livres(true);

		//si non manuel alors on passe au mode normal
		}else{
			switch_mode_livres(false);   	
		}
		

    	afficher_heure_effet_si_examens();







    });


    $('#date_effet_fichier').on("change", function() {

		//si c'est un devoir alors ajouter un délai
		if($('#date_effet_fichier')[0].value === "")
			$('#date_effet_fichier')[0].value = moment().format('yyyy-MM-DD');

    });

    $('#heure_effet').on("change", function() {

		//si c'est un EXAMEN alors AVEC une heure_effet
		if($('#heure_effet')[0].value === "" &&  $('#categorie_choisie')[0].value === "Examens"){
			$('#heure_effet')[0].value = "07:30";
		}

    });



    function creer_attribution_page_eleve(nombre_pages, bouton_ok){


    	


    	toutes_les_classes = JSON.parse(recuperer('mes_matieres'))
    	classe_chargee = toutes_les_classes.filter(e => e['ID_URL'] === recuperer('dossier_chargé'))[0]['Classe']
    	url = racine_data + "Eleves?Classe=eq." + classe_chargee + "&" + apikey
    	//console.log(url)
    	liste_eleves = get_resultat(url)

		//trier par order alphabetique du Identifiant
		liste_eleves = liste_eleves.sort(function(a, b){
		    if(a.Identifiant < b.Identifiant) { return -1; }
		    if(a.Identifiant > b.Identifiant) { return 1; }
		    return 0;
		});


    	//console.log(liste_eleves)


    	select_liste_eleves = '<select style="width: 80%;" name="numero_page" id="numero_page">'
    	select_liste_eleves = select_liste_eleves + creer_liste_eleves("--","--")
    	liste_eleves.forEach(function(valeur,index){
    		select_liste_eleves = select_liste_eleves + creer_liste_eleves(valeur['Identifiant'], valeur['Nom'] + " " + valeur['Prénom(s)'])
    	})
    	select_liste_eleves = select_liste_eleves + '</select>'
    	//console.log(select_liste_eleves)


    	attribution = '<form id="trimestre" style=""><b><label for="periode_bulletin">Trimestre:<select style="width: 60%;" name="periode_bulletin"><option value="PREMIER TRIMESTRE">PREMIER TRIMESTRE</option><option value="DEUXIEME TRIMESTRE">DEUXIEME TRIMESTRE</option><option value="TROISIEME TRIMESTRE">TROISIEME TRIMESTRE</option><option value="ANNUEL">ANNUEL</option></select></label></b></form>'
    	attribution = attribution + '<form id="attribution" style="margin-top: 20px;">'
    	for (numero_page = 1 ; numero_page <= nombre_pages ; numero_page++){
    		attribution = attribution + '<div><label for="'+numero_page+'">Page n°'+numero_page+':' + select_liste_eleves.replace(/"numero_page"/g,numero_page) + '</label></div>'
    	}
		attribution = attribution + '</form>'
    	
    	
    	$(attribution).insertBefore(bouton_ok)

    	//valeurs par défaut: numero_page-ème -> liste_eleves['Identifiant']
    	for (numero_page = 1 ; numero_page <= nombre_pages ; numero_page++){
    		$("#" + numero_page)[0].value = liste_eleves[numero_page-1]['Identifiant']
    	}

    	//console.log(attribution)

    }

    function creer_liste_eleves(identifiant_eleve,nom_complet_eleve){
    	return '<option value="'+identifiant_eleve+'">'+nom_complet_eleve+'</option>'
    }


    function afficher_choix_date(oui){
    	if (oui){
    		element_DOM('choix_date').style.display="grid";
			
    	}else{
    		element_DOM('choix_date').style.display="none";
    	}
    }

    function envoyer_le_fichier(categorie_fichier,la_date_limite,lheure_limite,date_effet_fichier,heure_effet,coefficient_rendu,taille_fichier,destinataire_par_page,periode_bulletin){

		//console.log(la_date_limite)
		//console.log(lheure_limite)

        var html = '<form method="post"  action="'+lien_script+'" id="envoyer_le_fichier" style="display: none;" >';
    	html += '<input type="hidden" name="API_KEY_UPLOAD" value="'+ recuperer('API_KEY_UPLOAD') +'" >';
		html += '<input type="hidden" name="nom_fichier" value="'+nom_fichier+'" >';
    	html += '<input type="hidden" name="extension" value="'+extension+'" >';
    	html += '<input type="hidden" name="file" value="'+params.file+'" >';
    	html += '<input type="hidden" name="folderID" value="'+ recuperer('dossier_chargé') +'" >';


    	html += '<input type="hidden" name="proprietaire" value="'+recuperer('identifiant_courant')+'" >';
    	html += '<input type="hidden" name="categorie_fichier" value="'+ categorie_fichier +'" >';
    	html += '<input type="hidden" name="la_date_limite" value="'+ la_date_limite +'" >';
    	html += '<input type="hidden" name="lheure_limite" value="'+ lheure_limite +'" >';
    	html += '<input type="hidden" name="date_effet_fichier" value="'+ date_effet_fichier +'" >';

		html += '<input type="hidden" name="heure_effet" value="'+ heure_effet +'" >';

		html += '<input type="hidden" name="coefficient_rendu" value="'+ coefficient_rendu +'" >';
		html += '<input type="hidden" name="taille_fichier" value="'+ taille_fichier +'" >';

		/*
		console.log(destinataire_par_page)
		console.log(periode_bulletin)
		*/


		
		html += '<input type="hidden" name="destinataire_par_page" value="'+ destinataire_par_page ? destinataire_par_page : "" +'" >';
		html += '<input type="hidden" name="periode_bulletin" value="'+ periode_bulletin ? periode_bulletin : "" +'" >';


        html += '</form>';	                
        
        //console.log("\n" + html + "\n");

        $("body").append(html);


        // fonction d'envoi
        $("#envoyer_le_fichier").submit(function(e) {
        	
        	e.preventDefault(); // rester sur la même page

			if (!extension_ok(extension)){
				alert("L'extension du fichier n'est pas supporté par la plateforme, merci de réessayer avec l'un de ces formats: bmp, gif, jpeg, jpg, png, svg, pdf, bmp, xlsx, xls, xlsm, ppt, pptx, doc, docx, txt, html, csv, js, rtf, mp4, mp3, wav")
				chargement(false)
				activer_envoi_fichier()
				return -1;	            		
			}


			//console.log("c'est bon on va envoyer le fichier");
        	
			//console.log(form.serialize())


            ne_rien_rendre(); // pas de 2 fois
        	
        	var form = $(this);
        	var url = form.attr('action');
        	$.ajax({ type: "POST", url: url, data: form.serialize(), // serializes the form's elements.

        		//affiche le resultat obtenu par le serveur
        		success: function(data) {
        			
        			//console.log(data);
					//chargement(false);

					// on recupere l'alerte
					var msg_alerte = element_DOM("snackbar");

					// on affiche l'ID du fichier
					msg_alerte.innerText = "Votre fichier a bien été mis en ligne.";
					msg_alerte.className = "show";


					date_heure_actuelle = maintenant()
					mes_donnees = JSON.parse(recuperer('mes_donnees'))
					//mon_role = recuperer('mon_type').includes("Administration") ? mes_donnees['Role'] : recuperer('mon_type').replace("s","")
					la_classe = recuperer('mon_type') === "Eleves" ? mes_donnees['Classe'] : element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim();
					la_matiere = recuperer('mon_type') === "Eleves" ? $("#accueil_utilisateur")[0].innerText : $("#accueil_utilisateur")[0].innerText.replace(la_classe,"").trim()
					est_telechargeable = $("#est_telechargeable")[0].checked ? "oui" : "non"

					//stocker la donnée dans la BDD
					nouveau_fichier = {"date_publication": date_heure_actuelle,
						"id_fichier": data,
						"nom_fichier": nom_fichier,
						"id_dossier": recuperer('dossier_chargé'),
						"proprietaire": recuperer('identifiant_courant'),
						"categorie_fichier": categorie_fichier,
						"la_date_limite": la_date_limite,
						"lheure_limite": lheure_limite,
						"date_effet": date_effet_fichier,
						"heure_effet": heure_effet,
						"est_telechargeable" : est_telechargeable,

						"coefficient_rendu" : coefficient_rendu,
						"taille_fichier" : taille_fichier,


						"destinataire_par_page" : destinataire_par_page,
						"periode_bulletin" : periode_bulletin

					}

					//console.log(nouveau_fichier)
					ajouter_un_element("Fichiers",nouveau_fichier, data)


					id_notif = data+suite_notif()
					nouvelle_notif = {
						"id_notif" : id_notif,
						"Horodateur": date_heure_actuelle,
						"Type_notif" : "fichier",
						"Id_source" : data,
						"Intitulé" : nom_fichier,
						"Identifiant_originaire": recuperer('identifiant_courant'),
						"Role_originaire": mon_role,
						"Identifiant_derniere_modif" : recuperer('identifiant_courant'),
						'Role_derniere_modif' : mon_role,
						'Classe' : la_classe,
						'Classe_matiere' : "(" + la_classe + "|" + la_matiere + ")" ,
						'Id_classe_matiere' : recuperer("dossier_chargé"),
						'Date_derniere_modif' : date_heure_actuelle,
						'Cycle' : mes_donnees['Cycle']
					}
					//console.log(nouvelle_notif)
					ajouter_un_element("Notifs",nouvelle_notif, id_notif)




					
					//dans 3 secondes, on masque l'alerte et on actualise
					
					setTimeout(function(){
						msg_alerte.className = "";
						location.reload(); 

					}, 3000);
					

					chargement(false)
					

				},

				error:function(data){
					var msg_alerte = element_DOM("snackbar");

					// on affiche l'alerte
					msg_alerte.innerText = "Erreur interne du serveur, veuillez réessayer. Assurez-vous d'être toujours connecté à internet.";
					msg_alerte.className = "show";

					//dans 3 secondes, on masque l'alerte et on actualise
					/*
					setTimeout(function(){
						msg_alerte.className = "";
						location.reload();

					}, 3000);
					*/

					chargement(false)
				}

			});
			
        });


        //envoyer
        $('#envoyer_le_fichier').submit();
		$('#envoyer_le_fichier').remove();



        

    }


    



});







    















/****************************** MESSAGES FORUM **********************************/

	//au clic n'importe où: on ferme la fenêtre
		
		document.onclick = function(e){
			//console.log("le id : " + e.target.id);
			if (e.target.id === "" && e.target.onclick ===null && e.target.classeName ==="") {quitter_previsualisation();
			}

			if(typeof(e.target.className)==="string"){
				//console.log(e.target.className)
				if(e.target.id!=="bulle_notif" && e.target.id!=="recup_notifs" && !e.target.className.includes("notif") && e.target.id!=="rien_lire" && e.target.id!=="tout_lire"){
					
					virer_le_pannel_notifs();
				}
			}

			if(!e.target.id.toLowerCase().includes("devoir") && !e.target) afficher_fenetre_rendudevoir(false);

			if(e.target.nodeName === "BODY" || e.target.id === "gros_conteneur" || e.target.id ===  "liste_matieres") fermer_side_bar()
		}


		$(document).keyup(function(e) {
			//console.log("e.key:" + e.key);
			if (e.key === "Escape") {
				quitter_previsualisation();
				afficher_fenetre_rendudevoir(false);
				virer_le_pannel_notifs();
				afficher_ou_non_choix_fichier(false);
			}
		});

		//au clic de l'icône: si la main est dispo: on ouvre si c'est fermé, on ferme sinon
		function charger_les_topics(forcing){
			if (impossible_de_cliquer()) return -1;

			est_deja_ouvert = element_DOM('fenetre').style.visibility === 'visible';
			if(forcing) est_deja_ouvert = false;

			//console.log("on va ouvrir:"+!est_deja_ouvert);

			afficher_fenetre(!est_deja_ouvert);
			return recuperer_les_topics(false);
			
		}


		function html_boutons_fenetre(){
			return '<div id="entete-fenetre" style="text-align: center;"> <img alt="actualiser"  src="https://sekooly.github.io/SUPABASE/images/img_actualiser.png" onclick="actualiser_topics()" id="actu_topics" style="width: 30px; cursor: pointer;"> <img alt="ajouter" src="https://sekooly.github.io/SUPABASE/images/img_ajout.png" onclick="ajouter_une_discu()" id="nouvelle_discu" style="width: 30px; cursor: pointer;"></div><div id="entete-fenetre" style="text-align: center;color: #c1c1c1;font-size: 13px;border-bottom-width: 1px;border-bottom-style: ridge;">Pour commenter, cliquez sur une question/discussion</div>';
		}

		function ajouter_une_discu(){


			var probleme = false;
			if (probleme){
				alert("Impossible de créer une question/discussion pour le moment.");
				return -1;
			}


			if(impossible_de_cliquer()) return -1;

			//si dossier vie scolaire et non admin: pas de dépôt
			if(!recuperer('mon_type').includes('Admin') && element_DOM('accueil_utilisateur').innerText.includes('Vie scolaire') ){
				alert("Vous n'avez pas les droits pour publier une discussion dans la Vie Scolaire. Pour tout problème constaté sur la plateforme, envoyez directement un mail à "+data_etablissement['contact_etablissement']+".");
				return -1;
			}

			vider_fenetre("Nouvelle discussion");
			element_DOM('maquestion').src="";

			var nouveau_message = '<form id="mon_formulaire" autocomplete="off" style="padding: 0% 3% 0% 3%;height:82%;overflow-y: auto;"><label id="label" for="titre_question">Titre: </label><input type="text" id="titre_question" maxlength="50" style="width: 100%;">	<br><br><label id="label" for="contenu_question">Votre message: </label><textarea id="contenu_question" maxlength="1700" style="width: 100%;height: 70%;resize: none;font-size: 13px;"></textarea><div id="nb_max_div" style="margin-left: 90%;margin-top: 0%;font-size: 10px; display:none;"> <font id="nb_max"> 0 / 1700</font> </div><div id="mes_boutons" style="text-align: center;padding: 1%;display: block ruby;"><button type="button" id="Annuler" onclick="recuperer_les_topics(false)"> Annuler </button><button type="button" id="envoi" onclick="envoyer_le_topic()"> Poster </button></div><div id="msg_erreur" style="text-align: center;padding: 1%;color: green;"> </div></form>';


			//sans anonymisation pour l'instant
			/*
			var les_boutons = '<div id="mes_boutons" style="text-align: center;padding: 1%;display: block ruby;"><button id="Annuler" onclick="recuperer_les_topics(false)"> Annuler </button><button id="envoi" onclick="envoyer_le_topic()"> Poster </button><div id="affichage"><input type="checkbox" id="anonymisation"><label id="affichage" for="anonymisation" style="font-size: 13px;">Anonyme</label></div></div>';
			*/


			//ajouter la fenettre de nouveau message au DOM
			var mon_message = document.createElement('span');
			mon_message.innerHTML = nouveau_message;

			element_DOM('fenetre').appendChild(mon_message);


			rendre_riche("contenu_question")


			//à chaque modif du contenu: on mà le nb de carac
			/*
			$("#contenu_question").on('change keydown paste input', function(){
			      changer_nb_caracteres();
			});*/

			//focus direct sur le titre
			element_DOM('titre_question').focus();

		}

		function changer_nb_caracteres(){
			element_DOM('nb_max').innerText = element_DOM('contenu_question').textLength + " / 1700";
		}

		function actualiser_topics(){
			recuperer_les_topics(true);
		}

		function actualiser_coms(id_topic){
			charger_question(id_topic,true);
		}

		function envoyer_le_com(id_topic, mon_identifiant,mon_role,contenu_poste_bis,date){
			
			var contenu_poste = contenu_poste_bis//encodeURIComponent(contenu_poste_bis);

			var le_mot_interdit = chercher_le_mot_interdit(contenu_poste)
			if(le_mot_interdit !== ""){
				alert("Vous n'avez pas le droit d'utiliser le terme '"+le_mot_interdit+"' dans le cadre des cours à "+nom_etablissement+" sur SEKOOLY.")
				return -1;
			}

			//on n'envoie qu'une fois le message
			element_DOM('envoicommentaire').disabled=true;

			chargement(true);


			nom_table = "Topic"
			nb_com = nb_coms(id_topic)+1 // Number(recuperer("nb_com_actuel")) +1
			stocker("nb_com_actuel",nb_com)
			date_heure_actuelle = maintenant()
			nouveau_com = {
				'Horodateur':date_heure_actuelle,
				'Id_topic': id_topic,
				'Votre_commentaire': recuperer_html_saisie_riche(), //$("#mon_com")[0].value,
				'Identifiant': recuperer('identifiant_courant'),
				'Role': mon_role
			}
				
			
			//console.log(nouveau_com)
			ajouter_un_element("Coms",nouveau_com)
			actualiser("Topic", "Id_topic", id_topic, {"Nombre_de_coms":nb_com})

			nom_table = "Notifs"
			nom_champ_reference = "Id_source"
			valeur_champ_reference = id_topic 
			nouvelles_donnees_notif = {
				"Date_derniere_modif": date_heure_actuelle,
				"Identifiant_derniere_modif": recuperer('identifiant_courant'),
				"Role_derniere_modif": mon_role
			}
			/*
			console.log(nouvelles_donnees_notif)
			console.log(id_topic)
			*/
			actualiser(nom_table, nom_champ_reference, id_topic, nouvelles_donnees_notif)





			//ajouter visuellement le commentaire
			//console.log("on ajoute le commentaire");
			ajouter_un_commentaire(mon_identifiant,mon_role,contenu_poste_bis,date);
			//console.log("c'est ajouté");

			//on enlève et on remet le bloc commentaire
			ajouter_bloc_commenter(false);
			ajouter_bloc_commenter(true);



			//forcer la màj au retour ssi on a poster un nouveau commentaire
			//console.log("on va forcer l'actualisation");
			$("#retour").on('click', function(){
			      recuperer_les_topics(true);
			});
			//idem pour le chargement des commentaires
			stocker('les_coms','');

			//on masque le chargement que quand le commentaire est bien envoyé
			chargement(false);



		}


		function chercher_le_mot_interdit(phrase){
			if(!data_etablissement['mots_interdits']) return ""

			var mots_interdits = data_etablissement['mots_interdits'].split(",")
			var le_mot_interdit = ""
			mots_interdits.some(function(valeur_mot){
				contient = phrase.toLowerCase().includes(valeur_mot.toLowerCase())
				le_mot_interdit = contient ? valeur_mot : ""
				return contient
			})

			return le_mot_interdit
		}

		function envoyer_le_topic(){

			var mon_titre = encodeURIComponent(element_DOM('titre_question').value.trim());
			var mon_contenu = recuperer_html_saisie_riche() // encodeURIComponent(element_DOM('contenu_question').value.trim());
			var mon_identifiant = recuperer('identifiant_courant');
			
			//if( element_DOM('anonymisation').checked === true) mon_identifiant = "Anonyme";

			//if(mon_contenu.toLowerCase().includes("facebook") || mon_contenu.toLowerCase().includes("fb") || mon_contenu.toLowerCase().includes("messenger")){
			var le_mot_interdit = chercher_le_mot_interdit(mon_contenu)
			if(le_mot_interdit !== ""){
				alert("Vous n'avez pas le droit d'utiliser le terme '"+le_mot_interdit+"' dans le cadre des cours à "+nom_etablissement+" sur SEKOOLY.")
				return -1;
			}
			
			var mon_id_classe_matiere = recuperer('dossier_chargé');
			
			//console.log("on va envoyer via " + mon_role);
			

			//var mon_action = "https://docs.google.com/forms/d/e/1FAIpQLSdJSsvIrh2f4cQ6t7KjHfvqFnU59urE1uHYdadhqYTTuEjobw/formResponse?usp=pp_url&entry.926690826="+ mon_titre +"&entry.75640320=" + mon_contenu +"&entry.513447430="+ mon_identifiant + "&entry.985226520="+ mon_id_classe_matiere + "&entry.746299129="+ mon_role+"&submit=Submit";

        	//var url = mon_action;

        	//console.log("l'action: " + url);
        	//console.log("taille actuellement : " + url.length);


			/*
			console.log('titre: "' + mon_titre + '"');
			console.log('contenu: "' + mon_contenu + '"');
			*/

			//on n'envoie pas de vide
			if (mon_titre!=="" && mon_contenu!==""){

				//on n'envoie qu'une fois le message				
				element_DOM('envoi').disabled=true;
				nom_table = "Topic"
				date_heure_actuelle = maintenant()
				id_topic = nouvel_id(nom_table, "Id_topic")

				nouveau_topic = {
					'Id_topic':id_topic,
					'Horodateur': date_heure_actuelle,
					'Titre': $("#titre_question")[0].value,
					'Votre_message': recuperer_html_saisie_riche(), //$("#contenu_question")[0].value,
					'Identifiant': recuperer('identifiant_courant'),
					'Id_classe_matiere': recuperer('dossier_chargé'),
					'Role': mon_role,
					'Nombre_de_coms':0

				}
				//console.log(nouveau_topic)
				ajouter_un_element(nom_table, nouveau_topic,id_topic)





				nom_table = "Notifs"
				mes_donnees = JSON.parse(recuperer('mes_donnees'))
				la_classe = recuperer('mon_type') === "Eleves" ? mes_donnees['Classe'] : element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim();
				la_matiere = recuperer('mon_type') === "Eleves" ? $("#accueil_utilisateur")[0].innerText : $("#accueil_utilisateur")[0].innerText.replace(la_classe,"").trim()
				id_notif = id_topic

				nouvelle_notif = {
					"id_notif" : id_notif,
					"Horodateur": date_heure_actuelle,
					"Type_notif" : "discussion",
					"Id_source" : id_topic,
					"Intitulé" :  $("#titre_question")[0].value,
					"Identifiant_originaire": recuperer('identifiant_courant'),
					"Role_originaire": mon_role,
					"Identifiant_derniere_modif" : recuperer('identifiant_courant'),
					'Role_derniere_modif' : mon_role,
					'Classe' : la_classe,
					'Classe_matiere' : "(" + la_classe + "|" + la_matiere + ")" ,
					'Id_classe_matiere' : recuperer("dossier_chargé"),
					'Date_derniere_modif' : date_heure_actuelle,
					'Cycle' : mes_donnees['Cycle']
				}
				//console.log(nouvelle_notif)
				ajouter_un_element(nom_table, nouvelle_notif,id_notif)



				//actualiser au bout de 1.5 secondes
				setTimeout(function(){
					actualiser_topics();
				},1500);





			}else{

				var msg_erreur = 'Il faut un titre et un contenu de message.';

				changer_msg_erreur(msg_erreur,true);
			}
        	

			chargement(false);
        	return false;

		}

		function changer_msg_erreur(msg,erreur){
			

			

			if (erreur) element_DOM('msg_erreur').style.color = 'red';
			if (!erreur) {
				//faire disparaitre le formulaire
				vider_fenetre();

				//afficher l'erreur au milieu du div
				ajouter_div_msg_erreur();
				element_DOM('msg_erreur').style.marginTop  = '20%';
				element_DOM('msg_erreur').style.color = 'green';

					
				//actualiser au bout de 1 seconde
				setTimeout(function(){
					stocker('les_topics',''); //on force la recuperation des topics
					window.location.href = window.location.href ;
				},3000);
				
			}



			element_DOM('msg_erreur').innerText = msg;
			
			


		}

		function vider_fenetre(titre_fenetre,est_visio){
			element_DOM('fenetre').innerHTML = '';

			//console.log("on a réaffiché");

			var clique_quitter = est_visio ? '' : 'onclick="quitter_previsualisation()"';

			//on ajoute le bouton quitter + en-tête
  			var bouton_quitter = '<div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="https://sekooly.github.io/SUPABASE/images/quitter.png" id="bye_prev" '+clique_quitter+' style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;"> </div>';

  			var le_titre = "";
  			if(titre_fenetre) le_titre = '<div class="titre_fenetre" id="titre_fenetre">'+ titre_fenetre + '</div>';

			//on ajoute le bouton plein écran
  			var plein_ecran = '<div style="position: fixed; z-index:5;" id="conteneur_plein_ecran" > <img alt="plein écran" style="position: fixed;" id="pleinecran" src="https://sekooly.github.io/SUPABASE/images/img_petitecran.png" onclick="switch_mode()" class="pleinecran"> </div>'

  			//on rajoute tout
  			var elements = document.createElement('div');
  			elements.innerHTML = bouton_quitter + le_titre + plein_ecran;

			while(elements.firstChild) {
			    element_DOM('fenetre').appendChild(elements.firstChild);
			}


			//faire le bon affichage de la fenêtre
			ajuster_boutons_fenetre();
			initialisation_bouton();


		}


		function charger_question(id_topic,forcing){

			if(id_topic){

				stocker("topic_chargé",id_topic)

				//on récupère tous les commentaires du topic
				//console.log('on recupere les coms du topic n° ' + id_topic + '...');
				recuperer_les_coms(id_topic, forcing);
				

			}

		}

		function recuperer_les_coms(id_topic_long, forcing){

			chargement(true);


			var topic_chargé = recuperer("topic_chargé");
			if (topic_chargé===null) topic_chargé = "";
			var le_topic_deja_charge = topic_chargé.toString();
			var id_topic = id_topic_long.toString();

			//stocker("nb_com_actuel",$(".nb_com_actuel#"+id_topic)[0].innerText)
			stocker("nb_com_actuel",$("u#"+id_topic+".nb_com_actuel")[0].innerText)

			/*
			console.log('ancien: ' + le_topic_deja_charge)
			console.log('nouveau: ' + id_topic)
			*/

			ajouter_poste_initial(id_topic_long);

			if (id_topic !== le_topic_deja_charge || forcing===true){
				stocker("les_coms",'');
			}

			if (recuperer("les_coms") === null || recuperer("les_coms") === '' || recuperer("les_coms") === '[]' || forcing){

				nom_table = "Coms"
				nom_champ_reference = "Id_topic"
				valeur_champ_reference = id_topic
				rechercher(nom_table, nom_champ_reference, valeur_champ_reference).then(le_poste => {
					//console.log(le_poste[0])
					//console.log(le_poste)

					//todo: trier par horodateur CROISSANT

					les_coms = le_poste
					if (les_coms !== undefined && les_coms !== null && les_coms.length > 0 ){
						//console.log("mes commentaires : " + JSON.stringify(les_coms));
					
						stocker("topic_chargé",id_topic.toString());
						stocker("les_coms",JSON.stringify(les_coms));
						traitement_coms(id_topic);
					}
					
				})

			}else{
				//on traite directement
				//console.log('on n\'actualise pas');
				traitement_coms(id_topic);
			}

			chargement(false)

		}




		function ajouter_poste_initial(id_topic){


			//on recupere le topic dans la liste des topics via id_topic
			var les_topics = JSON.parse(recuperer('les_topics'));
			var le_topic_obj = les_topics.filter(function(valeur){
				return valeur['Id_topic'].toString() === id_topic.toString();
			});
			//console.log('le bon topic:' + le_topic_obj[0]);
			var le_topic = le_topic_obj[0];
			//console.log("notre topic: " + JSON.stringify(le_topic));


			vider_fenetre("");
			var titre_poste = le_topic['Titre'];
			var auteur_poste = le_topic['Identifiant'].toUpperCase();
			var role_auteur_poste = le_topic['Role'];
			var contenu_poste = decodage(le_topic['Votre_message']);
			var date = afficher_date(le_topic['Horodateur']);

			//afficher le poste principal
			var entete_poste = '	<div id="entete_poste" style="display: flex;overflow-wrap: anywhere;"><img id="<<" src="https://sekooly.github.io/SUPABASE/images/img_retour.png" style="width: 30px;margin: 2%;cursor:pointer;height: 30px;"  onclick="recuperer_les_topics(false)"> <div id="titre_du_poste" style="font-weight: bold;margin: 2%;font-size: 25px;">' + titre_poste + '</div></div>';

			var entete = document.createElement('div');
			entete.innerHTML = entete_poste;
			element_DOM('fenetre').appendChild(entete);

			var bloc_poste = '<div id="bloc_poste" style="padding: 2%;display: block;overflow-wrap: anywhere;border-bottom-style: solid;"><div id="auteur_du_poste" style="font-weight: bold;color: #FF6C00;">' + auteur_poste +' (' + role_auteur_poste + ')</div><h id="contenu_poste" style=""> '+ contenu_poste+'</h><h style="color: #B5B3B8;" id="date_poste"> ' + date + '</h></div>';



			var emplacement_commentaire = '<div id="emplacement_commentaire" style="padding: 2%;display: block;overflow-wrap: anywhere;"></div>';

			

			//tout ajouter
			var les_commentaires = document.createElement('div');
			les_commentaires.id ="liste_des_coms";
			les_commentaires.style.overflow = "hidden auto";
			les_commentaires.style.height = "85%";
			les_commentaires.innerHTML = bloc_poste + emplacement_commentaire ;

			element_DOM('fenetre').appendChild(les_commentaires);
		
			ajouter_bloc_commenter(true);


		}

		function ajouter_bloc_commenter(oui){
			
			//element_DOM('maquestion').src="";

			if (oui){

				var bloc_commenter = '<div id="bloc_commenter" style="padding: 2%;display: block;text-align: end;"><textarea id="mon_com" style="display:inline-block; width:100%; resize: unset; min-height:200px; overflow-y:hidden;" placeholder="Votre commentaire..." maxlength="1500"></textarea><button id="envoicommentaire" onclick=ajouter_mon_com() style="height: 30px;background-color: #FF6C00;">Commenter</button></div>';

				//ajouter le bloc COMMENTER dans le DOM
				var le_bloc = document.createElement('div');
				le_bloc.innerHTML = bloc_commenter;
				while(le_bloc.firstChild) {
				    element_DOM('liste_des_coms').appendChild(le_bloc.firstChild);
				}

				rendre_riche("mon_com")

			}else{
				if (element_DOM('bloc_commenter') !== null) element_DOM('bloc_commenter').remove();
			}

		}


		function traitement_coms(id_topic_str){

			chargement(true);


			//on recupere les commentaires reçus sur ce topic
			var les_coms = JSON.parse(recuperer('les_coms'));
			les_coms = Object.keys(les_coms).map(i => les_coms[i])
			/*/console.log('Il y a '  + les_coms.length + ' commentaires');
			console.log(les_coms);*/

			//on trie dans l'ordre croissant de Horodateur
			les_coms = les_coms.sort(function tri_ordre_chrono_croissant(a, b) {
				//return moment(b.Horodateur, "DD/MM/YYYY HH:mm:ss")  - moment(a.Horodateur, "DD/MM/YYYY HH:mm:ss")
				return convertir_en_date(a.Horodateur) - convertir_en_date(b.Horodateur)
			});
			//console.log(les_coms)


			les_coms.forEach(function(valeur){
				if (valeur !== null){
					var auteur_poste = valeur['Identifiant'].toUpperCase();
					var role_auteur_poste = valeur['Role'];
					var contenu_poste = valeur['Votre_commentaire'];
					var date = afficher_date(valeur['Horodateur']);
					ajouter_un_commentaire(auteur_poste,role_auteur_poste,contenu_poste,date);
				}
			});

			

			chargement(false);
		}

		function ajouter_un_commentaire(auteur_poste,role_auteur_poste,contenu_poste,date){

			contenu_poste = decodage(contenu_poste);

			var un_com = '<div id="un_commentaire" style="display: block;overflow-wrap: anywhere;border-bottom-style:inset;border-width:1px; padding:1%;"><div id="auteur_du_poste" style="font-weight: bold;color: #FF6C00;">'+ auteur_poste + ' ('+  role_auteur_poste  +')</div><h id="contenu_poste" style=""> ' + contenu_poste + '</h><h style="color: #B5B3B8;" id="date_poste"> '+ date + '</h></div>';

			//ajouter le commentaire au DOM
			var nouveau_com = document.createElement('div');
			nouveau_com.innerHTML = un_com;
			if(element_DOM('emplacement_commentaire')){
				while(nouveau_com.firstChild) {
				    element_DOM('emplacement_commentaire').appendChild(nouveau_com.firstChild);
				}
			}

		}

		function ajouter_mon_com(){

			chargement(true);
			var contenu_poste = recuperer_html_saisie_riche() //element_DOM('mon_com').value.trim();

			//on continue ssi contenu poste NON VIDE
			if (contenu_poste!==""){
				var mon_identifiant = recuperer('identifiant_courant').toUpperCase();
				
				

				var date = afficher_date(maintenant());

				//envoyer le commentaire sur le serveur
				id_topic = recuperer('topic_chargé');
				//console.log(id_topic)
				//console.log(contenu_poste)
				envoyer_le_com(id_topic,mon_identifiant,mon_role,contenu_poste,date);
			}
			chargement(false);
		}


		
		function recuperer_les_topics(forcing){
			chargement(true);
			
			//on ajoute les boutons Actualiser/Ajout/Quitter TOPIC au DOM
			//console.log("on va vider");
			vider_fenetre("");
			//console.log("c'est vidé");
			afficher_fenetre(true);

			element_DOM('fenetre').innerHTML += html_boutons_fenetre();


		    if (forcing ||recuperer("les_topics") === null || recuperer("les_topics") === ''){
				
		    	nom_table = "Topic"
		    	nom_champ_reference = "Id_classe_matiere"
		    	valeur_champ_reference = recuperer("dossier_chargé")
		    	nom_champ_a_chercher = ""

		    	//console.log("Récupérons d'abord...")
		    	rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher).then(les_topics => {
		    		//console.log(les_topics)
		    		les_topics.sort(function tri_ordre_chrono_decroissant(a, b) {
						//return moment(b.Horodateur, "DD/MM/YYYY HH:mm:ss")  - moment(a.Horodateur, "DD/MM/YYYY HH:mm:ss")
						return convertir_en_date(b.Horodateur) - convertir_en_date(a.Horodateur)
					});
		    		//console.log(les_topics)

		    		stocker("les_topics",JSON.stringify(les_topics));
		    		traitement();
		    		chargement(false);
	    		}).catch(e => {
	    			console.error(e)
	    			alert("Impossible de récupérer les questions/discussions de cette matière. Vérifiez que vous êtes toujours connecté à internet, ou réessayer plus tard.")
	    			chargement(false);
	    		})
	    	


			}else{
				//console.log("traitement direct")
				//on traite direct les données
				traitement();
				chargement(false);				
			}

			
		}

		function traitement(){

			stocker("les_coms","")

			if (recuperer("les_topics").length === 0 || recuperer("les_topics") === "[]") {
				commentaire = '<div id="vide" style="text-align: center;color: grey;margin: 10%;"> <i id="vide"> Il n\'y a pas encore de questions posées dans ce cours. </i> </div>';

				//ajouter la fenêtre au DOM
				var mon_commentaire = document.createElement('div');
				mon_commentaire.innerHTML = commentaire;
				while(mon_commentaire.firstChild) {
				    element_DOM('fenetre').appendChild(mon_commentaire.firstChild);
				}
			}else{

				var liste_des_topics = JSON.parse(recuperer("les_topics"));
			
				//pour chaque topic, l'afficher en mode bg dans la fenetre
				if(!element_DOM('div_liste_topics')){
					var ma_liste = document.createElement('div');
					ma_liste.style.overflowX = "hidden";
					ma_liste.style.overflowY = "auto";
					ma_liste.id = "div_liste_topics";
					ma_liste.style.height = '90%';
					element_DOM('fenetre').appendChild(ma_liste);
				}else{
					//si la liste existe déjà
					var ma_liste = element_DOM('div_liste_topics');
				}

				liste_des_topics.forEach(function (valeur){
					//console.log("on va ajouter " + valeur ['Titre']);


					var titre = valeur['Titre'];
					element_contenu = document.createElement('div')
					element_contenu.innerHTML = valeur['Votre_message'];
					var contenu = element_contenu.innerText
					
					var date = afficher_date(valeur['Horodateur']);
					var auteur =  valeur['Identifiant'] + " (" + valeur['Role'] + ")";
					var id_topic = valeur['Id_topic'] ;
					var nb_coms = valeur['Nombre_de_coms'];
					if(nb_coms === undefined) nb_coms = 0;


					var icone_poubelle = '<span id="bye' + id_topic + '"><img alt="supprimer" class="byebye" onclick="event.stopPropagation(); clic_de_poubelle_topic(this)" src="https://sekooly.github.io/SUPABASE/images/img_trash.png" style="width: 20px;position: relative;float: right;" id="bye' + id_topic + '"></span>';

					//si élève/prof et le topic n'est pas le sien: pas d'icone poubelle
					if(!recuperer('mon_type').includes("Administration") && valeur['Identifiant'] !== recuperer('identifiant_courant').trim()) icone_poubelle = "";

					//console.log("l'icone poubelle = " + icone_poubelle + "\n")

					var dans_fenetre_str = '<ul class="bloc_topic" onclick="clic_de_topic(this)" id="' + id_topic + '"> '+ icone_poubelle + ' <p id="' + id_topic + '" style="font-size: 25px; margin:0px;"> <b class="contenu_question" id="' + id_topic + '"> '  + titre +'  </b> <p id="' + id_topic + '" class="contenu_question"> ' + contenu + '</p><i class="petite_ecriture"> <h id="' + id_topic + '"><u id="' + id_topic + '"> Nombre de réponses</u>: <u class="nb_com_actuel" id="' + id_topic + '">' + nb_coms + '</u> </h> <h id="' + id_topic + '">  &emsp; <u id="' + id_topic + '"> Publié le</u>: ' + date + ' </h><h id="' + id_topic + '">  &emsp; <u id="' + id_topic + '"> Publié par</u>: ' + auteur + ' </h></i></ul>';
					
					//console.log("dans_fenetre: " + dans_fenetre_str)
					



					//ajouter la fenetre au DOM	
					var un_topic = document.createElement('div');
					un_topic.innerHTML += dans_fenetre_str;
					while(un_topic.firstChild) ma_liste.appendChild(un_topic.firstChild);



				});
				
			}

		}


		function clic_de_topic(ceci){
			charger_question(ceci.id,false);
		}

		function clic_de_poubelle_topic(ceci){

			id=ceci.id.split("bye")[1];

			accepter_suppression = window.confirm("Êtes vous sûr de vouloir supprimer ce fil de discussion?");

			if(accepter_suppression) {
				chargement(true)
				supprimer("Coms","Id_topic",id)
				supprimer("Topic","Id_topic",id)
				supprimer("Notifs","id_notif",id)
				
				//actualiser dans 1 seconde
				setTimeout(function(){
					actualiser_topics()
				}, 1500);
				chargement(false)

			}


		}


		function decodage(text){
			return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
		}




		function impossible_de_cliquer(){
			return element_DOM('img_chargement').style.visibility === 'visible';
		}







    




















/****************************** suppressions TOPIC, Commentaires, Fichiers **********************************/

function supprimer_topic(id_topic){

	if(impossible_de_cliquer()) return -1;
	chargement(true);
	//console.log('tu as cliqué sur la poubelle. On va supprimer ' + id_topic);
	

	var lien_script = 'https://script.google.com/macros/s/AKfycbycJOH1smLn37Bk91cp3bmBHbZJmHknSrvTkeBMEqMFMbuRv9k/exec';

	var html = '<form method="post"  action="'+lien_script+'" id="supprimer_un_topic" style="display: none;" >';
	html += '<input type="hidden" name="mode" value="supprimer" >';
	html += '<input type="hidden" name="id_topic" value="'+ id_topic + '" >';
    html += '</form>';	                
	                
    $("body").append(html);

    var form = $("#supprimer_un_topic");

	$.ajax({
		type: "POST",
		url: lien_script,
		data: form.serialize(),
		success: function(data) {
			//console.log(data);
			actualiser_topics();

		}

	});

	$('#supprimer_un_topic').remove(); // on enlève le form invisible : TRES UTILE
}



function supprimer_fichier(id_fichier){

	var confirmation_suppression = confirm("Êtes-vous sûr de vouloir supprimer ce fichier ? Cette action est irréversible.");

	if(!confirmation_suppression) return -1;

	chargement(true);
	//console.log('on va supprimer ' + id_fichier + ' dans ' + recuperer("dossier_chargé"));

	

	



	var lien_script = 'https://script.google.com/macros/s/AKfycbw_04bdiepfQ0P9Ddtn6nyRPjxzxumORN4J8xm7bnmu7yO3HvQ/exec';

	//si c'est un manuel -> on ne supprime pas sur le drive
	if ($("#" + id_fichier)[0].parentNode.id === "drive_manuels"){
		lien_script = "https://script.google.com/macros/s/AKfycbzZr7c0Ej4QdA0CxHjXdR35eW6USvpkyBUdBQ8lVygc65vOolA/exec"
	}

	//console.log(lien_script)

	var html = '<form method="post"  action="'+lien_script+'" id="supprimer_un_fichier" style="display: none;" >';
	html += '<input type="hidden" name="id_fichier" value="'+ id_fichier + '" >';
	html += '<input type="hidden" name="API_KEY_DELETE" value="'+ recuperer('API_KEY_DELETE') + '" >';
    html += '</form>';	                
	                
    $("body").append(html);

    var form = $("#supprimer_un_fichier");

    /*
    console.log(html);
    console.log(form);
	*/




	$.ajax({
		type: "POST",
		url: lien_script,
		data: form.serialize(),
		success: function(data) {
			console.log(data);
			//chargement(false);

			// on recupere l'alerte
			var msg_alerte = element_DOM("snackbar");

			// on affiche l'alerte
			msg_alerte.innerText = data;
			msg_alerte.className = "show";

			//supprimer dans la BDD
			supprimer_rendus_du_fichier(id_fichier)
			supprimer("Notifs","id_notif",id_fichier + suite_notif())
			supprimer("Fichiers","id_fichier",id_fichier)
			
			//dans 4 secondes, on masque l'alerte et on actualise			
			setTimeout(function(){
				msg_alerte.className = "";
				window.location.href = window.location.href;

			}, 4000);
			
			chargement(false);

		},

		error: function(data){
			console.log(data);
			alert('Impossible de supprimer le fichier. Vérifiez que vous êtes toujours connecté à internet.');

		}
	});

	


	
	

}







function supprimer_rendus_du_fichier(id_fichier){
	//on récupère chaque rendu commençant par id_fichier

	rechercher("Rendus", "id_fichier_sujetdevoir", id_fichier, "").then(les_devoirs => {
		
		//console.log(les_devoirs)
		if(les_devoirs.length > 0){

			for (var i = les_devoirs.length - 1; i >= 0; i--) {
				
				id_fichier_donné = les_devoirs[i]['id_fichier'] 
				id_devoir_rendu = les_devoirs[i]['id_devoir']
				console.log(les_devoirs[i])

				supprimer_devoir('',id_fichier_donné,id_devoir_rendu)

			}
		}

	}).catch(e => {
		console.error(e)
	})
}













/************************ EMPLOI DU TEMPS *******************************/
	
function ajouter_iframe_edt(){
	var mon_edt_html = '<iframe id="calendrier" src="" frameborder="0" scrolling="no"> </iframe>';
	var mon_edt = document.createElement('div');
	mon_edt.innerHTML = mon_edt_html
	element_DOM('fenetre').appendChild(mon_edt.firstChild);
}


function recuperer_edt(nom_classe_fournie){
	chargement(true);

	vider_fenetre("Emploi du temps");
	ajouter_iframe_edt();
	afficher_fenetre(true);
	

	var nom_classe = "Tous";
	if(recuperer('mon_type') === "Administration_bis" || recuperer('dossier_chargé'))
		nom_classe = element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim();

	if(recuperer('mon_type') === "Eleves")
		nom_classe = JSON.parse(recuperer('mes_donnees'))['Classe'];

	if(nom_classe_fournie)
		nom_classe = nom_classe_fournie

	//console.log("la classe: "+ nom_classe);

	var calendrier = element_DOM('calendrier');
	calendrier.src = "";


	nom_table = "Classes"
	nom_champ_reference = "Classe"
	valeur_champ_reference = nom_classe
	nom_champ_a_chercher = "id_googlecalendar"
	rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher).then(id_googlecalendar => {
		id_googlecalendar = id_googlecalendar[0]['id_googlecalendar']
		var la_source = "https://calendar.google.com/calendar/embed?wkst=2&bgcolor=%23ffffff&ctz=Africa%2FNairobi&src=" + id_googlecalendar + "&color=%234285F4&showPrint=0&showTabs=0&showCalendars=0&showTitle=1&mode=WEEK&showTz=0";
		calendrier.src = la_source;
		chargement(false);
	}).catch(error => {
		console.error(error);
		alert('Calendrier introuvable, veuillez réessayer.');
		
		chargement(false);
	})

}


function supprimer_cookies_google(){

    var cookies = document.cookie.split(";");
	for(var i=0; i < cookies.length; i++) {
		console.log('cookie: ' + cookies[i]);
	    var equals = cookies[i].indexOf("=");
	    var name = equals > -1 ? cookies[i].substr(0, equals) : cookies[i];
	    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}


}










/****************************** NOTIFICATIONS **********************************/

//on recupere les notifs toutes les 60 secondes
var intervalle_en_ms = 60000;
var en_boucle = false;

function pannel_notifs_deja_visible(){
	return $('#pannel_notif').is(':visible');
}

function virer_le_pannel_notifs(){
	if (element_DOM('pannel_notif')) element_DOM('pannel_notif').style.display = "none";
}

//au clic de l'affichage
function switch_pannel_notifs(){


	if(impossible_de_cliquer()) return -1;

	chargement(true);
	//console.log("on affichera les notifs stockées");
	var afficher_les_notifs = !pannel_notifs_deja_visible();

	element_DOM('pannel_notif').style.display = afficher_les_notifs ? "block" : "none";


	//il faut afficher 
	if(afficher_les_notifs){
		//donc on met à jour la date dans la bdd, en local et masquer la bulle

		
		mes_notifs = JSON.parse(recuperer('mes_notifs'));
		


		//si pas de notifs: rien
		if (!mes_notifs || mes_notifs.length === 0)
			element_DOM('pannel_notif').innerHTML = '<i class="notifs_vide"> Vous n\'avez pas encore de notifications.</i>';
		else
			vider_les_notifs();

		mes_notifs.forEach(function(valeur,index){

			//ajouter CHAQUE notif avec LEUR PROPRIETE DE CONSULTATION
			ajouter_la_notif(valeur,index);
		});
		
		
		
	}

	
	positionner_bulle_notif();
	positionner_pannel_notif();


	//on active par défaut "tous"
	$("#filtre_tous").click();

	//au clic droit -> marquer non lu
	$(".une_notif").on("contextmenu",function(e){
		console.log("vous avez cliqué droit sur " + e.target.id)
	})



	chargement(false);
	
}

function ajouter_la_notif(la_notif,index){
	//console.log(la_notif['Motif_notification']);

	var Type_notif=la_notif['Type_notif'];
	var Id_source=la_notif['Id_source'];
	var id_notif=la_notif['id_notif'];
	var Identifiant_derniere_modif=la_notif['Identifiant_derniere_modif'].toUpperCase();
	var Identifiant_originaire = la_notif['Identifiant_originaire'].toUpperCase();
	var Role_derniere_modif=la_notif['Role_derniere_modif'];
	

	var Date_derniere_modif=afficher_date(la_notif['Date_derniere_modif']);

	var la_matiere_concernee = la_notif['Classe_matiere'].substring(la_notif['Classe_matiere'].lastIndexOf("|") + 1, la_notif['Classe_matiere'].lastIndexOf(")"));
	var la_classe_concernee = recuperer('mon_type') !== "Eleves" ? la_notif['Classe_matiere'].substring(la_notif['Classe_matiere'].lastIndexOf("(") + 1, la_notif['Classe_matiere'].lastIndexOf("|")) : "";
	var intitule_notif = la_notif['Intitulé'].slice(0,20).trim();
	if(intitule_notif.length < la_notif['Intitulé'].length) intitule_notif+="...";

	var id_dossier = la_notif['Id_classe_matiere'];

	var ma_notif = document.createElement('div');
	ma_notif.className = "une_notif";
	ma_notif.id = Id_source;
	ma_notif.setAttribute('id_notif',id_notif.toString());
	ma_notif.onclick = function(e){
		chargement(true);
		clic_de_notif(Type_notif,ma_notif.id,id_dossier,ma_notif.getAttribute('id_notif'));
	};


	//surbrillance si pas encore lu (OLD)
	/*
	if(index<Number($("#bulle_notif")[0].innerText)){
		ma_notif.className = "non_lu";
	}*/


	ma_notif.className = liste_notifs_lues.includes("," + id_notif + ",") ? "une_notif" : "non_lu"



	var identifiant_notif = '<b style="color: #FF6C00;">' + Identifiant_derniere_modif + ' ('+Role_derniere_modif+') </b>';
	var contenu_notif = contenu_notification(Type_notif,la_matiere_concernee,la_classe_concernee,Identifiant_originaire,Identifiant_derniere_modif);
	var intitule = ' - <i><b style="color:#c65e46">'+intitule_notif  +'</b></i>'
	var icone_notif = '<span> <img src=' +  choix_image(Type_notif)  + ' class="icone_notif"> </span>'
	var date_grise = '<div> '+icone_notif+' <i style="color: #bfbfbf;"> ' + Date_derniere_modif+ '  </i></div>';




	ma_notif.innerHTML = identifiant_notif + contenu_notif + intitule + date_grise;
	element_DOM('pannel_notif').appendChild(ma_notif);

}

function clic_de_notif(type_notif,id_source,id_dossier,id_notif){
	
	//commenter
	envoyer_ma_date_de_consultation()
	
	//envoyer cet ID
	//console.log("on va cliquer sur " + id_notif)
	if(id_notif) jai_lu(id_notif, true)
	//console.log("on a cliqué sur "+ id_notif)


	//pas de minipopup tdb
	$("#mini_popup").remove()
	
	//on attend 0.5 seconde avant de passer a la suite
	setTimeout(function(){	
		chargement(true)
		//on vire les notifs
		virer_le_pannel_notifs();

		//virer toute fenetre ouverte
		afficher_fenetre_rendudevoir(false);
		quitter_previsualisation();


		if(type_notif === "fichier"){
			notif_fichier(id_source,id_dossier);
		}else if(type_notif === "discussion"){
			notif_discussion(id_source,id_dossier);
		}else if(type_notif === "devoir"){
			notif_devoir(id_source,id_dossier);
		};


		//on affiche tous les fichiers avec le bon filtre
		filtrer_date_effet();
		chargement(false)
	},500)


}

function notif_fichier(id_source,id_dossier){

	//changer dossier_chargé
	//changer fichier_ouvert
	//puis chargement a l'arrivée
	stocker_temp('dossier_chargé',id_dossier);
	stocker('fichier_ouvert',id_source);
	window.location.href = window.location.href;			
}

function notif_discussion(id_source,id_dossier){
	
	//charger dossier à charger
	stocker_temp('dossier_chargé',id_dossier);
	//pas d'autres fenêtre 
	stocker('fichier_ouvert','');

	//actualiser
	initialisation().then(function(){
		
		
		//ouvrir les topics
		charger_les_topics(true).then(function(){

			if($('#'+id_source+'.bloc_topic').length>0){
				
				//console.log('on y est!!!')
				//nouvelle couleur topic (temporaire)
				changer_couleur_temporairement(id_source,"bloc_topic","#b9e5de",1000);

				//var position_scroll = $('#'+id_source+'.bloc_topic').offset().top;
				var position_scroll = $("#"+id_source+".bloc_topic")[0].offsetTop - $("#"+id_source+".bloc_topic")[0].offsetHeight;
				$("#div_liste_topics").scrollTop(position_scroll);

			
			}else{

				alert("Discussion introuvable: le proprietaire l'a supprimé.");
			}

		});	
	});

}

function notif_devoir(id_source,id_dossier){


	
	//charger dossier à charger
	stocker_temp('dossier_chargé',id_dossier);
	//pas d'autres fenêtre 
	stocker('fichier_ouvert','');

	//actualiser et attendre le chargement
	initialisation().then(function(){

		//cliquer sur l'icône rendu de devoir
		recuperer_devoirs(true);

		//choisir le devoir à afficher
		$("#devoir_choisi").val(id_source);
		//console.log("c'est choisi");
		$("#devoir_choisi").change();
		//console.log("c'est changé");
		
	})



}








function changer_couleur_temporairement(id_element,class_element,couleur_clignotement,duree_une_couleur){

	//nouvelle couleur sous duree_une_couleur secondes
	$('#'+id_element+'.'+class_element).css('background-color',couleur_clignotement)

	//remettre la couleur sous duree_une_couleur secondes
	setTimeout(function(){
		$('#'+id_element+'.'+class_element).css('background-color',"");
	},duree_une_couleur);


}



function choix_image(type_notif){
	return type_notif==="fichier" ? "https://sekooly.github.io/SUPABASE/images/img_ajout.png"
	: type_notif==="discussion" || type_notif==="commentaire" ? "https://sekooly.github.io/SUPABASE/images/question.png"
	: type_notif==="devoir" ? "https://sekooly.github.io/SUPABASE/images/img_devoirs.png" : "";
}

function contenu_notification(type_notif,la_matiere_concernee,la_classe_concernee,Identifiant_originaire,Identifiant_derniere_modif){
	//console.log(type_notif);

	var phrase_discussion = Identifiant_originaire===Identifiant_derniere_modif ? " a créé ou commenté une discussion dans " : " a récemment commenté dans "

	var phrase_devoir = Identifiant_originaire===Identifiant_derniere_modif ? " a rendu un devoir dans " : " a laissé une remarque sur un devoir dans "

	var phrase = type_notif==="fichier" ? " a publié un nouveau fichier dans "
	: type_notif==="discussion" ? phrase_discussion
	: type_notif==="devoir" ? phrase_devoir
	: type_notif==="visio" ? " a intéragi en visioconférence dans "
	: " a récemment intéragi dans ";

	if (la_classe_concernee) la_classe_concernee = " (" + la_classe_concernee + ")";

	return phrase + " <b>" + la_matiere_concernee + la_classe_concernee + '</b>';

}



function vider_les_notifs(){

	var tout_marquer_html = '<div style="display: flex;"><span class="tout_marquer" id="rien_lire" onclick="executer_ne_rien_lire()">Tout marquer comme NON LU❌</span><span class="tout_marquer" id="tout_lire" onclick="executer_tout_lire()">Tout marquer comme LU✅</span></div>'
	element_DOM('pannel_notif').innerHTML= tout_marquer_html+'<div class="filtres_notifs un_filtre_notif" height="50px" style=""><div class="un_filtre_notif"  id="filtre_tous">Tous</div><div class="un_filtre_notif"><img alt="Discussions" src="https://sekooly.github.io/SUPABASE/images/question.png" class="icone_filtre_notif"></div><div class="un_filtre_notif"><img alt="Devoirs" src="https://sekooly.github.io/SUPABASE/images/img_devoirs.png" class="icone_filtre_notif"></div><div class="un_filtre_notif"><img alt="Fichiers" src="https://sekooly.github.io/SUPABASE/images/img_ajout.png" class="icone_filtre_notif"></div></div>';

		

		//changement de couleurs quand la souris entre/part
	$(".un_filtre_notif").on('mouseover',function(e){
		e.target.style.backgroundColor = "#ccc";
	});
	$(".un_filtre_notif").on('mouseout',function(e){
		e.target.style.backgroundColor = "";
	});

	//au clic: on filtre les notifs
	$(".un_filtre_notif").on('click',function(e){
		e.stopPropagation();
		activer_filtre(e.target);
	});


}


function executer_tout_lire(){

	//au clic de tout marquer comme lu -> on ajoute toutes les ID dans la liste de notifs lues	
	//pour chaque élément "non_lu"
	$(".non_lu:visible").each(function(index,une_notif){
		//console.log(une_notif.id)
		jai_lu(une_notif.getAttribute("id_notif"), false, une_notif)

	})

	apres_maj_lecture_notifs()

}

function executer_ne_rien_lire(){
	//pour chaque élément "non_lu"
	$(".une_notif:visible").each(function(index,une_notif){
		jai_pas_lu(une_notif.getAttribute("id_notif"), false, une_notif)
	})

	apres_maj_lecture_notifs()
}

function apres_maj_lecture_notifs(){

	//envoyer au serveur
	envoyer_ce_que_jai_lu()

	//récupérer la nouvelle valeur de liste
	recuperer_liste_notifs_lues()

	//actualiser ma liste perso
	afficher_bulle_notifs()
}

function jai_pas_lu(id_notif, envoyer_cette_non_lecture, une_notif){
	
	//console.log("❌ignorer " + id_notif)

	//stocker dans la variable globale
	liste_notifs_lues = liste_notifs_lues.includes(","+id_notif+",") ? liste_notifs_lues.replaceAll(id_notif + ",", "") : liste_notifs_lues

	//console.log(liste_notifs_lues)

	//virer les classes non lues
	//une_notif = $("#pannel_notif > [id='"+id_notif+"']:visible")[0]
	if(une_notif) une_notif.className = "non_lu"

	if(envoyer_cette_non_lecture) envoyer_ce_que_jai_lu()
}

function jai_lu(id_notif, envoyer_cette_lecture, une_notif){
	
	//console.log("✅lire " + id_notif)

	//stocker dans la variable globale
	liste_notifs_lues = !liste_notifs_lues.includes(","+id_notif+",") ? liste_notifs_lues + id_notif + "," : liste_notifs_lues

	//console.log(liste_notifs_lues)

	//virer les classes non lues
	//une_notif = $("#pannel_notif > [id='"+id_notif+"']")[0]
	if(une_notif) une_notif.className = "une_notif"

	if(envoyer_cette_lecture) envoyer_ce_que_jai_lu()

}

function envoyer_ce_que_jai_lu(){

	nom_table = recuperer("mon_type").split("_")[0]
	nouvelle_liste = {
		liste_notifs_lues: liste_notifs_lues
	}
	url = racine_data + nom_table + "?Identifiant=eq." + recuperer("identifiant_courant") + "&" + apikey
	/*
	console.log(url)
	console.log(nouvelle_liste)
	*/
	patch_resultat_asynchrone(url, nouvelle_liste)


}

function activer_filtre(element_filtre){

	//on enleve tous les encadrés précédents
	$(".un_filtre_notif").filter(function(valeur){
		$(this)[0].style.borderStyle ="";
	})

	if(element_filtre.tagName === "IMG") element_filtre = element_filtre.parentNode;

	//le courant est encadré
	element_filtre.style.borderStyle= 'double';

	var nom_filtre = element_filtre.innerHTML;
	var condition_filtre = nom_filtre.includes('question.png') ? 'question.png'
	: nom_filtre.includes('img_devoirs') ? 'img_devoirs'
	: nom_filtre.includes('img_ajout') ? 'img_ajout'
	: "div"; //on recuperera tout

	var nouvelle_liste_notifs = $(".non_lu, .une_notif").filter(function(valeur){
		//masquer tout ce qui ne respecte pas la confition
		$(this)[0].style.display = $(this)[0].innerHTML.includes(condition_filtre) ? "" : "none";
		return $(this)[0].innerHTML.includes(condition_filtre);

	});

	//console.log(nouvelle_liste_notifs.length)
}



function recuperer_notifs(){

	chargement(true);

	if(!recuperer('mes_donnees')) return -1;


	var ma_classe = JSON.parse(recuperer('mes_donnees'))['Classe'];
	var identifiant = recuperer('identifiant_courant');
	var mon_type = recuperer('mon_type');
	if(mon_type.includes('Administration')) mon_type = 'Administration';


	var mes_notifs= [];
	var url = racine_data + mon_type + "?Identifiant=eq."+ identifiant + "&" + apikey




	try{
		var ma_date_consultation = get_resultat(url)[0]['Derniere_consultation_notifs'];
	}catch(e){
		var ma_date_consultation = "30/12/1899 00:00:00"
	}
	
	//console.log(url)
	//console.log(ma_date_consultation)
	stocker_ma_date_de_consultation(ma_date_consultation)
	//console.log(mes_notifs);

	

	nom_table = "Notifs"
	nom_champ_reference = mon_type.includes("Admin") ? "Cycle" : "Classe"
	valeur_champ_reference = JSON.parse(recuperer("mes_donnees"))[nom_champ_reference]

	//si prof -> les notifs de ses matieres issues du champ Classe
	//limité à 150
	if(mon_type.includes('Profs')){

		rechercher_notifs_prof(valeur_champ_reference, 150).then(les_notifs => {
			mes_notifs = les_notifs.filter(function(valeur,index){
				return valeur['Identifiant_derniere_modif'] !== recuperer('identifiant_courant')
			})

			

			//console.log(mes_notifs)
			stocker_mes_notifications(mes_notifs);
			
			//affiche la bulle SSI nouvelles notifs stockées
			afficher_bulle_notifs();		
		})

	}else{

		//limité à 150
		rechercher(nom_table, nom_champ_reference, valeur_champ_reference, "",150).then(les_notifs => {
			mes_notifs = les_notifs.filter(function(valeur,index){
				return valeur['Identifiant_derniere_modif'] !== recuperer('identifiant_courant')
			})

			//si eleve -> on vire les autres devoirs des eleves
			if(mon_role === "Eleve"){
				mes_notifs = mes_notifs.filter(function(valeur,index){
					//si je ne suis pas originaire ET c'est un devoir -> on ne garde pas
					return !(valeur['Identifiant_originaire'] !== recuperer('identifiant_courant') && valeur['Type_notif'] ==='devoir' )
				})	
			}

			//console.log(mes_notifs)
			stocker_mes_notifications(mes_notifs);
			
			//affiche la bulle SSI nouvelles notifs stockées
			afficher_bulle_notifs();		
		})



	}


}

function stocker_mes_notifications(mes_notifs){
	
	//dans l'ordre chronologique DECROISSANT
	//TODO ORDRE DECROISSANT
	//console.log(mes_notifs)
	mes_notifs.sort(function tri_ordre_chrono_decroissant(a, b) {
		/*
		avec_format = !b.Date_derniere_modif.includes('+')

		if(avec_format){
			return moment(b.Date_derniere_modif, "DD/MM/YYYY HH:mm:ss")  - moment(a.Date_derniere_modif, "DD/MM/YYYY HH:mm:ss")
		}else{
			return moment(b.Date_derniere_modif)  - moment(a.Date_derniere_modif)
		}
		*/

		modifA = convertir_en_date(a.Date_derniere_modif)
		modifB = convertir_en_date(b.Date_derniere_modif)
		
		/*
		console.log(modifA)
		console.log(" VS ")
		console.log(modifB);
		*/

		return modifB - modifA
	});
	//console.log(mes_notifs)

	//on stock
	stocker('mes_notifs',JSON.stringify(mes_notifs));
}

function stocker_ma_date_de_consultation(ma_date_consultation){
	stocker('ma_date_consultation',ma_date_consultation);
	
	mes_donnees = JSON.parse(recuperer('mes_donnees'));
	mes_donnees['Derniere_consultation_notifs'] = ma_date_consultation;
	stocker('mes_donnees',JSON.stringify(mes_donnees));
}

function recuperer_ma_date_de_consultation(){
	chargement(true);
	var lien_script = "https://script.google.com/macros/s/AKfycbxgtxDhZ9g8-lo5e4aux1otiYyWsgg38TXmZunQ1VnPZ7JpjzA/exec";
	var identifiant = recuperer('identifiant_courant');
	var mon_type = recuperer('mon_type');

	var url = lien_script + '?method=POST&identifiant=' + identifiant + '&mon_type=' + mon_type + '&ma_consultation=true';
	return $.ajax({
	    url: url
	});
}

function envoyer_ma_date_de_consultation(){




	chargement(true);

	mon_type = recuperer("mon_type").includes("Admin") ? "Administration" : recuperer("mon_type")
	
	maintenant_valeur = maintenant()
	//console.log(maintenant_valeur)
	stocker_ma_date_de_consultation(maintenant_valeur);

	nouveau_data = {"Derniere_consultation_notifs":maintenant_valeur}
	//console.log("actualisation...")
	actualiser(mon_type, "Identifiant", recuperer("identifiant_courant"), nouveau_data)

	//console.log("ça y est !")
	masquer_bulle_notifs();



	chargement(false);

}



function masquer_bulle_notifs(){
	element_DOM('bulle_notif').style.display = "";
}

function recuperer_liste_notifs_lues(){
	return get_resultat(racine_data + recuperer("mon_type").split("_")[0] + "?" + "Identifiant=eq." + recuperer("identifiant_courant") + "&" + apikey )[0]['liste_notifs_lues']
}

function afficher_bulle_notifs(){
	chargement(true);

	positionner_bulle_notif();
	positionner_pannel_notif();

	var mes_notifs = JSON.parse(recuperer('mes_notifs'));
	var ma_date_consultation = recuperer('ma_date_consultation');


	
	liste_notifs_lues = recuperer_liste_notifs_lues()
	if(!liste_notifs_lues) liste_notifs_lues = ","


	//console.log(liste_notifs_lues)


	//on filtre pour afficher dans la bulle que celles dont date modif > date dernière consultation
	//console.log(mes_notifs)
	nouvelles_notifs = mes_notifs.filter(function(valeur){


		
		Date_derniere_modif = convertir_en_date(valeur['Date_derniere_modif'])
		Date_consultation = convertir_en_date(ma_date_consultation)

		/*
		console.log(Date_derniere_modif)
		console.log(" VS ")
		console.log(Date_consultation);
		*/


		//anciennement via la date de derniere consultation
		//return Date_derniere_modif > Date_consultation;

		//nouvellement aux clics des notifs 1 par 1
		return !liste_notifs_lues.includes("," + valeur['id_notif'] + ",")
		
	});

	//console.log(nouvelles_notifs);

	var nombre = nouvelles_notifs.length;
	if(nombre>99) nombre = "+99";
	
	var bulle_notif = element_DOM('bulle_notif');
	//console.log(nombre)
	element_DOM('bulle_notif').style.display = nombre > 0 ? "block" : "";
	bulle_notif.innerText = nombre;
	


	chargement(false);


}

function choisir_height_viz_si_pdf(){

	if($("#previsualisation")[0]){
		var nom_fichier = $("#titre_fenetre")[0].innerText.toLowerCase();
		var extension = nom_fichier.split(".").pop();
		if(extension === "pdf"){

			//si NON chrome
			if (!navigator.userAgent.includes("Chrome")){

				var rapport_L_H = $(window).width() / $(window).height() 


				//si entre 0 et 0.4 exclus -> rien
				var height_final = rapport_L_H > 0 && rapport_L_H < 0.4 ? "" : 
									
									//sinon et vers 0.475 -> 140%
									rapport_L_H <= 0.475 ? "140%" : 
									
									//sinon et vers 0.75 -> 125%
									rapport_L_H <= 0.75 ? "125%" :
									
									//sinon et vers 1.77 -> (-0.5x*100 + 1.7667)
									rapport_L_H <= 1.77 ? Number(-0.5*rapport_L_H*100 + 1.7667) +"%" :

									//sinon et vers 2.055 -> 25%
									//rapport_L_H <= 2.055 ? "25%" :

									//sinon et vers 2.1666 -> 40%
									//rapport_L_H <= 2.17 ? "45%" :

									//sinon -> rien
									""



				//console.log("AVANT: " + $("#previsualisation")[0].style.height )
				$("#previsualisation")[0].style.height = height_final
				//console.log("APRES: " + $("#previsualisation")[0].style.height )


			}

		}
	}
	
}

function positionner_bulle_notif(){
	if(element_DOM('bulle_notif'))
		$("#bulle_notif")[0].style.left =  (22+$("#recup_notifs")[0].offsetLeft) + "px";

}

function positionner_pannel_notif(){	
	if($("#pannel_notif")[0] && $("#recup_notifs")[0]){
		$("#pannel_notif")[0].style.left =  (22+$("#recup_notifs")[0].offsetLeft-$("#pannel_notif")[0].offsetWidth) + "px";
		$("#pannel_notif")[0].style.top =  $("#recup_notifs")[0].offsetTop;	
	}

	
}

function mettre_en_place_les_notifications(){

	recuperer_notifs();

	$(window).on('resize', function(){

	//window.addEventListener("resize", function(){
    	positionner_bulle_notif();
		positionner_pannel_notif();
	});
}




	

	









/*************************** VISIO *****************************/

function rejoindre_visio(id_matiere_visio,sans_alerte,valeur_id_div_visio,pas_de_initialisation){

	var mon_type = recuperer('mon_type');

	if(impossible_de_cliquer() && !sans_alerte) return -1;
	/*
	if(!mon_type.includes("Administration")){
		alert("Cette fonctionnalité n'est pas encore disponible.");
		return -1;
	}*/

	//alert("sans_alerte dans rejoindre visio:" + sans_alerte)
	if(!sans_alerte){

		var confirmation = confirm("Branchez des écouteurs pour mieux entendre pendant la visioconférence.");
		if(!confirmation) return -1;

	}

	chargement(true);


	var mes_donnees = JSON.parse(recuperer('mes_donnees'));
	var identifiant = recuperer('identifiant_courant').toUpperCase();
	//var la_classe = (mon_type === "Eleves")? mes_donnees['Classe'] : element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim().toUpperCase();

	//nouveau nom classe = classe ET matière
	var id_matiere = id_matiere_visio ? id_matiere_visio : recuperer('dossier_chargé');
	var mes_matieres = JSON.parse(recuperer('mes_matieres'));			
	var la_matiere = mes_matieres.filter(function(element) {
	  	return element['ID_URL'] === id_matiere;
	});
	var la_classe = la_matiere[0].Classe+ " " + la_matiere[0].Matiere;
	
	//évite les problèmes avec le signe &
	la_classe = la_classe.normalize("NFD").replace(/&/g, " et ");
	
	if(!pas_de_initialisation){
		id_div_visio = initialiser_visio(valeur_id_div_visio)	
	}else{
		id_div_visio = valeur_id_div_visio
	}


	creer_une_visio("100%","100%",identifiant,la_classe,id_div_visio,id_matiere_visio,sans_alerte);

}

function initialiser_visio(valeur_id_div_visio){

	vider_fenetre('Visioconférence',true);
	afficher_fenetre(true);

	var id_div_visio = valeur_id_div_visio ? valeur_id_div_visio : "visio"
	var visio_html = '<div id="'+id_div_visio+'" style="display:none;" class="previz"></div>';

	var visio = document.createElement('div');
	visio.innerHTML = visio_html;
	element_DOM('fenetre').appendChild(visio.firstChild);
	return id_div_visio
}

function creer_une_visio(largeur, hauteur,moi,classe,id_div_visio, id_matiere_visio, sans_alerte){
	chargement(true)
	//ajouter le kick out si administrateur
	var enlever_kickout= !recuperer('mon_type').includes('Admin');
	const domain = 'meet.jit.si';
	const options = {
		configOverwrite: {
			defaultLanguage: 'fr',
			disableDeepLinking :true,
			SHOW_JITSI_WATERMARK: false,
			SHOW_WATERMARK_FOR_GUESTS: false,
			remoteVideoMenu: {
		         disableKick: enlever_kickout
		    }
		},
	    roomName: id_matiere_visio ? id_matiere_visio : recuperer("dossier_chargé"),
	    width: "100%",
	    height: "100%",
	    parentNode: document.querySelector('#'+id_div_visio+''),
	    userInfo: {
	    	email:'',
	    	displayName:moi
	    },
	    onload: visio_prete(id_div_visio),

	    interfaceConfigOverwrite: {
	   		DEFAULT_REMOTE_DISPLAY_NAME: moi,
	   		DEFAULT_LOCAL_DISPLAY_NAME: 'Moi',
	   		SHOW_JITSI_WATERMARK: false,
	   		SHOW_WATERMARK_FOR_GUESTS: false,
	   		TOOLBAR_BUTTONS: [
		        'microphone', 'camera', 'desktop', 'fullscreen',
		        'fodeviceselection', 'chat', 'sharedvideo', 
		        'videoquality'
		    ],
		    defaultLanguage: 'fr',
		    MOBILE_APP_PROMO: false,
		    SHOW_CHROME_EXTENSION_BANNER: false
		}
	};

	const api = new JitsiMeetExternalAPI(domain, options);
	api.executeCommand('subject', nom_etablissement.toUpperCase() + " - " + classe);
	envoyer_mon_log_visio(moi.toLowerCase(), classe.toLowerCase(), "debut",mon_role, id_matiere_visio);
	
	
	//au clic de quitter : confirmer
	$("#bye_prev").on('click',function(e){

		e.preventDefault();
		var est_premier_visio = (id_div_visio === "visio-0" || id_div_visio === "visio")
		//alert(id_div_visio + " " + sans_alerte)

		if(est_premier_visio){
			var confirmation = confirm("Êtes-vous sûr de vouloir quitter la visioconférence?");
			stocker("quitter_multi_visio",confirmation)
		}
		
		if(confirmation || (!est_premier_visio && recuperer("quitter_multi_visio") === "true")){
			//je notifie via formulaire
			envoyer_mon_log_visio(moi.toLowerCase(), classe, "fin",mon_role, id_matiere_visio);
			api.dispose();			
			quitter_previsualisation();
		}

	})

}


function visio_prete(id_div_visio){

	chargement(false);
	element_DOM(id_div_visio).style.display="block";

}



function notif_visio(id_classe_matiere, statut_visio, identifiant){
		
	chargement(true);
	
	var lien_script = "https://script.google.com/macros/s/AKfycbxgtxDhZ9g8-lo5e4aux1otiYyWsgg38TXmZunQ1VnPZ7JpjzA/exec";

	var id_classe_matiere = "?&id_classe_matiere=" + id_classe_matiere;
	var statut_visio = "&statut_visio=" + statut_visio;
	var identifiant = "&identifiant=" + identifiant;

	var url = lien_script + id_classe_matiere + statut_visio +identifiant;

	//console.log(url)

	return $.ajax({
		type: "POST",
	    url: url,

	    success: function(data){
	    	console.log(data);
	    },

		error: function(data){
	    	console.log('erreur! ' + data);
			alert('Vérifiez que vous êtes toujours connecté à internet.');
	    },

	    complete:function(){
	    	chargement(false);
	
	    }

	});
	}


function envoyer_mon_log_visio(mon_identifiant, ma_classe, mon_statut, mon_role, id_classe_matiere){

	if(!id_classe_matiere) id_classe_matiere = recuperer("dossier_chargé")
	//alert(id_classe_matiere)

	try{
    	var data = get_resultat('https://ipapi.co/json/')
		//console.log(data);

		var mon_adresse_ip = data['ip'];
		var ma_ville = data['city'];
		var mon_pays = data['country_name'];
		var ma_latitude = data['latitude'];
		var ma_longitude = data['longitude'];
		var mon_operateur = data['org'];
	}catch{

		var mon_adresse_ip = '';
		var ma_ville = '';
		var mon_pays = '';
		var ma_latitude = '';
		var ma_longitude = '';
		var mon_operateur = '';


	}

	//si c'est prof, on envoie juste "prof"
	if(ma_classe.includes("|")) ma_classe = "Professeur";
	//si c'est un admin, on envoie le rôle
	if(mon_role) ma_classe = mon_role;


	nom_table = "Visio"
	var les_matieres = JSON.parse(recuperer("mes_matieres"))
	var la_classe_matiere = les_matieres.filter(e => e['ID_URL'] === id_classe_matiere)[0]["Classe_Matiere"]

	nouveau_visio = {
		"Horodateur": maintenant(),
		"Identifiant": mon_identifiant,
		"Type": mon_role,
		"Statut": mon_statut,
		"IP": mon_adresse_ip,
		"Ville": ma_ville,
		"Pays": mon_pays,
		"Latitude": ma_latitude,
		"Longitude": ma_longitude, 
		"Operateur": mon_operateur,
		"Id_classe_matiere" : id_classe_matiere,
		"Classe_matiere" : la_classe_matiere
	}
	console.log(nouveau_visio)
	ajouter_un_element(nom_table, nouveau_visio)


}


//multi-visio
function ajouter_multi_visio_si_non_eleve(){
	if(!recuperer("mon_type").includes("Eleves")){
		if($("#multi_visio").length === 0){
			$(".sidebar.left").append('<div id="multi_visio" onclick="multi_visio()">Multi-visio</div>')
			$("#multi_visio").insertBefore("#dashboard")
		}

	//si eleve
	}else{
		if($("#multi_visio").length > 0) $("#multi_visio").remove()
	}
}

function multi_visio(){
	les_matieres = JSON.parse(recuperer("mes_matieres"))
	les_matieres = les_matieres.sort(function(a, b) {
	  return a.Classe_Matiere > b.Classe_Matiere;
	})
	//console.log(les_matieres) 

	elements_html = "<select id='classe_multi_visio' style='width: 90%;' multiple>"
	for (i = 0; i< les_matieres.length;i++){
		elements_html += '<option value="'+les_matieres[i]["ID_URL"]+'">'+les_matieres[i]["Classe"] + " " + les_matieres[i]["Matiere"] +'</option>'
	}
	elements_html += "</select>"
	creer_mini_popup("Vous vous apprêtez à faire une visioconférence avec plusieurs classes en même temps. Pour commencer, choisissez les classes-matières dans lesquels vous voulez intéragir simultanément:",elements_html, "Commencer la multi-visioconférence","commencer_multi_visio()")


}




function commencer_multi_visio(){

	chargement(true)
	var liste_classe_multi_visio = $("#classe_multi_visio").val()
	

	vider_fenetre('Multi-visioconférence',true)
	
	if (liste_classe_multi_visio.length === 1){

		rejoindre_visio(liste_classe_multi_visio[0]);

	}else{
		$('#fenetre').append('<div id="previsualisation" style="width: 100%;height: 85%;display:grid;grid-template-columns: repeat(2, 1fr);">')
		liste_classe_multi_visio.forEach(function(id_matiere_visio,numero){
			chargement(true)
			//console.log(id_matiere_visio)
			$("#previsualisation").append("<div id='visio-"+numero+"' class='une_visio'></div>")
			//alert(numero + " VS " + liste_classe_multi_visio.length)
			sans_alerte = numero < liste_classe_multi_visio.length-1
			rejoindre_visio(id_matiere_visio,sans_alerte,"visio-"+numero,true)
		})		
	}


	afficher_fenetre(true)
	$("#mini_popup").remove()
	
	chargement(false)
}
































	









/*********************** RETOURS DES QUESTIONNAIRES ****************************/
		

var compteur_suivant = 0;

function afficher_formulaire_sondage(par_clic){

	if(recuperer('fichier_ouvert')  !== "") return -1;

	var ma_response_sondage = JSON.parse(recuperer('mes_donnees'))['Reponse_sondage'];
	var dates_affichage = "2020-07-20;2020-07-21;2020-07-22;2020-07-23;2020-07-24;2020-07-25;2020-07-26;2020-07-27";
	var aujourdhui = moment().format('yyyy-MM-DD');


	var ma_classe = "";


	if (recuperer('mes_donnees')){
		var mes_donnees = JSON.parse(recuperer('mes_donnees'));
		ma_classe = mes_donnees['Classe'];
		var mon_type = recuperer('mon_type');


		/*
		//si en classe d'examen
		if("TSTMG,TES,TS,1ère STMG,1ère GB,1ère GA,3ème B,3ème A".includes(ma_classe)){
			
			//si on est du 26 au 28 juin ET que j'ai pas répondu au questionnaire: j'affiche le questionnaire			
			if(dates_affichage.includes(aujourdhui)){

				if (ma_response_sondage === "non"){

				
					vider_fenetre("Questionnaire obligatoire");
					switch_mode(true);//forcément grand écran
					afficher_fenetre(true);
					ajouter_formulaire();

					//quand c'est soumis: on met à jour le champ
					$('#questionnaire_retours').on('load',function(e) {
						chargement(false);
						compteur_suivant = compteur_suivant +1;
						
						//AU 2è "load":
						if(compteur_suivant>=2){

							//on change Reponse_sondage à oui
							repondre_sondage(true);
						}


					});
				}else{
					if(par_clic) alert("Vous avez déjà répondu au questionnaire, merci.");
				}
					

			}else{
				
				if(par_clic) alert("Aucun questionnaire n'est actuellement en attente de réponse.");
				

			}
		*/


		//si professeur
		if(mon_type.includes("Prof")){
			if(dates_affichage.includes(aujourdhui)){

				vider_fenetre("Les examens non rendus");
				switch_mode(true);//forcément grand écran
				afficher_fenetre(true);
				ajouter_formulaire();


			}

		}else{
			if(par_clic) alert("Aucun questionnaire n'est actuellement en attente de réponse.");
		}
		
	}
}

function repondre_sondage(oui){


	chargement(true);
	var bye = true
	if (bye) return -1; //à commenter si besoin de recuperer l'action dans BDD

	//envoyer la nouvelle valeur dans la bdd
	var lien_script = "https://script.google.com/macros/s/AKfycbxPZ5wQLxdBqB8m2Mri7fZZ5xJtEeTR8MKI30CFTXeUDgE1cH0/exec";
	var mes_donnees = JSON.parse(recuperer('mes_donnees'));
	var mon_identifiant = mes_donnees['Identifiant'];
	var mon_type = recuperer('mon_type');


	var identifiant = "?identifiant=" + mon_identifiant;
	var mon_type = "&mon_type=" + mon_type;
	var reponse_sondage = "&reponse_sondage=" + (oui ? "oui" : "non");

	var url = lien_script + identifiant + mon_type + reponse_sondage;

	fetch(url).then(function(data){
		mes_donnees['Reponse_sondage'] = oui ? "oui" : "non";
		stocker('mes_donnees',JSON.stringify(mes_donnees));
		chargement(false);			
	});

}

function ajouter_formulaire(){

	var lien_questionnaire = "https://docs.google.com/forms/d/e/1FAIpQLSf6RB1PthrIpc1uGHrhTFlW01YnqsppmZF0yXe1JUXGS-yLNw";

	var questionnaire_html = '<iframe id="questionnaire_retours" style="width: 100%;height: 100%;" src="'+ lien_questionnaire +'/viewform?embedded=true" frameborder="0"> </iframe>';



	var questionnaire = document.createElement('div');
	questionnaire.innerHTML = questionnaire_html
	element_DOM('fenetre').appendChild(questionnaire.firstChild);

}


afficher_formulaire_sondage();




/***************** REMEDIATIONS **********************/
function resultats_remed(){

	var mon_type = recuperer("mon_type");
	var id_formulaire = '1FAIpQLSc-oT2cW_UP9ve6nZnIFPvymmcVR-058klZPdLFDKFXlW7LvQ';
	var identifiant_courant = recuperer("identifiant_courant");

	if (mon_type === "Eleves"){
		alert("Les résultats de remédiations ne sont pas encore accessibles.")
	}else{
		vider_fenetre("Résultats des remédiations");
		switch_mode(true);//forcément grand écran
		afficher_fenetre(true);
		ajouter_form(id_formulaire,identifiant_courant);
		//console.log("src = " + $("#questionnaire_retours").src)
	}

}


function ajouter_form(id_formulaire, valeur_champ_par_defaut){

	var lien_questionnaire = "https://docs.google.com/forms/d/e/" + id_formulaire;

	//console.log("identifiant: " + valeur_champ_par_defaut);
	var questionnaire_html = '<iframe id="questionnaire_retours" style="width: 100%;height: 100%;" src="'+ lien_questionnaire +'/viewform?embedded=true&entry.305645047=' + valeur_champ_par_defaut + '" frameborder="0"> </iframe>';

	//https://docs.google.com/forms/d/e/1FAIpQLSc-oT2cW_UP9ve6nZnIFPvymmcVR-058klZPdLFDKFXlW7LvQ/viewform?usp=pp_url&entry.305645047=MYIDISHERE.OKAY

	var questionnaire = document.createElement('div');
	questionnaire.innerHTML = questionnaire_html
	element_DOM('fenetre').appendChild(questionnaire.firstChild);
	
	
}
























/********************* GESTION PARAMETRES PLATEFORME *******************/

function afficher_parametres(oui){
	if(!oui){
		$("#recup_params").remove()
	}else{
		element_DOM("recup_params").style.display = "block"
	}
	
}

function recuperer_parametres(){
	
	if(recuperer('liste_params_colonnes_masquees') === null) stocker('liste_params_colonnes_masquees','')

	vider_fenetre("Paramètres");
	

	var contenu_menu_haut = ""
	
	for (var i =  0; i < elements_menu_haut.length; i++) {
		contenu_menu_haut = contenu_menu_haut + '<span class="un_menu" id ="'+elements_menu_haut[i]+'">'+elements_menu_haut[i]+'</span>' 
	}
	var nombre_elements = '<span style="font-weight: bold;"><span id="nombre_elements_param">'+0+'</span> éléments</span>'
	var conteneur_menu_html = '<div id="conteneur_menu"><div id="menu_haut" class="menu_haut"> ' + contenu_menu_haut+ '</div><div id="menu_params" class="menu_params"><div id="conteneur_filtre"><span id="label_filtre_parametre"></span><select id="filtre_parametre" class="filtre_parametre"></select></div><div id="menu_details"></div>'+nombre_elements+'</div></div>'


	$("#conteneur_menu_html").remove();
	$("#fenetre").append(conteneur_menu_html);


	//clic -> mise en forme + actualisation de menu_details
	$('.un_menu').click(function(e) {
		chargement(true)
		un_menu_clic(e.target.id)			
        chargement(false)
    });





    //clic par défaut sur Alerte
    $("#Alerte").click();

	afficher_fenetre(true)

}

function appliquer_filtre_choisi(nom_champ_reference, valeur_champ_reference){
	var nom_champ_reference = nom_champ_reference ? nom_champ_reference : $("#label_filtre_parametre")[0].innerText
	var valeur_champ_reference = valeur_champ_reference ? valeur_champ_reference : $("#filtre_parametre")[0].value;


	
	if(nom_champ_reference !== "" && valeur_champ_reference !== ""){
		//console.log(nom_champ_reference)
		//console.log(valeur_champ_reference)


		//on retrouve la colonne du filtre
		if($("#"+nom_champ_reference)[0]){
			var numero_colonne = $("#"+nom_champ_reference)[0].cellIndex
		}else if($("#"+nom_champ_reference.toLowerCase())[0]){
			var numero_colonne = $("#"+nom_champ_reference.toLowerCase())[0].cellIndex 
		}else{
			var numero_colonne = -1
		}

		
		if(numero_colonne >=0){
			//console.log(numero_colonne)	
			//pour chaque element de cette colonne
			Array.from($('tbody')[0].children).forEach(function(valeur, index, array) {
				
				valeur_a_comparer = valeur.children[numero_colonne].innerText
				//console.log(valeur_a_comparer)
				
				//si "--" ou égal -> on affiche toute la ligne
				if(valeur_champ_reference === "(Tous)" || valeur_a_comparer === valeur_champ_reference){

					valeur.style.display = ""
				//si NON égal -> on masque toute la ligne	
				}else{
					valeur.style.display = "none"
				}
				

			});

		}	
	}
	
	
}



function un_menu_clic(id_parametre){


	//si c'est une analyse -> on va direct dans le nouvel onglet
	if(id_parametre.includes("Analyses")){

		window.open("analyses/"+id_parametre.split(" ").pop() +".html", '_blank').focus();

	}else{



		$("#mini_popup").remove()
	    mettre_en_forme_onglet_clicked(id_parametre);
	    actualiser_filtre_onglet(id_parametre);
	    actualiser_details_parametre(id_parametre);
		mettre_etat_espace(id_parametre)
		
	    
	    //pas de modifs à faire
	    if($("#boutons_params")){
		    if (elements_menu_haut_avec_modifs.indexOf(id_parametre) === -1){
		    	autoriser_les_modifs(false)
		    }else{
		    	autoriser_les_modifs(true)
		    }
		}

		//pas de reinit a faire
	    if($("#boutons_params")){
		    if (elements_menu_haut_avec_reset.indexOf(id_parametre) === -1){
		    	autoriser_le_reset(false)
		    }else{
		    	autoriser_le_reset(true)
		    }
		}

		//pas de "tout voir" à faire

		if($("#boutons_params")){
			elements_menu_haut_avec_tout_voir = recuperer("liste_params_colonnes_masquees")

		    elements_menu_haut_avec_tout_voir = elements_menu_haut_avec_tout_voir ?  elements_menu_haut_avec_tout_voir.split(",") : []
			if(elements_menu_haut_avec_tout_voir.indexOf(id_parametre + ":") === -1){
				autoriser_tout_voir(false)
			}else{
				autoriser_tout_voir(true)
			}
		}
	    
	    
		
	}



}

function affichage_par_defaut(id_parametre){
	//console.log("POUR LE PARAMETRE " + id_parametre)
	liste_params_colonnes_masquees_str = recuperer("liste_params_colonnes_masquees")
	if(liste_params_colonnes_masquees_str){


		liste_params_colonnes_masquees = liste_params_colonnes_masquees_str.split(",")
		//console.log(liste_params_colonnes_masquees)


		//sans 1er élément vide
		liste_params_colonnes_masquees = liste_params_colonnes_masquees.filter(e => e !== "")
		//console.log(liste_params_colonnes_masquees)


		//uniquement les champs du paramètre
		liste_params_colonnes_masquees = liste_params_colonnes_masquees.filter(e => e.split(":")[0].includes(id_parametre))
		//console.log(liste_params_colonnes_masquees)

		liste_colonnes_masquees = liste_params_colonnes_masquees.map(e => e.split(':')[1])	
		//console.log(liste_colonnes_masquees)

		//tout afficher les colonnes du parametre
		afficher_colonnes(id_parametre, "")

		liste_colonnes_masquees.forEach(function(e){
			//console.log(e)
			//masquer toutes les donnees de la colonne
			masquer_colonne(e)
		})

	}


	//console.log("\n")

}

function masquer_params_auto(){	
	//masquer par défaut toutes les colonnes automatiques
	parametres_automatiques.forEach(function(e){
		mon_element = $(".header_table.entete_sticky[id='"+e+"']")
		//console.log(mon_element)
		if(mon_element.length > 0)	masquer_colonne(e)
	})
}

function autoriser_les_modifs(oui){
	$("#ajout_param")[0].style.display = oui ? "" : "none"
	$("#suppr_param")[0].style.display = oui ? "" : "none"
	$("#dupliquer_param")[0].style.display = oui ? "" : "none"
}

function autoriser_le_reset(oui){
	$("#reset_param")[0].style.display = oui ? "" : "none"
}

function autoriser_tout_voir(oui){
	$("#tout_voir")[0].style.display = oui ? "" : "none"
}

function mettre_en_forme_onglet_clicked(id_onglet){

	//console.log("on mettra en forme pour " + id_onglet)
	for (var i =  0; i < $(".menu_haut")[0].children.length; i++) {
		id_onglet_courant = $(".menu_haut")[0].children[i].id


		//au clic d'un menu
		//-> tout est réinit
		//on met en orange l'onglet choisi
		if(id_onglet_courant===id_onglet){
			//console.log(id_onglet_courant + " = id_onglet")
			$('[id="' + id_onglet_courant + '"]')[0].className = "un_menu un_menu_orange"
		}else{
			//console.log("id_onglet_courant <> id_onglet")
			$('[id="' + id_onglet_courant + '"]')[0].className = "un_menu"
		}

		

	}

}


function actualiser_details_parametre(id_parametre){
	$("#menu_details")[0].innerHTML = "";

	//liste ARRAY (1 élement)
	if (id_parametre === "Maintenance"){
		mettre_details_maintenance()
		$("#nombre_elements_param")[0].innerText = 1

	/*
	//liste ARRAY (nombre de cycles)
	}else if (id_parametre === "Cycles"){
		mettre_details_cycle()
		$("#nombre_elements_param")[0].innerText = 0
	*/



	//si octets pris
	}else if(id_parametre === "OCTETS_PRIS"){

		//<progress max="50000000000" value=""></progress>

	//LISTE JSON
	}else{

		//on cherche TOUT dans la table id_parametre
		//Classes: 
		//Matieres: 
		//Eleves: 
		//Profs: 
		//Administration: 
		//Logs: 

		var identifiant_table = identifiant_par_table(id_parametre)
		//console.log(identifiant_table)

		//si le local existe déjà -> on récupère celui la
		liste_deja_stockee_JSON = false//recuperer(id_parametre)
		if(liste_deja_stockee_JSON){

			liste_JSON = JSON.parse(liste_deja_stockee_JSON)			
			traiter_liste_JSON(id_parametre,liste_JSON, identifiant_table)
			$("#nombre_elements_param")[0].innerText = liste_JSON.length
			affichage_par_defaut(id_parametre);
			masquer_params_auto()
				
		}else{
			rechercher_tout(id_parametre).then(function(snapshot){

				liste_JSON = snapshot
				//liste_JSON = ordonner(id_parametre,liste_JSON)
				stocker(id_parametre, JSON.stringify(liste_JSON ? liste_JSON : ""))
				traiter_liste_JSON(id_parametre,liste_JSON, identifiant_table)
				$("#nombre_elements_param")[0].innerText = liste_JSON.length
				affichage_par_defaut(id_parametre);
				masquer_params_auto()

			});
		}




	}

	//changement de filtre -> actualisation du nombre d'elements
	$("#filtre_parametre").on('change',function(e){
		compter_nombre_de_lignes()
	})



}

function compter_nombre_de_lignes(){
	$("#nombre_elements_param")[0].innerText = $("tbody").find('.une_ligne_de_donnees:visible').length
}




function traiter_liste_JSON(id_parametre,liste_JSON, identifiant_table){
	//console.log(liste_JSON)

	//à l'actualisation du filtre, on filtre localement
	if(liste_JSON !== null && liste_JSON !== undefined &&  liste_JSON !=="" && liste_JSON.length > 0 ){
		element_DOM("menu_details").innerHTML = json2Table(liste_JSON, identifiant_table)

    		
	}else{
		element_DOM("menu_details").innerHTML = '<i style="color: #bfbfbf;">Pas encore de données dans ' + id_parametre +  '.</i>';
		effacer(id_parametre)
	}

}


function mettre_details_cycle(){
	//plusieurs cycles
	filtre_liste = []
	
	rechercher_tout('ID_RENDUS').then(function(snap){
		var filtre_liste_JSON = snap
		//console.log(filtre_liste_JSON)

		for (key in filtre_liste_JSON) {
		    filtre_liste.push(key);
		}
		//console.log(filtre_liste)

	});
	
}

function mettre_details_maintenance(){

	var texte_explication = "Si la maintenance est activée, seuls certains membres de l'Administration pourront accéder à la plateforme."	
	var maintenance_intiale = est_en_maintenance();

	maintenance_intiale.then(function(resultat){
		//console.log("resultat: " + resultat)


		var details_maintenance_html = '<div style="margin: 5% 5% 0% 5%;">'+texte_explication+'</div> <span class="toggle"><label class="switch"><input type="checkbox" id="changer_maintenance"><span class="slider round"></span></label></span><div id="texte_maintenance" style="color: #c0bdbd;"></div>'

		$("#menu_details").append(details_maintenance_html);

		//on coche si oui
		//on décoche si non
		$('#changer_maintenance')[0].checked = resultat === "oui"
		$("#texte_maintenance")[0].innerText = resultat === "oui" ? "Activé" : "Désactivé"

		//quand on switch -> actualisé
		$('#changer_maintenance').on("change",function(e){
			switcher_la_maintenance();
			var texte_maintenance_final = $("#texte_maintenance")[0].innerText === "Activé" ? "Désactivé" : "Activé";
			$("#texte_maintenance")[0].innerText = texte_maintenance_final;
		})
	         


	}).catch(error => {
		alert("Impossibile de récupérer la valeur de la maintenance :" + error);
		console.error(error)
	});

}

//utiliser les données en LOCAL
function actualiser_filtre_onglet(id_parametre){

	var etiquette_filtre = ""
	var filtre_liste = []

	//pas de liste par défaut
	$("#filtre_parametre")[0].innerHTML	= ""
	
	var mes_matieres = JSON.parse(recuperer("mes_matieres"))
	var toutes_les_matieres = recuperer("Matieres") ? JSON.parse(recuperer("Matieres")) : mes_matieres
	
	
	//cycle: filtre = etablissement
	//maintenance: filtre = etablissement
	//alerte:  filtre = etablissement
	//un seul établissement
	if(id_parametre === "Cycles" || id_parametre === "Maintenance" || id_parametre === "Alerte" || id_parametre === "Logs"  || id_parametre === "Espace etablissement restant"){

		etiquette_filtre = "Etablissement"
		filtre_liste = [nom_etablissement];
		

	}else{


		//matieres: filtre = classe
		//eleves: filtre = classe
		//plusieurs classes
		if (id_parametre === "Matieres" || id_parametre === "Eleves" ){

			etiquette_filtre = "Classe"

			/*
			//si dossier chargé -> on récupère la classe
			if (recuperer("dossier_chargé") !== "" && recuperer("dossier_chargé") !== undefined && recuperer("dossier_chargé") !== null){
				filtre_defaut = mes_matieres.filter(function(valeur,index){ return valeur['ID_URL'] === d })[0]["Classe"]
			}*/


			
			filtre_liste = valeursUniquesDeCetteKey(toutes_les_matieres, 'Classe');






		//classes: filtre = cycle
		//profs: filtre = cycle
		//admin: filtre = cycle
		//autres: filtre = cycle
		
		//un seul cycle -> celui assigné
		}else{
			etiquette_filtre = "Cycle"
			
			
			//tous les cycles
			filtre_liste = valeursUniquesDeCetteKey(toutes_les_matieres, 'Cycle');


		}


	}






	assigner_label_et_liste_parametres(etiquette_filtre, filtre_liste)
	mettre_barre_recherche()



}




function assigner_label_et_liste_parametres(etiquette_filtre, filtre_liste){


	/************* COMMUN: CHOIX DU LABEL ET DE LA LISTE DU FILTRE ***************/
	$("#label_filtre_parametre")[0].innerText = etiquette_filtre;
	$("#filtre_parametre")[0].innerHTML	= $("#filtre_parametre")[0].innerHTML + '<option value="(Tous)">(Tous)</option>'


	for (var i = filtre_liste.length - 1; i >= 0; i--) {
		$("#filtre_parametre")[0].innerHTML	= $("#filtre_parametre")[0].innerHTML + '<option value="'+filtre_liste[i]+'">'+filtre_liste[i]+'</option>'

	}

	//3 boutons: actualiser, ajouter, supprimer
	if ($("#boutons_params")) $("#boutons_params").remove()
	var bouton_actualiser = un_bouton_param("actu_param", "actualiser_parametre", "Actualiser", "img_actualiser.png")
	var bouton_ajouter = un_bouton_param("ajout_param", "ajouter_donnees_parametres", "Ajouter", "img_ajout.png")
	var bouton_supprimer = un_bouton_param("suppr_param", "supprimer_ligne_parameters", "Supprimer", "img_redtrash.png")
	var bouton_dupliquer = un_bouton_param("dupliquer_param", "dupliquer_donnees_parametres", "Dupliquer", "img_dupliquer.png")
	var bouton_telecharger = un_bouton_param("telecharger_param", "telecharger_donnees_parametres", "Télécharger", "img_download.png")
	var bouton_import = un_bouton_param("importer_param", "importer_parametres", "Importer", "img_import.png")
	var bouton_init = un_bouton_param("reset_param", "init_donnees", "Initialiser", "img_reset.png")
	

	var bouton_tout_voir = un_bouton_param("tout_voir", "afficher_colonnes", "Afficher toutes les colonnes", "img_previz.png")


	$("#conteneur_filtre")[0].innerHTML	= $("#conteneur_filtre")[0].innerHTML + '<span id="boutons_params" style="cursor: pointer;"> ' +bouton_actualiser+bouton_ajouter+bouton_supprimer+bouton_dupliquer+bouton_telecharger+bouton_import+bouton_init+bouton_tout_voir+' </span>'

    //quand on update le filtre -> on met à jour
    $("#filtre_parametre").on('change',function(e){
    	appliquer_filtre_choisi();
    })
}

function mettre_barre_recherche(){
	$("#zone_recherche").remove()
	$("#stockage").remove()

	var zone_recherche = '<input id="zone_recherche" type="text" onkeyup="chercher()" placeholder="Rechercher...">'

	
	$("#conteneur_filtre").append(zone_recherche)
}

function mettre_etat_espace(id_parametre, valeur_recherchee){

	resultat = ""

	if(id_parametre === "Espace etablissement restant") {
		
		$('label_filtre_parametre').remove()
		$('filtre_parametre').remove()
		$(".stockage").remove()


		//au bout de 1 seconde
		setTimeout(function(){

			mettre_la_somme(valeur_recherchee)

		}, 1000);



		//à chaque fois qu'on filtre
		$("#zone_recherche").on('input',function(e){
			valeur_recherchee = e.target.value
			//console.log("on a modifié donc on doit actualiser par " + valeur_recherchee)
			$(".stockage").remove()

			//si toujours sur cet onglet
			//remettre le stockage				
			if(id_parametre === "Espace etablissement restant") mettre_la_somme(valeur_recherchee)
		})

	}

}

function mettre_la_somme(valeur_recherchee){

	la_somme = somme('Espace etablissement restant','octets_utilises',valeur_recherchee)
	valeur_max = 50e9
	pourcentage = 100*(la_somme/valeur_max).toFixed(4)
	precisions = valeur_recherchee ?valeur_recherchee : "total"
	resultat='<div id="stockage" class="stockage"><i style="margin-left: 50px;"><label>Stockage utilisé '+(precisions)+':<progress style="width: 60px;" value="'+la_somme+'" max="'+valeur_max+'"></progress> '+pourcentage+'% ('+(la_somme/1E9).toFixed(2)+'/50 Go)</i></span></div>'


	$("#conteneur_filtre").append(resultat)
}

function chercher(){

	// Declarer les variables
	table = element_DOM("table_affichee");
	tr = table.getElementsByTagName("tr");
	mon_filtre = element_DOM("zone_recherche").value.toUpperCase().trim();



	if (mon_filtre){


		// pour chaque ligne de la table
		for (i = 1; i < tr.length; i++) {

			//console.log(tr[i].textContent + " ********************* " + tr[i].innerText)
			texte_ligne = tr[i].textContent.toUpperCase()

			/*
			console.log(texte_ligne)
			console.log("VS")
			console.log(mon_filtre)
			*/

				tr[i].style.display = texte_ligne.includes(mon_filtre) ? "" : "none"


				if (texte_ligne.includes(mon_filtre) && mon_filtre){

					//surligner l'élément trouvé
					for (j = 0; j < tr[i].children.length ; j++) {

						cellule = tr[i].cells[j]
						valeur_cellule = cellule.textContent.toUpperCase()
						/*
						console.log(cellule.innerText.toUpperCase())
						console.log("VS")
						console.log(mon_filtre)


						console.log("\n\n")
						*/

						if (valeur_cellule.includes(mon_filtre)){
							//console.log(texte_ligne + " inclus dans " + valeur_cellule)
							cellule.className = "trouvee"
						}else{
							cellule.className = ""
						}
					}
				}


		}



	}else{
		$("tr").show()
		$("td").removeClass()
	}

	compter_nombre_de_lignes()

}


function un_bouton_param(id_bouton_param, fonction_bouton_param, alt_bouton_param, src_image){

	return '<img id="'+id_bouton_param+'" onclick="'+fonction_bouton_param+'()" alt="'+alt_bouton_param+'" src="https://sekooly.github.io/SUPABASE/images/'+src_image+'" class="icone_param">'
}



function json2Table(json, id_table) {
  	
	/*
	if(json[0] === undefined){
		json = transformer_en_array_de_JSON(json);
	}*/

	var id_parametre = $(".un_menu_orange")[0].id 
	let cols = nom_des_champs(id_parametre) //Object.keys(json[0])

	/*
	if(json.length === undefined){
		json = transformer_en_array_de_JSON(json);	
	}
	/*
	console.log(json)
	console.log(cols)
	*/
  	

  //Map over columns, make headers,join into string
  let headerRow = cols
    .map(col => `<th id="${col}" oncontextmenu="afficher_clic_droit_param(this)" class="header_table entete_sticky">${col}</th>`)
    .join("");

  //map over array of json objs, for each row(obj) map over column values,
  //and return a td with the value of that object for its column
  //take that array of tds and join them
  //then return a row of the tds
  //finally join all the rows together
  let rows = json
    .map((row,index) => {
      if(row!==null){
	      let tds = cols.map(col => `<td>${row[col]}</td>`).join("");
	      return `<tr suppression_id="${row[id_table]}" id="${row[id_table]}" onclick="clic_ligne(this)"  class= "border_bottom une_ligne_de_donnees">${tds}</tr>`;
	  }
    })
    .join("");

  //build the table
  const table = `
	<table id="table_affichee">
		<thead class="">
			<tr class= "border_bottom">${headerRow}</tr>
		</thead>
		<tbody>
			${rows}
		</tbody>
	</table>`;

  
  

  return table;



}



function clic_ligne(ceci){
	//on enleve la selection précédente
	if ($(".une_ligne_de_donnees.selected")[0]) $(".une_ligne_de_donnees.selected")[0].className = "une_ligne_de_donnees"


	//on selectionne la cible Ceci
	ceci.className = "une_ligne_de_donnees selected"

}


function supprimer_tous_les_parametres(){
	for (var i = 0 ; i < elements_menu_haut.length ; i++){
		effacer(elements_menu_haut[i]);
	}
}


function rendre_td_modifiable(){
	$(document).on('dblclick','tbody', function(e){

		fonction_td_modifiable(e)
		
	})
	
}


function fonction_td_modifiable(e, sans_suite){

	//si double clic sur un champ contenant ";" -> on fait une liste des Cycles (admin) OU Matieres (profs) en check box
	//sinon: saisie libre
	
	var ancienne_valeur = e.target.innerText;
	var id_parametre = $(".un_menu_orange")[0].id 

	var est_classe = $("#Classe")[0] ? e.target.cellIndex === $("#Classe")[0].cellIndex : false
	var est_classe_principale = $("#Classe_principale")[0] ? e.target.cellIndex === $("#Classe_principale")[0].cellIndex : false
	var est_classe_bis = $("#classe_bis")[0] ? e.target.cellIndex === $("#classe_bis")[0].cellIndex : false
	var nest_pas_onglet_classes = id_parametre !== "Classes"

	if (nest_pas_onglet_classes && (est_classe || est_classe_principale || est_classe_bis)){

		//mini fenetre de checkbox
		//avec ok et annuler
		var les_matieres = JSON.parse(recuperer('Matieres'))
		if (les_matieres === null){
			rechercher_tout('Matieres').then(function(snapshot){

				liste_JSON = snapshot
				//liste_JSON = ordonner(id_parametre,liste_JSON)
				stocker('Matieres', JSON.stringify(liste_JSON ? liste_JSON : ""))
				les_matieres = JSON.parse(recuperer('Matieres'))

				valeurs_possibles = valeurs_possibles_modification_classes(e, id_parametre, les_matieres)
				formulaire_choix_checkbox(e, ancienne_valeur, e.target.parentNode.id,valeurs_possibles,ancienne_valeur.split(';'))

			})

			
		}else{
			valeurs_possibles = valeurs_possibles_modification_classes(e, id_parametre, les_matieres)
			formulaire_choix_checkbox(e, ancienne_valeur, e.target.parentNode.id,valeurs_possibles,ancienne_valeur.split(';'))

		}
		


		
	}else{
		var nouvelle_valeur = prompt("Indiquez la nouvelle valeur",ancienne_valeur);
		suite_actualiser_double_clic(e, ancienne_valeur, nouvelle_valeur)
	}
}



function valeurs_possibles_modification_classes(e, id_parametre, les_matieres){
	console.log(e.target)

	var valeurs_possibles = valeursUniquesDeCetteKey(les_matieres,"Classe_Matiere")
	

	//si c'est un admin -> (Tous|un_cycle)
	if(id_parametre === "Administration"){
		valeurs_possibles = valeursUniquesDeCetteKey(les_matieres,"Cycle")
		valeurs_possibles = valeurs_possibles.map(e => '(Tous|'+e+')')
	}else{

		//si c'est une classe principale (profs) OU matieres OU eleve avec 1 seule classe -> classe
		if(id_parametre === "Eleves" || id_parametre === "Matieres" || e.target.cellIndex === $("#Classe_principale")[0].cellIndex){
			valeurs_possibles = valeursUniquesDeCetteKey(les_matieres,"Classe")
		}

	}



	return valeurs_possibles
}


function suite_actualiser_double_clic(e, ancienne_valeur, nouvelle_valeur){


		if(nouvelle_valeur===null) return -1;
		chargement(true);

		var nom_table = $(".un_menu_orange")[0].id
		var nom_champ_reference = identifiant_par_table(nom_table)
		var valeur_champ_reference = e.target.parentNode.id		
		var numero_colonne = e.target.cellIndex		
		var champ_actualise = $(".header_table.entete_sticky")[numero_colonne].innerText
		
		var ancien_data = {[champ_actualise] : ancienne_valeur}
		var nouveau_data = {[champ_actualise] : nouvelle_valeur}
		
		var table_JSON_local = JSON.parse(recuperer(nom_table));

		/*
		console.log(nom_table)
		console.log(nom_champ_reference)
		console.log(valeur_champ_reference)
		console.log(numero_colonne)
		console.log(champ_actualise)		
		console.log(nouveau_data)*/
		
		if (champ_actualise === nom_champ_reference){
			//-> il faut que l'identifiant n'existe pas déjà
			//-> en utilisant le JSON
			existence_ID = table_JSON_local.filter(a => a[nom_champ_reference] === nouvelle_valeur).length > 0 ;
			//console.log("cet ID existe: " + existence_ID)

			//si c'est un id qui a été mis à jour
			if(existence_ID){
				alert("Mise à jour impossible: cet identifiant '"  + nouvelle_valeur + "' existe déjà.")
				chargement(false);
				return 0 //pas de màj
			}
		}


		if(valeur_champ_reference === 'admin'){
			alert("Impossible de modifier l'admin car cet utilisateur est utile pour administrer votre plateforme sekooly.")
			chargement(false)
			return 0
		}


		try{

			actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data);
			

			e.target.innerText = nouvelle_valeur;

			//si c'est un id qui a été mis à jour
			//console.log(champ_actualise + " VS " + nom_champ_reference)
			if (champ_actualise === nom_champ_reference){

				//-> on met à jour le ID du parent
				e.target.parentNode.id = nouvelle_valeur

			}

			//-> on met à jour le JSON local
			actualiser_json_local_et_drive(nom_table, table_JSON_local, champ_actualise, ancienne_valeur, nouvelle_valeur, valeur_champ_reference)



		}catch(error) {
			alert("Mise à jour impossible: " + error)
			e.target.innerText = ancienne_valeur
			if (champ_actualise === nom_champ_reference){

				//-> on met comme avant le ID du parent
				e.target.parentNode.id = ancienne_valeur

			}
			//-> on remet le JSON local comme avant
			actualiser_json_local_et_drive(nom_table, table_JSON_local, champ_actualise, nouvelle_valeur, ancienne_valeur, valeur_champ_reference)

			console.error(error)
		}


		chargement(false);


}



function formulaire_choix_checkbox(e, ancienne_valeur, identifiant, liste_en_array, liste_deja_cochés){
	
	$("#mini_popup").remove()

	var entetes = '<div id="mini_popup" style="overflow: hidden auto;"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="https://sekooly.github.io/SUPABASE/images/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div>'
	var titre_formulaire = '<div>Classe(s) pour <b>'+identifiant+'</b></div><div id="liste_classe_matieres" style="padding-top: 4%;padding-bottom: 4%;text-align: left;"><div>'
	
	//pour chaque element de la liste
	var les_elements = ""
	for (var i = 0; i <liste_en_array.length;i++) {
		est_coché = liste_deja_cochés ? (liste_deja_cochés.indexOf(liste_en_array[i]) >=0 ? "checked" : "" ): ""
		classe_initiale = est_coché === "checked" ? "en_gras" : ""
		les_elements = les_elements+'<div class="'+classe_initiale+'"><input class="choix_liste_matiere" type="checkbox" id="'+liste_en_array[i]+'" name="choix_liste_matiere" '+est_coché+'><label>'+liste_en_array[i]+'</label></div>'

	}

	var bouton_assigner = '</div></div><button type="button" class="rendre" id="assigner">Assigner</button></div>'
	var html_final = entetes + titre_formulaire + les_elements  + bouton_assigner

	$("body").append(html_final)

	$("#assigner").on("click",function(ceci){
		suite_actualiser_double_clic(e, ancienne_valeur, retourner_les_cochés())
		$("#mini_popup").remove()
	})	

	$(".choix_liste_matiere").on('change', function(e){
		e.target.parentNode.className = e.target.checked ? "en_gras" : ""
	})

}

function retourner_les_cochés(){

	var resultat  = ""
	Array.from($(".choix_liste_matiere:checked")).forEach(function(valeur,index){
		resultat = resultat+ (resultat === "" ? "" : ";") + valeur.id 
	})
	//console.log(resultat)
	
	return resultat;
}


function actualiser_json_local_et_drive(nom_table, table, champ_actualise, ancienne_valeur, nouvelle_valeur, valeur_champ_reference){
	table.some(function(valeur,index){
		if(valeur[champ_actualise] === ancienne_valeur){
			valeur[champ_actualise] = nouvelle_valeur
			return true;
		}
	})

	stocker(nom_table,JSON.stringify(table));

	//si modif de (Classe dans Classes ou Matiere dans Matieres): renommer le dossier sur le drive + autres
	if (champ_actualise === nom_table.slice(0, -1)){
		var id_dossier = valeur_champ_reference
		var nom_final = nouvelle_valeur		
		renommer_sur_drive(id_dossier, nom_final)



	}


}


function renommer_sur_drive(id_dossier, nom_final){
	var lien_script = "https://script.google.com/macros/s/AKfycbw4v50VJkia9YfdFkFQIYDTBLqVYmlxEGOuas9tO-PwvuEI63I/exec?"
	var param_id_dossier = "id_dossier=" + id_dossier 
	var param_nom_final = "nom_final=" + nom_final

	var url = lien_script + param_id_dossier + "&" + param_nom_final
	//console.log(url)

	try{
		var retour = get_resultat_brut(url)
		console.log(retour)
	}catch(error){
		alert(error)
	}
}


function actualiser_parametre(id_parametre){
	if(!id_parametre) id_parametre = $(".un_menu_orange")[0].id

	//console.log(id_parametre)
	effacer(id_parametre)
	//$('[id="'+id_parametre+'"]').click()
	un_menu_clic(id_parametre)


}

function ajouter_donnees_parametres(id_parametre){
	if(!id_parametre) id_parametre = $(".un_menu_orange")[0].id
	var liste_champs = recuperer_entetes_params(id_parametre)
	//console.log(liste_champs)
	creer_formulaire_ajout_donnee_html(id_parametre, liste_champs)
}


function dupliquer_donnees_parametres(id_parametre){
	if(!id_parametre) id_parametre = $(".un_menu_orange")[0].id
	id_ligne_dupliquee = 0

	var liste_champs = recuperer_entetes_params(id_parametre)
	//console.log(liste_champs)
	creer_formulaire_ajout_donnee_html(id_parametre, liste_champs, true)
}

function supprimer_ligne_parameters(id_parametre){
	if(!id_parametre) id_parametre = $(".un_menu_orange")[0].id


	

	if (!$(".selected")[0]){
		confirmer_suppression = prompt("Vous êtes sur le point de vider TOUTE LA TABLE "+id_parametre+". Pour confirmer la suppression, merci d'écrire '"+ id_parametre+"', sinon cliquez sur Annuler.")
		//console.log(confirmer_suppression)
		if(confirmer_suppression === id_parametre){
			chargement(true)
			supprimer_tout(id_parametre)

			//apres 1.5 seconde
			setTimeout(function(){			
				actualiser_parametre()
				chargement(false)
			}, 1500);



		}


		return 0
	}

	var id_ligne = $(".selected")[0].getAttribute('suppression_id')

	var validation = confirm("Voulez-vous supprimer cette ligne ? Cette action est irréversible. (" + id_ligne +")")
	if(validation){


		if(id_ligne === 'admin'){
			alert("Impossible de supprimer l'admin car cet utilisateur est utile pour administrer votre plateforme sekooly.")
			chargement(false)
			return 0
		}

		chargement(true)
		//si besoin (classe ou matière): supprimer sur le drive
		if (id_parametre === "Classes" || id_parametre === "Matieres"){
			var donnees_parametres = JSON.parse(recuperer(id_parametre))
			var index_google_calendar = $("#id_googlecalendar").length > 0 ? $("#id_googlecalendar")[0].cellIndex : -1
			var id_googlecalendar = index_google_calendar >= 0 ? $(".selected")[0].children[index_google_calendar].innerText : ""
			
			//SI NON COMMUN
			//TOUJOURS LE ID_URL pour classe/matiere
			var commun =  $(".selected")[0].children[$('#commun_au_cycle')[0].cellIndex].innerText
			if(commun !== "oui"){
				var id_dossier = $(".selected")[0].children[$('#ID_URL')[0].cellIndex].innerText 	
				//console.log("on va supprimer " + id_dossier)
				supprimer_dossier(id_dossier, id_googlecalendar)


				//SUPPRIMER LE PARENT SI JE VIENS DE SUPPRIMER LE DERNIER FILS
				nom_champ_parent = id_parametre === "Classes" ? 'cycle' : 'classe_id'
				valeur_champ_parent = $(".selected")[0].children[$('[id="'+nom_champ_parent+'"]')[0].cellIndex].innerText
				//console.log(valeur_champ_parent)
				elements_similaires = donnees_parametres.filter(e => e[nom_champ_parent] === valeur_champ_parent)
				//console.log(elements_similaires)
				est_le_dernier_dossier = elements_similaires.length === 1
				//console.log(est_le_dernier_dossier)
				
				if(est_le_dernier_dossier){
					titre_parent_visible_user = id_parametre === "Classes" ? 'cycle' : 'Classe'
					nom_parent_visible_user = $(".selected")[0].children[$('#' + titre_parent_visible_user)[0].cellIndex].innerText
					valeur_ligne_visible_user = $(".selected")[0].children[$('#' + id_parametre.slice(0,-1))[0].cellIndex].innerText
					confirmation = confirm("'" + valeur_ligne_visible_user + "' était la seule "+ id_parametre.slice(0,-1).toLowerCase() +" dans '"+ nom_parent_visible_user +"' (" + titre_parent_visible_user + "). Voulez-vous également supprimer "+nom_parent_visible_user+" ? ("+titre_parent_visible_user+")")


					if(confirmation){

						donnees_cycle =  id_parametre === "Classes" ?  get_resultat(racine_data + "Cycles?" + apikey + "&cycle=eq." +valeur_champ_parent) : ""
						id_dossier_parent =  id_parametre === "Classes" ? (donnees_cycle[0] !== undefined ? donnees_cycle[0]['id_dossier_cycle'] : "") : valeur_champ_parent
						console.log("le parent à supprimer: " + id_dossier_parent)

						if(id_dossier_parent) {
							supprimer_dossier(id_dossier_parent, id_googlecalendar)

							//supprimer dans la BDD
							nom_table_parent = id_parametre === "Classes" ? "ID_RENDUS" : "Classes"
							

							nom_table = nom_table_parent
							nom_champ_reference = identifiant_par_table(nom_table_parent)
							valeur_champ_reference = valeur_champ_parent
							
							//console.log(nom_table)
							//console.log(nom_champ_reference)
							//console.log(valeur_champ_reference)
							


							// on va supprimer le cycle dans la base -> on supprime le cycle sur le stockage
							if(nom_table_parent === "ID_RENDUS"){
								id_dossier_cycle = get_resultat(racine_data + "ID_RENDUS?Cycle=eq."+valeur_champ_parent+"&" +apikey)[0]['id_dossier_cycle']
								console.log("on va supprimer le cycle: " + id_dossier_cycle)
								if(id_dossier_cycle) supprimer_dossier(id_dossier_cycle)
							}


							supprimer(nom_table,nom_champ_reference,valeur_champ_reference)


						}

					}
				}


				
			}



			//return 0 //à commenter
		}

		//supprimer dans la BDD
		nom_table = id_parametre
		nom_champ_reference = identifiant_par_table(id_parametre)
		valeur_champ_reference = id_ligne
		
		/*
		console.log(nom_table)
		console.log(nom_champ_reference)
		console.log(valeur_champ_reference)
		*/

		supprimer(nom_table,nom_champ_reference,valeur_champ_reference)

		//apres 1 seconde
		setTimeout(function(){			
			//supprimer en local
			//supprimer sur l'affichage
			//temporaire: actualiser
			actualiser_parametre()
			chargement(false)	
		}, 1000);
		
	}

}



function supprimer_dossier(id_dossier, id_googlecalendar){
	var lien_script = "https://script.google.com/macros/s/AKfycbyGEGpbPE0WniCcBMbLCar_zGTNwKyABrnmfOE-zfb8TOUH4AY/exec"

	var id_dossier = "&id_dossier=" + id_dossier
	var id_googlecalendar = id_googlecalendar ? "&id_googlecalendar=" + id_googlecalendar : ""

	var url = lien_script +  "?suppr=true" + id_dossier + id_googlecalendar
	//console.log(url)

	//console.log("maintenance: " + url);
	try{
		var resultat = get_resultat_brut(url)
		console.log(resultat)
	}catch(error){
		console.error(error)
		alert("Erreur survenue pendant la suppression sur le serveur: " + error);
	}




}


function telecharger_donnees_parametres(id_parametre){
	if(!id_parametre) id_parametre = $(".un_menu_orange")[0].id

	//alert("Téléchargement ici.")
	var choix_entete_ou_tout_html = '<div id="mini_popup">'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<div id="entete-fenetre" style="display: inline-flex;float: right;">'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<img alt="X" src="https://sekooly.github.io/SUPABASE/images/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div>'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<div>Télécharger '+id_parametre+'</div><select style="width: 80%;" id="choix_download_param">'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<option value="En-têtes">En-têtes</option>'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<option value="Tout">Toutes les données</option></select>'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<button type="button" class="rendre" onclick="telecharger_parametre()">Télécharger</button></div>'

	$("#mini_popup").remove()
	$("body").append(choix_entete_ou_tout_html)

}


function telecharger_parametre(id_parametre){

	if(!id_parametre) id_parametre = $(".un_menu_orange")[0].id

	var entetes_seulement = $("#choix_download_param")[0].value === "En-têtes"
	var contenu_recup =  recuperer(id_parametre) ? JSON.parse(recuperer(id_parametre)) : nom_des_champs(id_parametre)
	//console.log(contenu_recup)
	var contenu = convertir_csv(contenu_recup, entetes_seulement)
	//console.log(contenu)
	var suite_nom = entetes_seulement ? "-modele-" : ""
	var nom_fichier =  id_parametre+suite_nom+maintenant_sans_caracteres_speciaux()+".csv";



	enregistrer_donnees_en_csv(contenu, nom_fichier);








}


function enregistrer_donnees_en_csv(contenu,nom_fichier) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var universalBOM = "\uFEFF"
    var blob = new Blob([(universalBOM+contenu)], { type: 'text/csv;charset=utf-8;' });
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.target = '_blank';
    a.download = nom_fichier;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove()
}


function importer_parametres(){
	$('#fichier_import').remove()

	//choisir un SEUL fichier pour le id_parametre
	var id_parametre = $(".un_menu_orange")[0].id 
	var champs_initiaux = nom_des_champs(id_parametre)//on recupere depuis la BDD directement
	var fichier_html = '<input id="fichier_import" type="file" name="fichier_import" accept=".csv" style="display:none;">'
	$('body').append(fichier_html)

	$('#fichier_import').on('change',function(e){

		//c'est forcément un .csv sinon on quitte
		if(e.target.files[0].name.split('.').pop().trim().toLowerCase() !== "csv"){
			alert("Erreur: merci de choisir un fichier d'extension .csv")
			$('#fichier_import').remove()
			return 0
		}

		var reader = new FileReader();
		reader.onload = function () {
			var contenu = reader.result
			var json_final = csv_en_JSON(contenu)

  			//console.log(json_final)

  			//au moins une donnée
  			if(json_final.length === 0){
  				alert("Ce fichier .csv ne contient aucune donnée à importer.")
				//import qu'une fois
				$('#fichier_import').remove()
				return 0
  			}

  			//tous les Keys importés sont reconnus
  			//on s'arrete dès qu'une clé est non trouvée
			var probleme = ""
			var cle_problematique = Object.keys(json_final[0]).some(key => {
				probleme = key
				return champs_initiaux.indexOf(key) < 0 
  			})
  			if(cle_problematique){
  				alert("Problème d'import: le champ '" + probleme + "' n'est pas reconnu dans la table '"+id_parametre+"'.")
				//import qu'une fois
				$('#fichier_import').remove()
  				return 0
  			}


  			//tous les champs obligatoires sont renseignés (todo?)
  			//tous les champs automatiques renseignés automatiquement
  			//aucun champ IDENTIFIANT déjà existant tenté d'être rajouté (todo?)
  			//fenêtre de résumé: OK ou pas OK
  			var nombre_lignes = Number(json_final.length) 
  			var liste_champs = Object.keys(json_final[0])
  			
  			var avec_s = nombre_lignes>1?'s':''
  			confirmation = confirm('Nous avons détecté ' + nombre_lignes + ' ligne'+avec_s+' avec ' + champs_initiaux.length + ' champs. Voulez-vous importer ces données ?')
  			if(confirmation){
  				chargement(true)
  				
  				for (var i = 0; i< json_final.length; i++) {
  					try{
  						//ajouter_un_element(id_parametre, json_final[i])
  						//console.log(json_final[i])
  						creer_formulaire_ajout_donnee_html(id_parametre, liste_champs, false, json_final[i] ? json_final[i] : "")
						ajouter_donnees_saisies(id_parametre, i<(json_final.length-1)) //deuxieme parametre vaut FAUX -> on est sur le dernier
  						
  					}catch(error){
  						console.error(error)
  						alert(error)
  					}
  				}	

  				/*
				setTimeout(function(){
					actualiser_parametre()
  					chargement(false)
				}, 2000);*/



  			}

			//import qu'une fois
			$('#fichier_import').remove()
		};


		reader.readAsText(e.target.files[0]);

		
	})


	$('#fichier_import').click()



}


function init_donnees(){

	id_parametre = $(".un_menu_orange")[0].id

	//1 seul séléctionné
	if ($(".selected")[0]){
		identifiant_a_init = $(".selected")[0].getAttribute('suppression_id')
		var confirmation = confirm("Êtes-vous sûr de réinitialiser '"+identifiant_a_init+"' ? Cela remettra son mot de passe par défaut, et ignorera toute consultation de notifications.")

		if(!confirmation) return -1;


		chargement(true);

		reinitialiser_unseul_mdp_datenotif(id_parametre, identifiant_a_init)
		setTimeout(function(){
			actualiser_parametre()
		}, 2000);		

		chargement(false)


	}else{


		var confirmation = prompt("Êtes-vous sûr d'initialiser votre plateforme ? Cela remettra TOUS les mots de passe par défaut et ignorera toute consultation de notifications. Pour continuer, taper 'reinitialiser'.")
		if(confirmation === "reinitialiser"){
			chargement(true)
			reinitialiser_mdp_datenotif()
			setTimeout(function(){
				actualiser_parametre()
			}, 2000);
			

			chargement(false)
		}	
	}

}


function recuperer_entetes_params(id_parametre){

	/*
	if(!id_parametre) id_parametre = $(".un_menu_orange")[0].id
	var liste_champs = []

	for (var i = 0 ; i < $(".header_table.entete_sticky").length ; i++){
		liste_champs.push($(".header_table.entete_sticky")[i].innerText)
	}

	return liste_champs*/

	return nom_des_champs(id_parametre)

}



function creer_formulaire_ajout_donnee_html(id_parametre, liste_champs, avec_duplicata, une_donnee){
	var entete = '<div style="overflow:auto;" id="mini_popup"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="https://sekooly.github.io/SUPABASE/images/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div><div>Nouvelle donnée dans ' +id_parametre+ '</div><form class="donnees_saisies" id="donnees_saisies" >'
	var liste_champs_html = ""
	
	//console.log(une_donnee)
	

	if (liste_champs.length > 0){
		chargement(true)
		for (var i = 0; i < liste_champs.length; i++) {
			//rendre les champs auto NON MODIFIABLES (id_url, id_agenda, ...)

			//console.log(une_donnee[liste_champs[i]])

			disabled = parametres_automatiques.indexOf(liste_champs[i]) >= 0 ? 'disabled' : ""
			donnee_dupliquee = avec_duplicata  ? ($(".selected") ? ' value="'+$(".selected")[0].children[i].innerText+'" ' : '' ) : 
								une_donnee ? ' value="' + (une_donnee[liste_champs[i]] ? une_donnee[liste_champs[i]] : "") + '" ' : ""

			//si c'est disabled alors on masque cet élément carrément

			html_du_input = '<input class="donnee" '+donnee_dupliquee+' id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" '+disabled +'>'
			

			//SI SANS DUPLICATION
			if(!une_donnee){


				//si c'est Couleur_matiere
				if(liste_champs[i] === "Couleur_matiere"){

					html_du_input = '<select class="donnee" id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" >'
					
					for (j = 0; j<liste_couleurs.length ; j ++){
						html_du_input = html_du_input + '<option value ="'+liste_couleurs[j]+'">'+liste_couleurs[j]+'</option>'
					}

					html_du_input = html_du_input + '</select>'



				//si c'est une liste dynamique
				}else if (champs_avec_listes_dynamiques.indexOf(liste_champs[i]) >= 0){

					
					toutes_les_matieres = get_resultat(racine_data + 'Matieres' +'?' + apikey)

					choix_classe_dun_admin = (liste_champs[i] === "Classe" || liste_champs[i] === "classe_bis") && $(".un_menu_orange")[0].innerText === "Administration"
					choix_classe_dun_prof = (liste_champs[i] === "Classe" || liste_champs[i] === "classe_bis") && $(".un_menu_orange")[0].innerText === "Profs"
					//console.log(liste_champs[i])
					//console.log(choix_classe_dun_admin)
					
					nom_du_champ_clé = liste_champs[i] === "cycle" ? "Cycle"  :
										(liste_champs[i] === "classe_bis" || liste_champs[i] === "Classe_principale") ? "Classe"  : 
										choix_classe_dun_admin ? "Cycle"  :
										choix_classe_dun_prof ? "Classe_Matiere" : liste_champs[i]

					//console.log(nom_du_champ_clé)			
					valeurs_possibles = valeursUniquesDeCetteKey(toutes_les_matieres,nom_du_champ_clé)
					if(choix_classe_dun_admin) valeurs_possibles = valeurs_possibles.map(e => '(Tous|' +e+ ')')
					multiple_choix_classes = choix_classe_dun_prof ? 'multiple' : ""


					
					//il y a des valeurs déja existantes
					if(valeurs_possibles.length === 0){
						html_du_input = '<input class="donnee" '+donnee_dupliquee+' id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" '+disabled+'>'
					
					//aucune valeur déja existante
					}else{

						html_du_input = '<select class="donnee" id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" '+multiple_choix_classes+'>'
					
						for (j = 0; j<valeurs_possibles.length ; j ++){
							html_du_input =  html_du_input + '<option value ="'+valeurs_possibles[j]+'">'+valeurs_possibles[j]+'</option>'
						}

						html_du_input = html_du_input + '<option value="nouveau" style="font-style: oblique;" >Nouvelle valeur</option>' + '</select>'

					}

				//si c'est oui ou non
				}else if(champs_oui_ou_non.indexOf(liste_champs[i]) > 0){
					html_du_input = '<select class="donnee" value="non" id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" ><option value="non">non</option><option value="oui">oui</option></select>'
				}


			}
			
			

			//console.log(html_du_input)
			var display_element = " style='display:"+(disabled ? "none" : "")+"';"			
			liste_champs_html = liste_champs_html + '<div class="une_donnee_saisie" '+display_element+' id="'+liste_champs[i]+'"><label>'+liste_champs[i]+'</label>'+html_du_input+'</div>'
		}
	}

	var boutons_ajouter_annuler = '</form><button type="button" class="rendre" onclick="ajouter_donnees_saisies(\''+id_parametre+'\')">Ajouter</button>'
	boutons_ajouter_annuler = boutons_ajouter_annuler + '<button type="button" class="rendre" onclick="$(\'#mini_popup\').remove()">Annuler</button></div>'
	boutons_ajouter_annuler = boutons_ajouter_annuler


	$("#mini_popup").remove()
	$("body").append(entete+liste_champs_html+boutons_ajouter_annuler)


	//au changement des select -> si nouvelle valeur alors on force l'affichage
	$('select.donnee').on('change', function(e){
		//console.log(e.target.value)
		if(e.target.value === "nouveau"){
			transformer_en_simple_input(e.target.id)
		}
	})

	chargement(false)
}

function transformer_en_simple_input(nom_champ){

	nouvelle_valeur = prompt("Indiquez la nouvelle valeur de " + nom_champ +": ")
	if (nouvelle_valeur !== null){
		$("[id='"+nom_champ+"'].donnee")[0].outerHTML = '<input class="donnee" value="'+nouvelle_valeur+'" id="'+nom_champ+'" name="'+nom_champ+'">'
	}else{
		$("[id='"+nom_champ+"'].donnee")[0].value = ""
	}
}

function ajouter_donnees_saisies(id_parametre,ne_pas_actualiser){
	//console.log(id_parametre)




	//nom_etablissement déjà ok
	//nom_cycle
	nom_cycle = $(".donnee#cycle").length > 0 ? $(".donnee#cycle")[0].value :
				$(".donnee#Cycle").length > 0 ? $(".donnee#Cycle")[0].value : ""
	
	//nom_classe
	//si c'est un identifiant Profs/Admin -> on zappe
	nom_classe = $(".donnee#Classe").length > 0 ? ($(".donnee#Classe")[0].value.includes("|") ? "" : $(".donnee#Classe")[0].value) : ""
	
	//nom_matiere
	nom_matiere = $(".donnee#Matiere").length > 0 ? $(".donnee#Matiere")[0].value : ""
	
	/*
	console.log(nom_cycle)
	console.log(nom_classe)
	console.log(nom_matiere)
	*/



	//interdire l'ajout si la classe OU la matière existe déjà
	if(id_parametre === "Classes"){
		var donnees_classes = JSON.parse(recuperer('Classes'))
		if(donnees_classes  !== null){

			var existence_classe = donnees_classes.some(e => {
				if (e) return e['Classe'] === nom_classe && e['cycle'] === nom_cycle
			})	

			if(existence_classe ){
				alert("Cette classe existe déjà dans ce cycle.")
				return -1;
			}
		}

	}else if(id_parametre === "Matieres"){
		var donnees_matieres = JSON.parse(recuperer('Matieres'))

		if(donnees_matieres !== null){
			var existence_matiere = donnees_matieres.some(e => {
				if(e) return e['Classe'] === nom_classe && e['Matiere'] === nom_matiere+')'
			})
			
			if(existence_matiere ){
				alert("Cette matière existe déjà.")
				return -1;
			}

		}

	}

	





	if(id_parametre === "Classes" || (id_parametre === "Matieres")){

		//obliger la saisie de tous les non disabled
		if (formulaire_rempli("donnees_saisies") === false){
			alert("Merci de remplir tous les champs.")
			return -1;

		}



		var param_nom_etablissement = nom_etablissement ? "?nom_etablissement=" + nom_etablissement : ""
		var param_nom_cycle = nom_cycle ? "&nom_cycle=" + nom_cycle : ""
		var param_nom_classe = nom_classe ? "&nom_classe=" + nom_classe : ""
		var param_nom_matiere = nom_matiere ? "&nom_matiere=" + nom_matiere : ""
		var param_commun_au_cycle = $('.donnee#commun_au_cycle')[0] ? "&commun_au_cycle=" + $('.donnee#commun_au_cycle')[0].value : "non"
		
		//initier SI ET SEULEMENT SI le cycle n'a pas encore de rendus
		id_rendu_actuel = get_resultat(racine_data + "ID_RENDUS?" + apikey + '&Cycle=eq.' + nom_cycle)
		var initier = id_rendu_actuel.length === 0
		var param_initier =  "&initier=" + initier 

		var lien_script = "https://script.google.com/macros/s/AKfycbyGEGpbPE0WniCcBMbLCar_zGTNwKyABrnmfOE-zfb8TOUH4AY/exec"
		lien_script = lien_script +  param_nom_etablissement
		lien_script = lien_script +  param_nom_cycle
		lien_script = lien_script +  param_nom_classe
		lien_script = lien_script +  param_nom_matiere
		lien_script = lien_script +  param_commun_au_cycle
		lien_script = lien_script +  param_initier


		//console.log(lien_script)
		//return 0


		chargement(true)
		var les_ids_recus= get_resultat(lien_script)
		
		//console.log(les_ids_recus)

		//on récupère les ID
		var la_classe = nom_classe
		var id_de_la_classe = get_valeur(les_ids_recus,la_classe)
		var id_du_cycle = get_valeur(les_ids_recus,nom_cycle)
		var id_googlecalendar = get_valeur(les_ids_recus,"id_googlecalendar")
		
		var la_matiere = nom_matiere
		var id_de_la_matiere = get_valeur(les_ids_recus,la_matiere)
		var id_dossier_rendus = get_valeur(les_ids_recus,"Rendus de devoirs")


		//envoyer via POST le nouveau dossier_rendus_cycle si initier = vrai
		if(initier){
			nouveau_data = {"Cycle":nom_cycle,"dossier_rendus_cycle":id_dossier_rendus,"id_dossier_cycle":id_du_cycle}
			post_resultat_asynchrone(racine_data + "ID_RENDUS?" + apikey, nouveau_data)
		}
		
		//en mode matière ET matiere = cycle -> commun
		//sinon, non 
		$(".donnee[id='commun_au_cycle']")[0].value = id_parametre === "Matieres" && $(".donnee#Cycle")[0].value === $(".donnee#Matiere")[0].value ? "oui" : "non"

		if(id_parametre === "Classes"){
		/******* POUR CLASSE ********/


			//Classe_bis
			$(".donnee[id='Classe_bis']")[0].value = la_classe
			//ID_URL
			$(".donnee[id='ID_URL']")[0].value = id_de_la_classe
			//URL 
			$(".donnee[id='URL']")[0].value  = "https://drive.google.com/drive/folders/" + id_de_la_classe
			//URL_Mapping
			$(".donnee[id='URL_Mapping']")[0].value  = id_de_la_classe
			//id_google_calendar
			$(".donnee[id='id_googlecalendar']")[0].value  = id_googlecalendar
			//URL_agenda
			$(".donnee[id='URL_agenda']")[0].value  = "https://calendar.google.com/calendar/embed?src="+id_googlecalendar+"&ctz=Africa%2FNairobi"
			
		}else if(id_parametre === "Matieres"){
		/******* POUR MATIERE *******/


			//Classe_Matiere
			$(".donnee[id='Classe_Matiere']")[0].value = '('+ la_classe+'|'+ la_matiere +')'
			//ID_URL
			$(".donnee[id='ID_URL']")[0].value = id_de_la_matiere		
			//Matiere_bis
			$(".donnee[id='Matiere_bis']")[0].value = la_matiere		
			//URL
			$(".donnee[id='URL']")[0].value = "https://drive.google.com/drive/folders/" + id_de_la_matiere		
			//URL_Mapping
			$(".donnee[id='URL_Mapping']")[0].value = id_de_la_matiere
			//classe_id
			$(".donnee[id='classe_id']")[0].value = id_de_la_classe

		}




				
	}else if(id_parametre === "Eleves" || id_parametre === "Profs" || id_parametre === "Administration"){
		//obliger la saisie de tous les identifiants (todo)



		/*********** POUR LES IDENTIFIANTS *************/

		if (id_parametre.includes("Admin")) $(".donnee[id='Classe']")[0].value = '(Tous|' + $(".donnee[id='Cycle']")[0].value +")" 
		
		$(".donnee[id='Derniere_consultation_notifs']")[0].value = "30/12/1899 00:00:00"
		$(".donnee[id='type']")[0].value = id_parametre.includes("Admin") ? "Administration" : id_parametre
		$(".donnee[id='Droit_acces_anticipe_examen']")[0].value = id_parametre.includes("Eleves") ? "non" : "oui"
		if($(".donnee[id='Droit_changer_ecolage']")[0]) $(".donnee[id='Droit_changer_ecolage']")[0].value = "non"
		if($(".donnee[id='Droits_modifs']")[0]) $(".donnee[id='Droits_modifs']")[0].value = "non"
		$(".donnee[id='Ecolage_OK']")[0].value = "oui"
		$(".donnee[id='code_hash']")[0].value = "nok"
		$(".donnee[id='Reponse_sondage']")[0].value = "non"
		$(".donnee[id='droit_hors_maintenance']")[0].value = "non"
			
	}


	var mon_JSON = convertir_saisie_en_JSON("donnees_saisies", id_parametre)
	//console.log(id_parametre)
	//console.log(mon_JSON)
	var nouvel_id = recuperer(id_parametre) ? JSON.parse(recuperer(id_parametre)).length : 1
	//console.log(nouvel_id)


	//màj sur BDD -> DECOMMENTER ICI !!!
	ajouter_un_element(id_parametre,JSON.parse(mon_JSON),nouvel_id)
	
	//màj en JSON local	
	//màj en affichage
	//TEMPORAIRE: actualiser
	if(!ne_pas_actualiser) actualiser_parametre(id_parametre)

	//vider le formulaire
	vider_les_input()

	chargement(false)


	return 0
}



function get_valeur(liste_initiale,motif){
	//console.log(liste_initiale)
	//console.log(motif)
	
	var index_motif = liste_initiale.findIndex((element) => element.includes(motif + ':'));
	//console.log(index_motif)
	//console.log("index_motif: " + index_motif)
	return liste_initiale[index_motif].split(motif + ':')[1]

}

function convertir_saisie_en_JSON(id_form,id_parametre){
	var saisie = "{"
	var liste_champs_saisie = $("#" + id_form)[0].children

	id_parametre = id_parametre ? id_parametre :
					$('.un_menu_orange')[0] ? $('.un_menu_orange')[0].innerText : ""
	for (var i = 0; i < liste_champs_saisie.length ; i++){
		nom_champ = $("#"+id_form)[0].children[i].children[0].innerText

		//si c'est une classe pour prof -> récupérer $('#Classe.donnee').val().join(";");
		valeur_saisie = (nom_champ === "Classe" && id_parametre ==="Profs" && $("#Classe.donnee")[0].nodeName !== "INPUT") ?  $('#Classe.donnee').val().join(";") : $(".donnee[id='"+nom_champ+"']")[0].value
		saisie = saisie + '"' + [nom_champ]  + '"' + ":"+ '"' +   valeur_saisie  +'"'
		virgule = i===liste_champs_saisie.length-1 ? "" : ","
		saisie = saisie + virgule
	}
	

	saisie = saisie + "}"

	return saisie
}

function formulaire_rempli(nom_formulaire){


	return !Array.from($("#"+nom_formulaire)[0].children).some(function(valeur, index, array) {
		//console.log(valeur.id)
		est_actif = !$(".donnee[id='"+valeur.id+"']")[0].disabled
		est_vide = $(".donnee[id='"+valeur.id+"']")[0].value === ""
		
		//console.log(valeur.id + " : " + (est_actif && est_vide))

		return est_actif && est_vide 
	});


}


function vider_les_input(){
	Array.from($(".donnee.donnee")).forEach(e => e.value = "")
}



























/********************************* GESTION BULLETINS ********************************/
function afficher_bulletins(oui){
	if(element_DOM('bulletin')) element_DOM('bulletin').style.display = oui ? "" : "none"
	
}

function supprimer_bulle_bulletins(){
	if($("#bulletin")[0]) $("#bulletin")[0].parentNode.remove()
	masquer_les_bulletins()
}

function masquer_les_bulletins(){
	$("#titre_drive_bulletins")[0].style.display = "none"
	$("#drive_bulletins")[0].style.display = "none"
}


function clic_bulletin(){


	chargement(true)
	if(recuperer('mon_type').includes('Administration') ){
		
		if(recuperer('dossier_chargé') && $("#accueil_utilisateur")[0].innerText.includes("Vie de classe")){
			afficher_ou_non_choix_fichier(true)
			mode_bulletin(true)
		}else{
			alert("Merci d'ouvrir un dossier Vie de classe avant de publier un bulletin.")

		}
		
		chargement(false)

	}else if(recuperer('mon_type').includes('Eleves')){
		choisir_periode_bulletin()
		chargement(false)

	//profs
	}else{
		choisir_periode_et_classe_bulletin()
		chargement(false)
	}

	/*

	*/
}

function choisir_periode_et_classe_bulletin(){
	var mes_classes = valeursUniquesDeCetteKey(JSON.parse(recuperer("mes_matieres")),"Classe")
	var option_classes = ""
	mes_classes.forEach(function(valeur,index_classe){
		option_classes += '<option value="'+valeur+'">'+valeur+'</option>'
	})
	
	var elements_html = `<div><label for="periode_bulletin"><select style="width: 60%;" id="periode_bulletin" name="periode_bulletin"><option value="PREMIER TRIMESTRE">PREMIER TRIMESTRE</option><option value="DEUXIEME TRIMESTRE">DEUXIEME TRIMESTRE</option><option value="TROISIEME TRIMESTRE">TROISIEME TRIMESTRE</option><option value="ANNUEL">ANNUEL</option></select></label>
		<label for="la_classe"><select style="width: 60%;" id="la_classe_bulletin" name="la_classe">`+option_classes+`</select></label></div>`
	creer_mini_popup("Choisissez la période et la classe du bulletin à consulter:", elements_html,"Consulter","consulter_bulletin_de_la_classe()")
	
}

function id_vie_de_classe(id_classe){
	url = racine_data + 'Matieres?Classe=eq.'+id_classe+'&Matiere=eq.Vie de classe'+ "&" +apikey
	//console.log(url)
	resultat = get_resultat(url)
	//console.log(resultat)
	if(resultat) resultat = resultat[0]['ID_URL']
	return resultat
}

function consulter_bulletin_de_la_classe(){

	chargement(true)


	periode_bulletin = $("#periode_bulletin")[0].value
	nom_classe = $("#la_classe_bulletin")[0].value
	id_classe = id_vie_de_classe(nom_classe) //récupérer le ID de la vie de classe de la classe choisie
	//console.log(id_classe)
	//alert(nom_classe)

	url = racine_data + 'Fichiers?categorie_fichier=eq.Bulletins&periode_bulletin=eq.'+periode_bulletin+'&id_dossier=eq.'+id_classe + "&" +apikey
	//console.log(url)
	resultat_bulletins = get_resultat(url)
	//console.log(resultat_bulletins)

	if(resultat_bulletins.length === 0){
		alert("Aucun bulletin disponible sur la période '"+periode_bulletin.toLowerCase() +"' pour la classe de '"+nom_classe+"' pour l'instant.")
		chargement(false)
	}else{
		
		resultat_bulletins = resultat_bulletins[0]
		console.log(resultat_bulletins)
		visualiser(resultat_bulletins['nom_fichier'],resultat_bulletins['id_fichier'],"","",true)

		$('#mini_popup').remove()
		chargement(false)
	}



	return "Consultation terminée."







	chargement(false)
}

function choisir_periode_bulletin(){
	var elements_html = '<label for="periode_bulletin"><select style="width: 60%;" id="periode_bulletin" name="periode_bulletin"><option value="PREMIER TRIMESTRE">PREMIER TRIMESTRE</option><option value="DEUXIEME TRIMESTRE">DEUXIEME TRIMESTRE</option><option value="TROISIEME TRIMESTRE">TROISIEME TRIMESTRE</option><option value="ANNUEL">ANNUEL</option></select></label>'
	creer_mini_popup("Choisissez la période du bulletin à consulter:", elements_html,"Consulter","consulter()")
	
}

function consulter(){
	chargement(true)
	consulter_mon_bulletin(recuperer('identifiant_courant'))
	chargement(false)
}


/*NON UTILE*/
function choisir_clic_bulletin(){

	popup_choix = '<div id="mini_popup"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="https://sekooly.github.io/SUPABASE/images/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div><div>Que voulez-vous faire?</div><select style="width: 80%;" id="choix_bulletin"><option value="upload">Mettre en ligne les bulletins</option><option value="voir">Voir les bulletins en ligne</option></select><button type="button" class="rendre" onclick="choix_bulletin_ok()">Valider</button></div>'
	$('body').append(popup_choix) 
}


/*NON UTILE*/
function choix_bulletin_ok(){
	if($("#choix_bulletin")[0].value === "upload"){
		afficher_ou_non_choix_fichier(true)
		mode_bulletin(true)
	}else if($("#choix_bulletin")[0].value === "voir"){
		consulter_mon_bulletin()

	}

	$('#mini_popup').remove()

}



function consulter_mon_bulletin(identifiant_eleve){

	motif = '*"'+identifiant_eleve+'"*'
	if(!identifiant_eleve) motif = "*"

	periode_bulletin = $("#periode_bulletin")[0].value

	url = racine_data + 'Fichiers?categorie_fichier=eq.Bulletins&periode_bulletin=eq.'+periode_bulletin+'&destinataire_par_page=like.'+motif + "&" +apikey
	//console.log(url)
	resultat_bulletins = get_resultat(url)
	//console.log(resultat_bulletins)

	if(resultat_bulletins.length === 0){
		alert("Aucun bulletin disponible à votre nom sur la période '"+periode_bulletin.toLowerCase() +"' pour l'instant.")
		chargement(false)
	}else{


		for (numero_bulletin = 0;numero_bulletin < resultat_bulletins.length ; numero_bulletin++){
			id_fichier_bulletin = resultat_bulletins[numero_bulletin]['id_fichier']
			mon_numero_page = Number(JSON.parse(resultat_bulletins[numero_bulletin]['destinataire_par_page'])[identifiant_eleve])

			//console.log(id_fichier_bulletin + ' à la page ' + mon_numero_page)
			if(identifiant_eleve){
				afficher_mon_bulletin(id_fichier_bulletin,mon_numero_page,identifiant_eleve)
			}else{
				afficher_mon_bulletin(id_fichier_bulletin,1)

			}
		}
			
		$('#mini_popup').remove()

		//console.log(url)	
	}



	return "Consultation terminée."
}


function mode_bulletin(oui){
	if(oui){
		$("#categorie_choisie")[0].value = "Bulletins"	
		element_DOM("categorie_choisie").disabled = true;
		element_DOM("choix_youtube").style.display = "none"
		element_DOM("choix_extrait_manuel").style.display = "none"
		element_DOM("choix_date_effet").style.display = "none"
		element_DOM("telechargeable").style.display = "none"
		element_DOM("est_telechargeable").checked = false
		element_DOM('file').setAttribute('accept','application/pdf')
		element_DOM('choix_popup').setAttribute('style','visibility: visible;overflow-y: scroll;width: 450px;max-width: 95%;overflow-x: hidden;')
		element_DOM("file").value = "";
		$("[value='Bulletins']")[0].style.display = ""


	}else{
		$("#attribution").remove()
		$("#trimestre").remove()

		element_DOM("categorie_choisie").disabled = false; 	
		element_DOM("choix_youtube").style.display = ""
		element_DOM("choix_extrait_manuel").style.display = ""
		element_DOM("choix_date_effet").style.display = ""
		element_DOM("telechargeable").style.display = ""
		element_DOM("est_telechargeable").checked = true
		element_DOM('file').setAttribute('accept',".txt,.bmp,.gif,.jpeg,.jpg,.png,.png,.pdf,.bmp,.xlsx,.xls,.xlsm,.ppt,.pptx,.doc,.docx,.html,.csv,.js,.rtf,.mp4,.mp3,.wav")
		element_DOM('choix_popup').setAttribute('style','visibility: visible')
		$("[value='Bulletins']")[0].style.display = "none"
		$("#categorie_choisie > [value='Manuels']")[0].style.display = !recuperer("mon_type").includes("Administration") ? "none" : "" //manuels interdits sauf aux membres de l'administration
	}
	
}












function afficher_mon_bulletin(id_fichier, numero_page,identifiant_eleve){
	var url = 'https://www.googleapis.com/drive/v2/files/'+id_fichier+'?key='+google_api_file_access+'&alt=media&source=downloadUrl'
	PDFJS.getDocument(url).then(function(pdf){ 
		//console.log(pdf)
		//console.log(numero_page)

		visualiser("nom_fichier", "", "",  "Bulletin " + identifiant_eleve||" ",true,true)
		pdf.getPage(numero_page).then(function recuperer_page_utile(page) {
			//console.log(page)
			var scale = 2.5;
			var viewport = page.getViewport(scale);

			//
			// Prepare canvas using PDF page dimensions
			//
			var canvas = document.getElementById('vizcanva');
			var context = canvas.getContext('2d');
			canvas.height = viewport.height;
			canvas.width = viewport.width;

			//no right click
			$("#vizcanva"). on("contextmenu",function(e){ return false; })

			//
			// Render PDF page into canvas context
			//
			var task = page.render({canvasContext: context, viewport: viewport})
			task.promise.then(function(){
				//console.log(canvas.toDataURL('image/png'));
				element_DOM('previsualisation').setAttribute('style','overflow: scroll;height:60%')
				chargement(false)
			}).catch(e=>console.error(e))
	});
	})


}



function mon_ecolage_est_ok(){

	if(recuperer('mon_type').includes("Eleves")){
		identifiant_eleve = recuperer("identifiant_courant")
		url = racine_data + "Eleves" + "?Identifiant=eq." + identifiant_eleve + "&" +apikey
		//console.log(url)
		return get_resultat(url)[0]["Ecolage_OK"] === "oui"
	}else{
		return true
	}
}



function telecharger_canvas(){
	mon_ecolage_ok = mon_ecolage_est_ok()

	if(mon_ecolage_ok){
		var link = document.createElement('a');
		link.download = 'Bulletin-'+ identifiant_eleve+'.png';
		link.href = document.getElementById('vizcanva').toDataURL()
		link.click();
		link.remove()
	}else{
		alert("Vous devez régulariser vos frais de scolarité pour accéder à votre bulletin complet.")
	}


}










































/********************************* GESTION DES PREPARATIONS DE LA PLATEFORME *********************************/
a_stocker = recuperer("a_stocker") ? JSON.parse(recuperer("a_stocker")) : {}
function plateforme_prete(){
	return get_resultat(racine_initiale + '/Etablissements?nom_etablissement=eq.' + nom_etablissement +'&'+ api_initial)[0]['plateforme_prete']	
}


function initialisation_de_la_plateforme(){
	
	vider_fenetre(progression_initialisation())
	$("#bye_prev").remove()
	$("#barre_verticale").remove()
	$("#mynavbar").remove()
	$("#span_date_effet").remove()



	afficher_fenetre(true)	

	contenu = "Bonjour <span style='font-weight: bold;color: #FF6C00;'> "+recuperer('identifiant_courant').toUpperCase()+ "</span>, et bienvenue sur la plateforme de télé-enseignement Sekooly!<br><br>"
	contenu += "Pour mettre en route la plateforme de l'établissement <b>" + nom_etablissement.toUpperCase() + "</b>, nous aurons besoin de quelques informations supplémentaires.<br><br><rouge>Toutes les informations que vous allez saisir seront modifiables plus tard.</rouge><br>"
	bouton = "<button onclick='suivant()' id='bouton_suivant' class='mon_bouton' style='height: 50px;font-size: inherit;'>C'est parti!</button>"
	
	conteneur_texte_html = '<div class="init" style="overflow: hidden auto;height: 90%;padding: 2%;text-align: center;font-size: 150%;"><div id="contenu_etape">'+contenu+'</div>'+bouton+'</div>'
	conteneur_texte = document.createElement('div')
	conteneur_texte.innerHTML = conteneur_texte_html
	$("#fenetre")[0].appendChild(conteneur_texte.firstChild)


	if(numero_etape > 0){
		//numero_etape = numero_etape-1
		suivant()
	}else{
		chargement(false)
	}


}

function suivant(){

	if(enregistrer_la_saisie()){

		numero_etape = numero_etape+1
		//console.log(numero_etape)

		if(numero_etape < nb_etapes){

			resultat = get_resultat(racine_initiale + "Etapes?id=eq."+numero_etape+"&" + api_initial)[0]
			
			changer_contenu_etape(resultat["contenu_etape"])
			changer_texte_bouton(resultat["bouton_suivant"])
			$("#titre_fenetre")[0].innerHTML = progression_initialisation()
		}else{

			chargement(true)
			changer_contenu_etape("Merci de patienter sans actualiser l'onglet, nous créons vos données!")
			$("#bouton_suivant").remove()		
			$("#titre_fenetre")[0].innerHTML = progression_initialisation()	
			proceder_a_linitialisation()
		}

	}else{
		alert("Vous devez saisir l'information pour continuer.")
	}
	
	chargement(false)
}

function proceder_a_linitialisation(){

	a_stocker = JSON.parse(recuperer("a_stocker"))

	//changer le role, la classe, le cycle et le numéro de téléphone de identifiant_courant
	var nouveau_data = {
		"Role" : a_stocker["Role"],		
		"Telephone" : a_stocker["Telephone"],
		"Cycle" : a_stocker["Cycle"],
		"Classe" : '(Tous|' + a_stocker["Cycle"] + ')'
	}
	url = racine_data + "Administration?Identifiant=eq." + recuperer("identifiant_courant") + "&"+ apikey
	//console.log(url)
	patch_resultat_asynchrone(url,nouveau_data)





	chargement(true)





	//changer la classe, le cycle de admin
	var nouveau_data = {
		"Cycle" : a_stocker["Cycle"],
		"Classe" : '(Tous|' + a_stocker["Cycle"] + ')'
	}
	url = racine_data + "Administration?Identifiant=eq.admin&"+ apikey
	//console.log(url)
	patch_resultat_asynchrone(url,nouveau_data)






	chargement(true)





	//créer la classe
	nouvelle_classe = {
		"Classe" : a_stocker["Classe"],
		"Cycle" : a_stocker["Cycle"],
		"cycle" : a_stocker["Cycle"]
	}
	try{
		creer_formulaire_ajout_donnee_html("Classes", recuperer_entetes_params("Classes"), false, nouvelle_classe)
		$("#mini_popup")[0].style.display = 'none'
		ajouter_donnees_saisies("Classes", true)

	}catch(error){
		console.error(error)
		alert(error)
	}





	chargement(true)





	//créer la matière
	nouvelle_matiere = {
		"Classe" : a_stocker["Classe"],
		"Cycle" : a_stocker["Cycle"],
		"cycle" : a_stocker["Cycle"],
		"Matiere" : a_stocker["Matiere"],
		"coefficient_matiere" : a_stocker["coefficient_matiere"],
		"Couleur_matiere" : "noir",
		"commun_au_cycle" : "non"
	}
	try{
		creer_formulaire_ajout_donnee_html("Matieres", recuperer_entetes_params("Matieres"), false, nouvelle_matiere)
		$("#mini_popup")[0].style.display = 'none'
		ajouter_donnees_saisies("Matieres", true)

	}catch(error){
		console.error(error)
		alert(error)
	}








	chargement(true)








	//créer le prof avec un mdp random (123456)
	nouveau_prof = {
		"Nom": a_stocker["Nom_prof"],
		"Prénom(s)": a_stocker["Prénoms_prof"],		
		"Identifiant" : a_stocker["Nom_prof"].trim().toLowerCase() + "." + a_stocker["Prénoms_prof"].trim().toLowerCase(),
		"Code": "123456",
		"Cycle": a_stocker["Cycle"],
		"Classe": '(' + a_stocker["Classe"] + '|' + a_stocker["Matiere"] + ')',
		"Nom_complet": a_stocker["Nom_prof"] + ' ' + a_stocker["Prénoms_prof"]

	}
	//console.log(nouveau_prof)
	ajouter_un_element("Profs", nouveau_prof)






	chargement(true)








	//créer l'élève
	nouveau_eleve = {
		"Nom": a_stocker["Nom"],
		"Prénom(s)": a_stocker["Prénom(s)"],		
		"Identifiant" : a_stocker["Nom"].trim().toLowerCase() + "." + a_stocker["Prénom(s)"].trim().toLowerCase(),
		"Code": a_stocker["Code"],
		"Cycle": a_stocker["Cycle"],
		"Classe": a_stocker["Classe"],

	}
	//console.log(nouveau_eleve)
	ajouter_un_element("Eleves", nouveau_eleve)









	chargement(true)



	//récupérer mes données et mes matières
	rechercher("Matieres", "Cycle", a_stocker["Cycle"]).then(e => {stocker("mes_matieres",JSON.stringify(e))})
	rechercher("Administration","Identifiant",recuperer("identifiant_courant")).then(e => {stocker("mes_donnees",JSON.stringify(e[0]))})














		
	//supprimer les variables temporaires
	//effacer('numero_etape')
	//effacer('a_stocker')





	//mettre plateforme_prete à vrai
	//actualiser
	nouveau_data = {"plateforme_prete":true,"date_premier_abonnement":moment().format('DD/MM/YYYY')}
	patch_resultat_asynchrone(racine_initiale + "Etablissements?nom_etablissement=eq."+nom_etablissement+ "&"+api_initial,nouveau_data).then(function(data){
		console.log(data)

		// on affiche l'alerte
		var msg_alerte = element_DOM("snackbar");
		msg_alerte.innerText = "Votre plateforme est prête.";
		msg_alerte.className = "show";
		
		//dans 3 secondes, on masque l'alerte
		setTimeout(function(){
			msg_alerte.className = "";
			window.location.href = window.location.href
		}, 3000);




	})











}

function enregistrer_la_saisie(){

	if(numero_etape > 0){
		tout_est_ok = $("#contenu_etape :input")[0] ? $("#contenu_etape :input")[0].value.trim() !== "" : true
		if(tout_est_ok && $("#contenu_etape :input")[0]){


			for (i = 0 ; i<$("#contenu_etape :input").length;i++){					
				id = $("#contenu_etape :input")[i].id
				a_stocker[id] = $("#contenu_etape :input")[i].value.trim()
			}



			stocker("a_stocker",JSON.stringify(a_stocker))			
			stocker("numero_etape",numero_etape)




		}
	}else{
		tout_est_ok = true
	}
	return tout_est_ok
}

function progression_initialisation(){
	reinit_init = numero_etape > 0 ? '<img id="reset_param" onclick="reinitialiser_init()" alt="Recommencer" src="https://sekooly.github.io/SUPABASE/images/img_reset.png" class="icone_param">' : ''
	return 'Bienvenue sur Sekooly <i><progress style="width: 60px;" value="'+numero_etape+'" max="'+nb_etapes+'"></progress>'+numero_etape+'/'+nb_etapes +'</i>' + reinit_init
}


function changer_contenu_etape(nouveau_texte){
	$("#contenu_etape")[0].innerHTML = nouveau_texte
}

function changer_texte_bouton(nouveau_texte){
	$("#bouton_suivant")[0].innerText = nouveau_texte
}

function reinitialiser_init(){
	confirmation = confirm("Êtes-vous sûr de réinitialiser toutes vos saisies et de revenir à l'étape 0 ?")
	if(confirmation){

		effacer('numero_etape')
		effacer('a_stocker')
		window.location.href = window.location.href
	}
}













































/**************************************** textes riches *****************************************/
function rendre_riche(id_text_area ){
	ClassicEditor
		.create( document.querySelector( '[id="'+id_text_area+'"]' )   , config_editor() )
        .then( editor => {
            //console.log( editor )
        } )
	    .catch( error => {
	        console.error( error );
	    });
}


function recuperer_html_saisie_riche(){
	return $(".ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred")[0].innerHTML
}











































/********************************************* SIDE BAR *********************************************/
function switch_side_bar(){
	ouvert = $(".sidebar.left")[0].isOpen
	if(ouvert){
		fermer_side_bar()
	}else{
		ouvrir_side_bar()
	}
}


function switch_side_bar_top(){
	ouvert = $(".sidebar.top")[0].isOpen
	if(ouvert){
		fermer_side_bar()
	}else{
		ouvrir_side_bar_top()
	}
}

function ouvrir_side_bar(){
	$(".sidebar.left")[0].style.display = "block"
	$(".sidebar.left")[0].isOpen = true;
	$('.sidebar.left').sidebar({side: "left"}).trigger('sidebar:open');
}

function ouvrir_side_bar_top(){
	$(".sidebar.top")[0].style.display = "block"
	$(".sidebar.top")[0].isOpen = true;
	$('.sidebar.top').sidebar({side: "top"}).trigger('sidebar:open');

}

function fermer_side_bar(){
	/*gauche*/
	$(".sidebar.left")[0].style.display = "none"
	$(".sidebar.left")[0].isOpen = false;
	$('.sidebar.left').sidebar({side: "left"}).trigger('sidebar:close');

	/*droite*/	
	$(".sidebar.top")[0].style.display = "none"
	$(".sidebar.top")[0].isOpen = false;
	$('.sidebar.top').sidebar({side: "top"}).trigger('sidebar:close');
}



function en_cours(){

	alert("Cette fonctionnalité est en cours de mise en place, merci de votre patience.")

}


function edt(){
	mon_type = recuperer('mon_type')
	//si eleves -> direct ok
	if(mon_type === 'Eleves'){
		recuperer_edt()

	//si prof/admin
	}else{

		//dossier chargé ou mode bis -> ok
		if(recuperer("dossier_chargé") || mon_type.includes('bis')){
			recuperer_edt()
		
		//sinon -> choisir la classe à consulter
		}else{
			choix_classe_edt()
		}
		
	}
}

function choix_classe_edt(){
	les_matieres = JSON.parse(recuperer("mes_matieres"))
	les_classes = valeursUniquesDeCetteKey(les_matieres,'Classe')
	les_classes.sort()
	//console.log(les_classes) 

	elements_html = "Classe:<select id='classe_edt'>"
	for (i = 0; i< les_classes.length;i++){
		elements_html += '<option value="'+les_classes[i]+'">'+les_classes[i]+'</option>'
	}
	elements_html += "</select>"
	
	creer_mini_popup("Choisissez la classe à consulter",elements_html, "Voir l'emploi du temps","voir_edt_classe_choisie()")

}


function voir_edt_classe_choisie(){
	recuperer_edt($("#classe_edt")[0].value)
	$("#mini_popup")[0].style.zIndex = 2

}





/********************************** MA JOURNEE (se baser sur les notifs sans limites) **********************************/

function ma_journee(){
	//en_cours()
	vider_fenetre("Ma journée")

	//sections
	//pas de Fichiers si non Eleves
	var je_suis_eleve = recuperer("mon_type") === "Eleves"
	var sections_a_ajouter = je_suis_eleve ? section_journee("Fichiers") : ""
	var sections_a_ajouter = section_journee("Fichiers","Les fichiers affichés ont pour <b>date d'effet</b> (donc de consultation) la date de la journée choisie.") // A COMMENTER TODO
	sections_a_ajouter += section_journee("Devoirs","Les devoirs affichés ont pour <b>date limite de rendu</b> la date de la journée choisie.")
	sections_a_ajouter += section_journee("Discussions","Les discussions affichées ont pour <b>date de publication</b> la date de la journée choisie.")

	var menu_journee_html = '<div id="menu_journee_haut" style="text-align: center;" class="menu_haut">Date de la journée: <input type="date" id="date_journee" class="date_effet_fichier"></div><div class="section_journee">'+sections_a_ajouter+'</div>'
	$("#menu_journee_haut").remove();
	$(".section_journee").remove();



	$("#fenetre").append(menu_journee_html);

	// à l'actualisation de la date journée
	$("#date_journee").on('change', maj_date_journee)

	//par défaut: aujourd'hui
	$("#date_journee")[0].value = moment().format('YYYY-MM-DD')
	maj_date_journee()
	
	

	afficher_fenetre(true)
}


function section_journee(nom_section, remarque_section){
	return '<div id="section_'+nom_section+'" class="titre_section_journee bloc_topic"><span style="font-size: x-large;padding: 5px;">'+nom_section+'<div style="color: gray;font-size: 15px;background: white;font-style: italic;">'+remarque_section+'</div></span></div>'
}

function maj_date_journee(){

	//console.log("maj_date_journee")
	// si vide alors on met la date actuelle
	if($("#date_journee")[0].value === "") $("#date_journee")[0].value = moment().format("YYYY-MM-DD")

	chargement(true)
	
	
	$('.alerte_section_journee').remove()
	$('.contenu_section_journee').remove()


	
	/************************************* fichiers HORS devoirs ******************************************/
	mes_matieres = JSON.parse(recuperer("mes_matieres"))
	
	//prof ou eleve
	if(!recuperer('mon_type').includes('Admin')){
		les_id_dossier_classe = '("'+mes_matieres.map(e => e['ID_URL']).join('","') + '")'
		url = racine_data + 'Fichiers?' +apikey 
		url += '&categorie_fichier=neq.Devoirs'
		url += '&categorie_fichier=neq.Examens'
		url += '&date_effet=eq.' + $("#date_journee")[0].value 
		url += '&id_dossier=in.' + les_id_dossier_classe
	
	//admin
	}else{
		url = racine_data + 'Fichiers?' +apikey 
		url += '&categorie_fichier=neq.Devoirs'
		url += '&categorie_fichier=neq.Examens'
		url += '&date_effet=eq.' + $("#date_journee")[0].value 
	}




	url += '&order=date_effet.asc,heure_effet.asc,id_dossier.asc'

	//console.log(les_id_dossier_classe)
	//console.log(url)
	resultats = get_resultat(url)
	//console.log(resultats)
	//console.log(mes_matieres)
	traiter_section(mes_matieres,"Fichiers",resultats,"date_effet","heure_effet","id_dossier","nom_fichier","id_fichier","fichier")




	//todo
	/************************************* fichiers de devoirs ******************************************/
	//prof ou eleve
	if(!recuperer('mon_type').includes('Admin')){
		les_id_dossier_classe = '("'+mes_matieres.map(e => e['ID_URL']).join('","') + '")'
		url = racine_data + 'Fichiers?' +apikey 
		url += '&categorie_fichier=in.("Devoirs","Examens")'
		url += '&la_date_limite=eq.' + $("#date_journee")[0].value 
		url += '&id_dossier=in.' + les_id_dossier_classe
	
	//admin
	}else{
		url = racine_data + 'Fichiers?' +apikey 
		url += '&categorie_fichier=in.("Devoirs","Examens")'
		url += '&la_date_limite=eq.' + $("#date_journee")[0].value 
	}
	url += '&order=la_date_limite.asc,lheure_limite.asc,id_dossier.asc'
	//console.log(url)
	resultats = get_resultat(url)
	//console.log(resultats)
	traiter_section(mes_matieres,"Devoirs",resultats,"la_date_limite","lheure_limite","id_dossier","nom_fichier","id_fichier","devoir",true)


	/************************************* discussions ******************************************/
	
	if(!recuperer('mon_type').includes('Admin')){
		url = racine_data + 'Topic?' +apikey 
		url += '&Horodateur=like.' + $("#date_journee")[0].value  +'*'
		url += '&Id_classe_matiere=in.' + les_id_dossier_classe
		//console.log(url)
	}else{
		url = racine_data + 'Topic?' +apikey 
		url += '&Horodateur=like.' + $("#date_journee")[0].value  +'*'
		//console.log(url)

	}
	url += '&order=Horodateur.asc'
	//console.log(url)
	resultats = get_resultat(url)
	//console.log(resultats)
	traiter_section(mes_matieres,"Discussions",resultats,"Horodateur","Horodateur","Id_classe_matiere","Titre","Id_topic","discussion",false,true)


	chargement(false)
	
}

function traiter_section(mes_matieres,nom_section,resultats,nom_champ_date_reference,nom_champ_heure_reference,nom_champ_id_classe_matiere,intitulé_nom_fichier,nom_champ_id_voir,type_notif,est_devoir,date_heure_ensemble){
	//console.log(date_heure_ensemble)
	if(resultats.length ===0){
		$("#section_"+nom_section).append(aucun_element_section())
	}else{

		$("#section_"+nom_section).innerHTML = ""


		//si admin -> ne pas garder les classes-matières méconuues
		//console.log(resultats)
		//console.log(JSON.stringify(mes_matieres))
		if(recuperer('mon_type').includes("Admin")){
			resultats = resultats.filter(e => JSON.stringify(mes_matieres).includes(e[nom_champ_id_classe_matiere]))
		}
		//console.log(resultats)

		for (var numero_fichier = 0; numero_fichier < resultats.length; numero_fichier++) {

			id_classe_matiere = resultats[numero_fichier][nom_champ_id_classe_matiere]
			if(id_classe_matiere !== "pp"){//on zappe les fichiers pp


				nom_classe = mes_matieres.filter(e => e['ID_URL'] === id_classe_matiere)[0]['Classe']
				nom_matiere = mes_matieres.filter(e => e['ID_URL'] === id_classe_matiere)[0]['Matiere']
				nom_fichier = resultats[numero_fichier][intitulé_nom_fichier]

				//si c'est un non eleve -> on ajoute nom_classe
				if(!recuperer('mon_type').includes('Eleves')) nom_matiere = nom_classe + ' - ' + nom_matiere

				//console.log(nom_champ_date_reference)
				date_reference =  resultats[numero_fichier][nom_champ_date_reference]
				
				//console.log(nom_champ_heure_reference)
				heure_reference =  resultats[numero_fichier][nom_champ_heure_reference]
				

				//console.log(date_reference)
				//console.log(heure_reference)

				if(date_reference===heure_reference && date_reference.length > 0 ){
					if(!date_heure_ensemble){
						date_reference = date_reference.split(" ")[0]
						heure_reference = heure_reference.split(" ")[1].split(".")[0]
					}
				}

				champ_id = resultats[numero_fichier][nom_champ_id_voir]

				if(est_devoir){
					deja_rendu = false
					deja_corrigé = false
					
					//pour les élèves : regarder si on a des rendus à mon nom
					if(recuperer('mon_type') === 'Eleves'){
						url = racine_data + 'Rendus?proprietaire=eq.' +recuperer('identifiant_courant').toLowerCase() 
						url += '&id_fichier_sujetdevoir=eq.' + champ_id
						url += '&' + apikey
						//console.log(url)
						deja_rendu = get_resultat(url).length > 0

					//pour les profs/admin : regarder si on a des rendus -> si oui, mettre une coche SSI tout est corrigé
					}else if(recuperer('mon_type') === 'Profs' || recuperer('mon_type').includes('Admin')){
						url = racine_data + 'Rendus?id_fichier_sujetdevoir=eq.' + champ_id
						url += '&' + apikey
						//console.log(url)
						rendus_recus = get_resultat(url)
						nb_corrigés = rendus_recus.filter(e => e['remarque'] !== "").length
						deja_corrigé = rendus_recus.length > 0 ? '<progress style="width: 60px;" value="'+nb_corrigés+'" max="'+rendus_recus.length+'"></progress> <b><rouge>' + nb_corrigés + "/"+rendus_recus.length + '</rouge></b>' : false
						//console.log(deja_corrigé)
					}

					dejà_traité = deja_rendu || deja_corrigé

				}else{
					dejà_traité = false
				}

				element_journee = creer_element_journee(nom_matiere,nom_fichier,date_reference,heure_reference,champ_id,id_classe_matiere,type_notif,dejà_traité,est_devoir,date_heure_ensemble)
				$("#section_"+nom_section).append(element_journee)

			}
		}
	}

	//console.log('\n\n')

	//sort la section via le premier mot inner text
	ordonner_elements(".contenu_section_journee",'innerText')

}


function creer_element_journee(nom_matiere,nom_fichier,date_reference,heure_reference,champ_id,id_classe_matiere,type_notif,dejà_traité,est_devoir, date_heure_ensemble){
	/*
	console.log(champ_id)
	console.log(id_classe_matiere)
	console.log(type_notif)
	*/

	if(heure_reference.length !== 0) heure_reference = ' à ' +heure_reference

	//si prof/admin -> pourcentage de correction
	//sinon -> coche
	if(recuperer("mon_type").includes('Eleves')){
		coche_traitement = dejà_traité ? '✅<i style="color: green;">Rendu</i>' : est_devoir ? '❌<i><rouge>Pas encore rendu</rouge></i>': ""
	}else{
		coche_traitement = dejà_traité ? dejà_traité : ""
	}


	affichage_date = date_heure_ensemble ? afficher_date(date_reference) : afficher_date(date_reference,true) + heure_reference
	return '<div class="contenu_section_journee"><b class="nom_matiere_journee">'+nom_matiere+"</b> "+nom_fichier+'<i style="color: #bfbfbf;"> '+affichage_date+' </i><span class="mini-image deja_traite">'+coche_traitement+'</span> <img id="'+champ_id+'" src="https://sekooly.github.io/SUPABASE/images/img_previz.png" alt="voir" onclick="clic_de_notif(\''+type_notif+'\',\''+champ_id+'\',\''+id_classe_matiere+'\');" class="mini-image"></div>'
}


function aucun_element_section(){
	return '<div class="alerte_section_journee">Aucun élément n\'a été trouvé pour la date choisie.</div>'
}



function mettre_les_soons(){
	if($("#soon").length === 0){

		for ( i = 0 ; i <$("[soon]").length;i++){
			//console.log($("[soon]")[i])
			$(".sidebar.left>div[soon]")[i].innerHTML += soon()
		}

	}
}



function soon(){
	return '<rouge id="soon">BIENTÔT</rouge>'
}






	



function tableau_de_bord(){
	//en_cours()
	var aujourdhui = maintenant()
	vider_fenetre('<span id="titre-tdb">Tableau de bord - ' + afficher_date(aujourdhui) + '</span>' + bouton_actualiser("tdb_tout_actualiser()",20))
	$("#fenetre").append('<div id="previsualisation" style="width: 100%;height: 85%;overflow-y:auto;text-align: center;"></div>');


	var mon_type = recuperer("mon_type")

	elements_tdb =  mon_type === "Eleves" ? ["Présence sur la plateforme", "Devoirs rendus", "Participations", "Fichiers à consulter"] :
					mon_type === "Profs" ? ["Présence sur la plateforme", "Devoirs corrigés", "Participations", "Fichiers en ligne"] :
					mon_type.includes("Admin") ? ["Présence sur la plateforme", "Devoirs rendus et corrigés", "Participations", "Fichiers en ligne"]:
					[]


	//width si mobile -> 
	for (compteur = 1; compteur <= elements_tdb.length; compteur++ ){

		//si non 1 -> avec détails
		bouton_voir_details = compteur !== 1 ? bouton_details(compteur) : ""
		$("#previsualisation").append("<span class='element_tdb'><div class='element_tdb_titre'>"+elements_tdb[compteur-1]+bouton_actualiser(fonction_actualiser_du_tdb(compteur,aujourdhui),15)+bouton_voir_details+"</div><div id='tdb-"+compteur+"' class='graphe_tdb'  style='width:99.9%; height:94%;'></div></span>")
	}


	tdb_tout_actualiser(aujourdhui)
	afficher_fenetre(true)

}

function fonction_actualiser_du_tdb(compteur,aujourdhui){
	resultat = compteur === 1 ? "tdb_recuperer_mes_connexions(false,'"+aujourdhui+"')" :
				compteur === 2 ? "tdb_recuperer_devoirs(false,'"+aujourdhui+"')" :
				compteur === 3 ? "tdb_recuperer_participations(false,'"+aujourdhui+"')" :
				compteur === 4 ? "tdb_recuperer_fichiers_a_consulter(false,'"+aujourdhui+"')" :
				""

	return resultat
				
}

function bouton_details(compteur){
	return '<span style="padding-left: 10px;"><span onclick="details_tdb_'+compteur+'(this)" style="width: 15px; cursor: pointer;" class="voir_tdb">Voir les détails</span></span>'

}


function bouton_actualiser(nom_fonction_actualisation,taille_bouton_px){
	return '<span style="padding-left: 10px;"><img alt="actualiser" src="https://sekooly.github.io/SUPABASE/images/img_actualiser.png" onclick="'+nom_fonction_actualisation+'" style="width: '+taille_bouton_px+'px; cursor: pointer;"></span>'
}

function tdb_tout_actualiser(){
	chargement(true)
	$("#titre-tdb")[0].innerText = 'Tableau de bord - ' + afficher_date(maintenant()) 
	aujourdhui = maintenant()
	//console.log(aujourdhui)
	tdb_recuperer_mes_connexions(true,aujourdhui)
	tdb_recuperer_devoirs(true,aujourdhui)
	tdb_recuperer_participations(true,aujourdhui)
	tdb_recuperer_fichiers_a_consulter(true,aujourdhui)
	chargement(false)
}

function tdb_recuperer_mes_connexions(ne_pas_arreter_chargement,aujourdhui){
	const el = document.getElementById('tdb-1');
	el.innerHTML = ""

	var premier_mot_statut = ["Connexion","Deconnexion","Code","La","Frais"]
	var legende = ["Connexion","Deconnexion","Code erroné","Maintenance","Frais non payés"]
	var series_statuts = []
	var url = racine_data + "Logs?Identifiant=eq." + recuperer("identifiant_courant") + "&" + apikey
	var mes_connexions = get_resultat(url)

	//return tesssst('1')

	//console.log(mes_connexions.length)

	//récupérer les 12 derniers mois en mode intervalles de semaines 
	les_12_mois = les_12_derniers_mois_en_intervalles_semaines(aujourdhui)
	var legende_x = les_12_mois.map(e => 'semaine du ' + e.split(" ")[0])


	//pour chaque statut possible
	premier_mot_statut.forEach(function(valeur_statut,index_statut){
		
		//pour chaque intervalle de semaine
		les_12_mois.forEach(function(valeur,index){

			debut = moment(valeur.split(" ")[0])
			fin = moment(valeur.split(" ")[1])

			//on garder que ce statut (premier mot)
			logs_avec_ce_statut = mes_connexions.filter(e => e['Statut'].split(' ')[0] === valeur_statut && moment(e['Horodateur']).isBetween(debut, fin, 'day', '(]'))
			//on compte le nombre d'horodateur entre les 2 dates avec CE statut
			series_statuts.push({[valeur_statut] : { [valeur]: logs_avec_ce_statut.length }})
				
		})
			
	})


	mes_series_finales = []

	//pour chaque statut possible
	//on crée la série
	premier_mot_statut.forEach(function(valeur_statut,index_statut){
		mes_series_finales.push({
			name: legende[index_statut],
			data: series_statuts.filter(e=>e[valeur_statut]).map(e=>e[valeur_statut]).map(e => Object.values(e)[0]),
			spline: true
		})
	})

	//console.log(mes_series_finales)

	//console.log(mes_series_finales[0]["data"])
	creer_chart(1,mes_series_finales,legende_x,"Evolution des tentatives de connexions")

	return mes_series_finales//series_statuts.filter(e=>e['Connexion']).map(e=>e["Connexion"]).map(e => Object.values(e)[0])

	if(!ne_pas_arreter_chargement) chargement(false)

}






function tdb_recuperer_devoirs(ne_pas_arreter_chargement,aujourdhui){
	document.getElementById('tdb-2').innerHTML = ""

	mes_matieres = JSON.parse(recuperer("mes_matieres"))
	les_id_dossier_classe = '("'+mes_matieres.map(e => e['ID_URL']).join('","') + '")'
		
	//prof ou eleve
	if(!recuperer('mon_type').includes('Admin')){
		url = racine_data + 'Fichiers?' +apikey 
		url += '&categorie_fichier=in.(Devoirs,Examens)'
		url += '&id_dossier=in.' + les_id_dossier_classe
	
	//admin
	}else{
		url = racine_data + 'Fichiers?' +apikey 
		url += '&categorie_fichier=in.(Devoirs,Examens)'
	}

	url += '&order=date_effet.asc,heure_effet.asc,id_dossier.asc'

	//console.log(les_id_dossier_classe)
	//console.log(url)
	mes_devoirs_a_faire = get_resultat(url)
	mes_devoirs_a_faire = mes_devoirs_a_faire.filter(e => les_id_dossier_classe.includes(e["id_dossier"]))
	//console.log(mes_devoirs_a_faire)



	//récupérer tous mes/les rendus si eleve OU admin
	mon_type = recuperer('mon_type')

	le_proprietaire = mon_type.includes('Admin') || mon_type.includes('Prof') ? "" : 'proprietaire=eq.'+recuperer("identifiant_courant")
	le_titre_moyen = mon_type.includes('Admin') || mon_type.includes('Prof') ? "moyen" : ""
	details_rendus =  mon_type.includes('Admin') || mon_type.includes('Prof') ? "" : mes_devoirs_rendus.length+" devoirs rendus sur "+mes_devoirs_a_faire.length

	url = racine_data + 'Rendus?'+le_proprietaire+'&'+apikey  //racine_data + 'Rendus?'+le_proprietaire+'&id_dossier_sujetdevoir=in.'+les_id_dossier_classe+'&'+apikey 
	mes_devoirs_rendus = get_resultat(url)
	mes_devoirs_rendus = mes_devoirs_rendus.filter(function(valeur){
		return les_id_dossier_classe.includes(valeur['id_dossier_sujetdevoir'])
	})
	//console.log(mes_devoirs_rendus)

	var taux_rendu = 0
	//pour les élèves
	if(mon_type.includes('Eleves')){
		taux_rendu = 100*mes_devoirs_rendus.length/mes_devoirs_a_faire.length	

	//pour profs ET admin
	}else{
		//récupérer toutes les classes
		var mes_matieres = JSON.parse(recuperer("mes_matieres"))
		var mes_classes = valeursUniquesDeCetteKey(mes_matieres,"Classe")
		var mon_cycle = JSON.parse(recuperer("mes_donnees"))['Cycle']
		var url = racine_data + "Eleves?Cycle=eq." + mon_cycle + "&"+ apikey
		//console.log(url)
		//récupérer les élèves de toutes les classes du cycle
		tous_les_eleves_de_mon_cycle = get_resultat(url)
		var nb_eleves = tous_les_eleves_de_mon_cycle.length
		nb_total_rendus_attendus = 0


		//pour chaque devoir
		var liste_taux = []
		mes_devoirs_a_faire.forEach(function(le_devoir,index_devoir){

			//chercher la classe correspondante (et non la classe matiere)
			nom_classe_du_devoir = mes_matieres.find(e => e['ID_URL'] === le_devoir['id_dossier'])['Classe']

			//chercher le nombre d'élèves de la classe X
			//console.log(tous_les_eleves_de_mon_cycle)
			nb_eleves = tous_les_eleves_de_mon_cycle.filter(e => e['Classe'] === nom_classe_du_devoir).length

			//chercher le nombre de rendus de ce sujet de devoir Y
			nb_rendus_ce_devoir = mes_devoirs_rendus.filter(e=>e['id_fichier_sujetdevoir'] === le_devoir['id_fichier']).length

			//taux de rendu pour ce devoir = nb_rendus_ce_devoir/nb_eleves
			taux_actuel = 100*nb_rendus_ce_devoir/nb_eleves
			if(!taux_actuel) taux_actuel = 0

			//le nombre de rendus attendus total = nb devoirs de la classe*nb eleves classe
			nb_total_rendus_attendus += nb_eleves

			liste_taux.push(taux_actuel)

			
		})

		//calcul du taux moyen: moyenne(les taux de rendus càd chaqye Y/X)
		taux_rendu = liste_taux.length > 0 ? (liste_taux.reduce((a,b) => a+b) / liste_taux.length) : 0
		//console.log(liste_taux)
		//console.log(taux_rendu)
		//console.log(nb_total_rendus_attendus)

		details_rendus = mes_devoirs_rendus.length + ' rendus sur ' + nb_total_rendus_attendus + ' attendus'
	}
	


	//créer la jauge
	mes_series =[{name:'Taux de rendu',data:[taux_rendu]}]
	creer_chart(2,mes_series,null,"Taux de rendu "+le_titre_moyen+" ("+parseFloat(taux_rendu.toFixed(2))+"%) "+details_rendus)



	if(!ne_pas_arreter_chargement) chargement(false)
}


function details_tdb_2(ceci){

/*
	détails des devoirs à faire VS devoirs rendus
	ordonner par:
		- rendus d'abord
		- horodateurs
*/
	
	//pour chaque devoir à faire
	//si rendu -> on affiche (avec eventuellement les remarques)

	elements_html = ""

	//pour chaque fichier devoir
	mes_devoirs_a_faire.forEach(function(le_devoir,index){

		if(recuperer("mon_type") === "Eleves"){
			dejà_traité = mes_devoirs_rendus.filter(e => e['id_fichier_sujetdevoir'] === le_devoir["id_fichier"]).length > 0
			nom_classe_du_devoir = ""
			titre_mini_popup = "Devoirs à faire"
		}else{
			nb_corrigés = mes_devoirs_rendus.filter(e => e['id_fichier_sujetdevoir'] === le_devoir["id_fichier"] && e['remarque']).length
			nb_rendus = mes_devoirs_rendus.filter(e => e['id_fichier_sujetdevoir'] === le_devoir["id_fichier"]).length
			mes_matieres = JSON.parse(recuperer('mes_matieres'))
			nom_classe_du_devoir = mes_matieres.find(e => e['ID_URL'] === le_devoir['id_dossier'])['Classe'] + " "
			nb_eleves = tous_les_eleves_de_mon_cycle.filter(e => e['Classe'] === nom_classe_du_devoir.trim()).length
			dejà_traité = mes_devoirs_rendus.length > 0 ? '<progress style="width: 60px;" value="'+nb_corrigés+'" max="'+nb_rendus+'"></progress> <b><rouge>' + nb_corrigés + " corrigés sur "+nb_rendus + ' rendus, sur '+nb_eleves +' élèves</rouge></b>' : false
			nom_classe_du_devoir = nom_classe_du_devoir + " "
			titre_mini_popup = "Devoirs à faire et corriger"
		}	

		nom_matiere = nom_classe_du_devoir+ JSON.parse(recuperer("mes_matieres")).filter(e => e['ID_URL'] === le_devoir["id_dossier"])[0]['Matiere']
		elements_html = elements_html + creer_element_journee(nom_matiere,le_devoir["nom_fichier"],le_devoir["la_date_limite"],le_devoir["lheure_limite"],le_devoir["id_fichier"],le_devoir["id_dossier"],"devoir",dejà_traité,true)
		//console.log(elements_html + "\n\n")
	})
	


	creer_mini_popup(titre_mini_popup,elements_html,"    OK    ","$('#mini_popup').remove();",null,null,null,null,25)
	//ordonner_elements(".contenu_section_journee",'innerText')
	$('#mini_popup')[0].style.overflow = "auto"
}








function tdb_recuperer_participations(ne_pas_arreter_chargement,aujourdhui){
	document.getElementById('tdb-3').innerHTML = ""

	//filtrer sur les dicsussions que j'ai créées
	url = racine_data + "Topic?Identifiant=eq." + recuperer('identifiant_courant') + "&" + apikey
	mes_discussions = get_resultat(url)
	//console.log(mes_discussions)

	//filtrer sur les commentaires que j'ai créées
	url = racine_data + "Coms?Identifiant=eq." + recuperer('identifiant_courant') + "&" + apikey
	mes_coms = get_resultat(url)
	//console.log(mes_coms)

	//filtrer sur les clics de visio que j'ai faites
	url = racine_data + "Visio?Statut=eq.debut&Identifiant=eq." + recuperer('identifiant_courant') + "&" + apikey
	mes_visios = get_resultat(url)
	//console.log(les_clics_visio)


	//barcharts sur chaque classes OU matière
	var mon_axe_x = ['Discussions créées', 'Commentaires envoyées', 'Clics sur visioconférence']
	var mes_series = [{name: 'Nombre total',data: [mes_discussions.length, mes_coms.length, mes_visios.length]}]



	//console.log(mes_series[0]["data"])
	creer_chart(3,mes_series,mon_axe_x,"Total des intéractions")

	if(!ne_pas_arreter_chargement) chargement(false)
}

function details_tdb_3(ceci){
	var elements_html = ""
	var mes_matieres = JSON.parse(recuperer("mes_matieres"))



	//mes discussions créées
	elements_html += '<br><br><b><div style="background: #bf8a6a;"> MES DISCUSSIONS </div></b><br>'
	mes_discussions.forEach(function(la_discu,index){
		la_matiere = mes_matieres.find(e => e['ID_URL'] === la_discu['Id_classe_matiere'])
		nom_matiere = la_matiere['Classe'] + " " + la_matiere['Matiere']
		elements_html += creer_element_journee(nom_matiere,la_discu['Votre_message'],la_discu['Horodateur'],la_discu['Horodateur'],la_discu["Id_topic"],la_discu["Id_classe_matiere"],"discussion",false,false, true)
	})


	//mes commentaires
	elements_html += '<br><br><b><div style="background: #bf8a6a;"> MES COMMENTAIRES </div></b><br>'
	//récupérer une bonne fois pour toutes les id classe matiere des id_com
	liste_id_topics = '(' + mes_coms.map(e => e['Id_topic']).join(',') + ')'
	url = racine_data + 'Topic?Id_topic=in.' +liste_id_topics + '&order=Horodateur.asc' + "&" + apikey 
	//console.log(url)
	liste_id_classe_matieres_des_coms = get_resultat(url)
	//console.log(liste_id_classe_matieres_des_coms)
	


	mes_coms.forEach(function(le_com,index){
		//console.log("On cherche le topic " +  le_com['Id_topic'])
		le_topic_source = liste_id_classe_matieres_des_coms.find(e => e['Id_topic'] === le_com['Id_topic'])
		//console.log(le_topic_source)
		id_classe_matiere = le_topic_source['Id_classe_matiere']
		la_matiere =  mes_matieres.find(e => e['ID_URL'] === id_classe_matiere)
		nom_matiere = la_matiere['Classe'] + " " + la_matiere['Matiere']
		elements_html += creer_element_journee(nom_matiere,le_com['Votre_commentaire'],le_com['Horodateur'],le_com['Horodateur'],le_com['Id_topic'],id_classe_matiere,"discussion",false,false, true)	
	})


	creer_mini_popup("Discussions et commentaires",elements_html,"    OK    ","$('#mini_popup').remove();",null,null,null,null,25)
	//ordonner_elements(".contenu_section_journee",'innerText')
	$('#mini_popup')[0].style.overflow = "auto"

}







function tdb_recuperer_fichiers_a_consulter(ne_pas_arreter_chargement,aujourdhui){
	document.getElementById('tdb-4').innerHTML = ""
	var mes_matieres = JSON.parse(recuperer('mes_matieres'));
	var les_id_dossier_classe = '("'+mes_matieres.map(e => e['ID_URL']).join('","') + '")'
	

	//prof ou eleve
	if(!recuperer('mon_type').includes('Admin')){
		url = racine_data + 'Fichiers?' +apikey 
		url += '&id_dossier=in.' + les_id_dossier_classe
	
	//admin
	}else{
		url = racine_data + 'Fichiers?' +apikey 
	}

	url += '&order=date_effet.asc,heure_effet.asc,id_dossier.asc'

	//console.log(les_id_dossier_classe)
	//console.log(url)
	mes_fichiers = get_resultat(url)
	mes_fichiers = mes_fichiers.filter(e => les_id_dossier_classe.includes(e["id_dossier"]))

	//console.log(mes_fichiers)

	//pour chaque categorie de fichier
	mes_series = []
	categories_de_fichiers = valeursUniquesDeCetteKey(mes_fichiers,"categorie_fichier")
	categories_de_fichiers.forEach(function(categorie_fichier,index_fichier){
		part_de_la_categ = (mes_fichiers.filter(e => e['categorie_fichier'] === categorie_fichier).length) / mes_fichiers.length
		mes_series.push({name: categorie_fichier, data: part_de_la_categ})
	})
	
	creer_chart(4,mes_series,null,"Part des catégories sur "+mes_fichiers.length+" fichiers")

	if(!ne_pas_arreter_chargement) chargement(false)
}

function details_tdb_4(ceci){

	var elements_html = ""
	var mes_matieres = JSON.parse(recuperer("mes_matieres"))
	var mon_type = recuperer("mon_type")


	//mes fichiers en ligne (à consulter si eleve, à évaluer si prof/admin)
	mes_fichiers.forEach(function(le_fichier,index){


		id_classe_matiere = le_fichier["id_dossier"]
		nom_classe = mon_type === "Eleves" ? "" : mes_matieres.filter(e => e['ID_URL'] === id_classe_matiere)[0]['Classe'] + " "
		nom_matiere = mes_matieres.filter(e => e['ID_URL'] === id_classe_matiere)[0]['Matiere'] +" ("+le_fichier['categorie_fichier']+")"

		elements_html += creer_element_journee(nom_classe + nom_matiere,le_fichier['nom_fichier'],le_fichier['date_effet'],le_fichier['heure_effet'],le_fichier["id_fichier"],id_classe_matiere,"fichier",false,false,false)
	})


	creer_mini_popup("Fichiers en ligne",elements_html,"    OK    ","$('#mini_popup').remove();",null,null,null,null,25)
	//ordonner_elements(".contenu_section_journee",'innerText')
	$('#mini_popup')[0].style.overflow = "auto"
}

















function creer_chart(numero_tdb,mes_series,mon_axe_x,titre_eventuel){
	const el = document.getElementById('tdb-'+numero_tdb);
	
	//console.log(numero_tdb + ": " +mes_series[0]["data"])

	mes_series_finales = mes_series
	//console.log(numero_tdb + ": " +mes_series_finales[0]["data"])

	//console.log(numero_tdb+ ": " +mon_axe_x)

	if(numero_tdb === 1){
		reduction = reduire_serie(mes_series,mon_axe_x)
		//console.log("on va réduire pour " + numero_tdb)
		mon_axe_x = reduction[0]
		mes_series_finales = reduction[1]
	}else{
		mon_axe_x = mon_axe_x
		mes_series_finales = mes_series
	}

	//console.log(numero_tdb+ ": " +mon_axe_x)

	//console.log(numero_tdb + ": " +mes_series_finales[0]["data"])

	const data = {
		categories: mon_axe_x,
		series: mes_series_finales,
	};

	//console.log("*******DATA "+numero_tdb+"******")
	//console.log(data['categories'])

	var options = {
		chart: { width: 'auto', height: 'auto' }
	};

	if(titre_eventuel) options['chart']['title'] = titre_eventuel
	
	//lignes d'évolution
	if(numero_tdb === 1){
		options['xAxis'] = { pointOnColumn: true, title: { text: 'Période' }}
		options['yAxis'] = { title: 'Nombre de tentatives de connexions' }		
		const chart = toastui.Chart.areaChart({ el, data, options });


	//barcharts
	}else if(numero_tdb === 3){
		options['series'] = {
			dataLabels: {
				fontFamily: 'Arial',
				fontSize: 13,
				fontWeight: 500,
            	color: '#FF6C00',
				textBubble: { visible: true, arrow: { visible: true } },
			},
			stack:
			{
				type: 'normal',
			}
		}

		const chart = toastui.Chart.barChart({ el, data, options });


	//CAMEMBERT
	}else if(numero_tdb === 4){
		options['series'] = {
			dataLabels: {
	            visible: true,
	            pieSeriesName: {visible: true}
          }
		}

		const chart = toastui.Chart.pieChart({ el, data, options });

	//jauges
	}else{
		
        options['circularAxis'] = {
          scale: {
            min: 0,
            max: 100,
          },
          title: '%',
        }

		options['series'] = {
			angleRange : {				
				start: 270,
				end: 90	
			}
		}


        options['plot'] = {
          bands: [
            { range: [0, 20], color: '#df5353' },
            { range: [20, 50], color: '#dddf0d' },
            { range: [50, 100], color: '#55bf3b' },
          ]
        }


        options['theme'] = {
          plot: { bands: { barWidth: 50 } },
        }

        //console.log("*******OPTIONS******")
        //console.log(options)
		const chart = toastui.Chart.gaugeChart({ el, data, options })
	}

	return options
    
}


function reduire_serie(mes_series,mon_axe_x){
	mes_series_finales = mes_series


	//créer l'array somme de toutes les séries
	var sum = (r, a) => r.map((b, i) => a[i] + b);
	somme_series = mes_series.map(e => e['data']).reduce(sum)
	//console.log(somme_series)
	//chercher l'index-1 à partir de laquelle on a des données > 0
	var index_debut = somme_series.findIndex(e => e) -1
	//console.log(index_debut)

	//slice pour chaque serie et axe x si index_debut > 0
	if(index_debut){
		mon_axe_x = mon_axe_x.slice(index_debut)
		mes_series.forEach(function(e,index){
			mes_series_finales[index]['data'] = mes_series[index]['data'].slice(index_debut)
		})
	}

	return [mon_axe_x, mes_series_finales]

}











































function conseils_de_classe(){
	en_cours()

	
}




function remediations(){
	en_cours()

	
}



function langues(){
	en_cours()

}




function mettre_mon_mode(){
	changer_mode(true)
}


function changer_mode(sans_changer){

	est_deja_mode_nuit = recuperer("mode_nuit_oui") === "oui"
	if(sans_changer) est_deja_mode_nuit = !est_deja_mode_nuit

	texte_final_mode_nuit_oui = est_deja_mode_nuit ? "" : " ✓"
	classe_finale_body = est_deja_mode_nuit ? "" : "dark-mode"
	mode_nuit_oui_final = est_deja_mode_nuit ? "non" : "oui"

	stocker('mode_nuit_oui',mode_nuit_oui_final)
	$("#mode_nuit_oui")[0].innerText = texte_final_mode_nuit_oui
	$("body")[0].className = classe_finale_body

}


//au clic d'un élément du side bar -> le side bar disparait




























/****************************************   CHOISIR UNE PAGE A METTRE EN LIGNE   ***********************************************/
function afficher_choix_extrait_manuel(oui){
	element_DOM('extrait_manuel').style.display = oui ? "" : "none";
}

function les_manuels_de_la_matiere(){
	resultat = ""
	for (i = 0; i < $("#drive_manuels > .span_un_fichier").length ; i++){
		resultat += '<option value="'+ $("#drive_manuels > .span_un_fichier")[i].id +'">'+$("#drive_manuels > .span_un_fichier")[i].innerText+'</option>'
	}
	return resultat
}


function afficher_checkbox(nom_div_checkbox, oui){
	element_DOM(nom_div_checkbox).style.display = oui ? "" : "none";
}





function switch_extrait_manuel(){


	var mode_extrait_manuel = element_DOM('est_extrait_manuel').checked;
	element_DOM('manuel_choisi').value = ""
	element_DOM('manuel_choisi').innerHTML = '<option value="--">--</option>'+ les_manuels_de_la_matiere()
	element_DOM('manuel_choisi').style.display = mode_extrait_manuel ? "" : "none"
	//console.log(mode_extrait_manuel)
	afficher_choix_extrait_manuel(mode_extrait_manuel);
	afficher_checkbox('choix_youtube',!mode_extrait_manuel)
	afficher_choix_fichier(!mode_extrait_manuel);

	if(mode_extrait_manuel){
		$("#manuel_choisi").on('change',function(e){
			
			//console.log(e.target.value)
			e.preventDefault()
			if(e.target.value === "--") return true

			
			//choisir les pages à publier
			numeros_pages_str = prompt("Choisissez les numéros de pages (séparés de virgules et SANS ESPACES):","1,2,3")

			if(!numeros_pages_str){
				e.target.value = "--"
				element_DOM("file").value = "";
				element_DOM("file").style.display = "none"
				return true
			}

			numeros_pages = numeros_pages_str.split(',').map(e => Number(e))
			var url = 'https://www.googleapis.com/drive/v2/files/'+e.target.value+'?key='+google_api_file_access+'&alt=media&source=downloadUrl'
			var extension = $("#manuel_choisi option:selected" ).text().split(".").pop()
			var nom_fichier = $( "#manuel_choisi option:selected" ).text().replace("."+extension, " (page "+ numeros_pages_str + ").png")
			visualiser("","","",nom_fichier,false,false,true)
			$("#entete-fenetre")[0].style.display = "none"
			chargement(true)
			var canvasContainer = document.getElementById('previsualisation')
			canvasContainer.style.float = "left"
			canvasContainer.style.overflow = "scroll"
			canvasContainer.style.textAlign = "center"
			canvasContainer.style.height= "80%"
			canvasContainer.style.maxWidth= "100%"
			
        	render_ces_pages(canvasContainer,url, numeros_pages)

		});





		$("#mettre_fichier_en_ligne").on("click", function (e){

			//check: le tout
			if (!pre_validation("manuel_choisi")){

			//tout est ok
			}else{
				$('#file').change()
			}

			//chargement(false)
		});

	}else{
		$("#mettre_fichier_en_ligne").off("click")
	}

}


function render_ces_pages(canvasContainer,url,numeros_pages){
	canvasContainer.innerHTML = ""
	var ma_tache = pdfjsLib.getDocument(url)
	ma_tache.promise.then(function(pdfDoc){
		//console.log(pdfDoc._pdfInfo.numPages)
	  	numeros_pages.forEach(function(num){
	  		if(num <= pdfDoc._pdfInfo.numPages){
			    pdfDoc.getPage(num).then(function(page){
			    	chargement(true)
			    	renderPage(canvasContainer,page,num).then(function(){
		    			
		    			//dernière page
		    			if(num === numeros_pages[numeros_pages.length-1]){

							$("#choix_pages_pdf").remove()
							//console.log(numeros_pages.toString())
							var boutons_valider_ou_annuler = '<div id="choix_pages_pdf" style="text-align: center;" class=""><rouge>Voici les pages que vous avez choisies. Voulez-vous valider ou annuler?</rouge><button class="mon_bouton" onclick="annuler_mon_choix()">Annuler</button><button class="mon_bouton" onclick="choisir_ces_pages(\''+numeros_pages.toString()+'\')">Valider</button></div>'
							$("#fenetre").append(boutons_valider_ou_annuler)

		    				chargement(false)
		    			}
			    	})
			    });
			}else{
				alert("Page " + num + " introuvable.")
			}
	  	})
	})


	
        	

}

function choisir_ces_pages(numeros_pages_str){
	//console.log(numeros_pages_str)
	numeros_pages = numeros_pages_str.toString().split(',')

	//stocker le div en tant que png
	mes_cnv = $("canvas")
	//console.log(mes_cnv)


	//resultat = verticalCanvases($("[id='"+mes_cnv[0]+"']")[0],$("[id='"+mes_cnv[1]+"']")[0],$("[id='"+mes_cnv[2]+"']")[0])
	resultat = rendre_canvas_vertical(mes_cnv)
	//insérer le fichier dans file et l'afficher



	image_temporaire = resultat
	//renommer le fichier à envoyer
	nom_image_temporaire = $("#titre_fenetre")[0].innerText


	//console.log(resultat)
	//window.open(resultat, '_blank').focus();
	//document.getElementById('file').src = resultat;

	//$("#file")[0].name = $("#titre_fenetre")[0].innerText 

	//element_DOM("file").style.display = ""
	//element_DOM("file").value = resultat;
	
	$("#nom_fichier_extrait")[0].innerText = $("#titre_fenetre")[0].innerText 

	$("#file").change()

	//masquer la visualisation
	quitter_previsualisation()


}

function annuler_mon_choix(){
	$("#manuel_choisi")[0].value = "--"
	quitter_previsualisation()

}


//tout rassembler pour créer le png
function rendre_canvas_vertical(liste_cnv){

	try{
		somme_des_hauteurs = 0
	    liste_des_canvas_avec_position = []

		for(i=0;i<liste_cnv.length;i++){
			somme_des_hauteurs += liste_cnv[i].height
	    	valeur_y = i === 0 ? 0 : (liste_cnv[i-1].height)*i
			liste_des_canvas_avec_position.push({cnv: liste_cnv[i], y:valeur_y})
		}
		//console.log(liste_des_canvas_avec_position)

		var newCanvas = document.createElement('canvas'),
	        ctx = newCanvas.getContext('2d'),
	        width = liste_cnv[0].width,
	        height = somme_des_hauteurs;

	    newCanvas.width = width;
	    newCanvas.height = height;


		liste_des_canvas_avec_position.forEach(function(n) {
	        ctx.beginPath();
	        ctx.drawImage(n.cnv, 0, n.y, width, n.cnv.height);
	    });

	    return newCanvas.toDataURL();
	}catch(e){
		alert("Impossible de choisir les pages.")
		return false
	}
}


//même longeur de canva
function verticalCanvases(cnv1, cnv2, cnv3) {
    var newCanvas = document.createElement('canvas'),
        ctx = newCanvas.getContext('2d'),
        width = cnv1.width,
        height = cnv1.height + cnv2.height + cnv3.height;

    newCanvas.width = width;
    newCanvas.height = height;

    [{
        cnv: cnv1,
        y: 0
    },
    {
        cnv: cnv2,
        y: cnv1.height
    },
    {
        cnv: cnv3,
        y: cnv1.height + cnv2.height
    }].forEach(function(n) {
        ctx.beginPath();
        ctx.drawImage(n.cnv, 0, n.y, width, n.cnv.height);
    });

    return newCanvas.toDataURL();
};













async function renderPage(canvasContainer,page,num) {

  var scale = 1.25;
  var viewport = page.getViewport({ scale: scale, });

  //var canvas = document.getElementById('vizcanva');
  var canvas = document.createElement('canvas');
  canvas.id = $("#titre_fenetre")[0].innerText + "-"+num
  canvasContainer.appendChild(canvas);

  var context = canvas.getContext('2d');
  canvas.height = viewport.height;
  canvas.width = viewport.width;1

  var renderContext = {
    canvasContext: context,
    viewport: viewport
  };

  return page.render(renderContext)
  //canva_scrollable(canvas.id)
  
}


function renderPDF(url, options) {

  var options = options || { scale: 1 };       
  pdfjsLib.disableWorker = true;
  var ma_tache = pdfjsLib.getDocument(url)
  ma_tache.promise.then(renderPages);

}   



function canva_scrollable(id_canva){
	var canvas = document.getElementById(id_canva);
	var context = canvas.getContext('2d');
	var dragging = false;
	var lastX;
	var marginLeft = 0;

	for (var i = 0; i < 1000; i++) {
	    context.beginPath();
	    context.arc(Math.random() * 10000, Math.random() * 250, 20.0, 0, 2 * Math.PI, false);
	    context.stroke();
	} 

	canvas.addEventListener('mousedown', function(e) {
	    var evt = e || event;
	    dragging = true;
	    lastX = evt.clientX;
	    e.preventDefault();
	}, false);

	window.addEventListener('mousemove', function(e) {
	    var evt = e || event;
	    if (dragging) {
	        var delta = evt.clientX - lastX;
	        lastX = evt.clientX;
	        marginLeft += delta;
	        canvas.style.marginLeft = marginLeft + "px";
	    }
	    e.preventDefault();
	}, false);

	window.addEventListener('mouseup', function() {
	    dragging = false;
	}, false);
}








































let deferredPrompt;
const addBtn = document.querySelector('.add-button');


/*********************** PWA ***************************/
window.addEventListener('beforeinstallprompt', (e) => {
	
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	addBtn.style.display = 'block';

	addBtn.addEventListener('click', (e) => {
		// hide our user interface that shows our A2HS button
		addBtn.style.display = 'none';
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === 'accepted') {
			console.log('Accepté.');
		} else {
			console.log('Refusé.');
		}
		deferredPrompt = null;
		});
	});
});












/******************** SERVICE WORKER *******************/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../sw.js').then(function(registration) {
      // Registration was successful
      //console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}















/******************** PHOTO DE PROFIL *************************/
function lien_pp(id_pp){
	return id_pp ? "https://drive.google.com/uc?export=download&id=" + id_pp : "https://sekooly.com/assets/images/default-user.svg"
}



















