
function testtt(){
	
	setTimeout(function(){
		/*
		choix_classe_fiche()
		$('#la_periode_bulletin').val(2)
		$('#la_classe_fiche').val('TGA')
		$('#la_classe_fiche').change()
		*/

		
		choix_classe_bulletin() 
		$('#classe_saisie_bulletin').val('TGA') 
		voir_bulletin_classe_choisie() 
		//$('.un_menu').val('(TGA|Spécialité - Mathématiques)') //avec notes EXAM et appréciations
		//$('.un_menu').val('(TGA|Éducation Physique et Sportive)') //avec notes tout et appréciations
		$('.un_menu').val('(TGA|Épreuve Anticipée Français Oral)') //que exam
		$('.un_menu').click()
		$('#periode_bulletin').val('2') 
		$('#periode_bulletin').change()
		$('#saison_note').val('Toutes')
		$('#saison_note').change()
		



	},200)
}

var nom_eleve_test = '' //'andrianantenaina.nehemia' //'andrianaivonarivo.harena'
if(nom_eleve_test!==''){		
	setTimeout(function(){
		testtt()	
	}, 500)
}


var elements_generiques_en_haut = [{"Général": [
										  "Alerte",
										  "Espace etablissement restant",
										  "Infos établissement",
										  "Maintenance",
										  "Réinitialiser la plateforme",
										  "</> Intégrer Sekooly à mon site",

										]
								
									},

									{"Enseignement":[
										  "Cycles",
										  "Classes",
										  "Matieres"
										]

									},

									{"Utilisateurs":[
										  "Administration",
										  "Profs",
										  "Eleves"
										]

									},
									{"Activités":[
										  "Logs",
										  "Visio",
										  "Fichiers",
										  "Rendus",
										  "Notes",
										  "Appreciations",
										  "Jury",
										  "Topic",
										  "Coms",
										  "Notifs",
										  "Liste_appreciations",
										  "Mentions"
										]								

									},
									{"Quiz": [
										  "Quiz",
										  "Questions",
										  "Reponses"
										]										
									}]

const description_activite = (nom_table_activite) => {
	switch (nom_table_activite) {
		case "Logs":
			return "L'historique des connexions de vos utilisateurs"
		case "Visio":
			return "L'historique des visioconférences qui ont eu lieu sur Sekooly"
		case "Fichiers":
			return "Les fichiers publiés dans toutes les matières : les photos de profil et les manuels sont comptablisés ici mais ne seront PAS supprimés"
		case "Rendus":
			return "Les devoirs/examens rendus par les élèves dans toutes les matières"
		case "Notes":
			return "Les notes saisies par les professeurs pour les bulletins"
		case "Appreciations":
			return "Les appréciations saisies par les professeurs pour les bulletins"
		case "Jury":
			return "L'avis du jury pour les bulletins"
		case "Topic":
			return "Les fils de discussions créés dans les matières"
		case "Coms":
			return "Les commentaires des fils de discussions créés dans les matières"
		case "Notifs":
			return "Les notifications associées aux activités sur la plateforme"
		case "Liste_appreciations":
			return "Les appréciations possibles à assigner dans les bulletins des élèves"
		case "Mentions":
			return "Les conclusions finales possibles en fonction de la moyenne générale de l'élève dans son bulletin"
		default:
			return ""
	}
}									
var elements_menu_haut = elements_generiques_en_haut.map(e => Object.values(e) ).join(',').split(',')

var elements_menu_analyses = ["Analyses des connexions"]

var elements_menu_preferences = ["Images","Couleurs","Formes","Police"]


var img_dynamiques = ["img_background-image.png", "logo-no-background-128x128.png","img_retour.png","default-user.png", "img_reset.png","img_import.png","img_download.png","img_dupliquer.png","img_redtrash.png","img_previz.png","img_pleinecran.png", "img_petitecran.png"]
img_dynamiques = img_dynamiques.concat(liste_img_extensions())

var parametres_automatiques = ["Classe_bis","Classe_Matiere", "ID_URL","URL","URL_Mapping","URL_agenda",
								"id_googlecalendar","nb_avis_donnés", "nb_avis_max","nom_fiche","taux_conseil",
								"classe_id", "classe_bis", "type", "Derniere_consultation_notifs",
								"id_formulaire_remediation", "id_fiche", "URL_Mapping","niveau",
								"classe_bis", "id_dossier_cycle", "dossier_rendus_cycle", "liste_notifs_lues", "nombre_avis", "Numero_telephone",
								"id", "Id_classe_matiere", "id_notif", "Id_source", "id_fichier", "id_dossier", "id_devoir", "id_dossier_sujetdevoir", "id_fichier_sujetdevoir", "Id_topic", "id_com", "ID_FICHIER", "id_msg","id_conv", "id_chapitre",
								"id_quiz", "id_question", "id_reponse","id_classe_matiere", "resultat_immediat", "nb_tentatives", "questions_aleatoires", "position_question",
								"1er_Prénom", "LV1","LV2","LV3","Option_1","Option_2","Spécialité","Numeros_telephone_original",
								"created_at","id_etablissement",
								"nom_etablissement"
								
							]

var parametres_facultatifs = ['description','nom_liste_et_coefs', 'position','droit_apercu_bulletin', 'sexe', 'ancien_ou_nouveau']


var elements_menu_haut_avec_modifs = ["Classes","Matieres","Eleves","Profs","Administration","Liste_appreciations","Mentions"]
var elements_menu_haut_avec_reset = ["Eleves","Profs","Administration"]

var elements_menu_haut_generiques = ['Liste_appreciations','Mentions']

nom_etablissement = data_etablissement['nom_etablissement']


var champs_avec_listes_dynamiques = ['Classe','classe_bis','Classe_principale','Cycle','cycle','Matiere']
var champs_oui_ou_non = ['Est_délégué','Reponse_sondage','Ecolage_OK','Droits_modifs', 'Droit_acces_anticipe_examen','Droit_changer_ecolage','commun_au_cycle','droit_hors_maintenance','Est_délégué','droit_apercu_bulletin']
var liste_couleurs = ['blanc','bleu ciel', 'bleu foncé', 'gris','jaune','marron','noir','orange','rose','rouge','vert clair','vert foncé', 'violet']

var identifiants_appreciations = ['admin.tech','admin.tech2','ramiandriray.pierrot','ramiandriray-pierrot']
	
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
var mySubscription_notif = null
var mySubscription_conv = null


var ma_tentative = {}
var mes_reponses = {}

var fenetre_bulletin;
var domaine_bulletin = window.location.href.replaceAll('tele-enseignement',"") + "BULLETINS/index.html"

const { createClient } = supabase
supabase = createClient(racine_data.replace("/rest/v1/",""),  data_etablissement["apikey"])
supabaseInit = createClient(racine_initiale.replace("/rest/v1/",""),  api_initial.split('=')[1])


var liste_matieres_bulletin = []
var liste_datas_bulletin = []
var variables_bulletins_pretes = false




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
		var classe = la_matiere_chargee("Classe") 
		var mon_type = recuperer('mon_type').split("_")[0];
		
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
	//var url = "https://script.google.com/macros/s/AKfycbw4QT4HwGTQR_rgw_ucwjBmUIaeuT_lf3ufHDWu1nQmEHOpIseM/exec?classe="+classe;

	
	var url = racine_data + "Eleves?Classe=eq." + classe + "&" + apikey
	//console.log(url)
	liste_eleves = get_resultat(url)

	//trier par order alphabetique du Identifiant
	liste_eleves = liste_eleves.sort(function(a, b){
	    if(a.Identifiant < b.Identifiant) { return -1; }
	    if(a.Identifiant > b.Identifiant) { return 1; }
	    return 0;
	});


	var id_classe = JSON.parse(recuperer("mes_matieres")).find(e => e['Classe'] === classe)["classe_id"]
	url = racine_data + "Fiches?id_classe=eq."+id_classe+"&" + apikey
	//console.log(url)

	$.ajax({
	    url: url,
	    type: "GET",
		success: function (data) {
			chargement(false);			
			data = data[0]
			//console.log(data);
			afficher_fenetre_conseil_de_classe([[data['id_fiche'],data['nom_fiche']], liste_eleves],titre,classe);

	    },
	    error: function(data){
	    	chargement(false);
			//console.log(data);
			alert('Vérifiez que vous êtes toujours connecté à internet.');
			
	    }
	});

}

function afficher_fenetre_conseil_de_classe(data,titre,classe){
	//data[0]: [id fiche, nom fiche]
	afficher_visualisation_fiche(data[0],titre);

	//data[1]: [eleve1, eleve2, eleve3, ...]
	lister_les_eleves(data[1],classe);


}

function afficher_visualisation_fiche(id_et_nom_fiche,titre){
	//console.log(id_et_nom_fiche);

	if(id_et_nom_fiche){
		visualiser(id_et_nom_fiche[1],id_et_nom_fiche[0], "", titre, recuperer('mon_type').includes('Eleves')); //pas téléchargeable pour les eleves
		$("#previsualisation")[0].style.height = "50%"


	}

}

function lister_les_eleves(liste_eleves,classe){
	var liste_eleves_html = '<div id="liste_eleves" class="liste_eleves_conseil"></div>'
	$("#liste_eleves").remove();
	$("#fenetre").append(liste_eleves_html);
	$("#liste_eleves")[0].scrollTo(0,0);

	//pour chaque élève, dans $("#liste_eleves")
	liste_eleves.forEach(function(valeur,index){

		var identifiant_eleve = valeur['Identifiant'].toUpperCase();

		//on ajoute l'identifiant 
		$("#liste_eleves").append('<b  class="sekooly-mode"  style="margin-bottom: 5px;" id="'+identifiant_eleve+'">' + identifiant_eleve + " </b>")

		var identifiant_eleve_bloc = element_DOM(identifiant_eleve);

		//on ajoute le bouton OEIL de l'élève -> détails via tableau software
		var oeil_tableau_html = '<span><img alt="voir" class="envoi_remarque mini-image" src="'+ prefixe_image + '/img_previz.png" onclick="recuperer_details_plateforme(\''+identifiant_eleve+'\')"></span>';
		var oeil_tableau = document.createElement('div');
		oeil_tableau.innerHTML = oeil_tableau_html;
		while(oeil_tableau.firstChild) identifiant_eleve_bloc.appendChild(oeil_tableau.firstChild);

		//SI NON ELEVE
		//on ajoute le mode edition -> popup contenant:
		//avis favorable ou non (liste déroulante): pas encore d'avis // favorable // non favorable
		//observations sur l'élève -> ajout ou modif ou suppression
		var mon_type = recuperer('mon_type').split("_")[0]
		if(mon_type!=="Eleves"){
			var mode_edition_html = '<span><img alt="remarque" class="envoi_remarque mini-image" src="'+ prefixe_image + '/img_remarque.png" onclick="emettre_avis(\''+identifiant_eleve+'\',\''+classe+'\')"></span>';
			var mode_edition = document.createElement('div');
			mode_edition.innerHTML = mode_edition_html;
			while(mode_edition.firstChild) identifiant_eleve_bloc.appendChild(mode_edition.firstChild);
		}
		
		//on ajoute le bouton détails de l'élève -> visualiser tous les avis sur l'élève SI ILS EXISTENT
		if (valeur['nombre_avis']>0){
			var details_html = '<span><img alt="autres avis" class="envoi_remarque mini-image" src="'+ prefixe_image + '/img_details.png" onclick="recuperer_autres_avis(\''+identifiant_eleve+'\')"></span>';
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

function dupliquer_visualisation(titre_fenetre_dupliquee){
	var fenetre_bis_html = '<div class="ma_fenetre" id="fenetre_bis" style="visibility: visible; opacity:95%; top: 0px; left: 0px; width: 99%; height: 99%;"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="'+ prefixe_image + '/quitter.png" id="bye_prev_bis" onclick="quitter_previsualisation_bis()" style="width: 30px; height: 30px; cursor: pointer; position: fixed; z-index: 3; top: 0px; left: 673px;"></div><div class="titre_fenetre" id="titre_fenetre_bis">' + titre_fenetre_dupliquee + '</div><div class="fullscreen-btn" id="conteneur_plein_ecran_bis"> <img alt="plein écran" style="position: fixed;" id="pleinecran_bis" src="'+ prefixe_image + '/img_petitecran.png" onclick="switch_mode_bis()" class="pleinecran"> </div></div>';

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





function emettre_avis(identifiant_eleve, classe){
	//console.log("emettre_avis: " + identifiant_eleve);

	var pop_up_html  = '<div class="mini_popup" id="mini_popup"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X"  src="'+ prefixe_image + '/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div><div>Vos observations sur <b>'+identifiant_eleve+'</b>:</div><textarea id="observation" style="width: 80%;resize: none;font-size: 13px;margin-bottom: 5%;"></textarea><div style="">Passage de <b>'+identifiant_eleve+'</b> en classe supérieure:</div><select style="width: 80%;border-color: red;border-style: solid;margin-bottom: 5%;" id="avis_passage" value=""><option value=""></option><option value="Favorable">Favorable</option><option value="Non favorable">Non favorable</option></select><button type="button" class="rendre sekooly-mode-background" onclick="envoyer_avis_conseil(\''+identifiant_eleve+'\',\''+classe+'\')">Envoyer l\'avis</button></div>';

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

function envoyer_avis_conseil(identifiant_eleve, classe){


	var avis_passage = $("#avis_passage")[0].value;
	var observation = $("#observation")[0].value;

	if(avis_passage==="") return -1;


	//console.log("Observation: " + avis_passage);
	//console.log("avis_passage: " + observation);

	var matieres = JSON.parse(recuperer('mes_matieres'));

	//la classe actuellement ouverte OU celle de l'élève
	var mon_type = recuperer('mon_type').split("_")[0]
	if(mon_type.includes("Eleves"))	var classe = JSON.parse(recuperer('mes_donnees'))['Classe'];

	var id_classe_eleve = "";
	var ma_matiere = ""
	matieres.some(function(valeur,index){				  
	    if(valeur['Classe'] === classe){
	        id_classe_eleve = valeur['classe_id']
	        ma_matiere = valeur['Matiere']
	        return -1;
	    }
	});

	//console.log(ma_matiere)

	var identifiant_courant = recuperer('identifiant_courant').toLowerCase().trim();
	identifiant_eleve = identifiant_eleve.toLowerCase().trim();


	nouvel_avis_conseil = {
		Classe: classe,
		id_classe_eleve: id_classe_eleve,
		avis_passage: avis_passage,
		identifiant_remarque: identifiant_courant,
		identifiant_eleve: identifiant_eleve,
		observation: observation,
		matiere: ma_matiere,
		horodateur: maintenant()
	}

	ajouter_un_element("Conseil", nouvel_avis_conseil).then(() => {

		//rajouter un avis dans la table Eleves
		url = racine_data + "Eleves?Identifiant=eq." + identifiant_eleve +"&"+ apikey	
		nb_actuel = get_resultat(url)[0]['nombre_avis']
		nouvelle_donnee_eleve = {
			nombre_avis: nb_actuel+1
		}

		actualiser("Eleves", "Identifiant", identifiant_eleve, nouvelle_donnee_eleve).then(() => {				

			$('#mini_popup').remove()
			recuperer_la_fiche_conseil(classe)
			chargement(false)
		})


	})



}


async function recuperer_autres_avis(identifiant_eleve){
	//console.log("recuperer_autres_avis: " + identifiant_eleve);
	//chargement(true);


	var resultats = await rechercher("Conseil", "identifiant_eleve", identifiant_eleve.toLowerCase(), "")
	//console.log(resultats)


	if(resultats.length > 0) afficher_toutes_les_observations(resultats, identifiant_eleve)


	/*
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
	});*/

}

function afficher_toutes_les_observations(les_observations,identifiant_eleve){

	$("#ensemble_observations").remove();
	var ensemble_observations_html = "<div id='ensemble_observations'></div>";
	var ensemble_observations = document.createElement('div');
	ensemble_observations.innerHTML = ensemble_observations_html;
	element_DOM(identifiant_eleve).appendChild(ensemble_observations.firstChild);

	//console.log(les_observations)

	//dans l'ordre chronologique DECROISSANT
	les_observations = les_observations.sort(function tri_ordre_chrono_decroissant(a, b) {
		return convertir_en_date(a.horodateur) - convertir_en_date(b.horodateur)
	});



	les_observations.forEach(function(valeur,index){
		//console.log(valeur)
		var signe_avis_passage = valeur["avis_passage"] === "Favorable" ? "✅" : "❌"
		var vient_de_moi = valeur['identifiant_remarque'].toUpperCase() === recuperer('identifiant_courant').toUpperCase() ? " (Vous)"
							: valeur['matiere'] ? " ("+valeur['matiere']+")" : "" ;
		une_observation= '<div style="color:black;font-size:10px;padding:5px;">'+signe_avis_passage +'<b class="sekooly-mode">'+valeur['identifiant_remarque'].toUpperCase()+ vient_de_moi+': </b>'+valeur['observation']+'<i class="date_fin"> ' + afficher_date(valeur['horodateur']) + '  </i></div>';	
		$("#ensemble_observations").append(une_observation);
	})
	
}




function recuperer_MA_fiche_conseil(){

	//console.log("je récupère ma fiche");
	var identifiant_eleve = recuperer('identifiant_courant').trim().toUpperCase();


	//créer une mini fenêtre de l'identifiant
	element_DOM('fenetre').style.overflowY = "auto";
	vider_fenetre("Vos résultats");
	$("#fenetre").append('<div style="text-align:center;margin-top: 20px;margin-left: 20px;"><b  class="sekooly-mode"  style="margin-bottom: 5px;" id="'+identifiant_eleve+'">' + identifiant_eleve + " </b></div>")

	//oeil -> tableau
	var identifiant_eleve_bloc = element_DOM(identifiant_eleve);
	var oeil_tableau_html = '<span><img alt="voir"  class="envoi_remarque mini-image" src="'+ prefixe_image + '/img_previz.png" onclick="recuperer_details_plateforme(\''+identifiant_eleve+'\')"></span>';
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
	alerte = alerte + '• Pour un quiz, il suffit d\y répondre en ligne et d\'enregistrer vos réponses. Une fois tout validé, vous ne pourrez plus modifier vos réponses.\n'
	alerte = alerte + '• Vous pouvez rendre uniquement un devoir lorsque l\'enseignant a catégorisé un fichier de "Devoir" ou "Examen".\n'
	alerte = alerte + '• Pour rendre un devoir, choisissez le sujet que l\'enseignant aura mis en ligne.\n'
 	alerte = alerte + "• Pour un même devoir, si vous avez plusieurs images, cliquez sur 'Ajouter une page' et choissisez le fichier IMAGE à rajouter.\n"
 	alerte = alerte + "• Vérifiez bien l'ordre des images car cela sera pris en compte dans l'image finale générée, que pouvez voir en aperçu ci-dessous.\n"
 	alerte = alerte + "• Si vous êtes sur ordinateur, vous pouvez également créer un fichier word et y coller toutes vos images. Les fichiers word (doc / docx) sont également supportés par Sekooly."
 
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
	les_quiz = element_DOM('drive_quiz').childNodes;
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



	//inclure les quiz dans la liste 
	for (var i = 0; i < les_quiz.length; i++) {
		var id_quiz = les_quiz[i]['id'];
		//console.log("\n"+ id_quiz);

		var nom_fichier = $("span#"+id_quiz+".span_un_fichier").contents().filter(function(){ 
		  return this.nodeType == 3; 
		})[0].nodeValue;

		var un_examen_html = '<option value="' + id_quiz + '">' + nom_fichier  + '</option>' 
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
				var heure_debut = $('[id='+e.target.value+"].span_un_fichier")[0].attributes['mon_heure_effet'].value

				//fin = début + 48h
				nb_heures_delai_examen = data_etablissement['nb_heures_delai_examen'] || 12 //12 par défaut
				//console.log(nb_heures_delai_examen)
				var date_fin = moment(date_debut + " " + heure_debut,"yyyy-MM-DD hh:mm").add(nb_heures_delai_examen,'hours')._d;
				//console.log(date_debut)
				//console.log(date_fin)
				
				var examen_terminé = est_examen && (moment(maintenant()) > date_fin)

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
		/*
		console.log({
			id_fichier_sujetdevoir:id_fichier_sujetdevoir,
			proprietaire:proprietaire,
			examen_terminé:examen_terminé,
			date_fin:date_fin

		})
		*/

		rechercher("Rendus",'id_devoir',id_fichier_sujetdevoir+suite_notif(),"").then(snapshot => { 
			chargement(false)

			donnees_initiales = snapshot[0]
			//console.log(donnees_initiales)

			//si on a changé de devoir choisi entre temps -> on ne fait rien
			if($('#devoir_choisi')[0].value !== id_fichier_sujetdevoir) return -1;


			//deja rendu
			if(donnees_initiales!==undefined){

				data = donnees_initiales['nom_fichier']
				extension = data.split('.').pop()

				remarque = donnees_initiales['remarque']

				id_fichier = extension === "quiz" ? donnees_initiales['id_fichier_sujetdevoir'] : donnees_initiales['id_fichier']

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
				var suppression_devoir = examen_terminé ? "" : '<img alt="supprimer"  id="'+ data +'" src="'+ prefixe_image + '/img_trash.png" style="width:15px;height:15px;cursor:pointer;" onclick="supprimer_devoir(this)">'
				var remarque_non_termine = donnees_initiales['date_publication'] === null ? '  <i><gris>non terminé</gris></i>  ' : "" 
				mon_devoir_rendu.innerHTML += '<div id="mon_devoir_rendu"> <div id="'+id_fichier+'">'+ data + '<img class="mini-image" onclick="visualiser(\''+titre+'\',\''+id_fichier+'\')" src="'+ prefixe_image + '/img_previz.png" style="padding-left:1%">'+ suppression_devoir+remarque_non_termine+'</div></div>';


				//afficher le devoir
				$('#rendu_devoir').append(mon_devoir_rendu.innerHTML);



				//récupérer la note si coef > 0
				note_rendu = donnees_initiales['note_rendu']
				//console.log(note_rendu)
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
					//console.log(date_fin)
					alert("Rendre cet examen n'est plus possible depuis le " + moment(date_fin).format("DD/MM/YYYY HH:mm") +".");

				}else{

					//rendre le border rouge
					changer_couleur_devoir("red");

					//enlever le devoir rendu précédent
					supprimer_div_devoir_choisi();
					supprimer_rendus_devoirs_affiches();

					gerer_affichage_quiz_devoir(id_fichier_sujetdevoir)
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
			snapshot = snapshot.filter(e => e['date_publication']) //uniquement ceux publiés
			chargement(false)

			//console.log(snapshot)
			afficher_rendus_devoirs(snapshot);
		})

	}


	$('#recuperer_devoir').remove(); // on enlève le form invisible : TRES UTILE

}

function gerer_affichage_quiz_devoir(id_fichier_sujetdevoir){

	var est_quiz = $('[value="'+id_fichier_sujetdevoir+'"]').text().split('.').pop() === "quiz"
	//si quiz: afficher bouton faire quiz et masquer input upload
	//si NON quiz: afficher le input upload et masquer bouton faire quiz
	if(est_quiz && !element_DOM("mon_devoir_rendu")){
		element_DOM('soumettre_devoir').style.display ="none" ;
		element_DOM('soumettre_quiz').style.display ="block";
	}else{
		element_DOM('soumettre_quiz').style.display ="none";
		element_DOM('soumettre_devoir').style.display ="" ;
	}

}

function nom_du_devoir_choisi(){
	return $('[value="'+element_DOM("devoir_choisi").value+'"]').text()
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


	if (resultats.length === 0) return liste_des_devoirs_rendus.innerHTML = '<i class="date_fin">Pas encore de rendus pour ce devoir/examen/quiz.</i>';

	//dans l'ordre chronologique CROISSANT
	resultats.sort(function tri_ordre_chrono_decroissant(a, b) {
		return new Date(a[0]).getTime() - new Date(b[0]).getTime();
	});


	liste_des_devoirs_rendus.innerHTML = '';
	//console.log(resultats.length)

	var est_quiz = nom_du_devoir_choisi().split(".").pop() === "quiz"
	for (var i = 0; i < resultats.length; i++) {
		//console.log(resultats[i][4] + " par " + resultats[i][5]);
		
		var un_devoir_rendu = document.createElement('div');
		un_devoir_rendu.id = resultats[i]["id_fichier"];
		un_devoir_rendu.style = 'padding: 0.5%;';
		un_devoir_rendu.innerHTML = "Devoir de "
		un_devoir_rendu.innerHTML += '<b  class="sekooly-mode" id="proprietaire'+resultats[i]["id_fichier"]+'">' + resultats[i]["proprietaire"].toUpperCase() + " </b>";

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
		
		un_devoir_rendu.innerHTML += '<img alt="voir"  class="mini-image" src="'+ prefixe_image + '/img_previz.png" onclick="visualiser(\''+ titre + '\',\'' + un_devoir_rendu.id +'\', \'' + nom_proprio_devoir + '\')">';

		un_devoir_rendu.innerHTML += '<img alt="remarque" class="mini-image envoi_remarque" onclick="mettre_remarque_devoir(this,\'' + remarque +'\',' + coefficient_rendu +','+ note_rendu + ');" src="'+ prefixe_image + '/img_remarque.png">';


		un_devoir_rendu.innerHTML += est_quiz ? "" : '<a   id="telechargement" href = "https://drive.google.com/uc?export=download&id=' + un_devoir_rendu.id +'" download="mon_fichier.txt"><img alt="télécharger" class="mini-image" src="'+ prefixe_image + '/img_download.png"></a>';
		
		un_devoir_rendu.innerHTML += '<i class="date_fin">' + afficher_date(resultats[i]["date_publication"]) + '  </i>';

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
	return '<div class="ma_fenetre" id="remarque_et_note" style="visibility: visible;height: 33%;width: 280px;height: 300px;top: 35%;left: 10%;"><b style="text-align: center;"><div id="titre_fenetre" class="">Note et remarque de '+nom_proprio_devoir+' </div></b><span style=""><form id="mon_formulaire" autocomplete="off" class="edition">	<div id="champ_note"><label id="label" for="note_rendu">Note (sur 20)</label><input type="number" min=0 max=20 step=0.125 id="note_rendu" maxlength="2" style="width: 100%;" value="'+note_rendu+'"></div><br><label id="label" for="remarque">Votre remarque</label><textarea id="remarque" maxlength="300" style="width: 100%;resize: none;font-size: 13px;height: 50%;">'+remarque+'</textarea><div id="mes_boutons" style="text-align: center;padding: 1%;display: block ruby;"><button class="bouton_sekooly sekooly-mode-background" type="button" id="Annuler" onclick="$(\'#remarque_et_note\').remove()"> Annuler </button><button  class="bouton_sekooly sekooly-mode-background" type="button" id="envoyer_note">Valider</button></div></form></span></div>'
	//return '<div></div>'
}

function mettre_remarque_devoir(ceci,remarque,coefficient_rendu, note_rendu){

	var remarque_decoodee = remarque.replace(/&quot;/g, "\"");	
	remarque_decoodee = decodeURIComponent(remarque_decoodee);			

	var id_fichier = ceci.parentNode.id;
	var id_prof =recuperer('identifiant_courant');
	var remarque_note_prof= mettre_remarque_et_note(id_fichier,remarque_decoodee,coefficient_rendu,note_rendu) //prompt("Votre remarque pour ce devoir: ",remarque_decoodee);
	


}


async function supprimer_devoir(moi, id_fichier_donné, id_devoir_donné){

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

	stocker("id_devoir",id_devoir)
	chargement(true);

	

    //si c'est un quiz
    if(nom_du_devoir_choisi().split(".").pop() === "quiz"){
    	return await suppression_devoir_sur_db("Votre tentative du quiz a été supprimée.")
    }


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
		success: suppression_devoir_sur_db,
		error: erreur_suppression_devoir

	});
	


	$('#supprimer_devoir').remove(); // on enlève le form invisible : TRES UTILE


}

async function suppression_devoir_sur_db(data){
	
	var id_devoir = recuperer("id_devoir")
	//console.log(id_devoir)

	//on met à jour la BDD: dans Rendus
	await supprimer("Rendus","id_devoir",id_devoir)
	await supprimer("Notifs","id_notif",id_devoir)

	effacer("id_devoir")

	//console.log(data);
	afficher_alerte(data)

	//au bout de 2 secondes
	setTimeout(function(){
		return recuperer_mon_devoir(element_DOM('devoir_choisi').value, recuperer('identifiant_courant'));
		chargement(false);
	}, 2000);


	
}

function supprimer_div_devoir_choisi(){

	//$("#file_devoir")[0].value ="";
	$(".mon_file_devoir").each(function(index,un_fichier_devoir){
		un_fichier_devoir.value = ""
	})


	if(element_DOM('mon_devoir_rendu')) element_DOM('mon_devoir_rendu').remove();
}

function erreur_suppression_devoir(data){
	console.error(data);
	alert('Impossible de supprimer le rendu: vérifiez que vous êtes toujours connecté.');


	chargement(false);
}

function supprimer_rendus_devoirs_affiches(){
	if(element_DOM('liste_des_devoirs_rendus')) element_DOM('liste_des_devoirs_rendus').remove();

	vider_previz_devoir_rendu()
	$(".fichier_supplementaire").remove()

}


function afficher_soumettre_devoir(oui){
	if(oui){
		element_DOM('soumettre_devoir').style.display ="";
	}else{
		element_DOM('soumettre_devoir').style.display ="none";
		element_DOM('soumettre_quiz').style.display ="none";
		
	}
}

function changer_couleur_devoir(couleur){
	element_DOM('devoir_choisi').style.borderColor = couleur;
}

function rendre_devoir(){

	if(impossible_de_cliquer()) return -1;

	var le_devoir_choisi = $("#devoir_choisi")[0].value;
	var le_fichier_choisi = $("#file_devoir")[0].value;

	
	// interdire l'upload si la date est dépassée
	if(le_devoir_choisi !== "--" && le_fichier_choisi!=="") {


		var file = $('#file_devoir')[0].files[0];
        var fr = new FileReader();

        fr.onprogress = function(e){
        	chargement(true);
        }

        chargement(true);

        fr.onload = async function(e) {
        	var lien_script =  await chercher_lien_script(4) // 'https://script.google.com/macros/s/AKfycbyUa45u-TGQmKEWOYf9gz5UofPBAW7FRIpF6RNadQ5RbvT1BWrU/exec';
    
        	var params = {};

        	//si c'est 1 seul et unique devoir -> pas de rassemblement
        	//si plusieurs devoirs -> rassemblement 

        	if( $("#soumettre_devoir > input").length > 1){


	        	img_finale = await telecharger_tout(true)
	        	img_finale = img_finale.replace(/^.*,/, '');
	        	//console.log(img_finale)

	        	if(!img_finale){
	        		chargement(false)
	        		return false
	        	}else{
	        		params.file = img_finale	
	        	}
	        	


        	}else{

        		params.file = e.target.result.replace(/^.*,/, '');
        	}

        	//alert(params.file)
            
            nom_fichier = file.name.replaceAll(',', ' ').replaceAll('-', ' ');

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

    	// sets timeout to 10 minutes ->  600 seconds -> 600 000 ms
    	$.ajax({ type: "POST", timeout: 600000, url: url, data: form.serialize(), // serializes the form's elements.

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
				la_matiere = la_matiere_chargee("Matiere") 
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
    			data = JSON.parse(data)
    			console.error(data);
    			afficher_alerte("Votre fichier est trop lourd à mettre en ligne, merci de réduire leur taille avant de les mettre en ligne.",false)

				
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
	
	visualiser("Tutoriels d'utilisation","https://tuto.sekooly.com",false,"Tutoriels d'utilisation")
	$("#telechargement").remove()
	afficher_fenetre(true)
	

}

function afficher_alerte(contenu,actualiser){
	// on recupere l'alerte
	var msg_alerte = element_DOM("snackbar");

	// on affiche l'alerte
	msg_alerte.innerHTML = contenu;
	//console.log({'alerte': contenu})
	msg_alerte.className = "show";

	//dans 3 secondes, on masque l'alerte (si le contenu est tjr celui initialement mis)
	setTimeout(function(){
		if(msg_alerte.innerHTML === contenu) msg_alerte.className = "";
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

	var boutons = '<span id="les_boutons" style="text-align: center;position: relative;display: block;"><button class="rendre sekooly-mode-background" type="button" id="annuler_modifs" onclick="quitter_previsualisation()"> Annuler </button><button class="rendre sekooly-mode-background" type="button" id="valider_modifs" onclick="switch_edition()">Enregistrer</button></span>';

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
	return '<img id="suppr_pp" onclick="supprimer_pp(\''+identifiant_courant+'\')" class="editer" src="'+ prefixe_image + '/img_trash.png" alt="supprimer">'
}

function bouton_modifier_pp(identifiant_courant){
	identifiant_courant = identifiant_courant ? identifiant_courant : recuperer("identifiant_courant")
	return '<span class="pp-upload"><label for="pp-'+identifiant_courant+'"><img src="'+ prefixe_image + '/img_edit.png" alt="MODIFIER" class="editer"></label><input onchange="changer_pp(\''+identifiant_courant+'\')" accept=".png,.jpeg,.jpg,.bmp,.svg,.gif" id="pp-'+identifiant_courant+'" type="file"/> </span>'
}

function ma_photo(identifiant_optionnel, sans_bouton_modifier){
	chargement(true)
	
	var nom_table = "Fichiers"
	url = racine_data + nom_table
	url += "?proprietaire=eq." + (identifiant_optionnel || recuperer("identifiant_courant"))
	url += "&categorie_fichier=eq.Profil"
	url += "&" + apikey
	//console.log(url)
	id_pp = get_resultat(url)[0]
	if(id_pp) id_pp = id_pp['id_fichier']

	//console.log("identifiant_optionnel: " + identifiant_optionnel)
	//console.log("id_pp: " + id_pp)
	le_lien_pp = lien_pp(id_pp)
	//console.log("le_lien_pp: " + le_lien_pp)


	supprimer_si_pp_existante = id_pp ? (sans_bouton_modifier ? "" : bouton_supprimer_pp()) : ""
	bouton_modifier = sans_bouton_modifier ? "" : bouton_modifier_pp()
	chargement(false)
	return "<img class='pp' id='pp_"+(identifiant_optionnel || recuperer("identifiant_courant"))+"' src=" + le_lien_pp +">" + bouton_modifier + supprimer_si_pp_existante

}

var basic_croppie
var donnees_pp
var extension_pp = ""


async function url_pp(){
	var res = await chercher_lien_script(8)
	return res
}


async function supprimer_pp(identifiant_courant, sans_confirmation){

	if(!sans_confirmation) var confirmation = confirm("⚠️Voulez-vous supprimer cette photo de profil ? Cette action est irréversible.")

	if(confirmation || sans_confirmation){

		chargement(true)

		identifiant_courant = identifiant_courant ? identifiant_courant : recuperer("identifiant_courant")

		//supprimer sur le drive
		var url = await  url_pp()
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
				$("[id='pp_"+identifiant_courant+"']")[0].src = prefixe_image + "/default-user.png";	
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
	creer_mini_popup("","<div id='nouvelle_pp' style='overflow: hidden;width: 300px;height:300px;'></div>","Valider la photo","envoyer_pp('"+identifiant_courant+"')")
	
	//on déclare l'endroit où on fera l'édition
	basic_croppie = $('#nouvelle_pp').croppie({
	    viewport: {
	        width: 200,
	        height: 200,
	        type: 'circle'
	    },
	    boundary: {
	        width: 300,
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

async function envoyer_pp(identifiant_courant){
	chargement(true)
	url = await url_pp()

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
					taille_fichier: $("[id='pp-"+identifiant_courant+"']")[0].files[0].size,
					
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

async function switch_edition(){

	var est_mode_edition = $("#valider_modifs")[0].innerText === "Enregistrer";

	//entrer en mode édition: exiger le code d'accès
	if(!est_mode_edition){
		
		var mes_donnees = await recuperer_mes_donnees()
		var ancien_code = prompt("Indiquez votre code d'accès ACTUEL:");

		if(!ancien_code) return afficher_alerte("Modification du profil annulée.")
		if(!mes_donnees) return afficher_alerte("Vous devez être connecté à internet pour modifier votre profil.")

		//si code ok:
		if(code_ok(mes_donnees,ancien_code)){
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
	var resultat = '<div class="un_detail"><b class="sekooly-mode">'+nom_detail+': </b><br><span id="' + nom_detail.split(" ")[0] +'">'+valeur_detail+'</span></div>';
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

function filtrer_chapitre(){

	//console.log("on filtre par chapitre!")

	//on affiche TOUT LES DRIVES
	afficher_tous_les_fichiers_deja_recup();


	var condition_filtre = element_DOM('filtre_id_chapitre').value;

	$(".span_un_fichier").filter(function(index,valeur){

		//masquer tout ce qui ne respecte pas la condition ID_CHAPITRE
		var le_id_chapitre = $(this)[0].attributes['id_chapitre'].value;
		var id_ok = le_id_chapitre.includes(condition_filtre) ;
		var mode_affichage = id_ok || condition_filtre === "Tous" ? "grid" : "none";

		/*
		console.log("\n\n\n")
		console.log({le_id_chapitre:le_id_chapitre, id_ok:id_ok,mode_affichage:mode_affichage})
		
		console.log(valeur)
		console.log(valeur.style.display)
		*/

		valeur.style.display = mode_affichage

		return valeur.innerHTML.includes(condition_filtre);
	
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

		// apres le 7 juin: reautoriser
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

		element_DOM("id_chapitre").value = "--";
		
		//par défaut: choix fichier et non youtube ni extrait
		element_DOM('est_video_youtube').checked = false;	
		element_DOM('est_extrait_manuel').checked = false;	
		element_DOM('est_telechargeable').checked = true;	

		//si pas de manuels -> choix_extrait_manuel non visibles
		afficher_checkbox("choix_extrait_manuel", les_manuels_de_la_matiere() !== "")

		mode_fichier_initialement()

		//par défaut: coefficient = 0
		element_DOM('coef').value = 0	

		//mode NON quiz
		element_DOM("mode-non-quiz").style.display = "grid"
		element_DOM("mode-quiz").style.display = "none"


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
	envoyer_mon_statut("Déconnecté")
	var ma_classe = "";
	mon_role = init_mon_role()

	tout_effacer_sauf(["identifiant_courant", "mode_nuit_oui", "notifs_sans_actualiser", "date_heure_depassement"])

	image_temporaire = ""
	nom_image_temporaire = ""


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
		element_DOM('a-rendre').style.visibility = "visible";
	}else{
		element_DOM('a-rendre').style.visibility = "hidden";
	}


}



function trier_par_identifiant(a, b){
  var aName = a.Identifiant.toLowerCase();
  var bName = b.Identifiant.toLowerCase(); 
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}


function recuperer_profs(sans_fenetre){
	var mes_classes_matieres = JSON.parse(recuperer("mes_matieres")).map(e => e['Classe_Matiere']).sort()
	//console.log(mes_classes_matieres)
	var snapshot = []

	//dans tous les cas: chercher puis traiter
	url = racine_data + "Trombinoscope_profs" + "?" + apikey
	return get_resultat_asynchrone(url).then(function(resultats){
		//console.log(url)
	
		//console.log(resultats)
		var copie_resultats = resultats.sort(trier_par_identifiant)
		
		//pour les eleves uniquement
		if(recuperer('mon_type') === "Eleves"){

			//pour chacune de mes classes matieres, je garde si ce prof enseigne cette classe matiere
			mes_classes_matieres.forEach(function(ma_classe_matiere,index_matiere){
				//console.log(index_matiere)
				//console.log(ma_classe_matiere)
				
				//on regarder si cette matiere appartient a ce prof
				le_prof = copie_resultats.filter(e => e['Classe'].includes(ma_classe_matiere))			
				//console.log(le_prof)

				//on a au moins 1 prof pour cette matiere
				if(le_prof.length > 0){
					//pour chaque prof de la matiere
					le_prof.forEach(function(le_prof_actuel){

						//console.log(le_prof_actuel['Identifiant'])

						//on regarde si ce prof est PAS ENCORE listé
						a_ajouter = snapshot.filter(e => e['Identifiant'] === le_prof_actuel['Identifiant']).length === 0
						//console.log(le_prof_actuel['Identifiant'] + ": " +a_ajouter)		

						le_prof_actuel['Classe'] = ma_classe_matiere

						//si pas encore listé -> on ajoute
						if(a_ajouter) snapshot.push(le_prof_actuel)	
						//console.log(snapshot.length + '\n\n\n')
					})
				} 

			})

		//profs et admin
		}else{
			snapshot = copie_resultats
		}


		//console.log(snapshot)
		//console.log(snapshot.length + '\n\n\n')


		if(sans_fenetre){
			chargement(false);
			return snapshot
		}else{


			//on configure la fenêtre
			var titre_fenetre = "Liste de vos professeurs"
			vider_fenetre(titre_fenetre);

			//afficher le resultat
			traitement_trombino(snapshot,true)
			afficher_fenetre(true);

		}

		
	})

}

function recuperer_admin(sans_fenetre){
	//en_cours()


	if (impossible_de_cliquer()) return -1;


	chargement(true);

	var le_cycle = JSON.parse(recuperer('mes_donnees'))['Cycle']

	nom_table = "Trombinoscope_admin" //"Admin"
	nom_champ_reference = "Cycle"
	valeur_champ_reference = le_cycle
	nom_champ_a_chercher = ""



	/*
	console.log(nom_table)
	console.log(nom_champ_reference)
	console.log(valeur_champ_reference)
	console.log(nom_champ_a_chercher)
	*/

	return rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher).then(snapshot => {
		


		if(sans_fenetre){
			chargement(false);
			return snapshot
		}else{
			var titre_fenetre = "Membres de l'Administration - " + valeur_champ_reference;
			

			vider_fenetre(titre_fenetre);

			//on affiche la fenêtre
			afficher_fenetre(true);

			//avec les rôles pour admin
			traitement_trombino(snapshot,true, true);
			chargement(false);
		}


	}).catch(error => {
		console.error(error);
		alert('Cycle introuvable, veuillez réessayer.');
		
		chargement(false);
	})


}



function recuperer_eleves(sans_fenetre){

	if (impossible_de_cliquer()) return -1;

	//si dossier vie scolaire et non admin: pas de dépôt
	//console.log({sans_fenetre})
	if(!recuperer('mon_type').includes('Admin') && element_DOM('accueil_utilisateur').innerText.includes('Vie scolaire') && sans_fenetre === false){
		alert("Vous n'avez pas les droits pour consulter cette liste.");
		return -1;
	}

	chargement(true);

	//la classe actuellement ouverte
	var classe = recuperer('mon_type').includes('Eleves') ? JSON.parse(recuperer("mes_donnees"))['Classe'] : la_matiere_chargee("Classe")
	

	//si on est admin et à la première page: on récupère tout
	if (recuperer('mon_type') === "Administration" && classe ==='classe_matiere_introuvable') classe = "Tous";



	var le_cycle = JSON.parse(recuperer('mes_donnees'))['Cycle']

	nom_table = "Trombinoscope" //"Eleves"
	nom_champ_reference = classe === "Tous" ? "Cycle" : "Classe"
	valeur_champ_reference = classe === "Tous" ? le_cycle : classe
	nom_champ_a_chercher = ""


	/*
	console.log(nom_table)
	console.log(nom_champ_reference)
	console.log(valeur_champ_reference)
	console.log(nom_champ_a_chercher)
	*/

	return rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher).then(snapshot => {
		
		if(sans_fenetre){
			chargement(false);
			return snapshot
		}else{


			var titre_fenetre = "Liste des élèves en " + valeur_champ_reference;
			

			vider_fenetre(titre_fenetre);

			//on affiche la fenêtre
			afficher_fenetre(true);

			traitement_trombino(snapshot,false);
			chargement(false);
		}

	}).catch(error => {
		console.error(error);
		alert('Liste des élèves '+ (sans_fenetre?"destinataires ":"") +'introuvable, veuillez réessayer une fois reconnecté à internet.');
		
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
		var classe = la_matiere_chargee("Classe") 
		var nom_variable = "classe"; //uniquement la liste des élèves
		var titre_fenetre = "Liste des élèves en " + classe;
	}

	//on vide la fenêtre, on met le zoom + le bouton quitter
	vider_fenetre(titre_fenetre);

	//on ajoute le bouton télécharger
		var bouton_télécharger = '<a id="telechargement" style="position: fixed;z-index:3;" href = "#"><img alt="télécharger" class="window-btn" id="telechargement" src="'+ prefixe_image + '/img_download.png""></a>';
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

function traitement_trombino(resultats, sans_ecolage, avec_role){
	
	//console.log(resultats)
	//console.log(sans_ecolage)

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

	//console.log(resultats)


	resultats.forEach(function(valeur,index){
		//console.log(index)
		var ecolage_eleve = "";

		//seuls les admins avec Droit_changer_ecolage peuvent changer l'écolage
		var Droit_changer_ecolage = (JSON.parse(recuperer('mes_donnees'))['Droit_changer_ecolage'] === "oui" && recuperer('mon_type').includes('Admin'));
		if (Droit_changer_ecolage && !sans_ecolage) ecolage_eleve = '<span class="toggle"><label class="switch"><input class="ecolage" id="'+ valeur['Identifiant']+'" type="checkbox"><span class="slider round"></span>	</label></span>';

		
		var le_lien_pp = lien_pp(valeur['id_fichier'])
		var bouton_modif = recuperer('mon_type').includes('Admin') ? bouton_modifier_pp(valeur['Identifiant']) : ""
		var bouton_suppr = recuperer('mon_type').includes('Admin') && !le_lien_pp.includes("default-user.png") ? bouton_supprimer_pp(valeur['Identifiant']) : ""
		var la_classe_utilisateur = !sans_ecolage ? valeur['Classe'] : valeur['Classe'].split('|')[1].split(')')[0] //cas des profs
		if(avec_role) la_classe_utilisateur = valeur['Role'] //cas des admin
		var un_eleve = '<div class="un_eleve"><img class="pp" id="pp_'+valeur['Identifiant']+'" src='+ le_lien_pp +'>' + bouton_modif + bouton_suppr +'<div><span class="element_eleve">' + valeur['Nom'] + " " + valeur['Prénom(s)'] + " <b>" + la_classe_utilisateur + '</b></span></div>' + ecolage_eleve +'</div>';
		var un_bloc_eleve = document.createElement('div');
		un_bloc_eleve.innerHTML = un_eleve;

		//on ajoute chaque élément dans le contenant liste des eleves
		while(un_bloc_eleve.firstChild) liste_des_eleves.appendChild(un_bloc_eleve.firstChild);

		//seuls les admins avec Droit_changer_ecolage peuvent changer l'écolage
		if(Droit_changer_ecolage && !sans_ecolage){
			var check_ecolage = valeur['Ecolage_OK'] === "oui";
			element_DOM(valeur['Identifiant']).checked = check_ecolage;
		}

	});


	if(!sans_ecolage){

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

	}

	//on ajoute la taille de la classe entre parenthèses
	element_DOM('titre_fenetre').innerHTML += ' (' + resultats.length + ')';

	//dans le cas des leves
	//si NON ADMIN, on n'affiche rien si finalement y a pas de dossier chargé
	if ((!recuperer('mon_type').includes("Administration") && (recuperer('dossier_chargé') === "" || recuperer('dossier_chargé') === null)) && !sans_ecolage)  decharger_dossier_final();
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
	
	
	verify_local_pass()
	attribuer_les_clics()
	mettre_mon_mode()
	appliquer_preferences()


	document.title = "Sekooly | " + nom_etablissement.toUpperCase();

	effacer("date_heure_depassement")

	//si pas de données
	if (recuperer('mes_donnees') === "" || recuperer('mon_type') === "" || recuperer('mes_donnees') === null || recuperer('mon_type') === null){

		//console.log("ici")
		tout_quitter()

	//pas de liste de notifs lus
	//}else if(JSON.parse(recuperer("mes_donnees"))['liste_notifs_lues'] === undefined){

		//tout_quitter()


	//tout est ok
	}else{
		configurer_profil();
		mon_role = init_mon_role();		
		
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
  
  if($(".lien_mail")[0]){


    $(".lien_mail")[0].href = "mailto:"+le_contact
    $(".lien_mail")[0].innerText = le_contact
    stocker('lien_mail',le_contact)
  }


  if($("#logo_etablissement")[0]) $("#logo_etablissement")[0].src = prefixe_image + "/" + nom_fichier_logo
  if($("#site_etablissement")[0]) $("#site_etablissement")[0].href = site_etablissement
}




function attribuer_les_clics(){


	au_clic("#recup_biblio", "voir_biblio()" )
	au_clic("#sekooly_ressources", "voir_biblio()" )
	au_clic("#recup_ccbac","voir_ccbac()")

	au_clic("#a2hs", "ajouter_a_laccueil()")//
	au_clic('[class="haut_droite dropdown"]', "switch_side_bar_top()")//
	au_clic("#recup_notifs, #bulle_notif", "switch_pannel_notifs()")//
	au_clic("#recup_msgs, #bulle_notif_msg", "recuperer_msgs(true)")//
	au_clic("#rechercher_element", "faire_la_recherche_fichier()")//
	
	au_clic("#menu", "switch_side_bar()")//
	au_clic('[class="sidebar left"]', "fermer_si_non_recherche(event)")//
	au_clic("#side-bar-profil", "afficher_modif_profil()")//
	au_clic("#side-bar-edt", "edt()")//
	au_clic("#side-bar-day", "ma_journee()")//
	au_clic(".sidebar","switch_side_bar()")
	au_clic("#dashboard", "tableau_de_bord()")//
	au_clic("#side-bar-prog", "recuperer_programme()")//
	//au_clic("#side-bar-conseil", "conseils_de_classe()")//
	au_clic("#side-bar-conseil", "choix_classe_fiche()")
	au_clic("#side-bar-remed", "remediations()")//
	au_clic("#side-bar-bulletins", "clic_bulletin()")//
	au_clic("#side-bar-irl", "gerer_notifs_irl()")//
	au_clic("#side-bar-help", "retourner_site()")//
	au_clic("#side-bar-night", "configurer_mode()")//
	au_clic("#side-bar-review", "emettre_avis_sekooly()")//



	au_clic("#side-bar-top-right", "fermer_side_bar()")//
	au_clic("#statut-container","demande_changer_statut(event)")
	au_clic("#recup_eleves", "recuperer_eleves()")//
	au_clic("#recup_profs", "recuperer_profs()")//
	au_clic("#recup_admin", "recuperer_admin()")//
	au_clic("#recup_params", "recuperer_parametres()")//
	au_clic("#recup_pref", "recuperer_preferences()")//
	au_clic("#recup_analyses", "recuperer_analyses()")//
	au_clic("#disconnect", "deconnexion()")//


	au_clic("#afficher", "charger_les_topics()")//
	au_clic("#a-rendre", "recuperer_devoirs()")//
	au_clic("#visioconference", "rejoindre_visio()")//
	au_clic("#gerer-bulletins", "clic_bulletin()")//
	au_clic("#img_ajout", "afficher_ou_non_choix_fichier(true)")//


	au_clic("#par_la_date_effet, #par_filtre_id_chapitre", "choisir_ce_mode(this)")//
	au_clic("#config-date-prog", "switch_config_mode()")//

	au_clic("#est_video_youtube", "switch_affichage_youtube()")//
	au_clic("#est_extrait_manuel", "switch_extrait_manuel()")//


	au_clic("#bye_prev_upload", "afficher_ou_non_choix_fichier(false)")//
	au_clic("#bye_prev_rendu", "afficher_fenetre_rendudevoir(false)")//
	
	au_clic("#helper-categ", "alert('Si vous attendez un rendu de la part des élèves, catégorisez votre fichier en Devoirs/Examens/Quiz.')")//
	au_clic("#helper-prog","help_chapitre()")//
	au_clic("#helper-coef","alert('Si ce rendu est noté et compte dans le bulletin scolaire, merci de mettre un coefficient > 0.')")//
	
	au_clic("#helper-dev", "aide_devoirs()")//
	au_clic("#supprimer_page", "supprimer_derniere_page_devoir()")//
	au_clic("#ajouter_page", "ajouter_page_devoir()")//
	au_clic("#bouton_rendre_devoir", "rendre_devoir()")//
	au_clic("#run-quiz-dev", "$('#'+element_DOM('devoir_choisi').value).click()")
	

}

function help_chapitre(){
	alert('Choisir le chapitre permet de mieux retrouver votre fichier.\nPour gérer les chapitres de votre matière, vous pouvez aller en haut à gauche -> Programme scolaire.')
}

function chargement_a_larrivee(){
	
	chargement(true);
	fermer_side_bar()
	mettre_le_contact_etablissement()
	rendre_td_modifiable();
	mettre_les_soons()
	ajouter_multi_visio_si_non_eleve()
	notifs_reelles_ou_non()

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
	
	effacer("nb_clics")
	effacer("numero_etape")

	//alert("avant notifs")
	mettre_en_place_les_notifications();
	//alert("apres notifs")

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

	//sondages non répondus
	gerer_sondage()


	


	//accueil principal
	if ((recuperer('dossier_chargé') === '' || recuperer('dossier_chargé') === null) && recuperer('mes_donnees') !== ''){

		configurer_profil();

		//PAS d'ajout de fichier ni de devoirs à l'accueil ni de visio
		afficher_ajout(false);
		afficher_discussions(false);
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



		if(la_matiere.length > 0){

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

		//matière non trouvée
		} else {
			//si admin -> accueil
			if(recuperer("mon_type").includes("Admin")) stocker("mon_type","Administration")
			ajouter_les_dossiers_dynamiques();
		}


		
	}

	valider_suppression_via_mail_si_besoin()

	
	appliquer_preferences()
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

	if(array && array !== "null" && array !== null){
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

	if($("#liste_matieres")[0].children.length > 0) return true

	afficher_le_drive(false);

	var mes_matieres = JSON.parse(recuperer('mes_matieres'));	

	//admin: dossiers de toutes les classes PUIS toutes les matières de la classe
	if (recuperer('mon_type') ==="Administration" ){

		
		//on recupere les classes une seule fois, avec leur ID
		var les_classes = valeursUniquesDeCetteKey(mes_matieres, 'Classe').sort();
		var lien_classes = []
		les_classes.forEach(function(la_classe){
			lien_classes.push(mes_matieres.find(e => e['Classe'] === la_classe )['classe_id'] )
		})

		//valeursUniquesDeCetteKey(mes_matieres, 'classe_id') ;


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
		//console.log(arrayItem)

		if (arrayItem !== null){

			var ma_classe = arrayItem.Classe;
		    var ma_matiere = arrayItem.Matiere;
		    var couleur_matiere = prefixe_image + "/img_dossier_" + arrayItem.Couleur_matiere.replace(/ /g,"") + ".png" 

		    if (ma_classe !==undefined && ma_matiere !== undefined){
				
			    var mon_url_matiere = arrayItem.URL;

			    //alert(mon_url_matiere)

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
	if($(".une_matiere_en_dossier#"+URL_classe_matiere).length > 0 ) return -1

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

		
		//on change le titre si ça vient d'un clic de dossier (ET NON BOUTON PRECEDENT)
		if (element_DOM(e.target.id)){

			element_DOM('accueil_utilisateur').innerHTML = element_DOM(e.target.id).innerText;
			mettre_infos_matiere(false)
		} 

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
	  //alert("on a cliqué: " + e.target.id);

	  //vider les notifs pour éviter d'avoir le meme ID
	  $("#pannel_notif")[0].innerHTML=''

	  var titre = $("span[id='"+e.target.id+"']").text().trim() //e.target.innerText
	  //alert(titre)
	  charger_dossier(e.target.id,true, titre);

	});

}



function creer_nouveau_dossier() {
    var mon_div=document.createElement("div");
    mon_div.className = "card"
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
		var icone = prefixe_image + "/dossier_drive.png";
	}


     // var quizDiv = element_DOM("quizDiv");
     mon_div.innerHTML = '<a class="une_matiere_en_dossier" id="' + URL_classe_matiere + '" href="javascript:void(0)" > <span id="' + URL_classe_matiere + '"> <img class = image_centre id="'+ URL_classe_matiere + '" src="'+ icone +'">  ' + nom_classe + la_matiere + ' </a> </span>';
     
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

async function infos_matiere(){
	id_matiere = recuperer("dossier_chargé")
	la_matiere = la_matiere_chargee("Matiere")
	description = await rechercher('Matieres','ID_URL',id_matiere, 'description')

	if(description){
		description = description[0]['description']

		lire_description(id_matiere,la_matiere, description)
		
	}

}


function lire_description(id_matiere,la_matiere,description){

	elements_html = '<div class="description_matiere" id="content">' + description + '</div>'
	intitule_bouton = recuperer("mon_type") === "Eleves" ?  "Fermer" : "Editer la description"
	fonction_bouton = recuperer("mon_type") === "Eleves" ?  "$('#mini_popup').remove()" : "editer_description_matiere('"+id_matiere+"','"+la_matiere+"')"

	creer_mini_popup(la_matiere,elements_html,intitule_bouton,fonction_bouton,false,false,false,false,"25")
}

function editer_description_matiere(id_matiere,la_matiere){

	$("#foot_modifs").remove()
	description = element_DOM("content").innerHTML
	//console.log({description})

	vider_fenetre("Description de " + la_matiere,false,"sauvegarder_description()")
	afficher_fenetre(true)
	$('#mini_popup').remove()
	

	$("#fenetre").append('<div class="edition"><div id="description_matiere">'+description+'</div></div>')	
	rendre_riche("description_matiere")


}

function saisie_vide(){
	return '<p><br data-cke-filler=\"true\"></p>'
}

function saisie_est_vide(){
	return $('.ck-editor__main p').length >= 0 &&
			$('.ck-editor__main p').text().length === 0

}

function pied_modifs(){
	var res = "<div id='foot_modifs'><br><br><gris><i>Dernière modification: " + afficher_date(maintenant())
	res += "<br>Par: " + recuperer("identifiant_courant").toUpperCase() + '</i></gris></div>'
	return res

}

async function sauvegarder_description(){
	console.log("Enregistrement de la description...")
	
	nouvelle_description = (saisie_est_vide()) ? "Aucune description fournie" : recuperer_html_saisie_riche() 
	nouvelle_description +=  pied_modifs()



	await supabase
		  .from('Matieres')
		  .update({description: nouvelle_description})
		  .match({ID_URL: recuperer("dossier_chargé")})

	afficher_alerte("Description de la matière sauvegardée.")


}

function charger_dossier(id_dossier,final_booleen,titre){
	/*
	console.log({
		id_dossier:id_dossier,
		final_booleen:final_booleen,
		titre:titre
	})
	*/

	$("#barre_verticale")[0].style.display = "grid"

	//le dossier est déjà chargé
	if (id_dossier !== "" && id_dossier !== null) {

		chargement(true);
		afficher_les_dossiers_dynamiques(false);
		
		//on a chargé un dossier: changement de la variable locale
		stocker_temp('dossier_chargé',id_dossier);

		//par défaut: filtrer par la date d'effet pour le moment (à modifier en fonction des préférences de l'utilisateur)
		var mode_prefere = recuperer("mode_prefere") || "par_la_date_effet"
		choisir_ce_mode($("#" + mode_prefere)[0])

		//on récupère les chapitres du dossier chargé 
		chercher_mes_chapitres(true)
		
		$('#accueil_utilisateur').off('click');

		$('#la_date_effet').on('change click',function(e){		
			filtrer_date_effet();						
		});

		$('#filtre_id_chapitre').on('change click',function(e){		
			filtrer_chapitre();						
		});


		//on enleve les topics et les coms de la matiere
		stocker('les_topics','');
		stocker("topic_chargé",'');
		stocker("nb_com_actuel",'')
		stocker("les_coms",'');

		//à l'ouverture d'une classe par un admin : il se transforme en élèves (toutes matières) avec des droits de profs (ajouter un fichier)


		//changer le titre du document 
		element_DOM('accueil_utilisateur').innerHTML = titre;
		mettre_infos_matiere(true)

		//ajouter un bouton back
		avec_bouton_back(true);

		//afficher les devoirs
		afficher_devoirs(true);
		afficher_discussions(true);

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


		
		

		
		//on recupere les fichiers deja en ligne
		//console.log("on va recuperer les fichiers");
		return recuperer_les_fichiers(id_dossier);

	}

}

function chercher_mes_chapitres(forcing){



	if(forcing) stocker("mes_chapitres","[]")


	//si pas de mes_chapitres OU id_dossier pas trouvé dans mes chapitres OU par forcing
	var mes_chapitres = JSON.parse(recuperer("mes_chapitres"))
	var id_dossier_actuel = recuperer("dossier_chargé")
	//console.log({id_dossier_actuel:id_dossier_actuel})
	if(!mes_chapitres || !mes_chapitres[id_dossier_actuel]){


		//on les récupère
		var url = racine_data + "Programme?ID_URL=eq." + id_dossier_actuel + "&limit=150&order=intitule_chapitre.asc" + "&" + apikey
		//console.log(url)
		mes_chapitres = get_resultat(url)
		//console.log({mes_chapitres:mes_chapitres})

		//on les affiche
		//console.log(mes_chapitres)

		//on les stocke
		mes_chapitres_str = JSON.stringify(mes_chapitres)
		chapitre_a_rajouter = {[id_dossier_actuel]: mes_chapitres_str}
		chapitre_a_rajouter_str =  JSON.stringify(chapitre_a_rajouter) 

		if(mes_chapitres.length > 0) stocker('mes_chapitres', chapitre_a_rajouter_str)

		

	}

	var mes_chapitres_locaux = recuperer_chapitres_locaux(id_dossier_actuel)
	//console.log({mes_chapitres_locaux:mes_chapitres_locaux})
	mettre_la_liste_de_chapitres()
	return mes_chapitres_locaux

}

function recuperer_chapitres_locaux(id_dossier){
	try{
		var resultat = JSON.parse(JSON.parse(recuperer("mes_chapitres"))[id_dossier])	
	}catch(e){
		var resultat = []
	}
	

	return resultat

}



function mettre_la_liste_de_chapitres(sans_append){
	var id_dossier_actuel =  recuperer("dossier_chargé")
	var mes_chapitres = recuperer_chapitres_locaux(id_dossier_actuel)

	//rajouter les nouveaux chapitres
	var liste_de_mes_chapitres = ""
	mes_chapitres.forEach(function(chapitre){
		liste_de_mes_chapitres += un_chapitre_liste(chapitre)
	})

	//ajouter "Nouvelle valeur"
	if(sans_append){
		return '<option value="--">(Aucun chapitre)</option>' + liste_de_mes_chapitres
	}else{

		//retirer les anciens chapitres
		$(".un_chapitre_dans_la_liste").remove()

		liste_de_mes_chapitres_filtre = liste_de_mes_chapitres + '<option class="un_chapitre_dans_la_liste" value="Tous">Tous les fichiers</option>'
		liste_de_mes_chapitres += '<option class="un_chapitre_dans_la_liste" value="new" style="font-style: oblique;">Nouveau chapitre</option>'
		$("select#id_chapitre").append(liste_de_mes_chapitres)
		$("select#filtre_id_chapitre").append(liste_de_mes_chapitres_filtre)

                //Au changement, si c'est un nouveau chapitre : prompt
                $("select#id_chapitre").off("change")
                $("select#id_chapitre").on("change",function(e){
                    if(e.target.value === "new") creer_chapitre()
                })

	}
	

}

function un_chapitre_liste(chapitre){
	return '<option class="un_chapitre_dans_la_liste" value='+chapitre["id_chapitre"]+'>'+chapitre["intitule_chapitre"]+'</option>'
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
		//alert('Erreur : fichiers impossibles à récupérer pour cette classe.')
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

	var alerte = document.createElement('span');
	alerte.id = "alerte_vide";
	alerte.className = "alerte_vide"


	var la_date_choisie = $("#la_date_effet").find(":selected").text();
	var le_chapitre_choisi = $("#filtre_id_chapitre").find(":selected").text();

	//en fonction du mode
	var mode_date = $('[id="la_date_effet"]:visible').length > 0
	var element_choisi = mode_date ? la_date_choisie : le_chapitre_choisi

	alerte.innerHTML = '<i class="contenu_alerte_vide">Il n\'y a pas encore de fichiers pour ' + element_choisi + '.</i>';

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
				date_debut = moment(date_debut + " " + valeur['heure_effet'])

				//console.log("date_debut : " + date_debut.format("YYYY-MM-DD HH:mm"))

				la_date_limite = date_debut;
				nb_heures_delai_examen = data_etablissement['nb_heures_delai_examen'] || 12 //12 par défaut
				la_date_limite = la_date_limite.add(nb_heures_delai_examen,'hours');
				//la_date_limite = la_date_yyyy_mm_dd(la_date_limite)
				//console.log("la_date_limite : " + la_date_limite)
				//la_date_limite = afficher_date(la_date_limite,true);
				
				//lheure_limite = " à " + valeur['heure_effet'] ;

				//console.log("de " + afficher_date(date_debut._i,true));
				//console.log("au " + la_date_limite + lheure_limite);


				//console.log("la_date_limite : " + la_date_limite.format("YYYY-MM-DD HH:mm"))
				lheure_limite = " à " + la_date_limite.format("YYYY-MM-DD HH:mm").split(" ")[1]
				la_date_limite = afficher_date(la_date_limite,true);

			}

			//on n'affiche le coef que si > 0
			valeur_coef = valeur['coefficient_rendu'] > 0 ? "<b>Coeff. "+valeur['coefficient_rendu']+"</b>" : ''
			if(ma_categorie ==="devoirs" || ma_categorie ==="examens") nom_fichier = valeur['nom_fichier'] + '<rouge><i>(à rendre avant le ' + la_date_limite + lheure_limite +')<br>'+valeur_coef+'</i></rouge>';

			
			var nom_drive = 'drive_' + ma_categorie;
			//console.log(nom_drive)

			//console.log(valeur['heure_effet']);
			ajouter_un_fichier(valeur['id_fichier'],nom_fichier,nom_drive,extension_fichier, valeur['date_effet'], valeur['heure_effet'], valeur['est_telechargeable'], valeur['coefficient_rendu'], valeur['la_date_limite'], valeur['lheure_limite'], valeur['periode_bulletin'], valeur['destinataire_par_page'], valeur['id_chapitre'] );

		});

		
		//n'afficher que les fichiers qui correspondent au filtre courant
		var id_mode = id_mode_affichage()
		filtrer_avec_le_bon_filtre(id_mode)


		chargement(false);


	}

	//on n'affiche rien si finalement y a pas de dossier chargé
	if (recuperer('dossier_chargé') === "" || recuperer('dossier_chargé') === null) decharger_dossier_final();


	chargement(false);

}

function id_mode_affichage(){
	return recuperer("mode_prefere") ? recuperer("mode_prefere").replace("par_","") : "la_date_effet"
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


function ajouter_un_fichier(id_fichier,nom_fichier,nom_drive,extension_fichier,date_effet,heure_effet,est_telechargeable,coefficient_rendu, date_limite, heure_limite, periode_bulletin, destinataire_par_page,id_chapitre){




	var image_fichier = prefixe_image + "/img_icone_" + extension_fichier + ".png";
	
	//console.log("on va ajouter " + nom_fichier + " dans " + nom_drive);

	/*
	console.log("date_effet: " + date_effet);
	console.log("la_date_yyyy_mm_dd(date_effet): "  + la_date_yyyy_mm_dd(date_effet))
	*/

	// sans téléchargement EN PLUS DE YOUTUBE
	var padding_yt = est_telechargeable === "oui" ?  "" : ' style="padding-top: 25%;" ' 
	var telecharger_le_fichier = est_telechargeable === "oui" ? '<img alt="télécharger" src="'+ prefixe_image + '/img_download.png" onclick="telecharger_fichier(event,this)" id="telecharger" class="download_fichier">' : ""
	var periode_bulletin = periode_bulletin ? " periode_bulletin='"+periode_bulletin+"'" : ""
	var destinataire_par_page = destinataire_par_page ? " destinataire_par_page='"+destinataire_par_page+"'" : ""
	var id_chapitre = id_chapitre ? " id_chapitre='" + id_chapitre + "'" : ""
	var code_html = '<span oncontextmenu="autoriser_clic_droit_supprimer_et_renommer(event,this)" onclick="ouvrir_fichier(this)" class="span_un_fichier" id="' + id_fichier + '" ma_date_effet="'+ la_date_yyyy_mm_dd(date_effet)+'" mon_heure_effet="'+ heure_effet + '" ma_date_limite="'+ la_date_yyyy_mm_dd(date_limite)+'" mon_heure_limite="'+ heure_limite +'" est_telechargeable="'+est_telechargeable+'"    coefficient_rendu='+ coefficient_rendu + periode_bulletin  + destinataire_par_page + id_chapitre +'    >' + telecharger_le_fichier + '<img id="' + id_fichier + '" src="'+ image_fichier +'" class="un_fichier" '+padding_yt+'>' + nom_fichier +'</span>';

	//console.log(code_html);

	var mon_fichier = document.createElement('div');
	mon_fichier.innerHTML = code_html;
	//console.log(mon_fichier);
	while(mon_fichier.firstChild) {
	    element_DOM(nom_drive).appendChild(mon_fichier.firstChild);
	}

	//si une image n'est pas chargée on met l'image par défaut
	$('#' + id_fichier + ' .un_fichier').one("error",function(e){

		//console.log("on a une erreur " + JSON.stringify(e));
		$('#' + id_fichier + ' .un_fichier').attr("src", prefixe_image + "/img_fichier.png");
		//console.log("on a changé sa source");
	});

	
	ajouter_cadenas_examen(id_fichier,nom_drive);


}

function ajouter_cadenas_examen(id_fichier,nom_drive){
	//si Examens: si NON OUVRABLE -> cadenas
	if (nom_drive==="drive_examens"){
		var non_ouvrable = fichier_ouvrable(id_fichier,false)===false;

		if(non_ouvrable){

			$(".span_un_fichier#"+id_fichier).append('<img alt="verrouillé" id="locked" src="'+ prefixe_image + '/img_cadenas.png" class="locked">')
		}

	}
}

function bool_examen_terminé(drive_parent, le_span_un_fichier){


	var date_debut = le_span_un_fichier.getAttribute('ma_date_effet');
	var heure_debut = le_span_un_fichier.getAttribute('mon_heure_effet').value

	//fin = début + 48h
	nb_heures_delai_examen = data_etablissement['nb_heures_delai_examen'] || 12 //12 par défaut
	//console.log(nb_heures_delai_examen)
	var date_fin = moment(date_debut + " " + heure_debut,"yyyy-MM-DD hh:mm").add(nb_heures_delai_examen,'hours')._d;

	//console.log(date_debut)
	//console.log(date_fin)
	
	var est_examen = drive_parent === "drive_examens" 
	var examen_terminé = est_examen && (moment(maintenant()) > date_fin)


	return examen_terminé


}

function fichier_ouvrable(id_fichier,bouton_telecharger,ceci_bouton_telecharger){
	var mon_type = recuperer('mon_type').split("_")[0]

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
		
		//decommenter aux prochaines périodes d'examens
		
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
		var nom_fichier = $("span[id='"+id_fichier+"']")
		    .clone()    //clone the element
		    .children() //select all the children
		    .remove()   //remove all the children
		    .end()  //again go back to selected element
			.text().trim()
		//console.log({nom_fichier})

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
	ajouter_fonction_clic_droit(e,ceci,1,"changer_chapitre_fichier","Chapitre",id_fichier);
	ajouter_fonction_clic_droit(e,ceci,2,"recategoriser_fichier","Recatégoriser",id_fichier);
	ajouter_fonction_clic_droit(e,ceci,3,"changer_date_effet","Date d\'effet",id_fichier);

	//si devoir UNIQUEMENT -> on peut changer la date limite aussi -> offset = 1, sinon 0
	if($("#"+ceci.id)[0].parentNode.id === "drive_devoirs"){
		ajouter_fonction_clic_droit(e,ceci,4,"changer_date_limite_rendu","Date limite de rendu",id_fichier);
		mon_offset = 1	
	}else{
		mon_offset = 0
	}

	//si c'est un bulletin -> on peut changer 1) la période du bulletin 2) la correspondance page -> élève 
	if($("#"+ceci.id)[0].parentNode.id  === "drive_bulletins"){
		ajouter_fonction_clic_droit(e,ceci,4,"changer_periode_bulletin","Période du bulletin",id_fichier);
		//ajouter_fonction_clic_droit(e,ceci,4,"changer_eleve_par_page_bulletin","Ré-assigner pages",id_fichier);
		mon_offset = mon_offset === 1 ? 2 : 1
	}
	
	//ajouter l'offset

	ajouter_fonction_clic_droit(e,ceci,4+mon_offset,"changer_coef","Coefficient",id_fichier,null,$("#"+id_fichier)[0].getAttribute("coefficient_rendu"));
	ajouter_fonction_clic_droit(e,ceci,5+mon_offset,"republier_fichier","Republier ailleurs",id_fichier);
	ajouter_fonction_clic_droit(e,ceci,6+mon_offset,"changer_telechargeable","Téléchargeable",id_fichier);
	ajouter_fonction_clic_droit(e,ceci,7+mon_offset,"supprimer_fichier","Supprimer",id_fichier);

	//au clic de n'importe où : ça enleve le clic droit
	$(document).click(function() {
		$('.clic_droit').remove();	
		$('#clic_droit_titres_param').remove();    		

	});

}

function republier_fichier(id_fichier,nom_fichier){

	stockerSession('ressource_ouverte',id_fichier)
	stockerSession('nom_ressource_ouverte',nom_fichier)
	stockerSession('categorie_ressource_ouverte',  $("[id="+id_fichier+'].span_un_fichier')[0].parentNode.id.split("_")[1])
	stockerSession('republication',true)
	publier_ressource()



}

function changer_chapitre_fichier(id_fichier,nom_fichier){

	var elements_html = '<select id="nouveau_chapitre">'
	elements_html += mettre_la_liste_de_chapitres(true)
	elements_html += '</select>'
	var ancien_chapitre = $(".span_un_fichier[id='"+id_fichier+"']")[0].getAttribute("id_chapitre")
	creer_mini_popup("Chapitre de <b>" + nom_fichier + '</b>', elements_html, "Assigner le chapitre", "changer_chapitre(\'"+id_fichier+"\')", ancien_chapitre, "nouveau_chapitre" )



}

function changer_chapitre(id_fichier){
	nouveau_chapitre = $("#nouveau_chapitre")[0].value
	//console.log(nouveau_chapitre)

	nouvelle_donnee = {
		id_fichier: id_fichier,
		id_chapitre: nouveau_chapitre
	}

	var url = racine_data + "Fichiers?id_fichier=eq."+id_fichier + "&" + apikey

	patch_resultat_asynchrone(url, nouvelle_donnee)
	afficher_alerte("Le chapitre du fichier a bien été actualisé.",true)
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
	var extension_fichier =  $(".span_un_fichier[id='"+id_fichier+"']")[0].innerText.split('.')[1].split('\n')[0]


	//console.log(extension_fichier)
	if(categorie_actuelle.includes("manuels") || categorie_actuelle.includes("quiz")){
		alert("Impossible de rendre un manuel ou un quiz téléchargeable.");
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

	if(!categorie_actuelle.includes("devoirs") && !categorie_actuelle.includes("examens") && !categorie_actuelle.includes("quiz")){
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
	}else if(categorie_actuelle.includes("quiz")){
		alert("Impossible de recatégoriser un quiz.");
		return -1;
	}else{

		categorie_actuelle = categorie_actuelle.charAt(0).toUpperCase() + categorie_actuelle.slice(1);

		var liste_choix_categories = Array.from($("#categorie_choisie")[0].children).map(valeur => valeur.value);

		var liste_options = liste_choix_categories.map(valeur=> '<option value="'+valeur+'">'+valeur+'</option>');

			var ma_liste_categories = '<select id="ma_liste_categories" style="width: 80%;">'+liste_options+'</select>';

			creer_mini_popup(nom_fichier,ma_liste_categories,"Recatégoriser","mettre_a_jour_categorie('"+id_fichier+"')",categorie_actuelle,"ma_liste_categories");



	}



}

function creer_mini_popup(titre,elements_html,nom_bouton,fonction_bouton,valeur_actuelle,id_element_valeur_actuelle, valeur_actuelle_bis, id_element_valeur_actuelle_bis,taille_du_titre,id_bouton){

	//console.log({id_bouton})

	$("#mini_popup").remove();

	//on ajoute le bouton quitter
	var bouton_quitter = '<div id="entete-fenetre" style="display: inline-flex;float: right;"><img  alt="X" src="'+ prefixe_image + '/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" class="bye_prev"> </div>';

	var taille = taille_du_titre ? 'style="border-bottom-style: ridge;font-size: '+taille_du_titre+'px;"' : ""
	var titre_html = '<div '+taille+' >'+titre+'</div>'

	var id_bouton_html = id_bouton ? "id='" + id_bouton + "'" : ""
	//console.log({id_bouton_html})
	var valider_changement = '<button type="button"  '+id_bouton_html+'  class="rendre sekooly-mode-background" onclick="'+fonction_bouton+'">'+nom_bouton+'</button>'


	
	var mini_popup_html = '<div class="mini_popup" id="mini_popup">'+bouton_quitter+titre_html+elements_html+valider_changement+'</div>';

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


function creer_mini_popup_2(titre,elements_html,nom_bouton,fonction_bouton,valeur_actuelle,id_element_valeur_actuelle, valeur_actuelle_bis, id_element_valeur_actuelle_bis,taille_du_titre,id_bouton){

	//console.log({id_bouton})

	$("#mini_popup2").remove();

	//on ajoute le bouton quitter
	var bouton_quitter = '<div id="entete-fenetre" style="display: inline-flex;float: right;"><img  alt="X" src="'+ prefixe_image + '/quitter.png" id="bye_prev" onclick="$(\'#mini_popup2\').remove()" class="bye_prev"> </div>';

	var taille = taille_du_titre ? 'style="border-bottom-style: ridge;font-size: '+taille_du_titre+'px;"' : ""
	var titre_html = '<div '+taille+' >'+titre+'</div>'

	var id_bouton_html = id_bouton ? "id='" + id_bouton + "'" : ""
	//console.log({id_bouton_html})
	var valider_changement = '<button type="button"  '+id_bouton_html+'  class="rendre sekooly-mode-background" onclick="'+fonction_bouton+'">'+nom_bouton+'</button>'


	
	var mini_popup_html = '<div class="mini_popup" id="mini_popup2">'+bouton_quitter+titre_html+elements_html+valider_changement+'</div>';

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
		//avec une date et heure limite
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


				//si c'est un quiz
				nom_table = "Quiz"
				nom_champ_reference = "id_quiz"
				valeur_champ_reference = id_fichier
				nouveau_data = {
					'titre' : nouveau_nom
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




async function visualiser(nom_fichier,id_fichier, nom_proprio_devoir, titre_initial, pas_de_telechargement, mode_extrait_png_canva, mode_extrait_png_div, callback_apres_render_fenetre){

	chargement(true);

	nom_fichier = decodeURIComponent(nom_fichier);
	nom_fichier = nom_fichier.toLowerCase();
	var extension = nom_fichier.split(".").pop();

	//vider_fenetre(titre_fenetre,est_visio, save_button_function, avec_bande_noire)
	vider_fenetre(titre_initial ? titre_initial : (nom_fichier + (nom_proprio_devoir ? nom_proprio_devoir : "")), false, false, est_youtube(extension) );
	
	afficher_fenetre(true);


	//console.log(mode_extrait_png_canva)
	//on ajoute le bouton télécharger sauf en cas de PAS DE TELECHARGENEMTN
	var bouton_télécharger = mode_extrait_png_canva ? '<a id="telechargement" class="download-btn" download="Bulletin.png" onclick="telecharger_canvas()"><img alt="télécharger" class="window-btn"  id="'+ id_fichier+ '" src="'+ prefixe_image + '/img_download.png"></a>' :
							pas_de_telechargement ? '' :
							'<a id="telechargement" class="download-btn" href = "https://drive.google.com/uc?export=download&id=' + id_fichier +'"><img alt="télécharger" class="window-btn" id="'+ id_fichier+ '" src="'+ prefixe_image + '/img_download.png"></a>';


	if(nom_proprio_devoir){
		//console.log(id_fichier)
		donnees_devoir_a_corriger = await rechercher("Rendus", "id_fichier", id_fichier) //get_resultat(url)
		//console.log(donnees_devoir_a_corriger)
		remarque = donnees_devoir_a_corriger[0]['remarque']
		coefficient_rendu = donnees_devoir_a_corriger[0]['coefficient_rendu']
		note_rendu = donnees_devoir_a_corriger[0]['note_rendu']


		remarque = decodeURIComponent(remarque);
		remarque= JSON.stringify(remarque).replace(/&/, "&amp;").replace(/"/g, "");
		remarque = remarque.replace(/'/g, "\\'");


		var bouton_corriger = '<span id="'+id_fichier+'"><img id="corriger" src="'+ prefixe_image + '/img_remarque.png" class="window-btn" style="right: 30px;" onclick="mettre_remarque_devoir(this,\'' +remarque +'\',' + coefficient_rendu +','+ note_rendu + ')"></span>'


	}else{
		var bouton_corriger = ""
	}





	//console.log(bouton_télécharger)
	//on le met dans l'en-tête
	var a_ajouter = document.createElement('div');
	a_ajouter.innerHTML = bouton_corriger + bouton_télécharger;
	while(a_ajouter.firstChild)
		element_DOM('entete-fenetre').appendChild(a_ajouter.firstChild);



	if(extension === "quiz") {
		chargement(false)
		//var id_quiz = (nom_proprio_devoir || recuperer("mon_type") === "Eleves") ? element_DOM("devoir_choisi").value : id_fichier
		var id_quiz = (nom_proprio_devoir) ? element_DOM("devoir_choisi").value : id_fichier
		stocker('fichier_ouvert',id_quiz);


		nom_proprio_devoir = nom_proprio_devoir ? nom_proprio_devoir.toLowerCase().replace("(","").replace(")","").trim() : recuperer("identifiant_courant")
		stocker("proprietaire_devoir",nom_proprio_devoir)

		return accueil_quiz(id_quiz,recuperer("mon_type")!=="Eleves", nom_proprio_devoir)

	}
	
	//on y met un iframe de visualisation dont la source est le fichier FORCEMENT le fichier cliqué
	var previsualisation = '<iframe id="previsualisation" class="previz"></iframe>';
	
	//si c'est une image: cas spécifique
	if(est_image(extension)) previsualisation = '<div id="previsualisation" style="width: 100%;height: 85%;"></div>';


	//si c'est un lien youtube ou sans téléchargement: pas de téléchargement
	if(est_youtube(extension)) $("#telechargement").remove()




	//si PAS téléchargement -> on cache le côté haut-droit en cas de PAS DE TELECHARGEMENT
	//console.log(pas_de_telechargement)
	//console.log(est_youtube(extension))
	//si c'est un mode_extrait_png_div -> div
	if ((pas_de_telechargement && est_youtube(extension)===false && est_image(extension)===false ) || mode_extrait_png_div) previsualisation = '<div id=previsualisation class="responsive-container">'

	
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


	//si c'est un audio MP3
	}else if(extension === 'mp3'){

		lien_de_visu = 'https://docs.google.com/file/d/'+id_fichier+'/preview'
		var le_inner_html = '<iframe id="viz_frame" src="'+lien_de_visu+'"    frameborder="0" scrolling="no" seamless=""></iframe><div id="squareDOC" style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 12px; top: 0px;"> </div>'
		element_DOM('previsualisation').innerHTML = le_inner_html

		chargement(false)

	//si c'est PAS une image
	}else{


		//si c'est un pdf -> ajustement du height
		choisir_height_viz_si_pdf()
		

		//si PAS youtube ET SANS téléchargement -> on cache le côté haut-droit en cas de PAS DE TELECHARGEMENT
		if (pas_de_telechargement && est_youtube(extension)===false){
			var le_inner_html = '<iframe id="viz_frame" src="'+lien_de_visu+'"    frameborder="0" scrolling="no" seamless=""></iframe><div id="squareDOC" style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 12px; top: 0px;"> </div>'
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

	//si pas de telechargement -> sans clic droit
	au_clic_droit("#previsualisation", "clic_droit_interdit(event)")

	//on ajuste les boutons
	ajuster_boutons_fenetre();
	ajuster_boutons_fenetre(true);
	choisir_height_viz_si_pdf();




	//new :  retour en callback
	if(callback_apres_render_fenetre){
		eval(callback_apres_render_fenetre)
	}



}

function clic_droit_interdit(e){
	//console.log("interdit!")
	e.preventDefault()
	e.stopPropagation()
	return false
}

function est_youtube(extension){
	return extension === "youtube"
}

function est_image(extension){
	return extension.includes("bmp") || extension.includes("gif") || extension.includes("jpeg") || extension.includes("jpg") || extension.includes("png")  || extension.includes("svg")  || extension.includes("bmp");
}


function calcul_lien_de_visu(extension,id_fichier){

	console.log(extension);

	//lien de visu par defaut
	var lien_de_visu =  "https://drive.google.com/uc?id=" + id_fichier;
	//var lien_de_visu = "https://drive.usercontent.google.com/download?id=1"+id_fichier

	//si c'est un site directement : on change
	if(extension==="tutoriels d'utilisation"){
		lien_de_visu = id_fichier;

	//si c'est un fichier excel : on change
	} else if(extension.includes("xls")){
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
		//lien_de_visu = 'https://drive.google.com/uc?export=preview&id=' + id_fichier;

		lien_de_visu = lien_previz_image(id_fichier)
	

	//si c'est un lien YOUTUBE
	}else if(est_youtube(extension)){
		lien_de_visu = 'https://www.youtube.com/embed/' + id_fichier + '?autoplay=1&fs=1&loop=1&rel=0&showinfo=0&modestbranding=1&listType=playlist&playlist=' + id_fichier;
	}


	


	return lien_de_visu;

}

function lien_previz_image(id_fichier_image){
	return "https://drive.google.com/thumbnail?id=" +id_fichier_image+ "&sz=s4000"
}

function quitter_previsualisation_bis(){
	//$("#fenetre_bis")[0].style.display = 'none';
	$("#fenetre_bis").remove();
	if (element_DOM('fenetre_bis')) element_DOM('fenetre_bis').style.overflowY = "";

}

function quitter_previsualisation(){

	$('#ccbacFrame').remove()
	
	if(element_DOM("previsualisation")) element_DOM("previsualisation").src="";
	if(element_DOM("viz_frame")) element_DOM("viz_frame").src="";
	if(document.querySelector('audio.previz')) document.querySelector('audio.previz').src = ""
	

	if($("#visio")[0]) $("#visio")[0].remove(); //éviter la pub dans visio

	//$("#mini_popup").remove()

	//tout enlever les écolages
	if($(".ecolage")) $(".toggle").remove();

	stocker('fichier_ouvert','');
	element_DOM('fenetre').style.overflowY = "";
	if (element_DOM('previsualisation')) element_DOM('previsualisation').setAttribute('style','')
	afficher_fenetre(false);


	ma_tentative = {}
	effacer("tmp_quiz")
	effacer("proprietaire_devoir")

	effacerSession("expandRes")
	effacerSession("rechercherRessource")

}


function initialisation_bouton(bis){
	
	element_DOM('pleinecran' + (bis ? "_bis" : "")).src = prefixe_image + "/img_pleinecran.png";

	//si déjà plein écran alors on change l'icône
	if (element_DOM('fenetre' + (bis ? "_bis" : "")).style.width=== "99%") element_DOM('pleinecran' + (bis ? "_bis" : "")).src = prefixe_image + "/img_petitecran.png";
	

}

function switch_mode(forcing){


	if(!element_DOM('pleinecran')) return -1;

	mode_petitecran = $("[src$='img_petitecran.png']").length === 0
	if(mode_petitecran && !forcing){
		element_DOM('pleinecran').src = prefixe_image + "/img_petitecran.png";
		$("#fenetre").addClass("big-window")
		//console.log("on a agrandi")
	}else{		
		element_DOM('pleinecran').src = prefixe_image + "/img_pleinecran.png";
		$("#fenetre").removeClass("big-window")	
		//console.log("on a retréci")
	}
	choisir_height_viz_si_pdf();

}


function switch_mode_bis(forcing){


	if(!element_DOM('pleinecran_bis')) return -1;

	var est_plein_ecran = (element_DOM('pleinecran_bis').src.includes(prefixe_image + "/img_pleinecran.png"));

	//console.log('est_plein_ecran: ' + est_plein_ecran);
	
	if (est_plein_ecran || forcing){

		element_DOM('pleinecran_bis').src = prefixe_image + "/img_petitecran.png";

		//bcp + de top et de left
		element_DOM('fenetre_bis').style.top = 0;
		element_DOM('fenetre_bis').style.left= 0;
		//width et height à 99%
		element_DOM('fenetre_bis').style.width= "99%";
		element_DOM('fenetre_bis').style.height= "99%";


	}else{

		element_DOM('pleinecran_bis').src = prefixe_image + "/img_pleinecran.png";
		
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

			//le_bouton_plein_ecran.style.top = le_top;
			//le_bouton_plein_ecran.style.left= le_left;
			//console.log("bouton plein écran OK");
		}

		if(le_bouton_quittter){
			var le_top = (la_fenetre.offsetTop) + "px";
			var le_left = (la_fenetre.offsetLeft + la_fenetre.offsetWidth - le_bouton_quittter.offsetWidth) + "px";

			//le_bouton_quittter.style.top = le_top;
			//le_bouton_quittter.style.left= le_left;
			//console.log("bouton quitter OK");
		}

		if(le_bouton_telecharger){
			var le_top = (la_fenetre.offsetTop) + "px";
			var le_left = (la_fenetre.offsetLeft + la_fenetre.offsetWidth - 60) + "px";
			//console.log(le_left);

			//le_bouton_telecharger.style.top = le_top;
			//le_bouton_telecharger.style.left= le_left;
			//console.log("bouton télécharger OK: " + le_bouton_telecharger.style.top + " et " + le_bouton_telecharger.style.left);
		}
		
		if (le_bouton_corriger){
			var le_top = (la_fenetre.offsetTop) + "px";
			var le_left = (la_fenetre.offsetLeft + la_fenetre.offsetWidth - 90) + "px";
			//console.log(le_left);

			//le_bouton_corriger.style.top = le_top;
			//le_bouton_corriger.style.left= le_left;
			//console.log("bouton corriger OK: " + le_bouton_corriger.style.top + " et " + le_bouton_corriger.style.left);


			//<img id="corriger" src="'+ prefixe_image + '/img_remarque.png" style="width: 30px; height: 30px; cursor: pointer; position: fixed; z-index: 3; top: 141px; left: 913px;" onclick="">
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

function btn_precedent(alt){
	return '<img title="'+alt+'" alt="'+alt+'" src="'+ prefixe_image + '/img_retour.png" width = 25 height = 25>'
}

function avec_bouton_back(oui){

	if (oui){

		element_DOM('bouton_precedent').innerHTML = btn_precedent('<<')

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
	

	effacerSession('ressource_ouverte')
	effacerSession('nom_ressource_ouverte')
	effacerSession('categorie_ressource_ouverte')


	
	positionner_bulle_notif();
	positionner_pannel_notif();

	chargement(true);

	//console.log("on décharge...");

	$("#barre_verticale")[0].style.display = ""

	//on enlève tout SSI admin OU pas encore d'éléments
	if(recuperer("mon_type").includes("Admin")){
		element_DOM('liste_matieres').innerHTML = "";
	}

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
	afficher_discussions(false);

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



async function configurer_profil(){

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


	var st = JSON.parse(recuperer("mes_donnees"))["statut"]
	var mon_statut = st && st !== "Déconnecté" ? st : "En ligne"

	//on met le nom prénoms
	element_DOM('accueil_utilisateur').innerHTML = mes_donnees['Nom'] + " " + mes_donnees['Prénom(s)'] + "  -  " + affichage_classe //+ " " + statut_actuel(mon_statut);
	mettre_infos_matiere(false)

	
}


function statut_actuel(statut){
	//$("#user-status").remove()
	var className = statut.replaceAll(" ","-").toLowerCase()
	return '<span id="user-status"  class="statut '+className+'">'+statut+'</span>'
}

async function demande_changer_statut(e){
	e.preventDefault()
	e.stopPropagation()

	var valeur_initiale = e.target.innerText
	//console.log({valeur_initiale})
	var statuts_possibles = ['En ligne', 'Absent', 'Occupé']
	var elements_html = `
		<select name="statut-actuel">
			`+statuts_possibles.map(e => une_option_statut(e,valeur_initiale))+`
		</select> 

	`

	creer_mini_popup("Votre statut:", elements_html, "Mettre à jour", "maj_statut()")

	if(valeur_initiale === "En ligne"){

		var liste_destinataires = await liste_de_mes_destinataires(true)


		$("#online-list").remove()
		var a_ajouter = liste_destinataires.length > 0 ? `<div id="online-list">
		  	<h3>Retrouvez ci-dessous les utilisateurs actuellement en ligne.</h3>
			<div id="liste-en-ligne">
				`+liste_destinataires.map(e => "<div class='statut en-ligne' onclick='ecrire_a(this.id)' id='"+e+"'>"+e+"</div>").join("")+`
			</div>
		</div>` : `<div id="online-list" class="contenu_alerte_vide"><i>Aucun utilisateur en ligne pour l'instant.</i></div>`

		$("#mini_popup").append(a_ajouter)
	}
}

function une_option_statut(statut,valeur_initiale){
	return '<option value="'+statut+'"  '+  (statut===valeur_initiale ? "selected" : "") +'  >'+statut+'</option>'
}

function maj_statut(){
	chargement(true)
	var valeur = $('[name="statut-actuel"]').val() + ":manuel"
	var valeur_vue = valeur.split(":")[0]
	envoyer_mon_statut(valeur)

	//mettre en local
	//$('#accueil_utilisateur').append(statut_actuel(valeur_vue))
	$("#statut-container").html(statut_actuel(valeur_vue))
	$("#user-status").on("click",demande_changer_statut)
	afficher_alerte("Votre statut a été mis à jour.")

	res = JSON.parse(modifier_donnee_locale("mes_donnees","Identifiant",recuperer("identifiant_courant"),"statut",valeur_vue))
	//console.log(res)

	//fermer
	$('#mini_popup').remove()
	chargement(false)
}


initialisation();


function mettre_infos_matiere(oui){
	if(oui && $(".matiere_description").length === 0){
		$("#accueil_utilisateur").append('<div onclick="infos_matiere()" class="matiere_description sekooly-mode">Plus d\'informations</div>')
	}else{
		$(".matiere_description").remove()
	}
}


















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

	const affichage_choix_extrait_manuel = !mode_youtube && $('#drive_manuels').children().length > 0
	afficher_checkbox('choix_extrait_manuel', affichage_choix_extrait_manuel)
	

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
				

				//si jamais mode republication => supprimer les valeurs des sessions utiles
				effacerSession('ressource_ouverte')
				effacerSession('nom_ressource_ouverte')
				effacerSession('categorie_ressource_ouverte')
				effacerSession('republication')



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
				la_classe = recuperer('mon_type') === "Eleves" ? mes_donnees['Classe'] : la_matiere_chargee("Classe")
				la_matiere = recuperer('mon_type') === "Eleves" ? $("#accueil_utilisateur")[0].innerText : la_matiere_chargee("Matiere")

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
					"taille_fichier" : 0,
					"id_chapitre": $("select#id_chapitre")[0].value
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
				var texte_final = (est_un_lien_drive() ? "La ressource Sekooly a bien été rattachée à la plateforme." : "La vidéo youtube a bien été partagée.")
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
	element_DOM('block_yt_link').style.display = oui ? "" : "none";
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

	//forcément une date d'effet du fichier SI NON MANUEL
	if($('#categorie_choisie').val() !== 'Manuels' && ($('#date_effet_fichier')[0].value === "" || $('#date_effet_fichier')[0].value === null)){
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

        nom_fichier = nom_image_temporaire ? nom_image_temporaire : file.name.replaceAll(',', ' ').replaceAll('-', ' ') ;
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



				//n'accepter que les pdf pour les bulletins
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

    	afficher_eventuelle_alerte_effet()
    	afficher_eventuelle_alerte_limite()

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


		//au changement des select -> si nouvelle valeur alors on force l'affichage
		changement_quiz_ou_non()

		
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

		afficher_eventuelle_alerte_effet()


    });


	$('#la_date_limite').on("change", function() {

		afficher_eventuelle_alerte_limite()

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


    	attribution = '<form id="trimestre" ><b><label for="periode_bulletin">Trimestre:<select style="width: 60%;" name="periode_bulletin"><option value="PREMIER TRIMESTRE">PREMIER TRIMESTRE</option><option value="DEUXIEME TRIMESTRE">DEUXIEME TRIMESTRE</option><option value="TROISIEME TRIMESTRE">TROISIEME TRIMESTRE</option><option value="ANNUEL">ANNUEL</option></select></label></b></form>'
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
					la_classe = recuperer('mon_type') === "Eleves" ? mes_donnees['Classe'] : la_matiere_chargee("Classe") 
					la_matiere = recuperer('mon_type') === "Eleves" ? $("#accueil_utilisateur")[0].innerText :  la_matiere_chargee("Matiere") 
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


function fichier_devoir_ou_examen(){
	var categorie_fichier = $("#categorie_choisie")[0].value
	return (categorie_fichier === "Devoirs" || categorie_fichier === "Examens")
}

function afficher_eventuelle_alerte_effet(){
	//si c'est un devoir ou un examen
	if(fichier_devoir_ou_examen()){
		//récupérer le nombre de devoirs de la classe pour cette date
		//si nombre de devoirs > 0: afficher
		afficher_les_devoirs_de_la_date('date_effet', $('#date_effet_fichier')[0].value, 'mere_effet','nb_devoirs_effet')
		
	}else{
		$("#mere_effet")[0].style.display = ""
	}
	
}

function afficher_eventuelle_alerte_limite(){
	//si c'est un devoir ou un examen
	if(fichier_devoir_ou_examen()){
		//récupérer le nombre de devoirs de la classe pour cette date
		//si nombre de devoirs > 0: afficher
		afficher_les_devoirs_de_la_date('la_date_limite', $('#la_date_limite')[0].value, 'mere_limite','nb_devoirs_limite')
		
	}else{
		$("#mere_limite")[0].style.display = ""
	}
}





//afficher_les_devoirs_de_la_date('date_effet', '2021-05-22', 'mere_effet','nb_devoirs_effet')
//afficher_les_devoirs_de_la_date('la_date_limite', '2021-05-22', 'mere_limite','nb_devoirs_limite')
async function afficher_les_devoirs_de_la_date(champ_date_reference, valeur_champ_date_reference, id_mere, id_nb_devoirs){


	//récupérer TOUTES les matières de la classe
	var classe_id = JSON.parse(recuperer("mes_matieres")).find(e => e['ID_URL'] === recuperer("dossier_chargé"))['classe_id']
	//console.log(classe_id)
	var toutes_les_matieres = await rechercher("Matieres","classe_id",classe_id,"ID_URL")
	//console.log(toutes_les_matieres)

	//récupérer TOUS LES DEVOIRS/EXAMENS de ces matières	
	les_id_dossier_classe = '("'+toutes_les_matieres.map(e => e['ID_URL']).join('","') + '")'
	url = racine_data + 'Fichiers?' +apikey 
	url += '&categorie_fichier=in.("Devoirs","Examens")'
	url += '&'+champ_date_reference+'=eq.' + valeur_champ_date_reference
	url += '&id_dossier=in.' + les_id_dossier_classe
	
	//console.log(url)
	var nb_devoirs = get_resultat(url).length
	//console.log(nb_devoirs)

	if(nb_devoirs > 0){
		$("[id='"+id_nb_devoirs+"']")[0].innerText = nb_devoirs
		$("#"+id_mere)[0].style.display = "block"
	}else{
		//masquer par défaut 
		//si pas de devoirs
		$("#"+id_mere)[0].style.display = ""
	}


}





    















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

			if(e.target.nodeName === "BODY" || e.target.id === "gros_conteneur" || e.target.id ===  "liste_matieres" || e.target.id.includes("drive_")) {
				masquer_config_mode()
				fermer_side_bar()
			}
		}


		$(document).keyup(function(e) {
			//console.log("e.key:" + e.key);
			if (e.key === "Escape") {
				quitter_previsualisation();
				afficher_fenetre_rendudevoir(false);
				virer_le_pannel_notifs();
				afficher_ou_non_choix_fichier(false);
				masquer_config_mode()
			}


			/********************************************* DEPLOIEMENT ***********************************************/
			if(e.key === "¤" ){
				mode_edition_sql()
			}


		});


		async function mode_edition_sql(){
			//si admin
			//confirmation du mdp
			if(recuperer("identifiant_courant").includes('admin')){
				confirmation = prompt("Merci de saisir votre code d'accès.")
				if(confirmation){
					c = await recuperer_mes_donnees()
					if(!code_ok(c,confirmation)){

						afficher_alerte("Code d'accès erroné, mode administrateur non activé.")

					//tout est ok
					}else{
						zknrsbnfwz()
					}
				}
			}

		}

		function zknrsbnfwz(){
			vider_fenetre("Mode ADMIN - SQL")
			afficher_fenetre(true)
			$("#fenetre").append(contenu_admin())
			$("#query").focus()



		}


		function changer_alerte_exe(id_alerte, alerte_exe,couleur_finale,mode_ajout){
			
			if(!element_DOM("remarque-exe")) return false

			var nouvelle_remarque = document.createElement('div')
			nouvelle_remarque.id = id_alerte
			nouvelle_remarque.innerHTML = "<b>" + (new Date) + "</b> 	" + alerte_exe
			nouvelle_remarque.style.color = couleur_finale
			nouvelle_remarque.style.paddingBottom = "10px"

			if(!mode_ajout)	$("#remarque-exe")[0].innerHTML = ""

			//console.log(nouvelle_remarque)
			element_DOM("remarque-exe").appendChild(nouvelle_remarque)


			

			

		}

		function contenu_admin(){
			return `
				<div id="mode-admin" class="mode-admin"><div id="attention-admin" class="attention-admin">
					<b>
						<rouge>ATTENTION, SI VOUS ÊTES ICI SANS LE VOULOIR, QUITTEZ DIRECTEMENT CETTE FENÊTRE.</rouge>
					</b>
					<div>VOUS ÊTES EN MODE ADMINISTRATEUR.</div>
					</div>
					  
					<div>
					  	<label for="query">Votre requête SQL:</label>
					  	<textarea name="query" id="query" class="query"></textarea>
				  	</div>
				</div>

				<div class="au-centre">
					<div>
					  <input type="checkbox" id="mode-select" name="mode-select" checked="">
					  <label for="mode-select">En mode SELECT</label> 
					</div>
					<button class="btn-exe" onclick="exe_sql()" id="exe">Exécuter le code SQL</button>

					<button style="display:none;" class="btn-exe" id="deploy">Continuer</button>
					<div id="remarque-exe"></div>
				</div>

			`
		}

		async function exe_sql(){


			var tous = await recherche_initiale("Etablissements")

			//executer d'abord sur testo
			var data_testo = tous.find(e => e['nom_etablissement'] === "testo")

			await exe_sql_unitaire(data_testo)
			$("#deploy").show()
			chargement(false)	

			//si tout est ok : demander la confirmation pour sur le reste
			$("#deploy").off("click")
			$("#deploy").one("click",function(){
				
				$("#deploy").hide()
				$("#deploy").off("click")

				tous = tous.filter(e => e['nom_etablissement'] !== "testo")
				tous.forEach(async function(data){
					await exe_sql_unitaire(data,true)
				})

				chargement(false)	


			})

			
		}

		async function exe_sql_unitaire(data,mode_ajout){
			//console.log(data)

			chargement(true)

			var requete_sql = element_DOM("query").value
			var id_alerte = data['id_etablissement']
			var retour = '<span class="affichage_etablissement">' + data["nom_etablissement"] + '</span>' + ": " 
			try{
				var resultat = await execute_sql(data['racine_data'], requete_sql, element_DOM("mode-select").checked )
				retour += JSON.stringify(resultat)
				var couleur_finale = "green"
			}catch(e){
				retour += JSON.stringify(e)
				var couleur_finale = "red"
			}
			

			changer_alerte_exe(id_alerte, retour,couleur_finale,mode_ajout)

		}

		//au clic de l'icône: si la main est dispo: on ouvre si c'est fermé, on ferme sinon
		function charger_les_topics(forcing){
			if (impossible_de_cliquer() && !forcing) return -1;

			est_deja_ouvert = element_DOM('fenetre').style.visibility === 'visible';
			if(forcing) est_deja_ouvert = false;

			//console.log("on va ouvrir:"+!est_deja_ouvert);

			afficher_fenetre(!est_deja_ouvert);
			return recuperer_les_topics(false);
			
		}


		function html_boutons_fenetre(nom_fonction_actualiser, nom_fonction_ajouter, texte_aide){
			return '<div id="entete-fenetre" style="text-align: center;"> <img alt="actualiser"  src="'+ prefixe_image + '/img_actualiser.png" onclick="'+nom_fonction_actualiser+'" id="actu_topics" class="image-en-haut-fenetre"> <img alt="ajouter" src="'+ prefixe_image + '/img_ajout.png" onclick="'+nom_fonction_ajouter+'" id="nouvelle_discu" class="image-en-haut-fenetre"></div><div id="entete-fenetre" style="text-align: center;color: #c1c1c1;font-size: 13px;border-bottom-width: 1px;border-bottom-style: ridge;">'+texte_aide+'</div>';
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

			var nouveau_message = '<form id="mon_formulaire" autocomplete="off" class="edition"><label id="label" for="titre_question">Titre: </label><input type="text" id="titre_question" maxlength="50" style="width: 100%;">	<br><br><label id="label" for="contenu_question">Votre message: </label><textarea id="contenu_question" maxlength="1700" style="width: 100%;height: 70%;resize: none;font-size: 13px;"></textarea><div id="nb_max_div" style="margin-left: 90%;margin-top: 0%;font-size: 10px; display:none;"> <font id="nb_max"> 0 / 1700</font> </div><div id="mes_boutons" style="text-align: center;padding: 1%;display: block ruby;"><button  class="bouton_sekooly sekooly-mode-background" type="button" id="Annuler" onclick="recuperer_les_topics(false)"> Annuler </button><button  class="bouton_sekooly sekooly-mode-background" type="button" id="envoi" onclick="envoyer_le_topic()"> Poster </button></div><div id="msg_erreur" style="text-align: center;padding: 1%;color: green;"> </div></form>';


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
			ajouter_un_commentaire(mon_identifiant,mon_role,contenu_poste_bis,date,"nouveau_com");
			//console.log("c'est ajouté");

			//on enlève et on remet le bloc commentaire
			/*
			ajouter_bloc_commenter(false);
			ajouter_bloc_commenter(true);
			*/
			ajouter_bloc_commenter(false, "ajouter_mon_com()", "Commenter");
			ajouter_bloc_commenter(true, "ajouter_mon_com()", "Commenter");



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



			if(mon_titre!=="" && mon_contenu!=="" &&  !saisie_est_vide()           ){

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
				la_classe = recuperer('mon_type') === "Eleves" ? mes_donnees['Classe'] : la_matiere_chargee("Classe") 
				la_matiere = recuperer('mon_type') === "Eleves" ? $("#accueil_utilisateur")[0].innerText : la_matiere_chargee("Matiere") 
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

		function vider_fenetre(titre_fenetre,est_visio, save_button_function, avec_bande_noire){
			element_DOM('fenetre').innerHTML = '';

			//console.log("on a réaffiché");

			var clique_quitter = est_visio ? '' : 'onclick="quitter_previsualisation()"';

			//on ajoute le bouton quitter + en-tête
  			var bouton_quitter = '<div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="'+ prefixe_image + '/quitter.png" id="bye_prev" class="bye_prev" '+clique_quitter+' > </div>';

  			var le_titre = "";
  			if(titre_fenetre) le_titre = '<div class="titre_fenetre" id="titre_fenetre">'+ titre_fenetre + '</div>';
  			if(avec_bande_noire) le_titre += mobile_ou_tablette() ? '<div class="top-yt"></div>' :  '<div class="yt-video"></div>'

			//on ajoute le bouton plein écran
  			var plein_ecran = '<div class="fullscreen-btn" id="conteneur_plein_ecran" > <img alt="plein écran" style="position: fixed;" id="pleinecran" src="'+ prefixe_image + '/img_petitecran.png" onclick="switch_mode()" class="pleinecran"> </div>'

  			//on rajoute tout
  			var elements = document.createElement('div');
  			elements.innerHTML = bouton_quitter + le_titre + plein_ecran;

			while(elements.firstChild) {
			    element_DOM('fenetre').appendChild(elements.firstChild);
			}

			//alert(save_button)
			avec_sauvegarde(save_button_function)

			//faire le bon affichage de la fenêtre
			ajuster_boutons_fenetre();
			initialisation_bouton();


			//si clic sur bande : clic impossible
			au_clic(".yt-video, .top-yt", 'alert("❌Impossible de cliquer sur les éléments de la vidéo youtube: utilisez plutôt les boutons de contrôle en bas de votre écran.")')
			


		}

		function mobile_ou_tablette(){
			let check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		}


		function charger_question(id_topic,forcing, scroller_en_bas){

			if(id_topic){

				stocker("topic_chargé",id_topic)

				//on récupère tous les commentaires du topic
				//console.log('on recupere les coms du topic n° ' + id_topic + '...');
				recuperer_les_coms(id_topic, forcing,scroller_en_bas);

				

			}

			return true

		}

		function recuperer_les_coms(id_topic_long, forcing, scroller_en_bas){

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

					//trier par horodateur CROISSANT

					les_coms = le_poste
					if (les_coms !== undefined && les_coms !== null && les_coms.length > 0 ){
						//console.log("mes commentaires : " + JSON.stringify(les_coms));
					
						stocker("topic_chargé",id_topic.toString());
						stocker("les_coms",JSON.stringify(les_coms));
						traitement_coms(id_topic, scroller_en_bas);
					}
					
				})

			}else{
				//on traite directement
				//console.log('on n\'actualise pas');
				traitement_coms(id_topic, scroller_en_bas);
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
			var entete_poste = '	<div id="entete_poste" style="display: flex;overflow-wrap: anywhere;"><img id="<<" src="'+ prefixe_image + '/img_retour.png" style="width: 30px;margin: 2%;cursor:pointer;height: 30px;"  onclick="recuperer_les_topics(false)"> <div id="titre_du_poste" style="font-weight: bold;margin: 2%;font-size: 25px;">' + titre_poste + '</div></div>';

			var entete = document.createElement('div');
			entete.innerHTML = entete_poste;
			element_DOM('fenetre').appendChild(entete);

			var bloc_poste = '<div id="bloc_poste" style="padding: 2%;display: block;overflow-wrap: anywhere;border-bottom-style: solid;"><div class="auteur_du_poste sekooly-mode" >' + auteur_poste +' (' + role_auteur_poste + ')</div><h id="contenu_poste" style=""> '+ contenu_poste+'</h><h class="date_fin"> ' + date + '</h></div>';




			var emplacement_commentaire = '<div id="emplacement_commentaire"></div>';

			

			//tout ajouter
			var les_commentaires = document.createElement('div');
			les_commentaires.id ="liste_des_coms";
			les_commentaires.style.overflow = "hidden auto";
			les_commentaires.style.height = "85%";
			les_commentaires.innerHTML = bloc_poste + emplacement_commentaire ;

			element_DOM('fenetre').appendChild(les_commentaires);
		
			ajouter_bloc_commenter(true, "ajouter_mon_com()", "Commenter");


		}

		function ajouter_bloc_commenter(oui, fonction_ajout_commentaire, intitule_bouton){
			
			//element_DOM('maquestion').src="";

			if (oui){

				var bloc_commenter = '<div id="bloc_commenter"><textarea id="mon_com" style="display:inline-block; width:100%; resize: unset; min-height:200px; overflow-y:hidden;" placeholder="Votre commentaire..." maxlength="1500"></textarea><button class="sekooly-mode-background" id="envoicommentaire" onclick="'+fonction_ajout_commentaire+'" style="height: 30px;">'+intitule_bouton+'</button></div>';

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


		function traitement_coms(id_topic_str, scroller_en_bas){

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

			var id_com = 0
			les_coms.forEach(function(valeur){
				if (valeur !== null){
					//console.log(valeur)
					var auteur_poste = valeur['Identifiant'].toUpperCase();
					var role_auteur_poste = valeur['Role'];
					var contenu_poste = valeur['Votre_commentaire'];
					var date = afficher_date(valeur['Horodateur']);
					id_com = valeur['id_com'];

					ajouter_un_commentaire(auteur_poste,role_auteur_poste,contenu_poste,date,id_com);
				}
			});

			if(scroller_en_bas){
				//scroller tout en bas
				var position_scroll = $("#bloc_commenter")[0].offsetTop - $("#bloc_commenter")[0].offsetHeight;
				//console.log(position_scroll)
				$("#liste_des_coms").scrollTop(position_scroll)

				changer_couleur_temporairement(id_com,"un_commentaire","#5e5e5e",700);	
			}

			chargement(false);
		}

		function ajouter_un_commentaire(auteur_poste,role_auteur_poste,contenu_poste,date,id_com){

			contenu_poste = decodage(contenu_poste);

			var un_com = '<div id="'+id_com+'" class="un_commentaire"><div class="auteur_du_poste sekooly-mode">'+ auteur_poste + ' ('+  role_auteur_poste  +')</div><h id="contenu_poste" style=""> ' + contenu_poste + '</h><h class="date_fin"> '+ date + '</h></div>';

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
			var contenu_poste = recuperer_html_saisie_riche().trim() //element_DOM('mon_com').value.trim();

			contenu_vide = saisie_est_vide()
			//console.log({contenu_poste,contenu_vide})
			

			//on continue ssi contenu poste NON VIDE
			if (contenu_poste!=="" &&  !contenu_vide  )  {
				var mon_identifiant = recuperer('identifiant_courant').toUpperCase();
				
				

				var date = afficher_date(maintenant());

				//envoyer le commentaire sur le serveur
				id_topic = recuperer('topic_chargé');
				//console.log(id_topic)
				//console.log(contenu_poste)
				envoyer_le_com(id_topic,mon_identifiant,mon_role,contenu_poste,date);
			}else{
				alert("Votre commentaire ne peut pas être vide.")
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

			element_DOM('fenetre').innerHTML += html_boutons_fenetre("actualiser_topics()","ajouter_une_discu()", "Pour commenter, cliquez sur une question/discussion");


		    if (forcing ||recuperer("les_topics") === null || recuperer("les_topics") === ''){
				
		    	nom_table = "Topic"
		    	nom_champ_reference = "Id_classe_matiere"
		    	valeur_champ_reference = recuperer("dossier_chargé")
		    	nom_champ_a_chercher = ""

		    	//console.log("Récupérons d'abord...")
		    	return rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher).then(les_topics => {
		    		//console.log(les_topics)
		    		les_topics.sort(function tri_ordre_chrono_decroissant(a, b) {
						//return moment(b.Horodateur, "DD/MM/YYYY HH:mm:ss")  - moment(a.Horodateur, "DD/MM/YYYY HH:mm:ss")
						return convertir_en_date(b.Horodateur) - convertir_en_date(a.Horodateur)
					});
		    		//console.log(les_topics)

		    		stocker("les_topics",JSON.stringify(les_topics));
		    		traitement_topics();
		    		chargement(false);
	    		}).catch(e => {
	    			console.error(e)
	    			alert("Impossible de récupérer les questions/discussions de cette matière. Vérifiez que vous êtes toujours connecté à internet, ou réessayer plus tard.")
	    			chargement(false);
	    		})
	    	


			}else{
				//console.log("traitement direct")
				//on traite direct les données
				traitement_topics();
				chargement(false);
				return true

			}

			
		}

		function traitement_topics(){

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


					var icone_poubelle = '<span id="bye' + id_topic + '"><img alt="supprimer" class="byebye" onclick="event.stopPropagation(); clic_de_poubelle_topic(this)" src="'+ prefixe_image + '/img_trash.png" style="width: 20px;position: relative;float: right;" id="bye' + id_topic + '"></span>';

					//si élève/prof et le topic n'est pas le sien: pas d'icone poubelle
					if(!recuperer('mon_type').includes("Administration") && valeur['Identifiant'] !== recuperer('identifiant_courant').trim()) icone_poubelle = "";

					//console.log("l'icone poubelle = " + icone_poubelle + "\n")

					var dans_fenetre_str = '<ul class="bloc_topic" onclick="clic_de_topic(this)" id="' + id_topic + '"> '+ icone_poubelle + ' <p id="' + id_topic + '" class="important-p"> <b class="contenu_question" id="' + id_topic + '"> '  + titre +'  </b> <p id="' + id_topic + '" class="contenu_question"> ' + contenu + '</p><i class="petite_ecriture"> <h id="' + id_topic + '"><u id="' + id_topic + '"> Nombre de réponses</u>: <u class="nb_com_actuel" id="' + id_topic + '">' + nb_coms + '</u> </h> <h id="' + id_topic + '">  &emsp; <u id="' + id_topic + '"> Publié le</u>: ' + date + ' </h><h id="' + id_topic + '">  &emsp; <u id="' + id_topic + '"> Publié par</u>: ' + auteur + ' </h></i></ul>';
					
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

	var confirmation_suppression = confirm("⚠️Êtes-vous sûr de vouloir supprimer ce fichier ? Cette action est irréversible.");

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
		nom_classe = la_matiere_chargee("Classe")

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

	/*
	console.log({
		nom_table:nom_table,
		nom_champ_reference:nom_champ_reference,
		valeur_champ_reference:valeur_champ_reference,
		nom_champ_a_chercher:nom_champ_a_chercher		
	})
	*/

	rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher).then(id_googlecalendar => {
		id_googlecalendar = id_googlecalendar[0]['id_googlecalendar']
		var la_source = "https://calendar.google.com/calendar/embed?wkst=2&bgcolor=%23ffffff&ctz="+my_ctz()+"&src=" + id_googlecalendar + "&color=%234285F4&showPrint=0&showTabs=0&showCalendars=0&showTitle=1&mode=WEEK&showTz=0";
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
		//console.log("vous avez cliqué droit sur " + e.target.id)
	})



	chargement(false);
	
}

function ajouter_la_notif(la_notif,index,mode_notif){
	//console.log(la_notif['Motif_notification']);

	var Type_notif=la_notif['Type_notif'];
	var Id_source=la_notif['Id_source'];
	var id_notif=la_notif['id_notif'];
	var Identifiant_derniere_modif=la_notif['Identifiant_derniere_modif'].toUpperCase();
	var Identifiant_originaire = la_notif['Identifiant_originaire'].toUpperCase();
	var Role_derniere_modif=la_notif['Role_derniere_modif'];
	

	var Horodateur=afficher_date(la_notif['Horodateur']);
	var Date_derniere_modif=afficher_date(la_notif['Date_derniere_modif']);

	//si discussion et Horodateur !== Date_derniere_modif -> faudra ouvrir le topic
	
	var ouvrir_topic = Type_notif==="discussion" && Horodateur !== Date_derniere_modif	


	var la_matiere_concernee = la_notif['Classe_matiere'].substring(la_notif['Classe_matiere'].lastIndexOf("|") + 1, la_notif['Classe_matiere'].lastIndexOf(")"));
	var la_classe_concernee = recuperer('mon_type') !== "Eleves" ? la_notif['Classe_matiere'].substring(la_notif['Classe_matiere'].lastIndexOf("(") + 1, la_notif['Classe_matiere'].lastIndexOf("|")) : "";
	var intitule_notif = la_notif['Intitulé'].slice(0,20).trim();
	if(intitule_notif.length < la_notif['Intitulé'].length) intitule_notif+="...";

	var id_dossier = la_notif['Id_classe_matiere'];

	var ma_notif = document.createElement('div');
	ma_notif.className = "une_notif";
	ma_notif.id = Type_notif === "visio" ? id_notif : Id_source;
	ma_notif.setAttribute('id_notif',id_notif.toString());
	ma_notif.onclick = function(e){
		chargement(true);
		clic_de_notif(Type_notif,ma_notif.id,id_dossier,ma_notif.getAttribute('id_notif'),ouvrir_topic);
	};


	//si PAS listé ou DATE > ma derniere date de consultation
	la_date_derniere_modif = convertir_en_date(la_notif['Date_derniere_modif'])
	ma_date_consultation = convertir_en_date(recuperer("ma_date_consultation"))


	ma_notif.className =( liste_notifs_lues.includes("," + id_notif + ",") && la_date_derniere_modif <= ma_date_consultation ) ? "une_notif" : "non_lu"
	//si darkmode : rajouter darkmode-une_notif
	if(recuperer("mode_nuit_oui") === "oui"){
		ma_notif.className += " darkmode-une_notif"
	}


	var identifiant_notif = '<b  class="sekooly-mode" >' + Identifiant_derniere_modif + ' ('+Role_derniere_modif+') </b>';
	var contenu_notif = contenu_notification(Type_notif,la_matiere_concernee,la_classe_concernee,Identifiant_originaire,Identifiant_derniere_modif, {'Horodateur':Horodateur,'Date_derniere_modif':Date_derniere_modif},intitule_notif);
	var intitule = ' - <i><b class="sekooly-mode-darker">'+intitule_notif  +'</b></i>'
	var icone_notif = '<span> <img src=' +  choix_image(Type_notif)  + ' class="icone_notif"> </span>'
	var date_grise = '<div> '+icone_notif+' <i class="date_fin"> ' + Date_derniere_modif+ '  </i></div>';




	ma_notif.innerHTML = identifiant_notif + contenu_notif + intitule + date_grise;
	element_DOM('pannel_notif').appendChild(ma_notif);

	if(mode_notif) return ma_notif.innerText

}

function clic_de_notif(type_notif,id_source,id_dossier,id_notif,ouvrir_topic){
	
	//commenter
	envoyer_ma_date_de_consultation()

	/*
	console.log({
		type_notif:type_notif,
		id_source:id_source,
		id_dossier:id_dossier,
		id_notif:id_notif,
		ouvrir_topic:ouvrir_topic
	})
	*/
	
	//envoyer cet ID
	//console.log("on va cliquer sur " + id_notif)
	if(id_notif) jai_lu(id_notif, true)
	//console.log("on a cliqué sur "+ id_notif)
	
	//console.log(id_notif)

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
			notif_discussion(id_source,id_dossier,ouvrir_topic);
		}else if(type_notif === "devoir"){
			notif_devoir(id_source,id_dossier);
		}else if(type_notif === "visio"){
			notif_visio(id_dossier);
		};


		//on affiche tous les fichiers avec le bon filtre
		var id_mode = id_mode_affichage()
		filtrer_avec_le_bon_filtre(id_mode)
		chargement(false)
	},500)


}

async function notif_visio(id_dossier){
	//charger si pas encore ouvert
	stocker_temp('dossier_chargé',id_dossier);
	init = await initialisation()
	//console.log(init)
	rejoindre_visio()
}

function notif_fichier(id_source,id_dossier){

	//changer dossier_chargé
	//changer fichier_ouvert
	//puis chargement a l'arrivée
	stocker_temp('dossier_chargé',id_dossier);
	stocker('fichier_ouvert',id_source);
	window.location.href = window.location.href;			
}

function notif_discussion(id_source,id_dossier,ouvrir_topic){
	
	//charger dossier à charger
	stocker_temp('dossier_chargé',id_dossier);
	//pas d'autres fenêtre 
	stocker('fichier_ouvert','');

	//actualiser
	initialisation().then(function(){
		
		//console.log("initialisation terminée")
		
		//ouvrir les topics
		charger_les_topics(true).then(async function(){
			//console.log("charger_les_topics OK")
			if($('#'+id_source+'.bloc_topic').length>0){
				
				//console.log('on y est!!!')


				//nouvelle couleur topic (temporaire)
				if(!ouvrir_topic){
					//var position_scroll = $('#'+id_source+'.bloc_topic').offset().top;
					var position_scroll = $("#"+id_source+".bloc_topic")[0].offsetTop - $("#"+id_source+".bloc_topic")[0].offsetHeight;
					$("#div_liste_topics").scrollTop(position_scroll);
					await changer_couleur_temporairement(id_source,"bloc_topic","#ce7470",700);	
				}else{

					//ouvrir le topic
					//le false = pas de forcing
					//le true = scroller tout en bas
					await charger_question(id_source,false,true);


				}
				
			
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

		//console.log("initialisation terminée")

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
	return type_notif==="fichier" ? prefixe_image + "/img_ajout.png"
	: type_notif==="discussion" || type_notif==="commentaire" ? prefixe_image + "/question.png"
	: type_notif==="visio" || type_notif==="commentaire" ? prefixe_image + "/img_visio.png"
	: type_notif==="devoir" ? prefixe_image + "/img_devoirs.png" : "";
}

function contenu_notification(type_notif,la_matiere_concernee,la_classe_concernee,Identifiant_originaire,Identifiant_derniere_modif, objet_dates, intitule_notif){
	//console.log(type_notif);

	//si horodateur identique -> création
	//si différents -> commentaires
	var phrase_discussion = objet_dates['Horodateur']===objet_dates['Date_derniere_modif'] ? " a créé une discussion dans " : " a récemment commenté dans "

	var phrase_devoir = Identifiant_originaire===Identifiant_derniere_modif ? " a rendu un devoir dans " : " a laissé une remarque sur un devoir dans "

	var phrase = type_notif==="fichier" ? " a publié un nouveau fichier dans "
	: type_notif==="discussion" ? phrase_discussion
	: type_notif==="devoir" ? phrase_devoir
	: type_notif==="visio" ? (Identifiant_derniere_modif.includes(",") ? " ont " : " a ")  + (intitule_notif === "debut" ? "rejoint" : "quitté") +" une visioconférence dans "
	: " a récemment intéragi dans ";

	if (la_classe_concernee) la_classe_concernee = " (" + la_classe_concernee + ")";

	return phrase + " <b>" + la_matiere_concernee + la_classe_concernee + '</b>';

}



function vider_les_notifs(){

	var tout_marquer_html = '<div style="display: flex;"><span class="tout_marquer" id="rien_lire" onclick="executer_ne_rien_lire()">Tout marquer comme NON LU❌</span><span class="tout_marquer" id="tout_lire" onclick="executer_tout_lire()">Tout marquer comme LU✅</span></div>'
	element_DOM('pannel_notif').innerHTML= tout_marquer_html+'<div class="filtres_notifs un_filtre_notif" height="50px" style=""><div class="un_filtre_notif"  id="filtre_tous">Tous</div><div class="un_filtre_notif"><img alt="Discussions" src="'+ prefixe_image + '/question.png" class="icone_filtre_notif"></div><div class="un_filtre_notif" style=""><img alt="Visio" class="icone_filtre_notif" style="" src="'+ prefixe_image + '/img_visio.png"></div><div class="un_filtre_notif"><img alt="Devoirs" src="'+ prefixe_image + '/img_devoirs.png" class="icone_filtre_notif"></div><div class="un_filtre_notif"><img alt="Fichiers" src="'+ prefixe_image + '/img_ajout.png" class="icone_filtre_notif"></div></div>';

		

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
	envoyer_ma_date_de_consultation()

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

	if(recuperer("mode_nuit_oui") === "oui"){
		une_notif.className += " darkmode-une_notif"
	}


	if(envoyer_cette_non_lecture) envoyer_ce_que_jai_lu()
}

function jai_lu(id_notif, envoyer_cette_lecture, une_notif){
	
	//console.log(liste_notifs_lues)	
	//console.log("✅lire '" + id_notif + "'")


	//stocker dans la variable globale
	liste_notifs_lues = !liste_notifs_lues.includes(","+id_notif+",") ? liste_notifs_lues + id_notif + "," : liste_notifs_lues

	//console.log(liste_notifs_lues)
	//console.log("\n\n")

	//virer les classes non lues
	//une_notif = $("#pannel_notif > [id='"+id_notif+"']")[0]
	if(une_notif){
		une_notif.className = "une_notif"


		//si darkmode : rajouter darkmode-une_notif
		if(recuperer("mode_nuit_oui") === "oui"){
			une_notif.className += " darkmode-une_notif"
		}

	} 

	//envoyer cette notif 
	if(envoyer_cette_lecture) {
		envoyer_ce_que_jai_lu()
		envoyer_ma_date_de_consultation()
	} 


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
	return patch_resultat_asynchrone(url, nouvelle_liste).then(function(e){
		return liste_notifs_lues
	})


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
	: nom_filtre.includes('img_visio') ? 'img_visio'
	: "div"; //on recuperera tout

	var nouvelle_liste_notifs = $(".non_lu, .une_notif").filter(function(valeur){
		//masquer tout ce qui ne respecte pas la confition
		$(this)[0].style.display = $(this)[0].innerHTML.includes(condition_filtre) ? "" : "none";
		return $(this)[0].innerHTML.includes(condition_filtre);

	});

	//console.log(nouvelle_liste_notifs.length)
}



function recuperer_notifs(sans_msgs){

	chargement(true);

	if(!recuperer('mes_donnees')) return -1;



	//notifs des messages
	if(!sans_msgs) recuperer_msgs(true,true)


	var ma_classe = JSON.parse(recuperer('mes_donnees'))['Classe'];
	var identifiant = recuperer('identifiant_courant');
	var mon_type = recuperer('mon_type').split("_")[0]
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
		
		return rechercher_notifs_prof(150).then(les_notifs => {
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
		return rechercher(nom_table, nom_champ_reference, valeur_champ_reference, "",150).then(async function(les_notifs){
			mes_notifs = les_notifs.filter(function(valeur,index){
				return valeur['Identifiant_derniere_modif'] !== recuperer('identifiant_courant')
			})

			//si eleve -> on vire les autres devoirs des eleves
			//alert(mon_role)
			if(mon_role === "Eleve"){
				mes_notifs = mes_notifs.filter(function(valeur,index){
					//si je ne suis pas originaire ET c'est un devoir -> on ne garde pas
					return !(valeur['Identifiant_originaire'] !== recuperer('identifiant_courant') && valeur['Type_notif'] ==='devoir' )
				})				

				//alert(mes_notifs.length)
				mes_notifs = await rajouter_les_notifs_communes(mon_role, mes_notifs)
				//alert(mes_notifs.length)
			}



			//console.log(mes_notifs)
			stocker_mes_notifications(mes_notifs);
			
			//affiche la bulle SSI nouvelles notifs stockées
			afficher_bulle_notifs();
		})



	}




}

async function rajouter_les_notifs_communes(mon_role, mes_notifs){

	if(mon_role === "Eleve"){

		//si eleves : rajouter les 50 dernières notifs du commun
		var notifs_supplementaires = await rechercher("Notifs", "Classe", JSON.parse(recuperer("mes_donnees"))["Cycle"], "",50)
		//alert(notifs_supplementaires)
		//console.log(notifs_supplementaires)
		mes_notifs = [...mes_notifs, ...notifs_supplementaires]

		//trier par derniere modification
		mes_notifs = mes_notifs.sort(tri_ordre_chrono_decroissant_Date_derniere_modif)


	}else{
		var notifs_supplementaires = []
		//alert("????" + notifs_supplementaires)
	}

	
	return mes_notifs
}

function stocker_mes_notifications(mes_notifs){
	
	//dans l'ordre chronologique DECROISSANT
	//ORDRE DECROISSANT
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
	var mon_type = recuperer('mon_type').split("_")[0]

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




	/********************************** NOTIFS STANDARD ***********************************/
	var mes_notifs = JSON.parse(recuperer('mes_notifs'));
	//console.log(mes_notifs)
	var ma_date_consultation = recuperer('ma_date_consultation');


	
	liste_notifs_lues = recuperer_liste_notifs_lues()
	if(!liste_notifs_lues) liste_notifs_lues = ","


	//console.log(liste_notifs_lues)


	//on filtre pour afficher dans la bulle que celles dont date modif > date dernière consultation
	//alert(JSON.stringify(mes_notifs))
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
		//OU
		//si PAS listé ou DATE > ma derniere date de consultation
		return (!liste_notifs_lues.includes("," + valeur['id_notif'] + ",") || Date_derniere_modif > Date_consultation)
		
	});

	//console.log(nouvelles_notifs);

	var nombre = nouvelles_notifs.length;
	if(nombre>99) nombre = "+99";
	//console.log(nombre)
	element_DOM('bulle_notif').style.display = nombre > 0 ? "block" : "";
	element_DOM('bulle_notif').innerText = nombre;
	








	/*************************** NOTIFS DES MESSAGES ***************************/
	var mes_msgs = JSON.parse(recuperer('mes_msgs'));
	if(mes_msgs){
		var nouveaux_msgs = mes_msgs.filter(e => !liste_notifs_lues.includes("," + e['id_msg'] + ","))
		nombre_msgs = nouveaux_msgs.length
		if(nombre_msgs>99) nombre_msgs = "+99";
		//console.log(nombre)
		element_DOM('bulle_notif_msg').style.display = nombre_msgs > 0 ? "block" : "";
		element_DOM('bulle_notif_msg').innerText = nombre_msgs;
	}else{
		nombre_msgs =0
	}






	chargement(false);
	return [nombre, nombre_msgs]


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

	if(element_DOM('bulle_notif_msg'))
		$("#bulle_notif_msg")[0].style.left =  (22+$("#recup_msgs")[0].offsetLeft) + "px";
	
}

function positionner_pannel_notif(){	
	if($("#pannel_notif")[0] && $("#recup_notifs")[0]){
		$("#pannel_notif")[0].style.left =  (22+$("#recup_notifs")[0].offsetLeft-$("#pannel_notif")[0].offsetWidth) + "px";
		$("#pannel_notif")[0].style.top =  $("#recup_notifs")[0].offsetTop;	
	}

	
}

function mettre_en_place_les_notifications(){

	recuperer_notifs();

	positionner_bulle_notif();
	positionner_pannel_notif();

	$(window).on('resize', function(){

	//window.addEventListener("resize", function(){
    	positionner_bulle_notif();
		positionner_pannel_notif();
	});
}




	

	









/*************************** VISIO *****************************/

function rejoindre_visio(id_matiere_visio,sans_alerte,valeur_id_div_visio,pas_de_initialisation){

	var mon_type = recuperer('mon_type').split("_")[0]

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

	id_matiere_visio = id_matiere_visio ? id_matiere_visio : recuperer("dossier_chargé")

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
	    roomName: id_matiere_visio,
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
	

	var id_notif_visio = id_matiere_visio+ "-visio"


	
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
			//je notifie
			envoyer_mon_log_visio(moi.toLowerCase(), classe, "fin",mon_role, id_matiere_visio);

			//je retire mon nom des participants si la notif de visio existe et que j'y suis
			var visio_existante = la_visio_existante(id_notif_visio)
			if(visio_existante.length > 0){

				visio_existante = visio_existante[0]

				//je notifie SSI je suis le dernier participant
				var je_suis_dernier_participant = api.getNumberOfParticipants() <= 1
				if(je_suis_dernier_participant){

					nouvelle_notif = {
						"id_notif": id_notif_visio,
						"Intitulé" : "fin",
						"Identifiant_derniere_modif" : recuperer('identifiant_courant'),
						'Role_derniere_modif' : mon_role,

					}
					actualiser("Notifs","id_notif",id_notif_visio,nouvelle_notif)

				//pas le dernier participant -> je me retire de la liste
				}else{

					if(visio_existante['Identifiant_derniere_modif'].includes(recuperer("identifiant_courant"))){
						
						participants_tableau = visio_existante['Identifiant_derniere_modif'].split(",")
						//alert(visio_existante['Identifiant_derniere_modif'])



						var participants = supprimer_element_de_la_liste(participants_tableau,recuperer("identifiant_courant")).join(',')
						//alert(participants)


						nouvelle_notif = {
							"id_notif": id_notif_visio,
							"Intitulé" : "debut",
							"Identifiant_derniere_modif" : participants,
							'Role_derniere_modif' : mon_role,
						}
						actualiser("Notifs","id_notif",id_notif_visio,nouvelle_notif)
					}

				}

			}


			api.dispose();			
			quitter_previsualisation();
		}

	})


	//si professeur
	//si je reste plus de 5 secondes : notifier que je suis présent			
	setTimeout(function(){
		//console.log("je suis resté plus de 5 secondes.")
		var date_heure_actuelle = maintenant()
		var date_actuelle = date_heure_actuelle.split(" ")[0]
		var mon_cycle = JSON.parse(recuperer("mes_donnees"))['Cycle']
		var les_matieres = JSON.parse(recuperer("mes_matieres"))

		//alert(id_matiere_visio)
		var la_classe_matiere = les_matieres.filter(e => e['ID_URL'] === id_matiere_visio)[0]["Classe_Matiere"]
		

		var nouvelle_notif = {
			"id_notif": id_notif_visio,
			"Horodateur": date_heure_actuelle,
			"Type_notif" : "visio",
			"Id_source" : id_matiere_visio,
			"Intitulé" : "debut",
			"Identifiant_originaire": recuperer('identifiant_courant'),
			"Role_originaire": mon_role,
			"Identifiant_derniere_modif" : recuperer('identifiant_courant'),
			'Role_derniere_modif' : mon_role,
			'Classe' : la_classe_matiere.split('|')[0].replace("(",""),
			'Classe_matiere' : la_classe_matiere,
			'Id_classe_matiere' : id_matiere_visio,
			'Date_derniere_modif' : date_heure_actuelle,
			'Cycle' : mon_cycle
		}

		//console.log(nouvelle_notif)
		//si la notif de la classe existe déjà:
		var visio_existante = la_visio_existante(id_notif_visio)
		var visio_deja_existante = visio_existante.length > 0
		
		//alert(url + ": " +visio_deja_existante)
		if(visio_deja_existante){

			visio_existante = visio_existante[0]

			//on modifie donc pas de Horodateur, Type_notif, id_source, identifiant_originaire, role originaire, classe, clasee matiere, id classe matiere, cycle
			delete nouvelle_notif["Horodateur"];	
			delete nouvelle_notif["Type_notif"];	
			delete nouvelle_notif["Id_source"];	
			delete nouvelle_notif["Identifiant_originaire"];	
			delete nouvelle_notif["Role_originaire"];	
			delete nouvelle_notif["Classe"];	
			delete nouvelle_notif["Classe_matiere"];	
			delete nouvelle_notif["Id_classe_matiere"];
			delete nouvelle_notif["Cycle"];

			//si initialement, c'était FIN: c'est moi uniquement le participant
			//si c'était DEBUT: je m'ajoute SSI je n'y suis pas déjà
			//rajouter mon nom dans identifiant derniere modif
			nouvelle_notif['Identifiant_derniere_modif'] = visio_existante['Intitulé'] === "fin" ? recuperer("identifiant_courant") : (visio_existante['Identifiant_derniere_modif'].includes(recuperer("identifiant_courant")) ? visio_existante['Identifiant_derniere_modif'] : visio_existante['Identifiant_derniere_modif'] + "," + recuperer("identifiant_courant"))

			//nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data
			actualiser("Notifs","id_notif",id_notif_visio,nouvelle_notif)
			//console.log(nouvelle_notif)

		}else{
			//si personne n'a jamais créé de notif visio pour aujourdhui pour cette classe-matiere -> on la crée
			//console.log(nouvelle_notif)
			ajouter_un_element("Notifs",nouvelle_notif)
		}
		

		//ajouter le watermark quand c'est prêt
		$(".mon_logo_jitsi").remove()
		$('<a target="_blank" class="mon_logo_jitsi" href="https://sekooly.com"></a>').insertBefore( "#visio > " )
		

	}, 5000);

}

function la_visio_existante(id_notif_visio){
	var url = racine_data + "Notifs?Type_notif=eq.visio&id_notif=eq." + id_notif_visio + "&" + apikey
	return get_resultat(url)
}

function visio_prete(id_div_visio){

	chargement(false);
	element_DOM(id_div_visio).style.display="block";

	

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
	//console.log(nouveau_visio)
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
	
	//alert(liste_classe_multi_visio)
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
		var mon_type = recuperer('mon_type').split("_")[0]


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
	var mon_type = recuperer('mon_type').split("_")[0]


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

	var mon_type = recuperer("mon_type").includes("Admin") ? "Administration" : recuperer("mon_type");
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
		$("#recup_analyses").remove()
		$("#recup_pref").remove()
		if(!recuperer("API_BIBLIOTHEQUE")){
			$("#recup_biblio").remove()

			const classe_eleve = JSON.parse(recuperer('mes_donnees'))['Classe']
			if(!data_etablissement['classes_ccbac'].includes(classe_eleve)){
				$('#recup_ccbac').remove()
			}
		} 
	}else{
		element_DOM("recup_params").style.display = "block"
		element_DOM("recup_analyses").style.display = "block"
		element_DOM("recup_pref").style.display = "block"
	}
	
}

function recuperer_analyses(){

	vider_fenetre("Analyses");	

	var contenu_menu_haut = ""
	
	for (var i =  0; i < elements_menu_analyses.length; i++) {
		contenu_menu_haut = contenu_menu_haut + '<span class="un_menu" id ="'+elements_menu_analyses[i]+'">'+elements_menu_analyses[i]+'</span>' 
	}

	var conteneur_menu_html = '<div id="conteneur_menu"><div id="menu_haut" class="menu_haut"> ' + contenu_menu_haut+ '</div><div id="menu_params" class="menu_params"><iframe id="previsualisation" class="previz_analysis" height="90%"></iframe></div></div>'


	
	$("#fenetre").append(conteneur_menu_html);


	//clic -> mise en forme + actualisation de menu_details
	$('.un_menu').click(function(e) {
		chargement(true)
		un_menu_clic(e.target.id)			
        chargement(false)
    });



    //clic par défaut sur: Analyses des connexions    
    $("[id='Analyses des connexions']").click();

	afficher_fenetre(true)
}


function masquer_images_initialement(){
	return $("img:visible").hide()
}

function afficher_images_initiales(img){
	img.show()
}

function recuperer_preferences(){

	vider_fenetre("Préférences",false,"sauvegarder_pref()");
	

	var contenu_menu_haut = ""
	
	for (var i =  0; i < elements_menu_preferences.length; i++) {
		contenu_menu_haut = contenu_menu_haut + '<span class="un_menu" id ="'+elements_menu_preferences[i]+'">'+elements_menu_preferences[i]+'</span>' 
	}

	var conteneur_menu_html = '<div id="conteneur_menu"><div id="menu_haut" class="menu_haut"> ' + contenu_menu_haut+ '</div><div id="menu_params" class="menu_params"><div id="previsualisation" class="previz-pref"></div></div></div>'

	$("#fenetre").append(conteneur_menu_html);


	//clic -> mise en forme + actualisation de menu_details
	$('.un_menu').click(function(e) {
		chargement(true)
		un_menu_clic(e.target.id,true)			
        chargement(false)
    });


    //clic par défaut
    $("[id='Couleurs']").click();
    //$("[id='Images']").click();
    afficher_fenetre(true)


	

}



function personnaliser(id_parametre){
	//console.log(id_parametre)
	var conteneur = $("#previsualisation")
	var contenu_explications = ""
	var callback = ""
	element_DOM("previsualisation").innerHTML = ""

	var mon_hebergeur = hebergeur_actuel()
	var bg_checked = data_etablissement['preferences'] && data_etablissement['preferences']['background'] ? "checked" : ""

	//si images
	if(id_parametre === "Images"){
		contenu_explications = `
		<strong>
			<rouge>
				Vous devez avoir votre propre hébergeur d'images à partir duquel SEKOOLY récupère les images.<br>
			</rouge>
			Les images que vous hébergez <rouge>doivent</rouge> avoir <rouge>le même nom</rouge> que celui cité ci-dessous.<br>
		</strong>

		<input id="prefixe_image" class="barre_recherche" name="rechercher" value="`+mon_hebergeur+`" placeholder="Lien de votre hébergeur d'images..."><br>
		

		`+btn_prefs("reinitialiser_images()")+`


		<p>
			Pour convertir vos images vers la bonne extension, vous pouvez utiliser <a target="_blank" href="https://image.online-convert.com/fr/convertir-en-png"><strong>ce site</strong></a>.<br>
			Retrouvez ci-dessous la liste des <span id="nb_images"></span>images personnalisables sur votre plateforme.
		</p>
			
		<p>
			<vert>✅ = image trouvée</vert>
			<rouge>❌ = image non trouvée</rouge>
		</p>


		<div>
		  <span class="toggle"><label class="switch">  
		  <input onchange="appliquer_fond(this.checked)" class="ecolage" id="my-background-image" type="checkbox" `+bg_checked+`>
		  <span class="slider round"></span></label>
		  <span class="img-activate">image de fond</span>
		</span>
		</div>
		`

		//console.log(contenu_explications)
		
		callback = "personnaliser_images(conteneur)"

	//si couleurs	
	} else if(id_parametre === "Couleurs"){

		contenu_explications = `

				<form id="color-prefs">

					<div class="element-pref">
						<h2 class="au-centre">Barre de navigation<br>
							<input type="color" onchange="changer_fond_apres_choix(this)" value="`+ couleur_fond("navbar-color") +`" class="palette" name="navbar-color">
						</h2>			
					</div>


					<div class="element-pref">
						<h2 class="au-centre">Corps de la page<br>
							<input id="body-color" type="color" onchange="changer_fond_body_apres_choix(this)" value="`+ rgb2hex($("body").css("background-color")) +`" class="palette" name="body">
						</h2>

						`
						+night_mode_option()+
						`
					</div>
					


					<div class="element-pref">
						<h2 class="au-centre">Titre des catégories de fichiers<br>
							<input type="color" onchange="changer_fond_fenetre_apres_choix(this)" value="`+ couleur_fond("titre_drive") +`" class="palette" name="titre_drive">
						</h2>
					</div>


					<div class="element-pref">
						<h2 class="au-centre"><button type="button" onclick="apercu_btn()" class="btn-setup sekooly-mode-background">Bouton</button><br>
							<h3> ASPECT
								<input type="color" onchange="changer_fond_apres_choix(this)" value="`+ couleur_fond("sekooly-mode-background") +`" class="palette"  name="sekooly-mode-background">
							</h3>
							<h3> AU SURVOL
								<input type="color" onchange="changer_fond_apres_choix(this)" value="`+ rgb2hex($(".sekooly-mode-background:hover").css("background-color")) +`" class="palette" name="sekooly-mode-background:hover, .un_menu:hover">
							</h3>
						</h2>
						
					</div>





					<div class="element-pref">
						<h2 class="au-centre">Corps de la fenêtre<br>
							<input id="fenetre-color" type="color" onchange="changer_fond_fenetre_apres_choix(this)" value="`+ rgb2hex($("#fenetre").css("background-color")) +`" class="palette" name="ma_fenetre">
						</h2>			
					</div>


					<div class="element-pref">
						<h2 class="au-centre">Corps de mini-fenêtre<br>
							<input id="mini-fenetre-color" type="color" onchange="changer_fond_fenetre_apres_choix(this)" value="`+ rgb2hex($("#mini_popup").css("background-color")) +`" class="palette" name="mini_popup">
						</h2>	
						<div class="mini_popup" style="position: relative;top: 50px;"><div>Exemple mini-fênetre</div><button type="button" class="rendre sekooly-mode-background" onclick="afficher_alerte('Bouton test pour la mini-fenêtre')">TEST</button></div>
					</div>



					<div class="element-pref">
						
						<h2 class="au-centre">Message privé envoyé<br>
							<input type="color" onchange="changer_fond_fenetre_apres_choix(this)" value="`+ couleur_fond("msg_envoye") +`" class="palette" name="msg_envoye">
						</h2>
						<div class="un_msg msg_envoye">
							<div class="auteur_du_poste sekooly-mode">MOI-MÊME</div>
							<h><p data-placeholder="Votre commentaire...">
								Voici un message que j'envoie vers une personne inscrite sur la plateforme.</p>
							</h>
							<h class="date_fin">
								mardi 22 juin 2021 à 09:25
							</h>
						</div>

					</div>


					<div class="element-pref">
						<h2 class="au-centre">Message privé reçu<br>
							<input type="color" onchange="changer_fond_fenetre_apres_choix(this)" value="`+ couleur_fond("msg_recu") +`" class="palette" name="msg_recu">
						</h2>
						<div class="un_msg msg_recu">
							<div class="auteur_du_poste sekooly-mode">UN.UTILISATEUR</div>
							<h><p data-placeholder="Votre commentaire...">Voici un message reçu, envoyé par un utilisateur inscrit sur la plateforme.</p></h>
							<h class="date_fin">mardi 22 juin 2021 à 09:26</h>
						</div>
					</div>




					<div class="element-pref">
						
						<h2 class="au-centre">Notifications<br>
							<input type="color" onchange="changer_fond_fenetre_apres_choix(this)" value="`+ couleur_fond("une_notif") +`" class="palette"  name="une_notif">
						</h2>
						<div id="exemple-pannel_notif" class="pannel_notif" style="display: block;position: inherit;margin-left: 15%;">
							<div class="une_notif"><b class="sekooly-mode">Monsieur X (Prof) </b> a publié un nouveau fichier dans  <b>Nom du cours</b> - <i><b class="sekooly-mode-darker">nom_fichier.pdf</b></i><div> <span> <img src="`+prefixe_image+`/img_ajout.png" class="icone_notif"> </span> <i class="date_fin"> `+afficher_date(maintenant())+`  </i></div></div>
						</div>
						
					</div>


					<div class="element-pref">
						<h2 class="au-centre sekooly-mode">Mise en valeur de texte<br>
							<input type="color" onchange="change_couleur_texte_apres_choix(this)" value="`+ couleur_texte("sekooly-mode") +`" class="palette" name="sekooly-mode">
						</h2>
						
					</div>

					<div class="element-pref">
						<h2 class="au-centre sekooly-mode-darker">Objet des notifications<br>
							<input type="color" onchange="change_couleur_texte_apres_choix(this)" value="`+ couleur_texte("sekooly-mode-darker") +`" class="palette" name="sekooly-mode-darker">
						</h2>
						
					</div>


					<div class="element-pref">
						<h2 class="au-centre">Affichage des dates<br>
							<input type="color" onchange="change_couleur_texte_apres_choix(this)" value="`+ couleur_texte("date_fin") +`" class="palette" name="date_fin">
						</h2>
						
					</div>


				</form>

				`+btn_prefs("reinitialiser_couleurs()")+`


		`

		//garder le mode actuel -> 2 fois
		callback = "mettre_mon_mode_t_e()"



	//si formes	
	}else if(id_parametre === "Formes"){
		contenu_explications = "En cours de construction."	


	//si police	
	}else if(id_parametre === "Police"){
		contenu_explications = `
			<h1> Choisissez parmi les polices disponibles ci-dessous:</h1>
			<h2>			
				<select onchange="changer_police(this)" style="height: 50px;width: 30%;">
					<option value="Arial">Arial</option>
					<option value="Brush Script MT">Brush Script MT</option>
					<option value="Courier New">Courier New</option>
					<option value="Garamond">Garamond</option>
					<option value="Georgia">Georgia</option>
					<option value="Helvetica">Helvetica</option>
					<option value="Tahoma">Tahoma</option>
					<option value="Times New Roman">Times New Roman</option>
					<option value="Trebuchet MS">Trebuchet MS</option>
					<option value="Verdana">Verdana</option>
				</select>			
			<h2>

		`

	}



	explications_pref(conteneur, contenu_explications, callback)
	
	//si changement uniquement
	//element_DOM("menu_params").scrollTo(0,0);
}

function changer_slider(ceci){
	//input:checked + .slider {
}


function changer_police(ceci){
	console.log(ceci.value)
	changer_css_selector("*","font-family",ceci.value)
}


function btn_prefs(fonction_reinit){
	return `
		<div>
			<button class="btn-setup sekooly-mode-background far" onclick="`+fonction_reinit+`">Réinitialiser</button> 
			<button class="btn-setup sekooly-mode-background far" onclick="sauvegarder_pref()">Enregistrer</button> 
		</div>
	`
}


function apercu_btn(){
	afficher_alerte("Ceci est l'aperçu de la couleur des boutons.")
}

function change_couleur_texte_apres_choix(ceci){
	changer_couleur_texte(ceci.name, ceci.value)
}

function changer_fond_body_apres_choix(ceci){
	selector = recuperer("mode_nuit_oui") === "oui" ? ".dark-mode" : "body"
	changer_css_selector(selector,"background-color", ceci.value)
}


function changer_fond_fenetre_apres_choix(ceci){
	//console.log({"nom du input": ceci.name})

	est_mode_nuit = mode_nuit_oui_final === "oui"	
	//console.log({est_mode_nuit})

	class_finale_nuit = ceci.name
	//console.log({class_finale_nuit})

	selector = est_mode_nuit ? "." + class_finale_nuit : "." + ceci.name
	//console.log({selector})

	importance = est_mode_nuit ?  " !important " : ""
	//console.log({importance})

	changer_css_selector(selector,"background-color", ceci.value, importance)
	actualiser_class_apres_changement_mode(est_mode_nuit,ceci.name)


}




function changer_fond_apres_choix(ceci){
	changer_fond(ceci.name, ceci.value)
}


function changer_couleur_texte(className, valeur_couleur){
	changer_css_selector("." + className,"color",valeur_couleur)
	
}

function changer_fond(className, valeur_couleur){
	changer_css_selector("." + className,"background-color",valeur_couleur)
}

function changer_css_selector(selector,label_selector,value_selector, importance){
	//$(selector).css(label_selector,value_selector)

	css_actuel = element_DOM("custom-css").innerText
	//console.log({css_actuel})

	juste_selector =  selector + "{"
	selector_label = juste_selector + label_selector
	var a_ajouter = selector_label + ":" + value_selector + (importance || "") + "}"	
	//console.log({a_ajouter})

	//si le 'selector{' existe déjà
	selector_existant = css_actuel.split("}").find(e => e.includes(juste_selector))
	//console.log({selector_existant})

	//si selector_label existe déjà
	selector_label_existant = css_actuel.split("}").find(e => e.includes(selector_label))
	//console.log({selector_label_existant})


	//le selector ET le selector_label n'existent pas
	if(!selector_existant && !selector_label_existant){
		element_DOM("custom-css").innerText += a_ajouter
	}else{

		avant = element_DOM("custom-css").innerText 
			
		//selector label existant: remplacer
		if(selector_label_existant){

			//alert("selector_label_existant")	
			apres = avant.replaceAll(selector_label_existant + "}", a_ajouter)
			element_DOM("custom-css").innerText = apres

		//selector existant SEULEMENT: ajouter
		}else  if(selector_existant){

			//alert("selector_existant")
			//alert("Encore en cours de construction.")
			apres = avant.replaceAll(selector_existant, selector_label + ":" + value_selector + ";"	)
			element_DOM("custom-css").innerText = apres



		}

		
		

	}


	//mettre dans data_etablissement
	data_etablissement['preferences']['couleurs'] = element_DOM("custom-css").innerText
	//console.log(data_etablissement.preferences.couleurs)	


}

function reinitialiser_couleurs(){

	var confirmation = element_DOM("custom-css").innerText.length === 0 || confirm("⚠️ Voulez-vous vraiment remettre les couleurs par défaut ?")
	if(!confirmation) return afficher_alerte("Réinitialisation des couleurs annulée.")

	element_DOM("custom-css").innerText = ""
	
	if(data_etablissement.preferences.couleurs){
		delete data_etablissement.preferences.couleurs	
	} 
	
	

	$("#explications").remove()
	$("#Couleurs").click()

}

function reinitialiser_images(){


	var confirmation = element_DOM("prefixe_image").value.length === 0 || confirm("⚠️ Voulez-vous vraiment remettre les images par défaut ?")
	if(!confirmation) return afficher_alerte("Réinitialisation d'images annulée.")	

	element_DOM("prefixe_image").value = ""
	maj_liste_images_pref($("#previsualisation"), hebergeur_defaut())
	appliquer_fond(false)	
	sauvegarder_pref()
}


async function mettre_la_coche(lien_img){

	//si l'image existe: ✅
	//si l'image n'existe PAS: ❌


	var res_lien = await fetch(lien_img)	
	var res = res_lien.status === 200 ? "✅" : "❌"

	return res


}


function personnaliser_images(conteneur){

	/********************* à chaque màj du préfixe, màj les liens + les images en question*********************/
	$("#prefixe_image").on("keyup",function(e){
		

		/********************* liste des images *****************/
		//console.log(e.target.value)
		maj_liste_images_pref(conteneur, e.target.value)
		afficher_alerte("Vous pouvez soit enregistrer vos préférences, soit cliquer sur Réinitialiser pour avoir les images par défaut.")
	})


	/********************* liste des images *****************/
	//$("#prefixe_image").keyup()
	maj_liste_images_pref(conteneur, hebergeur_actuel(true))





}


async function maj_liste_images_pref(conteneur, futur_hebergeur){
	var liste_images = ""
	var liste_images_initiale = []

	var liste_name = "img_links"
	var attributeName = "href"


	//par rapport à la liste des images visibles
	$.each($("img"), (key,valeur) => {
		//console.log(valeur.src)
		if(valeur.src && !liste_images.includes(valeur.src)){
			liste_images += valeur.src + "\n"	
		} else{
			//console.log("déjà present 1: ", valeur.src )
		}

	})

	//par rapport à la liste de couleurs
	liste_images += liste_couleurs.map((e) => {
		if(!liste_images.includes(e)){
			return hebergeur_actuel(true) + "/img_dossier_"+e.replaceAll(" ","") +".png"  	
		}else{
			//console.log("déjà present 2: ", e )

		}
	}).join("\n")
	//console.log({liste_images})


	//par rapport à la liste des images dynamiques
	liste_images += img_dynamiques.map((e) => {
		if(!liste_images.includes(e)){
			return '/'+e
		} else{
			//console.log("déjà present 3: ", e )
		}
	}).join('\n')



	//transformer en array
	liste_images = liste_images.replaceAll("\n\n","\n").replaceAll("\n","<br>").split("<br>")


	//supprimer les doublons
	liste_images = liste_images.filter(function(item, pos) {
	    return item && liste_images.indexOf(item) == pos;
	})


	//enregistrer cet array d'éléments uniques
	liste_images_initiale = liste_images


	//afficher le nombre de fichier
	element_DOM("nb_images").innerText = liste_images.length + " "

	liste_images = liste_images.map((e) => {
		if(e){

			var mon_hebergeur = futur_hebergeur ? futur_hebergeur : hebergeur_defaut()
			//console.log({mon_hebergeur})
			var nom_image = "/" + e.split("/").pop()

			if(e.split("/").pop()){

				/*
				la_coche = await mettre_la_coche(mon_hebergeur+nom_image)
				console.log(la_coche)
				*/

				var une_image = '<strong class="sekooly-mode une_image">' + nom_image + '</strong><span class="rmq" id="rmq_'+e.split("/").pop()+'"></span>'

				//console.log(e)
				return '<a list="'+liste_name+'" href="'+mon_hebergeur+nom_image+'" target="_blank"><span class="content_prefixe_image">'+mon_hebergeur+'</span>'+une_image+'</a>'


			}

		}
	})

	liste_images = liste_images.join("<br><br>")


	

	

	//console.log(liste_images)
	ajouter_liste_pref(conteneur,  liste_images, liste_name, attributeName )
	appliquer_images()






	//pour chaque image, actualiser son rmq
	//console.log(liste_images_initiale)
	liste_images_initiale.map(async (e) => {

		if(e){

			var mon_hebergeur = futur_hebergeur ? futur_hebergeur : hebergeur_defaut()
			//console.log({mon_hebergeur})
			var nom_fichier = e.split("/").pop()
			var nom_image = "/" + nom_fichier 

			if(nom_image){

				la_coche = await mettre_la_coche(mon_hebergeur+nom_image)

				if(nom_image.includes("bmp")){
					//console.log({[nom_fichier] : la_coche})
					//console.log({selector : "[id='rmq_"+nom_fichier +"']"})
						
				} 


				$("[id='rmq_"+nom_fichier +"']")[0].innerText = la_coche

			}

		}


	})


}



function recuperer_autorisations(){
	url = CryptoJS.AES.decrypt("U2FsdGVkX19VFoAHA6uGaVw+nJmUqMm1V/wAI54lcDrc9CEoJu2NzJntc1jMydf+904/pcwg0f6gbd5g75V1HEIkENqhb4hq5zVqjqLJ/5NFwdd8kzFN7Ls8C2Ig1yKAuEZisjgxM9BrHuAzQ3bZvaJVifOpAi7RJDrRWmJWyAV9bfbIEM4iS/JIE0l7wsVB+Yy0nfXj+PAK6z0tkSfnpYKws7CxDTQvz0+wBeOmee0=","Sekooly").toString(CryptoJS.enc.Utf8)
	autorisations = get_resultat_brut(url)
	return autorisations
}

function explications_pref(conteneur, contenu_explications, callback){
	$("#explications").remove()
	conteneur.append('<div class="description_matiere" id="explications">'+contenu_explications+'</div>');
	eval(callback)
}

function ajouter_liste_pref(conteneur, liste, liste_name, attributeName){
	$("#liste_pref").remove()
	conteneur.append('<div id="liste_pref"><div><button onclick="copier_liste(`[list=\''+liste_name+'\']`,\''+attributeName+'\')">COPIER</button></div>'+liste+'</div>')
}







async function sauvegarder_pref(){
	await actualiser_info_etablissement()
	afficher_alerte("Vos préférences sont sauvegardées.")
}


function recuperer_parametres(){

	
	if(recuperer('liste_params_colonnes_masquees') === null) stocker('liste_params_colonnes_masquees','')

	vider_fenetre("Paramètres");
	
	/*
	var contenu_menu_haut = ""	


	for (var i =  0; i < elements_menu_haut.length; i++) {
		contenu_menu_haut = contenu_menu_haut + '<span class="un_menu" id ="'+elements_menu_haut[i]+'">'+elements_menu_haut[i]+'</span>' 
	}
	var nombre_elements = '<span style="font-weight: bold;"><span id="nombre_elements_param">'+0+'</span> éléments</span>'
	var conteneur_menu_html = '<div id="conteneur_menu"><div id="menu_haut" class="menu_haut"> ' + contenu_menu_haut+ '</div><div id="menu_params" class="menu_params"><div id="conteneur_filtre"><span id="label_filtre_parametre"></span><select id="filtre_parametre" class="filtre_parametre"></select></div><div id="menu_details"></div>'+nombre_elements+'</div></div>'
	*/

	var contenu_menu_haut = ""
	elements_generiques_en_haut.forEach(function(element_generique){
		contenu_menu_haut += un_menu_generique(element_generique)
	})

	var nombre_elements = '<span style="font-weight: bold;"><span id="nombre_elements_param">'+0+'</span> éléments</span>'
	var conteneur_menu_html = '<div id="conteneur_menu"><div id="menu_haut" class="menu_haut"> ' + contenu_menu_haut+ '</div><div id="menu_params" class="menu_params"><div id="conteneur_filtre"><span id="label_filtre_parametre"></span><select id="filtre_parametre" class="filtre_parametre"></select></div><div id="menu_details"></div>'+nombre_elements+'</div></div>'


	
	$("#fenetre").append(conteneur_menu_html);



	//clic -> mise en forme + actualisation de menu_details
	$('.un_menu').change(function(e) {
		chargement(true)
		un_menu_clic(e.target.value)			
        chargement(false)
    });

	$("#conteneur_filtre")[0].addEventListener('click', function (evt) {
	    if (evt.detail === 3) {
	        $("#boutons_params").show()
		$("#boutons_params").children().show();
	    }
	});

    //clic par défaut sur Alerte
	choisir_ce_parametre("Alerte")

	afficher_fenetre(true)

}


function un_menu_generique(element_generique){

	//console.log({element_generique})
	
	var nom_element_generique = Object.keys(element_generique)[0]
	//console.log({nom_element_generique})
	var res = "<select class='un_menu'><option value='--'>--"+nom_element_generique+"--</option>"

	//pour chaque élément de ce nom générique
	element_generique[nom_element_generique].forEach(function(une_option){
		//console.log(une_option)
		res += "<option value='"+une_option+"'>"+une_option+"</option>"

	})


	res += "</select>"
	//console.log({res})
	return res
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


function url_analysis_iframe(test){
	return test ? "http://localhost:5000/connexions.html" : "https://sekooly.com/assets/analysis/connexions"
}

async function une_analyse_clic(id_parametre){

	chargement(true)

	//connexions
	var url =   url_analysis_iframe()
	element_DOM("previsualisation").src = url
	var iframe_target = element_DOM("previsualisation").contentWindow

	$('#previsualisation').on('load', function(){
			

		iframe_target.postMessage({
			racine_initiale:racine_initiale,
			nom_etablissement:nom_etablissement,
			api_initial:api_initial
		}, element_DOM("previsualisation").src);

		//ask for update
		update_viz_logs()

		chargement(false);
	});

}

async function update_viz_logs(){

	var lien_script = await chercher_lien_script(6)
	var api_analyses_connexions = "94e27fab-46a2-4a3d-949c-0d7b1c65faf3"

	options = {
		API_ANALYSES_CONNEXIONS:  api_analyses_connexions,
		nom_etablissement: nom_etablissement,
		type_analyses: "Connexions"
	}


	var url = lien_script + json_to_url(options)

	//console.log(url)
	post_resultat_asynchrone(url)


}

async function un_menu_clic(id_parametre,mode_pref,sans_changement){

	chargement(true)
	$("#nombre_elements_param").text('0')

	$("#mini_popup").remove()
    mettre_en_forme_onglet_clicked(id_parametre,sans_changement);
    $("#conteneur_filtre").hide()


	if(id_parametre === "--"){
		$("#menu_params").hide()
		return alert("Choisissez un élément du menu déroulant.")
	}else{
		$("#menu_params").show()
	}

	
	//si c'est une analyse
	if(id_parametre.includes("Analyses")){

		//window.open("analyses/"+id_parametre.split(" ").pop() +".html", '_blank').focus();
		une_analyse_clic(id_parametre)

	//si c'est les préf
	}else if(mode_pref){

		personnaliser(id_parametre)
		
	}else{        
	    actualiser_filtre_onglet(id_parametre);
	    await actualiser_details_parametre(id_parametre);
		await mettre_etat_espace(id_parametre)
		

		$("#conteneur_filtre").show()


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
			//if(elements_menu_haut_avec_tout_voir.indexOf(id_parametre + ":") === -1){
			if (elements_menu_haut_avec_tout_voir.some(e => e.includes(id_parametre+":"))){
				autoriser_tout_voir(true)
			}else{
				autoriser_tout_voir(false)
			}
		}
	    
	    
	}



	$( document ).ready(function() {
	    chargement(false)
	});
}

function choisir_ce_parametre(id_parametre){
	$('[value="'+id_parametre+'"]').parent("select").val(id_parametre)
	$('[value="'+id_parametre+'"]').parent("select").change()
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
	var selector = "#ajout_param, #suppr_param, #dupliquer_param, #importer_param"
	if(oui){
		$(selector).show()
	}else{
		$(selector).hide()
	}
}

function autoriser_le_reset(oui){
	$("#reset_param")[0].style.display = oui ? "" : "none"
}

function autoriser_tout_voir(oui){
	$("#tout_voir")[0].style.display = oui ? "" : "none"
}

function mettre_en_forme_onglet_clicked(id_onglet, sans_changement){


	$("option").removeClass("un_menu")
	$("option").removeClass("un_menu_orange")
	$("option").removeClass("sekooly-mode-background")

	//console.log("on mettra en forme pour " + id_onglet)
	for (var i =  0; i < $(".menu_haut")[0].children.length; i++) {
		id_onglet_courant = $(".menu_haut")[0].children[i].id || $(".menu_haut")[0].children[i].value

		/*
		console.log({id_onglet})
		console.log({id_onglet_courant})
		*/


		valeur_ou_id = id_onglet_courant === $(".menu_haut")[0].children[i].id ? "id" : "value"

		/*
		console.log('\n\n\n\n')
		console.log({valeur_ou_id})
		console.log({id_onglet})
		console.log({id_onglet_courant})
		*/

		//au clic d'un menu
		//-> tout est réinit
		//on met en orange l'onglet choisi
		if(id_onglet_courant===id_onglet && id_onglet_courant !== ""){

			//console.log(id_onglet_courant + " = id_onglet")
			$('['+valeur_ou_id+'="' + id_onglet_courant + '"]')[0].className = "un_menu un_menu_orange sekooly-mode-background"
		}else{
			//console.log("id_onglet_courant <> id_onglet")
			if(valeur_ou_id === "id"){
				if($('['+valeur_ou_id+'="' + id_onglet_courant + '"]')[0]) $('['+valeur_ou_id+'="' + id_onglet_courant + '"]')[0].className = "un_menu"
			}


		}

		

	}

	if(!sans_changement) $('select.un_menu').val("--")

	$('select.un_menu').removeClass("sekooly-mode-background")
	$(".un_menu_orange").parent("select").val(id_onglet)
	$(".un_menu_orange").parent("select").addClass("sekooly-mode-background")

}

function bouton_editer(nom_fonction_clic){
	return '<img onclick="'+nom_fonction_clic+'" src="'+ prefixe_image + '/img_edit.png" alt="MODIFIER" class="editer">'
}

function bouton_voir(nom_fonction_clic){
	return '<img alt="voir" class="envoi_remarque mini-image" onclick="'+nom_fonction_clic+'" src="'+ prefixe_image + '/img_previz.png"> '
}

function modifier_info(ceci){



	id_info = ceci.parentNode.id
	etiquette_info = element_DOM(id_info).previousSibling.previousSibling.innerText.replaceAll(':','')
	//console.log("on va modifier " + id_info)

	var ancienne_valeur = $("[id='"+id_info+"']")[0].innerText
	var nouvelle_valeur = prompt("Indiquez la nouvelle valeur de '"+etiquette_info+"':", ancienne_valeur)

	if(nouvelle_valeur) nouvelle_valeur = nouvelle_valeur.trim()

	if(nouvelle_valeur && nouvelle_valeur !== ancienne_valeur){
		//console.log("on va modifier " + etiquette_info + " avec " + nouvelle_valeur)
		chargement(true)

		nouveau_data = {
			[id_info]: nouvelle_valeur
		}
		actualiser_info(nouveau_data)

	}else{

		afficher_alerte("Modification annulée.")
	}
}


function actualiser_info(nouveau_data){

		//envoyer la modif
		url = racine_initiale + "Etablissements" + "?"+"id"+"=eq."+data_etablissement['id']+ "&"+api_initial
		
		patch_resultat_asynchrone(url,nouveau_data).then(function(){


			//récupérer le nouveau data_etablissement
			get_resultat_asynchrone(url).then(function(resultats){

				data_etablissement = resultats[0]
				//console.log(data_etablissement)

				//actualiser Infos établissement
				un_menu_clic("Infos établissement")

				chargement(false)

			})
		})

}

function voir_ou_generer_contrat(nom_fichier, valeur_info){
	
	if(valeur_info!=="null" && valeur_info.length > 0){
		visualiser_avec_demande_signature(nom_fichier,valeur_info)
	}else{
		//alert("on est ici")
		generer_contrat()
	}
	
}

function visualiser_avec_demande_signature(nom_fichier,id_fichier){

	visualiser(nom_fichier,id_fichier)	
	$("#titre_fenetre").append('<span onclick="signer_contrat()" class="sign">Signer contrat</span>') // pour signer
}

async function contrat_datas(keep_temp){

	var nb_eleves = await compter("Eleves")
	var nb_admin = await compter("Administration")
	var nb_profs = await compter("Profs")
	var nb_total = nb_eleves + nb_admin + nb_profs

	var datas = {
      'nom_etablissement': nom_etablissement.toUpperCase(),
      'adresse_etablissement': data_etablissement["adresse_etablissement"],
      'identite_responsable': data_etablissement["identite_responsable"],
      role: mon_role,
      montant_par_user: data_etablissement["donnees_contrat"]["montant_par_user"],
      nb_total: nb_total,
      nb_eleves: nb_eleves,
      nb_admin: nb_admin,
      nb_profs: nb_profs,
      frequence_paiement: data_etablissement["donnees_contrat"]["frequence_paiement"],
      duree_contrat_en_mois: data_etablissement["duree_contrat_en_mois"],
      ville: data_etablissement["adresse_etablissement"],
      date_premier_abonnement: data_etablissement["date_premier_abonnement"],
      contact_etablissement:  data_etablissement["contact_etablissement"],
      now: afficher_date(maintenant()),
      unite_montant_par_user: data_etablissement["donnees_contrat"]["unite_montant_par_user"],
      keep_temp: keep_temp,
    }

    if(contrat_avec_signature()){
    	//alert('Contrat déjà avec signature.')
    	datas['img_paraphe'] = data_etablissement["donnees_contrat"]['img_paraphe'] 
    	datas['img_signature'] = data_etablissement["donnees_contrat"]['img_signature'] 
    	datas['id_newTempFile'] = data_etablissement["donnees_contrat"]['id_newTempFile'] 
    }

    return datas
	
}

function contrat_avec_signature(){
	return data_etablissement["donnees_contrat"]['img_signature'] && data_etablissement["donnees_contrat"]['img_signature'] !== undefined && data_etablissement["donnees_contrat"]['img_signature'] !== "" && data_etablissement["donnees_contrat"]['img_signature'] !== null && data_etablissement["donnees_contrat"]['img_signature'] !== "null"
}

async function generer_contrat(){
	chargement(true)
	afficher_alerte("Merci de patienter, nous récupérons les données de votre contrat à signer...")
	url_contrat = await chercher_lien_script(7)

		
	contrat = contrat_datas(true)
	var url = url_contrat + "?API_KEY_UPLOAD=" + recuperer("API_KEY_UPLOAD")

	//console.log(contrat,url)
	

	afficher_alerte("Récupération du contrat à signer...")
	
	res = await post_resultat_asynchrone(url, JSON.stringify(contrat))
	//console.log(res)
	if(res){
		res = JSON.parse(res)
		id_newTempFile = res['id_fichier']
		nom_fichier = res['nom_fichier'] + ".doc"


		visualiser_avec_demande_signature(nom_fichier,id_newTempFile)

		//actualiser
		data_etablissement['donnees_contrat']['id_newTempFile'] = id_newTempFile
		actualiser_info_etablissement()
		chargement(false)
	

	}else{
		chargement(false)	
	}

		
	
	
}


async function apposer_la_signature(lien_script){
	chargement(true)

		
	contrat = contrat_datas(false)
	var url = lien_script

	//console.log({contrat})
	//console.log({url})
	
	afficher_alerte("C'est bientôt terminé...")
	chargement(true)
	res = await post_resultat_asynchrone(url, JSON.stringify(contrat))
	//console.log(res)
	if(res){
		res = JSON.parse(res)
		id_contrat = res['id_fichier']
		nom_fichier = res['nom_fichier'] + ".pdf"


		visualiser(nom_fichier,id_contrat)

		//actualiser
		data_etablissement['donnees_contrat']['id_contrat'] = id_contrat		
		data_etablissement['donnees_contrat']['id_newTempFile'] = false	
		data_etablissement['donnees_contrat']['img_paraphe'] = false	
		data_etablissement['donnees_contrat']['img_signature'] = false
		actualiser_info_etablissement()
		
		
		afficher_alerte("Contrat signé avec succès.")
		chargement(false)

	}else{
		chargement(false)
	}

		
	
	
}


async function actualiser_info_etablissement(){
	await supabaseInit
			.from('Etablissements')
			.upsert(data_etablissement)
}

function effacer_saisie(id_element){
	$(element_DOM(id_element)).jSignature("reset")
}

function bouton_effacer_paint(id_element){
	return `<rouge onclick="effacer_saisie('`+id_element+`')">EFFACER</rouge>`
}

function recuperer_image(id_image){
	return $(element_DOM(id_image)).jSignature("getData")
}

function signer_contrat(){
	
	var elements_html = `
	<div class='title_paint'>
		Paraphe
		`+bouton_effacer_paint("paraphe")+`
	</div>
	<div id='paraphe' class='paint_zone'></div>



	<div class='title_paint'>
		Signature
		`+bouton_effacer_paint("signature")+`
	</div>
	<div id='signature' class='paint_zone'></div>
	<input type="checkbox" name="sign" id="sign">
	<label for="sign">Je reconnais avoir lu l'ensemble des termes du présent contrat et j'accepte de le signer électroniquement.</label>
	`

	creer_mini_popup("Paraphe et signature du contrat",elements_html,"Parapher et signer","envoyer_paraphe_signature()",false,false,false,false,false,"sign_contrat")


	//désactiver par defaut, tant que non coché
	$("#sign").on("change",function(e){
		
		if(e.target.checked){
			$(element_DOM("sign_contrat")).show()	
		}else{
			$(element_DOM("sign_contrat")).hide()
		}
		

	})

	$("#sign").change()


	$("#paraphe").jSignature()
	$("#signature").jSignature()

	
}

function recuperer_paraphe_signature(){	
	return {img_paraphe:data_etablissement['donnees_contrat']['img_paraphe'],img_paraphe:data_etablissement['donnees_contrat']['img_signature'],id_newTempFile:data_etablissement['donnees_contrat']['id_contrat']}
}

function data_upload_paint(data_img, nom_fichier){

	data = {
		file: data_img.replace(/^.*,/, ''),
		nom_fichier: nom_fichier
	}

	return data
}

async function envoyer_paraphe_signature(){
	chargement(true)

	//post avec le script 7
	lien_script = await chercher_lien_script(7)
	lien_script += "?API_KEY_UPLOAD=" + recuperer("API_KEY_UPLOAD")


	
	afficher_alerte("Merci de ne pas fermer l'onglet, votre signature est en cours de traitement...")

	//UNIQUEMENT SI PAS ENCORE DE SIGNATURE
	if(!contrat_avec_signature()){


		//envoyer les 2 images en tant que signatures et paraphes
		data_img_paraphe = recuperer_image("paraphe")
		data_img_signature = recuperer_image("signature")


		lien_script_bis  = lien_script + "&fichier=true"
		//console.log({lien_script_bis})

		afficher_alerte("Publication des paraphes et de la signature...")


		//poster les 2	
		data_etablissement['donnees_contrat']['img_paraphe']  = await poster_image(data_img_paraphe, "paraphe", lien_script_bis)
		data_etablissement['donnees_contrat']['img_signature'] = await poster_image(data_img_signature, "signature", lien_script_bis)



		//enregistrer les 2
		actualiser_info_etablissement()
		$('#mini_popup').remove()
	}else{
		$('#mini_popup').remove()
	}



	contrat = contrat_datas(false)
	//console.log({contrat})
	afficher_alerte("Récupération du contrat en cours...")

	//mettre à jour id_contrat
	//suprrimer id_newTempFile
	//visualiser le contrat signé
	apposer_la_signature(lien_script)


}

async function poster_image(data_img, type_fichier, lien_script){
	var donnees = data_upload_paint(data_img, type_fichier + " " + nom_etablissement + ".png")
	console.log({donnees})

	id_img = await post_resultat_asynchrone(lien_script, JSON.stringify(donnees))
	console.log({id_img})

	return id_img
}


function information_etablissement(id_info, etiquette_info, valeur_info, est_modifiable, est_consultable){
	crayon = est_modifiable ? bouton_editer("modifier_info(this)") : ""

	nom_fichier = id_info.includes("id_newTempFile") ? "Contrat à signer" : "Contrat"
	oeil = est_consultable ? bouton_voir("voir_ou_generer_contrat('"+nom_fichier+".pdf','"+valeur_info+"')") : ""

	valeur_info = est_consultable ? oeil : valeur_info

	//si c'est une image -> afficher 
	if(etiquette_info === "Logo" || etiquette_info === "Paraphe" ||  etiquette_info === "Signature" ||  etiquette_info === "Tampon" ){

		la_fonction = etiquette_info === "Logo" ? 'nouveau_logo()' :
						etiquette_info === "Paraphe" ?  'maj_paraphe()' :
						etiquette_info === "Signature" ?  'maj_signature()':
						etiquette_info === "Tampon" ? 'maj_tampon()' : 
						'alert("Aucune correspondance image.")'


		valeur_info = '<img id="mon_logo_etablissement" style="width: auto;" class="pp" src="'+prefixe_image+'/'+valeur_info+'">' 
		crayon = '<img onclick="'+la_fonction+'" src="'+prefixe_image+'/img_edit.png" alt="MODIFIER" class="editer">'
	}

	return '<div class="un_detail"><b class="sekooly-mode">'+etiquette_info+': </b><br><span id="' + id_info +'">'+valeur_info+crayon+'</span></div>';
}


async function actualiser_details_parametre(id_parametre){
	
	$("#menu_details")[0].innerHTML = "";
	
	//liste ARRAY (1 élement)
	if (id_parametre === "Maintenance"){
		mettre_details_maintenance()
		$("#nombre_elements_param")[0].innerText = 1
		return true

	//si infos établissements
	}else if(id_parametre === "Infos établissement"){

		var id_contrat = data_etablissement.donnees_contrat.id_newTempFile ? "id_newTempFile" : "id_contrat"
		var liste_images_etablissement = ['Paraphe', 'Signature', 'Tampon']
		liste_id_infos_etablissement = ["nom_fichier_logo:Logo:true",
										"nom_etablissement:Nom de l'établissement:false",
										"date_premier_abonnement:Date de début d'abonnement:false" ,
										"duree_contrat_en_mois:Durée du contrat (en mois):false",
										"adresse_etablissement:Adresse:true",
										"contact_etablissement:Contact de l'Administration:true",
										"contact_economat:Contact de l'Economat:true",
										"paraphe_etablissement:Paraphe:true",
										"signature_etablissement:Signature:true",
										"tampon_etablissement:Tampon:true",
										"mots_interdits:Liste des mots interdits (séparés par une virgule):true",
										"nb_heures_delai_examen:Nombre d'heures de tolérance pour les examens:true",
										"donnees_contrat.montant_par_user:Montant par utilisateur",
										"donnees_contrat.unite_montant_par_user:Devise du montant",
										"donnees_contrat.frequence_paiement:Modalités de paiement",
										"donnees_contrat."+id_contrat+":Voir le contrat:false:true"]

										


		var info_etablissement_html = ""

		liste_id_infos_etablissement.forEach(function(info){
			id_info = info.split(':')[0]
			etiquette_info =  info.split(':')[1]


			valeur_info = id_info.includes(".") ? data_etablissement[id_info.split('.')[0]][id_info.split('.')[1]] :
							liste_images_etablissement.indexOf(etiquette_info) >= 0 ? data_etablissement['images'][id_info] : data_etablissement[id_info]



			//console.log({id_info, etiquette_info,valeur_info})


			info_etablissement_html += information_etablissement(id_info,etiquette_info, valeur_info, eval(info.split(':')[2]), eval(info.split(':')[3]) )	
		})
		
		info_etablissement_html += `
		<details class="un_detail" style="color: #F00;">
		  <summary>ZONE DE DANGER</summary>
		  <span onclick="supprimer_etablissement()">Supprimer mon établissement de Sekooly</span>
		</details>
		`
		
		$("#menu_details").append(info_etablissement_html)
		return true

	}else if(id_parametre === "</> Intégrer Sekooly à mon site"){
		$("#menu_details").append(`<blockquote style="padding: 5%;" id="contenu_code_iframe" onclick="copier_liste('#contenu_code_iframe','contenu_code_iframe')"></blockquote>
			<h3>
				Pour intégrer Sekooly à votre site web, vous pouvez copier le code ci-dessus, puis le coller dans votre page html.
			</h3>
			<button onclick="copier_liste('#contenu_code_iframe','contenu_code_iframe')">COPIER LE CODE</button>`)
		var code_iframe = `
			<!DOCTYPE html>
			<html>
			<head>
				<link rel="icon" href="https://`+nom_etablissement+`.sekooly.com/favicon.ico">
				<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1">
				<title>Sekooly | `+nom_etablissement.toUpperCase()+`</title>
			</head>
			<body style="margin:0px;padding:0px;overflow:hidden;height: 100vh;width: 100vw;">
				<iframe src="https://`+nom_etablissement+`.sekooly.com/tele-enseignement" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
			</body>
			</html>

		`


		$("#contenu_code_iframe").text(code_iframe)
		$("#contenu_code_iframe").attr("contenu_code_iframe",code_iframe)


	}else if(id_parametre === "Réinitialiser la plateforme"){
		const liste_tables_activites = elements_generiques_en_haut.find(e => Object.keys(e)[0] === "Activités")["Activités"]
		
		var inputs_suppr = []
		liste_tables_activites.map(async function(table,index_table){
			const table_suppr = await une_table_activite_a_suppr(table, description_activite(table))
			//console.log({table_suppr})

			inputs_suppr.push(table_suppr)

			if(index_table === liste_tables_activites.length-1){
				//console.log({inputs_suppr})
				const etat_initial = `
						<div id="suppr_activites_liste">
							<p>En réinitialisant la plateforme à son état d'origine, <rouge><strong>vous allez effacer :</strong></rouge></p>
							<ul id="liste_tables_suppr" style="text-align: left;">
							  
							  ${inputs_suppr.join('')} 

							</ul>
							<p><input onchange="switch_checkboxes_suppr()" type="checkbox" id="tout_cocher_suppr" name="tout_cocher_suppr"><label for="tout_cocher_suppr" "="">Tout cocher</label></p>
							
							<p><vert>La liste des utilisateurs et <strong>toutes les données non cochées</strong> seront <strong>maintenues</strong>.</vert></p>
								
							<p>
							<rouge><strong>CETTE ACTION EST IRREVERSIBLE, merci de bien tenir compte de tous les éléments cités ci-dessus.</strong></rouge>
							</p>
							<button class="bouton_sekooly sekooly-mode-background" onclick="download_tables_cochees()">Télécharger d'abord les données cochées</button>
							<button class="bouton_sekooly" onclick="vider_tables_cochees()"><rouge>Effacer les données cochées</rouge></button>
						</div>
				`
				$("#menu_details").append(etat_initial)
				return true

			}
		  	
		})



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


			return rechercher_tout(id_parametre).then(function(snapshot){
				//console.log("recu: " + snapshot.length + " éléments")
				liste_JSON = snapshot
				//liste_JSON = ordonner(id_parametre,liste_JSON)
				//stocker(id_parametre, JSON.stringify(liste_JSON ? liste_JSON : ""))
				traiter_liste_JSON(id_parametre,liste_JSON, identifiant_table)
				$("#nombre_elements_param")[0].innerText = liste_JSON.length
				affichage_par_defaut(id_parametre);
				masquer_params_auto()


				au_changement_du_filtre()
				return liste_JSON


			});



	}



}



async function une_table_activite_a_suppr(id_table, desc_table) {
	try {
		const nombre_elements = await compter(id_table)
		return `<li>
					<input id="supp_${id_table}"
						name="supp_${id_table}"
						type="checkbox">
					<label for="supp_${id_table}">${desc_table} (<strong>${nombre_elements}</strong> élément${nombre_elements > 1 ? "s" : ""}) </label>
				</li>`

	}catch(err){
		//console.error(err)
		return ""
	}
	
	
}

function download_tables_cochees(){
	
	//si Fichiers inclus => exclure les categorie_fichier = "Profil" puis rediriger vers chaque drive des cycles
	const toutes_les_tables_a_vider = liste_donnees_cochees()
	if(toutes_les_tables_a_vider.length === 0) return afficher_alerte('Merci de cocher les données à télécharger.')

	toutes_les_tables_a_vider.forEach(async (nom_table,index_table) => {

		if(nom_table === "Fichiers"){
			//alert('Fichiers compris =>\n• exclure les categorie_fichier = "Profil" avant téléchargement \n• ouvrir les dossiers drive de chaque cycle')

		}

		await telecharger_toutes_les_donnees_supabase(nom_table)
		if(index_table === toutes_les_tables_a_vider.length -1) chargement(false)
	})

}

function nom_fichier_final(nom_table){
	return 'SEKOOLY_' + data_etablissement['nom_etablissement'].toUpperCase() + '_' + nom_table + '_' +maintenant_sans_caracteres_speciaux()
}

async function telecharger_toutes_les_donnees_supabase(nom_table){
	
	const SUPABASE_URL = supabase.supabaseUrl
	const SUPABASE_APIKEY = supabase.supabaseKey
	const nom_fichier = nom_fichier_final(nom_table)
	
	afficher_alerte('Téléchargement en cours : ' + nom_table +'...')
	const datas_json = await get_datas(nom_table,false,true)
	console.log({datas_json})

	if(datas_json.length === 0){
		datas_json = telecharger_tableau_en_csv(nom_fichier,true,nom_table)
		chargement(false)	
	} 
	afficher_alerte('Téléchargement terminé : ' + nom_table)
	
	const datas_csv = (datas_json)
	downloadCSVFile(datas_csv, nom_fichier); 

}

function liste_donnees_cochees(){
	return Array.from($('#liste_tables_suppr input:checked')).map(e => e.id.replace('supp_',''))
}

function switch_checkboxes_suppr(){

	$('#liste_tables_suppr input[type="checkbox"]').attr('checked',$('#tout_cocher_suppr:checked').length > 0)
	
}

async function vider_tables_cochees(){
	const toutes_les_tables_a_vider = liste_donnees_cochees()
	
	if(toutes_les_tables_a_vider.length === 0) return afficher_alerte('Merci de cocher les données à effacer.')

	const code_a_saisir = makeid(8)
	const confirmation = prompt("⚠️Êtes-vous sûr de vouloir effacer les données suivantes ?\n"+
							toutes_les_tables_a_vider+
							"\n\nSi oui, merci de saisir le code suivant : "+code_a_saisir+
							"\nATTENTION : Cette action est irréversible.","")

	if(confirmation === code_a_saisir){
		chargement(true)


		toutes_les_tables_a_vider.forEach(async (nom_table,index_table) => {
			

			if(nom_table === 'Fichiers'){
				

				var liste_fichiers = await supabase.from('Fichiers').select('id_fichier').not('categorie_fichier', 'in', '(Profil,Manuels)')
				liste_fichiers = liste_fichiers['data'].map(e => e['id_fichier'])
				console.log({liste_fichiers})

				
				var lien_script = await chercher_lien_script(10)
				try {
					
					res = await post_resultat_asynchrone(lien_script + '?go_store_massively=true', {
						id_files: liste_fichiers.join('\n')
					})	
					console.log({res})


					await supabase.from('Fichiers').delete().not('categorie_fichier', 'in', '(Profil,Manuels)')
					
				}catch(err){
					console.log(err)
				}
				


			}else{					
				
				const id_table = identifiant_par_table(nom_table)
				await supabase.from(nom_table).delete().not(id_table, 'eq', '-1')

			}
		
			if(index_table === toutes_les_tables_a_vider.length -1 ){
				setTimeout(function(){

					afficher_alerte(toutes_les_tables_a_vider.length + ' ensemble'+ (toutes_les_tables_a_vider.length > 1 ? "s" : "") +' de données effacées.')
					actualiser_parametre()		

				}, 2500)		
			}
		})

		if(toutes_les_tables_a_vider.length === 0) actualiser_parametre()
	}
}


async function supprimer_etablissement(){
	var mon_type = recuperer("mon_type").split("_")[0]
	var mes_donnees = await recuperer_mes_donnees()
	

	if(mes_donnees){

		var confirmation = prompt("Merci de saisir votre code d'accès pour démarrer le processus de suppression.")

		if(!confirmation) return afficher_alerte("Demande de suppression annulée.")
		if(code_ok(mes_donnees,confirmation)){
			//console.log("ok!")
			var lien_script = await chercher_lien_script(5)
			var premiere_demande  = "?premiere_demande=oui"
			var adresse_mail_suppression = "&adresse_mail_suppression=" + data_etablissement['contact_etablissement']
			var nom_etablissement_str = "&nom_etablissement=" + data_etablissement['nom_etablissement']
			var id_etablissement_str = '&id_etablissement=' + data_etablissement['id_etablissement']



			url = lien_script + premiere_demande + adresse_mail_suppression + nom_etablissement_str + id_etablissement_str
			//console.log(url)
			chargement(true)
			
			resultat = await post_resultat_asynchrone(url,{})
			alert(resultat)
			chargement(false)
			


		}else{
			console.error("Code erroné.")
		}

	}else{
		return false
	}


}

function au_changement_du_filtre(){
	//changement de filtre -> actualisation du nombre d'elements
	$("#filtre_parametre").on('change',function(e){
		compter_nombre_de_lignes()
	})

	//chargement(false)
}

function compter_nombre_de_lignes(){
	$("#nombre_elements_param")[0].innerText = $("tbody").find('.une_ligne_de_donnees:visible').length
}




function traiter_liste_JSON(id_parametre,liste_JSON, identifiant_table){
	//console.log(liste_JSON)

	//à l'actualisation du filtre, on filtre localement
	if(liste_JSON !== null && liste_JSON !== undefined &&  liste_JSON !=="" && liste_JSON.length > 0 ){
		//element_DOM("menu_details").innerHTML = json2Table(liste_JSON, identifiant_table)
		$("#menu_details").append(json2Table(liste_JSON, identifiant_table))
		au_clic("[suppression_id]","clic_ligne(this)")
    		
	}else{
		element_DOM("menu_details").innerHTML = '<i class="date_fin">Pas encore de données dans ' + id_parametre +  '.</i>';
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
	if(id_parametre === "Cycles" || id_parametre === "Maintenance" || id_parametre === "Alerte" || id_parametre === "Logs"  || id_parametre === "Espace etablissement restant" || id_parametre === "Infos établissement" || id_parametre === "Liste_appreciations" || id_parametre === "Mentions"){

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

	filtre_liste = filtre_liste.sort()
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
	
	//un_bouton_param(id_bouton_param, fonction_bouton_param, alt_bouton_param, src_image)
	var bouton_suppr_classes_profs =  JSON.parse(recuperer('mes_donnees'))['Droits_modifs'] === "oui" && $('.un_menu.sekooly-mode-background').val() === 'Profs'
										? un_bouton_param("suppr_classe_prof", "supprimer_classes_profs_affiches", "Effacer les classes-matières des profs affichés", "reinit_matieres.png")
										: ""
	var bouton_tout_voir = un_bouton_param("tout_voir", "afficher_colonnes", "Afficher toutes les colonnes", "img_previz.png") 


	$("#conteneur_filtre")[0].innerHTML	= $("#conteneur_filtre")[0].innerHTML + '<span id="boutons_params"> ' +
											bouton_actualiser+
											bouton_ajouter+
											bouton_supprimer+
											bouton_dupliquer+
											bouton_telecharger+
											bouton_import+
											bouton_init+
											bouton_suppr_classes_profs+
											bouton_tout_voir+' </span>'

    //quand on update le filtre -> on met à jour
    $("#filtre_parametre").on('change',function(e){
    	appliquer_filtre_choisi();
    })
}

async function supprimer_classes_profs_affiches(){
	const nb_profs = $('tbody tr:visible').length
	const motif_a_ecrire = 'suppression-classes'
	var confirm_effacer = prompt("Vous êtes sur le point d'effacer les matières assignées à "+nb_profs+" professeur"+(nb_profs > 1 ? "s" : "")+".\n"+
								  "Pour confirmer la suppression, merci d'écrire '"+motif_a_ecrire+"', sinon cliquez sur Annuler.","")
	
	if(confirm_effacer === motif_a_ecrire){
		chargement(true)
		const tous_les_profs_visibles = $('tr td:nth-child(1):visible')

		const match_update_profs = Array.from(tous_les_profs_visibles).map((e,index_prof) => {
			const id_prof = e.innerText
			return 'Identifiant.eq.'+id_prof

		}).join(',')

		//console.log('Suppression de la classe en cours...',match_update_profs)
		
		const { data, error } = await supabase
								.from('Profs')
								.update({ Classe: '' })
								.or(match_update_profs)

		if(!error){
			actualiser_parametre()		
			console.log(data)
		}else{
			alert(JSON.stringify(error))
			chargement(false)
		}
		

		
	}

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
		/*
		setTimeout(function(){

			mettre_la_somme(valeur_recherchee)

		}, 1000);
		*/
		mettre_la_somme(valeur_recherchee)



		//à chaque fois qu'on filtre
		$("#zone_recherche").on('input',function(e){
			valeur_recherchee = e.target.value
			//console.log("on a modifié donc on doit actualiser par " + valeur_recherchee)
			$(".stockage").remove()

			//si toujours sur cet onglet
			//remettre le stockage				
			if(id_parametre === "Espace etablissement restant") mettre_la_somme(valeur_recherchee)
		})

		return true
	}

	return false

}

function mettre_la_somme(valeur_recherchee){

	la_somme = somme('Espace etablissement restant','octets_utilises',valeur_recherchee)
	valeur_max = 50e9
	pourcentage = 100*(la_somme/valeur_max).toFixed(4)
	precisions = valeur_recherchee ?valeur_recherchee : "total"
	resultat='<div id="stockage" class="stockage"><i style="margin-left: 50px;"><label>Stockage utilisé '+(precisions)+':<progress style="width: 60px;" value="'+la_somme+'" max="'+valeur_max+'"></progress> '+pourcentage.toFixed(2)+'% ('+(la_somme/1E9).toFixed(2)+'/50 Go)</i></span></div>'


	$("#conteneur_filtre").append(resultat)
}

function chercher(){

	// Declarer les variables
	table = element_DOM("table_affichee");

	if(table){
		tr = table.getElementsByTagName("tr");
	}

	mon_filtre = element_DOM("zone_recherche").value.toUpperCase().trim();



	if (table && mon_filtre){


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

	return '<img title="'+alt_bouton_param+'" id="'+id_bouton_param+'" onclick="'+fonction_bouton_param+'()" alt="'+alt_bouton_param+'" src="'+ prefixe_image + '/'+src_image+'" class="icone_param">'
}



function json2Table(json, id_table) {
  	
	/*
	if(json[0] === undefined){
		json = transformer_en_array_de_JSON(json);
	}*/

	var id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value) 
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
    .map(col => `<th id="${col}" oncontextmenu="afficher_clic_droit_param(this)" class="header_table entete_sticky sekooly-mode-background">${col}</th>`)
    .join("");

  //map over array of json objs, for each row(obj) map over column values,
  //and return a td with the value of that object for its column
  //take that array of tds and join them
  //then return a row of the tds
  //finally join all the rows together
  let rows = json
    .map((row,index) => {
      if(row!==null){
	      let tds = cols.map(col => `<td>${row[col] !== null ? row[col] : ""}</td>`).join("");
	      return `<tr suppression_id="${row[id_table]}" id="${row[id_table]}"  class= "border_bottom une_ligne_de_donnees">${tds}</tr>`;
	  }
    })
    .join("");

  //build the table
  const table = `
	<table id="table_affichee">
		<thead class="">
			<tr class= "border_bottom">${headerRow}</tr>
		</thead>
		<tbody style="transform: rotateX(0deg);">
			${rows}
		</tbody>
	</table>`;

  
  

  return table;



}



function clic_ligne(ceci){


	/*
	//on enleve la selection précédente
	if ($(".une_ligne_de_donnees.selected")[0]) $(".une_ligne_de_donnees.selected")[0].className = "une_ligne_de_donnees"


	//on selectionne la cible Ceci
	ceci.className = "une_ligne_de_donnees selected"
	*/

	$('.une_ligne_de_donnees').removeClass('selected')

	//on enleve toute selection précedente
	//on selectionne la cible
	$(ceci).addClass('selected')

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

	//console.log(e.target.cellIndex)

	//si double clic sur un champ contenant ";" -> on fait une liste des Cycles (admin) OU Matieres (profs) en check box
	//si parmi les parametres auto -> interdire
	//sinon: saisie libre
	
	var ancienne_valeur = e.target.innerText;
	var id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value) 


	var liste_index_params_auto = ',' + parametres_automatiques.map(e => $('[id="'+e+'"].header_table.entete_sticky:visible')).filter(e => e.length > 0).map(e => e[0].cellIndex).join(',') +','
	var liste_index_oui_non = ',' + champs_oui_ou_non.map(e => $('[id="'+e+'"].header_table.entete_sticky:visible')).filter(e => e.length > 0).map(e => e[0].cellIndex).join(',') +','
	//console.log(liste_index_oui_non)

	var est_classe = $("#Classe")[0] ? e.target.cellIndex === $("#Classe")[0].cellIndex : false
	var est_classe_principale = $("#Classe_principale")[0] ? e.target.cellIndex === $("#Classe_principale")[0].cellIndex : false
	var est_liste_options = $("#liste_options")[0] ? e.target.cellIndex === $("#liste_options")[0].cellIndex : false
	var nest_pas_onglet_classes = id_parametre !== "Classes"

	var est_optionnel = $("#nom_liste_et_coefs")[0] ? e.target.cellIndex === $("#nom_liste_et_coefs")[0].cellIndex : false

	if (nest_pas_onglet_classes && (est_classe || est_classe_principale || est_liste_options)){


		var titre_fenetre = est_liste_options ? "Matières optionnelles" : "Classe(s)"

		//mini fenetre de checkbox
		//avec ok et annuler
		var les_matieres = JSON.parse(recuperer('Matieres'))
		if (les_matieres === null){
			rechercher_tout('Matieres').then(function(snapshot){

				liste_JSON = snapshot
				//liste_JSON = ordonner(id_parametre,liste_JSON)
				stocker('Matieres', JSON.stringify(liste_JSON ? liste_JSON : ""))
				les_matieres = JSON.parse(recuperer('Matieres'))

				valeurs_possibles = valeurs_possibles_modification_classes(e, id_parametre, les_matieres, est_liste_options)				
				formulaire_choix_checkbox(titre_fenetre,e, ancienne_valeur, e.target.parentNode.id,valeurs_possibles,ancienne_valeur.split(';'),id_parametre === "Administration")

			})

			
		}else{
			valeurs_possibles = valeurs_possibles_modification_classes(e, id_parametre, les_matieres, est_liste_options)
			formulaire_choix_checkbox(titre_fenetre,e, ancienne_valeur, e.target.parentNode.id,valeurs_possibles,ancienne_valeur.split(';'),id_parametre === "Administration")

		}
		

	}else if(est_optionnel){
		var index_matiere = $('.header_table:contains("Classe_Matiere")')[0].cellIndex
		var nom_matiere = $('.une_ligne_de_donnees.selected > td')[index_matiere].innerText
		formulaire_id_liste_options(e, nom_matiere)

		
	}else if(liste_index_params_auto.includes(','+ e.target.cellIndex +',')){
		alert("Impossible de modifier ce paramètre car c'est une valeur automatiquement attribuée par Sekooly.")
		return false

	//couleurs
	}else if(liste_couleurs.includes(ancienne_valeur)){
		formulaire_choix_checkbox("Couleur", e, ancienne_valeur, e.target.parentNode.id,liste_couleurs,ancienne_valeur,true)

	//oui ou non
	}else if(liste_index_oui_non.includes(','+ e.target.cellIndex +',')){
		/*
		console.log("\n\n\n")
		console.log(champs_oui_ou_non)
		console.log(liste_index_oui_non)
		console.log(e.target.cellIndex)
		console.log(champs_oui_ou_non[e.target.cellIndex])
		*/

		var nom_champ_dblclic = $(".header_table.entete_sticky")[e.target.cellIndex].innerText
		//console.log(nom_champ_dblclic)
		formulaire_choix_checkbox(nom_champ_dblclic, e, ancienne_valeur, e.target.parentNode.id,["oui","non"],ancienne_valeur,true)

	}else{






		//actualiser la case
		var nouvelle_valeur = prompt("Indiquez la nouvelle valeur",ancienne_valeur);









		//récupérer la table ET le nom du champ mise à jour
		//si on a mis à jour Matiere dans Matieres -> Mettre à jour (Classe_Matiere)
		var numero_colonne_modifiee = e.target.cellIndex
		var indice_matiere = -1
		$('.header_table:contains("Matiere")').each(function(index,element){if(element.innerText === 'Matiere') indice_matiere = element.cellIndex })

		//console.log({numero_colonne_modifiee})
		//console.log({indice_matiere})


		if(id_parametre==='Matieres' && numero_colonne_modifiee === indice_matiere){

			//enlever la virgule partout => éviter les problemes dans la fiche CC
			nouvelle_valeur = nouvelle_valeur.replaceAll(',','')

			ancienne_valeur_classe_matiere = $('.selected')[0].id
			valeur_classe = ancienne_valeur_classe_matiere.split('|')[0].replaceAll('(','')
			nouveau_data = {
				"Classe_Matiere": '(' + valeur_classe + '|' +nouvelle_valeur+ ')'
			}


			if(nouvelle_valeur !== null && nouvelle_valeur.length > 0){


				//on actualise d'abord le Classe_Matiere
				console.log("Remplacer",ancienne_valeur_classe_matiere,"par",nouveau_data.Classe_Matiere)			
				actualiser('Matieres', 'Classe_Matiere', ancienne_valeur_classe_matiere, nouveau_data).then(async function(retour){


					//console.log(retour)
					nom_table = 'Matieres'
					table_JSON_local = await rechercher_tout(nom_table)


					//mettre à jour la colonne Classe_Matiere
					var indice_classe_matiere = $('.header_table:contains("Classe_Matiere")')[0].cellIndex
					$('.selected')[0].children[indice_classe_matiere].innerText = nouveau_data.Classe_Matiere;


					//mettre à jour les données locales
					//actualiser_json_local_et_drive(nom_table, table, champ_actualise, ancienne_valeur, nouvelle_valeur, valeur_champ_reference)
					actualiser_json_local_et_drive(nom_table, table_JSON_local, 'Classe_Matiere', ancienne_valeur_classe_matiere, nouveau_data.Classe_Matiere, ancienne_valeur_classe_matiere)

					//actualiser le id
					e.target.closest("td").parentNode.id = nouveau_data.Classe_Matiere


					//mettre à jour toutes les notes de cette ancienne Classe_Matiere vers la nouvelle
					mettre_a_jour_table('Notes','Classe_Matiere',ancienne_valeur_classe_matiere,'Classe_Matiere',nouveau_data.Classe_Matiere)

					//mettre à jour toutes les appreciations de cette ancienne Classe_Matiere vers la nouvelle
					mettre_a_jour_table('Appreciations','Classe_Matiere',ancienne_valeur_classe_matiere,'Classe_Matiere',nouveau_data.Classe_Matiere)

					//mettre à jour toutes les NOTIFS de cette ancienne Classe_Matiere vers la nouvelle
					mettre_a_jour_table('Notifs','Classe_matiere',ancienne_valeur_classe_matiere,'Classe_matiere',nouveau_data.Classe_Matiere)


					//mettre à jour toutes les VISIO de cette ancienne Classe_Matiere vers la nouvelle
					mettre_a_jour_table('Visio','Classe_matiere',ancienne_valeur_classe_matiere,'Classe_matiere',nouveau_data.Classe_Matiere)

					//réassigner les profs de la matiere
					reassigner_prof(ancienne_valeur_classe_matiere, nouveau_data.Classe_Matiere)


					//actualiser la matière
					suite_actualiser_double_clic(e, ancienne_valeur, nouvelle_valeur)


				})


			}
			
		}else{

			suite_actualiser_double_clic(e, ancienne_valeur, nouvelle_valeur)


		}











		

	}
}

async function reassigner_prof(ancienne_valeur_classe_matiere, nouvelle_valeur_classe_matiere){
	var les_profs = get_les_profs(ancienne_valeur_classe_matiere)
	console.log({les_profs})
	les_profs.forEach(function(un_prof){
		console.log(un_prof['Classe'])
		ses_nouvelles_matieres = un_prof['Classe'].replaceAll(ancienne_valeur_classe_matiere,nouvelle_valeur_classe_matiere)
		console.log(ses_nouvelles_matieres)
		mettre_a_jour_table('Profs','Identifiant',un_prof['Identifiant'],'Classe',ses_nouvelles_matieres)
	})
}


async function mettre_a_jour_table(nom_table,champ_reference,valeur_champ_reference,champ_a_update,valeur_champ_update){
	const { data, error } = await supabase
		.from(nom_table)
		.update({ [champ_a_update]: valeur_champ_update })
		.match({ [champ_reference]: valeur_champ_reference })

	console.log({[nom_table]: data})
	console.log({error})

	if(error!==null){
		alert("Erreur de mise à jour de la table " + nom_table+ ":",error)
	}
}



var current_event={};

function formulaire_id_liste_options(e, nom_matiere){
	current_event = e
	//console.log({e})
	
	var ancienne_valeur = e.target.innerText
	//console.log({ancienne_valeur})

	var id_liste = ancienne_valeur && ancienne_valeur !== "null" && ancienne_valeur.includes('|') ? ancienne_valeur.split('|')[0].split('(')[1] : ""
	var liste_coef = ancienne_valeur && ancienne_valeur !== "null" && ancienne_valeur.includes('|') ? ancienne_valeur.split('|')[1].split(')')[0] : ""
	

	//console.log({id_liste})
	//console.log({liste_coef})

	var html_final =  `<form><div class="donnees_saisies"><div class="une_donnee_saisie" style="margin-bottom: 20px;"><label>Nom de liste (Exemples: science, arts, langue, spécialité, ...)</label><input class="donnee" value="`+id_liste+`" id="id_liste" name="id_liste"></div><div class="une_donnee_saisie" style="margin-bottom: 20px;"<label>Coefficients possibles séparés par une virgule (Exemple: 5,16)</label><input class="donnee" value="`+liste_coef+`" id="liste_coef" name="liste_coef"></div><rouge id="coef_nok" style="display: none;">Merci de saisir un nom de liste et des coefficients corrects.</rouge></div></form>`
	creer_mini_popup("<rouge>En remplissant ce champ, <b id='nom_matiere'>"+nom_matiere + "</b> devient une matière OPTIONNELLE pour les élèves.</rouge>", html_final,"Rattacher à la liste","assigner_liste_et_coef('"+liste_coef+"')")
}


async function assigner_liste_et_coef(liste_anciens_coefs){

	const nom_matiere = $('b#nom_matiere').text()
	
	var id_liste = $("#id_liste")[0].value
	var liste_coef = $("#liste_coef")[0].value.replaceAll(" ","")

	var tout_est_ok = verif_option(id_liste,liste_coef)

	if(!tout_est_ok){
		$("#coef_nok").show()

	}else{
		$("#mini_popup").remove()

		var resultat = ""
		if (id_liste.length + liste_coef.length > 0){
			resultat = '(' + id_liste + "|" + liste_coef + ')'
		
			//dans la base de données => fonction maj_coef_liste_options(ancienne_option, nouvelle_option)
			const anciennes_options = liste_anciens_coefs.split(',').map(coef => nom_matiere + ' coef ' + coef)
			const nouvelles_options = liste_coef.split(',').map(coef => nom_matiere + ' coef ' + coef)
			
			//pour actualiser la liste des élèves
			const res = await maj_coef_liste_options(nom_matiere,anciennes_options,nouvelles_options)
			console.log({res})

		//vider
		}else{
			alert("Matiere devenue non optionnelle.")
			resultat = null
		}
		
		//console.log({resultat})

		suite_actualiser_double_clic(current_event, current_event.target.value, resultat, true)
	}
}

/*
recuperer_parametres()
setTimeout(function(){
	choisir_ce_parametre('Matieres')
	switch_mode()
	setTimeout(function(){
		$('#filtre_parametre').val('TGA').change()
		$("tr[id='(TGA|Épreuve Abandonnée en Première Histoire Géographie Géopolitique Sciences Politiques)']").click()

		setTimeout(function(){
			$("tr[id='(TGA|Épreuve Abandonnée en Première Histoire Géographie Géopolitique Sciences Politiques)']").children('td:contains("EA|6.5")').dblclick()
		}, 500)

	}, 1000)
	

}, 2000)
*/

async function maj_coef_liste_options(nom_matiere,anciennes_options,nouvelles_options){
	//alert('anciennes_options: ' + anciennes_options.join(';') + '\n\n' + 'nouvelles_options: ' + nouvelles_options.join(';') )

	//si 1 coef dans la nouvelle option => assigner directement à %matiere coef% la nouvelle option
	if(nouvelles_options.length === 1){
		const nouvelle_option = nouvelles_options[0]

		//pour chaque ancienne option => changer le coef au nouveau
		anciennes_options.forEach(async function(ancienne_option){
			console.log({ancienne_option})
		
			//récupérer tous les élèves concernés
			const { data, error } = await supabase
									  .from('Eleves')
									  .select('Identifiant, liste_options')
									  .like('liste_options', '%'+ancienne_option+'%')
			
			//pour chaque eleve => remplacer ancienne_option par nouvelle_option
			eleves = data.map(function(eleve) {
				return {
					Identifiant: eleve.Identifiant,
					liste_options: eleve.liste_options.replace(ancienne_option,nouvelle_option)
				}
			})

			console.log({eleves})
			maj_coef_eleves(eleves,nom_matiere)

		})


	//sinon (plusieurs coef possibles) => proposer de modifier manuellement 1 par 1 (après 2 secondes)
	}else{
		setTimeout(function(){

			//aller dans Eleves => chercher le terme %nom_matiere coef%
			const valider_maj_manuelle = confirm('❓ La matière optionnelle '+nom_matiere+' a désormais PLUSIEURS coefficients.\n'+
												  'Voulez-vous actualiser les options des élèves concernés ?')
			if(valider_maj_manuelle){	
				voir_les_eleves_concernes(nom_matiere)
			}

		}, 2000)
		return 0
	}
	

}

async function maj_coef_eleves(eleves, nom_matiere){
	if(eleves.length > 0){

		const {data, error} = await supabase.from('Eleves')
											.upsert(eleves)
											.select()

		var msg = 'MISE A JOUR : '+ data.length +' élèves inscrits à '+nom_matiere+'.'
	}else{
		var msg = 'Aucun élève inscrit à cette option pour le moment.'
	}

	setTimeout(function(){
		afficher_alerte(msg)
	}, 3000)

}

function voir_les_eleves_concernes(nom_matiere_optionnelle){
	if($('#titre_fenetre').text() !== "Paramètres") recuperer_parametres()
	choisir_ce_parametre("Eleves")
	setTimeout(function(){
		$('[id="zone_recherche"').val(nom_matiere_optionnelle)
		chercher()
		element_DOM('liste_options').scrollIntoView()
		afficher_fenetre(true)
	},1000)
}

function verif_option(id_liste,liste_coef){
	var pas_tous_des_chiffres = liste_coef.replaceAll(' ','').split(',').some( function(un_coef) {
		//console.log({un_coef})
		return isNaN(Number(un_coef))
	});

	return ((id_liste.length > 0 && liste_coef.length > 0) || (id_liste.length + liste_coef.length === 0)) && !pas_tous_des_chiffres && right(liste_coef,1) !== ","
}


function valeurs_possibles_modification_classes(e, id_parametre, les_matieres, est_liste_options){
	
	if(est_liste_options){

	
		var valeurs_possibles = []
		var indice_classe = $('.header_table:contains("Classe")')[0].cellIndex
		var classe_eleve = $('.une_ligne_de_donnees.selected > td')[indice_classe].innerText;

		//console.log({classe_eleve})

		var les_matieres_interm = les_matieres.filter(function(m){
			//console.log(m)
			return m['nom_liste_et_coefs'] && m['nom_liste_et_coefs'].trim().length > 0 && m['Classe'] === classe_eleve 
		})
		var valeurs_possibles_interm = valeursUniquesDeCetteKey(les_matieres_interm,"Matiere")
		valeurs_possibles_interm = valeurs_possibles_interm.filter(v => v.trim().length > 0)

		console.log({valeurs_possibles_interm})

		//pour chaque option possible
		valeurs_possibles_interm.forEach(function(une_option) {
			//console.log({une_option})
			//console.log({classe_eleve})
			les_coefs_de_loption = les_matieres.find(matiere => matiere['Classe_Matiere'] === '(' + classe_eleve + '|' + une_option  + ')' )

			if(les_coefs_de_loption['nom_liste_et_coefs'].includes('|')){
				console.log({les_coefs_de_loption})
				les_coefs_de_loption = les_coefs_de_loption['nom_liste_et_coefs'].split('|')[1].replaceAll(')','').split(',')

			}else{
				les_coefs_de_loption = []
			}
			

			
			//pour chaque coef, créer Matière-coef 
			les_coefs_de_loption.forEach( function(le_coef) {
				valeurs_possibles.push('('+classe_eleve+'|'+une_option+')' + " coef " + le_coef)	
			})
			
			
		});

	}else{

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

	}



	return valeurs_possibles
}


async function suite_actualiser_double_clic(e, ancienne_valeur, nouvelle_valeur, forcing){


		if(nouvelle_valeur===null && !forcing) return -1;
		chargement(true);

		var nom_table = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)
		var nom_champ_reference = identifiant_par_table(nom_table)
		var valeur_champ_reference = e.target.closest("td").parentNode.id	
		//console.log({valeur_champ_reference})
		var numero_colonne = e.target.closest("td").cellIndex		
		var champ_actualise = $(".header_table.entete_sticky")[numero_colonne].innerText
		
		var ancien_data = {[champ_actualise] : ancienne_valeur}
		var nouveau_data = {[champ_actualise] : nouvelle_valeur}
		
		var table_JSON_local = await rechercher_tout(nom_table) //JSON.parse(recuperer(nom_table));

		//console.log(table_JSON_local)

		/*
		console.log(nom_table)
		console.log(nom_champ_reference)
		console.log(valeur_champ_reference)
		console.log(numero_colonne)
		console.log(champ_actualise)		
		console.log(nouveau_data)*/
		
		if(table_JSON_local !== null){

		
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
		}


		if(valeur_champ_reference.includes('admin')){
			alert("Impossible de modifier l'admin car cet utilisateur est utile pour administrer votre plateforme sekooly.")
			chargement(false)
			return 0
		}


		try{

			retour = actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data);
			//console.log({retour})

			e.target.closest("td").innerText = nouvelle_valeur;

			//si c'est un id qui a été mis à jour
			//console.log(champ_actualise + " VS " + nom_champ_reference)
			if (champ_actualise === nom_champ_reference){

				//-> on met à jour le ID du parent
				e.target.closest("td").parentNode.id = nouvelle_valeur

			}

			//-> on met à jour le JSON local
			actualiser_json_local_et_drive(nom_table, table_JSON_local, champ_actualise, ancienne_valeur, nouvelle_valeur, valeur_champ_reference)



		}catch(error) {
			alert("Mise à jour impossible: " + error)
			e.target.closest("td").innerText = ancienne_valeur
			if (champ_actualise === nom_champ_reference){

				//-> on met comme avant le ID du parent
				e.target.closest("td").parentNode.id = ancienne_valeur

			}
			//-> on remet le JSON local comme avant
			actualiser_json_local_et_drive(nom_table, table_JSON_local, champ_actualise, nouvelle_valeur, ancienne_valeur, valeur_champ_reference)

			console.error(error)
		}


		chargement(false);


}





function formulaire_choix_checkbox(nom_champ, e, ancienne_valeur, identifiant, liste_en_array, liste_deja_cochés, un_seul_choix){
	
	$("#mini_popup").remove()

	const entetes = '<div id="mini_popup" class="mini_popup" style="overflow: hidden auto;"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="'+ prefixe_image + '/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div>'
	const barre_recherche = un_seul_choix ? "" : '<input id="chercher_matiere" class="barre_recherche" name="chercher_matiere" placeholder="Rechercher une matière...">'
	const titre_formulaire = `<div class="entete_sticky titre_mini_popup" style="border-radius: 5px;">
								<div>`+nom_champ+` pour <b>`+identifiant+`</b></div>
								`+barre_recherche+`
							</div>

							<div id="liste_classe_matieres" class="liste_centree"><div>`
	


	var bouton_assigner = '</div></div><button type="button" class="rendre sekooly-mode-background" id="assigner">Assigner</button></div>'
	var html_final = entetes + titre_formulaire + '<div id="wrap_elements">' + actualiser_les_elements(liste_en_array, liste_deja_cochés, un_seul_choix)  + '</div>'  + bouton_assigner

	$("body").append(html_final)

	$("#assigner").on("click",function(ceci){
		suite_actualiser_double_clic(e, ancienne_valeur, retourner_les_cochés())
		$("#mini_popup").remove()
	})	

	$(".choix_liste_matiere").on('change', function(e){
		e.target.parentNode.className = e.target.checked ? "en_gras" : ""
	})

	//réactualiser si changement 
	$("#chercher_matiere").on('keyup change', function(e){

		const mot_cle = e.target.value.trim()

		//par défaut : on remet tout
		$("#wrap_elements").children().removeClass("invisible")

		//masquer tout ce qui ne contient pas ce mot clé NON VIDE
		if(mot_cle !== ""){
			Array.from($("#wrap_elements").children()).forEach(function(el){
				if(!el.innerText.toLowerCase().includes(mot_cle.toLowerCase())){
					$(el).addClass("invisible")		
				}
			})
		}

		//si aucun résultat => prévenir
		if($("#wrap_elements").children('.invisible').length === $("#wrap_elements").children('').length){
			afficher_alerte('Aucun résultat trouvé pour le mot clé "' + mot_cle + '"')
		}
		
	})


}

function actualiser_les_elements(liste_en_array, liste_deja_cochés, un_seul_choix){

	
	//pour chaque element de la liste
	var les_elements = ""
	for (var i = 0; i <liste_en_array.length;i++) {
		est_coché = liste_deja_cochés ? (liste_deja_cochés.indexOf(liste_en_array[i]) >=0 ? "checked" : "" ): ""
		classe_initiale = est_coché === "checked" ? "en_gras" : ""
		type_element = un_seul_choix ? "radio" : "checkbox"
		les_elements = les_elements+'<div class="'+classe_initiale+'"><input class="choix_liste_matiere" type="'+type_element+'" id="'+liste_en_array[i]+'" name="choix_liste_matiere" '+est_coché+'><label for="'+liste_en_array[i]+'">'+liste_en_array[i]+'</label></div>'

	}

	return les_elements
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

	if(table){

		table.some(function(valeur,index){
			if(valeur[champ_actualise] === ancienne_valeur){
				valeur[champ_actualise] = nouvelle_valeur
				return true;
			}
		})

		stocker(nom_table,JSON.stringify(table));

	}else{

	}


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
	if(!id_parametre) id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)

	//console.log(id_parametre)
	effacer(id_parametre)
	//$('[id="'+id_parametre+'"]').click()
	un_menu_clic(id_parametre)


}

function ajouter_donnees_parametres(id_parametre){
	if(!id_parametre) id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)
	var liste_champs = recuperer_entetes_params(id_parametre)
	//console.log(liste_champs)
	creer_formulaire_ajout_donnee_html(id_parametre, liste_champs)
}


function dupliquer_donnees_parametres(id_parametre){
	if(!id_parametre) id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)
	id_ligne_dupliquee = 0

	var liste_champs = recuperer_entetes_params(id_parametre)
	//console.log(liste_champs)
	creer_formulaire_ajout_donnee_html(id_parametre, liste_champs, true)
}

async function supprimer_ligne_parameters(id_parametre){
	if(!id_parametre) id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)


	

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

	var validation = confirm("⚠️Voulez-vous supprimer cette ligne ? Cette action est irréversible. (" + id_ligne +")")
	if(validation){


		if(id_ligne.includes('admin')){
			alert("Impossible de supprimer l'admin car cet utilisateur est utile pour administrer votre plateforme sekooly.")
			chargement(false)
			return 0
		}

		chargement(true)
		//si besoin (classe ou matière): supprimer sur le drive
		if (id_parametre === "Classes" || id_parametre === "Matieres"){
			var donnees_parametres = await rechercher_tout(id_parametre) // JSON.parse(recuperer(id_parametre))
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
	if(!id_parametre) id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)

	//alert("Téléchargement ici.")
	var choix_entete_ou_tout_html = '<div id="mini_popup" class="mini_popup">'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<div id="entete-fenetre" style="display: inline-flex;float: right;">'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<img alt="X" src="'+ prefixe_image + '/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div>'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<div>Télécharger '+id_parametre+'</div><select style="width: 80%;" id="choix_download_param">'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<option value="En-têtes">En-têtes</option>'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<option value="Tout">Toutes les données</option></select>'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<button type="button" class="rendre sekooly-mode-background" onclick="telecharger_parametre()">Télécharger</button></div>'

	$("#mini_popup").remove()
	$("body").append(choix_entete_ou_tout_html)

}


async function telecharger_parametre(id_parametre, entetes_seulement){

	if(!id_parametre) id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)

	//alert(id_parametre)

	var entetes_seulement = ( $("#choix_download_param")[0] && $("#choix_download_param")[0].value === "En-têtes" )|| (entetes_seulement ? entetes_seulement : false )
	var suite_nom = entetes_seulement ? "-modele-" : ""
	var nom_filtre = $('[id="filtre_parametre"]').val() !== "(Tous)" ? $('[id="filtre_parametre"]').val() : $('[id="zone_recherche"]').val()
	var suite_extrait = $('tr').length !== $('tr:visible').length && !entetes_seulement ? '-extrait '+nom_filtre+'-' : ''
	var nom_fichier =  id_parametre+suite_nom+suite_extrait+maintenant_sans_caracteres_speciaux();


	/*
	var contenu_recup = entetes_seulement ? nom_des_champs(id_parametre) : await rechercher_tout(id_parametre) // recuperer(id_parametre) ? JSON.parse(recuperer(id_parametre)) : nom_des_champs(id_parametre)
	//console.log(contenu_recup)

	//uniquement les champs utiles 
	if(entetes_seulement){
		contenu_recup = contenu_recup.filter(e => parametres_automatiques.indexOf(e) < 0)
	}
	//console.log(contenu_recup)


	var contenu = convertir_csv(contenu_recup, entetes_seulement)
	//console.log(contenu)
	


	enregistrer_donnees_en_csv(contenu, nom_fichier);

	*/

	
	await telecharger_tableau_en_csv(nom_fichier,entetes_seulement,id_parametre)
	






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
	var id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value) 
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
				probleme = key.trim()
				return champs_initiaux.indexOf(probleme) < 0 
  			})
  			if(cle_problematique){
  				alert("Problème d'import: le champ '" + probleme + "' n'est pas reconnu dans la table '"+id_parametre+"'.")
				//import qu'une fois
				$('#fichier_import').remove()
  				return 0
  			}


  			//tous les champs obligatoires sont renseignés 
  			//tous les champs automatiques renseignés automatiquement
  			//aucun champ IDENTIFIANT déjà existant tenté d'être rajouté
  			//fenêtre de résumé: OK ou pas OK
  			var nombre_lignes = Number(json_final.length) 
  			//la liste des champs doit être récupérée depuis le serveur
  			var liste_champs =  champs_initiaux
  			
  			var avec_s = nombre_lignes>1?'s':''
  			confirmation = confirm('Nous avons détecté ' + nombre_lignes + ' ligne'+avec_s+' avec ' + Object.keys(json_final[0]).length + ' champs. Voulez-vous importer ces données ?')
  			if(confirmation){
  				chargement(true)
  				
  				for (var i = 0; i< json_final.length; i++) {
  					/*Afficher la barre de progression ici...*/
  					afficher_alerte("Progression de l'import: " + Number(100*i/json_final.length).toFixed(2) + "% ("+i+"/"+json_final.length+")")
  					//try{
  						//ajouter_un_element(id_parametre, json_final[i])
  						//console.log(json_final[i])
  						creer_formulaire_ajout_donnee_html(id_parametre, liste_champs, false, json_final[i] ? json_final[i] : "")
						ajouter_donnees_saisies(id_parametre, i<(json_final.length-1)) //deuxieme parametre vaut FAUX -> on est sur le dernier
  					

  					/*	
  					}catch(error){
  						console.error(error)
  						alert(error)
  					}
  					*/
  				}

  				afficher_alerte("Import terminé.")
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

	id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)

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

	return nom_des_champs(id_parametre)

}



function creer_formulaire_ajout_donnee_html(id_parametre, liste_champs, avec_duplicata, une_donnee){
	var entete = '<div class="mini_popup" style="overflow:auto;" id="mini_popup"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="'+ prefixe_image + '/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div><div>Nouvelle donnée dans ' +id_parametre+ '</div><form class="donnees_saisies" id="donnees_saisies" >'
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

			html_du_input = '<input class="donnee" '+donnee_dupliquee.replaceAll('"',"'") +' id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" '+disabled +'>'
			

			//SI SANS DUPLICATION
			if(!une_donnee){

				//console.log(liste_champs[i] + ": " + donnee_dupliquee)


				//si c'est Couleur_matiere
				if(liste_champs[i] === "Couleur_matiere"){

					html_du_input = '<select class="donnee" id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" >'
					liste_couleurs = liste_couleurs.sort()

					for (j = 0; j<liste_couleurs.length ; j ++){
						selectionner_la_donnee_dupliquee = ""
						if($(".selected")[0]) selectionner_la_donnee_dupliquee = liste_couleurs[j] === $(".selected")[0].children[i].innerText ? " selected " : ""
						html_du_input = html_du_input + '<option '+selectionner_la_donnee_dupliquee+' value ="'+liste_couleurs[j]+'">'+liste_couleurs[j]+'</option>'
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

					valeurs_possibles = valeurs_possibles.sort()
					
					
					//il y a des valeurs déja existantes
					if(valeurs_possibles.length === 0){
						html_du_input = '<input class="donnee" '+donnee_dupliquee+' id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" '+disabled+'>'
					
					//aucune valeur déja existante
					}else{

						html_du_input = '<select class="donnee" id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" '+multiple_choix_classes + " " + disabled +'>'
					
						for (j = 0; j<valeurs_possibles.length ; j ++){
							selectionner_la_donnee_dupliquee = ""
							if($(".selected")[0]) selectionner_la_donnee_dupliquee = valeurs_possibles[j] === $(".selected")[0].children[i].innerText ? " selected " : ""
							html_du_input =  html_du_input + '<option '+selectionner_la_donnee_dupliquee+' value ="'+valeurs_possibles[j]+'">'+valeurs_possibles[j]+'</option>'
						}

						html_du_input = html_du_input + '<option value="nouveau" style="font-style: oblique;" >Nouvelle valeur</option>' + '</select>'

					}

				//si c'est oui ou non
				}else if(champs_oui_ou_non.indexOf(liste_champs[i]) > 0){
					selected_oui = donnee_dupliquee.includes("oui") ? " selected " : ""
					selected_non = donnee_dupliquee.includes("non") ? " selected " : ""
					html_du_input = '<select class="donnee" value="non" id="'+liste_champs[i]+'" name="'+liste_champs[i]+'" ><option value="non" '+selected_non+'>non</option><option value="oui" '+selected_oui+'>oui</option></select>'
				}


			}
			
			

			//console.log(html_du_input)
			var display_element = " style='display:"+(disabled ? "none" : "")+"';"			
			liste_champs_html = liste_champs_html + '<div class="une_donnee_saisie" '+display_element+' id="'+liste_champs[i]+'"><label>'+liste_champs[i]+'</label>'+html_du_input+'</div>'
		}
	}

	var boutons_ajouter_annuler = '</form><button type="button" class="rendre sekooly-mode-background" onclick="ajouter_donnees_saisies(\''+id_parametre+'\')">Ajouter</button>'
	boutons_ajouter_annuler = boutons_ajouter_annuler + '<button type="button" class="rendre sekooly-mode-background" onclick="$(\'#mini_popup\').remove()">Annuler</button></div>'
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

			if(plateforme_prete() === true && !ne_pas_actualiser){

				alert("Merci de remplir tous les champs.")
				return -1;

			}

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
		
		//en mode matière ET (matiere = cycle -> commun OU matiere = Vie scolaire)
		//sinon, non 
		$(".donnee[id='commun_au_cycle']")[0].value = id_parametre === "Matieres" && ($(".donnee#Cycle")[0].value === $(".donnee#Matiere")[0].value || $(".donnee#Matiere")[0].value === "Vie scolaire") ? "oui" : "non"

		if(id_parametre === "Classes"){
		/******* POUR CLASSE ********/

			//ID_URL
			$(".donnee[id='ID_URL']")[0].value = id_de_la_classe
			//URL 
			$(".donnee[id='URL']")[0].value  = "https://drive.google.com/drive/folders/" + id_de_la_classe
			//URL_Mapping
			$(".donnee[id='URL_Mapping']")[0].value  = id_de_la_classe
			//id_google_calendar
			$(".donnee[id='id_googlecalendar']")[0].value  = id_googlecalendar
			//URL_agenda
			$(".donnee[id='URL_agenda']")[0].value  = "https://calendar.google.com/calendar/embed?src="+id_googlecalendar+"&ctz=" + my_ctz()
			
		}else if(id_parametre === "Matieres"){
		/******* POUR MATIERE *******/


			//Classe_Matiere
			$(".donnee[id='Classe_Matiere']")[0].value = '('+ la_classe+'|'+ la_matiere +')'
			//ID_URL
			$(".donnee[id='ID_URL']")[0].value = id_de_la_matiere				
			//URL
			$(".donnee[id='URL']")[0].value = "https://drive.google.com/drive/folders/" + id_de_la_matiere		
			//URL_Mapping
			$(".donnee[id='URL_Mapping']")[0].value = id_de_la_matiere
			//classe_id
			$(".donnee[id='classe_id']")[0].value = id_de_la_classe

		}




				
	}else if(id_parametre === "Eleves" || id_parametre === "Profs" || id_parametre === "Administration"){
		//obliger la saisie de tous les identifiants



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

		$(".donnee[id='liste_notifs_lues']")[0].value = ","
		if($(".donnee[id='Numero_telephone']")[0]) $(".donnee[id='Numero_telephone']")[0].value = "123456"
		
			
	}


	var mon_JSON = convertir_saisie_en_JSON("donnees_saisies", id_parametre)
	//console.log(id_parametre)
	console.log({mon_JSON})

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
		

		est_obligatoire = parametres_facultatifs.indexOf(nom_champ) < 0


		//vide et non obligatoire : on rajoute pas
		if(valeur_saisie.trim() === "" && !est_obligatoire){

			virgule = ""

		//non vide OU obligatoire : on rajoute
		}else{
			saisie = saisie + '"' + [nom_champ]  + '"' + ":"+ '"' +   valeur_saisie  +'"'
			virgule = i===liste_champs_saisie.length-1 ? "" : ","
		}

		saisie = saisie + virgule

	}
	
	//on enleve la derniere virgule si besoin
	if(right(saisie,1)===',') saisie = left(saisie,saisie.length-1)

	saisie = saisie + "}"
	//console.log({saisie})
	return saisie
}

function formulaire_rempli(nom_formulaire){


	return !Array.from($("#"+nom_formulaire)[0].children).some(function(valeur, index, array) {
		//console.log(valeur.id)
		est_actif = !$(".donnee[id='"+valeur.id+"']")[0].disabled
		est_vide = $(".donnee[id='"+valeur.id+"']")[0].value === ""
		est_obligatoire = parametres_facultatifs.indexOf(valeur.id) < 0
		//console.log(valeur.id + " : " + (est_actif && est_vide))

		return est_actif && est_vide && est_obligatoire
	});


}


//utile pour les quiz : formulaire_rempli_ok("quiz-form")
function formulaire_rempli_ok(nom_formulaire){
	return !Array.from($("#"+nom_formulaire)[0].children).some(function(valeur, index, array) {
		//console.log(valeur.name)
		est_actif = !$("[name='"+valeur.name+"']")[0].disabled
		est_vide = $("[name='"+valeur.name+"']")[0].value === ""
		
		//console.log(valeur.name + " : " + (est_actif && est_vide))

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



function choix_classe_bulletin(){
	les_matieres = JSON.parse(recuperer("mes_matieres"))
	les_classes = valeursUniquesDeCetteKey(les_matieres,'Classe')
	les_classes.sort()
	//console.log(les_classes) 

	elements_html = "Classe:<select id='classe_saisie_bulletin'>"
	for (i = 0; i< les_classes.length;i++){
		elements_html += '<option value="'+les_classes[i]+'">'+les_classes[i]+'</option>'
	}
	elements_html += "</select>"
	

	creer_mini_popup("Choisissez la classe à consulter",elements_html, "Voir les saisies de note","voir_bulletin_classe_choisie()")
	
}

function choix_classe_fiche(){

	//si c'est un prof ou un admin
	var mon_type = recuperer('mon_type')
	if(mon_type.includes("Admin") || mon_type.includes("Profs") ){
		voir_fiche_classe_choisie()	
	}else{
		if(JSON.parse(recuperer("mes_donnees"))['Est_délégué'] === "oui"){
			voir_fiche_classe_choisie()	
		}else{
			alert("❌ Vous n'avez pas accès au conseil de classe car vous n'êtes pas délégué.")
		}
		
	}
	
	

}


function telecharger_fiche_en_pdf(){
	chargement(true)



	periode = $("#la_periode_bulletin>option")[0].innerText + ' ' + $("#la_periode_bulletin").val()
	classe = $("#la_classe_fiche").val()
    var avec_coef = $("#avec_coef:checked").length > 0
    var phrase_mode_examen = $("#examens_uniquement").is(":checked") ? ' EXAMENS ' : ""

	nom_fichier_sans_extension = 'FICHE CC '+periode+' - ' + phrase_mode_examen +classe  
	if(avec_coef) nom_fichier_sans_extension = nom_fichier_sans_extension + " (coefs personnels)"
	nom_fichier = nom_fichier_sans_extension+'.pdf'
	le_style = $('style#mon_style')[0].innerText



    var divContents = $("#menu_params").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html><head><title>'+nom_fichier+'</title>');
    printWindow.document.write('<style>'+le_style+'</style>');
    printWindow.document.write('</head><body style="max-width:100%;min-width:100%;"><h2>'+nom_fichier_sans_extension+'</h2>');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');


	//supprimer toutes les lignes à ignorer
	printWindow.document.querySelectorAll('.ignore').forEach(e => e.remove())

    //si AVEC coef par élève
    if(avec_coef){
    	//supprimer la ligne de coef globale
    	printWindow.document.getElementsByClassName('ligne_coefs')[0].remove()


    	les_eleves = printWindow.document.querySelectorAll('.une_ligne_de_donnees')

    	//pour chaque ligne d'élève
    	les_eleves.forEach(function(un_eleve){
    		//récupérer les coefs
    		ses_coefs = ["","","","","","COEFF"]
    		toutes_ses_notes = $('[id="'+un_eleve.id+'"] > .moyenne_eleve')
    		toutes_ses_notes.each(function(i,v){
				ses_coefs.push((v.getAttribute('coef') === "-" || !v.getAttribute('coef')) ? "" : v.getAttribute('coef')  )
			})


    		//console.log(un_eleve.id,ses_coefs)
    		//insérer au-dessus sa ligne de coeff
    		nouvelle_ligne_coef = document.createElement('tr')
    		nouvelle_ligne_coef.innerHTML = ses_coefs.map(e => '<th>'+e+'</th>').join('')
    		//console.log(nouvelle_ligne_coef.innerHTML)
    		$(nouvelle_ligne_coef).insertBefore(un_eleve)
		})



    }





    les_coches = $('#coches_colonnes_export')[0]
    //console.log({les_coches})

    for(numero_colonne=0;numero_colonne<les_coches.childNodes.length;numero_colonne++){

    	indice_colonne=numero_colonne+1
    	ma_case=les_coches.childNodes[numero_colonne].childNodes[0]
    	la_colonne_entiere = $(printWindow.document.body).find('td:nth-child('+indice_colonne+'),th:nth-child('+indice_colonne+')')

    	/*
    	console.log('\n\n\n')
    	console.log({ma_case})
    	console.log({la_colonne_entiere})
    	*/

    	//console.log({indice_colonne})
    	if(!ma_case.checked){
    		//console.log("on masque la colonne " + indice_colonne)
    		la_colonne_entiere.hide();	
    	}else{
    		//console.log("on garde la colonne " + indice_colonne)
    		la_colonne_entiere.show();
    	}
    }


    //ne pas afficher les coches à l'impression
    printWindow.document.getElementById('coches_colonnes_export').remove()
    supprimer_les_boutons(printWindow)

    printWindow.document.close();
    printWindow.print();


	chargement(false)

}

function supprimer_les_boutons(printWindow){
	var element = printWindow.document.getElementsByTagName("button"), index;

	for (index = element.length - 1; index >= 0; index--) {
	    element[index].parentNode.removeChild(element[index]);
	}
}

function telecharger_fiche_en_csv(nom_fichier){
	
	htmlToCSV(nom_fichier)
}



function htmlToCSV(filename,ne_pas_telecharger) {
	var data = [];
	var rows = $('tr:visible:not(.ignore)') // document.querySelectorAll("tr:not(.ignore):visible"); //uniquement les lignes non ignorées ET VISIBLES
	var avec_coef = $("#avec_coef:checked").length > 0
	
	if(avec_coef) filename = filename + " (coefs personnels)"

	//pour chaque ligne
	for (var i = 0; i < rows.length; i++) {



		//on récupère les valeur colonnes de la ligne i
		var row = [], cols = rows[i].querySelectorAll("td, th");

		//avant chaque nouvelle ligne d'élève: si avec_coef: rajouter ',,,,,COEFF,' + matieres_de_classe.map(e => !e['nom_liste_et_coefs'] && e['coefficient_matiere'] > 0 ? e['coefficient_matiere'] :  "-").join(',')
		//si on doit rajouter la colonne
		if(avec_coef && rows[i].className.includes('une_ligne_de_donnees')){
			for (var j = 0; j < cols.length; j++) {

				//si on est sur une ligne de données d'élève
				valeur_coef = cols[j].getAttribute('coef') ? cols[j].getAttribute('coef').replaceAll('.',',') : ""
		        row.push(valeur_coef);
	        }


	        //rajouter un saut de ligne
	        data.push(row.join("\t")); 
	        row = []
		}

		//si AVEC COEF PERSONNELS et qu'on est sur la ligne des coefs génériques -> on zappe
		if(avec_coef && rows[i].className.includes('ligne_coefs')){

		//si sans coef ou si on n'est pas sur la ligne des coefs génériques
		}else{
			for (var j = 0; j < cols.length; j++) {
				valeur_cellule = cols[j].innerText

				//forcer la virgule des décimales
				if(!isNaN(Number(valeur_cellule))) valeur_cellule = valeur_cellule.replaceAll('.',',')
		        row.push(valeur_cellule);
	        }
			        
			data.push(row.join("\t")); 	

		}	
	}
	//console.log({data})
	if(!ne_pas_telecharger){
		downloadCSVFile(data.join("\n"), filename);	
	}

	return data
	
}


function downloadCSVFile(csv, filename) {
	var universalBOM = "\uFEFF";
	var a = window.document.createElement('a');
	a.setAttribute('href', 'data:text/csv; charset=utf-8,' + encodeURIComponent(universalBOM+csv));
	a.setAttribute('download', filename+'.csv');
	window.document.body.appendChild(a);
	a.click();
	a.remove()
}



function choix_telechargement_fiche(){


	var la_periode_bulletin = $('#la_periode_bulletin').val()
	var la_classe_fiche = $('#la_classe_fiche').val()


	if(!la_periode_bulletin) return alert("Merci de choisir une période.")
	if(!la_classe_fiche) return alert("Merci de choisir une classe.")



	if($("#choix_download_fiche").val()==='csv'){
		telecharger_fiche_en_csv('FICHE CC '+ la_classe_fiche)
	}else if($("#choix_download_fiche").val()==='pdf'){
		telecharger_fiche_en_pdf()
	}

	$('#mini_popup').remove()
}

function telecharger_fiche_en_cours(){

	id_parametre = 'Fiche CC ' + $("#la_classe_fiche").val()

	//alert("Téléchargement ici.")
	var choix_entete_ou_tout_html = '<div id="mini_popup" class="mini_popup">'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<div id="entete-fenetre" style="display: inline-flex;float: right;">'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<img alt="X" src="'+ prefixe_image + '/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div>'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<div>Télécharger '+id_parametre+'</div><select style="width: 80%;" id="choix_download_fiche">'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<option value="csv">EN CSV</option>'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<option value="pdf">EN PDF</option></select>'
	choix_entete_ou_tout_html =  choix_entete_ou_tout_html + '<button type="button" class="rendre sekooly-mode-background" onclick="choix_telechargement_fiche()">Télécharger</button>'
															+'<div><input name="avec_coef" type="checkbox" checked="false" id="avec_coef"><label for="avec_coef">Exporter avec les coefficients par élève</label></div>'
															+'</div>'


	$("#mini_popup").remove()
	$("body").append(choix_entete_ou_tout_html)

}

function voir_fiche_classe_choisie(){

	$("#mini_popup").remove()
	vider_fenetre("Fiches de Conseil de classe")

	les_matieres = JSON.parse(recuperer("mes_matieres"))
	les_classes = valeursUniquesDeCetteKey(les_matieres,'Classe')
	les_classes.sort()
	//console.log({les_classes}) 


	nom_periode_bulletin=data_etablissement['config_notes']['nom_periode_bulletin']
	liste_periodes = Object.keys(data_etablissement['config_notes'][nom_periode_bulletin])

	//rajouter le bouton de téléchargement
	$("#entete-fenetre").append('<img id="actualiser-fiche" alt="télécharger" class="download-btn window-btn" src="'+ prefixe_image + '/img_actualiser.png">')

	//si on est admin -> on peut telecharger la fiche
	if(recuperer('mon_type').includes('Admin')) $("#entete-fenetre").append('<img id="download-fiche" alt="télécharger" class="download-btn window-btn" src="'+ prefixe_image + '/img_download.png">')


	au_clic("#actualiser-fiche","render_fiche()")
	au_clic("#download-fiche","telecharger_fiche_en_cours()")


	html_bouton_appreciations  = identifiants_appreciations.indexOf(recuperer('identifiant_courant'))>=0 ? `<button class="sekooly-mode" onclick="generer_appreciations()">Génerer les appréciations</button>` : ''

	//rajouter la liste des classes
	$('#fenetre').append(`<div id="conteneur_menu">
		
		<div id="menu_haut" class="menu_haut" style="text-align: center;">
			<select onchange="render_fiche(true)" class="un_menu" id="la_periode_bulletin">
				<option value="" id="--">`+nom_periode_bulletin+`</option>
				`+ liste_periodes.map(periode => '<option value="'+periode+'" id="'+periode+'">'+periode+'</option>') +`
			</select>
			<select onchange="render_fiche()" class="un_menu" id="la_classe_fiche">
				<option value="" id="--">Classe</option>
				`+ les_classes.map(classe => '<option value="'+classe+'" id="'+classe+'">'+classe+'</option>') +`
			</select>
			<rouge style="cursor: pointer;" id="aide_fiche">(?)</rouge>
			`+html_bouton_appreciations+`
			<div><rouge class="sans_appreciation "><i style="font-size: 12px;">Les éventuelles cases en rouge sont sans appréciations saisies.</i></rouge></div>
			<label class="sekooly-mode" for="examens_uniquement"><input id="examens_uniquement" type="checkbox">Examens uniquement</label>
		</div>
		<div id="menu_params" style="overflow-x: auto;" class="menu_params">
			<div id="previsualisation"></div>
		</div>
	</div>`)

	au_clic("#aide_fiche","alerte_aide_fiche()")
	au_changement("#examens_uniquement","render_fiche()")
	afficher_fenetre(true)

}

function alerte_aide_fiche(){
	var mon_type = recuperer('mon_type')
	var texte = mon_type.includes('Admin') ?  "ℹ️ Pour télécharger/imprimer la fiche des colonnes cochées sous format pdf, pensez à ajuster l'échelle de mise en page vers 60% avant d'enregistrer."
				: "ℹ️ Pour chaque élève, émettez votre avis en cliquant sur le bouton de la dernière colonne 'Avis du Conseil de classe'." 
	alert(texte)
}


function recuperer_moyennes_generales(){
	var a_stocker = {}

	$('tr.une_ligne_de_donnees').each(function(){
		identifiant_eleve = $(this).attr('id')
		moyenne_eleve = Number( $(this).children('.moyenne_generale').text() )
		a_stocker[identifiant_eleve] = moyenne_eleve

	});

	//console.log({liste_a_stocker})
	return a_stocker
}

function calcul_moyenne_generale_toutes_periodes(periode_en_cours,la_classe_fiche){

	//par rapport aux  saisies antérieures
	var liste_periodes_principales = get_resultat(racine_data + 'periodes_saisies' + '?' + apikey) 
	
	//périodes de ce qui a été saisi depuis
	if(liste_periodes_principales){
		liste_periodes_principales = liste_periodes_principales.map(e => e['periode_bulletin'])
	
	//aucune saisie pour le moment -> on part sur data_etablissement
	}else{
		liste_periodes_principales = Object.keys(data_etablissement.config_notes[recuperer_nom_periodes_principales_bulletin()])
	}


	console.log({liste_periodes_principales})

	var a_stocker = {}

	liste_periodes_principales.forEach(async function(une_periode,index_periode){

		//await render_fiche(false,false,une_periode).then(e => console.log({moyennes_periodes}))
		
	})


	return moyennes_periodes
}



function get_toutes_les_mentions_etablissement(){
	var url = racine_initiale + 'Mentions?nom_etablissement=eq.'+data_etablissement['nom_etablissement']
			+'&order=note_max_exclus.desc' 
			+'&' +api_initial
	var les_mentions = get_resultat(url)

	return les_mentions
}

function phrase_supp_mention(les_mentions, est_niveau_max,valeur){



	var res = les_mentions.filter(e => (valeur >= Number(e['note_min_inclus']) && valeur < Number(e['note_max_exclus'])))
	if (res.length === 0) res =  les_mentions.filter(e => (valeur >= Number(e['note_min_inclus']) ))
	return res[0] ? (est_niveau_max ? res[0]['conclusion_dernier_niveau'] : res[0]['conclusion']) : ''



}

function niveau_classe(classe){
	var url = racine_data + 'Classes?Classe=eq.'+classe
			+'&' +apikey

	var res = get_resultat(url)
	if(res){
		res = res.map(e => e['niveau'])
	}


	return res[0] ? Number(res[0]) : -1
}

function niveau_max_cycle(cycle){
	var url = racine_data + 'Classes?cycle=eq.'+cycle
			+'&' +apikey

	var res = get_resultat(url)
	if(res){
		res = res.map(e => Number(e['niveau']))
		//console.log({res})
	}

	return res ? Math.max(...res) : -1

}

function classes_niveau(cycle,niveau,terminaison){
	var classes = []
	var url = racine_data + 'Classes?cycle=eq.'+cycle
			+'&niveau=eq.' +niveau
			+'&order=Classe.asc' 
			+'&' +apikey

	//console.log({url})
	var res = get_resultat(url)
	if(res){
		res = res.map(e => e['Classe'])
		//console.log({res})

		if(terminaison && terminaison.length > 1){ //POUR STMG
			classes = res.filter(e => right(e.toLowerCase(),terminaison.length) === terminaison.toLowerCase() )
			if(classes.length === 0) classes = res.map(e => e.split(' ')[0])	
		}else{
			classes = res.map(e => e.split(' ')[0])	
		}

		
	}
	

	//valeurs uniques
	classes = [...new Set(classes)].join(' ou ')		
	console.log({classes})

	return classes || '(?)'
}

function classe_niveau_max(cycle){
	var classes = []
	var niveau_max = niveau_max_cycle(cycle)
	var url = racine_data + 'Classes?cycle=eq.'+cycle
			+'&niveau=eq.' +niveau_max
			+'&order=Classe.asc' 
			+'&' +apikey

	//console.log({url})
	var res = get_resultat(url)
	if(res){
		classes = res.map(e => e['Classe'])
	}


	return classes.join(', ')
}

function check_si_niveau_max(cycle,classe){

	var niveau_max = niveau_max_cycle(cycle)
	var niveau = niveau_classe(classe)

	return niveau === niveau_max
}

function ma_moyenne_annuelle(identifiant_eleve,valeurs_moyennes_periodes){
	
}

async function generer_appreciations(){


	var appreciations_generees = []
	var la_periode_bulletin = $('#la_periode_bulletin').val()
	var la_classe_fiche = $('#la_classe_fiche').val()
	var mon_cycle = JSON.parse(recuperer('mes_matieres'))[0]['Cycle']
			

	var classe_actuelle = la_classe_fiche
	//console.log({classe_actuelle})
	

	var avec_conclusions = parmi_les_periodes_avec_conclusions_finales(la_periode_bulletin)

	//si on est passe en terminale -> on garde la bonne terminaison
	var classe_fiche_interm = left(la_classe_fiche,1)==='T' ? 'T ' + right(la_classe_fiche,la_classe_fiche.length-1) : la_classe_fiche
	var classe_passage = classes_niveau(mon_cycle,(niveau_classe(classe_actuelle)+1), classe_fiche_interm.split(' ')[1])

	if(!la_periode_bulletin) return alert("Merci de choisir une période.")
	if(!la_classe_fiche) return alert("Merci de choisir une classe.")

	var texte_confirmation = 'appréciations'
	if(avec_conclusions) texte_confirmation += ' (+ conclusions du jury final)'
	var confirmation = confirm("⚠️ Voulez-vous regénérer les "+texte_confirmation+" pour la période "+la_periode_bulletin+" de la classe de "+la_classe_fiche+"? Cette action est irréversible.")
	
	//récupérer les éventuelles appréciations de la vie scolaire (retard / absence notamment)
	var toutes_les_appreciations_de_la_classe = await supabase
												.from('Appreciations')
												.select('*')
												.eq('Classe_Matiere','('+la_classe_fiche+'|Vie scolaire)')
												.eq('periode_principale',la_periode_bulletin)
	toutes_les_appreciations_de_la_classe = toutes_les_appreciations_de_la_classe.data
	console.log({toutes_les_appreciations_de_la_classe})

	if(!confirmation) return false

	chargement(true)
	var est_niveau_max = check_si_niveau_max(mon_cycle, la_classe_fiche)
	var les_mentions =  get_toutes_les_mentions_etablissement()


	if(avec_conclusions){
		var valeurs_moyennes_periodes = calcul_moyenne_generale_toutes_periodes(la_periode_bulletin,la_classe_fiche)
	} 


	//récupérer toutes les appréciations possibles de la classe
	var toutes_les_phrases_appreciations = await supabaseInit
												.from('Liste_appreciations')
												.select('*')
												.eq('nom_etablissement',data_etablissement['nom_etablissement'])
												.order('note_max_exclus', { ascending: false })
	toutes_les_phrases_appreciations = toutes_les_phrases_appreciations.data
	console.log({toutes_les_phrases_appreciations})

	//pour chaque moyenne générale
	$('.moyenne_generale').each(function(index,la_moyenne){

		temp = {}

		valeur = Number(la_moyenne.innerText)
		identifiant_eleve = la_moyenne.parentNode.id
		prenom_eleve =  identifiant_eleve.includes('.') ? identifiant_eleve.split('.')[1] : identifiant_eleve
		prenom_eleve = prenom_eleve[0].toUpperCase() + prenom_eleve.slice(1); 

		var a_afficher= {[prenom_eleve]:valeur}
		console.log(a_afficher)
		chargement(true)
		//afficher_alerte(JSON.stringify(a_afficher),false)

		//filtrer pour ne garder que les appréciations [min;max[
		appreciations_possibles = toutes_les_phrases_appreciations.filter(e => valeur >= Number(e['note_min_inclus']) && valeur < Number(e['note_max_exclus'])  ) //nouveau: cas où ca dépasse ?
		//console.log({appreciations_possibles})

		//si au dela du max : garder l'appreciation max
		if(appreciations_possibles.length === 0){
			//console.log({toutes_les_phrases_appreciations})
			appreciations_possibles = toutes_les_phrases_appreciations.filter(e => valeur >= Number(e['note_min_inclus']) )	
			//console.log({appreciations_possibles})
		} 

		choix_appreciation = piocher_aleatoirement(appreciations_possibles)
		choix_appreciation = choix_appreciation['contenu']

		//NOUVEAU: rajouter la conclusion finale depuis la table Mentions si besoin
		var phrase_supp = ""
		if (avec_conclusions){
			// utiliser la moyenne generale sur toutes les périodes
			var moyenne_generale_toutes_periodes = valeur //todo: via function ma_moyenne_annuelle(identifiant_eleve,valeurs_moyennes_periodes)
			//console.log({les_mentions})
			//console.log({est_niveau_max})
			phrase_supp = phrase_supp_mention(les_mentions,est_niveau_max,moyenne_generale_toutes_periodes)
			//console.log({phrase_supp})

			//console.log({classe_passage})
			phrase_supp = phrase_supp.replaceAll('#classe_actuelle#',classe_actuelle).replaceAll('#classe_passage#',classe_passage)

			//console.log({phrase_supp_FINAL: phrase_supp})
		}

		if(phrase_supp) choix_appreciation = choix_appreciation + '\n' + phrase_supp
		choix_appreciation = choix_appreciation.replaceAll('#X#',prenom_eleve)
		//console.log({choix_appreciation})

		appreciation_initiale = toutes_les_appreciations_de_la_classe.filter(e => e['identifiant_eleve'] === identifiant_eleve)
		if(appreciation_initiale.length > 0){
			temp['id'] = appreciation_initiale[0]['id']	
			temp['identifiant_appreciateur'] = appreciation_initiale[0]['identifiant_appreciateur']
			tout = JSON.parse(appreciation_initiale[0]['contenu'])
			//console.log({tout})
			retards = tout['retards'] || ""
			absences = tout['absences'] || ""
		}else{
			temp['identifiant_appreciateur'] = recuperer('identifiant_courant')
			retards = ""
			absences = ""
		}


		//pousser le [id] eleve,admin,class|vie scolaire,periode,contenu
		temp['Classe_Matiere'] = '('+la_classe_fiche+'|Vie scolaire)'
		temp['identifiant_eleve'] = identifiant_eleve
		temp['periode_principale'] = la_periode_bulletin
		temp['contenu'] = JSON.stringify({"retards":retards,"absences":absences,"contenu":choix_appreciation})
		appreciations_generees.push(temp)



	})

	console.log({appreciations_generees})


	//PEUT ETRE: supprimer toutes les appréciations de la (classe|Vie scolaire) de la période courante (inutile)
	chargement(false)

	//A DECOMMENTER
	await stocker_appreciations_server(appreciations_generees)
	render_fiche()

}

function piocher_aleatoirement(mon_array){
	const random = Math.floor(Math.random() * mon_array.length);
	return mon_array[random];
}

async function render_fiche(ignorer_absence_classe, pour_bulletin, la_periode_bulletin_precise){


	return new Promise(async function (res, rej) {



		while ($("#fiche_conseil")[0]) $("#fiche_conseil").remove()

		var la_classe = $('#la_classe_fiche').val()
		var la_periode_bulletin = la_periode_bulletin_precise || $('#la_periode_bulletin').val()


		if(!la_periode_bulletin) return alert("Merci de choisir une période.")
		if(!la_classe) return ignorer_absence_classe ? false : alert("Merci de choisir une classe pour créer la fiche.")
		
		//afficher les matières en colonnes
		//var toutes = JSON.parse(recuperer('mes_matieres'))
		var toutes = await rechercher('Matieres', 'Classe', la_classe, '*') 
		//console.log({toutes})
		
		//toutes = toutes.body
		var matieres_de_classe = toutes.filter(e => e['Classe'] === la_classe).sort()
		//console.log({matieres_de_classe})

		//afficher les eleves en lignes
		var les_eleves = await rechercher("Eleves", "Classe", la_classe, "")
		//console.log({les_eleves})

		//console.log('\n\n\n')

		//console.log({pour_bulletin})
		return await creer_fiche(la_classe, matieres_de_classe, les_eleves, pour_bulletin, la_periode_bulletin_precise)
	})
}

function nouveau_tableau_avec_ce_titre(id_tableau, array_ligne){

	var mes_matieres = JSON.parse(recuperer("mes_matieres"))
	mes_matieres = valeursUniquesDeCetteKey(mes_matieres,"Matiere")
	var mon_type =recuperer('mon_type')


  let headerRow = array_ligne
    .map(function(col){
    	classe_supplementaire = mes_matieres.indexOf(col) >= 0 &&  mon_type === "Profs" ? 'votre_matiere ' : ""
    	return `<th id="${col}" class="`+classe_supplementaire+`header_table entete_sticky sekooly-mode-background">${col}</th>`
    })
    .join("");

  //build the table
  const table = `
	<table id="`+id_tableau+`">
		<thead class="">
			<tr class= "border_bottom">${headerRow}</tr>
		</thead>
		<tbody id="contenu_`+id_tableau+`" style="transform: rotateX(0deg);">
		</tbody>
	</table>`;
 
  

  return table;

}



function une_ligne_eleve(id_tableau,objet_une_ligne,numero){

	//si l'éleve est ignoré -> on le met dans .ignore
	var eleves_ignores = recuperer('eleves_ignores') || ""
	var classe_supplementaire = eleves_ignores.includes("," + objet_une_ligne["Identifiant"] +",") ? " ignore " : " une_ligne_de_donnees "
	//console.log({[objet_une_ligne["Identifiant"]]:classe_supplementaire})

	//console.log(objet_une_ligne)
	return `<tr class= "border_bottom `+classe_supplementaire+`" liste_options="${objet_une_ligne["liste_options"]}" id="${objet_une_ligne["Identifiant"]}" >
				<th class="border_bottom">
					${numero}
				</th>
				<th class="border_bottom">
					${objet_une_ligne["Nom"]}
				</th>
				<th class="border_bottom">
					${objet_une_ligne["Prénom(s)"]} 
				</th>
				<th class="border_bottom">
					${objet_une_ligne["ancien_ou_nouveau"]}
				</th>
				<th class="border_bottom">
					${objet_une_ligne["Date_de_naissance"]} 
				</th>
				<th class="border_bottom">
					${objet_une_ligne["sexe"]}
				</th>
			</tr>`

}

function actualiser_liste_champs_masques(){
	var cases_non_coches = $('[name="exporter_colonne"]')
	var liste_colonnes_masquees_fiche = recuperer("liste_colonnes_masquees_fiche") || ""

	cases_non_coches.each(function(index_case,la_case){
		//console.log("\n\n\n")
		nom_colonne = $('th.header_table')[index_case].innerText
		//console.log("la case:",nom_colonne)
		//console.log("checked:",la_case.checked)


		if(!la_case.checked){
			if(!liste_colonnes_masquees_fiche.includes(','+nom_colonne+',')) liste_colonnes_masquees_fiche += ',' + nom_colonne + ','
		}else{
			if(liste_colonnes_masquees_fiche.includes(','+nom_colonne+',')) liste_colonnes_masquees_fiche = liste_colonnes_masquees_fiche.replaceAll(','+nom_colonne+',','')
		}
	})

	//stocker quoi qu'il arrive
	stocker('liste_colonnes_masquees_fiche',liste_colonnes_masquees_fiche)
	render_fiche()

}

var moyennes_periodes = {}
async function creer_fiche(la_classe, matieres_de_classe, les_eleves, pour_bulletin, la_periode_bulletin_precise){

	if(les_eleves.length === 0) return alert("❌ Aucun élève n'est inscrit dans la classe de "+la_classe+".")

	var la_periode_bulletin = la_periode_bulletin_precise || $("#la_periode_bulletin").val()

	//créer la premiere ligne: Numéro, Nom, Prénom(s), Ancien/Nouveau, Date de naissance, Sexe, [matieres], Moyenne, Rang, Absence(s) demi-journée(s), Retards//, Epreuve facultative
	var premiere_ligne = 'Numéro,Nom,Prénom(s),Ancien/Nouveau,Date de naissance,Sexe,'+matieres_de_classe.map(e => e['Matiere']).join(',')+',Moyenne générale,Rang,Absence(s) demi-journée(s),Retards,Appréciations de la Vie Scolaire,Avis du Conseil de classe'
	premiere_ligne = premiere_ligne.split(',')
	//console.log({premiere_ligne})
	//console.log('\n\n\n')



	//créer un tableau
	$('#previsualisation').append(nouveau_tableau_avec_ce_titre('fiche_conseil',premiere_ligne))





	if(recuperer('mon_type').includes('Admin')){


		//créer une ligne de coche si on veut ou non exporter la colonne en pdf
		var nb_de_cases = premiere_ligne.length
		//console.log({premiere_ligne})
		//console.log({nb_de_cases})
		var liste_colonnes_masquees_fiche = recuperer('liste_colonnes_masquees_fiche') || ""
		var coches_des_matieres = premiere_ligne.map(function(e) {
			checked = liste_colonnes_masquees_fiche.includes(','+e+',') ? "" : "checked"
			//console.log({[e]:checked})
			return '<th><input class="header_table entete_sticky sekooly-mode-background" name="exporter_colonne" type="checkbox" '+checked+'></th>' 
		}).join('')
		//console.log({coches_des_matieres})

		var html_cases = '<tr class="border_bottom" id="coches_colonnes_export">'+ coches_des_matieres +'</tr>'
		//console.log({html_cases})
		$('thead').prepend(html_cases)

		//au moment de changer le checked de [name="exporter_colonne"], actualiser la liste des colonnes masquées sur les fiches
		au_clic('[name="exporter_colonne"]', 'actualiser_liste_champs_masques()')





	}








	//rajouter les coefficients SI CEST PAS UNE OPTION PARTICULIERE à partir de la colonne 7 (indice 6)
	var ligne_coefs = ',,,,,COEFF,' + matieres_de_classe.map(function(e){
		return  (!e['nom_liste_et_coefs'] || e['nom_liste_et_coefs'] === 'null') && e['coefficient_matiere'] > 0 ? e['coefficient_matiere'] :  "-"
	} ).join(',')
	ligne_coefs = ligne_coefs.split(',')
	//console.log({ligne_coefs})
	$("#contenu_fiche_conseil").append('<tr class="ligne_coefs">'+ligne_coefs.map(un_coef => `<th>${un_coef}</th>`)+'</tr>')



	//console.log({pour_bulletin})
	var liste_profs = await recuperer_profs(true)
	var appreciations_classe = await rechercher_contenant_motif('Appreciations','Classe_Matiere','('+la_classe+'|')

	//ne garder que les appréciations de la bonne période
	//console.log({avant: appreciations_classe})
	appreciations_classe = appreciations_classe.filter(e => e['periode_principale'] === $("#la_periode_bulletin").val())
	//console.log({apres: appreciations_classe})

	//pour chaque élève		
	await les_eleves.forEach(async function(un_eleve,indice_eleve){
		$("#contenu_fiche_conseil").append(une_ligne_eleve('fiche_conseil',un_eleve,indice_eleve+1))
		//console.log({indice_eleve})

		//récupérer les notes de l'élève pour la période
		//rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, nombrelimite, orderby)
		les_notes = await rechercher("Notes", "identifiant_eleve", un_eleve['Identifiant'], false, false, "Classe_Matiere,saison_note")
		//console.log({les_notes})

		//ne garder que les notes de la période choisie
		les_notes = les_notes.filter(e => e['periode_bulletin'] === la_periode_bulletin)
		//console.log({les_notes})

		//si on ne garde que les examens -> filtrer
		var examens_uniquement = $("#examens_uniquement").is(":checked")
		if(examens_uniquement){
			les_notes = les_notes.filter(e => e['saison_note'] === 'Examen')
		}
	
		await rajouter_notes_eleves(un_eleve['Identifiant'],les_notes,matieres_de_classe,appreciations_classe)
		

		//apres le dernier élève -> rajouter la valeur des min-max-moy
		if(indice_eleve === les_eleves.length-1){

			//console.log("dernier élève!",un_eleve)
			setTimeout(async function(){

				/*
				await rajouter_min_max_moy(matieres_de_classe)				
				await rajouter_rangs_eleves()
				*/

				await actualiser_colonnes_calculees_bulletins(matieres_de_classe)
				await rajouter_absences_et_retards_eleves(la_periode_bulletin)
				

				//console.log({pour_bulletin})

				if(pour_bulletin && Object.keys(pour_bulletin).length > 0) {

						//console.log({pour_bulletin})

						//récupérer les données de l'identifiant élève apres 3 secondes
						//selectionner la ligne qui m'intéresse
						//console.log({leleve})


						if(pour_bulletin['leleve'] === 'tous'){
							//id_eleve = "---"
							//alert("CREATION DES BULLETINS DE TOUTE LA CLASSE EN COURS DE DEVELOPPEMENT.")

							
							var nb_eleves = les_eleves.length

							//pour chaque eleve NON IGNORE
							$('tr.une_ligne_de_donnees').not('.ignore').each(function(index_eleve,eleve){
								id_eleve = eleve.id
								est_dernier = index_eleve===nb_eleves-1

								//réassigner la fenetre a ce qui est déjà ouvert
								faire_le_bulletin(id_eleve,pour_bulletin['la_periode'],pour_bulletin['la_classe'],liste_profs,est_dernier)
								
							})




						}else{
							id_eleve = pour_bulletin['leleve']
							faire_le_bulletin(pour_bulletin['leleve'],pour_bulletin['la_periode'],pour_bulletin['la_classe'],liste_profs,true)
						}






				}



				//on stocke les moyennes générales
				moyennes_periodes[la_periode_bulletin] = recuperer_moyennes_generales()
				console.log({moyennes_periodes})


							
				//rajouter le grisement des matieres à ignorer
				Array.from($('[name="exporter_colonne"]:checkbox:not(:checked)')).map(function(unchecked_matiere){
					const element_colonne_matiere = unchecked_matiere.parentNode
					console.log({element_colonne_matiere},element_colonne_matiere)
					console.log(element_colonne_matiere.cellIndex)
					
					$('[id="fiche_conseil"] th:nth-child('+(element_colonne_matiere.cellIndex+1)+')').addClass("ignore")
				})
				
			},1000)

			
		}


	})


	chargement(false)
					
	au_clic("tr.une_ligne_de_donnees","clic_ligne(this)")

	au_clic_droit("tr.une_ligne_de_donnees,tr.ignore","afficher_ou_masquer_ligne_entiere(event)")
	
	//console.log({matieres_de_classe})




}


async function faire_le_bulletin(id_eleve,la_periode,la_classe,liste_profs,imprimer){
	chargement(true)
	$('tr[id="'+id_eleve+'"]').click()
	//console.log("avant")
	
	compteur = await creer_et_envoyer_donnees_bulletin_eleve(id_eleve,la_periode,la_classe,liste_profs,imprimer)
	//console.log("apres")
	
	if(imprimer){
		chargement(false)	
	}
	
	return compteur


}

async function actualiser_colonnes_calculees_bulletins(matieres_de_classe){
	//recalculer les min/max/moy
	await rajouter_min_max_moy()

	//recalculer les rangs
	await rajouter_rangs_eleves()

	return true
}

function afficher_ou_masquer_ligne_entiere(event){
	event.preventDefault()
	event.stopPropagation()
	var ceci = event.target.parentNode
	
	//console.log({ceci})
	var nom_complet = ceci.children[1].innerText + " " + ceci.children[2].innerText
	var verbe = ceci.className.includes('ignore') ? 're-afficher':'masquer'
	var emoji_ask = verbe === 're-afficher' ? '👀' : '❌'
	var choisir_affichage = confirm(emoji_ask+' Voulez-vous '+verbe+' la ligne de '+nom_complet +' lors de l\'export et de la génération des bulletins ?')

	//console.log({choisir_affichage})

	if(choisir_affichage){
		$(ceci).toggleClass('ignore')
		$(ceci).toggleClass('une_ligne_de_donnees')
		
		actualiser_colonnes_calculees_bulletins()

		//si on masque -> rajouter dans la liste à masquer
		var eleves_ignores = recuperer('eleves_ignores') || ""
		if(verbe==='masquer'){
			eleves_ignores += ',' +  ceci.id + ','
			
		//si on affiche -> retirer de la liste des masqués
		}else{
			eleves_ignores = eleves_ignores.replaceAll(','+ceci.id+',','')
		}
		//console.log({eleves_ignores})
		stocker('eleves_ignores',eleves_ignores)
	}


}

async function rajouter_min_max_moy(matieres_de_classe){

		if(!matieres_de_classe){
			var toutes = JSON.parse(recuperer('mes_matieres'))
			var la_classe = $("#la_classe_fiche").val()
			var matieres_de_classe = toutes.filter(e => e['Classe'] === la_classe).sort()			
		}

		var ligne_min = ',,,,,Min:'
		var ligne_max = ',,,,,Max:'
		var ligne_moy = ',,,,,Moy:'

		//pour chaque matière (le dernier +1 c'est pour la moyenne)
		for (numero_matiere=7;numero_matiere<7+matieres_de_classe.length+1;numero_matiere++){
			la_matiere = $( "th.header_table:nth-child("+numero_matiere+")").text()
			
			//console.log('\n\n\n')
					
			var maximum = ''
			var minimum = ''
			var moyenne = ''

			//calculer les min, max, moy, rang
			var toutes_les_notes_de_la_matiere = []
			//console.log(numero_matiere)


			$("tr:not(.ignore) > th.border_bottom:nth-child("+numero_matiere+")").each(function(index,e){
				if(e.textContent.length > 0){
					//console.log(Number(e.innerText))
					toutes_les_notes_de_la_matiere.push(Number(e.textContent))
				}else{
					//console.log("(vide)")
				}

			}) 

			


			//console.log('************'+la_matiere+'*************')
			//console.log({toutes_les_notes_de_la_matiere})

			if(toutes_les_notes_de_la_matiere.length > 0){

				minimum = Math.min(...toutes_les_notes_de_la_matiere).toFixed(2) 
				maximum = Math.max(...toutes_les_notes_de_la_matiere).toFixed(2) 

				const sum = toutes_les_notes_de_la_matiere.reduce((a, b) => a + b, 0);
				moyenne = (sum / toutes_les_notes_de_la_matiere.length).toFixed(2) || "";


			}


			/*
			console.log({minimum})
			console.log({maximum})
			console.log({moyenne})
			*/

			ligne_min += ','+minimum 
			ligne_max += ','+maximum 
			ligne_moy += ','+moyenne 

		}

		$('#ligne_min').remove()
		$('#ligne_max').remove()
		$('#ligne_moy').remove()


		ligne_min = ligne_min.split(',')
		ligne_max = ligne_max.split(',')
		ligne_moy = ligne_moy.split(',')
		$("#contenu_fiche_conseil").append('<tr id="ligne_min">'+ligne_min.map(note => `<th>${note}</th>`)+'</tr>')
		$("#contenu_fiche_conseil").append('<tr id="ligne_max">'+ligne_max.map(note => `<th>${note}</th>`)+'</tr>')
		$("#contenu_fiche_conseil").append('<tr id="ligne_moy">'+ligne_moy.map(note => `<th>${note}</th>`)+'</tr>')


		console.log("min max OK")
		return true
}

function moyenne_de_larray(times){
	const sum = times.reduce((a, b) => a + b, 0);
	const avg = (sum / times.length) || "";

	return avg
}

function rajouter_notes_eleves(identifiant_eleve,les_notes,matieres_de_classe,appreciations_classe){
	//console.log('\n\n\n-------------'+identifiant_eleve+'-------------')

	//console.log({appreciations_classe})

	var colonnes_notes = les_notes.map(function(une_note,indice_note){
		la_matiere = une_note['Classe_Matiere'].split('|')[1].replaceAll(')','')
		try {
			indice_matiere_sur_tableau = $(`[id="${la_matiere}"]`)[0].cellIndex
			return indice_matiere_sur_tableau + ':'+ une_note['identifiant_eleve'] + ':' + la_matiere  + ':' + une_note['saison_note']+ ':' +une_note['note']
		} catch(err){
			indice_matiere_sur_tableau = -1
			console.log({erreur : {
				error: err,
				identifiant_eleve: identifiant_eleve,
				une_note: une_note,
				la_matiere: la_matiere

			}})
		}
		
	})

	//console.log(colonnes_notes)
	var notes_a_rajouter = ""

	//pour chaque matière: calculer la moyenne de l'élève 
	matieres_de_classe.forEach(function(une_matiere,index_matiere){

		//console.log('\n\n\n')
		afficher_details_calcul_eleve_test(identifiant_eleve,'\n\n\n'+une_matiere['Matiere'])
		notes_de_la_matiere = colonnes_notes.map(e => e && e.includes(une_matiere['Matiere']) ? e.split(':')[3] + ':' + e.split(':')[4] : "" ).filter(e => e!== "")
		//console.log(notes_de_la_matiere)
		afficher_details_calcul_eleve_test(identifiant_eleve,{notes_de_la_matiere})

		//recuperer les notes NON examen -> faire la moyenne
		moyenne_journaliere = notes_de_la_matiere.filter(e => !e.includes('Examen')).map(e =>  Number(e.split(':')[1]))
		moyenne_journaliere = moyenne_de_larray(moyenne_journaliere)
		//console.log({[une_matiere['Matiere']]: moyenne_journaliere})
		afficher_details_calcul_eleve_test(identifiant_eleve,{moyenne_journaliere})


		//recuperer la note examen
		note_examen = notes_de_la_matiere.filter(e => e.includes('Examen')).map(e =>  Number(e.split(':')[1]))
		note_examen = moyenne_de_larray(note_examen)
		//console.log({[une_matiere['Matiere'] + ' EXAMEN']: note_examen})
		afficher_details_calcul_eleve_test(identifiant_eleve,{note_examen})



		//faire la moyenne générale (moyenne_journaliere*0.7+note_examen*0.3) et l'ajouter
		//les coefs valent 1 si l'autre est vide
		coef_examen = moyenne_journaliere>0 ? 0.6667 : 1
		coef_journalier = note_examen>0 ? 0.3333 : 1
		moyenne_generale_matiere = moyenne_journaliere * coef_journalier + note_examen * coef_examen


		if(moyenne_generale_matiere === 0){
			moyenne_generale_matiere = ""
		}else{
			moyenne_generale_matiere = moyenne_generale_matiere.toFixed(2)
		} 

		//if(identifiant_eleve==='hasiniatsy.fanambisoa' && une_matiere['Matiere'] === 'Physique Chimie') alert(moyenne_journaliere + ' et ' + note_examen + ' donc ' + moyenne_generale_matiere)
		afficher_details_calcul_eleve_test(identifiant_eleve,moyenne_journaliere + ' et ' + note_examen + ' donc ' + moyenne_generale_matiere)
		


		//check les coefs utiles
		liste_options_eleve = $("[id='"+identifiant_eleve+"']")[0].getAttribute('liste_options')
		coefficient_matiere = liste_options_eleve.includes(une_matiere['Classe_Matiere']) ? liste_options_eleve.split(';').filter(e => e.includes(une_matiere['Classe_Matiere']))[0].split(' coef ')[1] : $('.ligne_coefs > :nth-child('+(7+index_matiere)+')').text()
		//console.log({coefficient_matiere})
		afficher_details_calcul_eleve_test(identifiant_eleve,{coefficient_matiere})

		est_bonus = une_matiere['nom_liste_et_coefs'] && une_matiere['nom_liste_et_coefs'].toLowerCase().includes("bonus")
		
		//si on a une note sans appréciation -> en rouge
		var nb_appreciations_note = appreciations_classe.filter(e => e['Classe_Matiere'] === une_matiere['Classe_Matiere'] && e['identifiant_eleve'] === identifiant_eleve ).length
		sans_appreciation = nb_appreciations_note === 0 && moyenne_generale_matiere !== "" ? "sans_appreciation " : ""

		notes_a_rajouter += '<th class="'+sans_appreciation+'border_bottom moyenne_eleve" coef="'+coefficient_matiere+'" est_bonus="'+est_bonus+'">'+moyenne_generale_matiere+'</th>'




	})


	//console.log({[identifiant_eleve]:notes_a_rajouter})
	//trouver la ligne à mettre à jour et mettre la valeur de la moyenne
	$('tr[id="'+identifiant_eleve+'"]').append(notes_a_rajouter)


	//pour chaque moyenne-matiere de l'élève
	cumul_eleves = 0
	somme_coef_eleves = 0
	moyenne_generale = 0


	afficher_details_calcul_eleve_test(identifiant_eleve,'\n\n -------------------------------- CALCUL MOYENNE GENERALE FICHE CONSEIL -------------------------------- ')
	$('[id="'+identifiant_eleve+'"] > .moyenne_eleve').each(function(index,moyenne_matiere){



		est_bonus = moyenne_matiere.getAttribute('est_bonus')
		le_coef =  Number(moyenne_matiere.getAttribute('coef'))
		la_moyenne = moyenne_matiere.textContent

		//si la note vaut plus de 10
		//on prend le dernier digit + les chiffres apres la virgule si bonus
		if(est_bonus==="true" && Number(la_moyenne) > 10) la_moyenne = right(la_moyenne,4)


		la_moyenne = Number(la_moyenne)
		
		afficher_details_calcul_eleve_test(identifiant_eleve,'\n')
		afficher_details_calcul_eleve_test(identifiant_eleve,{index})
		afficher_details_calcul_eleve_test(identifiant_eleve,{le_coef})
		afficher_details_calcul_eleve_test(identifiant_eleve,{est_bonus})
		afficher_details_calcul_eleve_test(identifiant_eleve,{la_moyenne})
		afficher_details_calcul_eleve_test(identifiant_eleve,moyenne_matiere)
		afficher_details_calcul_eleve_test(identifiant_eleve,{somme_coef_eleves})



		//cumuler si on a une moyenne ET un coef ET la matière est cochée
		var matiere_cochee = $('#coches_colonnes_export > th input')[moyenne_matiere.cellIndex].checked
		afficher_details_calcul_eleve_test(identifiant_eleve,{matiere_cochee})

		if(la_moyenne && !isNaN(le_coef)   &&  matiere_cochee ){
			//if(identifiant_eleve===nom_eleve_test) console.log({'avant': cumul_eleves})
			afficher_details_calcul_eleve_test(identifiant_eleve,{'avant': cumul_eleves})

			calcul = la_moyenne*le_coef
			afficher_details_calcul_eleve_test(identifiant_eleve,{'rajouter': calcul})
			cumul_eleves += calcul

			//if(identifiant_eleve===nom_eleve_test) console.log({'apres': cumul_eleves})
			afficher_details_calcul_eleve_test(identifiant_eleve,{'apres': cumul_eleves})

			

			//si c'est PAS UN BONUS, alors on cumule la somme de coef
			if(est_bonus!=="true"){
				somme_coef_eleves += le_coef
			}
		}

	}) 
	
	/*
	if(identifiant_eleve===nom_eleve_test){
		console.log({cumul_eleves})
		console.log({somme_coef_eleves})
	}
	*/
	afficher_details_calcul_eleve_test(identifiant_eleve,'\n\n----- FINAL -----')
	afficher_details_calcul_eleve_test(identifiant_eleve,{cumul_eleves})
	afficher_details_calcul_eleve_test(identifiant_eleve,{somme_coef_eleves})
	
	
	if(cumul_eleves > 0 && somme_coef_eleves > 0) moyenne_generale = Number(cumul_eleves/somme_coef_eleves).toFixed(2)


	//on met la valeur de la colonne de moyenne générale
	//$('tr[id="'+identifiant_eleve+'"]').append('<th class="border_bottom moyenne_generale">'+moyenne_generale+'</th>')
	
	var indice_moyenne_generale = $('[id="Moyenne générale"]')[0].cellIndex
	afficher_details_calcul_eleve_test(identifiant_eleve,{somme_coef_eleves})

	//on supprime l'éventuelle ancienne valeur de moyenne
	$('tr[id="'+identifiant_eleve+'"] > .moyenne_generale').remove()
	//on rajoute la nouvelle valeur de moyenne
	$('tr[id="'+identifiant_eleve+'"]').children('th:nth-child('+indice_moyenne_generale+')').after('<th class="border_bottom moyenne_generale">'+moyenne_generale+'</th>');


	return moyenne_generale

	
}

async function rajouter_absences_et_retards_eleves(la_periode_bulletin){
	var periode_bulletin = la_periode_bulletin || $("#la_periode_bulletin").val();
	var la_classe = $("#la_classe_fiche").val();

	var les_appreciations_globales = await supabase
		.from('Appreciations')
		.select('*')
		.eq('periode_principale', periode_bulletin)
		.eq('Classe_Matiere', '('+la_classe+'|Vie scolaire)')

	//console.log({les_appreciations_globales})
	les_appreciations_globales = les_appreciations_globales.data
	var identifiant_appreciateur = les_appreciations_globales[0] ? les_appreciations_globales[0]['identifiant_appreciateur'] : ""

	//pour chaque eleve avec des appreciations: rajouter l'absence, le retard et l'appréciation globale
	les_appreciations_globales.forEach(function(un_eleve){
		//console.log({un_eleve})
		var tout = un_eleve['contenu']
		if(tout){
			tout = JSON.parse(tout)
			absences = tout['absences'] || ""
			retards = tout['retards'] || ""
			contenu = tout['contenu'] || ""

			$('tr[id="'+un_eleve['identifiant_eleve']+'"]').append('<th class="border_bottom">'+absences+'</th><th class="border_bottom">'+retards+'</th><th class="border_bottom" identifiant_appreciateur="'+identifiant_appreciateur+'" id_appreciation="'+un_eleve['id']+'" >'+contenu+'</th>')

		}

	})

	rajouter_bouton_emettre_avis()
	console.log("absences et retards OK")
	return true
}

function rajouter_bouton_emettre_avis(){

	//dans la colonne Avis du Conseil de classe
	var derniere_colonne = $('[id="Appréciations de la Vie Scolaire"]')[0].cellIndex +1
	//console.log({derniere_colonne})

	$("tr:not(.ignore) > th.border_bottom:nth-child("+derniere_colonne+")").each(function(index,avis){
		//console.log(index,avis)
		$( "<button class='avis_conseil'>Emettre un avis</button>" ).insertAfter(avis)
	})

	au_clic('.avis_conseil','emettre_avis_conseil(this)')

}







function phrase_approbation(){
	return "J'approuve."
}




async function emettre_avis_conseil(ceci){

	var eleve_en_cours = ceci.parentNode.id
	var nom_complet = ceci.parentNode.children[1].innerText + " " + ceci.parentNode.children[2].innerText
	var index_avis_vie_scolaire = $('[id="Appréciations de la Vie Scolaire"]')[0].cellIndex
	var avis_vie_scolaire = ceci.parentNode.children[index_avis_vie_scolaire].innerText.trim()
	var boutons = avis_vie_scolaire.length === 0 ? `<i class="contenu_alerte_vide">Il n'y a pas encore d'appréciation Vie Scolaire pour cet élève.</i>`
				: `<button type="button" id="ok_avis_conseil" class="rendre sekooly-mode-background">✅ Je suis d'accord</button>
					<button type="button" id="pas_ok_avis_conseil" class="rendre sekooly-mode-background">❌Je ne suis PAS d'accord</button>`

	//console.log({boutons})



	var id_appreciation = $('[id="'+eleve_en_cours+'"] > th[id_appreciation]')[0].getAttribute('id_appreciation')
	//console.log({id_appreciation})
	var tous_les_avis_jury = await supabase
							.from('Jury')
							.select('*')
							.eq('id_appreciation',id_appreciation)

	tous_les_avis_jury = tous_les_avis_jury.body
	//console.log({tous_les_avis_jury})

	var les_profs_daccord = tous_les_avis_jury.filter(e => e['contenu_commentaire'] === phrase_approbation()) //['Prof1', 'Prof2', 'Prof3']
	var les_profs_pas_daccord = tous_les_avis_jury.filter(e => e['contenu_commentaire'] !== phrase_approbation())/*[{'id_commentateur':'Prof4', 'contenu_commentaire':"Je ne suis pas d'accord car"},
								{'id_commentateur':'Prof5', 'contenu_commentaire':"Je ne suis pas d'accord car"}, 
								{'id_commentateur':'Prof6', 'contenu_commentaire':"Je ne suis pas d'accord car"}]*/
	var verbe_approuver = les_profs_daccord.length > 1 ? "ont" : "a"


	var liste_profs_ok = les_profs_daccord.length > 0 ? `
		<div class="description_conseil">
			<strong class="sekooly-mode">✅ `+les_profs_daccord.map(e => e['id_commentateur'].toUpperCase() + ' (' +  e['role_commentateur'] + ')').join(', ')+`</strong>
			<span style="margin-left: 5px;">`+verbe_approuver+` approuvé l'avis de la Vie Scolaire</span>
		</div>
	` : ""



	var liste_profs_pas_ok = les_profs_pas_daccord.length > 0 ? `

		<div class="description_conseil">
			`+les_profs_pas_daccord.map(function(un_prof){

				bouton_suppr = un_prof['id_commentateur'].toLowerCase() === recuperer('identifiant_courant').toLowerCase() ? bouton_supprimer_avis(): ""
				return `
				<strong class="sekooly-mode">❌ `+un_prof['id_commentateur'].toUpperCase() + ' (' +  un_prof['role_commentateur'] + ')' +`:</strong>
				<span style="margin-left: 5px;">`+un_prof['contenu_commentaire']+`</span>
				`+bouton_suppr+`
				`}).join('<br>') +`
		</div>

	` : ""


	$("#mini_popup").remove();

	var html_emettre_avis = `
	<div class="mini_popup darkmode-mini_popup" id="mini_popup" style="cursor: all-scroll;">
		<div id="entete-fenetre" style="display: inline-flex;float: right;">
			<img alt="X" src="`+ prefixe_image + `/quitter.png" id="bye_prev" onclick="$('#mini_popup').remove()" class="bye_prev">
		</div>
		<div id_appreciation_actuel="`+id_appreciation+`" style="border-bottom-style: ridge;font-size: 25px;">Votre avis sur <strong>`+nom_complet+`</strong></div>
		<div class="description_conseil">
			<span style="margin-left: 5px;">`+avis_vie_scolaire+`</span>
		</div>

		`+boutons+`

		`+liste_profs_ok+`

		`+liste_profs_pas_ok+`



	</div>

	`

	$('body').append(html_emettre_avis)
	dragElement($("#mini_popup")[0])

	au_clic("#ok_avis_conseil","approuver_avis(true)")
	au_clic("#pas_ok_avis_conseil","approuver_avis(false)")

}

function bouton_supprimer_avis(){
	return '<img onclick="supprimer_avis_jury(this)" src="'+prefixe_image+'/img_trash.png" alt="Supprimer" class="editer">'
}

async function supprimer_avis_jury(ceci){

	var id_appreciation = $('[id_appreciation_actuel]')[0].getAttribute('id_appreciation_actuel')
	var id_commentateur = recuperer('identifiant_courant')
	var a_supprimer = {
		id_appreciation: id_appreciation,
		id_commentateur: id_commentateur
	}

	//supprimer
	const { data, error } = await supabase
	  .from('Jury')
	  .delete()
	  .match(a_supprimer)

	/*
	console.log({data})
	console.log({error})
	*/


	//actualiser
	$('.selected > button').click()

}

async function approuver_avis(oui){
	var data = {}
	data['id_appreciation'] = $('.selected > th[id_appreciation]')[0].getAttribute('id_appreciation')
	data['contenu_commentaire'] = phrase_approbation()
	data['id_commentateur'] = recuperer('identifiant_courant')
	data['role_commentateur'] = $('.votre_matiere')[0] ? $('.votre_matiere')[0].innerText || mon_role : mon_role

	if(oui){
		afficher_alerte("✅ Vous avez approuvé l'appréciation de la Vie Scolaire.")
	}else{
		data['contenu_commentaire'] = prompt("Pour quelles raisons vous n'êtes pas d'accord?", "")

		if(!data['contenu_commentaire']){
			return alert("Merci de justifier votre désapprobation.")			
		}else{
			data['contenu_commentaire'] = data['contenu_commentaire'].trim()
			afficher_alerte("❌ Vous avez désapprouvé l'appréciation de la Vie Scolaire.")
		}
	}


	//console.log({data})
	await supabase
		.from('Jury')
		.upsert(data)
		.match({id_appreciation: data['id_appreciation'], id_commentateur: data['id_commentateur'] })

	$('.selected > button').click()

}



async function rajouter_rangs_eleves(){
	var arr = $('tr:not(.ignore) > .moyenne_generale').map(function(){return Number($(this).text())}).get()
	var sorted = arr.slice().sort(function(a,b){return b-a})
	var ranks = arr.map(function(v){ return sorted.indexOf(v)+1 });
	//console.log({ranks});

	//vider les rangs des ignorés
	$('tbody > tr.ignore').each(function(index,element_eleve){
		$(element_eleve).children('.rang_eleve').remove()
		$(element_eleve).children('.moyenne_generale').after('<th class="border_bottom rang_eleve"></th>');
	})



	$('tbody > tr:not(.ignore).une_ligne_de_donnees').each(function(index,element_eleve){
		//console.log({element_eleve})
		//$(element_eleve).append('<th class="border_bottom rang_eleve">'+ranks[index]+'</th>')

		//supprimer le rang de cet eleve s'il existe
		$(element_eleve).children('.rang_eleve').remove()

		//insérer apres la moyenne générale
		$(element_eleve).children('.moyenne_generale').after('<th class="border_bottom rang_eleve">'+ranks[index]+'</th>');

	})


	console.log("rangs OK")
	return ranks
}


function voir_bulletin_classe_choisie(){
	var la_classe= $("#classe_saisie_bulletin").val()
	$('#mini_popup').remove()
	
	var toutes = JSON.parse(recuperer('mes_matieres'))
	var matieres_de_classe = toutes.filter(e => e['Classe'] === la_classe).sort()
	//console.log(la_classe)
	//console.log(matieres_de_classe)

	creer_fenetre_bulletin(matieres_de_classe)
}



async function clic_bulletin(){
	//si prof
	if(recuperer('mon_type').includes('Prof') ){
		//lister les classes-matières que j'enseigne
		var mes_matieres = JSON.parse(recuperer("mes_matieres"))
		var toutes_les_matieres = recuperer("Matieres") ? JSON.parse(recuperer("Matieres")) : mes_matieres

		creer_fenetre_bulletin(toutes_les_matieres)

	//si admin
	}else if(recuperer('mon_type').includes('Admin')){

		creer_mini_popup('<div style="border-bottom-style: ridge;font-size: 20px;">Bulletins<br><b>Que voulez-vous faire?</b></div>',choix_admin_bulletins(),"Valider", "valider_choix_admin_bulletins()")
	
	//si eleve
	}else{
		//check si l'élève a le droit de consulter
		var mes_donnees = await rechercher('Eleves', 'Identifiant',recuperer('identifiant_courant'))
		console.log({mes_donnees})

		if(mes_donnees.length > 0){
			mes_donnees = mes_donnees[0]
			droit_apercu_bulletin = mes_donnees['droit_apercu_bulletin']
			console.log({droit_apercu_bulletin})

			if(droit_apercu_bulletin === "oui"){
				generer_bulletin()

				//masquer les données
				$('[id="mini_popup"]').hide()

				//insérer les données: moi en eleve, trimestre dispo OUSS 1 SECONDE
				setTimeout(function(){
					$('[id="identifiant_eleve_bulletin"]').val(recuperer("identifiant_courant"))	


					//configuré par l'admin
					avec_signature_tampon = data_etablissement['avec_signature_tampon']

					//avec signature
					//avec tampon
					element_DOM('avec_signature').checked = avec_signature_tampon
					element_DOM('avec_tampon').checked = avec_signature_tampon	
					stocker('avec_signature',avec_signature_tampon)
					stocker('avec_tampon',avec_signature_tampon)
						
					//récupérer les données 
					voir_bulletin_eleve()


				},1000)
				

				


			}else{
				alert("❌ Vous ne pouvez pas encore consulter vos bulletins scolaires. Merci de vous rapprocher de l'Administration de votre école.")
			}
		}
	}

}

function valider_choix_admin_bulletins(){
	var choix = $('input[name=choix_admin_bulletin]:checked').val()
	

	if(choix === "choix1"){
		configurer_periodes_bulletins()
	}else if(choix === "choix2"){
		choix_classe_bulletin()
	}else if(choix === "choix3"){
		choix_classe_fiche()
	}else{
		generer_bulletin()
	}
}

function generer_bulletin(){
	var mon_type = recuperer('mon_type')



	//if(mon_type.includes('Admin') || mon_type.includes('Profs')){

		les_matieres = JSON.parse(recuperer("mes_matieres"))
		les_classes = valeursUniquesDeCetteKey(les_matieres,'Classe')
		les_classes.sort()
		//console.log(les_classes) 

		elements_html = "<div class='bloc' style='padding: 20px;'>Classe:<br><select onchange='lister_eleves_bulletins()' onclick='lister_eleves_bulletins()' id='classe_saisie_bulletin'>"
		for (i = 0; i< les_classes.length;i++){
			elements_html += '<option value="'+les_classes[i]+'">'+les_classes[i]+'</option>'
		}
		elements_html += "</select>"
		

		elements_html += "<br><br>Eleves:<br><select onchange='vider_donnees_bulletin_eleve()' onclick='vider_donnees_bulletin_eleve()' id='identifiant_eleve_bulletin'></select><br>"


		var nom_periode = data_etablissement['config_notes']['nom_periode_bulletin']
		var les_periodes = Object.keys(data_etablissement['config_notes'][nom_periode])
		elements_html += "<br><br>"+nom_periode+":<br><select id='periode_principale_bulletin_eleve'>"+les_periodes.map(e => '<option value="'+e+'">'+e+'</option>')+"</select><br>"

		avec_signature = recuperer('avec_signature') === "true" ? " checked" : ""
		avec_tampon = recuperer('avec_tampon') === "true"  ? " checked" : ""
		elements_html += `<br><br><div><input class="image_bulletin" id="avec_signature" type="checkbox"`+avec_signature+`><label for="avec_signature">Avec signature</label>`
		elements_html += `<input class="image_bulletin" id="avec_tampon" type="checkbox"`+avec_tampon+`><label for="avec_tampon">Avec tampon</label></div>`


		elements_html += "</div>"

		creer_mini_popup("Choisissez la classe à consulter",elements_html, "Voir le bulletin","voir_bulletin_eleve()")
		
		//au moment de checker -> enregistrer
		$(".image_bulletin").on("click",function(e){
			console.log(e.target.id, e.target.checked)
			stocker(e.target.id,e.target.checked)
		})

		//lister les élèves
		lister_eleves_bulletins()


	/*
	}else{
		alert("Fonctionnalité en cours de développement.")
	}
	*/
}

async function voir_bulletin_eleve(){
	chargement(true)
	afficher_alerte("Création du bulletin en cours...")
	//verifier qu'on a une classe
	var la_classe = $("#classe_saisie_bulletin").val()
	if(!la_classe){
		chargement(false)
		return alert("Merci de choisir une classe.")
	} 

	//verifier qu'on a un eleve
	var leleve = $("#identifiant_eleve_bulletin >  option:selected")[0].id
	if(!leleve){
		chargement(false)
		return alert("Merci de choisir un élève de la classe choisie.")

	} 


	//verifier qu'on a une periode
	var la_periode = $("#periode_principale_bulletin_eleve").val()
	if(!la_periode){
		chargement(false)
		return alert("Merci de choisir une période pour le bulletin.")

	} 

	//mettre la fiche de la classe sans l'afficher
	voir_fiche_classe_choisie()
	afficher_fenetre(false) //à décommenter
	

	//mettre la période + la classe
	$("#la_periode_bulletin").val(la_periode)
	$("#la_classe_fiche").val(la_classe)


	var pour_bulletin = {
		la_classe: la_classe,
		la_periode: la_periode,
		leleve: leleve
	}

	render_fiche(false,pour_bulletin)


}

function index_de_cette_colonne(nom_champ){
	//console.log({nom_champ})
	return $('thead > tr > [id="'+nom_champ+'"]')[0].cellIndex
}

function nom_colonne_de_cet_index(index_colonne){
	return $('thead > tr').not("#coches_colonnes_export")[0].children[index_colonne].id
}

function recuperer_dans_le_selected(id_eleve,nom_champ){
	var index_colonne = index_de_cette_colonne(nom_champ)
	//console.log('\n\n')
	//console.log({nom_champ})
	return valeur_colonne_numero(id_eleve,index_colonne)
}

function valeur_colonne_numero(id_eleve,un_index){
	//console.log({id_eleve})

	//console.log({un_index})

	
	/*
	console.log($('tr[id="'+id_eleve+'"]')[0])
	console.log($('tr[id="'+id_eleve+'"]')[0].children)
	console.log($('tr[id="'+id_eleve+'"]')[0].children[un_index])

	*/
	res = $('tr[id="'+id_eleve+'"]')[0].children[un_index] ? $('tr[id="'+id_eleve+'"]')[0].children[un_index].textContent : "(?)"
	//console.log({valeur: res})
	return res.trim()
}

function calcul_annee_scolaire(){

	//si entre janvier et juin -> premiere année c'est l'année d'avant
	//si entre juin et décembre -> première année c'est l'année en cours
	var premiere_annee = new Date().getMonth() <= 8 ? new Date().getFullYear() -1 : new Date().getFullYear()
	var annee_scolaire = premiere_annee + " - "  + (premiere_annee+1)
	return annee_scolaire
}

function mention_moyenne(moyenne){
	moyenne = Number(moyenne)
	var res = moyenne >=0 && moyenne <9 ? "BLAME POUR INSUFFISANCE DE TRAVAIL"
				:  moyenne >=9 &&  moyenne <10 ? "RESULTATS INSUFFISANTS"
				:  moyenne >=10 &&  moyenne <12 ? "PASSABLE"
				:  moyenne >=12 &&  moyenne <13 ? "TABLEAU D'HONNEUR"
				:  moyenne >=13 &&  moyenne <15 ? "ENCOURAGEMENT"
				:  moyenne >=15 &&  moyenne <20 ? "FELICITATIONS"
				: ""

	return res
}

async function creer_et_envoyer_donnees_bulletin_eleve(id_eleve,la_periode,la_classe, liste_profs, imprimer){

	//alert(id_eleve)
	//alert(la_periode)
	//alert(la_classe)

	var annee_scolaire = calcul_annee_scolaire()
	var prof_principal = liste_profs.find(e => e['Classe'].includes('(' + la_classe + '|Vie de classe)')) //get_les_profs('('+la_classe+'|Vie de classe)')[0]
	
	if(prof_principal) prof_principal = prof_principal['Nom_complet']
	if(!prof_principal) prof_principal = ""
	//console.log({prof_principal})

/*
	if(prof_principal){
		prof_principal = prof_principal['Nom'] + ' ' + prof_principal['Prénom(s)'] + " " + (prof_principal['2è_Prénom'] || "") + " " + (prof_principal['3è_Prénom'] || "")
	}else{
		prof_principal = ""
	}*/

	//console.log({annee_scolaire})

	var index_moyenne_generale = index_de_cette_colonne('Moyenne générale')
	var moy_generale = recuperer_dans_le_selected(id_eleve,"Moyenne générale")
	var nb_eleves = $('.une_ligne_de_donnees').length
	var id_responsable_vie_sco =  $('[identifiant_appreciateur]')[0] ? $('[identifiant_appreciateur]')[0].getAttribute('identifiant_appreciateur') : ""
	var responsable_vie_sco = id_responsable_vie_sco.length > 0 ? id_responsable_vie_sco.split('.')[0].toUpperCase() + " " + left(id_responsable_vie_sco.split('.')[1].toUpperCase(),1)+ right(id_responsable_vie_sco.split('.')[1],id_responsable_vie_sco.split('.')[1].length-1) : ""

	var datas = {
		nom_etablissement: data_etablissement['nom_etablissement'].toUpperCase(),
		adresse_etablissement: data_etablissement['adresse_etablissement'],
		logo_etablissement:  prefixe_image + "/" + data_etablissement['nom_fichier_logo'],
		periode_principale: "TRIMESTRE " + la_periode,
		annee_scolaire: annee_scolaire,
		nom: recuperer_dans_le_selected(id_eleve,'Nom'),
		classe: la_classe,
		effectif: nb_eleves,
		prenoms: recuperer_dans_le_selected(id_eleve,'Prénom(s)'),
		respo_vie_sco: responsable_vie_sco,
		date_naissance: recuperer_dans_le_selected(id_eleve,"Date de naissance"),
		prof_principal: prof_principal,
		contenu: recuperer_dans_le_selected(id_eleve,"Appréciations de la Vie Scolaire"),
		mention: mention_moyenne(Number(moy_generale)),
		retards: recuperer_dans_le_selected(id_eleve,"Retards"),
		absences: recuperer_dans_le_selected(id_eleve,"Absence(s) demi-journée(s)"),
		moy_generale: moy_generale,
		moy_min: $("#ligne_min")[0].children[index_moyenne_generale].textContent,
		moy_classe: $("#ligne_moy")[0].children[index_moyenne_generale].textContent,
		moy_max: $("#ligne_max")[0].children[index_moyenne_generale].textContent,
		rang_eleve: recuperer_dans_le_selected(id_eleve,"Rang"),
		identifiant_eleve: id_eleve
	}


	if(recuperer('avec_signature') === "true"){
		datas['signature_etablissement'] = prefixe_image + "/" + data_etablissement['images']["signature_etablissement"]
	}

	if(recuperer('avec_tampon') === "true"){
		datas['tampon_etablissement'] = prefixe_image + "/" + data_etablissement['images']["tampon_etablissement"]
	}

	//console.log({datas})


	//récupérer toutes les appréciations de l'éleve
	var les_appreciations_eleve = await rechercher("Appreciations", "identifiant_eleve",id_eleve)
	//de la période principale
	les_appreciations_eleve = les_appreciations_eleve.filter(e => e['periode_principale'] === la_periode)
	console.log({les_appreciations_eleve})

	afficher_alerte("Ouverture du bulletin de "+id_eleve.toUpperCase() +" en cours..." )
	
	//pour chaque matière càd entre ]sexe , Moyenne générale[
	var index_sexe = index_de_cette_colonne("Sexe")
	var index_moyenne_generale = index_de_cette_colonne("Moyenne générale")

	var mon_index = 0
	var les_matieres = []
	for (mon_index=index_sexe+1;mon_index<index_moyenne_generale;mon_index++){

		//si la colonne est cochée avec une moyenne
		colonne_a_exporter = $('tr[id="coches_colonnes_export"]')[0] ? $('tr[id="coches_colonnes_export"]')[0].children[mon_index].children[0].checked : true
		nom_champ = nom_colonne_de_cet_index(mon_index)
		moy_eleve = nom_champ.length > 0 ? recuperer_dans_le_selected(id_eleve,nom_champ) : ""
		if(colonne_a_exporter && moy_eleve.length > 0 && nom_champ.length > 0) {


			//console.log(mon_index,nom_champ, valeur_colonne_numero(mon_index))

			la_classe_matiere = '('+la_classe+'|'+nom_champ+')'

			/*
			var id_premier_prof = await enseignant_de_la_matiere_dans_la_periode_principale(la_classe_matiere, la_periode) || '' //le premier qui a apprécié / noté / assigné
			console.log({la_classe_matiere: id_premier_prof})
			var premier_prof = get_resultat(racine_data + 'Profs?Identifiant=eq.'+id_premier_prof+'&' +apikey)
			*/

			premier_prof = get_les_profs(la_classe_matiere)
			
			if(premier_prof.length > 0 ){

				premier_prof = premier_prof[0]
				premier_prof = premier_prof['Nom'] + ' ' + premier_prof['Prénom(s)'] + " " + (premier_prof['2è_Prénom'] || "") + " " + (premier_prof['3è_Prénom'] || "")
			}else{
				premier_prof = '-'
			}

			le_coef = $('tr[id="'+id_eleve+'"]')[0].children[mon_index].getAttribute("coef")
			appreciation_matiere = les_appreciations_eleve.filter(e => e['Classe_Matiere'] === la_classe_matiere)
			

			if(appreciation_matiere.length > 0){
				appreciation_matiere = appreciation_matiere[0]['contenu']
			}else{
				appreciation_matiere = "(vide)"
			}



			les_matieres.push({
				Matiere: nom_champ,
				identifiant_appreciateur: premier_prof,
				coef: le_coef,
				moy_eleve: moy_eleve,
				moy_ponderee_eleve: (Number(le_coef) * Number(moy_eleve)).toFixed(2),
				moy_min: $("#ligne_min")[0].children[mon_index].textContent,
				moy_classe: $("#ligne_moy")[0].children[mon_index].textContent,
				moy_max: $("#ligne_max")[0].children[mon_index].textContent,
				contenu_appreciation: appreciation_matiere
			})

			


		}else{
			//console.log("pas de matiere car", {colonne_a_exporter},{mon_index},{nom_champ},{moy_eleve})
		}
		
	}


	//console.log({les_matieres})


	/*
	stocker('les_matieres_bulletin',JSON.stringify(les_matieres))
	stocker('datas_bulletin',JSON.stringify(datas))
	*/

	//on n'ouvre la fenetre qu'une fois
	var premiere_ouverture = ouvrir_fenetre_bulletin()	
	
	//on envoie les données le temps d'ouvrir la fenetre bulletin
	envoyer_donnees_bulletin_eleve(domaine_bulletin,imprimer,les_matieres,datas)

	
}

function envoyer_donnees_bulletin_eleve(domaine_bulletin,imprimer,les_matieres,datas){
	console.log("on envoie les données de",datas['identifiant_eleve'])

	/*
	fenetre_bulletin.postMessage({les_matieres: les_matieres, datas: datas}, domaine_bulletin)
	fenetre_bulletin.postMessage("remplissage", domaine_bulletin)
	*/

	liste_matieres_bulletin.push(les_matieres)
	liste_datas_bulletin.push(datas)

	var nb_eleves = $('tr.une_ligne_de_donnees').length
	if(nb_eleves===liste_matieres_bulletin.length || imprimer){
		variables_bulletins_pretes = true	
		fenetre_bulletin.postMessage("impression", domaine_bulletin)	
	} 

	/*
	if(imprimer){
		console.log("IMPRESSION EN COURS...")
		fenetre_bulletin.postMessage("impression", domaine_bulletin)	
		console.log("IMPRESSION OK...")
	}
	*/

}


function ouvrir_fenetre_bulletin(){

	//pas encore ouvert -> à ouvrir
	if(typeof(fenetre_bulletin) == 'undefined' || fenetre_bulletin.closed){
		//ouvrir un nouveau
		fenetre_bulletin = window.open('', 'winPop', 'height=400,width=800');
		if(fenetre_bulletin == null || fenetre_bulletin.document.location.href != domaine_bulletin){
			fenetre_bulletin = window.open(domaine_bulletin, 'winPop');
			return true
		}

	//déjà ouvert
	} else {


		fenetre_bulletin.focus();
		return false
	} 


}



async function lister_eleves_bulletins(){
	tous_les_eleves =  await rechercher("Eleves", "Classe", $('#classe_saisie_bulletin').val())
	//console.log({tous_les_eleves})

	if(recuperer('eleves_ignores')){
		tous_les_eleves = tous_les_eleves.filter(function(eleve){
			return !recuperer('eleves_ignores').includes(','+eleve['Identifiant']+',')
		})
		//console.log({tous_les_eleves})	
	}
	
	//pour chaque eleve
	var options_eleves = '<option id="tous">(Tous)</option>' + tous_les_eleves.map(function(eleve){
			return '<option value="'+eleve['Identifiant']+'" id="'+eleve['Identifiant']+'">'+eleve['Nom'] + " " +eleve['Prénom(s)']+ '</option>' 
		}).join('')


	$("#identifiant_eleve_bulletin")[0].innerHTML = ""
	$("#identifiant_eleve_bulletin").append(options_eleves)

	vider_donnees_bulletin_eleve()
}

function vider_donnees_bulletin_eleve(){
	liste_datas_bulletin = []
	liste_matieres_bulletin = []
	variables_bulletins_pretes = false

}

function choix_admin_bulletins(){
	var creation_bulletin = identifiants_appreciations.indexOf(recuperer('identifiant_courant')) >= 0 ? `
	  <div>
	    <input type="radio" name="choix_admin_bulletin" id="choix4" value="choix4">
	    <label for="choix4">Créer les bulletins en format PDF</label>
	  </div>` : ""


	return `
	<div style="padding: 5%;" name="choix_global">
  
	  <div>
	    <input type="radio" name="choix_admin_bulletin" value="choix1" id="choix1" checked="">
	    <label for="choix1">Administrer</label>
	  </div>

	  <div>
	    <input type="radio" name="choix_admin_bulletin" value="choix2" id="choix2">
	    <label for="choix2">Consulter les saisies</label>
	  </div>

	  <div>
	    <input type="radio" name="choix_admin_bulletin" id="choix3" value="choix3">
	    <label for="choix3">Créer les fiches de Conseils de Classe</label>
	  </div>
	  `+creation_bulletin+`

	  
	</div>
	`
}




function stocker_appreciations_server(appreciations){
	return supabase
	  .from('Appreciations')
	  .upsert(appreciations)
}

function transformer_en_appreciations(){

	var resultats = []

	var champs_refs_tout = donnees_generiques_bulletin()



	//si c'est du VIE SCOLAIRE + TOUTES
	if($('select.un_menu').val().includes("Vie scolaire") && $("select#saison_note").val() === "Toutes"){

		//pour chaque eleve
		$('.un_eleve_bulletin').each(function(index_element,element){
			contenu = {}
			$('[id="'+element.id+'"] > .bloc_appreciation').each(function(i,e){
				//console.log(e.firstChild.name);
				//console.log(e.firstChild.value)

				if(e.firstChild.value.trim()!=="") contenu[e.firstChild.name] = e.firstChild.value.trim()
			})


			if(Object.keys(contenu).length > 0){
				console.log('\n\n\n')
				console.log({contenu})
				resultats.push({
					Classe_Matiere: $('.un_menu > option:selected').text(),
					identifiant_appreciateur: champs_refs_tout.identifiant_prof,
					identifiant_eleve: element.id,
					periode_principale: champs_refs_tout.periode_bulletin,
					contenu: JSON.stringify(contenu)
				})

			}

		})





	}else{

		$('.un_eleve_bulletin> .bloc_appreciation').each(function(e,a){
			identifiant_eleve = a.parentNode.id;
			//console.log(identifiant_eleve);

			contenu = a.firstChild.value
			//console.log(contenu);

			if(contenu.trim().length >0) {

				resultats.push({
					Classe_Matiere: $('.un_menu > option:selected').text(),
					identifiant_appreciateur: champs_refs_tout.identifiant_prof,
					identifiant_eleve:identifiant_eleve,
					periode_principale: champs_refs_tout.periode_bulletin,
					contenu:contenu
				})

			}


		})



	}

	//console.log({resultats})

	return resultats


}


var bulletin_enregistre = false
effacer("enregistrement_en_cours")
async function sauvegarder_saisie_bulletin(){
	chargement(true)

	if(recuperer("enregistrement_en_cours") === "oui") return afficher_alerte("Enregistrement déjà en cours, merci de patienter.")


	stocker("enregistrement_en_cours","oui")

	if($("#saison_note").val()  === "Toutes"){


		//POUR LES APPRECIATIONS
		//alerte_a_afficher = "⚠️Les enregistrement doivent se faire uniquement sur une valeur de "+recuperer_nom_periodes_secondaires_bulletin()+", et non dans \"Toutes\"."
		

		
		//supprimer toutes les anciennes appréciations de CE prof sur CETTE CLASSE MATIERE pour CETTE PERIODE PRINCIPALE
		var champs_refs_tout = donnees_generiques_bulletin()
		var champs_refs = {
			Classe_Matiere: $('.un_menu > option:selected').text(),
			identifiant_appreciateur: champs_refs_tout.identifiant_prof,
			periode_principale: champs_refs_tout.periode_bulletin
		}

		var retour = await supprimer_avec_ces_references('Appreciations',champs_refs)


		var appreciations = await transformer_en_appreciations()
		//console.log({appreciations})
		alerte_a_afficher = "Les appréciations saisies ont bien été enregistrées."

		if(appreciations.length === 0){
			chargement(false)
			bulletin_enregistre = true
			effacer("enregistrement_en_cours")
			return afficher_alerte(alerte_a_afficher)			
		}


		retour = await stocker_appreciations_server(appreciations)
		//console.log(retour)

		if(retour.error !== null){
			alerte_a_afficher = "⚠️Enregistrement des appréciations impossible: merci de réessayer."
		}else{
			bulletin_enregistre = true
			effacer("enregistrement_en_cours")
		}

		effacer("enregistrement_en_cours")
		afficher_alerte(alerte_a_afficher)
		chargement(false)


	}else{

		if(await verif_avant_enregistrement_notes()){

			//supprimer toutes les saisies de (identifiant_prof,Classe_Matiere,periode_bulletin,saison_note) et vérifier que c'est OK
			var champs_refs = donnees_generiques_bulletin()
			//console.log("suppression en cours...")
			var retour = await supprimer_avec_ces_references('Notes',champs_refs)
			//console.log("suppression ok!")

			//transformer la saisie en JSON
			//console.log("transformation en cours...")
			var notes_saisies = await transformer_notes_saisies()
			//console.log("transformation ok!")
			//console.log(notes_saisies)
			
			alerte_a_afficher = "Notes saisies enregistrées."


			if (notes_saisies.length === 0) {
				chargement(false)
				bulletin_enregistre = true
				effacer("enregistrement_en_cours")
				afficher_alerte(alerte_a_afficher)
			}

			//ajouter le JSON à la table Notes et vérifier que c'est OK
			//console.log("envoi en cours...")
			retour = await stocker_notes_server(notes_saisies)
			console.log({retour})

			if(retour.error !== null){
				alerte_a_afficher = "⚠️Enregistrement impossible, merci de réessayer."
			}else{
				bulletin_enregistre = true
				effacer("enregistrement_en_cours")
				afficher_alerte(alerte_a_afficher)
			}

		}else {
			stocker("enregistrement_en_cours","non")
			alerte_a_afficher =  "⚠️Enregistrement impossible, merci de réessayer."
			afficher_alerte(alerte_a_afficher)

		}


		effacer("enregistrement_en_cours")
		chargement(false)
	}



}


function configurer_periodes_bulletins(){
	var elements_html = '<div class="donnees_saisies">'
	var nom_periode_bulletin = un_element_de_config_bulletin("saisie_des_periodes_principales()",'Identifiant des périodes principales (Exemples: <b>Trimestres</b> ou <b>Semestres</b> ...)', 'nom_periode_bulletin', recuperer_nom_periodes_principales_bulletin())
	var nom_saison_note = un_element_de_config_bulletin("saisie_des_periodes_secondaires()",'Identifiant des périodes secondaires (Exemples: <b>Périodes</b> ou <b>Mois</b> ...)', 'nom_saison_note',recuperer_nom_periodes_secondaires_bulletin() )
					
					+ un_element_de_config_bulletin(false, 'Note minimum saisie', 'note_min', note_min_possible())
					+ un_element_de_config_bulletin(false, 'Note maximum saisie', 'note_max', note_max_possible())


	var images_bulletins = `<label><input id="avec_signature_tampon" type="checkbox" `+(data_etablissement['avec_signature_tampon'] ? "checked" : "") +`>Bulletin téléchargé par un élève AVEC SIGNATURE ET TAMPON</label>`
	elements_html = elements_html + nom_periode_bulletin + nom_saison_note +images_bulletins+ '</div>'

	creer_mini_popup('<div style="border-bottom-style: ridge;font-size: 20px;">Configuration des périodes de notation</div>',elements_html,'Enregistrer', 'enregistrer_config_bulletins(1)')



}

function recuperer_nom_periodes_principales_bulletin(){	
	return data_etablissement['config_notes']['nom_periode_bulletin'] ? data_etablissement['config_notes']['nom_periode_bulletin'].trim() : ""

}

function recuperer_nom_periodes_secondaires_bulletin(){	
	return  data_etablissement['config_notes']['nom_saison_note'] ? data_etablissement['config_notes']['nom_saison_note'].trim() : ""

}


function recuperer_liste_periodes_principales(){

	var nom_periode_bulletin = recuperer_nom_periodes_principales_bulletin()
	var liste_initiale = data_etablissement['config_notes'][nom_periode_bulletin] ? Object.keys(data_etablissement['config_notes'][nom_periode_bulletin]).join(',').trim() : false
	liste_initiale = liste_initiale ? liste_initiale : ""

	return liste_initiale
}

function recuperer_liste_periodes_secondaires(index_periode_principale){


	var nom_periode_bulletin = recuperer_nom_periodes_principales_bulletin()
	var liste_initiale = data_etablissement['config_notes'][nom_periode_bulletin] && index_periode_principale >= 0 ? Object.values(data_etablissement['config_notes'][nom_periode_bulletin])[index_periode_principale].trim() : false
	liste_initiale = liste_initiale ? liste_initiale : ""

	return liste_initiale
}

function saisie_des_periodes_principales(){
	var liste_initiale = recuperer_liste_periodes_principales()

	if(!$("#nom_periode_bulletin").val().trim()){
		alert("Merci de d'abord saisir l'identifiant des périodes principales.")
	}else{
		enregistrer_config_bulletins(1, false, true)

		var les_periodes_principales = prompt("Liste des périodes principales séparées par une virgule. Exemple: PREMIER TRIMESTRE,DEUXIEME TRIMESTRE,TROISIEME TRIMESTRE", liste_initiale)

		//console.log({les_periodes_principales})

		if(les_periodes_principales){
			enregistrer_config_bulletins(2,les_periodes_principales)
		}

	}

}

function parmi_les_periodes_avec_conclusions_finales(periode){
	return liste_periodes_avec_conclusions().includes('|'+periode+'|')
}

function saisie_des_periodes_secondaires(){
	var nom_periode_bulletin = recuperer_nom_periodes_principales_bulletin()
	var liste_principale = recuperer_liste_periodes_principales()
	//console.log({liste_principale})

	if(!nom_periode_bulletin){
		alert("Merci de d'abord saisir l'identifiant des périodes principales.")

	}else if(!liste_principale){
		alert("Merci de d'abord saisir la liste des " + nom_periode_bulletin + " (les périodes principales).")

	}else if(!$("#nom_saison_note").val().trim()){
		alert("Merci de d'abord saisir l'identifiant des périodes secondaires.")
	

	}else{
		enregistrer_config_bulletins(1, false, true)


		//créer un popup global
		var elements_html = '<div class="donnees_saisies">'
		var liste_principale_array = liste_principale.split(',')

		//pour chaque element de la liste principale
		liste_principale_array.forEach( function(une_periode_principale, index_periode_principale) {

			//créer input à virgules	
			elements_html +=  un_element_de_config_bulletin(false, une_periode_principale, une_periode_principale, recuperer_liste_periodes_secondaires(index_periode_principale),`<label><input id="avec_mentions" type="checkbox" `+(parmi_les_periodes_avec_conclusions_finales(une_periode_principale) ? 'checked' : '')+`>Conclusion annuelle finale</label>`)

		});

		elements_html += '</div>'



		creer_mini_popup_2('<div style="border-bottom-style: ridge;font-size: 15px;">Configuration des '+recuperer_liste_periodes_secondaires()+' des '+nom_periode_bulletin+', séparées par une virgule. Exemple: <b>Période 1,Période 2,Période 3</b></div>',elements_html,'Enregistrer', 'enregistrer_config_bulletins(3)')

	}
}

async function enregistrer_config_bulletins(numero_etape,les_periodes_principales, sans_alerte){
	chargement(true)
	var alerte_a_afficher = ""

	//nom des périodes ET notes min/max
	if(numero_etape === 1){

		data_etablissement['config_notes']['nom_periode_bulletin'] = element_DOM('nom_periode_bulletin').value.trim()
		data_etablissement['config_notes']['nom_saison_note'] = element_DOM('nom_saison_note').value.trim()
		data_etablissement['config_notes']['note_min'] = element_DOM('note_min').value.trim()
		data_etablissement['config_notes']['note_max'] = element_DOM('note_max').value.trim()
		data_etablissement['avec_signature_tampon'] = element_DOM('avec_signature_tampon').checked

		alerte_a_afficher = 'Périodes et plage de notes enregistrées avec succès.'


	//liste des périodes principales
	}else if(numero_etape === 2){

		var nom_periode_bulletin = recuperer_nom_periodes_principales_bulletin()
		var liste_array = les_periodes_principales.split(',')
		var liste_finale = {}

		liste_array.forEach( function(une_periode_principale, index) {
			liste_finale[une_periode_principale.trim()] = ""		
		});
		//console.log({liste_finale})
		data_etablissement['config_notes'][nom_periode_bulletin] = liste_finale


		alerte_a_afficher = 'Liste des '+ nom_periode_bulletin +' enregistrée.'


	//liste des périodes secondaires pour chaque période principale
	}else if(numero_etape ===3) {
		var nom_periode_bulletin = recuperer_nom_periodes_principales_bulletin()
		var nom_saison_note = recuperer_nom_periodes_secondaires_bulletin()
		var resultat_final = {}

		//console.log({nom_periode_bulletin})
		//console.log({nom_saison_note})

		var liste_principale = recuperer_liste_periodes_principales()
		var liste_principale_array = liste_principale.split(',')

		/*
		console.log({liste_principale})
		console.log({liste_principale_array})
		*/

		//pour chaque période principale P
		liste_principale_array.forEach( function(une_periode_principale, index_periode_principale) {
			//créer le champ P: [p.value]
			resultat_final[une_periode_principale] = $("[id='"+une_periode_principale+"']").val()
			
		});
		
		//Modifier data_etablissement['config_notes'][nom_periode_bulletin]	 avec le resultat_final
		//console.log({resultat_final})
		data_etablissement['config_notes'][nom_periode_bulletin] = resultat_final

		//nouveau : si étape de configuration de période finale -> le mettre dans periodes_avec_conclusions_finales
		data_etablissement['config_notes']['periodes_avec_conclusions_finales'] = liste_periodes_avec_conclusions()


		alerte_a_afficher = 'Liste des '+ nom_saison_note +' dans les ' + nom_periode_bulletin +' enregistrée.'
		$("#mini_popup2").remove()

	}



	await actualiser_info_etablissement()
	
	if(!sans_alerte) afficher_alerte(alerte_a_afficher)

	chargement(false)

}

function liste_periodes_avec_conclusions(){
	var list = ''

	if($('#mini_popup2')[0]){
		$('#mini_popup2').find('input:checked').each(function(i,el) {
			//console.log(el.parentNode.previousElementSibling.id)
			list += '|' + el.parentNode.previousElementSibling.id + '|'
		})
	}else{
		list = data_etablissement['config_notes']['periodes_avec_conclusions_finales']
	}
	
	return list 
}

function un_element_de_config_bulletin(avec_bouton_voir, intitule_label, id_input, valeur_initiale,conclusion_annuelle){

	var bouton_voir = avec_bouton_voir ? `<button onclick="`+avec_bouton_voir+`">VOIR</button>` : ""

	//Nom qui identifie les périodes principales (Exemples: Trimestres, Semestres, ...)
	//Nom qui identifie les périodes secondaires (Exemples: Période n°1, Mois de septembre, ...)
	//Liste des périodes secondaires séparées par une virgule (Exemple: 1er trimestre,2ème trimestre,3ème trimestre) 

	return `
	<div class="une_donnee_saisie" style="margin-bottom: 20px;">
	  <label>
	   `+intitule_label+`
	  </label>
	  <input class="donnee" value="`+valeur_initiale+`" id="`+id_input+`" name="`+id_input+`">
	  `+bouton_voir+`
	  `+(conclusion_annuelle || '')+`
	</div>
	`
}



function stocker_notes_server(notes_saisies){
	return supabase
	  .from('Notes')
	  .upsert(notes_saisies)
}



function donnees_generiques_bulletin(){
	var periode_bulletin = $("#periode_bulletin").val()
	var saison_note = $("#saison_note").val()
	var Classe_Matiere =  $('.un_menu > option:selected').text()
	var identifiant_prof = recuperer('mon_type').includes("Admin") && $("#enseignant").val() ? $("#enseignant").val() : recuperer("identifiant_courant")

	return {
		periode_bulletin:periode_bulletin,
		saison_note:saison_note,
		Classe_Matiere:Classe_Matiere,
		identifiant_prof: identifiant_prof
	}
}

function transformer_notes_saisies(){
	var mtn = maintenant()
	//récupérer: periode_bulletin, saison_note, Classe_Matiere, identifiant_prof
	var tout = donnees_generiques_bulletin()

	var notes_saisies = []
	var liste_eleves_intiale = $('.un_eleve_bulletin')

	//pour chaque élève (identifiant_eleve)
	liste_eleves_intiale.each(function(index,eleve){
		//console.log("eleve en cours:" + eleve.innerText)

		//console.log(eleve)
		var listes_notes = $("[id='"+eleve.id+"']").children('.une_note')

		//pour chaque note saisie
		var la_note =0;
		listes_notes.each(function(index_note,une_note){

			if (une_note.innerText.trim()!==""){

				la_note = une_note.innerText.trim().replace(",",".")
				if(la_note.length > 0){
					//console.log("on pousse la note " + la_note)
					//créer 1 donnée
					notes_saisies.push({
						date_creation_note: mtn,
						periode_bulletin: tout.periode_bulletin,
						saison_note: tout.saison_note,
						Classe_Matiere: tout.Classe_Matiere,
						identifiant_prof: tout.identifiant_prof,
						identifiant_eleve: eleve.id,
						note: Number(la_note),
					})


				}
				//console.log("donnée poussée!")
			}
		})
	})

	return notes_saisies
	
}

function creer_fenetre_bulletin(toutes_les_matieres){

	vider_fenetre("Saisie des notes du bulletin",false,"sauvegarder_saisie_bulletin()");

	var contenu_menu_haut = '<select class="un_menu"><option nom_liste_et_coefs="null" value="" id="--">--</option>'
	
	for (var i =  0; i < toutes_les_matieres.length; i++) {
		//contenu_menu_haut = contenu_menu_haut + '<span class="un_menu" nom_liste_et_coefs="'+toutes_les_matieres[i]['nom_liste_et_coefs']+'" id="'+toutes_les_matieres[i]['Classe_Matiere']+'">'+toutes_les_matieres[i]['Classe_Matiere']+'</span>' 

		contenu_menu_haut += '<option nom_liste_et_coefs="'+toutes_les_matieres[i]['nom_liste_et_coefs']+'" value="'+toutes_les_matieres[i]['Classe_Matiere']+'" id="'+toutes_les_matieres[i]['Classe_Matiere']+'">'+toutes_les_matieres[i]['Classe_Matiere']+'</option>'
	}

	contenu_menu_haut += '</select>'

	var conteneur_menu_html = '<div id="conteneur_menu"><div id="menu_haut" class="menu_haut" style="text-align: center;"> ' + contenu_menu_haut+ '</div><div id="menu_params" style="max-height: 90%;" class="menu_params"><div id="previsualisation" class="previz-pref"></div></div></div>'

	$("#fenetre").append(conteneur_menu_html);


	//clic -> mise en forme + actualisation de menu_details
	$('.un_menu').click(async function(e) {
		chargement(true)
		un_menu_clic(e.target.id,true,true)	
		afficher_choix_periode_bulletin(e.target.value)
        chargement(false)
    });

    afficher_fenetre(true)


	


}



var mes_eleves_initiaux = []
async function trouver_mes_eleves(periode_bulletin, saison_note){
	chargement(true)

		console.log({periode_bulletin, saison_note})

	//le menu existe
	//if($('.un_menu_orange')[0]){

		var tout = donnees_generiques_bulletin()
		var Classe_Matiere = tout.Classe_Matiere
		var classe = tout.Classe_Matiere.split('|')[0].replaceAll('(','')
		var periode_bulletin = periode_bulletin ? periode_bulletin : tout.periode_bulletin
		var saison_note = saison_note ? saison_note : tout.saison_note 

		var nom_liste_et_coefs = $('.un_menu').find('option:selected').attr("nom_liste_et_coefs")
		//console.log({nom_liste_et_coefs})



		//dans le cas où on veut tous les élèves de la classe, avec leur éventuelle note
		if(nom_liste_et_coefs === "null" || nom_liste_et_coefs === "" || nom_liste_et_coefs === null ){

			/*
			console.log('\n')
			console.log('\n')
			*/

			//récupérer tous les élèves de la classe choisie
			var demande_classe = await supabase.from('Eleves').select('*').eq('Classe',classe).order('Identifiant', { ascending: true })
			console.log({demande_classe})
			
			var nb_identifiants_classe = valeursUniquesDeCetteKey(demande_classe.data,'Identifiant').length

			/*
			console.log({demande_classe: demande_classe.data})
			console.log({nb_identifiants_classe})
			
			console.log('\n')
			*/

			//récupérer toutes les notes (classe|matiere) pour la période choisie 
			//avec saison note précise si saison_note<>Toutes
			if(saison_note!=="Toutes"){
				//console.log("PAS TOUTES mais " + saison_note)
				var demande = await supabase.from('bulletins').select('*').eq('Classe_Matiere',Classe_Matiere).eq('periode_bulletin',periode_bulletin).eq('saison_note',saison_note).order('Identifiant', { ascending: true })
			
			//sans saison note précise si saison_note=Toutes
			}else{
				//console.log("TOUTES")
				var demande = await supabase.from('bulletins').select('*').eq('Classe_Matiere',Classe_Matiere).eq('periode_bulletin',periode_bulletin).order('Identifiant', { ascending: true })
			}
			var nb_identifiants_notes = valeursUniquesDeCetteKey(demande.data,'Identifiant').length
			console.log({demande: demande.data})
			console.log({nb_identifiants_notes})

			//il manque des notes de certains éleves
			if(nb_identifiants_notes < nb_identifiants_classe){

				console.log("il manque des eleves")

				//pour chaque élève de la classe
				demande_classe.data.forEach(function(un_eleve){
					//s'il a des notes -> rien
					//si l'identifiant un_eleve['Identifiant'] n'est pas listé dans demande -> rajouter dans demande
					identifiant_non_liste = demande.data.filter(e => e['Identifiant'] === un_eleve['Identifiant']).length === 0

					if(identifiant_non_liste){

						nouvelle_note = {
						  "id_note": 0,
						  "Classe": classe,
						  "Nom": un_eleve['Nom'],
						  "Prénom(s)": un_eleve['Prénom(s)'],
						  "Identifiant": un_eleve['Identifiant'],
						  "Classe_Matiere": Classe_Matiere,
						  "identifiant_prof": null,
						  "periode_bulletin": periode_bulletin,
						  "saison_note": saison_note,
						  "note": '',
						  "liste_options": un_eleve['liste_options'],
						  "coef": 0
						}

						demande.data.push(nouvelle_note)
					}



				})

			//trop de notes : il y a une (ou+) personne(s) en trop
			}else if(nb_identifiants_notes > nb_identifiants_classe){
				les_eleves = valeursUniquesDeCetteKey(demande_classe.data,'Identifiant')
				les_eleves_notes = valeursUniquesDeCetteKey(demande.data,'Identifiant')

				console.log({les_eleves})
				console.log({les_eleves_notes})
			}

			mes_eleves_initiaux = demande.data

			chargement(false)


			return mes_eleves_initiaux

		}else{

			//si la matiere possede un coef spécifiable, on veut uniquement les eleves qui ont cette classe matiere dans leur liste_options
			var demande = await supabase.from('bulletins').select('*').like('liste_options', '%'+Classe_Matiere+'%').like('Classe_Matiere', '%'+Classe_Matiere+'%')
			var nb_identifiants_notes = valeursUniquesDeCetteKey(demande.data,'Identifiant').length
			console.log("1",{demande})

			var eleves_inscrits = await supabase.from('Eleves').select('*').like('liste_options', '%'+Classe_Matiere+'%').order('Identifiant', { ascending: true })
			var nb_identifiants_classe = valeursUniquesDeCetteKey(eleves_inscrits.data,'Identifiant').length
			
			//si ça renvoie + de 1000 -> limiter à la matiere
			if(demande.data.length >= 1000){
				demande = await supabase.from('bulletins').select('*').like('Classe_Matiere', '%'+Classe_Matiere+'%')
				console.log("2",{demande})




			//si le nombre d'élèves renvoyés n'est pas le même que le nombre d'inscrits
			}else if(nb_identifiants_classe > nb_identifiants_notes){			
				console.log("2 BIS",{eleves_inscrits})

				eleves_inscrits.data.forEach( function(un_eleve, index_note) {

					//si l'identifiant un_eleve['Identifiant'] n'est pas listé dans demande -> rajouter dans demande
					identifiant_non_liste = demande.data.filter(e => e['Identifiant'] === un_eleve['Identifiant']).length === 0

					if(identifiant_non_liste){

						nouvelle_note = {
						  "id_note": 0,
						  "Classe": classe,
						  "Nom": un_eleve['Nom'],
						  "Prénom(s)": un_eleve['Prénom(s)'],
						  "Identifiant": un_eleve['Identifiant'],
						  "Classe_Matiere": Classe_Matiere,
						  "identifiant_prof": null,
						  "periode_bulletin": periode_bulletin,
						  "saison_note": saison_note,
						  "note": '',
						  "liste_options": un_eleve['liste_options'],
						  "coef": 0
						}

						demande.data.push(nouvelle_note)
					}
				})



			//si la matière ne renvoie rien -> renvoyer tous les inscrits à la matière
			}else if(demande.data.length === 0){			

				demande = await supabase.from('Eleves').select('Identifiant,Nom,"Prénom(s)",liste_options').like('liste_options', '%'+Classe_Matiere+'%').order('Identifiant')
				console.log("3",{demande})

			}
			

			//console.log({demande})
			mes_eleves_initiaux = demande.data
			mes_eleves_initiaux = mes_eleves_initiaux.sort((a,b) =>  a['Identifiant']-b['Identifiant'] )


			chargement(false)
			return mes_eleves_initiaux





		}

}

function remplacer_liste_saison_note(){
	$("form#periodes").remove()
	$("form#les_enseignants").remove()
	$("#menu_periode").append(les_periodes_bulletin())

	//me mettre comme enseignant/admin
	$('#enseignant').val(recuperer('identifiant_courant'))

	au_changement("#saison_note","actualiser_liste_eleves_bulletins()")
	au_changement("#enseignant","actualiser_liste_eleves_bulletins(true)")

	au_clic("#saison_note","demande_enregistrement_avant_changement_periode()")
}

async function mettre_le_bon_enseignant(){
	//me mettre comme enseignant/admin
	$('#enseignant').val(recuperer('identifiant_courant'))

	//si je suis pas dans la liste -> mettre le premier qui a saisi des appreciations/notes
	if (!$('#enseignant').val()){
		const ens = await enseignant_de_la_matiere_dans_la_periode_principale($('.un_menu').val(), $('#periode_bulletin').val())
		$("#enseignant").val(ens)
	}  
	
	//si tjr pas d'enseignant => mettre le 1er rencontré
	if(!$('#enseignant').val()) $("#enseignant").val($("#enseignant option:first").val());	

}

async function enseignant_de_la_matiere_dans_la_periode_principale(Classe_Matiere, periode_principale){

	var mode_appreciations = false

	//depuis les appreciations
	var {data,error} = await supabase.from('Appreciations')
					.select('*')
					.eq('Classe_Matiere',Classe_Matiere)
					.eq('periode_principale',periode_principale)
					.order('horodateur', {ascending: true})

	//si introuvable => chercher depuis les notes
	if (!data){
		const {data,error} = await supabase.from('Notes')
					.select('*')
					.eq('Classe_Matiere',Classe_Matiere)
					.eq('periode_bulletin',periode_principale)
					.order('date_creation_note', {ascending: true})
	} else{
		mode_appreciations = true
	}

	console.log({mode_appreciations})
	console.log({data})

	if(data[0]){
		return mode_appreciations ? data[0]['identifiant_appreciateur'] : data[0]['identifiant_prof']
	}else{
		return null
	}
}

function afficher_choix_periode_bulletin(id_classe_matiere){

	$("#trimestre").remove()
	$("#explications").remove()
	$("#menu_periode").remove()

	//console.log({id_classe_matiere})
	if(id_classe_matiere.trim() === "") return false

	var choix_periode = les_trimestres_bulletin() + les_periodes_bulletin() 




	$('#menu_haut').append('<div style="text-align: center;" id="menu_periode">'+choix_periode+'</div>')
	mettre_le_bon_enseignant()


	au_changement("#periode_bulletin","actualiser_liste_eleves_bulletins()")
	au_changement("#periode_bulletin","remplacer_liste_saison_note()")
	au_changement("#saison_note","actualiser_liste_eleves_bulletins()")


	au_clic("#periode_bulletin","demande_enregistrement_avant_changement_periode()")
	au_clic("#saison_note","demande_enregistrement_avant_changement_periode()")
}

function transformer_notes_en_array(mes_eleves, periode_bulletin, saison_note){

	//console.log('eleves initialement recus',mes_eleves)

	//garder les identifiants uniques
	var les_eleves = valeursUniquesDeCetteKey(mes_eleves,"Identifiant")
	var resultat = []
	var eleve_en_cours = {}


	//ne garder que les notes de LA PERIODE et de LA SAISON
	var tout = donnees_generiques_bulletin()
	periode_bulletin = periode_bulletin ? periode_bulletin : tout.periode_bulletin
	saison_note = saison_note ? saison_note : tout.saison_note
	var Classe_Matiere = tout.Classe_Matiere
	var identifiant_prof = tout.identifiant_prof

	//console.log('transformation de notes...', {periode_bulletin,saison_note,Classe_Matiere,identifiant_prof})


	//pour chaque élève UNIQUE
	les_eleves.forEach( function(un_eleve, index) {


		//filtrer mes_eleves pour avoir les infos de un_eleve
		var nom=mes_eleves.find(e => e['Identifiant'] === un_eleve)['Nom']
		var prenoms= mes_eleves.find(e => e['Identifiant'] === un_eleve)['Prénom(s)']


 
		//si saison_note n'est pas TOUT, filtrer
		if(saison_note!=="Toutes"){
			var notes_de_leleve = mes_eleves.filter(e =>  e['Classe_Matiere'] === Classe_Matiere && e['Identifiant'] === un_eleve && e['periode_bulletin'] === periode_bulletin && e['saison_note'] === saison_note  && e['identifiant_prof'] === identifiant_prof).map(e => e['note'] + '|' + e['coef'] + '|' + e['saison_note'])	
			afficher_details_calcul_eleve_test(un_eleve, {saison_note},{notes_de_leleve})

		//si saison_note=Toutes
		//-> on récupère toutes les notes et on rend NON MODIFIABLE!!
		//-> on rajoute la moyenne périodique si demandé
		}else{

			var notes_de_leleve = mes_eleves.filter(e =>  e['Classe_Matiere'] === Classe_Matiere && e['Identifiant'] === un_eleve && e['periode_bulletin'] === periode_bulletin && e['identifiant_prof'] === identifiant_prof).map(e =>  e['note'] + '|' + e['coef'] + '|' + e['saison_note'] )	
			afficher_details_calcul_eleve_test(un_eleve, 'TOUS',{notes_de_leleve})

			var moyenne_periodique = calculer_moyenne_periodique(notes_de_leleve)
			
			if(moyenne_periodique!==""){
				//console.log("on doit rajouter la moyenne périodique de " + un_eleve + " = " + moyenne_periodique)
				notes_de_leleve.push(moyenne_periodique + '|' + 'coef' + '|' + 'moyenne_periode')
				//console.log({notes_de_leleve})
			}

			//si examen existe
			//enlever puis remettre (pour que ce soit à la fin)
			var index_note_examen = notes_de_leleve.findIndex(e => e.includes('Examen'))
			if(index_note_examen > -1){
				//on stocke la valeur
				//on l'enlève
				var la_note_examen = notes_de_leleve.splice(index_note_examen, 1)[0]
				//on la remet
				notes_de_leleve.push(la_note_examen)
			}


		}
		
		
		afficher_details_calcul_eleve_test(un_eleve,{notes_de_leleve})

		//rassembler l'élève avec ses notes
		eleve_en_cours = {
			Identifiant: un_eleve,
			'Nom': nom,
			'Prénom(s)':prenoms,			
			note: notes_de_leleve
		}		
		//console.log({eleve_en_cours})
		resultat.push(eleve_en_cours)
	});



	//console.log({resultat})
	return resultat
}

function calculer_moyenne_periodique(notes_de_leleve){
	afficher_details_calcul_eleve_test({notes_de_leleve})

	//on filtre pour ne garder que ceux qui ne contiennent pas le terme 'Examen'
	var notes_periodiques = notes_de_leleve.filter(e => !e.includes('Examen')).map(une_note => Number(une_note.split('|')[0]))
	afficher_details_calcul_eleve_test("*********************************")
	afficher_details_calcul_eleve_test({notes_periodiques})

	//on fait le calcul
	const average = function (arr) {
		if(arr.length > 0){
			return (arr.reduce( ( p, c ) => p + c, 0 ) / arr.length).toFixed(2);	
		}else{
			return ""
		}		
	}


	const result = average(notes_periodiques); 
	afficher_details_calcul_eleve_test({result})

	return result
}

async function demande_enregistrement_avant_changement_periode(){

	//détecter tout changement avant de faire le changement
	//console.log({bulletin_enregistre})
	if(bulletin_enregistre === false && $(".liste_eleves_bulletins").length > 0 && $("#periode_bulletin").val() !== "--" && $("#saison_note").val() !== "--" && $("#saison_note").val() !== "Toutes" ){
		var enregistrer = confirm("Voulez-vous enregistrer votre saisie actuelle?")
		if(enregistrer){
			await sauvegarder_saisie_bulletin()
		}else{
			bulletin_enregistre = true	
			effacer("enregistrement_en_cours")
		}
	}else{
		bulletin_enregistre = true
		effacer("enregistrement_en_cours")
	}

}



async function actualiser_liste_eleves_bulletins(changement_enseignant, mes_eleves_initialement, periode_bulletin, saison_note){

	$(".liste_eleves_bulletins").remove()
	$('#wrap_boutons_import').remove()

	if($("#periode_bulletin").val() === "--" || $("#saison_note").val() === "--" ){
		//1 champ vide -> on fait rien

	}else{


		//si on a pas mis à jour l'enseignant -> mettre l'enseignant
		
		if (!changement_enseignant){
			mettre_le_bon_enseignant()
		}
		

		mes_eleves = mes_eleves_initialement ? mes_eleves_initialement : await trouver_mes_eleves()
		//console.log('INITIAL',{mes_eleves})


		if(!mes_eleves || mes_eleves.length === 0){
			var liste_eleves_bulletins = `<i class="liste_eleves_bulletins contenu_alerte_vide">Aucun élève inscrit à ce cours.</i>`

		}else{	

			mes_eleves = transformer_notes_en_array(mes_eleves, periode_bulletin, saison_note)
			console.log('FINAL',{mes_eleves})


			var tout = donnees_generiques_bulletin()
			var identifiant_appreciateur = tout.identifiant_prof 
			var la_classe_matiere = tout.Classe_Matiere

			//on récup les appreciations 1 fois pour toutes POUR LA PERIODE CHOISIE
			var url = racine_data + 'Appreciations?identifiant_appreciateur=eq.'+identifiant_appreciateur+'&Classe_Matiere=eq.'+ la_classe_matiere + '&periode_principale=eq.'+ (periode_bulletin ? periode_bulletin : $("#periode_bulletin").val()) +  "&" +apikey
			var toutes_les_appreciations = get_resultat(url)
			//console.log({toutes_les_appreciations})


			var liste_eleves_bulletins = `<div class="liste_eleves_bulletins">`+ mes_eleves.map(function(un_eleve,index){
				afficher_details_calcul_eleve_test(un_eleve['Identifiant'],{un_eleve})

				var cases_de_notes = les_notes_eleve(un_eleve['note'])

				//si c'est la vie scolaire -> RETARDS + ABSENCES + APPRECIATIONS
				if($('select.un_menu').val().includes('Vie scolaire') && $('[id="saison_note"]').val() === "Toutes"){



					cases_de_notes = mode_vie_scolaire(toutes_les_appreciations, un_eleve['Identifiant'],true)
				}


				//afficher_details_calcul_eleve_test(un_eleve['Identifiant'],{cases_de_notes})

				return `
					
					  <div class="un_eleve_bulletin" id="`+un_eleve['Identifiant']+`">
					    <span class="une_case"> `+un_eleve['Nom']+` `+un_eleve['Prénom(s)']+`</span>`+cases_de_notes+`
					  </div>	

				`
			}).join('')+'</div>'
			//console.log(liste_eleves_bulletins)

			//si aucune note encore ET on est dans examen ET je suis admin => ajouter éventuellement un bouton d'import des anciennes notes
			if(mes_eleves.map(e => e['note']).flat().length === 0 && mode_examen_actif() && recuperer('mon_type').includes('Administration')){
				recuperer_periodes_principales_precedentes_de_cette_classe_matiere(false) // false car pas en mode appréciation
			}


			//si des notes d'examen uniquement ET si mode appréciations ET aucune appreciation trouvée ET je suis admin => bouton de copie des appréciations
			if(examens_uniquement(mes_eleves) && mode_appreciation_actif() && toutes_les_appreciations.length === 0 && recuperer('mon_type').includes('Administration')){
				recuperer_periodes_principales_precedentes_de_cette_classe_matiere(true)	// true car en mode appréciation
			}


			
		}

		$('#previsualisation').append(liste_eleves_bulletins)

		
	}	

	function examens_uniquement(mes_eleves){
		const a = mes_eleves
		const notes_des_examens = a.map(e=> e.note).flat().filter(e => e.includes('Examen'))
		const toutes_les_notes = a.map(e=> e.note).flat()
		/*
		console.log('notes_des_examens = ',notes_des_examens)
		console.log('toutes_les_notes = ',toutes_les_notes)
		*/
		return notes_des_examens.length === toutes_les_notes.length && toutes_les_notes.length > 0
	}

	function mode_examen_actif(){
		return 'Examen'.includes(donnees_generiques_bulletin()['saison_note'])
	}


	function mode_appreciation_actif(){
		return 'Toutes'.includes(donnees_generiques_bulletin()['saison_note'])
	}

		

	//changer sur chaque eleve pour afficher la moyenne + une case vide de plus
	$('.un_eleve_bulletin').each(function(index,eleve){

		//actualiser ssi l'élève a au moins 1 note NON VIDE
		if($(eleve).children('.une_note').text() !== ""){
			$(eleve).children().last().trigger("input")	
			bulletin_enregistre = true
			effacer("enregistrement_en_cours")
		}

		
	})

	

	chargement(false)

	


}

function coef_note_en_cours(){
	var saison_note = element_DOM('saison_note').value
	return saison_note === "Examen" ? 3 :
			!isNaN(Number(saison_note)) ? 1 : 0
}



function les_notes_eleve(notes){

	//console.log('\n',{notes})

	var est_editable = element_DOM('saison_note').value !== "Toutes"
	//console.log({est_editable})

	//pas de note initialement
	if(notes.length === 0){
		return '<span class="une_note" oninput=actualiser_nb_cases(this) coef="'+coef_note_en_cours()+'" contenteditable="'+est_editable+'"></span>'

	//déjà une note
	}else{
		//AU MOINS 1 NOTE DEJA EXISTANTE

		return notes.map(function(la_note,numero_note){
			afficher_details_calcul_eleve_test({numero_note, la_note})
			if(la_note==="null"||la_note===null) la_note = ""

			classe_de_la_note = "une_note"

			if(la_note.length > 0){
				//console.log({la_note})
				classe_de_la_note = classe_de_la_note + (la_note.split('|')[2] === "Examen" ? " est_examen " : "")
				classe_de_la_note = classe_de_la_note + (la_note.split('|')[2] === 'moyenne_periode' ? " est_moyenne_periodique" : "")
			}

			return '<span class="'+classe_de_la_note+'"  oninput="actualiser_nb_cases(this)" coef="'+la_note.split('|')[1]+'" contenteditable="'+est_editable+'">'+la_note.split('|')[0].trim()+'</span>'	
		}).join('')




	}

}

function note_min_possible(){
	return Number(data_etablissement['config_notes']['note_min']) || 0
}

function note_max_possible(){
	return Number(data_etablissement['config_notes']['note_max']) || 20
}

function verif_avant_enregistrement_notes(){

	const les_notes = Array.from($('.une_note'))

	for (var index_note_saisie = 0; index_note_saisie  < les_notes.length; index_note_saisie++) {
		var la_note = les_notes[index_note_saisie].innerText.trim()
		if(la_note){
			console.log({la_note})
			var valeur_note = Number(la_note)
			console.log({valeur_note})
			if (valeur_note < note_min_possible()){
				alert("⚠️ Merci de saisir une note supérieure ou égale à "+note_min_possible()+".")
				return false
			} else if(valeur_note > note_max_possible()){
				alert("⚠️ Merci de saisir une note inférieure ou égale à "+note_max_possible()+".")
				return false
			}
		}

	}

	return true

}

function verif_touches_notes(ceci){

	touche = right(ceci.innerText,1)
	//console.log({touche})

	//si c'est une virgule -> remplacer par un point
	if(touche.trim()===","){
		alert("⚠️ Merci d'utiliser le point (.) pour les nombres à virgule.")
		return false
	}else if (isNaN(Number(ceci.innerText))){
		alert("⚠️ Merci de saisir une note sous forme de nombre.")
		ceci.innerText = ceci.innerText.replace(touche,'')
		return false

	}

	return true

}

function actualiser_nb_cases(ceci){

	verif_touches_notes(ceci)

	var le_parent = ceci.parentNode

	//supprimer la case de moyenne
	$('[id="'+le_parent.id+'"] > .case_de_moyenne').remove()

	//console.log(ceci)
	var note = ceci.innerText


	//note vide
	if(note.length === 0){

		//pas de prochaine note SSI(!) cette prochaine note est vide ET AU MOINS 2 NOTES
		if ($(le_parent).children().last().text().trim() === "" && $(le_parent).children('.une_note').length > 1) $(le_parent).children().last().remove();

	//note non vide
	}else{

		var nb_children = le_parent.children.length-1
		var index_ceci = Array.prototype.indexOf.call(le_parent.children, ceci)
		
		//console.log({nb_children})
		//console.log({index_ceci})
		

		//rajouter une note possible à droite SSI(!) elle n'existe pas encore ET ON N'EST PAS DANS LES APPRECIATIONS, càd le nombre de children = index de ceci
		if(nb_children === index_ceci && nb_children<data_etablissement['nb_notes_max_par_periode'] && $("#saison_note").val()!=="Toutes") $(le_parent).append(les_notes_eleve([" "]))

		//si la personne a saisi une virgule, annuler
	}

	//ajouter la case moyenne
	if(!ceci) ceci = $(le_parent).children().last()

	var est_moyenne_generale = $('[id="saison_note"]').val() === "Toutes"

	var moyenne = calcul_moyenne_bulletin(le_parent.id,est_moyenne_generale)
	var moyenne_periode = moyenne['val']
	var note_examen = moyenne['note_examen']

	//console.log({moyenne_periode})
	var classe_case_moyenne = "case_de_moyenne"
	classe_case_moyenne = classe_case_moyenne + (est_moyenne_generale || moyenne_periode.trim() === ""? "" :' est_moyenne_periodique')
	$(le_parent).append('<span class="'+classe_case_moyenne+'">'+moyenne_periode+'</span>')



	//console.log('Attribution de la remarque...',le_parent.id)
	if( typeof moyenne_journaliere !== 'undefined'){
		$('[id="'+le_parent.id+'"] .case_de_moyenne').attr('title', 'Moyenne générale = ' 
																	+
																	(moyenne_journaliere ? (coef_journalier+' * '+(moyenne_journaliere || 0)+' (moyenne hors examen en gris)        ') : '')
																	+
																	((moyenne_journaliere && note_examen) ? '+' : "")
																	+
																	(note_examen ? (coef_examen + ' * '+ (note_examen || 0) +' (examen en orange)') : "")
															) 
	}else{
		$('[id="'+le_parent.id+'"] .case_de_moyenne').attr('title', 'Moyenne des notes saisies')
	}

	//console.log('Attribution de la remarque DONE!',le_parent.id)



	if($("#saison_note").val()==="Toutes"){
		recuperer_et_afficher_les_appreciations(le_parent)
	}


	bulletin_enregistre = false

}

function recuperer_et_afficher_les_appreciations(le_parent, periode_bulletin){

	var tout = donnees_generiques_bulletin()
	var identifiant_appreciateur = tout.identifiant_prof 
	periode_bulletin = periode_bulletin ? periode_bulletin : tout.periode_bulletin
	url = racine_data + 'Appreciations?identifiant_appreciateur=eq.'+identifiant_appreciateur+'&identifiant_eleve=eq.'+ le_parent.id +'&Classe_Matiere=eq.'+ tout.Classe_Matiere +'&periode_principale=eq.'+ periode_bulletin + "&" +apikey
	var contenu_appreciation = get_resultat(url)
	//console.log({appreciation: contenu_appreciation[0]})

	const appreciation = contenu_appreciation[0] ? contenu_appreciation[0]['contenu'] : ""

	rajouter_champ_appreciations(appreciation,le_parent,'Votre appréciation ici...','contenu','appreciation')

}

function mode_vie_scolaire(toutes_les_appreciations,identifiant_eleve){
	var le_parent = document.createElement('div')
	le_parent.id = identifiant_eleve

	var retards = ""
	var absences = ""
	var contenu = ""

	if(toutes_les_appreciations.length > 0){

		//console.log('on cherche 1 appreciation pour ',identifiant_eleve)

		//console.log({toutes_les_appreciations})
		var contenu_appreciation = {}
		contenu_appreciation = toutes_les_appreciations.find(function(appreciation){
			//console.log(appreciation,'  VS  ', identifiant_eleve)
			return appreciation['identifiant_eleve'] === identifiant_eleve
		})



		if(contenu_appreciation && Object.keys(contenu_appreciation).length > 0){

			var contenu_appreciation_json = JSON.parse(contenu_appreciation['contenu'])

			//console.log({contenu_appreciation_json})

			retards = contenu_appreciation_json['retards'] || ""
			absences = contenu_appreciation_json['absences'] || ""
			contenu = contenu_appreciation_json['contenu'] || ""

		}

	}

	var res = rajouter_champ_appreciations(retards,le_parent,'Nombre de retards...','retards','case_nombre',true)
	res += rajouter_champ_appreciations(absences,le_parent,'Nombre d\'absences (demi-journées)...','absences','case_nombre',true)
	res += rajouter_champ_appreciations(contenu,le_parent,'Votre appréciation globale ici...','contenu','appreciation',true)
	return res
}

function rajouter_champ_appreciations(contenu_appreciation, le_parent,contenu_place_holder,nom_champ,nom_classe,rendre_contenu){


	//si on est sur TOUTES -> rajouter la case d'appréciation
	


		//console.log({contenu_appreciation})

		var contenu_final = '<div class="bloc_appreciation"><textarea placeholder="'+contenu_place_holder+'" type="text" class="'+nom_classe+'" name="'+nom_champ+'">'+contenu_appreciation+'</textarea></div>'
		if(!rendre_contenu){
			$(le_parent).append(contenu_final)
		}else{
			return contenu_final
		}
		
	

}

function afficher_details_calcul_eleve_test(identifiant,contenu_log){
	if(nom_eleve_test && identifiant === nom_eleve_test ){
		console.log(contenu_log)
	}
}

function calcul_moyenne_bulletin(identifiant, moyenne_generale){

	

	var total = 0;
	var taille = 0;
	var resultat = 0

	if (!moyenne_generale){

		//par défaut on ignore l'examen
		$('[id="'+identifiant+'"] > .une_note').not('.est_examen').each(function(index,saisie){

			total += Number(saisie.innerText) ? Number(saisie.innerText) : 0;	
			
			
			//console.log({total})
			afficher_details_calcul_eleve_test(identifiant,{total})

			if(saisie.innerText!== "") taille=taille+1
		})




		//console.log({taille})
		afficher_details_calcul_eleve_test(identifiant,{taille})

		resultat = taille > 0 ? total/taille : ""
		resultat = resultat ? resultat.toFixed(2) :  ""
		//console.log(resultat)
		afficher_details_calcul_eleve_test(identifiant,{resultat})

		return {val: resultat}


	//moyenne générale = 0.30 * moyenne bulletin + 0.70 * examen
	}else{

		$('[id="'+identifiant+'"] > .une_note.est_examen').each(function(index,saisie){

			total += Number(saisie.innerText) ? Number(saisie.innerText) : 0;	
			
			
			//console.log({total})
			afficher_details_calcul_eleve_test(identifiant,{total})

			if(saisie.innerText!== "") taille=taille+1
		})

		var note_examen = taille > 0 ? total/taille : ""
		note_examen = note_examen ? note_examen.toFixed(2) :  ""
		afficher_details_calcul_eleve_test(identifiant,{note_examen})


		moyenne_journaliere = calcul_moyenne_bulletin(identifiant)['val']
		coef_examen = moyenne_journaliere>0 ? 0.6667 : 1
		coef_journalier = note_examen>0 ? 0.3333 : 1
		moyenne_generale_matiere = Number(moyenne_journaliere * coef_journalier + note_examen * coef_examen)


		 //  Number($('[id="'+identifiant+'"].un_eleve_bulletin > .est_examen').text())
		return {
				note_examen: note_examen,
				val: moyenne_generale_matiere.toFixed(2)
			}

	}

}

function clic_bulletin_old(){


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
	var elements_html = les_trimestres_bulletin()

	creer_mini_popup("Choisissez la période du bulletin à consulter:", elements_html,"Consulter","consulter()")
	
}

function les_trimestres_bulletin(avec_annee){

	var liste_periodes_principales = recuperer_liste_periodes_principales().split(',')


	return `<form id="trimestre" class="liste_deroulante">
				<label for="periode_bulletin">`+recuperer_nom_periodes_principales_bulletin()+`:
					<select id="periode_bulletin" name="periode_bulletin">
						<option value="--">--</option>
						`+

							liste_periodes_principales.map(e => '<option value="'+e+'">'+e+'</option>')

						+`
						`+( avec_annee ? `<option value="ANNUEL">ANNUEL</option>` : "")+`
					</select>
				</label>
			</form>`
}



function les_periodes_bulletin(){

	var liste_periodes_secondaires = element_DOM("periode_bulletin") ? recuperer_liste_periodes_secondaires(element_DOM("periode_bulletin").selectedIndex-1).split(',') : []
	if($('select.un_menu').val().includes('Vie scolaire')) liste_periodes_secondaires = []
	return `<form id="periodes" class="liste_deroulante">
				<label for="saison_note">`+recuperer_nom_periodes_secondaires_bulletin()+`:
					<select id="saison_note" name="saison_note">	
						<option value="--">--</option>	

						`
						+liste_periodes_secondaires.map(e => '<option value="'+e.trim()+'">'+e.trim()+'</option>').join('')+

						`

						<option value="Toutes">Appréciations</option>
					</select>
				</label>
			</form>` + les_enseignants()
}

function au_singulier(mot){
	if(mot.slice(-1) === 's'){
		return mot.substr(0,mot.length-1)	
	} else {
		return mot	
	}

	
}

function liste_periodes_etab(nom_periode_bulletin){
	nom_periode_bulletin= nom_periode_bulletin ? nom_periode_bulletin : data_etablissement['config_notes']['nom_periode_bulletin']
	return Object.keys(data_etablissement['config_notes'][nom_periode_bulletin])
}


//récupérer les données d'une autre periode principale
async function recuperer_periodes_principales_precedentes_de_cette_classe_matiere(mode_appreciations){

	const contenu_bouton = !mode_appreciations ? 'notes d\'examen' : 'appréciations'
	const nom_fonction_bouton = !mode_appreciations ? 'recuperer_donnees_periode' : 'recuperer_appreciations_periode'

	const classe_matiere = donnees_generiques_bulletin()['Classe_Matiere']
	const {data, error} = await supabase.from('Notes')
										.select('periode_bulletin')
										.not('periode_bulletin', 'in', '('+liste_periodes_etab().join(',')+')')
										.eq('Classe_Matiere',classe_matiere)
										.eq('saison_note','Examen')

										
	if(data.length > 0){
		//console.log('avec déjà des notes précédentes')

		const liste_periodes_precedentes = valeursUniquesDeCetteKey(data, 'periode_bulletin')
		const boutons_copie = '<div id="wrap_boutons_import">' + liste_periodes_precedentes.map((periode) => {
			$('[id="import_periode_'+periode+'"]').remove() //seulement UN button par periode
			return `<button id="import_periode_${periode}" class="rendre sekooly-mode-background" onclick="${nom_fonction_bouton}('${periode}')">Importer les ${contenu_bouton} de ${au_singulier(data_etablissement['config_notes']['nom_periode_bulletin'])} ${periode}</button>`
		}).join('') + '</div>'

		$('#menu_periode').append(boutons_copie)

	}else {
		//console.log('pas encore de notes précédentes')
	}
}

async function recuperer_donnees_periode(periode_bulletin){
	const saison_note = donnees_generiques_bulletin()['saison_note']
	const mes_eleves_initialement = await trouver_mes_eleves(periode_bulletin,saison_note)
	console.log('mes_eleves_initialement',mes_eleves_initialement)
	actualiser_liste_eleves_bulletins(true,mes_eleves_initialement,periode_bulletin,saison_note)

	alerter_copie_donnees(false)
}

//todo
async function recuperer_appreciations_periode(periode_bulletin){

	const liste_eleves_de_la_matiere = Array.from($('.un_eleve_bulletin')).map(e => e.id)
	const classe_matiere = donnees_generiques_bulletin()['Classe_Matiere']

	const {data,error} = await supabase.from('Appreciations')
										.select('*')
										.eq('Classe_Matiere',classe_matiere)
										.in('identifiant_eleve', liste_eleves_de_la_matiere)
		
	if(data){
		console.log('les anciennes appréciations : ',data)
		Array.from($('.un_eleve_bulletin textarea')).map(e => e.value = data.find(appreciations => appreciations['identifiant_eleve'] === e.parentNode.parentNode.id)['contenu'] )
		alerter_copie_donnees(true)

		$('#wrap_boutons_import').remove()
	}else{
		console.log('aucune ancienne appréciation')
	}
}


function alerter_copie_donnees(mode_appreciations){
	const contenu_copie = mode_appreciations ? 'appréciations' : 'notes'


	afficher_alerte('⚠️ Vous devez sauvegarder pour garder la copie de ces '+contenu_copie+'.')
	bulletin_enregistre = false	

}



function get_les_profs(classe_matiere,  appreciations_et_notes_comprises){
	var url = racine_data + 'Profs?Classe=like.*'+classe_matiere + "*&" +apikey
	var les_profs = get_resultat(url)



	if (les_profs.length === 0 && appreciations_et_notes_comprises){
		//récupérer tous les profs qui ont saisie une note et/ou une appréciation
		var profs_notes = get_resultat(racine_data + 'Notes?select=identifiant_prof&Classe_Matiere=eq.'+classe_matiere + "&" +apikey)
		var profs_appreciations = get_resultat(racine_data + 'Appreciations?select=identifiant_appreciateur&Classe_Matiere=eq.'+classe_matiere + "&" +apikey)
		
		//console.log({profs_notes})
		//console.log({profs_appreciations})


		const les_profs_ayant_saisi = valeursUniquesDeCetteKey(profs_appreciations.concat(profs_notes).map(function(e){
			return {"Identifiant": e[Object.keys(e)[0]]}
		}) , "Identifiant"   )
		//console.log({les_profs_ayant_saisi})
		
		//essayer dans profs
		les_profs = les_profs_ayant_saisi.map(function(id_prof) {
			return get_resultat(racine_data + 'Profs?Identifiant=eq.'+id_prof + "&" +apikey)
		}).flat()

		//essayer dans admin
		if(les_profs.length === 0){
			//console.log('chercher dans admin...')
			les_profs = les_profs_ayant_saisi.map(function(id_prof) {
				return get_resultat(racine_data + 'Administration?Identifiant=eq.'+id_prof + "&" +apikey)
			}).flat()
		}

		//console.log({les_profs})
	} 
	return les_profs
}

function get_les_admin(le_cycle){
	var url = racine_data + 'Administration?Cycle=like.*'+le_cycle + "*&" +apikey
	var les_profs = get_resultat(url)
	les_profs = les_profs.filter(e => !e['Identifiant'].includes('admin.tech'))
	return les_profs

}

function les_enseignants(){
	var resultat = ""

	if(recuperer('mon_type').includes('Admin')){

		var classe_matiere = $('.un_menu > option:selected').text()		
		var les_profs = get_les_profs(classe_matiere, true)
		var label_enseignant = 'Enseignant'

		if($('select.un_menu').val().includes('Vie scolaire')){
			mon_cycle = JSON.parse(recuperer('mes_matieres'))[0]['Cycle']
			les_profs = get_les_admin(mon_cycle) //[JSON.parse(recuperer('mes_donnees'))] 
			label_enseignant = 'Administrateur'
		}

		resultat = `
			<form id="les_enseignants" class="liste_deroulante"><label for="enseignant">`+label_enseignant+`:
					<select id="enseignant" name="enseignant">
						`
						+les_profs.map(e => '<option value="'+e['Identifiant']+'">'+e['Nom'] + " " + e['Prénom(s)'] +'</option>').join('')+

						`
					</select>
				</label>
			</form>

		`
	}

	return resultat 

}

function consulter(){
	chargement(true)
	consulter_mon_bulletin(recuperer('identifiant_courant'))
	chargement(false)
}


/*NON UTILE*/
function choisir_clic_bulletin(){

	popup_choix = '<div class="mini_popup" id="mini_popup"><div id="entete-fenetre" style="display: inline-flex;float: right;"><img alt="X" src="'+ prefixe_image + '/quitter.png" id="bye_prev" onclick="$(\'#mini_popup\').remove()" style="width: 30px; height: 30px;cursor:pointer;position:fixed;z-index:3;transform: translate(-50%, -50%);"> </div><div>Que voulez-vous faire?</div><select style="width: 80%;" id="choix_bulletin"><option value="upload">Mettre en ligne les bulletins</option><option value="voir">Voir les bulletins en ligne</option></select><button type="button" class="rendre sekooly-mode-background" onclick="choix_bulletin_ok()">Valider</button></div>'
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
		//$("[value='Bulletins']")[0].style.display = ""
		element_DOM("choix_chapitre").style.display = "none"


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
		//$("[value='Bulletins']")[0].style.display = "none"
		$("#categorie_choisie > [value='Manuels']")[0].style.display = !recuperer("mon_type").includes("Administration") ? "none" : "" //manuels interdits sauf aux membres de l'administration
		element_DOM("choix_chapitre").style.display = ""
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
		try{
			return get_resultat(url)[0]["Ecolage_OK"] === "oui"	
		}catch(e){
			return false
		}
		
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

	contenu = "Bonjour <span  class='sekooly-mode' > "+recuperer('identifiant_courant').toUpperCase()+ "</span>, et bienvenue sur la plateforme de télé-enseignement Sekooly!<br><br>"
	contenu += "Pour mettre en route la plateforme de l'établissement <b>" + nom_etablissement.toUpperCase() + "</b>, nous aurons besoin de quelques informations supplémentaires.<br><br><rouge>Toutes les informations que vous allez saisir seront modifiables plus tard.</rouge><br>"
	bouton = "<button onclick='suivant()' id='bouton_suivant' class='mon_bouton sekooly-mode-background' style='height: 50px;font-size: inherit;'>C'est parti!</button>"
	
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
	url = racine_data + "Administration?Identifiant=eq.admin.tech&"+ apikey
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
	reinit_init = numero_etape > 0 ? '<img id="reset_param" onclick="reinitialiser_init()" alt="Recommencer" src="'+ prefixe_image + '/img_reset.png" class="icone_param">' : ''
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
function rendre_riche(id_text_area){

	//console.log({id_text_area})
	ClassicEditor
		.create( document.querySelector( '[id="'+id_text_area+'"]' )   , config_editor() )
        .then( async (editor) => {
            //console.log( editor )

            var a = await liste_de_mes_destinataires()
            a = a.map(e => e.split(' (')[0])
            creer_element_cliquable(editor,a,"@",null)

			



        } )
	    .catch( error => {
	        console.error( error );
	    });
}


function creer_element_cliquable(editor,liste_initiale,caractere,callback){
	$('[contenteditable="true"]').atwho({
		at: caractere,
		data: liste_initiale
	});

	

	//quand on clique -> on insère
	$(".atwho-view-ul").off("click enter")			
	$(".atwho-view-ul").on("click enter",function(){
		var texte_a_ajouter = $("li.cur").text().trim().toUpperCase() + " "
		//enlever ce qui est entre '@' et ' '

		//mettre le texte
		//inserer_element(editor, '<div class="auteur_du_poste sekooly-mode">'+texte_a_ajouter+'</div>', null)
		inserer_element(editor, texte_a_ajouter)
		callback
	})


	//quand on est au dessus
	$(".atwho-view-ul").off("mouseover")
	
			

}


function recuperer_html_saisie_riche(){
	//return $(".ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred")[0].innerHTML
	return $("[contenteditable]")[0].innerHTML
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
	$('.sidebar.left').trigger('sidebar:open');
}

function ouvrir_side_bar_top(){
	$(".sidebar.top")[0].style.display = "block"
	$(".sidebar.top")[0].isOpen = true;
	$('.sidebar.top').trigger('sidebar:open');

}

function fermer_side_bar(){
	/*gauche*/
	$(".sidebar.left")[0].style.display = "none"
	$(".sidebar.left")[0].isOpen = false;
	$('.sidebar.left').trigger('sidebar:close');

	/*droite*/	
	$(".sidebar.top")[0].style.display = "none"
	$(".sidebar.top")[0].isOpen = false;
	$('.sidebar.top').trigger('sidebar:close');
}

function fermer_si_non_recherche(e){
	if(e.target.id !== "rechercher") fermer_side_bar()
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
	


	//si je suis admin avec des droits
	var mes_droits = JSON.parse(recuperer('mes_donnees'))['Droits_modifs'];
	//console.log("mes_droits: " + mes_droits);
	

	if(recuperer("mon_type").includes("Admin") && mes_droits === "oui"){
		$("#ask_edt").remove()
		$("#mini_popup").append('<div id="ask_edt">'+bouton_demander()+'</div></div>')
	}
	
		
	


}

function bouton_demander(){
	return (data_etablissement['edt_envoi_mail']) ? edt_deja_envoye() : '<button id="bouton_ask_edt" onclick="demander_edt()" class="demander_edt">Demander l\'édition des emplois du temps</button>'
}

async function demander_edt(){

	//si edt_envoi_mail = faux
	if(!data_etablissement['edt_envoi_mail']){

		//lister les url des edts 
		var liste_initiale = await rechercher_tout("Classes")
		liste_classes = liste_initiale.map(e => e["cycle"] + " " + e["Classe"])
		liste_id_calendar = liste_initiale.map(e => e["id_googlecalendar"])

		//les envoyer au script google pour l'envoi de mail
		var url = await chercher_lien_script(1)
		url += "?ask_edt=true"  
		url += "&nom_prenom_responsable="  + data_etablissement["identite_responsable"]
		url += "&liste_classes="  + JSON.stringify(liste_classes)
		url += "&liste_id_calendar="  + JSON.stringify(liste_id_calendar)
		url += "&contact_etablissement="  + data_etablissement["contact_etablissement"]
		url += "&nom_etablissement="  + data_etablissement["nom_etablissement"]


		//console.log(url)
		envoyer_mail = get_resultat_asynchrone(url)

		//mettre edt_envoi_mail = vrai
		data_etablissement['edt_envoi_mail'] = true

		//enlever le bouton ask_edt en alertant que tout est bon
		$("#ask_edt")[0].innerHTML = edt_deja_envoye()
		


	}else{
		$("#ask_edt")[0].innerHTML = edt_deja_envoye()
	}
}

function edt_deja_envoye(){
	return "<vert>✔La liste des liens pour éditer les emplois du temps a été envoyée par mail (<b>" + data_etablissement["contact_etablissement"] +  "</b>).</vert><br><br><i>Si vous n'avez plus accès à cette adresse mail, merci de mettre à jour l'adresse mail de votre établissement dans <b>Paramètres > Infos établissement > Contact de l'Administration</b>, puis re-demandez à nouveau ici votre liste.</i>"
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
	var sections_a_ajouter = section_journee("Fichiers","Les fichiers affichés ont pour <b>date d'effet</b> (donc de consultation) la date de la journée choisie.") // A COMMENTER
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
	return '<div id="section_'+nom_section+'" class="titre_section_journee bloc_topic"><span style="font-size: x-large;padding: 5px;">'+nom_section+'<div class="subtitle">'+remarque_section+'</div></span></div>'
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

	if(heure_reference){
		heure_reference = ' à ' +heure_reference
	}else{
		heure_reference = ""
	}

	//si prof/admin -> pourcentage de correction
	//sinon -> coche
	if(recuperer("mon_type").includes('Eleves')){
		coche_traitement = dejà_traité ? '✅<i style="color: green;">Rendu</i>' : est_devoir ? '❌<i><rouge>Pas encore rendu</rouge></i>': ""
	}else{
		coche_traitement = dejà_traité ? dejà_traité : ""
	}


	affichage_date = date_heure_ensemble ? afficher_date(date_reference) : afficher_date(date_reference,true) + heure_reference
	return '<div class="contenu_section_journee"><b class="nom_matiere_journee sekooly-mode">'+nom_matiere+"</b> "+nom_fichier+'<i class="date_fin"> '+affichage_date+' </i><span class="mini-image deja_traite">'+coche_traitement+'</span> <img id="'+champ_id+'" src="'+ prefixe_image + '/img_previz.png" alt="voir" onclick="clic_de_notif(\''+type_notif+'\',\''+champ_id+'\',\''+id_classe_matiere+'\');" class="mini-image"></div>'
}


function aucun_element_section(){
	return '<div class="alerte_section_journee">Aucun élément n\'a été trouvé pour la date choisie.</div>'
}



function mettre_les_soons(){
	if($("#soon").length === 0){

		$("[soon]").append(soon())

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


	var mon_type = recuperer('mon_type').split("_")[0]

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
	return '<span style="padding-left: 10px;"><img alt="actualiser" src="'+ prefixe_image + '/img_actualiser.png" onclick="'+nom_fonction_actualisation+'" style="width: '+taille_bouton_px+'px; cursor: pointer;"></span>'
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
		url += '&categorie_fichier=in.(Devoirs,Examens,Quiz)'
		url += '&id_dossier=in.' + les_id_dossier_classe
	
	//admin
	}else{
		url = racine_data + 'Fichiers?' +apikey 
		url += '&categorie_fichier=in.(Devoirs,Examens,Quiz)'
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
		return les_id_dossier_classe.includes(valeur['id_dossier_sujetdevoir']) && valeur['date_publication'] !== null
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
	var titre_mini_popup = ""
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
	
	if(!titre_mini_popup) titre_mini_popup = "Devoirs à faire"

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
		nom_matiere = la_matiere ? la_matiere['Classe'] + " " + la_matiere['Matiere'] : "Matière inconnue"
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
		nom_matiere = la_matiere ? la_matiere['Classe'] + " " + la_matiere['Matiere'] : "Matière inconnue"
		elements_html += creer_element_journee(nom_matiere,le_com['Votre_commentaire'],le_com['Horodateur'],le_com['Horodateur'],le_com['Id_topic'],id_classe_matiere,"discussion",false,false, true)	
	})


	creer_mini_popup("Discussions et commentaires",elements_html,"    OK    ","$('#mini_popup').remove();",null,null,null,null,25)
	//ordonner_elements(".contenu_section_journee",'innerText')
	$('#mini_popup')[0].style.overflow = "auto"

}







async function tdb_recuperer_fichiers_a_consulter(ne_pas_arreter_chargement,aujourdhui){
	document.getElementById('tdb-4').innerHTML = ""

	mes_fichiers = await recuperer_mes_fichiers(true)
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


function recuperer_mes_fichiers_old(forcing){


	//si on force OU on n'a pas encore les fichiers
	if(forcing || !recuperer("mes_fichiers")){


		var mes_matieres = JSON.parse(recuperer('mes_matieres'));
		var les_id_dossier_classe = '("'+mes_matieres.map(e => e['ID_URL']).join('","') + '")'

		//prof ou eleve
		if(!recuperer('mon_type').includes('Admin')){
			url = racine_data + 'Fichiers_tout?' +apikey 
			url += '&id_dossier=in.' + les_id_dossier_classe
		
		//admin
		}else{
			url = racine_data + 'Fichiers_tout?' +apikey 
		}

		url += '&order=date_effet.asc,heure_effet.asc,id_dossier.asc'

		//console.log(les_id_dossier_classe)
		//console.log(url)
		mes_fichiers = get_resultat(url)
		mes_fichiers = mes_fichiers.filter(e => les_id_dossier_classe.includes(e["id_dossier"]))

		
		return mes_fichiers

	}else{
		return JSON.parse(recuperer("mes_fichiers"))
	}

}



async function recuperer_mes_fichiers(forcing){


	//si on force OU on n'a pas encore les fichiers
	if(forcing || !recuperer("mes_fichiers")){


		var mes_matieres = JSON.parse(recuperer('mes_matieres'));
		var les_id_dossier_classe = "'" +mes_matieres.map(e => e['ID_URL']).join(',') + "'"

		//alert(les_id_dossier_classe)

		nom_table = 'Fichiers_tout'
		url = nom_table

		//prof ou eleve (PAS pour admin car trop de matieres)
		if(!recuperer('mon_type').includes('Admin')){
			url += '  WHERE ' + les_id_dossier_classe + ' ~ id_dossier'
		}

		//console.log(les_id_dossier_classe)
		//console.log(url)
		return rechercher_tout(url,true).then(function(mes_fichiers){
			//console.log(mes_fichiers)
			//refaire le filtre en local pour ADMIN
			mes_fichiers = mes_fichiers.filter(e => les_id_dossier_classe.includes(e["id_dossier"]))

			
			return mes_fichiers
		})
		


	}else{
		return JSON.parse(recuperer("mes_fichiers"))
	}

}




function details_tdb_4(ceci){

	var elements_html = ""
	var mes_matieres = JSON.parse(recuperer("mes_matieres"))
	var mon_type = recuperer('mon_type').split("_")[0]


	//mes fichiers en ligne (à consulter si eleve, à évaluer si prof/admin)
	mes_fichiers.forEach(function(le_fichier,index){


		id_classe_matiere = le_fichier["id_dossier"]
		//console.log({id_classe_matiere})
		if( mes_matieres.filter(e => e['ID_URL'] === id_classe_matiere).length > 0){

			nom_classe = mon_type === "Eleves" ? "" : mes_matieres.filter(e => e['ID_URL'] === id_classe_matiere)[0]['Classe'] + " "
			nom_matiere = mes_matieres.filter(e => e['ID_URL'] === id_classe_matiere)[0]['Matiere'] +" ("+le_fichier['categorie_fichier']+")"

			elements_html += creer_element_journee(nom_classe + nom_matiere,le_fichier['nom_fichier'],le_fichier['date_effet'],le_fichier['heure_effet'],le_fichier["id_fichier"],id_classe_matiere,"fichier",false,false,false)

		}
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
			numeros_pages_str = prompt("Choisissez les numéros de pages (séparés par une virgule):","1,2,3")

			if(!numeros_pages_str){
				e.target.value = "--"
				element_DOM("file").value = "";
				element_DOM("file").style.display = "none"
				return true
			}

			numeros_pages = numeros_pages_str.split(',').map(e => Number(e.trim()))
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
							var boutons_valider_ou_annuler = '<div id="choix_pages_pdf" style="text-align: center;" class=""><rouge>Voici les pages que vous avez choisies. Voulez-vous valider ou annuler?</rouge><button class="mon_bouton sekooly-mode-background" onclick="annuler_mon_choix()">Annuler</button><button class="mon_bouton sekooly-mode-background" onclick="choisir_ces_pages(\''+numeros_pages.toString()+'\')">Valider</button></div>'
							$("#fenetre").append(boutons_valider_ou_annuler)
							$("#fenetre")[0].style.zIndex = 5;

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
const addBtn = $("#a2hs")[0]


/*********************** PWA ***************************/
window.addEventListener('beforeinstallprompt', (e) => {
	
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();


	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	addBtn.style.display = 'block';
	$("#mynavbar")[0].style.top = "20px"
	

	//décaler l'alerte
	$('.alerte#alerte')[0].style.top = "95px"
	if($('#alerte_vide')[0]) $('#alerte_vide')[0].style.top = "100px"

});




function ajouter_a_laccueil(){
	
	// hide our user interface that shows our A2HS button
	$("#a2hs")[0].style.display = 'none';
	$("#mynavbar")[0].style.top = ""

	//décaler l'alerte
	$('.alerte#alerte')[0].style.top = ""

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
}







/******************** SERVICE WORKER *******************/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../sw.js').then(function(registration) {
      // Registration was successful
      //console.log('ServiceWorker registration successful with scope: ', registration.scope);
      
      navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) { cache_all_heads_except_utile() });
      setTimeout(cache_all_heads_except_utile,5000)


    }, function(err) {
      // registration failed :(
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}


function cache_all_heads_except_utile(){
	cache_this("head > link","href", [])
	cache_this("head > script","src", ["scripts/utile.min.js", "scripts/utile.js"])
	cache_this("img","src", [])
}

function cache_this(selector, attributeName, exception_values){

	//console.log('*************'+selector+'***************')
	$.each($(selector), (key,valeur) => {   

		var url = valeur[attributeName]
		if(url){
			var a_ne_pas_mettre_en_cache = exception_values ? exception_values.filter(e => url.includes(e)).length > 0 : false
			if(a_ne_pas_mettre_en_cache){

				//console.log("EXCEPTION:", url)
				
			}else{
				//console.log({a_ajouter: url})	
				manip_cache("add", url)
			}
		}



	})
}


function manip_cache(manip, url){
	sendMessage({
      command: manip,
      url: url
    })
}




function sendMessage(message) {
  // This wraps the message posting/response in a promise, which will resolve if the response doesn't
  // contain an error, and reject with the error if it does. If you'd prefer, it's possible to call
  // controller.postMessage() and set up the onmessage handler independently of a promise, but this is
  // a convenient wrapper.
  return new Promise(function(resolve, reject) {
    var messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = function(event) {
      if (event.data.error) {
        reject(event.data.error);
      } else {
        resolve(event.data);
      }
    };

    // This sends the message data as well as transferring messageChannel.port2 to the service worker.
    // The service worker can then use the transferred port to reply via postMessage(), which
    // will in turn trigger the onmessage handler on messageChannel.port1.
    // See https://html.spec.whatwg.org/multipage/workers.html#dom-worker-postmessage
    if(navigator.serviceWorker.controller){
    	navigator.serviceWorker.controller.postMessage(message,
      [messageChannel.port2]);
    }
    
  });
}





/******************** PHOTO DE PROFIL *************************/
function lien_pp(id_pp){
	//return id_pp ? "https://drive.google.com/uc?export=download&id=" + id_pp : prefixe_image + "/default-user.png"
	return id_pp ?  lien_previz_image(id_pp) : prefixe_image + "/default-user.png"
}










/******************** MESSAGES PERSOS ******************************/
function recuperer_msgs(forcing, sans_fenetre){
	//en_cours()

	chargement(true);
	

	if(!sans_fenetre) {
		vider_fenetre("");
		element_DOM('fenetre').innerHTML += html_boutons_fenetre("recuperer_msgs(true)","ajouter_un_tout_nouveau_msg()","Pour répondre, cliquez sur le message en question.<br>" +alerte_conv());
	}else{

	}


    if (forcing || recuperer("mes_msgs") === null || recuperer("mes_msgs") === ''){
		
    	//alert("on récup depuis le serveur")

		//chercher tous les messages envoyés et reçus
    	nom_table = "Conversations"
    	nom_champ_reference = "id_conv"
    	valeur_champ_reference = "*" + ajouter_motif(recuperer("identifiant_courant")) + "*"
    	nom_champ_a_chercher = ""

    	/*
    	console.log(nom_table)
    	console.log(nom_champ_reference)
    	console.log(valeur_champ_reference)
    	console.log(nom_champ_a_chercher)
    	*/
    	
    	//console.log("Récupérons d'abord...")
    	return rechercher_contenant_motif(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, "Horodateur", "desc").then(mes_msgs => {

    		//console.log(mes_msgs)
    		//décroissant ici
    		//mes_msgs = mes_msgs.sort((a,b) => a.Horodateur < b.Horodateur)

    		stocker("mes_msgs",JSON.stringify(mes_msgs));
    		chargement(false);
    		if(!sans_fenetre){
    			return traitement_msgs();	
    		}else{
    			return mes_msgs
    		}
    		

		}).catch(e => {
			console.error(e)
			alert(e)
			alert("Impossible de récupérer vos messages. Vérifiez que vous êtes toujours connecté à internet, ou réessayer plus tard.")
			chargement(false);
			return false
		})
	


	}else{
		//console.log("traitement direct")
		//on traite direct les données
		chargement(false);		
		if(!sans_fenetre){
			return traitement_msgs();	
		}else{
			return JSON.parse(recuperer("mes_msgs"))
		}	
	}









}

function alerte_conv(){
	//return "Les messages que vous échangez avec d\'autres utilisateurs sont susceptibles d\'être vus par les membres de l\'Administration de votre établissement."
	return ""
}

function traitement_msgs(){
	
	afficher_fenetre(true);

	if (recuperer("mes_msgs").length === 0 || recuperer("mes_msgs") === "[]") {
		commentaire = '<div id="vide" style="text-align: center;color: grey;margin: 10%;"> <i id="vide"> Vous n\'avez pas encore de messages privés.<br><br></i> </div>';

		//ajouter la fenêtre au DOM
		var mon_commentaire = document.createElement('div');
		mon_commentaire.innerHTML = commentaire;
		while(mon_commentaire.firstChild) {
		    element_DOM('fenetre').appendChild(mon_commentaire.firstChild);
		}

		return commentaire

	}else{

		var liste_des_msgs = JSON.parse(recuperer("mes_msgs"));
	
		//pour chaque topic, l'afficher en mode bg dans la fenetre
		if(!element_DOM('div_liste_msgs')){
			var ma_liste = document.createElement('div');
			ma_liste.style.overflowX = "hidden";
			ma_liste.style.overflowY = "auto";
			ma_liste.id = "div_liste_msgs";
			ma_liste.style.height = '90%';
			element_DOM('fenetre').appendChild(ma_liste);
		}else{
			//si la liste existe déjà
			var ma_liste = element_DOM('div_liste_msgs');
		}

		//trier du plus récent au plus ancien (Horodateur)
		//console.log("AVANT")
		//console.log(liste_des_msgs)
		
		liste_des_msgs.sort(function tri_ordre_chrono_decroissant(a, b) {
			return convertir_en_date(b.Horodateur) - convertir_en_date(a.Horodateur)
		});

		//console.log("APRES")
		//console.log(liste_des_msgs)
		
		liste_des_msgs.forEach(function (valeur){
			
			ajouter_msg(liste_des_msgs,ma_liste,valeur)


		});
		
		return liste_des_msgs
	}
}



function ajouter_msg(liste_des_msgs,ma_liste,valeur){

	var id_topic = valeur['id_conv'] ;
			//console.log("on va ajouter " + id_topic);




	//nb de msgs non lus
	//console.log("pour " +valeur['id_msg'])
	var nb_non_lus = liste_des_msgs.filter(e => e['id_conv'] === valeur['id_conv'] && !liste_notifs_lues.includes("," + e["id_msg"] +",")).length
	//console.log("	nb_non_lus:" + nb_non_lus)


	//rassembler les msgs de la meme conversation
	//on zappe si c'est déjà présent
	//console.log("[id='"+id_topic+"']")
	if($("[id='"+id_topic+"']").length > 0) return true

	var titre = recuperer_destinataire(valeur['id_conv']);
	element_contenu = document.createElement('div')
	element_contenu.innerHTML = valeur['Message'];
	var contenu = element_contenu.innerText
	
	//on récupère la date du dernier message
	var horodateur_max =  moment.max( liste_des_msgs.filter(e => e['id_conv'] === valeur['id_conv']).map(e => e.Horodateur).map(e => moment(e)) ).format("DD/MM/YYY HH:mm")
	//console.log(horodateur_max)
	var date = afficher_date(horodateur_max);
	var nb_coms = liste_des_msgs.filter(e => e['id_conv'] === valeur['id_conv']).length
	if(nb_coms === undefined) nb_coms = 0;


	var icone_poubelle = "" //'<span id="bye' + id_topic + '"><img alt="supprimer" class="byebye" onclick="supprimer_conversation(this)" src="'+ prefixe_image + '/img_trash.png" style="width: 20px;position: relative;float: right;" id="bye' + id_topic + '"></span>';

	//si élève/prof et le topic n'est pas le sien: pas d'icone poubelle
	if(!recuperer('mon_type').includes("Administration") && valeur['Identifiant'] !== recuperer('identifiant_courant').trim()) icone_poubelle = "";

	//console.log("l'icone poubelle = " + icone_poubelle + "\n")

	var img_pp = ma_photo(titre.toLowerCase(), true) //pas de modifs de la pp

	var span_nb_non_lus = nb_non_lus > 0 ? '<div class="msg_non_lu">'+nb_non_lus+'</div>' : ""
	var dans_fenetre_str = '<ul class="bloc_msg" onclick="clic_de_msg(this.id)" id="' + id_topic + '"> '+ img_pp + '<span id="details_conv">' + icone_poubelle + ' <p id="' + id_topic + '" class="important-p"> <b class="contenu_question sekooly-mode" id="' + id_topic + '"> '  + titre +'  </b> <p id="' + id_topic + '" class="contenu_question"> ' + contenu + '</p><i class="petite_ecriture"> <h id="' + id_topic + '"><u id="' + id_topic + '"> Nombre de messages</u>: <u class="nb_com_actuel" id="' + id_topic + '">' + nb_coms + '</u> </h> <h id="' + id_topic + '">  &emsp; <u id="' + id_topic + '"> Dernier message le</u>: ' + date + ' </h><h id="' + id_topic + '"></h></i></span> '+span_nb_non_lus+' </ul>';
	
	//console.log("dans_fenetre: " + dans_fenetre_str)
	



	//ajouter la fenetre au DOM	
	var un_msg = document.createElement('div');
	un_msg.innerHTML += dans_fenetre_str;
	while(un_msg.firstChild) ma_liste.appendChild(un_msg.firstChild);


}




//récupérer mes messages (get)
function clic_de_msg(id_conv){
	//console.log(id_conv)
	chargement(true)
	stocker("msg_chargé",id_conv)

	//on récupère tous les msgs de la conversation
	//console.log('on recupere les msgs de la conv n° ' + id_conv + '...');
	recuperer_tous_les_msgs(id_conv, false);
	chargement(false)
}

function recuperer_tous_les_msgs(id_conv, forcing){

	//console.log("on cherche "  + id_conv)
	var mes_msgs = JSON.parse(recuperer("mes_msgs"))

	//ordre croissant ici
	//mes_msgs = mes_msgs.sort((a,b) => a.Horodateur > b.Horodateur)
	mes_msgs = mes_msgs.sort(function tri_ordre_chrono_decroissant(a, b) {
		return convertir_en_date(a.Horodateur) - convertir_en_date(b.Horodateur)
	});


	//console.log("récupérer toute cette conv: " + id_conv)
	var nom_destinataire = mes_msgs.find(e => e['id_conv'].includes(id_conv))['id_conv']
	nom_destinataire = recuperer_destinataire(nom_destinataire)
	//console.log(nom_destinataire)


	try{
		var src_pp = $("[id='pp_" + nom_destinataire.toLowerCase() +"']")[0].src	
	}catch(e){
		var src_pp = $("#entete_convo > .retour_msgs")[1].src
	}
	

	var entete_convo = '<span id="entete_convo"><img id="<<" class="retour_msgs" src="'+ prefixe_image + '/img_retour.png" onclick="recuperer_msgs(true)"> <img class="retour_msgs" src="'+src_pp+'"><div id="Destinataire" class="titre_du_poste sekooly-mode">'+nom_destinataire+'</div></span>';
	//console.log(entete_convo)

	$("#div_liste_msgs").remove()
	vider_fenetre(entete_convo)
	


	var emplacement_des_msgs = '<div id="emplacement_des_msgs" class="emplacement_des_msgs"></div>';

	

	//tout ajouter
	var les_msgs = document.createElement('div');
	les_msgs.innerHTML = emplacement_des_msgs ;

	element_DOM('fenetre').appendChild(les_msgs.firstChild);

	//ajouter chaque message
	mes_msgs = mes_msgs.filter(e => e['id_conv'] === id_conv)

	//console.log(mes_msgs)
	var une_conversation = "<div id='conversation' class='conversation'>"



	//console.log(liste_notifs_lues)
	mes_msgs.forEach(function(le_msg){
		//console.log(le_msg)
		msg_html = afficher_msg_conversation(le_msg) 
		une_conversation += msg_html
		
		//ajouter le message dans la liste des notifs consultées	
		//si c'est pas déjà consulté
		//console.log("on vient de lire " + le_msg['id_msg'])
		jai_lu(le_msg['id_msg'],false)	
		
	})
	apres_maj_lecture_notifs()
	//console.log(liste_notifs_lues)



	//actualiser la bulle
	afficher_bulle_notifs()

	//une_conversation += "</div>"
	//console.log("\n\n\n" + une_conversation)
	$("#emplacement_des_msgs").append(une_conversation)	

	//scroller tout en bas
	le_dernier_msg = mes_msgs[mes_msgs.length - 1]
	element_DOM(le_dernier_msg['id_msg']).scrollIntoView()

	//ajouter la nouvelle zone d'envoi
	$("#fenetre").append(zone_envoi(id_conv))

	//focus sur la zone de texte
	//$("#Message").focus()


}




function zone_envoi(id_conv){
	return '<div id="nouveau_msg_convo"><textarea id="Message" name="Message" placeholder="Ecrivez votre message..."></textarea><button class="bouton_envoi sekooly-mode-background" onclick="envoyer_mon_message(\''+id_conv+'\')"><img alt="Envoyer" class="pp" src="'+ prefixe_image + '/img_send.png" style="width: 30px;height: 30px;filter: invert(1);"></button></div>'
}

function afficher_msg_conversation(le_msg){

	var type_msg = (le_msg['Expediteur'] === recuperer('identifiant_courant') ?  "msg_envoye" : "msg_recu")
	var la_className = "un_msg " + type_msg
	var darkmode = (mode_nuit_oui_final === "oui" ? "darkmode-"+type_msg : "")
	la_className = la_className + " " + darkmode
	//console.log({la_className})
	var Expediteur = le_msg['Expediteur'] === recuperer('identifiant_courant') ? "MOI-MÊME" :  le_msg['Expediteur'].toUpperCase()
	return '<div class="'+la_className+'" id="'+le_msg['id_msg']+'"><div class="auteur_du_poste sekooly-mode">'+Expediteur+'</div><h id="contenu_poste"><p data-placeholder="Votre commentaire...">'+le_msg['Message']+'</p></h><h class="date_fin">'+ afficher_date(le_msg['Horodateur']) +'</h></div>'
}


async function liste_de_mes_destinataires(en_ligne){
	var mon_type = recuperer('mon_type').split("_")[0]
	var liste_eleves = await recuperer_eleves(true)
	var liste_profs = await recuperer_profs(true)
	var liste_admins = await recuperer_admin(true)
	var mes_destinataires = []

	mes_destinataires.push(liste_eleves)
	mes_destinataires.push(liste_profs)
	mes_destinataires.push(liste_admins)


	mes_destinataires = [].concat.apply([], mes_destinataires)
	if(en_ligne){
		//console.log("avec leur statut EN LIGNE")
		mes_destinataires = mes_destinataires.filter(e => e.statut.includes("En ligne"))
		//console.log(mes_destinataires)
	} 


	mes_destinataires = mes_destinataires.map(function(e){
		le_type = e['type'].includes("Admin") ? e['Role'] : e['type'].substring(0, e['type'].length - 1)
		return e['Identifiant'].toUpperCase() + " (" + le_type + ")"
	})


	stocker("mes_destinataires",mes_destinataires)


	return mes_destinataires


}




//envoyer un message (post)
function ajouter_un_tout_nouveau_msg(){

	//récupérer la liste des destinataires
	liste_de_mes_destinataires()

	var probleme = false;
	if (probleme){
		alert("Impossible d'envoyer un nouveau message pour le moment.");
		return -1;
	}


	if(impossible_de_cliquer()) return -1;


	vider_fenetre("Nouveau message");
	element_DOM('maquestion').src="";

	var nouveau_message = '<div id="mon_formulaire" autocomplete="off" class="edition"><label id="label" for="Destinataire">Destinataire: </label><div id="div_autocompletion" class="autocompletion"> <input placeholder="Tapez pour chercher le destinataire..." autocomplete="on" onkeyup="validation_par_touche(event)" oninput="faire_autocompletion_input(this,\'Destinataire\')" type="text" name="Destinataire" id="Destinataire" maxlength="50" style="width: 100%;"></div><br><br><label id="label" for="Message">Votre message: </label><textarea id="Message" name="Message" placeholder="Saisissez votre message..." maxlength="1700" style="width: 100%;height: 70%;resize: none;font-size: 13px;"></textarea><div id="nb_max_div" style="margin-left: 90%;margin-top: 0%;font-size: 10px; display:none;"> <font id="nb_max"> 0 / 1700</font> </div><div id="mes_boutons" style="text-align: center;padding: 1%;display: block ruby;"><button class="bouton_sekooly sekooly-mode-background" type="button" id="Annuler" onclick="recuperer_msgs(false)"> Annuler </button><button class="bouton_sekooly sekooly-mode-background" type="button" id="envoi" onclick="envoyer_mon_message()"> Envoyer le message </button></div><div id="msg_erreur" style="text-align: center;padding: 1%;color: green;"> </div></div>';

	//ajouter la fenettre de nouveau message au DOM
	var mon_message = document.createElement('span');
	mon_message.innerHTML = nouveau_message;

	element_DOM('fenetre').appendChild(mon_message);


	$('#div_autocompletion').append('<div id="liste_destinataires"></div>')

	//rendre_riche("Message")

	//focus direct sur le titre
	element_DOM('Destinataire').focus();

}

function validation_par_touche(e){
	//console.log(e)
	if(e.keyCode === 13) choisir("Destinataire",$("#liste_destinataires")[0].firstChild)
}

function faire_autocompletion_input(ceci,nom_champ){

	

	if(!recuperer("mes_destinataires")) liste_de_mes_destinataires()

	var mes_destinataires = recuperer("mes_destinataires").split(",")
	var valeur_du_champ = $("[id='"+nom_champ+"']")[0].value.toUpperCase().replaceAll(" ","")

	//console.log(mes_destinataires)
	//console.log("\n\n\n\n")

	liste_destinataires.innerHTML = ""

	if(valeur_du_champ){
		mes_destinataires = mes_destinataires.filter(function(e){
			//console.log(valeur_du_champ + " VS " + e)
			return e.toUpperCase().replaceAll(" ","").includes(valeur_du_champ)
		})
		
		//rajouter chaque destinataire
		mes_destinataires.forEach(function(un_destinataire){
			$("#liste_destinataires").append('<div onclick="choisir(\''+nom_champ+'\',this)" value="'+un_destinataire+'">'+un_destinataire+'</div>')
		})
	}


}


function choisir(nom_champ,ceci){
	//console.log(ceci)
	//console.log(ceci.getAttribute('value'))
	$("[id='"+nom_champ+"']")[0].value = ceci.getAttribute('value')

	liste_destinataires.innerHTML = ""

	destinataire = ceci.getAttribute('value').toLowerCase().split(" (")[0]
	id_conv1 = ajouter_motif(destinataire) + ajouter_motif(recuperer("identifiant_courant")) 
	id_conv2 = ajouter_motif(recuperer("identifiant_courant")) + ajouter_motif(destinataire) 

	//console.log(id_conv1)
	//console.log(id_conv2)


	//si on a déjà une conv -> on va la bas
	mes_msgs = JSON.parse(recuperer("mes_msgs"))
	conv_initiale = mes_msgs.find(e => e['id_conv'] === id_conv1 ||  e['id_conv'] === id_conv2 )
	if (conv_initiale){
		id_conv = conv_initiale['id_conv']
		charger_la_conv(id_conv)
	}
}

function charger_la_conv(id_conv){
	//console.log("on veut cette conv: " + id_conv)
	recuperer_msgs(true).then(e => $("ul[id='"+id_conv+"']").click())	
}


function le_destinataire(){
	return $("#Destinataire")[0].value || $("#Destinataire")[0].innerText
}

async function envoyer_mon_message(id_conv){

	chargement(true)

	//mode : deja_conv si id_conv, nouvelle_conv sinon
	var mode_deja_conv = id_conv ? true : false

	//vérifier que le destinataire existe
	if(!recuperer("mes_destinataires")) await liste_de_mes_destinataires()
	mes_destinataires =  recuperer("mes_destinataires").split(",")
	var destinataire = le_destinataire()
	//console.log(destinataire)
	if(!destinataire || !mes_destinataires.find(e => e.includes(destinataire)) ){
		alert("Votre destinataire n'existe pas, merci de vérifier votre saisie.\nIl est possible que la personne ne soit plus inscrite sur la plateforme.")
		chargement(false)
		return false
	}

	//vérifier que le message est clean
	var phrase = $("#Message")[0].value.replaceAll("\n","<br>").trim()
	if(phrase.length === 0){
		alert("Merci de saisir un message avant de l'envoyer.")
		chargement(false)
		return false		
	}
	var le_mot_interdit = chercher_le_mot_interdit(phrase)
	if(le_mot_interdit !== ""){
		alert("Vous n'avez pas le droit d'utiliser le terme '"+le_mot_interdit+"' dans le cadre des cours à "+nom_etablissement+" sur SEKOOLY.")
		return -1;
	}

	destinataire = destinataire.split(" (")[0].toLowerCase()
	id_msg = creer_uuid()

	var id_conv_vrai = id_conv ? id_conv : create_id_conv(destinataire, false)
	var nouvelle_conversation = {
		"Horodateur" : maintenant(),
		"Expediteur" : recuperer("identifiant_courant"),
		"Destinataire" : destinataire,
		"Message" : phrase,
		"id_msg" : id_msg,
		"id_conv" : id_conv_vrai
	}

	//envoyer
	ajouter_un_element("Conversations",nouvelle_conversation).then(function(e){

		if(mode_deja_conv){			
			$("#conversation").append(afficher_msg_conversation(nouvelle_conversation))
			
			//scroll au dernier message
			//dans #conversation
			element_DOM(id_msg).scrollIntoView()

			//pas de texte
			$("#Message")[0].value = ""

			//focus
			//$("#Message").focus()

			//j'ai lu
			jai_lu(id_msg, true)


		}else{
			charger_la_conv(id_conv_vrai)
		}
		
		chargement(false)
	})


}


//supprimer un message (delete) -> non pour le moment sauf admin
function supprimer_conversation(ceci){

	//e.stopPropagation();
	id_convo = ceci.id.split("bye")[1]
	console.log(id_convo)

}


























/*************************************** PROGRAMME SCOLAIRE ********************************************/
function recuperer_programme(){
	vider_fenetre("Programme scolaire")

	

	//lister mes matieres
	//nom_classe - nom_matiere
	var mes_matieres = JSON.parse(recuperer("mes_matieres"))
	var id_matieres = mes_matieres.map(e => e['ID_URL'])
	mes_matieres = mes_matieres.map(e => e['Classe'] + " " + e['Matiere'] )

	//console.log(mes_matieres)
	//console.log(id_matieres)

	var liste_matieres = ''
	for(numero_matiere = 0 ; numero_matiere < mes_matieres.length ; numero_matiere++){
		liste_matieres += '<option value="'+id_matieres[numero_matiere]+'">'+mes_matieres[numero_matiere]+'</option>'
	}


	var menu_programme = '<div id="menu_programme" style="text-align: center;" class="menu_haut">Matière: <select id="ID_URL">'+liste_matieres+'</select> </div>'
	$("#menu_programme").remove();



	$("#fenetre").append(menu_programme);

	// à l'actualisation de la matiere
	$("#ID_URL").on('change', maj_matiere)

	//par défaut: première matière	
	maj_matiere()
	
	

	afficher_fenetre(true)
}

function maj_matiere(){

	chargement(true)

	var je_suis_eleve = recuperer("mon_type") === "Eleves"


	//console.log($("#ID_URL")[0].value)
	var ID_URL = $("#ID_URL")[0].value
	le_programme = donnees_programme(ID_URL)

	//effacer le programme précédent
	$("#programme_scolaire").remove()
	$(".conteneur_bouton_ajout_chapitre").remove()

	//ajouter le nouveau programme
	var programme_scolaire = '<div id="programme_scolaire" class="programme_scolaire"></div>'
	$("#fenetre").append(programme_scolaire)



	//si non eleve -> ajout/modifier/supprimer possible
	if(!je_suis_eleve){			
		boutons_update_programme =  liste_statuts(je_suis_eleve) + bouton_renommer_chapitre() +  bouton_supprimer_chapitre()
		bouton_ajouter_nouveau_chapitre = '<img class="conteneur_bouton_ajout_chapitre image-en-haut-fenetre" onclick="ajouter_un_chapitre()" src="'+prefixe_image+'/img_ajout.png">'
	}else{
		boutons_update_programme = ""
		bouton_ajouter_nouveau_chapitre = ""
	}



	//pas de programme
	if(le_programme.length === 0){

		$("#programme_scolaire").append('<div class="alerte_section_journee">Aucun chapitre n\'a été trouvé pour cette matière.</div>')

	//avec programme
	}else{


		//pour chaque chapitre
		le_programme.forEach(function(un_chapitre){
			//afficher l'élément (+ boutons CUD)

			//mettre la bonne valeur de l'état pour les élèves
			if(je_suis_eleve) boutons_update_programme = liste_statuts(true, un_chapitre['etat'])

			date_fin_chapitre = un_chapitre['date_fin'] ? '<div class="date_fin">le '+afficher_date(un_chapitre['date_fin'])+'</div>' : ''


			//boutons_update_programme = boutons_update_programme.replaceAll("#valeur_de_letat#",un_chapitre['etat'])
			$("#programme_scolaire").append('<div class="un_chapitre" id="'+un_chapitre['id_chapitre']+'"><!--<span class="titre_chapitre sekooly-mode position_chapitre " id="position_chapitre">'+un_chapitre["position_chapitre"]+') </span>--><span class="titre_chapitre sekooly-mode" id="'+un_chapitre['id_chapitre']+'">'+un_chapitre['intitule_chapitre'] +'</span>'+'<br>'+ boutons_update_programme + date_fin_chapitre + "</div>" )			
			
			//assigner la valeur par du select (si NON élève)
			if(!je_suis_eleve){				
				$("[id='"+un_chapitre['id_chapitre']+"'] > select").val(un_chapitre['etat'])
				actualiser_couleurs($("[id='"+un_chapitre['id_chapitre']+"'] > select")[0])
			}

		})


		//si NON eleve
		if(!je_suis_eleve){

			$("#programme_scolaire").sortable({

			    update: function mettre_a_jour_position() {

			    	var liste_des_chapitres = []

			    	//récupérer tous les chapitres de la matière
			    	//mettre à jour toutes les positions
			    	$(".un_chapitre.ui-sortable-handle").each(function(position_finale,element){
						/*
						console.log(position_finale+1);
						console.log(element.children[0].innerText)
						*/

						nouvelle_position_chapitre_drag = position_finale+1
						modifier_chapitre(element.id, "position_chapitre", nouvelle_position_chapitre_drag, false)
						

					})

					


			    }
			})

		}

		
	}
	

	if(bouton_ajouter_nouveau_chapitre){
		$("#menu_programme").append(bouton_ajouter_nouveau_chapitre)
		//$("#fenetre")[0].style.textAlign = "center"
	}


	chargement(false)
	return true
		
}

function nouvelle_position_chapitre(){
	var liste_positions = $(".titre_chapitre.position_chapitre").text().replaceAll(")","").split(" ").map(e => Number(e))
	return Math.max.apply(Math, liste_positions) +1
}

function bouton_renommer_chapitre(){
	return '<img onclick="renommer_chapitre(this)" src="'+ prefixe_image + '/img_edit.png" alt="Renommer" class="editer">'
}

function bouton_supprimer_chapitre(){
	return '<img onclick="supprimer_ce_chapitre(this)" src="'+ prefixe_image + '/img_trash.png" alt="Supprimer" class="editer">'
}

function liste_statuts(je_suis_eleve, etat_si_eleve){

	if(!je_suis_eleve){
		resultat = `
			<select class="etat_chapitre" onchange="changer_statut_chapitre(this)">
				<option value="Non commencé" id="Non commencé">Non commencé</option>
				<option value="En cours" id="En cours">En cours</option>
				<option value="Terminé" id="Terminé">Terminé</option>
				<option value="Annulé" id="Annulé">Annulé</option>  
			</select>
			`
	}else{
		resultat = '<span style="background: '+couleur_de_letat(etat_si_eleve)+';" class="etat_chapitre">'+etat_si_eleve+'</span>'
	}

	return resultat
}

function couleur_de_letat(etat){
	var couleur = etat === "Non commencé" ? "#848484" :
					etat === "En cours" ? "#ffae59" :
					etat === "Terminé" ? "#5d9140" :
					etat === "Annulé" ? "#df756a" :
					""

	return couleur
}

async function ajouter_un_chapitre(){

	intitule_chapitre = prompt("Indiquez le nom du nouveau chapitre: ")
	if(!intitule_chapitre) return false

	donnees_chapitre = {
		id_chapitre : creer_uuid(),
		ID_URL : programme_ID_URL_actuel(),
		Classe_Matiere : programme_classe_matiere_actuel(),
		intitule_chapitre : intitule_chapitre,
		position_chapitre : nouvelle_position_chapitre(),
		etat : "Non commencé"
	}

	return await ajouter_un_element("Programme",donnees_chapitre).then(function() {
		maj_matiere();
		return donnees_chapitre;
		
	})
}

function programme_ID_URL_actuel(){
	return $("#ID_URL")[0].value
}

function programme_classe_matiere_actuel(){
	return $("#ID_URL option:selected").text();
}


function donnees_programme(ID_URL){
	return get_resultat(racine_data + "Programme?ID_URL=eq." + ID_URL + "&order=position_chapitre.asc&" + apikey)
}

function renommer_chapitre(ceci){


	var id_chapitre = le_id_chapitre(ceci)
	var ancien_nom = $(".titre_chapitre[id='"+id_chapitre+"']")[0].innerText
	
	nouveau_nom = prompt("Indiquez le nouveau nom du chapitre: ", ancien_nom)
	if(nouveau_nom && nouveau_nom !== ancien_nom) modifier_chapitre(id_chapitre, "intitule_chapitre", nouveau_nom, maj_matiere)
}

function changer_statut_chapitre(ceci){

	//changer la couleur
	actualiser_couleurs(ceci)

	//console.log("on doit changer le statut")
	var id_chapitre = le_id_chapitre(ceci)
	modifier_chapitre(id_chapitre, "etat", ceci.value)

	var date_fin = (ceci.value === "Terminé" || ceci.value === "Annulé" ) ? maintenant() : ""
	modifier_chapitre(id_chapitre, "date_fin",date_fin, maj_matiere)

}

function actualiser_couleurs(ceci){


	var la_couleur = couleur_de_letat($("[id='"+ceci.value+"']")[0].value) //$("[id='"+ceci.value+"']")[0].getAttribute("couleur")
	//console.log(la_couleur)
	ceci.style.background = la_couleur;	

}

function supprimer_ce_chapitre(ceci){

	var id_chapitre = le_id_chapitre(ceci)
	//console.log(id_chapitre)
	var confirmation = confirm("⚠️Voulez-vous vraiment supprimer ce chapitre ? Cette action est irréversible. ("+id_chapitre+")")
	if(confirmation){
		supprimer("Programme","id_chapitre",id_chapitre).then(() => maj_matiere())
	}
}

function le_id_chapitre(ceci){
	return ceci.parentNode.id
}

function modifier_chapitre(id_chapitre, champ_du_chapitre, valeur_du_chapitre, callback){
	var donnees_chapitre = {
		id_chapitre: id_chapitre,
		[champ_du_chapitre]: valeur_du_chapitre
	}
	actualiser("Programme", "id_chapitre", id_chapitre, donnees_chapitre).then(() => callback ? callback() : "")
}










function choisir_ce_mode(ceci){

	//console.log(ceci)

	if($(".mode_affichage_fichiers")){


		$(".mode_affichage_fichiers")[0].className = "mode_affichage_fichiers"
		$(".mode_affichage_fichiers")[1].className = "mode_affichage_fichiers"

		//changer le filtre date VS filtre chapitre
		var id_mode = ceci.id.replace("par_","")
		var id_autre_mode = id_autre(id_mode)
		
		/*
		console.log({
			id_mode: id_mode,
			id_autre_mode: id_autre_mode
		})*/
		

		$("#" + id_mode)[0].style.display = ""
		$("#" + id_autre_mode)[0].style.display = "none"

		ceci.className = "mode_affichage_fichiers sekooly-mode-background"
		masquer_config_mode()

		//enregistrer la préférence
		stocker("mode_prefere",ceci.id)

		
		filtrer_avec_le_bon_filtre(id_mode)

	}



}

function filtrer_avec_le_bon_filtre(id_mode){

		if(id_mode === "la_date_effet"){
			filtrer_date_effet()
		}else if(id_mode === "filtre_id_chapitre"){
			filtrer_chapitre()
		}
}

function id_autre(id_actuel){
	var resultat = id_actuel === "la_date_effet" ? "filtre_id_chapitre" : "la_date_effet"
	return resultat
}

function afficher_config_mode(){
	if($(".gear-container")[0]) $(".gear-container")[0].style.display = "block"
}

function masquer_config_mode(){
	if($(".gear-container")[0]) $(".gear-container")[0].style.display = ""
}

function switch_config_mode(){

	if($(".gear-container")[0]){

		deja_visible = $(".gear-container")[0].style.display === "block"

		if(deja_visible){
			masquer_config_mode()
		}else{
			afficher_config_mode()
		}
	}
}




function creer_chapitre(){

	recuperer_programme()
	afficher_fenetre(false)
	$("select[id='ID_URL']")[0].value =  recuperer("dossier_chargé")
	ajouter_un_chapitre().then(async function(data) {
		//console.log(data)	
		if(data){

			//rajouter dans mes chapitres locaux
			//actualiser ma liste de chapitres lors de l'ajout de fichier
			await chercher_mes_chapitres(true)

			//mettre la valeur
			$("select#id_chapitre")[0].value = data['id_chapitre']
		}else{
			element_DOM("id_chapitre").value = "--"
		}
	})


}

























function faire_la_recherche_fichier(){

	var zone_recherche = '<input id="rechercher" class="barre_recherche" name="rechercher" placeholder="Rechercher un fichier par mot(s)-clé(s)...">'
	

	$("#mini_popup").remove()
	var bouton_aide = help("aide_recherche()")
	//console.log(bouton_aide)
	creer_mini_popup( bouton_aide+"<b>Que recherchez-vous?</b>"+zone_recherche, "<div class='liste_resultats' id='liste_resultats'></div>","Rechercher","afficher_resultats_recherche()")

	
}

function help(fonction_aide){
	//console.log(contenu_alerte)
	return '<rouge class="mini-image" onclick="'+fonction_aide+'">Besoin d\'aide?</rouge>'
}


function aide_recherche(){	
	var contenu_alerte = "Un fichier peut être recherché par des mots-clés liés à :\n\t• la matière dans laquelle il est publié\n\t• le nom que l'enseignant lui a donné\n\t• son extension (pdf,png,youtube...)\n\t• sa catégorie (cours, devoir, ...)\n\t• l'intitulé de son chapitre.\nExemple: aucun chapitre"
 	alert(contenu_alerte)
}

async function afficher_resultats_recherche(){
	chargement(true)

	var mot_cle = $("#rechercher")[0].value.trim().toLowerCase().replaceAll(" ","")
	//console.log(mot_cle)

	if(!mot_cle){
		alert("Merci de d'abord saisir un mot-clé.")
		chargement(false)
		return false
	} 

	//ignorer les fichiers de photos de profil
	mes_fichiers = await recuperer_mes_fichiers(true)
	var mes_fichiers_initiaux = mes_fichiers.filter(e => e['categorie_fichier'] !== "Profil")
	var mes_matieres = JSON.parse(recuperer("mes_matieres"))
	

	//rassembler les fichiers avec le nom des matieres (inner join avec ID_URL)
	//console.log(mes_fichiers_initiaux)
	mes_fichiers_intermediaires = mes_fichiers_initiaux.map(e =>   Object.assign({}, ...[e, mes_matieres.find(matiere => matiere['ID_URL'] === e["id_dossier"] ) ])       )
	//console.log(mes_fichiers_intermediaires)

	var fichiers_trouves = mes_fichiers_intermediaires.filter(function(un_fichier, index){

		//console.log("\n\n\n\non a ça: " + index)
		//console.log(un_fichier)

		//chercher dans la Classe_Matiere
		dans_classe_matiere = (un_fichier['Classe_Matiere'] ? un_fichier['Classe_Matiere'] : "").toLowerCase().replaceAll(" ","").includes(mot_cle)
		/*
		console.log(un_fichier['Classe_Matiere'])
		console.log(dans_classe_matiere)
		*/

		//chercher dans categorie_fichier
		dans_categorie_fichier = un_fichier['categorie_fichier'].toLowerCase().replaceAll(" ","").includes(mot_cle)
		/*
		console.log(un_fichier['categorie_fichier'])
		console.log(dans_categorie_fichier)
		*/

		//chercher dans nom_fichier
		dans_nom_fichier = un_fichier['nom_fichier'].toLowerCase().replaceAll(" ","").includes(mot_cle)
		/*
		console.log(un_fichier['nom_fichier'])
		console.log(dans_nom_fichier)
		*/


		//chercher dans le chapitre (si null === "(Aucun chapitre)")
		intitule_chapitre = un_fichier['intitule_chapitre'] === null ? "(Aucun chapitre)" :  un_fichier['intitule_chapitre']
		dans_intitule_chapitre = intitule_chapitre.toLowerCase().replaceAll(" ","").includes(mot_cle)

		return dans_classe_matiere || dans_categorie_fichier || dans_nom_fichier || dans_intitule_chapitre

	})

	//console.log(fichiers_trouves)

	//on affiche
	var liste_des_resultats = ""
	if(fichiers_trouves.length === 0) {
		liste_des_resultats = "<div class=\"alerte_section_journee\">Aucun résultat trouvé pour <b>"+mot_cle+"</b>.<br>Merci de réessayer.</div>"
	}else{
		fichiers_trouves.forEach(function(le_fichier){
			liste_des_resultats += creer_element_journee(le_fichier['Classe'] + " " + le_fichier['Matiere'],le_fichier['nom_fichier'],le_fichier['date_effet'],le_fichier['heure_effet'],le_fichier["id_fichier"],le_fichier["ID_URL"],"fichier",false,false,false)
		})		
	}

	$("#nb_resultats").remove()
	$("#liste_resultats")[0].innerHTML = ""
	$("#liste_resultats").append(liste_des_resultats)

	$("#mini_popup").append('<div id="nb_resultats"><b>'+fichiers_trouves.length +' résultats trouvés<b></div>')

	chargement(false)

}































/******************* AVIS SUR SEKOOLY ***********************/
async function emettre_avis_sekooly(){

	var mon_avis = await mon_avis_actuel()
	//console.log(mon_avis)

	var deja_avec_avis = mon_avis.length > 0

	var nom_bouton = deja_avec_avis ? "Modifier mon avis" : " Envoyer mon avis "
	var fonction_bouton = deja_avec_avis ? "fermer_emettre_avis()" : "envoyer_avis()"

	//si déjà un avis -> on affiche juste l'avis
	//si pas encore d'avis -> afficher le formulaire
	var elements_html = deja_avec_avis ? '<div id="avis">'+afficher_avis(mon_avis[0]) +"</div>" : formulaire_avis()
	

	//créer le popup
	//creer_mini_popup(titre,elements_html,nom_bouton,fonction_bouton,valeur_actuelle,id_element_valeur_actuelle, valeur_actuelle_bis, id_element_valeur_actuelle_bis,taille_du_titre)
	creer_mini_popup("Mon avis sur Sekooly",elements_html, nom_bouton, fonction_bouton,false,false,false,false,25)
	
	//clic d'envoi par défaut INACTIF
	accepter_cgu_avis()
}

function avis_good(){
	return "❤️Ce que vous aimez le plus"
}

function avis_bad(){
	return "😕Ce que vous aimez moins<br>(ou une fonctionnalité que vous aimeriez avoir)"
}

function afficher_avis(mon_avis){
	return un_element_avis("Note globale",mon_avis['note_globale'],"note_globale") + un_element_avis(avis_good(),mon_avis['commentaire'],"commentaire") + un_element_avis(avis_bad(),mon_avis['ameliorations'],"ameliorations") 

}


function un_element_avis(titre_element,valeur_element,id_element){
	return '<div><b class="titre_chapitre sekooly-mode">'+titre_element+':</b><div class="element_avis" id="'+id_element+'">'+valeur_element + '</div></div>'
}

function formulaire_avis(){
	return `<div id="nouvel_avis"><br>		
		<p>Nous serions honorés de <span class="titre_chapitre sekooly-mode">connaître en détails</span> ce qui vous plaît! (et même ce qui vous plaît moins 😉)</p>
		<form onsubmit="event.preventDefault();" id="avis">
			<div>Note globale pour Sekooly (sur 5):`+liste_notes_possibles()+`</div>
			<div>`+avis_good()+`:<textarea id="commentaire" class="texte_avis"></textarea></div>
			<div>`+avis_bad()+`:<textarea id="ameliorations" class="texte_avis"></textarea></div>
		</form>
		<div>
			<label for="cgu_avis"><input onchange="accepter_cgu_avis()" id="cgu_avis" type="checkbox" checked>J'accepte les <a class="titre_chapitre sekooly-mode" onclick="alert(CGU_avis(event))">Conditions d'Utilisation</a> du système d'avis de la plateforme.</label>
		</div>
		</div>
		`
}

function CGU_avis(e){
	e.preventDefault()
	return `
	En cochant cette case, vous acceptez de:

	1° Mettre en avant votre avis sur sekooly.com sans aucune réserve
	2° Donner l'autorisation totale à Sekooly d'utiliser le nom de votre établissement, votre rôle et vos initiales pour la mise en avant de la plateforme
	3° Céder à Sekooly le droit de diffuser votre avis, dans les termes du point n°2
	4° Supprimer par vous-même votre avis en cas de besoin, depuis votre espace utilisateur.

	`
}


function liste_notes_possibles(negatif, default_value,id_note_globale, callback){

	var fonction_callback = callback ? ' onchange="'+callback+'(this)"  ' : ""

	var la_liste_de_notes = !id_note_globale ? '<select name="note_globale" id="note_globale" value=5>' : '<select name="'+id_note_globale+'"  '+ fonction_callback +'   >'

	var note_min = negatif ? -5.1 : 0

	for(la_note = 5; la_note>note_min; la_note = la_note-0.1){
		la_note = la_note.toFixed(2)
		//console.log(la_note + " VS " +Number(default_value).toFixed(2))
		selected = (la_note === Number(default_value).toFixed(2)) ? " selected " : ""
		la_liste_de_notes += une_note_possible(la_note,selected)
	}

	la_liste_de_notes += "</select>"

	return la_liste_de_notes
}

function une_note_possible(la_note,selected){
	return '<option value="'+la_note+'"  '+selected+'  >'+la_note+'</option>'
}

function fermer_emettre_avis(){

	var confirmation = confirm("⚠️Cela supprimera votre ancien avis, et cette action est irréversible. Voulez-vous continuer ?")

	if(confirmation){


		$("#mini_popup").remove()

		//supprimer mon avis
		//émettre un nouvel avis
		supprimer_initial("Avis","identifiant",recuperer("identifiant_courant")).then(() => emettre_avis_sekooly())
		
	}
	
	
}

async function mon_avis_actuel(){
	return await get_resultat_asynchrone(racine_initiale + "Avis?identifiant=eq."+recuperer("identifiant_courant")+"&"+api_initial)
}


function accepter_cgu_avis(){
	//quand il ne coche pas -> on masque le bouton envoyer
	//quand il coche -> on affiche le bouton envoyer
	if($("#cgu_avis").length > 0){

		var on_va_afficher_bouton = $("#cgu_avis")[0].checked
		afficher_bouton_envoyer_avis(on_va_afficher_bouton)

	}


}

function afficher_bouton_envoyer_avis(oui){
	$("[onclick='envoyer_avis()']")[0].style.display = oui ? "" : "none"
}

async function envoyer_avis(){
	var note_globale = $("#note_globale")[0].value

	//on envoie dans la bdd
	var nouvel_avis = {
		identifiant: recuperer("identifiant_courant"),
		nom_etablissement: data_etablissement['nom_etablissement'],
		mon_type: mon_role,
		note_globale: note_globale,
		commentaire: $("#commentaire")[0].value,
		ameliorations: $("#ameliorations")[0].value,
		est_visible: false,
		horodateur: maintenant(),
	}

	return ajouter_un_element_racine("Avis", nouvel_avis).then(function(){
		afficher_alerte("Merci infiniment pour votre avis!")
		emettre_avis_sekooly()

	})
}































//forcer une action via la table SONDAGE
async function gerer_sondage(){

	//récupérer les sondages où la date de fin > aujourd'hui
	var aujd = maintenant().split(" ")[0]
	var mes_sondages = get_resultat(racine_initiale + "Sondage?date_fin=gt." + aujd + "&" + api_initial)

	//console.log(mes_sondages)


	//si je suis l'admin de Sekooly
	if(recuperer("identifiant_courant").includes('admin.tech')){

		//si au moins 1 sondage pas encore executé
		var sondages_non_majs = mes_sondages.filter(e => e['maj_reponse_sondage'] === false)
		//console.log(sondages_non_majs)
		if(sondages_non_majs.length > 0){

			var confirmation = confirm("Mettre à jour tous les identifiants de tous les établissements Sekooly?")

			if(!confirmation) return false
				
			//on itère chaque établissement
			var liste_etablissements = get_resultat(racine_initiale + "Etablissements?" + api_initial)
			//var liste_etablissements = get_resultat(racine_initiale + "Etablissements?nom_etablissement=eq." + "testo" + "&" + api_initial)
			liste_etablissements.forEach(function(etablissement){

				console.log("\n\n\n\n")

				//on itère sur les Eleves, Profs, Admin
				liste_tables = ["Eleves", "Profs", "Administration"]
				liste_tables.forEach(function(la_table){
					//on met reponse_sondage à "non"
					nouvelle_donnee = {
						Reponse_sondage: "non"
					}					
					url = etablissement['racine_data'] + la_table + "?apikey=" + etablissement["apikey"]
					console.log("\n")
					console.log({
						url: url,
						nouvelle_donnee: nouvelle_donnee
					})
					patch_resultat_asynchrone(url, nouvelle_donnee)
				})
				
				
			})


			//on met à jour tous les maj_reponse_sondage = true
			url = racine_initiale + "Sondage?" + api_initial
			//console.log(url)
			patch_resultat_asynchrone(url, {maj_reponse_sondage : true})


		}


	//le reste
	}else{

		var mon_type = recuperer("mon_type").split("_")[0]
		var mes_donnees = get_resultat(racine_data + mon_type + "?Identifiant=eq." + recuperer("identifiant_courant") + "&" + apikey)[0]

		//console.log(mes_donnees)
		var donnees_actuelles =  JSON.parse(recuperer("mes_donnees"))
		/*
		console.log({mes_donnees})
		console.log({donnees_actuelles})
		*/

		if(!mes_donnees || (mes_donnees["Code"] !== donnees_actuelles["Code"] && mes_donnees["Code"] !== hasher(donnees_actuelles["Code"])) ){
			//deconnexion directe
			console.log("usurpation d'identité.")
			await tout_quitter()	
		
		//si je suis bien moi
		}else{
			//console.log("c'est bien moi.")
			//actualiser mes donnees locales
			stocker("mes_donnees", JSON.stringify(mes_donnees))	
		}
		
		
		
		//console.log(mes_donnees)

		//si je n'ai pas encore répondu
		if(mes_donnees["Reponse_sondage"] === "non" ){

			//pour chaque sondage: exécuter ce qu'il faut
			mes_sondages.forEach(async function(sondage){

				alert(sondage["description"])
				await eval(sondage["fonction_a_appeler"])

				//une fois que j'appuie sur l'élément de finalisation -> mon son dage est ok
				var element_validation = eval(sondage["selector_element_finalisation"])
				/*
				console.log({
					element_validation: element_validation
				})
				*/

				element_validation.on("click",function(){
					//console.log("on va valider la finalisation")
					var url = racine_data + recuperer("mon_type") + "?Identifiant=eq." + recuperer("identifiant_courant") + "&" + apikey
					//console.log(url)
					patch_resultat_asynchrone(url, {"Reponse_sondage": "oui"})
					modifier_donnee_locale("mes_donnees","Identifiant",recuperer("identifiant_courant"),"Reponse_sondage","oui")

				})




			})

			


		}

	}
	

}







































































































/***************************************************** SUPABASE POUR LES NOTIFS IRL *******************************************************************/


function gerer_notifs_irl(sans_changer){

	var coche_actuelle = $("#notifs_sans_actualiser")[0].innerText
	var valeur_finale_notifs_reelles = ""
	var phrase_finale = ""


	//si c'est coché -> on décoche
	if(coche_actuelle.length > 0){

		valeur_finale_notifs_reelles = ""
		phrase_finale = "Notifications et messages en temps réel <b><rouge>désactivés</rouge></b> sur cet appareil."
		//phrase_finale = "Messages privés en temps réel <b><rouge>désactivés</rouge></b> sur cet appareil."

		fermer_la_subscription()
		
	//si c'est décoché -> on coche SSI confirmation
	} else{
		var confirmation = confirm("🔔 En activant les notifications et messages privés en temps réel sur cet appareil, vous risquez d'augmenter votre consommation de données.\n\nVoulez-vous continuer?")
		//var confirmation = confirm("🔔 En activant les messages privés en temps réel sur cet appareil, vous risquez d'augmenter votre consommation de données.\n\nVoulez-vous continuer?")
		if(confirmation){			

			
			valeur_finale_notifs_reelles = " ✓"
			//phrase_finale = "Notifications et messages en temps réel <b><rouge>activés</rouge></b> sur cet appareil."
			phrase_finale = "Messages privés en temps réel <b><rouge>activés</rouge></b> sur cet appareil."

			//c'est du IRL -> notifier
			ouvrir_la_subscription()
		}

	}

	stocker("notifs_sans_actualiser", valeur_finale_notifs_reelles)
	$("#notifs_sans_actualiser")[0].innerText = valeur_finale_notifs_reelles
	if(phrase_finale) afficher_alerte(phrase_finale)

}

function notifs_reelles_ou_non(){
	var valeur_finale_notifs_reelles = ""


	if(recuperer("notifs_sans_actualiser")){
		valeur_finale_notifs_reelles = " ✓"
		ouvrir_la_subscription()
	}else{
		valeur_finale_notifs_reelles = ""
		fermer_la_subscription()
	}

	$("#notifs_sans_actualiser")[0].innerText = valeur_finale_notifs_reelles
}


function la_notif_me_concerne(mon_type,payload){
	//alert(JSON.stringify(nouvelle_notif))

	if(payload.eventType === "UPDATE" || payload.eventType === "INSERT"){




		var nouvelle_notif = payload.new

		var mes_matieres = JSON.parse(recuperer("mes_matieres"))
		var de_moimeme = nouvelle_notif['Identifiant_derniere_modif'].includes(recuperer("identifiant_courant"))
		var resultat_1 = mon_type.includes("Profs") && mes_matieres.filter(e => e['ID_URL'] === nouvelle_notif["Id_classe_matiere"]).length > 0
		var resultat_2 = mon_type.includes("Eleves") && mes_matieres.filter(e => e['ID_URL'] === nouvelle_notif["Id_classe_matiere"]).length > 0
		var resultat_3 = mon_type.includes("Admin") && nouvelle_notif["Cycle"] === JSON.parse(recuperer("mes_donnees"))['Cycle']


		/*
		console.log({
			resultat_1:resultat_1,
			resultat_2:resultat_2,
			resultat_3:resultat_3
		
		})
		*/

		//si je suis prof ET la classe me concerne
	    // OU
	    //hors prof, la classe me concernera sûrement
	    return !de_moimeme &&  (resultat_1 || resultat_2 || resultat_3)

	}else{
		return false
	}




}




function ouvrir_la_subscription(){

	if(mySubscription_notif && mySubscription_conv) return true

	//Eleve: dès que ça concerne ma classe OU classe = mon cycle
	//Prof: dès que la classe_matiere inclut une classe_matiere que j'enseigne
	//Admin: dès que le cycle est le mien
	var mon_type = recuperer("mon_type").split("_")[0]
	var conditions_notifs = "Notifs"


	//demander sur l'appareil
	gerer_notifications_appareil()


	/*
	nom_champ_reference = mon_type.includes("Admin") || mon_type.includes("Profs") ? "Cycle" : "Classe"
	valeur_champ_reference = JSON.parse(recuperer("mes_donnees"))[nom_champ_reference]

	conditions_notifs += ":"+nom_champ_reference+"=eq." + valeur_champ_reference
	*/

	//console.log(conditions_notifs)			

	mySubscription_notif = supabase
	  //.from('Notifs:Identifiant_derniere_modif=neq.' + recuperer("identifiant_courant"))
	  .from(conditions_notifs)
	  .on('*', function(payload){
	  	console.log('nouvelle notif!', payload)

	    //si je suis prof ET la classe me concerne
	    // OU
	    //hors prof, la classe me concernera sûrement
	    if(la_notif_me_concerne(mon_type,payload)){

	    	
	    	var affichage = ajouter_la_notif(payload.new,null,true)
	    	var id_notifs_actuels = ',' + JSON.parse(recuperer("mes_notifs")).map(e => e.id_notif).join(",") + ','


	    	//si c'est une notif que j'ai pas encore recu
	    	//ET si ma date de consultation < date de modification
			la_date_derniere_modif = convertir_en_date(payload.new['Date_derniere_modif']).seconds(0).milliseconds(0).toISOString();
			ma_date_consultation = convertir_en_date(recuperer("ma_date_consultation")).seconds(0).milliseconds(0).toISOString();

			//console.log(JSON.stringify(la_date_derniere_modif))


			/*
			la_date_derniere_modif = String(la_date_derniere_modif).substring(0,9);
			ma_date_consultation = String(ma_date_consultation).substring(0,9);
			*/

			/*
	    	console.log('\n\n\n')
	    	console.log(id_notifs_actuels + " VS " + payload.new.id_notif)
	    	console.log(la_date_derniere_modif + " VS " + ma_date_consultation)
	    	console.log('\n\n\n')
	    	*/


	    	if(! (liste_notifs_lues.includes("," + payload.new['id_notif'] + ",") && la_date_derniere_modif <= ma_date_consultation)){
	    		afficher_notif(affichage,payload.new)	
	    	} 

			recuperer_notifs()

	    	/*
	    	//alert("ça me concerne.")
	    	//alert(JSON.stringify(payload))
	    	var notifs_actuelles = JSON.parse(recuperer("mes_notifs"))
		    //si cette nouvelle me concerne
		    //actualiser mes notifs


		    //mode MODIFIER si update ET notif existante
		    //sinon : ajouter

	    	//ajouter en local la notif
	    	//ajouter dans mes notifs si c'est une nouvelle notif
	    	//modifier sinon
	    	if(payload.eventType === "UPDATE" && notifs_actuelles.filter(e => (e["id_notif"] === payload.new["id_notif"])).length > 0 ){

	    		var liste_champs_a_maj = ["Intitulé","Role_derniere_modif","Identifiant_derniere_modif","Date_derniere_modif"]
	    		
	    		liste_champs_a_maj.forEach(function (champ_ref){
	    			//console.log(champ_ref)
	    			//console.log(payload.new["id_notif"])
	    			modifier_donnee_locale("mes_notifs", "id_notif", payload.new["id_notif"], champ_ref, payload.new[champ_ref],true,tri_ordre_chrono_decroissant_Date_derniere_modif)	
	    		})
	    		

	    	}else if(payload.eventType === "INSERT" || payload.eventType === "UPDATE"){
	    		ajouter_donnee_locale("mes_notifs", payload.new, "id_notif",true)	
	    	}
		    
		    afficher_bulle_notifs()
		    //alert(recuperer("mes_notifs"))

		    */


	    }else{
	    	//alert("ça me concerne PAS.")	
	    }
	    

	    

	  })
	  .subscribe()

	//console.log(mySubscription_notif)


	//dès que je suis destinataire: me notifier
	mySubscription_conv = supabase
	  .from('Conversations:Destinataire=eq.' + recuperer("identifiant_courant"))
	  .on('*', async function(payload){
	    //console.log('nouveau msg!', payload)


	    //si la fenetre est NON visible
	    //ET
	    //si la conversation n'est pas encore ouverte
	    var fenetre_visible = element_DOM("fenetre").style.visibility === "visible"
	    var liste_msgs_visible = fenetre_visible ? ($("#div_liste_msgs").length > 0 ? true : false) : false // si la fenetre est visible, on regarde son existence, sinon c'est inexistant
	    var conversation_visible = $("#Destinataire.titre_du_poste").length > 0 ? $("#Destinataire.titre_du_poste")[0].innerHTML === payload.new['Expediteur'].toUpperCase() : false
	    //console.log(conversation_visible)

	    /*
	    console.log({
	    	fenetre_visible: fenetre_visible,
	    	liste_msgs_visible: liste_msgs_visible,
	    	conversation_visible: conversation_visible
	    })
	    */


	    if(conversation_visible){

    		//alert("conversation en temps réel")
	    	//console.log(payload)
		    //actualiser mes notifs			    
		    ajouter_donnee_locale("mes_msgs", payload.new, "id_msg")

		    //si ce msg n'est pas encore présent
			if($("[id='"+payload.new.id_msg+"']").length === 0 ){			    
	    	

		    	$("#conversation").append(afficher_msg_conversation(payload.new))
		    	element_DOM(payload.new.id_msg).scrollIntoView()
		    	jai_lu(payload.new.id_msg, true)
		    }

	    }


	    //rien de visible
	    //if(!fenetre_visible && !liste_msgs_visible && !conversation_visible){
    	else if(!liste_msgs_visible){
    		
    		//alert("mode bulle uniquement")

		    //actualiser mes notifs
		    ajouter_donnee_locale("mes_msgs", payload.new, "id_msg")		    
		    afficher_bulle_notifs()

		//si la conversation est déjà ouverte
	    }else{

	    		
    		//alert("mode affichage de liste des conversations")

    		//actualiser localement
    		ajouter_donnee_locale("mes_msgs", payload.new, "id_msg")
    		recuperer_msgs(false)
	    	afficher_bulle_notifs()

		  

	    }

	    


	  })
	  .subscribe()
	
	//console.log(mySubscription_conv)

	
	//avant de quitter: fermer la souscription
	$(window).bind('beforeunload', function(){
		//alert("vous quittez?")
		fermer_la_subscription()
	})


}


function fermer_la_subscription(){
	if(mySubscription_notif) supabase.removeSubscription(mySubscription_notif)
	if(mySubscription_conv) supabase.removeSubscription(mySubscription_conv)
}




function gerer_notifications_appareil(){

	if(mode_test_notif()){


		//default, granted, denied
		//si default OU denied -> demander
		//si granted -> on continue directement
		//console.log(Notification.permission)
		if(Notification.permission !== "granted"){
			Notification.requestPermission().then(function (permission){
				afficher_notif()
			})
		}else{
			//afficher_notif()
		}


	}



}

function afficher_notif(contenu,donnees_notifs){
	if(Notification.permission === "granted" && mode_test_notif() ){
		popup_notification(contenu,donnees_notifs)
	}
}

function mode_test_notif(){
	return window.location.href.includes("testo") || window.location.href.includes("localhost")
}


function popup_notification(contenu,donnees_notifs){
	var content = contenu || 'Vous avez activé les notifications Sekooly.'
	const notification = new Notification("Sekooly | Nouvelle notification", {
		body: content,
		icon: prefixe_image + "/logo-no-background-128x128.png",
		vibrate: [100,50,100]
	})

	if(donnees_notifs){
		notification.onclick = function(e){
			//afficher_alerte("Vous avez cliqué, c'est bien.")
			
			clic_de_notif(donnees_notifs['Type_notif'],donnees_notifs['Id_source'],donnees_notifs['Id_classe_matiere'],donnees_notifs['id_notif'],donnees_notifs['Type_notif'] === 'discussion')
		}
	}else{

	}
}



































/*************************** MULTI DEVOIR ********************************/

function ajouter_page_devoir(){

	//maximum 8 pages
	nb_pages_devoir = $(".mon_file_devoir").length

	if(nb_pages_devoir < 8){
		var copie_fichier = element_DOM("file_devoir").cloneNode(true)
		copie_fichier.id = "file_devoir_" + nb_pages_devoir 
		copie_fichier.value ="";
		copie_fichier.className ="mon_file_devoir fichier_supplementaire";
		$("#soumettre_devoir")[0].insertBefore(copie_fichier, $("#boutons_devoir")[0]);	

		$(".mon_file_devoir").off("change")
		$(".mon_file_devoir").on("change",function(e){
			//alert("vous avez changé le " + e.target.id)
			actualiser_rendu()

		})

	}else{
		alert("Vous ne pouvez pas envoyer un devoir de plus de 8 pages.")
	}
	
}

async function actualiser_rendu(sans_alerte){
	await rassembler(sans_alerte)
	//$('#tout').doubleScroll();
}


async function supprimer_derniere_page_devoir(){
	
	index_dernier_devoir = $(".mon_file_devoir").length-1


	if(index_dernier_devoir > 0){

		var avec_fichier_initial = $("[id='file_devoir_" + index_dernier_devoir +"']")[0].value.length > 0
		//console.log(avec_fichier_initial)
		
		if(avec_fichier_initial) var confirmation = confirm("Voulez-vous vraiment supprimer la dernière page?")

		if(confirmation || !avec_fichier_initial){
			$("[id='file_devoir_" + index_dernier_devoir +"']").remove()
			$("img#result" + index_dernier_devoir).remove()
			await actualiser_rendu(true)
		} 
	}
}
























/****************************** SUPPRESSION D'ETABLISSEMENT **********************************/
function mode_suppression(){
	return recuperer("mon_type").includes("Administration") && window.location.href.endsWith("?delete=" + data_etablissement["id_etablissement"])
}

async function valider_suppression_via_mail_si_besoin(){
	if (mode_suppression()){
		confirmation = prompt("Vous avez demandé à supprimer Sekooly, ce qui engendre la suppression de TOUTES vos données.\n\nMerci de confirmer cette action en écrivant 'je veux supprimer " + data_etablissement["nom_etablissement"] + "'")

		console.log(confirmation)	
		if(confirmation === "je veux supprimer " + data_etablissement["nom_etablissement"]){
			//console.log("aurevoir!")
			chargement(true)



			/*********************************** supprimer sur drive *******************************************/

			var lien_script = await chercher_lien_script(5)
			var premiere_demande  = "?confirmation="  + confirmation
			var adresse_mail_suppression = "&adresse_mail_suppression=" + data_etablissement['contact_etablissement']
			var nom_etablissement_str = "&nom_etablissement=" + data_etablissement['nom_etablissement']
			var id_etablissement_str = '&id_etablissement=' + data_etablissement['id_etablissement']



			url = lien_script + premiere_demande + adresse_mail_suppression + nom_etablissement_str + id_etablissement_str
			//console.log(url)
			chargement(true)
			
			resultat = await post_resultat_asynchrone(url,{})
			



			/*********************************** supprimer ma ligne dans gestion interne SUPABASE *******************************************/
			await supprimer_initial("Etablissements","id",data_etablissement['id'])


			/*********************************** supprimer le projet sur supabase (TODO) *******************************************/

			/*********************************** supprimer le record sur namecheap (TODO) *******************************************/

			/*********************************** supprimer le repo git + rediriger vers sekooly.com (todo) *******************************************/
			setTimeout(function(){
				window.location.href = "https://sekooly.com"
			},3000)




			//alerte
			afficher_alerte(resultat)


			chargement(false)
		}else{
			afficher_alerte("Suppression de votre plateforme Sekooly annulée.")
			setTimeout(function(){
				window.location.href = "/tele-enseignement"
			},3000)
		}
		
	}
}






























/******************************** LES QUIZ *********************************/
function afficher_quiz_option(oui){
	element_DOM("quiz-option").style.display = oui ? "block" : "none"

	
}

function quiz_selected(){
	return $("#liste_quiz").val()
}

function edit_quiz(){
	stocker("tmp_quiz",JSON.stringify({id_quiz: quiz_selected()}))
	creer_quiz()
}

async function delete_quiz(){
	var confirmation = confirm("⚠️Êtes-vous sûr de vouloir supprimer ce quiz ? Cette action est irréversible.")
	if(confirmation){
		var id_quiz = quiz_selected()


		//vérifier qu'il n'est pas publié 
		est_publié = await rechercher("Fichiers","id_fichier", id_quiz)
		//console.log(est_publié)
		//si publié -> demander de reconfirmer la suppression
		if(est_publié.length > 0){
			var confirmation2 = confirm("Le quiz possède peut-être déjà des réponses.\nSi vous le supprimez, vous supprimez toutes les réponses du quiz. Voulez-vous continuer?")
			if(confirmation2) supprimer_quiz(id_quiz)
		}else{
			supprimer_quiz(id_quiz)
		}



	}
}

async function supprimer_quiz(id_quiz){
	//supprimer les reponses
	await supprimer("Reponses","id_quiz",id_quiz)
	//supprimer les questions
	await supprimer("Questions","id_quiz",id_quiz)
	//supprimer les rendus
	await supprimer("Rendus","id_fichier_sujetdevoir",id_quiz)
	//supprimer le quiz
	await supprimer("Quiz","id_quiz",id_quiz)



	afficher_alerte("Le quiz a bien été supprimé.")
	changement_quiz_ou_non()
}

function ajouter_edit_quiz(oui){
	if(oui){
		if($("#edit-quiz").length === 0) $("#mode-quiz").append('<img id="edit-quiz" onclick="edit_quiz()" src="'+ prefixe_image + '/img_edit.png" alt="MODIFIER" class="editer">')	
		if($("#delete-quiz").length === 0) $("#mode-quiz").append('<img id="delete-quiz" onclick="delete_quiz()" src="'+ prefixe_image + '/img_trash.png" alt="SUPPRIMER" class="editer">')	
	}else{
		$("#edit-quiz").remove()
	}
	
}

async function changement_quiz_ou_non(){

		//afficher_quiz_option(window.location.href.includes("localhost"))

		$('#liste_quiz').off('change')
		$('#liste_quiz').on('change', function(e){
			//console.log(e.target.value)
			if(e.target.value === "new"){
				$("#liste_quiz")[0].value = "--"
				ajouter_edit_quiz(false)
				creer_quiz()
			}else if(e.target.value === "--"){
				ajouter_edit_quiz(false)
			}else{
				ajouter_edit_quiz(true)
			}
		})

		//mode quiz ou non
		if($('#categorie_choisie')[0].value === "Quiz" ){
		

			$("#mode-non-quiz").css("display", "none");
			$("#mode-quiz").css("display", "block");



			//lister les quizz possibles
			all_quiz = await rechercher("Quiz","id_classe_matiere",recuperer("dossier_chargé"))
			$('.my-quiz').remove()

			all_quiz.forEach((quiz) => {
				$('<option class="my-quiz" value="'+quiz.id_quiz+'">'+quiz.titre+'</option>').insertBefore($('[id="new-quiz"]'))
			})

			//si NON -- : on peut envoyer le fichier
			$("#mettre_fichier_en_ligne").on("click",function(){


				id_quiz = $("#liste_quiz").val()
				if(id_quiz !== "--"){
					var nom_fichier = $('[value="'+id_quiz+'"]').text() +".quiz"
					publier_quiz(id_quiz,nom_fichier)
					$("#mettre_fichier_en_ligne").off("click")
				}

			})

			afficher_checkbox_fichier_telechargeable(false)

			//par défaut : pas de quiz
			$("#liste_quiz")[0].value = "--"

		}else{
			
			element_DOM("mode-non-quiz").style.display = "grid"
			element_DOM("mode-quiz").style.display = "none"
			afficher_checkbox_fichier_telechargeable(true)
		}




}


function initialiser_fenetre_quiz(preview_mode, nb_questions){

	var fonction_precedent = preview_mode ? "prev_question()" : "prev_step_quiz()"
	var fonction_suivant = preview_mode ? "next_question("+nb_questions+")" : "next_step_quiz()"


	$('#fenetre').append('<div class="setup" id="setup"></div>')
	$('#setup').append('<div id="contenu_etape_quiz"></div>')
	$('#setup').append('<div id="btn-quiz"></div>')
	$('#btn-quiz').append('<button onclick="'+fonction_precedent+'" id="btn-previous" class="btn-setup sekooly-mode-background">Précédent</button>')
	$('#btn-quiz').append('<button onclick="'+fonction_suivant+'" id="bouton_suivant" class="btn-setup sekooly-mode-background">Suivant</button>')
	$('#btn-quiz').append('<div id="remarque-quiz"></div>')



}

async function creer_quiz(numero_etape){


	if(recuperer("mon_type").includes("Eleve")) return alert("Vous n'avez pas les droits pour modifier un quiz.")


	vider_fenetre("Editer un quiz (<span id='etape-quiz'>1</span>/2)",false,"sauvegarder_quiz()")
	afficher_fenetre(true)

	initialiser_fenetre_quiz()
	init_creation_quiz()

	//POUR MES TESTS LOCAUX
	if(numero_etape){
		//console.log(numero_etape)
		for (var i = 0; i < numero_etape; i++) {
			next_step_quiz()
		}
	}
	//next_step_quiz()
	//nouvelle_question()
	


	
}

function afficher_donnes_quiz(questions_quiz,reponses_quiz){

	//pour chaque question
	questions_quiz.forEach((une_question) => {

		var donnees_reponses = reponses_quiz.filter(e => e['id_quiz'] === get_current_quiz() && e['id_question'] === une_question['id_question'] )
		//créer la nouvelle question avec les valeurs par défaut:
		nouvelle_question(une_question,donnees_reponses)
	})


}



async function saisie_des_questions_responses(){
	
	var les_questions = []
	var les_reponses = []
	console.log("Enregistrement des questions...")

	await sauvegarder_le_quiz_dans_la_table_quiz()

	//pour chaque question
	$(".une_question_quiz").each(async (index,element) => {

		//stocker: id_question ET intitule_question
		var id_question= element.querySelector('.id_question').value
		var intitule_question = element.querySelector('#intitule_question').value

		var question_quiz = {
			id_quiz:get_current_quiz(),
			id_question:id_question,
			position_question:index,
			type_question: element_DOM("type_question"+id_question).innerText,
			intitule_question: intitule_question

		}

		//console.log('\n\n\n')
		//console.log(question_quiz)
		/*
		var retour = await stocker_element_server("Questions",question_quiz)
		console.log(retour)
		console.log("*********************** LES REPONSES **********************")
		*/
		les_questions.push(question_quiz)
		
		//pour chaque reponse de cette question (identifié par id_question)
		$(".une_question_quiz#"+id_question+" > .ui-sortable > ").each(async (index_reponse,une_reponse) => {
			//stocker: id_reponse, intitule_reponse, note_globale, EVENTUELLEMENT une remarque vrai/faux
			var id_reponse = une_reponse['id'] //index_reponse
			var intitule_reponse = une_reponse.querySelector('[name=reponse]').value
			var note_globale = Number(une_reponse.querySelector('[name=note_globale]').value)
			var remarque_correction =  une_reponse.querySelector('.remarque_correction').outerHTML

			//console.log(" " + id_reponse)
			//console.log("["+id_reponse+"]	" + intitule_reponse + ": " + note_globale)

			var reponse_quiz = {
				id_quiz:get_current_quiz(),
				id_question:id_question,
				id_reponse: id_reponse,
				position_reponse: index_reponse,
				intitule_reponse: intitule_reponse,
				score: note_globale,
				remarque_correction: remarque_correction
			}

			//console.log(reponse_quiz)
			/*
			retour = await stocker_element_server("Reponses",reponse_quiz)
			console.log(retour)
			*/

			les_reponses.push(reponse_quiz)

			//enregistrer les questions dans tmp_questions_quiz

		})




	})


	var retour1 = await stocker_element_server('Questions', les_questions)
	//console.log(retour1)
	var retour2 = await stocker_element_server('Reponses', les_reponses)
	//console.log(retour2)

	return [les_questions,les_reponses]

}

//étape 1: titre et description
async function init_creation_quiz(){

	var donnees_quiz = await valeur_par_defaut("*")
	//console.log(donnees_quiz)
	if(!donnees_quiz){
		donnees_quiz = {}
		donnees_quiz["titre"] = ""
		donnees_quiz["description"] = ""
	}

	element_DOM("contenu_etape_quiz").innerHTML = `
		<span>Vous êtes sur le point de créer un quiz de <b class="sekooly-mode">` + la_matiere_chargee("Matiere")+ `</b> dans <b class="sekooly-mode">` +la_matiere_chargee("Classe") + `</b>.</span>
		<form id="quiz-form">
			<input id="titre" name="titre" type="text"  value="`+donnees_quiz["titre"].split(".quiz")[0] +`" placeholder="Titre de votre quiz">
			<textarea id="description" name="description" type="text"  placeholder="Brève description de votre quiz">`+donnees_quiz["description"]+`</textarea>
		</form>
	`


}

async function valeur_par_defaut(){
	try{


		var id_quiz = get_current_quiz()
		var res2 = await rechercher("Quiz","id_quiz",id_quiz)
		if(res2) res2 = res2[0]

		var res = res2 ? res2 : JSON.parse(recuperer("tmp_quiz"))

		//console.log(res)
		return res
	}catch(e){

		//console.error(e)
		return ""
	}
}


//étape 2: les questions - AJOUTER/MODIFIER/SUPPRIMER
//2a) titre de la question
//2b) type de la question: choix unique, choix multiple, saisie libre
//2c) reponses possibles + reponse vraie
//2d) remarques si vrai/faux
async function crud_questions(){

	//ajouter
	element_DOM("contenu_etape_quiz").innerHTML = `
		<form id="quiz-form">
		</form>
		<bleu class="quiz-options" onclick="nouvelle_question()"><img src="`+ prefixe_image + `/img_ajout.png" style="" class="small-icon"> Ajouter une question</bleu>
		<div onclick="run_quiz(true)" class="sekooly-mode quiz-options"><img src="`+ prefixe_image + `/img_previz.png" class="small-icon trash"> Prévisualiser le quiz</div>
	`
	//modifier
	//supprimer
	//voir (previz)


	//afficher ce qui existe déjà sur le serveur
	var current_quiz = get_current_quiz()
	if(current_quiz){
		// rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, nombrelimite, orderby)
		var questions_quiz = await rechercher('Questions','id_quiz',get_current_quiz(),"*",false,"position_question.asc")
		var reponses_quiz = await rechercher('Reponses','id_quiz',get_current_quiz(),"*",false,"position_reponse.asc")

		//console.log(questions_quiz)
		//console.log(reponses_quiz)
		afficher_donnes_quiz(questions_quiz,reponses_quiz)
	}
	

}

async function run_quiz(preview_mode, id_quiz_initial){

	var id_quiz = id_quiz_initial || get_current_quiz()
	//console.log(id_quiz)

	if(preview_mode){
		ma_tentative.id_fichier_sujetdevoir = id_quiz
		ma_tentative.proprietaire = recuperer("identifiant_courant")
		ma_tentative.date_publication = ""
		//submit_quiz(true)
		sauvegarder_quiz()
	}
	
	accueil_quiz(id_quiz,preview_mode)	

}

function get_current_question(){
	return recuperer("current_question") ? Number(recuperer("current_question")) : -1
}

function prev_question(){
	//console.log("PRECEDENT")
	var mon_index = Math.max(-1,get_current_question()-1) 
	go_to_question(mon_index)


}

function btn_terminer(){

	var res = quiz_mode_lecture() ? "Terminer la relecture" : "Tout envoyer et terminer"
	return res
}

async function next_question(nb_questions){

	//if finished
	if(element_DOM("bouton_suivant").innerHTML === btn_terminer()){		
		var retour = await submit_quiz()
		if(retour) accueil_quiz(get_current_quiz())
	}


	//console.log("SUIVANT")
	var mon_index = Math.min(nb_questions,get_current_question()+1) 
	go_to_question(mon_index,nb_questions)


	
}

async function accueil_quiz(id_quiz, preview_mode, proprietaire_initial){
	var proprietaire_devoir = recuperer("proprietaire_devoir")


	var proprietaire = proprietaire_initial ? proprietaire_initial :
						proprietaire_devoir ? proprietaire_devoir :
						recuperer("identifiant_courant")



	//tentatives anterieures
	var references = {
		id_fichier_sujetdevoir: id_quiz,
		proprietaire: proprietaire
	}

	//console.log(references)

	var mes_tentatives = await rechercher_avec_ces_references("Rendus",references)
	var tentative_en_cours = mes_tentatives.length > 0

	//console.log({tentative_en_cours:tentative_en_cours}) 

	if(tentative_en_cours){
		//console.log(mes_tentatives)
		ma_tentative = mes_tentatives[0]
		var date_debut_premiere_tentative = ma_tentative['date_debut']
	}else{
		ma_tentative = {}
	}


	var moimeme = proprietaire.toLowerCase() === recuperer("identifiant_courant")

	var pronom_utilisateur = !moimeme ? proprietaire.toUpperCase() : "Vous"
	var verbe_utilisateur = pronom_utilisateur === "Vous" ? "avez" : "a"
	var poss = pronom_utilisateur === "Vous" ? "Votre" : "Son"



	var infos_quiz = await rechercher("Quiz","id_quiz", id_quiz, "*")
	var nb_questions = await rechercher("Questions","id_quiz", id_quiz, "id_question")
	//console.log(infos_quiz)
	//console.log(nb_questions)


	if(infos_quiz.length > 0 && nb_questions.length > 0){

		infos_quiz = infos_quiz[0]
		nb_questions = nb_questions.length

		//&& pronom_utilisateur === "Vous"  commenté
		var bouton_edit = (preview_mode || $('[class="editer"]').length > 0) ? '<img onclick="creer_quiz()" src="'+ prefixe_image + '/img_edit.png" alt="MODIFIER" class="editer">' : ''


		vider_fenetre(infos_quiz['titre'] + bouton_edit,false,"sauvegarder_quiz()")
		initialiser_fenetre_quiz(true,nb_questions)

		//if(preview_mode) return go_to_question(0,nb_questions)


		var total_score = await rechercher_avec_ces_references("total_score",{"id_quiz": id_quiz}, ["score_question"])
		if(total_score) total_score = eval(total_score.map(e => e.score_question).join('+')) // total_score[0]['score_question']    
		


		var fin_quiz = ma_tentative['date_publication'] ? "<br>"+pronom_utilisateur+" l'"+verbe_utilisateur+" terminé le "  +  afficher_date(ma_tentative['date_publication']) : ""
		var points = ma_tentative['date_publication'] ? "<br><b class='sekooly-mode'> "+poss+" score: "  + await calculer_mon_score(ma_tentative['reponses'])  +  "/" + total_score + '</b>': ""
		var remarque_quiz = date_debut_premiere_tentative ? '<i style="color: #737373;"> '+pronom_utilisateur+' '+verbe_utilisateur+' déjà fait 1 tentative le ' + afficher_date(date_debut_premiere_tentative) + ' ' + fin_quiz + points +' </i>': ""

		element_DOM("remarque-quiz").innerHTML = remarque_quiz


		$("#contenu_etape_quiz").append(infos_quiz['description'] + '<br><br>Ce quiz comporte ' + nb_questions + ' question'+(nb_questions > 1 ? "s" : "")+', et noté sur '+ total_score +'.')

		$("#contenu_etape_quiz").addClass("resp_zone")

		stocker("current_question",-1)
		afficher_fenetre(true)

		element_DOM("bouton_suivant").innerText = ma_tentative['date_publication'] ? "Relecture" :
												 date_debut_premiere_tentative ? "Reprendre la tentative" : "Commencer"

		element_DOM("btn-previous").setAttribute("style","display: none;")
	}

	

	return true
}


async function calculer_mon_score(rpses){
	
	rspses_t = transform_rsp(rpses)
	my_id_resp = rspses_t[0]
	my_str_rsp = rspses_t[1]

	ref = {
		id_quiz:get_current_quiz()
	}

	//nom_table, champs_refs, liste_champs_a_chercher, orderby, mode_OR
	total_score = await rechercher_avec_ces_references("Reponses",ref, ['id_reponse','score','intitule_reponse'])
	//console.log({TOUT:total_score})

	//filter with my reponses
	var mon_score = total_score.filter(function(a_rsp){
		//console.log(a_rsp['intitule_reponse'] + " dans " , my_str_rsp)

		return my_id_resp.indexOf(a_rsp['id_reponse']) >= 0 || my_str_rsp.indexOf(a_rsp['intitule_reponse'].trim()) >= 0
	})

	//console.log({mon_score:mon_score})



	mon_score = mon_score.map(e => Number(e['score']))
	//console.log({mon_score:mon_score})

	//console.log({total_score:total_score})

	return eval(mon_score.join('+'))
} 

function transform_rsp(rpses){

	var my_id_resp = []
	var my_str_rsp = []

	if(typeof(rpses) === 'string') rpses = JSON.parse(rpses)

	$.each(rpses, (key,rsp) => {
	    //console.log(rsp)
	    //a string -> push it
	    if(typeof(rsp) === 'string'){
	    	my_str_rsp.push(rsp.trim())

	    //an array -> map to push only id_response
	    }else if(rsp){
	    	my_id_resp.push(rsp.map(e => Object.keys(e)).join(','))
	    }
	    
	})

	my_id_resp = my_id_resp.join(',').split(',')

	//console.log({my_id_resp:my_id_resp,my_str_rsp:my_str_rsp})
	return [my_id_resp, my_str_rsp]
}


function initialiser_tentative(){
	if(Object.keys(ma_tentative).length === 0){
		var id_devoir = creer_uuid()
		ma_tentative = {
			id_devoir : get_current_quiz()+suite_notif(),
			id_fichier : id_devoir,
			proprietaire: recuperer("identifiant_courant"),
			id_dossier_sujetdevoir: recuperer("dossier_chargé"),
			matiere_rendue: la_matiere_chargee('Matiere'),
			id_fichier_sujetdevoir: get_current_quiz(),
			date_debut: get_date_debut_quiz(),
			remarque: "",
			taille_fichier: 0,
			nom_fichier: "Quiz de " +  recuperer("identifiant_courant") + ".quiz",
			reponses: {}
		}


	}

	return ma_tentative
}

async function go_to_question(mon_index,nb_questions){


	save_current_submition()

	//console.log(mon_index)
	stocker("current_question",mon_index)
	chargement(true)
	await get_nth_question(mon_index,nb_questions)
	


	chargement(false)
}

function get_date_debut_quiz(){
	return recuperer("date_debut_quiz") ? recuperer("date_debut_quiz") : maintenant()
}




async function submit_quiz(sans_terminer){

	

	if(quiz_mode_lecture()) return true

	if(!sans_terminer) {

		if(quiz_mode_previz()){
			alert("Au clic de ce bouton, l'utilisateur aura le score de sa tentative, ainsi que la correction du quiz.\n⚠️Votre tentative n'est pas envoyée car vous êtes éditeur de ce quiz.")
			return true	
		} 

		var confirmation = confirm("⚠️Êtes-vous sûr de vouloir terminer le quiz ? Cette action est irréversible.")
		if(!confirmation) return false

		ma_tentative['date_publication'] = !quiz_mode_previz() ? await maintenant() : ""
	}


	if(Object.keys(ma_tentative.reponses).length > 0 ){

		var retour = await supabase
		  .from('Rendus')
		  .upsert(ma_tentative)

	  	//console.log(retour)

	  	if(ma_tentative['date_publication']){

			mes_donnees = JSON.parse(recuperer("mes_donnees"))
			id_quiz = get_current_quiz()

			var ma_notif_quiz = {
				"id_notif":id_quiz + suite_notif(),
				"Horodateur": ma_tentative['date_publication'],
				"Type_notif" : "devoir",
				"Id_source" : id_quiz,
				"Intitulé" : ma_tentative['nom_fichier'],
				"Identifiant_originaire": recuperer('identifiant_courant'),
				"Role_originaire": "Eleve",
				"Identifiant_derniere_modif" : recuperer('identifiant_courant'),
				'Role_derniere_modif' : "Eleve",
				'Classe' : mes_donnees['Classe'],
				'Classe_matiere' : "(" + mes_donnees['Classe'] + "|" + la_matiere_chargee("Matiere") + ")" ,
				'Id_classe_matiere' : recuperer("dossier_chargé"),
				'Date_derniere_modif' :  ma_tentative['date_publication'],
				'Cycle' : mes_donnees['Cycle']
			}


	  		var retour2 = await supabase
			  .from('Notifs')
			  .upsert(ma_notif_quiz)
	  	}

	}

  	return ma_tentative
}


//save what has been submitted
function save_current_submition(){

	var current_question = recuperer("current_question")
	var date_debut = get_date_debut_quiz()

	//console.log("\n\n\n")
	//console.log("****** QUIZ " + get_current_quiz() + " *******")
	//console.log("****** QUESTION NUMERO " + current_question + " *******")

	var rpse_qst = []

	//QCM
	if($(".option-rps").length > 0){

		$(".option-rps:checked").each((name,element) => {
		  //console.log(element.value + " : " +element.nextSibling.innerText)
		  rpse_qst.push({[element.value]: element.nextSibling.innerText})
		})

	//simple input
	}else{
		//console.log("0" + " : " + $(".rps_quiz").val())
		rpse_qst = $(".rps_quiz").val()
	}


	//enregistrer dans Tentatives
	var tmp_quiz_rpse = {}
	tmp_quiz_rpse[current_question] = rpse_qst

	initialiser_tentative() // si besoin
	if(!ma_tentative.reponses) ma_tentative.reponses = {}
	ma_tentative.reponses[current_question] = rpse_qst

	submit_quiz(true)

	//console.log(ma_tentative)
	return ma_tentative

}



function reference_question(mon_index, contenu_ref, nb_questions_str){
	var index_interne = contenu_ref ? contenu_ref : mon_index+1
	var nb_questions = nb_questions_str ? "," +nb_questions_str : ""
	return '<a ref="'+mon_index+'"    onclick="go_to_question('+mon_index+nb_questions+')"><span>[ '+index_interne+' ]</span></a> '
}



async function get_nth_question(position_question,nb_questions){


	//console.log(position_question)
	//console.log(nb_questions)

	if(position_question < 0){		
		return accueil_quiz(get_current_quiz())
	}else{

		

		element_DOM("bouton_suivant").innerText = "Suivant"

		element_DOM("btn-previous").setAttribute("style","")

		//bas de page SI pas encore existant
		if(nb_questions){

			element_DOM("remarque-quiz").innerHTML =  reference_question("-1",'Accueil',nb_questions)

			//console.log({nb_questions:nb_questions})
			for (var i = 0 ; i < nb_questions; i++) {
				element_DOM("remarque-quiz").innerHTML += reference_question(i)
			}

			element_DOM("remarque-quiz").innerHTML +=  reference_question(nb_questions,'Finaliser',nb_questions)

		}



	}


	var champs_refs = {
		"id_quiz" : get_current_quiz(),
		"position_question" : position_question
	}
	var datas = await rechercher_avec_ces_references("Questions", champs_refs)

	if(datas.length > 0){
		//console.log(datas)
		datas = datas[0]
		var id_question = datas['id_question']
		

		delete champs_refs['position_question'] 
		champs_refs['id_question'] = id_question

		var scoring = await rechercher_avec_ces_references("total_score", champs_refs)

		//console.log(scoring)
		if(!scoring) return afficher_alerte("Erreur de connexion, merci de réessayer plus tard.")

		var nb_questions_ok = scoring[0]['nb_questions_ok']
		var score_question = scoring[0]['score_question']

		
		//console.log("on va chercher le nb de reponses")
		var nb_reponses_possibles = await rechercher_avec_ces_references("Reponses", champs_refs, ["id_reponse"])
		//console.log("on a nb_reponses_possibles: ")
		nb_reponses_possibles = nb_reponses_possibles.length
		//console.log(nb_reponses_possibles)
		

		var liste_champs_utiles = nb_reponses_possibles === 1 ? ["id_quiz","id_question","id_reponse"] : ["id_quiz","id_question","id_reponse","intitule_reponse"]
		if(quiz_mode_lecture()) liste_champs_utiles = ['*']
		var rsp = await rechercher_avec_ces_references("Reponses", champs_refs, liste_champs_utiles, "position_reponse.asc")
		
		if(rsp){

			//count rsp
			var nb_reponses_possibles = rsp.length

			if(typeof(ma_tentative.reponses) === 'string') ma_tentative.reponses = JSON.parse(ma_tentative.reponses)

			var valeurs_par_defaut =  ma_tentative.reponses ? ma_tentative.reponses[position_question] : null
			//si 1 réponse possible -> ma_tentative.reponses[position_question]
			//sinon -> ma_tentative.reponses[position_question]

			$("#resp_zone").remove()
			var resp = resp_zone(id_question, rsp, nb_reponses_possibles,nb_questions_ok, valeurs_par_defaut)
			$(resp).insertBefore(element_DOM("btn-quiz"))
			element_DOM("contenu_etape_quiz").innerHTML = datas['intitule_question']
			element_DOM("contenu_etape_quiz").innerHTML += "<br>(" + score_question + " point"+(score_question > 1 ? "s" : "")+")"


		}
		


	}else{



		//Plus de question : montrer le résumé de mes réponses
		element_DOM("contenu_etape_quiz").innerHTML = quiz_mode_lecture() ? "Retrouvez ci-dessous le résumé de votre tentative." : 'Vous êtes sur le point de terminer le quiz.<br>Retrouvez ci-dessous le résumé de votre tentative.'
		element_DOM("resp_zone").innerHTML = resume_tentative_quiz(nb_questions)
	} 



	$("#contenu_etape_quiz").removeClass("resp_zone")
	$("span").removeClass("sekooly-mode")
	if($("a[ref='"+position_question+"']")[0]) $("a[ref='"+position_question+"']")[0].children[0].className = "sekooly-mode"



	if(position_question === nb_questions) element_DOM("bouton_suivant").innerText = btn_terminer()

	return datas
}

function resume_tentative_quiz(nb_questions){

	//console.log(nb_questions)

	var id_quiz = get_current_quiz()
	var res = ""
	var element = ""



	//pour chaque reponse de la tentative (entre 0 et nb_questions-1)
	for (var i = 0; i<nb_questions;i++) {

		if(ma_tentative.reponses){

			element = typeof(ma_tentative.reponses[i]) === "string" ?  ma_tentative.reponses[i] :
						typeof(ma_tentative.reponses[i]) === "object" ? JSON.stringify(ma_tentative.reponses[i]) : ""	
		}
		
		if(element === "[]") element = []

		//console.log(element + " de taille " + element.length)	
		var remarque_element = "<rouge>❌ Aucune réponse enregistrée</rouge>"
		if(element){
			if(element.length > 0) remarque_element = "<bleu>☑️ Réponse enregistrée</bleu>"
		}


		res += "<div onclick=\"go_to_question("+i+")\" class='resume'><br><a>Question n°"+(i+1)+"</a>: " + remarque_element + "</div>"
	}

	return res
}

function resp_zone(id_question, rsp, nb_reponses_possibles,nb_questions_ok, valeurs_par_defaut){

	var activation = ma_tentative['date_publication'] ? ' disabled  readonly="readonly" ' : ""
	var score_total = 0
	var phrase_score = ""
	var score_rpse = ""
	var remarque_rpse = ""
	var pronom_et_verbe = "Vous avez eu "

	if(recuperer("proprietaire_devoir") ){
		pronom_et_verbe = recuperer("proprietaire_devoir") === recuperer("identifiant_courant") ? "Vous avez eu " : recuperer("proprietaire_devoir").toUpperCase() + " a eu "	
	}
	

	//nb_reponses_possibles = 1: simple input
	if(nb_reponses_possibles === 1){

		//console.log(rsp)

		var val = valeurs_par_defaut ? 'value="' + valeurs_par_defaut + '"' : ""

		var est_la_bonne_reponse = rsp[0]['intitule_reponse'] ? valeurs_par_defaut.trim() === rsp[0]['intitule_reponse'].trim()  : ""
		var remarque_rpse =  est_la_bonne_reponse && rsp[0]['remarque_correction'] ?  rsp[0]['remarque_correction'] :
								!est_la_bonne_reponse && rsp[0]['intitule_reponse'] ? "<rouge class='remarque_correction'>❌Mauvaise réponse. La réponse était: <b>" + rsp[0]['intitule_reponse'] +"</b></rouge>" : ""
		

		score_rpse = !rsp[0]['intitule_reponse'] ? "" :
					est_la_bonne_reponse && rsp[0]['score'] ? (rsp[0]['score'] > 0 ? "+" +rsp[0]['score'] : rsp[0]['score']) :
					!est_la_bonne_reponse ? 0 :	""

		phrase_score = rsp[0]['score'] ? pronom_et_verbe + score_rpse + " points pour cette question." : ""

		return `<form id="resp_zone" class="resp_zone" style="text-align: center;"><input `+val+`     class="rps_quiz"  id_question="`+id_question+`"  name="qst`+id_question+`"  id="response`+rsp[0]['id_reponse']+`" placeholder="Votre réponse..."   `+activation+`  type="text" name="rsp'+id_question+'"> <div>`+remarque_rpse + `  <span class="points">`+ score_rpse+`</span></div>  <div class="points" id="rmq'+id_question+'"> `+phrase_score+` </div>   </form>`


	//nb_reponses_possibles > 1:
	}else{
		
		//nb_questions_ok = 1: radio
		//nb_questions_ok > 1: checkbox
		var type_input = nb_questions_ok === 1 ? "radio" : "checkbox"
		var res = '<form id="resp_zone" class="resp_zone">'
		var liste_id_reponses_choisies = ","

		//si des valeurs par defaut
		if(valeurs_par_defaut){
			//liste id reponses choisies
			//console.log(valeurs_par_defaut)
			liste_id_reponses_choisies = typeof(valeurs_par_defaut) !== "string" ? ","+valeurs_par_defaut.map(e => Object.keys(e)).join(',')+"," : valeurs_par_defaut

		}



		rsp.forEach((une_rsp) => {


			est_coché = ""
			if(valeurs_par_defaut){

				/*
				console.log('\n\n\n')							
				console.log("*******debut********")
				console.log({
					une_rsp_id_reponse: une_rsp['id_reponse'],
					valeurs_par_defaut: valeurs_par_defaut,
					liste_id_reponses_choisies: liste_id_reponses_choisies
				})
				*/
					
				est_coché = liste_id_reponses_choisies.includes(","+une_rsp['id_reponse']+",") ? "  checked  " : ""


				phrase_reponse_vraie_non_cochee = type_input === "checkbox" ? "<rouge class='remarque_correction'>✅Cette réponse était aussi vraie.</rouge>" : "<rouge class='remarque_correction'>✅Celle-ci était la bonne réponse.</rouge>"


				remarque_rpse = !une_rsp['score'] ? "" : 
							une_rsp['score'] > 0 && est_coché ? une_rsp['remarque_correction'] :
							une_rsp['score'] <= 0 && est_coché ?  une_rsp['remarque_correction'] :
							une_rsp['score'] > 0 && !est_coché ?  phrase_reponse_vraie_non_cochee :
							""


				signe = une_rsp['score'] >= 0 ? "+" : ""				
				score_rpse = une_rsp['score'] ? signe + une_rsp['score'] : ""

				score_total = une_rsp['score'] && est_coché ? score_total + Number(une_rsp['score']) : score_total
				phrase_score = une_rsp['score'] ? pronom_et_verbe + score_total + " points pour cette question." : ""
			} 

			
			/*
			console.log({[une_rsp['id_reponse']]: est_coché})
			console.log("*******fin*******")
			*/
			


			res += `
				<div>
					<input class="option-rps" type="`+type_input+`"     `+activation+`     id_question="`+id_question+`"  `+est_coché+` name="qst`+id_question+`"  value="`+une_rsp['id_reponse']+`" id="response`+une_rsp['id_reponse']+`" ><label class="label-check" for="response`+une_rsp['id_reponse']+`">`+une_rsp['intitule_reponse']+`</label>
					<span>`+remarque_rpse + `  <span class="points">`+ score_rpse+`</span></span>
				</div>
			`
		})

		res += ' <div class="points" id="rmq'+id_question+'"> '+phrase_score+' </div>    </form>'
		return res
	}

}

function nouvelle_question(donnees_question,donnees_reponses){
	var formulaire = $("#quiz-form").append(une_question_quiz(donnees_question))
	var la_nouvelle_question = formulaire[0].lastElementChild



	$("#quiz-form").sortable({

	    update: function mettre_a_jour_position_questions() {

	    	var liste_des_questions = []

	    	//récupérer toutes les questions 
	    	//mettre à jour toutes les positions
	    	$(".une_question_quiz.ui-sortable-handle").each(function(position_finale,element){

				nouvelle_position_question_drag = position_finale+1
				//console.log(element.getAttribute('name'))
				//console.log({[element.name] : nouvelle_position_question_drag})
				$(".id_question[value='"+element.getAttribute('name')+"']")[0].value = nouvelle_position_question_drag

			})
	    }
	})


	//si on a des données de la question: on pré-remplit
	if(donnees_question){
		la_nouvelle_question.querySelector("[name='type_question']").innerText = donnees_question['type_question']
		la_nouvelle_question.querySelector("[name='intitule_question']").innerText = donnees_question['intitule_question']
	}


	//ajouter automatiquement une 1ère réponse SSI pas de données questions
	//console.log(la_nouvelle_question)	
	if(!donnees_reponses){
		add_response(la_nouvelle_question.id)	
	}else{

		//afficher les réponses déjà pré enregistrées
		donnees_reponses.forEach((une_reponse) => {
			add_response(une_reponse['id_question'], une_reponse)	
		})


	}
}

function une_question_quiz(donnees_question){



	var nouvel_id_question = donnees_question ? donnees_question['id_question'] : $("[name='intitule_question']").length+1
	return `
	<div class="une_question_quiz" id="`+ nouvel_id_question +`"   name="`+ nouvel_id_question +`" >
		<input type="text" value="`+nouvel_id_question+`" name="id_question" class="id_question">
		<div><rouge class="mini-image" style="font-size: 12px;" onclick="help_quiz_resp()">Besoin d'aide?</rouge></div>
		<div name="type_question" id="type_question`+nouvel_id_question+`"></div>
		<textarea id="intitule_question" name="intitule_question" type="text" placeholder="Intitulé de la question..."></textarea>
		<div class="top-qstn">
			<rouge class="foot-element" onclick="supprimer_question(`+nouvel_id_question+`)"><img src="`+ prefixe_image + `/img_trash.png" alt="SUPPRIMER" class="small-icon trash"></rouge>			
	    </div>
	    <div class="reponses_possibles" name="reponses_possibles`+nouvel_id_question+`"></div>
    	<div class="foot-qst" style="font-size: 15px;">
		  <bleu class="foot-element" onclick="add_response(`+nouvel_id_question+`)">Ajouter une réponse possible</bleu>
		</div>
	</div>
	`
}

async function supprimer_question(id_question){


	//supprimer toutes les réponses liées
	//PUIS supprimer la question
	$("[name='reponses_possibles"+id_question+"'] > .une_reponse_possible > [alt='SUPPRIMER'] ").each((index,element) => {
		//console.log(element)
		delete_resp(element, true)
	})

	var id_quiz = get_current_quiz()
	var references = {"id_quiz":id_quiz,"id_question":id_question}
	retour = await supprimer_avec_ces_references("Questions", references)
	//console.log(retour)

	$('.une_question_quiz[id="'+id_question+'"]').remove()
}


//supprimer une reponse possible 
async function delete_resp(ceci, forcing){
	//console.log(ceci)
	//console.log(ceci.parentNode)

	var la_reponse_possible = ceci.parentNode.parentNode
	//console.log(la_reponse_possible)

	var pas_la_seule_reponse = la_reponse_possible.children.length > 1
	if(pas_la_seule_reponse || forcing){

		var id_quiz = get_current_quiz()
		var id_question = la_reponse_possible.parentNode.id
		var id_reponse = ceci.parentNode.id
		var references = {"id_quiz":id_quiz,"id_question":id_question, "id_reponse":id_reponse}
		//console.log(references)
		retour = await supprimer_avec_ces_references("Reponses", references)
		//console.log(retour)


		ceci.parentNode.remove()	
		mettre_type_question(la_reponse_possible.parentNode.id)
		return true

	}else{
		alert("Vous devez donner au moins une réponse à la question.")
		return false
	}
	
}

//ajouter une reponse possible à la question
function add_response(id_question,donnees_reponses){

	var les_reponses_possibles = $("[name='reponses_possibles" + id_question + "']").append(une_reponse_possible(donnees_reponses))
	var la_reponse = les_reponses_possibles[0].lastElementChild

	$("[name='reponses_possibles" + id_question + "']").sortable({

	    update: function mettre_a_jour_position_reponses() {

	    	var liste_des_reponses = []

	    	//récupérer toutes les reponses
	    	//mettre à jour toutes les positions
	    	$(".une_reponse_possible.ui-sortable-handle").each(function(position_finale,element){

				nouvelle_position_rps_drag = position_finale+1
				//console.log({[element.id] : nouvelle_position_rps_drag})
				

			})
	    }
	})


	mettre_type_question(id_question)
	

	//au changement de la note:
	$("[name=note_globale]").off("change")
	$("[name=note_globale]").on("change",function(e){
		valeur = Number(e.target.value)
		//si positif: vert		
		//si negatif: rouge	
		e.target.style.color = valeur < 0 ? "red" :
								valeur > 0 ? "green" : ""


		var id_question = e.target.parentNode.parentNode.parentNode.id

		//console.log(id_question)
		mettre_type_question(id_question)
		remarque_par_defaut(e.target)
	})

	//on met direct la bonne remarque
	$("[name=note_globale]").change()



	//on met les éléments de réponses si ça existe
	if(donnees_reponses){
		//console.log(la_reponse)
		la_reponse.querySelector("[name='reponse']").value = donnees_reponses['intitule_reponse']
		//la_reponse.querySelector("[name='note_globale']").value = donnees_reponses['score']
		la_reponse.querySelector(".remarque_correction").outerHTML = donnees_reponses['remarque_correction']
	} 
	
}

function mettre_type_question(id_question){

	//console.log(id_question)
	
	//type_question
	var el_type_question = element_DOM("type_question"+id_question)
	var points_selector = $(".une_question_quiz#"+id_question+" > .reponses_possibles > .une_reponse_possible > [name='note_globale']")
	//console.log(type_question)

	//si une seule réponse: saisie libre
	var type_question = "Question en saisie libre"

	
	var responses_wrapper = $("[name='reponses_possibles"+id_question+"']")
	if(responses_wrapper.length ===0 ) return true

	responses_wrapper = responses_wrapper[0]
	//console.log(responses_wrapper)
	var nb_reponses_possibles = responses_wrapper.children.length
	//console.log({nb_reponses_possibles: nb_reponses_possibles})


	//sinon
	if(nb_reponses_possibles > 1){


		//si 1 seule réponse juste: choix unique
		type_question = "Question à choix unique"


		//sinon: choix multiple
		var nb_reponses_justes = points_selector.filter(function() {
		    return Number($(this).val()) > 0
		}).length
		//console.log({nb_reponses_justes: nb_reponses_justes})

		if(nb_reponses_justes > 1){
			type_question = "Question à choix multiple"	
		}
		


	}


	//score total 
	points_question = 0;
	points_selector.each(function() {
	    valeur = Number($(this).val());
		if(valeur > 0) points_question += valeur
	})

	var retour_final = type_question + " sur " + points_question.toFixed(2) + " points "
	if(el_type_question) el_type_question.innerText = retour_final

	mettre_score_total(true)


	return retour_final

}


function mettre_score_total(oui){
	var total_score = 0

	$("[name='note_globale']").each((e,element) => {
		var score = Number(element.value)
		//console.log(score)
		if(score > 0) total_score += score
	})

	element_DOM("remarque-quiz").innerText = oui ? "Votre quiz est noté sur " + total_score : ""

	return total_score
}



function une_reponse_possible(donnees_reponses){
	var prochain_id = donnees_reponses ? donnees_reponses['id_reponse'] : creer_uuid() //$(".une_reponse_possible").length+1
	var editable = quiz_mode_lecture() ? "" : ' contenteditable="true" onclick="focus_edit(this)"'

	//console.log({prochain_id:prochain_id})
	var valeur_score = !donnees_reponses ? "0" : Number(donnees_reponses['score']).toFixed(2)
	return 	`<span class="une_reponse_possible" id="`+prochain_id+`">
    <input name="reponse" style="width: 55%;" placeholder="Réponse possible et le SCORE de la réponse (liste déroulante)...">`+liste_notes_possibles(true,valeur_score,"note_globale") +`
    <img class="small-icon trash" alt="SUPPRIMER" src="`+ prefixe_image + `/img_trash.png" onclick="delete_resp(this)">
    <br>
    <bleu class="mini-image remarque_correction wrong" `+editable+` >Remarque correction</bleu>
  </span>
  `
}

function focus_edit(ceci){
	setCaret(ceci)
}

function setCaret(el) {
    
	el.focus()
}


function remarque_par_defaut(ceci){
	
	//console.log(ceci)
	var element_a_maj =  ceci.parentNode.querySelector("bleu")
	var valeur_remarque_actuelle = element_a_maj.innerHTML
	//console.log(valeur_remarque_actuelle)

	//si pas de remarque
	if(valeur_remarque_actuelle.length === 0 || valeur_remarque_actuelle === valeur_remarque_initiale() || valeur_remarque_actuelle === valeur_remarque_correct() || valeur_remarque_actuelle === valeur_remarque_incorrect() ){

		var est_positif = Number(ceci.value) > 0 
		//console.log(est_positif)

		//si positif : ✅ Votre réponse est correcte.
		//si <= 0 : ❌ Votre réponse est incorrecte.
		element_a_maj.innerHTML = est_positif ? valeur_remarque_correct() : valeur_remarque_incorrect()
		

	}

	element_a_maj.style.color = ceci.style.color
}

function remarque_correction(ceci){
	//console.log(ceci)
	if(ceci.innerText.length === 0) ceci.innerText = valeur_remarque_initiale()
}

function valeur_remarque_correct(){
	return "✅ Votre réponse est correcte." 
}

function valeur_remarque_incorrect(){
	return "❌ Votre réponse est incorrecte."
}

function valeur_remarque_initiale(){
	return "Remarque correction"
}


function help_quiz_resp(){

	if($(".une_reponse_possible").length > 0){		
		var alerte = 'Le type de question se mettra à jour en fonction du nombre de réponses possibles ET du nombre de réponses justes.\n\n\n'
		alerte += '• Score positif=bonne réponse\n• Score nul=mauvaise réponse\n• Score négatif=malus.\n\n\nLa remarque de correction s\'affiche lorsque l\'utilisateur choisit cette réponse, et peut se personnaliser au clic.'		

		alert(alerte)	
	}else{
		alert("Ajoutez d'abord une réponse possible, puis recliquez à nouveau ici.")
	}
	
}



function get_current_quiz(){
	return recuperer("fichier_ouvert") ? recuperer("fichier_ouvert") :
			recuperer("tmp_quiz") ? JSON.parse(recuperer("tmp_quiz"))['id_quiz'] : null
}


function go_to_step(step_number,prev_step){

	//avant chaque prochaine étape : ON STOCK EN TEMPORAIRE
	//si on passe à l'étape 1 OU 2 : on stock un id_quiz
	//sinon : on connait déjà
	if(!recuperer("tmp_quiz")){
		resultat = {"id_quiz" : creer_uuid()}
		stocker("tmp_quiz",JSON.stringify(resultat))
	}

	//si etape 2 : traitement spécial de resultat
	if(prev_step === 2){
		saisie_des_questions_responses()
	}else if(prev_step === 1){
		//verifier que tout est rempli
		if(!formulaire_rempli_ok("quiz-form")){
			element_DOM("etape-quiz").innerText = prev_step
			return alert("Vous devez remplir tous les champs avant de continuer.")
		}
		resultat = objectifyForm("quiz-form")	
	}
	

	


	resultat['id_quiz'] = JSON.parse(recuperer("tmp_quiz"))['id_quiz']
	resultat['id_classe_matiere'] = recuperer("dossier_chargé")
	resultat['proprietaire'] = recuperer("identifiant_courant")

	
	stocker_quiz_local(resultat)
	//console.log(step_number)
	//console.log(prev_step)

	if(step_number === 1){
		init_creation_quiz()
	}if(step_number === prev_step){
		finaliser_edition_quiz()
	}else if(step_number === 2){
		crud_questions()
	} 


}

function finaliser_edition_quiz(){
	var confirmation = confirm("Êtes-vous sûr d'avoir bien édité les questions-réponses du quiz?")
	if(confirmation) dernieres_modifs_quiz()
}


//étape 3: les denieres modifs
async function dernieres_modifs_quiz(){

	var id_quiz = get_current_quiz()
	var nouvel_item = {
		id_quiz: id_quiz,
		id_classe_matiere: recuperer("dossier_chargé"),
		proprietaire: recuperer("identifiant_courant"),
		date_publication: maintenant()
	}
	//console.log(nouvel_item)
	await stocker_quiz_local(nouvel_item)

	$("#sauvegarder").remove()


	//console.log(id_quiz)
	$("#bye_prev").one('click',function(){
		//console.log(id_quiz)
		$("#categorie_choisie").change()
		element_DOM("liste_quiz").value  = id_quiz
		effacer("tmp_quiz")


	})

	element_DOM("setup").innerText = "Vous pouvez fermer cette fenêtre."

	await sauvegarde_mode_edit()
	
}


function avec_sauvegarde(function_whole_name){
	if(function_whole_name){
		$("#titre_fenetre").append('<img id="sauvegarder" src="'+ prefixe_image + '/img_save.png" alt="💾" onclick="'+function_whole_name+'" class="icon-save">')	
	}else{
		$("#sauvegarder").remove()
	}
}

function next_step_quiz(){
	sauvegarder_quiz(true)
	var prev_step = Number(element_DOM("etape-quiz").innerText)
	element_DOM("etape-quiz").innerText++
	if(element_DOM("etape-quiz").innerText > 2) element_DOM("etape-quiz").innerText = 2
	var step_number = Number(element_DOM("etape-quiz").innerText)
	go_to_step(step_number,prev_step)
}

function prev_step_quiz(){
	sauvegarder_quiz(true)
	var prev_step = Number(element_DOM("etape-quiz").innerText)
	element_DOM("etape-quiz").innerText--
	if(element_DOM("etape-quiz").innerText < 1) element_DOM("etape-quiz").innerText = 1
	var step_number = Number(element_DOM("etape-quiz").innerText)
	go_to_step(step_number,prev_step)
}


function stocker_quiz_local(nouvel_item){

	//alert("dans la fonction")
	
	var tmp_quiz = recuperer("tmp_quiz")
	if(tmp_quiz && JSON.parse(tmp_quiz)["id_quiz"] === nouvel_item["id_quiz"]){	

		//console.log("c'est le bon UUID")
		Object.keys(nouvel_item).forEach(e => {
			//console.log(nouvel_item[e])	
			modifier_donnee_locale("tmp_quiz", "id_quiz", nouvel_item["id_quiz"], e, nouvel_item[e], false)
		})		


	}else{

		//console.log("PAS le bon UUID")
		effacer("tmp_quiz")
		stocker("tmp_quiz", JSON.stringify(nouvel_item))

	}

	return recuperer("tmp_quiz")

}

function quiz_mode_run(){
	return $("[onclick='next_step_quiz()']").length === 0
}

function quiz_mode_lecture(){
	return quiz_mode_run() && ma_tentative['date_publication'] ? true : false
}

function quiz_mode_previz(){
	return $("[onclick='creer_quiz()']").length > 0
}

async function sauvegarder_quiz(sans_afficher){

	var retour =  ""
	var texte_a_afficher = ""

	//mode lecture
	if(quiz_mode_lecture()){

		texte_a_afficher = "Vous ne pouvez pas modifier cette tentative."
		retour = ma_tentative

	//run mode	
	}else if(quiz_mode_run()){

		texte_a_afficher =  ma_tentative.reponses && Object.keys(ma_tentative.reponses).length > 0  ? "Votre tentative a bien été sauvegardée." : ""
		save_current_submition()
		//submit_quiz(true)
		retour = ma_tentative

	//edit mode
	}else {
		texte_a_afficher = await sauvegarde_mode_edit()
	}



	if(texte_a_afficher && !sans_afficher) afficher_alerte(texte_a_afficher)

	return retour
}

async function sauvegarde_mode_edit(){

	//alert("sauvegarde en cours...")

	texte_a_afficher = "Votre quiz a bien été sauvegardé."


	if($(".une_question_quiz").length > 0){
		//alert("on a une question quiz")
		saisie_des_questions_responses()
	}else{
		//alert("mode tableau quiz")
		texte_a_afficher = await sauvegarder_le_quiz_dans_la_table_quiz()
	}

	return texte_a_afficher

}

async function sauvegarder_le_quiz_dans_la_table_quiz(){


	if(recuperer("tmp_quiz")){
		try{			
			var donnees_locales = JSON.parse(recuperer("tmp_quiz"))
			//console.log(donnees_locales)
			await stocker_quiz_server(donnees_locales) // actualiser("Quiz", "id_quiz", 0, donnees_locales)
			retour = donnees_locales
			//console.log(retour)
			//effacer("tmp_quiz") // libérer la mémoire quand c'est envoyé sur le serveur ? non
		}catch(e){
			texte_a_afficher = "Votre quiz n'a PAS été sauvegardé: merci de réessayer ou de vérifier votre connexion internet."
		}
	}else{
		texte_a_afficher = "Aucune donnée de quiz à sauvegarder: appuyez sur suivant avant d'enregistrer."
	}

	return texte_a_afficher
}

function stocker_quiz_server(donnees_locales){
	return supabase
	  .from('Quiz')
	  .upsert(donnees_locales)
}


function stocker_element_server(nom_table,donnees_locales){
	return supabase
	  .from(nom_table)
	  .upsert(donnees_locales)
}








async function publier_quiz(id_quiz, nom_fichier){

	date_heure_actuelle = maintenant()
	mes_donnees = JSON.parse(recuperer('mes_donnees'))
	//mon_role = recuperer('mon_type').includes("Administration") ? mes_donnees['Role'] : recuperer('mon_type').replace("s","")
	la_classe = recuperer('mon_type') === "Eleves" ? mes_donnees['Classe'] : la_matiere_chargee("Classe") 
	la_matiere = recuperer('mon_type') === "Eleves" ? $("#accueil_utilisateur")[0].innerText :  la_matiere_chargee("Matiere")


	//stocker la donnée dans la BDD
	nouveau_fichier = {"date_publication": date_heure_actuelle,
		"id_fichier": id_quiz,
		"nom_fichier": nom_fichier,
		"id_dossier": recuperer('dossier_chargé'),
		"proprietaire": recuperer('identifiant_courant'),
		"categorie_fichier": "Quiz",
		"date_effet": element_DOM("date_effet_fichier").value,
		"est_telechargeable" : "non",

		"taille_fichier" : 0,


		"destinataire_par_page" : null,
		"periode_bulletin" : null

	}


	try{



		//console.log(nouveau_fichier)
		retour1 = await ajouter_un_element("Fichiers",nouveau_fichier, id_quiz)


		id_notif = id_quiz+suite_notif()
		nouvelle_notif = {
			"id_notif" : id_notif,
			"Horodateur": date_heure_actuelle,
			"Type_notif" : "fichier",
			"Id_source" : id_quiz,
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
		retour2 = await ajouter_un_element("Notifs",nouvelle_notif, id_notif)



		afficher_alerte("Votre quiz a bien été publié.",true)

		

	}catch(e){
		console.error(e)
		afficher_alerte("Erreur de publication du quiz: vérifiez s'il n'est pas déjà publié.")

	}


	chargement(false)
	
}



























function au_clic(selector, callback){
	$(selector).off("click")
	$(selector).on("click",function(event){
		eval(callback)
	})
}

function au_changement(selector, callback){
	$(selector).off("change")
	$(selector).on("change",function(event){
		eval(callback)
	})
}

function au_clic_droit(selector, callback){
	$(selector).off("contextmenu")
	$(selector).on("contextmenu",function(event){
		eval(callback)
	})
}





function clic_utilisateur(id_utilisateur){
	
	//infos de la personne (todo)
	//mon_detail(nom_detail,valeur_detail,mdp)



	creer_mini_popup(id_utilisateur.toUpperCase(),"","Contacter","alert('Vous allez le contacter!')",false,false,false,false,"15","truc")
}


function ecrire_a(id_utilisateur){	

	$("#mini_popup").remove()

	ajouter_un_tout_nouveau_msg()
	$("#Destinataire").val(id_utilisateur)
	faire_autocompletion_input(null,'Destinataire')
	$("[onclick=\"choisir('Destinataire',this)\"]").click()
	afficher_fenetre(true)
}





/************************ VISIBILITY ******************************/

document.addEventListener('visibilitychange', () => {
  const state = document.visibilityState;
  const mon_statut = state === "hidden" ? "Absent" : "En ligne"
  envoyer_mon_statut(mon_statut)
});













/********************* NEW LOGO *************************/
function nouveau_logo(){

	//input file
	var elements_html = "<input type='file' accept='.png,.jpeg,.jpg,.bmp,.svg,.gif' id='nouveau_logo_etablissement'>"

	//créer un mini popup
	//bouton upload avec au_clic = upload_nouveau_logo()
	creer_mini_popup("Nouveau logo",elements_html,"Mettre en ligne","upload_nouveau_logo()")
	
}

async function upload_nouveau_logo(){
	chargement(true)

	var le_logo = element_DOM("nouveau_logo_etablissement").files[0]
	//forcément une image
	if(!le_logo.type.includes("image")) return afficher_alerte("Merci de choisir une image.")

	eval(get_resultat_brut("https://sekooly.com/assets/web/assets/jquery/contact.js"))


	try {
		upload_image_etablissement(le_logo)
		data_etablissement['nom_fichier_logo'] = le_logo.name
		await actualiser_info_etablissement()
		afficher_alerte("Nouveau logo "+nom_fichier_logo+" mis en ligne.")
		$("#mini_popup").remove()
		actualiser_parametre()

	}catch(e){
		afficher_alerte("Erreur de mise en ligne: vérifiez que vous êtes toujours connecté à internet.")
	}


	chargement(false)
}











/**************************** IMAGE SIGNATURE + PARAPHE **********************************/
function maj_paraphe(){
	nouvelle_image('paraphe_etablissement','paraphe_etablissement','paraphe')
	
}

function maj_tampon(){
	nouvelle_image('tampon_etablissement','tampon_etablissement','tampon')
}

function maj_signature(){
	nouvelle_image('signature_etablissement','signature_etablissement','signature')
	
}



function nouvelle_image(id_img,nom_champ_image_dans_data_etablissement,nom_image){

	//input file
	var elements_html = "<input type='file' accept='.png,.jpeg,.jpg,.bmp,.svg,.gif' id='"+id_img+"'>"

	//créer un mini popup
	//bouton upload avec au_clic = upload_nouveau_logo()
	creer_mini_popup("Nouvelle image de " + nom_image,elements_html,"Mettre en ligne","upload_une_image('"+id_img+"','"+nom_champ_image_dans_data_etablissement+"','"+nom_image+"')")
	
}


async function upload_une_image(id_img,nom_champ_image_dans_data_etablissement,nom_image){
	chargement(true)

	console.log({id_img})

	var mon_image = $("input#"+id_img)[0].files[0]

	//on a une image
	if(mon_image){

		//forcément une image
		if(!mon_image.type.includes("image")) return afficher_alerte("Merci de choisir une image.")

		eval(get_resultat_brut("https://sekooly.com/assets/web/assets/jquery/contact.js"))

		try{
			//récupérer l'ancienne image
			autorisations = recuperer_autorisations()



			upload_image_etablissement(mon_image)	

			data_etablissement['images'][nom_champ_image_dans_data_etablissement] = mon_image.name
			await actualiser_info_etablissement()
			afficher_alerte("Image de "+nom_image+" mise en ligne.")
			$("#mini_popup").remove()

			//actualiser au bout de 2 secondes
			setTimeout(actualiser_parametre, 2000)

		}catch(e){
			console.log("Erreur de mise en ligne: ",e)
			afficher_alerte("Erreur de mise en ligne: ",e)
		}
	


	}

	chargement(false)
}

// new : sujets d'examens
function voir_ccbac(){
	chargement(true)

	const param_ccbac = recuperer('mon_type').includes('Admin') ? '<span id="param_ccbac" title="Paramétrer" class="mini-image">⚙️</span>' : ""
	vider_fenetre('Sujets CCBAC <rouge class="mini-image" id="helper-ccbac">(?)</rouge>'+param_ccbac)
	au_clic("#helper-ccbac","afficher_aide_ccbac()")
	au_clic("#param_ccbac","parametrer_ccbac()")
	
	$('#fenetre').append(`
		<div class="previz"> 		
			<iframe onload="chargement(false);newTwitterDiv();this.style.visibility='visible'"; id="ccbacFrame" src="https://ccbac.fr/list.php"></iframe>
		<div>
	`)
	afficher_fenetre(true)

}

async function parametrer_ccbac(){

	const toutes_les_classes = await get_datas("Classes","commun_au_cycle=eq.non")
	const html_liste = '<div id="ccbac_list">' + toutes_les_classes.map(e => e['Classe']).map(c => {
		const checked = data_etablissement['classes_ccbac'].includes(c) ? '  checked  ' : ''
		return '<label for="ccbac_'+c+'"><input type="checkbox" id="ccbac_'+c+'" name="ccbac_'+c+'" value="'+c+'" '+checked+'>'+c+'</label><br>'
	}).join('') + '</div>'

	creer_mini_popup("Paramètres d'accès aux sujets CCBAC",html_liste,"Donner l'accès aux élèves des classes cochées","assigner_classes_sujets_ccbac()")
}

async function assigner_classes_sujets_ccbac(){
	
	afficher_alerte('Accès aux sujets CCBAC mis à jour avec succès.')

	const classes_ccbac = Array.from($('#ccbac_list input:checked')).map(e => e.value).join(';')
	data_etablissement['classes_ccbac'] = classes_ccbac

	await actualiser_info_etablissement()

	$('#mini_popup').remove()
}

function newTwitterDiv(){
	$('.previz').children('#twitterDiv').remove()
	$('.previz').prepend('<div id="twitterDiv"></div>')
}

function afficher_aide_ccbac(){
	alert(`• Recherchez ici des sujets d'examens (BAC) sur les matières qui vous intéressent;\n• Téléchargez les PDF associés;\n• Renommez-les sur votre appareil puis mettez-les en ligne sur Sekooly.`)
}



// NEW : bibliotheque
async function voir_biblio(forcing){

	chargement(true)

	$('#choix_popup').hide()
	$('#mini_popup').remove()
	effacerSession('ressource_ouverte')
	effacerSession('nom_ressource_ouverte')


	var urlScript = await chercher_lien_script(9)
	const API_BIBLIOTHEQUE = recuperer('API_BIBLIOTHEQUE')
	urlScript += '?API_BIBLIOTHEQUE='+ API_BIBLIOTHEQUE
	urlScript += '&_action=read' 

	const allRessources = recuperer('allRessources') && !forcing ? JSON.parse(recuperer('allRessources'))  : await fetch(urlScript)
						.then(response => response.json())
						.then(data => data)
	stocker('allRessources',JSON.stringify(allRessources))

	const titre = "Bibliothèque"
	vider_fenetre(titre)

	const hlKeyword = (html) => {
		const keyword = $('#rechercherRessource').val()

		if(html){

			html = html.toString()
			if(keyword && html.toLowerCase().includes(keyword.toLowerCase())){
				const finalHTML =  '<marker>'+html+'</marker>'
				return finalHTML
			}
		}else{
			html = ""
		}

		return html
	}


	const renderBiblio = (allRessources) => {

		const dossierParents = valeursUniquesDeCetteKey(allRessources,'Dossier parent').sort()
		$('#nombre_elements_ressources').html(allRessources.length)


		const biblio_filters = () => {
			const filtres_predefined = [{'6e':'6ème'},{'5e':'5ème'},{'4e':'4ème'},{'3e':'3ème'},{'ce1':'CE1'},{'ce2':'CE2'},{'cm1':'CM1'},{'cm2':'CM2'},{'cp':'CP'}]

			return filtres_predefined.map((f) => {
				const key = Object.keys(f)[0]
				const displayed_val = f[key]
				const filter_checked = (recupererSession('rechercherRessource') || "").includes(key) ? ' checked ': ""
				return `<input type="checkbox" id="${key}" name="${key}" onchange="update_filter_ressource(this.checked, '${key}')"  ${filter_checked} ><label for="${key}">${displayed_val}</label>`
			}).join('')
		}

		const biblioContent = () => {



			return dossierParents.map(function(dossier_parent){
				var folderFiles = allRessources.filter(e => e['Dossier parent'] === dossier_parent)

				folderFiles = folderFiles.sort((a,b) => (a['Nom fichier'] < b['Nom fichier']) ? -1 : ((a['Nom fichier'] > b['Nom fichier']) ? 1 : 0))
				const open = $('#expandRes:checked').length > 0 ? 'open=""' : ""

				return `<details class="onefolder" `+open+` >
					<summary>
						<strong><h2 class="folder-title">${hlKeyword(dossier_parent)}</h2></strong>
					</summary>
					<div class="ressources-wrap">
						${folderFiles.map(f => {
								const extension = f['Nom fichier'].split('.').pop()
								const tailleKO = (f["Taille fichier"]/1000).toFixed(2)
								const tailleMO = (f["Taille fichier"]/1000000).toFixed(2)
								const tailleAffichee = tailleKO <= 1000 ? tailleKO.toString() + ' Ko' : tailleMO.toString() + ' Mo'

								const test = false
								const target = test ? ' target="_blank" ' : ""
								const href = test ? ` href="https://docs.google.com/file/d/${f['ID fichier']}/preview" `: ""


								//visualiser(nom_fichier, id_fichier, nom_proprio_devoir, titre_initial, pas_de_telechargement, mode_extrait_png_canva, mode_extrait_png_div, callback_apres_render_fenetre)
								return `<a onclick="stocker_temp('ressource_ouverte', '${f['ID fichier']}');visualiser('${f['Nom fichier']}','${f['ID fichier']}',false,false,true,false,false,'ajouter_ressource_features(this)')" ${target} ${href} class="file-ressource" id="${f['ID fichier']}">
										<img width="141" loading="lazy" onerror="switchSource(this, '${extension}')" extension="${extension}" src="${lien_icone_ressource(f["Image fichier"], extension, true )}"><br/>
										` +
										

										`<strong class="sekooly-mode">${hlKeyword(f["Nom fichier"])}</strong>
										<i class="filesize">${tailleAffichee} (${hlKeyword(f["Taille fichier"]+' octets')})</i>
										`

										+'</a>'
							}).join('')
						}
					</div>
				</details>`


			}).join('')
		}

		//very first rendering
		if($('#conteneur_menu').length === 0){
			const valueExpandRes = recupererSession('expandRes') ? 'value="'+recupererSession('expandRes')+'"' : ""
			const valueRechercherRessource = recupererSession('rechercherRessource') ? 'value="'+recupererSession('rechercherRessource')+'"' : ""
			
			
			const htmlFiles = `<div id="conteneur_menu">
				<div id="menu_haut" class="menu_haut">

					<div id="biblio_filters" class="text-center">
						${biblio_filters()}
					</div>
					<div class="text-center">
						<input id="rechercherRessource" ${valueRechercherRessource} class="barre_recherche" name="rechercher" placeholder="Rechercher par mot(s)-clé(s)...">
					</div>
					<div class="text-center important-text"><span id="nombre_elements_ressources">0</span> éléments</div>
					<div class="text-center important-text">
						<input type="checkbox" onchange="expandAllRessources()" ${valueExpandRes} id="expandRes" name="expandRes" checked><label for="expandRes">Développer pour voir tous les fichiers</label>
					</div>
					<div class="text-center">
						<span><input type="checkbox" id="withPDF" name="withPDF" onchange="update_filter_ressource(this.checked, '.pdf')"><label for="withPDF">PDF uniquement</label></span>
						<span><input type="checkbox" id="withAudio" name="withAudio" onchange="update_filter_ressource(this.checked, '.mp3')"><label for="withAudio">Audio uniquement</label></span>
						
					</div>
				</div>
				<div class="menu_params_ressources">
					<div class="folder-ressource">

						${biblioContent()}

					</div>
				</div>
			</div>
			`
			$('#fenetre').append(htmlFiles)


			//on typing, re-render list
			$('#rechercherRessource').on('input',function(e){
				const  val = e.currentTarget.value
				//console.log(val)

				const filteredFiles = val ? allRessources.filter(e => {
					const keys_for_search = ['Nom fichier', 'Taille fichier', 'Dossier parent']
					var obj_init = {}
					keys_for_search.map(key_to_keep => {
						obj_init[key_to_keep] = e[key_to_keep]
					})

					//console.log({obj_init})
					const objString = JSON.stringify(obj_init)

					//multiple words => return key that contains at least one word
					const allSearchedWords = val.split(' ')
					const contained = allSearchedWords.map(oneword => {
						const res = oneword && objString.toLowerCase().includes(oneword.trim().toLowerCase())
						//if(res) console.log(val + ' VS ' + objString, res)
						return res || res.length === 0
					})

					//console.log({contained})
					return contained.filter(e => e===true).length === allSearchedWords.length
					
					
				}) : allRessources

				//console.log({allRessources})
				//console.log({filteredFiles})

				stockerSession('rechercherRessource',val)
				renderBiblio(filteredFiles)
			})

			//consider re-rendering if needed
			$('#expandRes').change()
			$('#rechercherRessource').trigger("input")
			$('#withPDF').change()
			$('#withAudio').change()

		//updating
		}else{
			//console.log('rerender with',{allRessources})
			$('.folder-ressource').html( biblioContent() )
			$('#biblio_filters').html( biblio_filters() )
		}




	}


	renderBiblio(allRessources)
	afficher_fenetre(true)

	chargement(false)
	return allRessources
	
}

function update_filter_ressource(boolean_addfilter, val){
	const current_query = $('#rechercherRessource').val()
	var final_query = ""

	if(boolean_addfilter && !current_query.includes(val)){
		final_query = (current_query + ' ' +val).trim()

	}else if(!boolean_addfilter){
		final_query = $('#rechercherRessource').val().replaceAll(val,'').trim()
	}

	$('#rechercherRessource').val(final_query)
	$('#rechercherRessource').trigger('input')
}



function btn_publier_ressource(absolute){
	return `<button onclick="publier_ressource()" class="sekooly-mode-background `+ (absolute ? "btn_publish_absolute" : "") +`">Publier dans une matière</button>`
}

function pages_extract_change(){
	//keep only numbers and commas
	if($("#num_pages_extract")[0]) $('#num_pages_extract').val($("#num_pages_extract").val().replace(/[^\d,-]/g, ''))


	if($("#num_pages_extract")[0] && $("#num_pages_extract").val().length > 0){
		$('#btn_voir_ressource').show()


	}else{
		$('#btn_voir_ressource').hide()
	}


}

function current_extension(){
	return $('#titre_fenetre').text().split('.').pop().toLowerCase()
}

function publier_ressource(){
	
	const extension = current_extension()

	//si mp3 => direct OK pour publier
	if(extension === 'mp3'){

	//si pdf => il faut choisir (ou pas) les pages à récupérer => todo
	}else if(extension === 'pdf' && $('#num_pages_extract').val()){
		return alert('PDF => extraction des pages en cours de développement.')
	}
	
	choix_classe_matiere_ressource()

}

function choix_classe_matiere_ressource(){
	les_matieres = JSON.parse(recuperer("mes_matieres"))
	classes_matieres = valeursUniquesDeCetteKey(les_matieres,'Classe_Matiere')
	classes_matieres.sort()


	elements_html = "Classe - Matière:<select id='classe_matiere_ressource'>"
	for (i = 0; i< classes_matieres.length;i++){
		const cl_ma = classes_matieres[i].replace('(','').replace(')','')
		const id_classe_matiere = les_matieres.find(e => e['Classe_Matiere'] === classes_matieres[i])['ID_URL']
		elements_html += '<option value="'+id_classe_matiere+'">'+ cl_ma.split('|')[0] + ' - ' + cl_ma.split('|')[1] +'</option>'
	}
	elements_html += "</select>"
	

	creer_mini_popup("<h2>Choisissez la classe matière où vous souhaitez publier</h2>",elements_html, "Publier la ressource","preparer_publication_ressource()")
	if(recuperer('dossier_chargé')) $('#classe_matiere_ressource').val(recuperer('dossier_chargé'))
}

function preparer_publication_ressource(){

	chargement(true)



	const ID_URL = $('#classe_matiere_ressource').val()
	const nom_classe_matiere = $('#classe_matiere_ressource option:selected').text()
	//alert('FONCTIONNALITE EN COURS DE DEVELOPPEMENT.\nCe bouton permettra de publier la ressource dans ' + nom_classe_matiere )

	stocker_temp('dossier_chargé',ID_URL)


	//ouvrir le dossier de la matiere
	chargement_a_larrivee()


	//garder la fenetre ouverte si depuis la bibliotheque
	if(!recuperer('republication')){
		afficher_fenetre(true)	

	//si republication d'un fichier => supprimer le mini pop up + mettre la meme categorie de fichier
	}else{
		$('#mini_popup').remove()
		$('#categorie_choisie').val(capitalizeFirstLetter(recuperer('categorie_ressource_ouverte')))
	}



	//forcément mode youtube => ne pas le montrer
	//$('#est_video_youtube').prop('checked', true);
	//$('#est_video_youtube').click()
	$('#est_video_youtube').prop('checked',true)
	$('#est_video_youtube').attr('disabled',true)
	switch_affichage_youtube()
	$('#label_lien_a_mettre_en_ligne').text('Republication')



	//titre par défaut ce qui est affiché
	const nom_fichier = recuperer('nom_ressource_ouverte') || $('#titre_fenetre').text()
	$('#nom_youtube').val(nom_fichier)
	console.log({nom_fichier})

	//lien  => celui sur drive directement
	const ID_FICHIER = recuperer('ressource_ouverte')
	const lien_fichier_drive = "https://drive.google.com/file/d/"+ID_FICHIER+"/view"
	$('#lien_youtube').val(lien_fichier_drive)
	console.log({nom_fichier})

	//afficher le bloc yt mais masquer le lien 
	$('#youtube').show()
	$('#block_yt_link').hide()

	//masquer le bouton
	$('#sekooly_ressources').hide()


	
	//mettre le popup créé en arrière
	if($('#mini_popup')[0]){

		console.log('z index 1/2...')
		$('#mini_popup')[0].style.zIndex = 3
		console.log('z index 2/2...')
		$('#choix_popup')[0].style.zIndex = 4
		console.log('z index done')
	}

	//masquer le fichier 
	$('#file').hide()



	//visible
	$("#choix_popup")[0].style.visibility = 'visible'
	$('#choix_popup').show()




	chargement(false)


}

function affichage_mini_popup_ajout_fichier_par_defaut(){
	//toujours afficher : coche video youtube DECOCHE et ACTIF
	$('#choix_youtube').prop('checked',false)
	$('#choix_youtube').show()
	$('#est_video_youtube').attr('disabled',false)

	//bloc spécial youtube => caché
	$('#youtube').hide()

	//afficher extrait manuel si pas de manuels dans la classe
	if($('#drive_manuels').children().length > 0){
		$('choix_extrait_manuel').show() 
	} else{
		$('choix_extrait_manuel').hide() 
	}

	//toujours afficher choix de fichier 
	$('#file').show()

}


function voir_extrait(){
	alert("FONCTIONNALITE EN COURS DE DEVELOPPEMENT.\nCe bouton permettra de voir l'extrait choisi en format PDF.")
}

function voir_original(){
	alert("Vous visualisez déjà l'original.")
}

function ajouter_ressource_features(ceci){

	const extension = current_extension()

	//bouton retour
	const btn_precedent_html = '<span id="fenetre-back" class="retourner_en_arriere" style="padding: 0;font-size: initial;">'+ btn_precedent('<< Revenir à la bibliotheque') + '</span>'
	$("#titre_fenetre").prepend(btn_precedent_html)
	au_clic('#fenetre-back','voir_biblio()')


	//rajouter numéros de pages + 3 boutons :
	const btnsTop = extension === 'pdf' ? `
	<div class="btn_wrapper_rsrc">
	  
		<input type="text" id="num_pages_extract" oninput="pages_extract_change()" class="num_pages_extract" placeholder="Numéros de pages à extraire séparés par une virgule ou un tiret (ex: 1-5,10,11 extrait les pages 1 à 5, avec la page 10 et 11)">

		<div>
			<span id="btn_voir_ressource">
				<button onclick="voir_extrait()" class="sekooly-mode">Voir l'extrait</button>
				<button onclick="voir_original()" >Voir l'original</button>
			</span>
			`+btn_publier_ressource()+`
		</div>
	</div>` : btn_publier_ressource(true)
	$(btnsTop).insertBefore( "#previsualisation iframe:nth-child(1), audio" );
	pages_extract_change()

	
}


function lien_icone_ressource(lien_image, extension, firstime){
	const ID_FICHIER = lien_image ? lien_image.split('/')[5] : ""
	//const link = "https://drive.google.com/uc?export=download&id=" + ID_FICHIER  + (firstime ? '&dump='+(new Date()).getTime() : "")
	const link = lien_previz_image(ID_FICHIER)  + (firstime ? '&dump='+(new Date()).getTime() : "")
	//console.log({extension})

	//OLD - not working with google
	return ID_FICHIER ? link : prefixe_image + "/img_icone_" + extension + ".png";

	//NEW
	return prefixe_image + "/img_icone_" + extension + ".png";
}



function switchSource(ceci, extension){
	ceci.src = prefixe_image + "/img_icone_" + extension + ".png";
}

function expandAllRessources(){
	const yes = $('#expandRes:checked').length > 0
	Array.from($('.onefolder')).map(e => {
		res = yes ? e.setAttribute('open', "") : e.removeAttribute('open')
	})

	stockerSession('expandRes',!yes)

}

function recupererSession(nom){
	return window.sessionStorage.getItem(nom)
}

function stockerSession(nom,val){
	window.sessionStorage.setItem(nom, val)
	return recupererSession(nom)
}

function effacerSession(nom){
	window.sessionStorage.removeItem(nom)
}
