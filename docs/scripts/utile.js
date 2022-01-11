var mon_role = "";
var entete_heroku = "https://sekooly-server.herokuapp.com/"//"https://api.sekooly.com/"
var liste_class_avec_fond_mode_nuit = ["ma_fenetre","titre_drive", "mini_popup", "msg_envoye", "msg_recu", "une_notif"]
var mode_nuit_oui_final = recuperer("mode_nuit_oui") === "oui" ? "non" : "oui"
var elements_menu_haut_generiques_local = []
setTimeout(function(){
  elements_menu_haut_generiques_local = typeof(elements_menu_haut_generiques)=== 'undefined' ? [] : elements_menu_haut_generiques   
},1000)


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


  if($("#logo_etablissement")[0]) $("#logo_etablissement")[0].src = "https://sekooly.com/assets/images/" + nom_fichier_logo
  if($("#site_etablissement")[0]) $("#site_etablissement")[0].href = site_etablissement
}


function ordonner_JSON(ma_liste,nom_propriete){
  return ma_liste.sort((a, b) => (a[nom_propriete] > b[nom_propriete]) ? 1 : -1)
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
		maintenant_local()
	}
			
		
}

function maintenant_local(){
  return (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString() 
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

function supprimer_element_de_la_liste(liste,nom_element){
  
    var index = liste.indexOf(nom_element);
    while (index > -1) {
        liste.splice(index, 1);
        index = liste.indexOf(nom_element);
    }

    return liste

}


function actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data){
  
  if(elements_menu_haut_generiques_local.indexOf(nom_table)>=0 ){
    url = racine_initiale + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+api_initial
  }else{
    url = racine_data + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+apikey
  }

  



  return patch_resultat_asynchrone(url,nouveau_data)


}

//limité à 5000
function rechercher_tout(nom_table, avec_where){
  //url = racine_data + nom_table + "?" + apikey + "&limit=5000" + ordonner(nom_table)
  table = avec_where ? nom_table : '"'+nom_table+'"'
  //alert(table)

  if(elements_menu_haut_generiques_local.indexOf(nom_table)>=0 ){
    url = entete_heroku + convertir_db(racine_initiale) + '/SELECT * FROM '+table+' ' + transformer_en_sql(ordonner(nom_table))
  }else{
    url = entete_heroku + convertir_db(racine_data) + '/SELECT * FROM '+table+' ' + transformer_en_sql(ordonner(nom_table))
  }

  //alert(url)
  return get_resultat_asynchrone(url)
}


function execute_sql(racine_data, requete_sql, coche_checked){
  var suffix = !coche_checked ? "/False" : ""
  url = entete_heroku + convertir_db(racine_data) + "/" + requete_sql + suffix
  return get_resultat_asynchrone(url) 
}

//on renvoie un array vide si non trouvé, la valeur sinon
function rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, nombrelimite, orderby){

  url = racine_data + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+apikey + ordonner(nom_table)
  url = nom_champ_a_chercher ? url+"&select="+nom_champ_a_chercher : url
  url = nombrelimite ? url+"&limit="+nombrelimite : url
  url = orderby ? url+"&order="+orderby : url
  
  //console.log(url)
  return get_resultat_asynchrone(url)


}

async function chercher_lien_script(id_script){
  var url = racine_initiale + "Scripts?id_script=eq." + id_script + "&" + api_initial
  //console.log(url)
  return get_resultat_asynchrone(url).then(e => e[0]['lien_script'])

}




function rechercher_notifs_prof(nombrelimite){

  //n'utiliser que les ID url!!!
  mes_matieres = JSON.parse(recuperer("mes_matieres"))
  liste_classes_matieres = liste_classes_matieres = mes_matieres.map(m => m["ID_URL"]).join(";") //valeur_champ_reference.split(";").map(e => mes_matieres.find(m => m["Classe_Matiere"] === e)['ID_URL'] ).join(";")
  //alert(liste_classes_matieres)

  liste_classes_matieres = liste_classes_matieres.replaceAll(';','","')
  //console.log(liste_classes_matieres)


  //Notifs?Classe_matiere=in.("(Divers|Salle%20des%20profs)")


  url = racine_data + "Notifs?Id_classe_matiere=in.(\""+liste_classes_matieres+ "\")&"+apikey
  url = url + '&order=Horodateur.desc' 
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
  } else if(nom_table==="Notifs" || nom_table==="Topic" || nom_table==="Coms" || nom_table==="Conversations"){
    return "&order=Horodateur.desc"
  }else if(nom_table==="Fichiers" || nom_table==="Rendus"){
    return "&order=date_publication.desc"
  }else if(nom_table==="Fichiers_tout"){
    return '&order=date_effet.asc,heure_effet.asc,id_dossier.asc'
  }else if(nom_table==="Reponses"){
    return '&order=id_quiz.asc,id_question.asc,position_reponse.asc'
  }else if(nom_table==="Appreciations"){
    return '&order=id.desc'
  }else if(nom_table==="Notes"){
    return '&order=date_creation_note.desc'
  }else if(nom_table==="Liste_appreciations"){
    return '&order=id_appreciation.desc'
  }else{
    /*
    le_id_table = identifiant_par_table(nom_table)
    if(le_id_table.length > 0) return "&order="+le_id_table+".asc"
    return ''
    */
    return ""
  }


}

