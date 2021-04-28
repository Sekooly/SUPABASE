var mon_role = "";


function se_deconnecter(){
  /*
  firebase.database().goOffline()
  firebase.app().delete()
  */
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




window.onbeforeunload = function() {
   se_deconnecter()
   //return "A bientôt."
}


//récupéré depuis le serveur
//uniquement utilisé pour envoyer au serveur
function maintenant(){
	
	try{    
    //var date_serveur = rechercher_tout('rpc/maintenant')
    var date_serveur = get_resultat(racine_data + "rpc/maintenant"+'?'+apikey)
    //console.log(date_serveur)
    return date_serveur

    //return moment(date_serveur['responseJSON']).format("DD/MM/YYYY HH:mm:ss")

	}catch(e){
    console.error("erreur pour trouver la date et l'heure.")
		return (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString()		
	}
			
		
}

function maintenant_sans_caracteres_speciaux(){
  var resultat_maintenant = maintenant()
  var resultat = new Date(moment(resultat_maintenant)._d)
  resultat = resultat.toLocaleDateString() + " " + resultat.toLocaleTimeString() 
  resultat = resultat.replaceAll('/','-')
  resultat = resultat.replaceAll(':','-')
  return resultat
}



function hasher(valeur) {
  return hex_md5(valeur)
  
}


function actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data){
  

  url = racine_data + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+apikey
  //nouveau_data[nom_champ_reference] = valeur_champ_reference
  /*console.log(url)
  console.log(nouveau_data)*/
  return patch_resultat_asynchrone(url,nouveau_data)


}

//limité à 5000
function rechercher_tout(nom_table){
  url = racine_data + nom_table + "?" + apikey + "&limit=5000" + ordonner(nom_table)
  //console.log(url)
  return get_resultat_asynchrone(url)
}

//on renvoie un array vide si non trouvé, la valeur sinon
function rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, nombrelimite){

  url = racine_data + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+apikey + ordonner(nom_table)
  url = nom_champ_a_chercher ? url+"&select="+nom_champ_a_chercher : url
  url = nombrelimite ? url+"&limit="+nombrelimite : url
  
  return get_resultat_asynchrone(url)


}




function rechercher_notifs_prof(liste_classes_matieres, nombrelimite){
  liste_classes_matieres = liste_classes_matieres.replaceAll(';','","')
  //console.log(liste_classes_matieres)


  //Notifs?Classe_matiere=in.("(Divers|Salle%20des%20profs)")

  url = racine_data + "Notifs?Classe_matiere=in.(\""+liste_classes_matieres+ "\")&"+apikey
  url = nombrelimite ? url+"&limit="+nombrelimite : url
  
  //console.log(url)

  return get_resultat_asynchrone(url)
}



function ordonner(nom_table){
  //ordre = "&order=age.desc,height.asc"


  if(nom_table==="Classes"){
    return "&order=cycle.desc,niveau.asc,Classe.asc"
  } else if(nom_table==="Matieres"){
    return "&order=Cycle.desc,Classe.asc,Matiere.asc" 
  } else if(nom_table==="Eleves"){
    return "&order=Cycle.desc,Classe.desc,Identifiant.asc"
  } else if(nom_table==="Profs" || nom_table==="Administration"){
    return "&order=Cycle.desc,Identifiant.asc"
  } else if(nom_table==="Logs" || nom_table==="Visio"){
    return "&order=id.desc"
  } else if(nom_table==="Notifs" || nom_table==="Topic" || nom_table==="Coms"){
    return "&order=Horodateur.desc"
  }else if(nom_table==="Fichiers" || nom_table==="Rendus"){
    return "&order=date_publication.desc"
  }else{
    return ""
  
  }


}

function convertir_en_date(date_str_initiale){

  if(date_str_initiale === null) return moment("30/12/1899 00:00:00",'DD/MM/YYYY HH:mm:ss')

  avec_format = !date_str_initiale.includes('+');

  if (avec_format){
    return moment(date_str_initiale, 'DD/MM/YYYY HH:mm:ss')
  }else{
    return moment(date_str_initiale, 'YYYY-MM-DD HH:mm:ss.SSSSZ')
  }
}



