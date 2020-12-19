
function se_deconnecter(){
  /*
  firebase.database().goOffline()
  firebase.app().delete()
  */
}


window.onbeforeunload = function() {
   se_deconnecter()
   //return "A bientôt."
}


function maintenant(){
	
	try{    
    var date_serveur = rechercher_tout('rpc/maintenant')
    return moment(date_serveur['responseJSON']).format("DD/MM/YYYY HH:mm:ss")

	}catch(e){
		return (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString()		
	}
			
		
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

//limité à 2000
function rechercher_tout(nom_table){
  url = racine_data + nom_table + "?" + apikey + "&limit=2000"
  return get_resultat_asynchrone(url)
}

//on renvoie un array vide si non trouvé, la valeur sinon
function rechercher(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, nombrelimite){

  url = racine_data + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+apikey
  url = nom_champ_a_chercher ? url+"&select="+nom_champ_a_chercher : url
  url = nombrelimite ? url+"&limit="+nombrelimite : url
  
  return get_resultat_asynchrone(url)


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
    console.log(data);


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

    ajouter_un_element("Logs",nouveau_data)

    if (partir){

      if(recuperer('mes_donnees').length>0){
        //partir sur la page tele-enseignement
        window.location.href="tele-enseignement"
      }
      

    }
}

function chargement(oui){
  $("#img_chargement")[0].style.display = oui ? "" : "none";
}


function stocker(nom_variable,valeur_variable){
	window.localStorage.setItem(nom_variable,valeur_variable)
}

function recuperer(nom_variable){
	return window.localStorage.getItem(nom_variable)	
}

function effacer(nom_variable){
	window.localStorage.removeItem(nom_variable)	
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


async function switcher_le_champ(nom_champ, nouvelle_valeur){
  /*
    valeur_finale = nouvelle_valeur
    racine_data.update({[nom_champ] : valeur_finale})
    console.log(valeur_finale)
    return valeur_finale
    */
}








function extension_ok(extension){
	return ",bmp,gif,jpeg,jpg,png,svg,pdf,bmp,xlsx,xls,xlsm,ppt,pptx,doc,docx,txt,html,csv,js,rtf,mp4,mp3,wav,youtube,".includes(","+extension.toLowerCase()+",")
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


function afficher_date(element, sans_heure){

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