function transformer_en_sql(orderby){
  var resultat = ""
  if(orderby){
    resultat = orderby.replace('&','').replace('=',' BY "').replace('.','" ').replaceAll(',',',"').replaceAll('.','".').replaceAll(".", " ")
  }

  return resultat
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
function rechercher_contenant_motif(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, nombrelimite, champ_tri, mode_tri){

  if(!valeur_champ_reference) valeur_champ_reference = '--------------------------------------------------------------------------------------------'

  url = racine_data + nom_table + "?"+nom_champ_reference+"=like.*"+valeur_champ_reference+ "*&"+apikey
  url = nom_champ_a_chercher ? url+"&select="+nom_champ_a_chercher : url
  url = nombrelimite ? url+"&limit="+nombrelimite : url
  url = champ_tri && mode_tri ? url+"&order="+champ_tri+"."+mode_tri : url
  
  //console.log(url)

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
  if(elements_menu_haut_generiques_local.indexOf(nom_table)>=0 ){
    url = racine_initiale + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+api_initial
  }else{
    url = racine_data + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+apikey
  }


  
  return delete_resultat_asynchrone(url)
}

function supprimer_avec_ces_references(nom_table, champs_refs){

  var references = ""
  $.each(champs_refs, (key,valeur) => {
    var prefix =  references.length === 0 ? "" : "&"
    references += prefix + key+"=eq."+valeur
  })

  url = racine_data + nom_table + "?"+ references+ "&"+apikey
  //console.log(url)
  return delete_resultat_asynchrone(url)
}


function rechercher_avec_ces_references(nom_table, champs_refs, liste_champs_a_chercher, orderby){

  var references = ""
  $.each(champs_refs, (key,valeur) => {
    var prefix =  references.length === 0 ? "" : "&"
    references += prefix + key+"=eq."+valeur
  })

  var select = liste_champs_a_chercher ? "&select=" + liste_champs_a_chercher.join(',') : ""


  url = racine_data + nom_table + "?"+ references + select + "&"+apikey + (orderby ? "&order=" + orderby : "")
  //console.log(url)
  return get_resultat_asynchrone(url)
}


function supprimer_initial(nom_table,nom_champ_reference,valeur_champ_reference){
  url = racine_initiale + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+api_initial
  return delete_resultat_asynchrone(url)
}


function supprimer_tout(nom_table){
  if(elements_menu_haut_generiques_local.indexOf(nom_table)>=0 ){
    url = racine_initiale + nom_table + "?"+api_initial
  }else{
    url = racine_data + nom_table + "?"+apikey
  }
  return delete_resultat_asynchrone(url)
}

function nom_des_champs(nom_table){

  try{
    url = racine_data + "?"+apikey
    var resultat = get_resultat(url)
    return Object.keys(resultat['definitions'][nom_table]['properties'])

  }catch(e){
    url = racine_initiale + "?"+api_initial
    resultat = get_resultat(url)
    return Object.keys(resultat['definitions'][nom_table]['properties'])

  }

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

  if(elements_menu_haut_generiques_local.indexOf(nom_table)>=0 ){
    url = racine_initiale + nom_table + "?"+api_initial
  }else{
    url = racine_data + nom_table + "?"+apikey
  }

  //console.log(url)
  return post_resultat_asynchrone(url,nouveau_data)

}

function ajouter_un_element_racine(nom_table,nouveau_data){

  url = racine_initiale + nom_table + "?"+api_initial
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
    //console.log("on a trouvé une erreur")
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

async function fin_envoi_log(partir, mon_identifiant, ma_classe, mon_statut,
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

  await ajouter_un_element("Logs",nouveau_data)

  if (partir){
    if(recuperer('mes_donnees').length>0){

      //stocker le code dans mes données      
      stocker("code_saisie",$("#Code").val())


      //console.log(JSON.parse(recuperer('mes_donnees')))
      window.location.href="tele-enseignement"      
    }   

  }  

    
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
	return window.sessionStorage.getItem(nom_variable)  || window.localStorage.getItem(nom_variable)
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

//tout_effacer_sauf(["identifiant_courant", "mode_nuit_oui", "notifs_sans_actualiser", "date_heure_depassement"])
function tout_effacer_sauf(liste_a_garder){

  $.each(localStorage, function(key, value){

    if(liste_a_garder.indexOf(key) === -1) effacer(key)

  });
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


function liste_img_extensions(){
  res = liste_extensions().split(",").map(function(e){
    if(e){
      return "img_icone_" + e + ".png"
    }
  })

  res = res.filter(e => e)

  return res
}




function texte_liste(selector,attrName){
  return $(selector).map( function() {
    return $(this).attr(attrName);
  }).get().join('\n');
}


//exemple: copier_liste("[list='img_links']","href")
function copier_liste(selector,attrName){
  res =  texte_liste(selector,attrName)

  var $temp = $("<textarea>");
  $("body").append($temp);
  $temp.val(res).select();
  document.execCommand("copy");
  $temp.remove();

  afficher_alerte("Copié dans votre presse-papiers.")

  return res

}

function liste_extensions(){
  return ",txt,bmp,gif,jpeg,jpg,png,svg,pdf,bmp,xlsx,xls,xlsm,ppt,pptx,doc,docx,html,csv,js,rtf,mp4,mp3,wav,youtube,quiz,"
}


function extension_ok(extension){
	return liste_extensions().includes(","+extension.toLowerCase()+",")
}

function element_DOM(nom_element){
	return document.getElementById(nom_element)
}


function nombre_de_rows(xmlHttp){
  var contentRange = xmlHttp.getResponseHeader("content-range")
  return contentRange ? Number(contentRange.split('/')[1]) : 0
}


function get_resultat(url){    
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    //xmlHttp.setRequestHeader("Prefer", "count=exact")
    xmlHttp.send( null ); 
    //console.log(nombre_de_rows(xmlHttp))
    return JSON.parse(xmlHttp.responseText);
}


function get_resultat_initial(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    //xmlHttp.setRequestHeader("Prefer", "count=exact")
    xmlHttp.send();
    //console.log(nombre_de_rows(xmlHttp))
    return xmlHttp.response;  
}


function get_resultat_brut(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    //xmlHttp.setRequestHeader("Prefer", "count=exact")
    xmlHttp.send( null );
    //console.log(nombre_de_rows(xmlHttp))
    return xmlHttp.responseText;  
}




function get_resultat_asynchrone(url){
    
  return $.ajax({
    type: 'GET',
    url: url,
    //headers: { 'Prefer': 'count=exact' }
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

  if(!date_initiale) return ""

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


    //NOUVEAU
    var array = garder_les_colonnes_non_automatiques(arr)
    array = [Object.keys(arr[0])].concat(array);

    if(entetes_seulement){
      return array[0].join(separateur);
    }


    return array.map(it => {

      return Object.values(it).join(separateur);
    }).join('\r\n');  
  }
  


}


function garder_les_colonnes_non_automatiques(arr){

  //pour chaque ligne
  arr.forEach(function(valeur,index){    
    //pour chaque colonne AUTOMATIQUE
    parametres_automatiques.map(function(nom_parametre,index_param){
      //console.log({index_param:nom_parametre})
      //console.log("   ",valeur[nom_parametre])

      //si ce parametre auto existe dans le arr -> on le supprime
      if(valeur[nom_parametre] !== undefined){
        //console.log("supprimer ", nom_parametre)
        delete valeur[nom_parametre]
      }
    })

    //console.log('\n')
  })

  return arr
}


function csv_en_JSON(contenu){
  console.log({contenu})
  var toutes_les_lignes = contenu.split('\n')
  var entete = toutes_les_lignes[0].split(separateur)
  console.log(entete)

  var json_final = []

  //pour chaque ligne, on créer un seul et unique objet {} avec les clés et valeurs qu'il faut
  toutes_les_lignes.forEach(function(valeur,index){
    
    if(typeof(valeur) === "string") valeur.split('\n')
    console.log(valeur)

    if(index === 0) return true
    //console.log({[index]: toutes_les_lignes[index].split(separateur)})
    var nouvel_objet = {}

    for (var numero_colonne = 0; numero_colonne < entete.length ; numero_colonne++){
      //console.log(numero_colonne + " " + entete[numero_colonne])
      nouvel_objet[entete[numero_colonne]] = toutes_les_lignes[index].split(separateur)[numero_colonne]
    }

    /*
    console.log(nouvel_objet)
    console.log(entete[0])
    */


    //if(nouvel_objet[entete[0]] > 0) json_final.push(nouvel_objet)
    if(nouvel_objet !== {}) json_final.push(nouvel_objet)
  })

  return json_final

}



function identifiant_par_table(nom_table){

  if(elements_menu_haut_generiques_local.indexOf(nom_table) >= 0){
    var resultat = get_resultat(racine_initiale+'?'+api_initial)
  }else{
    var resultat = get_resultat(racine_data+'?'+apikey)  
  }
  



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

  if (mon_role !== null && mon_role !==undefined){
    //on enleve le S à la fin pour eleves et professeurs
    mon_role = mon_role.substring(0, mon_role.length - 1);

    //si administration alors on envoie l'intitulé de son rôle:
    if (mon_role.includes('Admin')) mon_role = recuperer('mes_donnees') ? JSON.parse(recuperer('mes_donnees'))['Role'] : "";
  }

  return mon_role
  
}


function afficher_clic_droit_param(ceci){
  event.preventDefault();
  event.stopPropagation(); 
  id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)

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

      if(parametre) ajouter_fonction_clic_droit(event,element_DOM("clic_droit_titres_param"),i+1,"afficher_colonne","Afficher <b>"+id_colonne+"</b>",id_colonne,"clic_droit_titre_param")  
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

  id_parametre = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value)

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


    if($("[id='"+id_colonne+"'].header_table.entete_sticky")[0]) {
      $("[id='"+id_colonne+"'].header_table.entete_sticky")[0].style.display = visibilite
    }else{
      return true
    }
    

    //si non visible -> l'enregistrer dans les préfs de l'user
    param_actualisé = ($(".un_menu_orange")[0].id || $(".un_menu_orange")[0].value) + ":" + id_colonne
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
    /*
    for (numero_ligne = 1 ; numero_ligne < $("tr").length ; numero_ligne++){

      //console.log('$("tr")['+numero_ligne+'].children['+numero_colonne+'] à masquer: ' + visibilite)
      $("tr")[numero_ligne].children[numero_colonne].style.display = visibilite

    }*/

    var numero_colonne = $("[id='"+id_colonne+"'].header_table.entete_sticky")[0].cellIndex +1
    //console.log("masquer la colonne " + numero_colonne)
    
    if(visibilite === "none"){
      autoriser_tout_voir(true)
      $('td:nth-child('+numero_colonne+'),th:nth-child('+numero_colonne+')').hide();  
    }else{
      $('td:nth-child('+numero_colonne+'),th:nth-child('+numero_colonne+')').show();  
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
    toolbar: {items : ["heading","|", 'bold', 'italic','fontBackgroundColor',"|", "bulletedList","numberedList","|","blockQuote",'link']},
    typing:
      { tranformations:
        {
          include: ["symbols", "mathematical", "typography", "quotes" ]

        }
      }

  }

  return config;
}

function inserer_element(editor, contenu){
  
  editor.model.change( writer => {
    
    const linkedText = writer.createText( contenu );
    editor.model.insertContent( linkedText, editor.model.document.selection );

  });
  
}



function ordonner_elements(selector, attrName) {
    return $($(selector).toArray().sort(function(a, b){
        var aVal = parseInt(a.getAttribute(attrName)),
            bVal = parseInt(b.getAttribute(attrName));
        return aVal - bVal;
    }));
}


function creer_uuid(){
  return get_resultat_brut("https://www.uuidgenerator.net/api/version4")
}

function motif_conversation(){
  return "|"
}

function ajouter_motif(identifiant){
  return motif_conversation() + identifiant + motif_conversation()
}

function create_id_conv(destinataire, id_conv_initial){
  //uniquement si c'est le id_conv_initial est null
  if(!id_conv_initial){
    return ajouter_motif(recuperer("identifiant_courant")) + ajouter_motif(destinataire)

  //on a déjà un id_conv
  }else{
    return id_conv_initial
  }
}


function recuperer_destinataire(id_conv){
  resultat = id_conv.replaceAll(recuperer("identifiant_courant"),"").replaceAll(motif_conversation(),'').toUpperCase()
  if(!resultat) resultat = recuperer("identifiant_courant").toUpperCase()
  return resultat
}



function changer_mode(sans_changer){

  est_deja_mode_nuit = recuperer("mode_nuit_oui") === "oui"
  if(sans_changer) est_deja_mode_nuit = !est_deja_mode_nuit

  texte_final_mode_nuit_oui = est_deja_mode_nuit ? "" : " ✓"
  classe_finale_body = est_deja_mode_nuit ? "" : "dark-mode"
  mode_nuit_oui_final = est_deja_mode_nuit ? "non" : "oui"

  stocker('mode_nuit_oui',mode_nuit_oui_final)
  if($("#mode_nuit_oui")[0]) $("#mode_nuit_oui")[0].innerText = texte_final_mode_nuit_oui
  $("body").attr("class",classe_finale_body)


  var mode = mode_nuit_oui_final === "oui" ? "night" :  "day" 
  if($("#mode")[0]){
    $("#mode")[0].src = "https://sekooly.com/assets/images/img_"+mode+".png"
  }



}



function mettre_mon_mode(){
  //si t-e -> nouveau
  if(location.href.includes("tele-enseignement")){
    mettre_mon_mode_t_e()
  }else {
    //si index -> normal
    changer_mode(true)

  }
  

}

function mettre_mon_mode_t_e(){

  //mettre le mode nuit pour ceux qui ont en besoin
  $('[class="element-pref"] input').attr("name",function(a,b){
    if(liste_class_avec_fond_mode_nuit.filter(e => e.includes(b)).length > 0){
      //console.log("ajouter le mode nuit!",b)
      $("[name='"+b+"']").parent().parent().append(night_mode_option())
      //console.log("avec class = name de b: ", $("[name='"+b+"']"))
      //console.log("le parent h2: ", $("[name='"+b+"']").parent("h2"))
      //console.log("\n")
    }
  })


  configurer_mode()
  configurer_mode()
}

function night_mode_option(){
  return `

    <h5 class="clickable au-centre" onclick="configurer_mode()">
      <img class="mini-image my-vision-mode" alt="🌙" src="https://raw.githubusercontent.com/Sekooly/SUPABASE/main/docs/images/img_night.png" style="">
      Mode <span class="mode-night">nuit</span>
    </h5> 

  `
}


function configurer_mode(){
  //si on est INITIALEMENT en mode jour -> on change en mode nuit
  //configurer tous les éléments qui sont configurables en mode nuit
  
  //couleur dans la palette
  $('[class="clickable au-centre"]').siblings("h2").children("input").attr( "name", function( i, val ) {
    if(mode_nuit_oui_final === "non"){
      return "darkmode-" + val;
    }else if(mode_nuit_oui_final === "oui"){
      return val.split("darkmode-")[1];
    }
    
  })

  changer_mode()

  var est_nuit = mode_nuit_oui_final === "oui" 
  mode_night = est_nuit ? "nuit" :  "jour" 

  

  liste_class_avec_fond_mode_nuit.forEach(function(une_classe){
    une_classe = est_nuit ? "darkmode-" + une_classe :  une_classe
    actualiser_class_apres_changement_mode(est_nuit,une_classe)  
  })
  

  
  $(".mode-night").text(mode_night)



  $("#body-color").val(rgb2hex($("body").css("background-color")))

  //TODO : changer via liste_class_avec_fond_mode_nuit  
  //$("#fenetre-color").val(rgb2hex($("#fenetre").css("background-color")))
  liste_class_avec_fond_mode_nuit.map(e => 'input[name*="' + e + '"]' ).forEach(function(v){
    
    var className = $(v).attr("name")

    if(className){
      //console.log(className)
      //console.log({valeur_actuelle: $(v).val()})
      var prochaine_couleur = couleur_fond_bis(className)
      //console.log({prochaine_couleur})
      if(prochaine_couleur) $(v).val(prochaine_couleur)
      //console.log({finale: $(v).val()})
      //console.log("\n")
    } 
  })
  

  
  var mode = est_nuit ? "night" :  "day" 
  $(".my-vision-mode").attr("src","https://sekooly.com/assets/images/img_"+mode+".png")




  
}


function actualiser_class_apres_changement_mode(est_mode_nuit,className){
  class_initiale = className.replaceAll("darkmode-","")
  //console.log({class_initiale})

  classe_a_enlever = "darkmode-" + class_initiale

  selector_changement = "[class*='"+class_initiale+"']"
  //console.log({selector_changement})
  if(est_mode_nuit){
    //console.log({"ajouter":classe_a_enlever})
    $(selector_changement).addClass(classe_a_enlever)
  }else{
    //console.log({"enlever":classe_a_enlever})
    $(selector_changement).removeClass(classe_a_enlever)
  }
}



function modifier_donnee_locale(nom_item, champ_reference, valeur_reference, champ_a_actualiser, nouvelle_valeur, plusieurs_elements, fonction_ordonner){

  var donnees = JSON.parse(recuperer(nom_item))
  //alert(recuperer(nom_item))

  //si c'est 1 seul et unique élément
  if ((donnees[champ_reference] && !plusieurs_elements)) donnees = [donnees]

  //console.log(donnees)
  

  //il faut que ce soit un array
  donnees.forEach(function(valeur){
    if(valeur[champ_reference] === valeur_reference){
      valeur[champ_a_actualiser] = nouvelle_valeur
    }
  })

  //console.log(donnees.map(e => e['Date_derniere_modif']))
  if(fonction_ordonner){
    donnees = donnees.sort(fonction_ordonner)
  }
  //console.log(donnees.map(e => e['Date_derniere_modif']))

  if(plusieurs_elements){
    stocker(nom_item, JSON.stringify(donnees))
  }else{
    stocker(nom_item, JSON.stringify(donnees[0]))  
  }
  
  return recuperer(nom_item)

}

function supprimer_donnee_locale(nom_item, champ_reference, valeur_reference){
  var donnees = JSON.parse(recuperer(nom_item))
  donnees_finales = donnees.filter(function(valeur){
    return valeur[champ_reference] !== valeur_reference
  })

  stocker(nom_item, JSON.stringify(donnees_finales))
  return recuperer(nom_item)
}



function tri_ordre_chrono_decroissant_Date_derniere_modif(a, b) {
  return convertir_en_date(b.Date_derniere_modif) - convertir_en_date(a.Date_derniere_modif)
}

String.prototype.replaceAll = function(search, replace) {
    return this.split(search).join(replace);
};



function ajouter_donnee_locale(nom_item, nouvel_item, nom_champ_id, audebut){
  var donnees = JSON.parse(recuperer(nom_item))
  if(!donnees) donnees = []

  //on n'ajoute que s'il existe pas encore
  //la référence doit être résente dans le nouvel élément à rajouter
  if(!donnees.find(e => e[nom_champ_id] === nouvel_item[nom_champ_id])){

    if(audebut){
      donnees.unshift(nouvel_item)
    }else{
      donnees.push(nouvel_item)
    }

  }

  stocker(nom_item, JSON.stringify(donnees))
  return recuperer(nom_item)
}











//nom_du_champ = Classe
//OU
//nom_du_champ = Matiere
function la_matiere_chargee(nom_du_champ){
  //return element_DOM('accueil_utilisateur').innerHTML.split("\n")[0].trim();
  //return $("#accueil_utilisateur")[0].innerText.replace(la_classe,"").trim()


  //si admin final
  if(recuperer("mon_type").includes("Administration_final") && nom_du_champ === "Classe" && $("#accueil_utilisateur")[0].innerText.trim().includes("Vie scolaire")){
      return JSON.parse(recuperer("mes_donnees"))['Cycle']

  //si NON admin bis
  } else if(!recuperer('mon_type').includes("Administration_bis")){

    var dossier_chargé = recuperer("dossier_chargé")
    var mes_matieres = JSON.parse(recuperer("mes_matieres"))
    
    if(dossier_chargé){
      var la_classe_matiere = mes_matieres.find(e => e['ID_URL'] === dossier_chargé)
      if(la_classe_matiere){
        return la_classe_matiere[nom_du_champ]
      }else{
        return "classe_matiere_introuvable" 
      }
    }else{
      return "classe_matiere_introuvable"
    }

  }else{

    //si classe
    //chercher la classe directement depuis accueil utilisateur
    if(nom_du_champ === "Classe") return $("#accueil_utilisateur")[0].innerText.trim()

  }
}


 

function convertir_db(racine_data){
  return 'db.'+racine_data.replace('https://',"").split("/rest/v1")[0]
}




































/************************************************* utile pour rassembler des images (+dom to image) ********************************************/

async function telecharger_tout(sans_enregistrer){
  if(tous_avec_un_fichier("soumettre_devoir")){

    var img = ""
    try{
      img = await domtoimage.toPng($("#tout")[0])
    }catch(e){
      img = ""
      afficher_alerte("Impossible de fusionner les fichiers: ils doivent TOUS être des images.")
    }


    //alert(img)
    if(!sans_enregistrer) enregistrer_image(img, "devoir-fusionné-"+ recuperer("identifiant_courant") + ".png")
    return img
  }else{
    afficher_alerte("Vous n'avez pas fourni toutes les pages que vous avez demandé à ajouter.")
    return ""
  }
}

function vider_previz_devoir_rendu(){
  $("#tout")[0].innerHTML = ""
}

function rassembler(sans_alerte){

  var nb_fichiers = $("#soumettre_devoir > input").length  

  if(tous_avec_un_fichier("soumettre_devoir")){
    //console.log("on est dedans : " + nb_fichiers + " fichiers.")
    vider_previz_devoir_rendu()


    for(numero_fichier = 0; numero_fichier < nb_fichiers; numero_fichier++){
      //console.log(".................." + numero_fichier + "..................")
      $("#tout").append('<img id="result'+numero_fichier+'">')
      
      var indice_input = numero_fichier === 0 ? "" : "_" +numero_fichier 
      var id_fichier_devoir = "file_devoir" + indice_input
      //console.log(id_fichier_devoir)

      if($("#" + id_fichier_devoir).length > 0){
        readImage($("#" + id_fichier_devoir)[0].files[0],numero_fichier)
        if(numero_fichier === nb_fichiers-1) return true
      }
    }

  }else{
    if(!sans_alerte) afficher_alerte("Vous n'avez pas fourni toutes les pages que vous avez demandé à ajouter.")
  }

}

function readImage(file,numero_fichier) {
  // Check if the file is an image.
  if (file.type && !file.type.startsWith('image/')) {
    erreur = '⚠️ Le fichier n°'+numero_fichier+' n\'est pas une image : il ne pourra ni être prévisualisé, ni être fusionné à d\'autres fichiers.'
    alert(erreur)
    console.error(erreur, file.type, file);
    return;
  }

  //console.log(numero_fichier)

  const reader = new FileReader();
  reader.addEventListener('load', async (event) => {
    le_resultat = $("#result" + numero_fichier)[0]
    le_resultat.src = event.target.result;
    //console.log(event.target)

    recuperer_dimensions(reader,afficher_en_bonnes_dimensions,le_resultat)

  });

  reader.readAsDataURL(file);

}

function afficher_en_bonnes_dimensions(valeur,img){
  //alert(valeur[0] + " et " + valeur[1])
  //console.log(img)

  img.width= valeur[0] 
  img.height = valeur[1]

  //console.log(img)
  return valeur
}

function recuperer_dimensions(reader,callback,img){
  var img = new Image;
  var resultat = []
        
        img.onload = function() {
    resultat.push(img.width)
    resultat.push(img.height)
    return callback(resultat,img)
        };

        img.src = reader.result;
}

function tous_avec_un_fichier(id_div_parent){

  avec_fichier = ""

  //pour chaque element fils
  $('[id="'+id_div_parent+'"]').children('input').each(function () {
    avec_fichier += avec_un_fichier(this).toString()
  });


  return !avec_fichier.includes("false")
}

function avec_un_fichier(input_file){
  return input_file.files.length > 0
}

//utiliser: enregistrer_image(await domtoimage.toPng($("#tout")[0]),"test.png") 
function enregistrer_image(dataUrl,nom_fichier) {
      var link = document.createElement('a')
      link.download = nom_fichier
      link.href = dataUrl;
      link.click();
  }


function code_ok(le_resultat,code_saisie){

  //console.log(le_resultat["Code"] + " VS " + code_saisie)
  
  var hash = hasher(le_resultat["Code"])
  //console.log(hash) //le hash de ce qui vient du serveur

  var code_saisie_hashee = hasher(code_saisie)
  //console.log(code_saisie_hashee) //la saisie HASHEE

  var resultat_booleen = le_resultat["code_hash"] === "ok" ? code_saisie_hashee === le_resultat["Code"] : le_resultat["Code"] === code_saisie 


  return resultat_booleen 
}

async function recuperer_mes_donnees(){
  var mes_donnees = []
  var mon_type = recuperer("mon_type").split("_")[0]
  mes_donnees = await rechercher(mon_type,"Identifiant", recuperer("identifiant_courant"))
  

  if(mes_donnees) mes_donnees = mes_donnees[0]

  return mes_donnees
}

function compter(nom_table){

  url = entete_heroku + convertir_db(racine_data) + '/SELECT COUNT(*) as result FROM "'+nom_table+'"'
  return get_resultat(url)
}

function taille_fichier_quiz(liste_questions_str){
  return new Blob([liste_questions_str]).size;
}


function recherche_initiale(nom_table){
  return get_resultat_asynchrone(racine_initiale + nom_table + "?" + api_initial)
}

function recherche_initiale_where(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, nombrelimite, orderby){

  url = racine_initiale + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+api_initial
  url = nom_champ_a_chercher ? url+"&select="+nom_champ_a_chercher : url
  url = nombrelimite ? url+"&limit="+nombrelimite : url
  url = orderby ? url+"&order="+orderby : url
  
  //console.log(url)
  return get_resultat_asynchrone(url)


}



function json_to_url(json_object){
  var retour = ""
  $.each(json_object, (key,valeur) => {
    var prefix = retour === "" ? "?" : "&"
    retour += prefix + key+"="+valeur
  })
  return retour
}



function objectifyForm(id_form) {

  formArray = $("#"+id_form).serializeArray()

  //serialize data function
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++){
      returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}

function my_ctz(){
  return encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone)
}


function hebergeur_defaut(){
  return "https://sekooly.com/assets/images"
}

function hebergeur_actuel(forcing_avec_str){
  return prefixe_image === hebergeur_defaut() ? (forcing_avec_str ? hebergeur_defaut() : "") : prefixe_image
}


function rgb2hex(rgb) {  
  if(!rgb) return '#FFFFFF'

  //console.log({initial: rgb})
  if(rgb.includes("rgba")){
    var dernier_element = rgb.split(",").pop()
    //console.log({dernier_element})
    rgb = rgb.replace("," + dernier_element,")")
    rgb = rgb.replace("rgba","rgb")

  }

  //console.log(rgb)  

  return `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
} 

function rgb2hex_bis(rgb) {
  if (rgb === "rgba(0, 0, 0, 0)") {
    return '#FFFFFF'; //default color
  }
  if(!rgb) return false
  return `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
} 


function couleur_texte(noms_classes,juste_un_selector){

  type_tmp = juste_un_selector ? noms_classes : "h1"
  class_tmp = juste_un_selector ? "" : noms_classes + " tmp"

  //create a h1 element
  tmp = document.createElement(type_tmp)
  tmp.id = "tmp_color"
  tmp.className = class_tmp
  //console.log({noms_classes})

  $("body").append(tmp)

  rgb = $(noms_classes.split(" ").map(e => (juste_un_selector ? "" : ".") +e) + ".tmp").css("color")
  //console.log({rgb})

  $("#"+tmp.id).remove()

  return rgb2hex(rgb) 
}


function couleur_fond(noms_classes,juste_un_selector){

  type_tmp = juste_un_selector ? noms_classes : "h1"
  class_tmp = juste_un_selector ? "" : noms_classes + " tmp"

  //create a h1 element
  tmp = document.createElement(type_tmp)
  tmp.id = "tmp_color"
  tmp.className = class_tmp
  //console.log({noms_classes})

  $("body").append(tmp)

  rgb = $(noms_classes.split(" ").map(e => (juste_un_selector ? "" : ".") +e) + ".tmp").css("background-color")
  //console.log({rgb})

  $("#"+tmp.id).remove()

  return rgb2hex(rgb) 
}



function couleur_fond_bis(noms_classes,juste_un_selector){

  type_tmp = juste_un_selector ? noms_classes : "h1"
  class_tmp = juste_un_selector ? "" : noms_classes + " tmp"

  //create a h1 element
  tmp = document.createElement(type_tmp)
  tmp.id = "tmp_color"
  tmp.className = class_tmp
  //console.log({noms_classes})

  $("body").append(tmp)

  rgb = $(noms_classes.split(" ").map(e => (juste_un_selector ? "" : ".") +e) + ".tmp").css("background-color")
  //console.log({rgb})

  $("#"+tmp.id).remove()

  return rgb2hex_bis(rgb) 
}













function appliquer_preferences(){


  remplacer_image_par_defaut()

  if(data_etablissement['preferences']){
    //console.log("on a des préférences à mettre...")

    //dans le ficher HTML
    //remplacer {{prefixe_image}} par la valeur 
    $.each($("img[src]"), (key,img) => {

      //console.log(img.src)

      the_src = decodeURIComponent(img.src)
      suffixe = the_src.split(hebergeur_defaut())[1]


      if(!suffixe) suffixe = the_src.split(hebergeur_actuel())[1]
      //console.log(prefixe_image + suffixe)
      img.src = prefixe_image + suffixe



    })    


    //actualiser les images
    appliquer_images()

    //actualiser l'image de fond
    appliquer_fond(data_etablissement['preferences']['background'])

    //actualiser les couleurs (+ police)
    appliquer_couleurs()

    //actualiser les formes
    appliquer_formes()
  }


}


function appliquer_fond(oui){
  if(oui){
    $(".sekooly-background").addClass("show")
    $('img[href="'+prefixe_image+'/img_background-image.png"]').show()
    $('[id="my-background-image"]').prop("checked",true)
    data_etablissement['preferences']['background'] = true
  }else{
    $(".sekooly-background").removeClass("show")
    $('img[href="'+prefixe_image+'/img_background-image.png"]').hide()
    $('[id="my-background-image"]').prop("checked",false)
    delete data_etablissement['preferences']['background']
  } 

  mettre_source_background()
}




function remplacer_image_par_defaut(){

  // Select the node that will be observed for mutations
  const targetNode = $("body")[0];

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
      // Use traditional 'for loops' for IE 11
      for(const mutation of mutationsList) {
          if (mutation.type === 'childList') {
              //console.log('A child node has been added or removed.');
          }
          else if (mutation.type === 'attributes') {
              //console.log('The ' + mutation.attributeName + ' attribute was modified.');
          }
      }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(actualiser_image_non_trouvee);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

}



function actualiser_image_non_trouvee(new_node){

  //console.log("NEW NODE!",new_node)

  $("img").off("error")
  $("img").on("error",function(e){
    //console.log(e.target.src , "non trouvée ")
    remplacer_avec_defaut(e)
  });


  ajouter_class_dark_mini_popup_si_besoin()


}

function ajouter_class_dark_mini_popup_si_besoin(){
  var classe_supplementaire = mode_nuit_oui_final === "oui" ? " darkmode-mini_popup" : ""
  if(classe_supplementaire) $(".mini_popup").addClass("darkmode-mini_popup")
}



function appliquer_images(){
  //pour chaque image listée
  $.each($(".une_image"), (key,img) => {
    //console.log(img)
    //console.log(img.innerText)


    //actualiser (chaque image du site) par celle listée    
    $.each($("img[src$='"+img.innerText+"']"), (k,img_locale) => {

      $(img_locale).one("error",function(e){
        //e.preventDefault()
        //console.log("image non trouvée.",img_locale)
        remplacer_avec_defaut(e)
        
      });


      img_locale.src = img.parentNode.href  
          
    })


    //initialiser les préférences si c'est pas encore le cas
    if(!data_etablissement['preferences']){
      data_etablissement['preferences'] = {}      
    }


    data_etablissement['preferences']['prefixe_image'] =   element_DOM("prefixe_image").value ?  element_DOM("prefixe_image").value : hebergeur_defaut()
    

  })


  mettre_source_background()


}

function mettre_source_background(){

  //mettre le background si activé (par défaut: "https://sekooly.com/assets/images/img_background-image.png")
  if(data_etablissement['preferences']['background']){
    element_DOM("background-image").src = prefixe_image + "/img_background-image.png"
  }




}


function remplacer_avec_defaut(e){
  a_changer = e.target.src
  //console.log("à changer: ",a_changer)

  if(!a_changer.includes("undefined")){


    var new_link = hebergeur_defaut() + "/" + a_changer.split("/").pop()
    //console.log("NEW LINK:", new_link)

    e.target.src = new_link
    //console.log("problème de chargement de "+a_changer+": remplacé avec ",e.target.src)


  }
}



function appliquer_couleurs(){
  if(data_etablissement['preferences'] && data_etablissement['preferences']['couleurs']){
    //console.log(data_etablissement['preferences']['couleurs'])
    element_DOM("custom-css").innerText = data_etablissement['preferences']['couleurs']
  }
}



function appliquer_formes(){
  //console.log("TODO...")
}


function envoyer_mon_statut(statut){

  if(recuperer("mon_type")){
    var mon_type = recuperer("mon_type").split("_")[0]
    actualiser(mon_type,"Identifiant",recuperer("identifiant_courant"), {"statut":statut})
  }  

  
}


function verify_local_pass(){
  var plain_code = recuperer("code_saisie") ? recuperer("code_saisie") : ""


  if(plain_code){
    var mon_type = recuperer("mon_type").split('_')[0]
    var moi = recuperer("identifiant_courant")

    var res = get_resultat(racine_data + "rpc/code_ok?mon_type="+mon_type+"&mon_id='"+moi+"'&plain_code='"+plain_code+"'"  + "&" +apikey)
    if(!res || res.length <= 0){
      deconnexion()
      return false

    }else{
      effacer("code_saisie")
      return true
    }

    console.log(res)
  }

}

function right(str, chr) {
  return str.slice(str.length-chr,str.length);
}
 
function left(str, chr) {
  return str.slice(0, chr - str.length);
}