function reinitialiser_unseul_mdp_datenotif(id_parametre, identifiant_a_init){
  id_parametre = id_parametre === "Profs" ? "prof" : id_parametre.substring(0,5).toLowerCase()
  lien = "rpc/initialiser_" + id_parametre 

  url = racine_data + lien + "?" + apikey + "&limit=2000"
  //console.log(url)
  return post_resultat_asynchrone(url, {["identifiant_" + id_parametre]:identifiant_a_init})
}

function nb_coms(id_topic){
  lien = "rpc/nb_coms"

  url = racine_data + lien + "?" + apikey + "&limit=2000"

  //console.log(url)
  data = '{"valeur_id_topic":'+id_topic+'}'
  //console.log(data)
  resultat = post_resultat_synchrone(url,data)
  return Number(resultat.slice(resultat.indexOf('[') +1,resultat.indexOf(']')));
}


function post_resultat_synchrone(url,data){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url, false ); // false for synchronous request
    data_json = data
    xmlHttp.setRequestHeader("Content-Type","application/json") 
    xmlHttp.send( data_json );
    
    return xmlHttp.response;  

}



function reinitialiser_mdp_datenotif(){
  url = racine_data +  "rpc/initialiser" + "?" + apikey + "&limit=2000"
  return post_resultat_asynchrone(url)
}


//on renvoie un array vide si non trouvé, la valeur sinon
function rechercher_contenant_motif(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, nombrelimite){

  url = racine_data + nom_table + "?"+nom_champ_reference+"=like.*"+valeur_champ_reference+ "*&"+apikey
  url = nom_champ_a_chercher ? url+"&select="+nom_champ_a_chercher : url
  url = nombrelimite ? url+"&limit="+nombrelimite : url
  
  return get_resultat_asynchrone(url)


}

function nouvel_id(nom_table, nom_champ_id){
  url = racine_data + nom_table + "?select="+nom_champ_id
  url = url + "&order="+nom_champ_id+".desc"
  url = url + "&limit=1"
  url = url + "&"+apikey
  
  //console.log(url)

  var resultat = get_resultat(url)
  resultat = resultat.length > 0 ? resultat[0][nom_champ_id] +1  : 0
  return resultat

}



function supprimer(nom_table,nom_champ_reference,valeur_champ_reference){
  url = racine_data + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+apikey
  delete_resultat_asynchrone(url)
}

function supprimer_tout(nom_table){
  url = racine_data + nom_table + "?"+apikey
  delete_resultat_asynchrone(url)
}

function nom_des_champs(nom_table){
  url = racine_data + "?"+apikey
  var resultat = get_resultat(url)
  return Object.keys(resultat['definitions'][nom_table]['properties'])

}

function renvoyer_resultat(snapshot){
  
  if (snapshot === null) return null
  var numero_identifiant = Object.keys(snapshot)[0]
  return snapshot[numero_identifiant]
  
}

function retour_promise(requete){
  /*
  return requete.once('value').then(snapshot => {
    resultats = snapshot.val()
    //console.log(resultats)
    return resultats

  }).catch(error => {
    resultats = error
    //console.log(resultats)
    return error
  })

  */
}


function ajouter_un_element(nom_table, nouveau_data){

  url = racine_data + nom_table + "?"+apikey
  //console.log(url)
  return post_resultat_asynchrone(url,nouveau_data)

}






function envoyer_log(mon_identifiant, mon_statut, ma_classe, mon_type, partir){


  try{
    var data = get_resultat('https://ipapi.co/json/')
    //console.log(data);


    var mon_adresse_ip = data['ip'];
    var ma_ville = data['city'];
    var mon_pays = data['country_name'];
    var ma_latitude = data['latitude'];
    var ma_longitude = data['longitude'];
    var mon_operateur = data['org'];

    fin_envoi_log(partir, mon_identifiant, ma_classe, mon_statut,
          mon_adresse_ip, ma_latitude, ma_longitude, mon_operateur,
          mon_pays, mon_type, ma_ville)

  }catch (error){
    console.log("on a trouvé une erreur")
    console.error(error)
    var mon_adresse_ip = "";
    var ma_ville = "";
    var mon_pays = "";
    var ma_latitude = "";
    var ma_longitude = "";
    var mon_operateur = "";

    fin_envoi_log(partir, mon_identifiant, ma_classe, mon_statut,
          mon_adresse_ip, ma_latitude, ma_longitude, mon_operateur,
          mon_pays, mon_type, ma_ville)
  }



}

function fin_envoi_log(partir, mon_identifiant, ma_classe, mon_statut,
          mon_adresse_ip, ma_latitude, ma_longitude, mon_operateur,
          mon_pays, mon_type, ma_ville){
  var nouveau_data = {
      Horodateur : maintenant(),
      Identifiant: mon_identifiant,
      Type: ma_classe,
      Statut: mon_statut,
      IP: mon_adresse_ip,
      Latitude: ma_latitude,
      Longitude: ma_longitude,
      Operateur: mon_operateur,
      Pays: mon_pays,
      Type: mon_type,
      Ville: ma_ville
    }

    ajouter_un_element("Logs",nouveau_data).then(valeur => {
      if (partir){

        if(recuperer('mes_donnees').length>0){
          //partir sur la page tele-enseignement au bout de 1.2 seconde
          setTimeout(function(){
            window.location.href="tele-enseignement"
          },1200);
          
        }
        

      }  
    })

    
}

function chargement(oui){
  $("#img_chargement")[0].style.display = oui ? "" : "none";
}


function recuperer_nb_pages_pdf(id_fichier){
  url = "https://script.google.com/macros/s/AKfycbw3ASmNiz9CSmjI5tWhUBVSk81x_c-vCqOmwqlIqb5Kz7ejZXoa0QziZ0VzuFs7-D0w/exec?id_fichier=" + id_fichier
  return get_resultat(url)
}

function stocker(nom_variable,valeur_variable){
	window.localStorage.setItem(nom_variable,valeur_variable)
}

function recuperer(nom_variable){  
	return window.localStorage.getItem(nom_variable)	|| window.sessionStorage.getItem(nom_variable)  
}

function stocker_temp(nom_variable,valeur_variable){
  window.sessionStorage.setItem(nom_variable,valeur_variable)
}


function recuperer_temp(nom_variable){
  return window.sessionStorage.getItem(nom_variable)  
}


function effacer(nom_variable){
	window.localStorage.removeItem(nom_variable)	
  window.sessionStorage.removeItem(nom_variable)  
}


async function switcher_la_maintenance(){
  
    var valeur_actuelle = await est_en_maintenance()
    console.log(valeur_actuelle)
    valeur_finale = valeur_actuelle === "oui" ? "non" : "oui"
    actualiser('Maintenance','id','1',{"id":"1","Maintenance":valeur_finale})
    console.log(valeur_finale)
    return valeur_finale
    
}


async function est_en_maintenance(){
  return get_resultat_asynchrone(racine_data+"/Maintenance"+"?"+apikey).then(e => {return e[0]['Maintenance']})
}


async function alerte_etablissement(){
  return get_resultat_asynchrone(racine_data+"/Alerte"+"?id=eq.1&"+apikey).then(e => {return e[0]['Alerte']}) 
}

function recuperer_alerte_etablissement(){
  return get_resultat(racine_data+"/Alerte"+"?id=eq.1&"+apikey)[0]['Alerte'] 
}


async function switcher_le_champ(nom_champ, nouvelle_valeur){
  /*
    valeur_finale = nouvelle_valeur
    racine_data.update({[nom_champ] : valeur_finale})
    console.log(valeur_finale)
    return valeur_finale
    */
}








function extension_ok(extension){
	return ",txt,bmp,gif,jpeg,jpg,png,svg,pdf,bmp,xlsx,xls,xlsm,ppt,pptx,doc,docx,html,csv,js,rtf,mp4,mp3,wav,youtube,".includes(","+extension.toLowerCase()+",")
}

function element_DOM(nom_element){
	return document.getElementById(nom_element)
}




function get_resultat(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}


function get_resultat_initial(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send();
    return xmlHttp.response;  
}


function get_resultat_brut(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;  
}




function get_resultat_asynchrone(url){
    
  return $.ajax({
    type: 'GET',
    url: url,
  }).done(function(data) {
    return data
  });

}


function patch_resultat_asynchrone(url,data_json){
  return $.ajax({
    type: 'PATCH',
    url: url,
    data: data_json
  }).done(function(data) {
    //console.log(data)
    return data
  });

}

function post_resultat_asynchrone(url,data_json){
  return $.ajax({
    type: 'POST',
    url: url,
    data: data_json
  }).done(function(data) {
    //console.log(data)
    return data
  });

}

function delete_resultat_asynchrone(url){
  return $.ajax({
    type: 'DELETE',
    url: url,
  }).done(function(data) {
    //console.log(data)
    return data
  });

}


function suite_notif(){
	return "-"+recuperer('identifiant_courant').replace(".","")
}

function afficher_date(date_initiale,sans_heure){
  var formatage = sans_heure ? 'YYYY-MM-DD' :
                  date_initiale.includes('+') ? 'YYYY-MM-DD HH:mm:ssZ' :
                  "DD/MM/YYYY HH:mm:ss"

  var resultat = new Date(moment(date_initiale,formatage));
  
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  //console.log(date_str)

  if(sans_heure) options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  return resultat.toLocaleDateString('fr-FR', options)
}


function afficher_date_mois_annee(date_initiale, sans_heure){
  var formatage = sans_heure ? 'YYYY-MM-DD' :
                  date_initiale.includes('+') ? 'YYYY-MM-DD HH:mm:ssZ' :
                  "DD/MM/YYYY HH:mm:ss"
  return new Date(moment(date_initiale,formatage)).toLocaleDateString('fr-FR', {year: 'numeric', month: 'numeric'})
}


function date_mois_precedent(date_initiale,nb_mois){
  return moment(date_initiale).subtract(nb_mois,'months').endOf('month').format('YYYY-MM-DD HH:mm:ssZ');
}


function les_12_derniers_mois(aujourdhui){
  resultat = []
  //console.log(aujourdhui)
  aujourdhui = aujourdhui ? aujourdhui : maintenant()
  for (i = 0; i<=11;i++){
    resultat.push(afficher_date_mois_annee(date_mois_precedent(aujourdhui,i)))
  }
  return resultat.reverse()
}

function les_12_derniers_mois_en_semaines(aujourdhui){
  derniers_mois = date_mois_precedent(aujourdhui,11)
  //console.log(derniers_mois)
  premiere_date = moment(derniers_mois)
  //console.log(premiere_date)
  derniere_date = moment(aujourdhui)
  //console.log(derniere_date)
  resultat = [];
  var current = premiere_date.clone();

  //console.log(current)

  while (current.add(7,'days').isBefore(derniere_date)) {
    //console.log(current)
    resultat.push(current.clone());
  }

  resultat.push(derniere_date);

  return resultat.map(m => m.format('YYYY-MM-DD'));




}



function les_12_derniers_mois_en_intervalles_semaines(aujourdhui){
  var intermediaire = les_12_derniers_mois_en_semaines(aujourdhui)
  var resultat = intermediaire.map(function(valeur,index){
    if(intermediaire[index+1]) return intermediaire[index] + " " + intermediaire[index+1]
  })

  return resultat.filter(e=>e)


}



function afficher_date_old(element, sans_heure){

  //console.log("\n"+ element + ":" + element.length)
	var format_initial = element.includes("-") ? "YYYY-MM-DD" : "DD/MM/YYYY HH:mm:ss"
	var date_str = moment(element, format_initial).toDate()

	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
	//console.log(date_str)

	if(sans_heure) options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
	return date_str.toLocaleDateString('fr-FR', options)

}


function transformer_en_array_de_JSON(json){

  return json === null ? [] : Object.keys(json).map(i => json[i])
}



var separateur = ','

// JSON à CSV
function convertir_csv(arr, entetes_seulement){

  //si c'est direct un string -> on joint
  if(typeof(arr[0])==="string"){
    return  arr.join(separateur)



  //si c'est encore un object -> on concat
  }else{
    const array = [Object.keys(arr[0])].concat(arr);

    if(entetes_seulement){
      return array[0].join(separateur);
    }


    return array.map(it => {

      return Object.values(it).join(separateur);
    }).join('\r\n');  
  }
  


}


function csv_en_JSON(contenu){
  var toutes_les_lignes = contenu.split('\r\n')
  var entete = toutes_les_lignes[0].split(separateur)
  //console.log(entete)

  var json_final = []

  //pour chaque ligne, on créer un seul et unique objet {} avec les clés et valeurs qu'il faut
  for (var i = 1; i< toutes_les_lignes.length;i++){
    //console.log(toutes_les_lignes[i].split(',')[0])
    var nouvel_objet = {}

    for (var numero_colonne = 0; numero_colonne < entete.length ; numero_colonne++){
      //console.log(numero_colonne + " " + entete[numero_colonne])
      nouvel_objet[entete[numero_colonne]] = toutes_les_lignes[i].split(separateur)[numero_colonne]
    }
    
    //console.log(nouvel_objet)
    if(nouvel_objet[entete[0]]) json_final.push(nouvel_objet)
  }

  return json_final

}



function identifiant_par_table(nom_table){
  var resultat = get_resultat(racine_data+'?'+apikey)
  var resultat_intermediaire = resultat['definitions'][nom_table] ? resultat['definitions'][nom_table]['properties'] : {}



  //on recupere les keys (entetes)
  var les_entetes = Object.keys(resultat_intermediaire)
  //on recupere les values (valeurs)
  var les_values = Object.values(resultat_intermediaire)
  
  if(les_entetes.length > 0 && les_entetes.length > 0){
    //celui avec une value.key = 'description' est l'entete id_table
    var index_du_champ = les_values.map(e=> e['description']).indexOf('Note:\nThis is a Primary Key.<pk/>')
    var id_table = index_du_champ >=0 ? les_entetes[index_du_champ] : ""
  }else{
    var id_table = ""
  }


  return id_table;   


}




function init_mon_role(){
  mon_role = recuperer('mon_type');

  if (mon_role !== null){
    //on enleve le S à la fin pour eleves et professeurs
    mon_role = mon_role.substring(0, mon_role.length - 1);

    //si administration alors on envoie l'intitulé de son rôle:
    if (mon_role.includes('Admin')) mon_role = JSON.parse(recuperer('mes_donnees'))['Role'];
  }

  return mon_role
  
}


function afficher_clic_droit_param(ceci){
  event.preventDefault();
  event.stopPropagation(); 
  id_parametre = $(".un_menu_orange")[0].id

  $("#clic_droit_titres_param").remove()
  $("thead").append('<div id="clic_droit_titres_param" style="z-index: 50;position: fixed;"></div>')
  

  //autoriser le masquage SI ET SEULEMENT SI nb elements visibles >1
  if($(".header_table.entete_sticky:visible").length > 1){
    ajouter_fonction_clic_droit(event,element_DOM("clic_droit_titres_param"),0,"masquer_colonne","Masquer la colonne <b>"+ceci.id+"</b>",ceci.id,"clic_droit_titre_param")  
  }
  


  liste_params_colonnes_masquees = recuperer("liste_params_colonnes_masquees")
  liste_params_colonnes_masquees = liste_params_colonnes_masquees ?  liste_params_colonnes_masquees.split(",") : []
  //console.log("LA LISTE POUR MASQUER 1: " + liste_params_colonnes_masquees)
  liste_params_colonnes_masquees = liste_params_colonnes_masquees.filter(e => e.includes(id_parametre + ':'))
  //console.log("LA LISTE POUR MASQUER 2: " + liste_params_colonnes_masquees)


  if (liste_params_colonnes_masquees.length > 0){

    for (var i = 0; i < liste_params_colonnes_masquees.length ; i++) {
      parametre = liste_params_colonnes_masquees[i].split(":")[0]
      id_colonne = liste_params_colonnes_masquees[i].split(":")[1]
      ajouter_fonction_clic_droit(event,element_DOM("clic_droit_titres_param"),i+1,"afficher_colonne","Afficher la colonne <b>"+id_colonne+"</b>",id_colonne,"clic_droit_titre_param")  
    }

    ajouter_fonction_clic_droit(event,element_DOM("clic_droit_titres_param"),i+1,"afficher_colonnes","<b>Afficher toutes les colonnes</b>",ceci.id,"clic_droit_titre_param")  

  }
  



  //au clic de n'importe où : ça enleve le clic droit
  $(document).click(function() {
    $('.clic_droit').remove();  
    $('#clic_droit_titres_param').remove();           
  });

}

function afficher_colonnes(id_parametre, titre){

  $("th").css("display","")
  $("td").css("display","")

  id_parametre = $(".un_menu_orange")[0].id

  if(titre !== ""){

    //virer tous elements du parametre
    liste = recuperer('liste_params_colonnes_masquees')
    //console.log("on a initialement " + liste)

    if(liste.length > 0){
      //console.log(liste)
      liste = liste.split(",")
      //console.log(liste)
      liste = liste.filter(function(e){
        //console.log(e.split(":")[0] + " VS " + id_parametre )
        return e.split(":")[0] !== id_parametre
      })

    }



    autoriser_tout_voir(false)

    //console.log("on va stocker " + liste)
    stocker('liste_params_colonnes_masquees',liste)


  }


  $("#clic_droit_titres_param").remove()

}

function afficher_colonne(id_colonne,vide){
  masquer_colonne(id_colonne,true)
}

function masquer_colonne(id_colonne,non_plutot_afficher){

  if(id_colonne !== ""){


    //event.stopPropagation();

    visibilite =  non_plutot_afficher ? "" : "none"    

    numero_colonne = $("[id='"+id_colonne+"'].header_table.entete_sticky")[0].cellIndex

    $("[id='"+id_colonne+"'].header_table.entete_sticky")[0].style.display = visibilite
    

    //si non visible -> l'enregistrer dans les préfs de l'user
    param_actualisé = $(".un_menu_orange")[0].id + ":" + id_colonne
    liste_params_colonnes_masquees = recuperer("liste_params_colonnes_masquees")



    liste_params_colonnes_masquees = liste_params_colonnes_masquees ?  liste_params_colonnes_masquees.split(",") : []
    position_param_actualisé = $.inArray(param_actualisé,liste_params_colonnes_masquees)
    
    /*
    console.log(visibilite)
    console.log(param_actualisé)
    console.log(position_param_actualisé)
    */

    if (visibilite === "none"){
      autoriser_tout_voir(true)
      if(position_param_actualisé === -1) liste_params_colonnes_masquees.push(param_actualisé)
    }else{
      if(position_param_actualisé !== -1) liste_params_colonnes_masquees.splice(position_param_actualisé, 1)
    }
    
    stocker('liste_params_colonnes_masquees',liste_params_colonnes_masquees)
    //console.log(liste_params_colonnes_masquees)
    //console.log(recuperer('liste_params_colonnes_masquees'))


    //pour chaque ligne, on masque la numero_colonne-ème colonne
    for (numero_ligne = 1 ; numero_ligne < $("tr").length ; numero_ligne++){

      //console.log('$("tr")['+numero_ligne+'].children['+numero_colonne+'] à masquer: ' + visibilite)
      $("tr")[numero_ligne].children[numero_colonne].style.display = visibilite

    }

    
  }

  $("#clic_droit_titres_param").remove()
}


function somme(nom_json_initial, nom_champ, valeur_recherchee){

  total = 0
  numero_colonne_champ_a_sommer = $("[id='"+nom_champ+"']")[0].cellIndex +1
  les_elements = transformer_en_array_de_JSON($('table tr td:nth-child('+numero_colonne_champ_a_sommer+'):visible'))
  les_elements.forEach(function(la_ligne) {
    //console.log(la_ligne.innerText)
    var value = parseInt(la_ligne.innerText)
    if (!isNaN(value)) {
      total += value;
    }
  });
  return total

}

function actualiser_octets(){
  lien_script = "https://script.google.com/macros/s/AKfycbyenqGECCqdKfpvI_y6Anq2_rWmYdIaY9WjT33pUhiA591vpFkmPyJYgDC8gJqVSv8y_w/exec?"
  espace = JSON.parse(recuperer("Espace etablissement restant"))



  for (var i = 0; i<espace.length-1;i++) {
    id_fichier = espace[i]['ID_FICHIER']
    taille_fichier = espace[i]['octets_utilises']

    //uniquement un fichier pas actualisé (0 octets)
    if(id_fichier && taille_fichier === 0){
      console.log((i+1) +' ' + id_fichier)  

      taille_fichier = get_resultat_brut(lien_script+"id_fichier=" + id_fichier)
      
      if(!taille_fichier.includes('ERREUR')){

        //on modifie dans la bdd 
        nom_table = espace[i]["SOURCE"]
        nom_champ_reference = "id_fichier"
        valeur_champ_reference = id_fichier
        nouveau_data = {
          'taille_fichier' : taille_fichier
        }
        console.log(taille_fichier + "\n")

        actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)


      }

    }else{
      console.log("probleme sur le " + i)
    }
    
  }
}



function config_editor(){
  config = {
    language: {
      content: "fr",
      ui: "fr"
    },
    toolbar: {items : ["heading","|", 'bold', 'italic','fontBackgroundColor',"|", "bulletedList","numberedList","|","blockQuote",'|','insertImage']}

  }

  return config;
}



function ordonner_elements(selector, attrName) {
    return $($(selector).toArray().sort(function(a, b){
        var aVal = parseInt(a.getAttribute(attrName)),
            bVal = parseInt(b.getAttribute(attrName));
        return aVal - bVal;
    }));
}