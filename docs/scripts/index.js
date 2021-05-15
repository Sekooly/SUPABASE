var identifiant = document.getElementById('Identifiant')
var code = document.getElementById('Code')
var remarque = document.getElementById('remarque')
var connect = document.getElementById('connect')
var est_premier_clic = true
var nb_clics = Number(recuperer("nb_clics") ? recuperer("nb_clics") : 0)

function se_connecter(){


  // détecte le premier clic
  if(nb_clics > 1) {
    est_premier_clic  = false

  }

  // le nombre de clics augmente
  nb_clics += 1
  stocker("nb_clics",nb_clics)
  //console.log(nb_clics)

  // si il y a une date_heure_depassement 
  if(recuperer("date_heure_depassement")){

    // ajouter 30 secondes d'attente
    date_heure_delai_attente_ok = moment(recuperer("date_heure_depassement")).add(30,'seconds')
    //console.log("date_heure_delai_attente_ok: " + date_heure_delai_attente_ok._d)

    // regarder si on a dépassé ces 30 secondes d'attente
    date_heure_maintenant = moment(maintenant())
    //console.log("date_heure_maintenant: " + date_heure_maintenant._d)
    delai_attente_ok = date_heure_maintenant > date_heure_delai_attente_ok  
    //console.log("delai_attente_ok: " + delai_attente_ok)
    
  //pas de date_heure_depassement -> delai_attente_ok au nombre de clics
  }else{
    delai_attente_ok = nb_clics <= 5
  }


  // si pas au premier clic ET on a une date_heure_depassement > date_heure_maintenant ET plus de 5 clics
  if(!est_premier_clic && !delai_attente_ok){
    stocker("date_heure_depassement",maintenant())
    date_heure_delai_attente_ok = moment(recuperer("date_heure_depassement")).add(30,'seconds')
    affichage_date_heure_depassement = moment(date_heure_delai_attente_ok._d).format("DD/MM/YYYY HH:mm:ss")
    chargement(false)
    actualiser_remarque("Vous avez cliqué trop de fois le bouton de connexion.<br>Merci de réessayer dans 30 secondes, soit le " + affichage_date_heure_depassement + ".<br><br><i>NB: Changer l'heure de votre système ne vous permettra PAS d'accéder plus tôt à la plateforme.</i>","","",true)
    return false

  //delai attente ok OU premier clic
  }else{
    //s'il y avait initialement un date heure de dépassement -> on remet le compteur de clics à zero
    if(recuperer("date_heure_depassement")) nb_clics = 0

    //plus de date heure de dépassement
    effacer("date_heure_depassement")
    //console.log("connexion réussie")
  }


  actualiser_remarque("")
  chargement(true)
  
  
  // avec identifiant ET code d'accès
  if( valeur_identifiant() === "" || code.value === ""){
    actualiser_remarque("L'identifiant et le code d'accès ne peuvent pas être vides pour vous connecter.","","")
    return false
  }


  //essayer en tant qu'admin -> si trouvé, on quitte
  me_chercher_dans_la_table("Administration").then( snapshot => {
    
    //si admin
    if (snapshot !== null && snapshot.length > 0){

      if (bon_mdp(snapshot)){

        //si maintenance -> erreur
        est_en_maintenance().then(valeur => {

          if(valeur === "oui"){


            //sans droit_hors_maintenance  -> stopper
            if(renvoyer_resultat(snapshot)['droit_hors_maintenance'] === "non"){
              actualiser_remarque("La plateforme SEKOOLY est actuellement en maintenance: veuillez réessayer plus tard.", recuperer_donnee(snapshot, 'Classe'), "")
              return 0;  

            //avec droit_hors_maintenance 
            }else{
              recuperer_mes_donnees(snapshot)
            }
          

          //pas de mainetnance
          }else{
            //console.log("dans le non")
            recuperer_mes_donnees(snapshot)
          }

        })       
        

      }else{
        actualiser_remarque("Code d'accès erroné: veuillez réessayer. <br> Si vous avez perdu votre code d'accès merci de contacter l'Administration de votre établissement.", recuperer_donnee(snapshot, 'Role'), "Administration")
      }




    //si NON admin
    }else{

      //si maintenance -> erreur
      est_en_maintenance().then(valeur => {
        //console.log(valeur)
        
        if(valeur === "oui"){
        
          actualiser_remarque("La plateforme SEKOOLY est actuellement en maintenance: veuillez réessayer plus tard.", "introuvable", "")
          return true;
        
        }else{




          //essayer en tant que prof
          me_chercher_dans_la_table("Profs").then( snapshot => {
            //console.log("Profs?")


            //si prof
            if (snapshot !== null && snapshot.length > 0){

              if (bon_mdp(snapshot)){
                recuperer_mes_donnees(snapshot)
              }else{
                actualiser_remarque("Code d'accès erroné: veuillez réessayer. <br> Si vous avez perdu votre code d'accès merci de contacter l'Administration de votre établissement.", "Prof", "Profs")
              }

            }else{

              //essayer en tant qu'élève
              me_chercher_dans_la_table("Eleves").then( snapshot => {
        
                //si Eleves
                if (snapshot !== null && snapshot.length > 0){

                  if (bon_ecolage(snapshot)){
                    if (bon_mdp(snapshot)){
                      recuperer_mes_donnees(snapshot)
                    }else{
                      actualiser_remarque("Code d'accès erroné: veuillez réessayer. <br> Si vous avez perdu votre code d'accès merci de contacter l'Administration de votre établissement.",recuperer_donnee(snapshot, 'Classe'), "Eleves")
                    }
                  }else{

                    contact_economat = data_etablissement['contact_economat'] ? ' au ' + data_etablissement['contact_economat'] : ""
                    actualiser_remarque("Frais de scolarité non régularisés. <br> Veuillez contacter l'Économat ou de l'Administration de votre établissement"+contact_economat+".",recuperer_donnee(snapshot, 'Classe'), "Eleves")

                  }

                //aucun des 3 -> introuvable
                }else{
                    actualiser_remarque("Identifiant '" + valeur_identifiant() + "' non reconnu: veuillez réessayer. <br> Si vous avez perdu votre identifiant merci de contacter l'Administration de votre établissement.","introuvable", "introuvable")
                }    
                

              })

            }      
          })



        }


      })


      
    }      
  })




}




function me_chercher_dans_la_table(nom_table){
  return rechercher(nom_table,"Identifiant",identifiant.value)
  
}


function bon_mdp(snapshot){
  var le_resultat = renvoyer_resultat(snapshot)
  //console.log(le_resultat["Code"]) //récupéré depuis le serveur

  var hash = hasher(le_resultat["Code"])
  //console.log(hash) //le hash de ce qui vient du serveur

  var code_saisie_hashee = hasher(code.value)
  //console.log(code_saisie_hashee) //la saisie HASHEE

  var resultat_booleen = le_resultat["code_hash"] === "ok" ? code_saisie_hashee === le_resultat["Code"] : le_resultat["Code"] === code.value 


  return resultat_booleen 
}

function bon_ecolage(snapshot){
  var le_resultat = renvoyer_resultat(snapshot)
  return le_resultat["Ecolage_OK"] === "oui"
  return true
}

function recuperer_donnee(snapshot, nom_donnee){

  var le_resultat = renvoyer_resultat(snapshot)
  return le_resultat[nom_donnee]

}


function rechercher_dans_gestionnaire(nom_table, nom_champ_reference, valeur_champ_reference, nom_champ_a_chercher, nombrelimite){

  url = racine_initiale + nom_table + "?"+nom_champ_reference+"=eq."+valeur_champ_reference+ "&"+api_initial + ordonner(nom_table)
  url = nom_champ_a_chercher ? url+"&select="+nom_champ_a_chercher : url
  url = nombrelimite ? url+"&limit="+nombrelimite : url
  
  return get_resultat_asynchrone(url)


}



function recuperer_mes_donnees(snapshot){

  var le_resultat = renvoyer_resultat(snapshot)
  var la_classe = le_resultat['Classe']
  var mon_type = le_resultat['type']
  var mon_cycle = le_resultat['Cycle']
  var ma_classe = le_resultat['Classe']

  //console.log(ma_classe)
  
  var code_hash = le_resultat['code_hash']
  var nouveau_code = hasher(le_resultat['Code'])

  if (code_hash === null || code_hash === undefined || code_hash === "nok"){
    actualiser_en_hash_code(mon_type, identifiant, nouveau_code, code_hash)
  }

  //console.log(le_resultat)

  chercher_mes_matieres(mon_type, mon_cycle, ma_classe).then(snapshot => {
    
    lignes_matieres = snapshot
    if (lignes_matieres !== null){
      if (typeof(lignes_matieres) === "object") lignes_matieres = Object.values(lignes_matieres)
    }



    //stocker identifiant + les 3 données
    stocker("identifiant_courant",valeur_identifiant())
    stocker("mes_donnees",JSON.stringify(le_resultat))
    stocker("mes_matieres",JSON.stringify(lignes_matieres))
    stocker("mon_type",mon_type)

    


    //API UTILES
    rechercher_dans_gestionnaire("API", "id", "1").then(snap => {
      les_API = renvoyer_resultat(snap)

      //console.log(les_API['API_KEY_DEVOIR'])

      
      //1 seul API si eleves
      if (mon_type === "Eleves"){

        stocker('API_KEY_DEVOIR',les_API['API_KEY_DEVOIR'])

      //stocker 3 API si PAS eleves
      }else{

        stocker('API_KEY_DELETE',les_API['API_KEY_DELETE'])
        stocker('API_KEY_RENAME',les_API['API_KEY_RENAME'])
        stocker('API_KEY_UPLOAD',les_API['API_KEY_UPLOAD'])        

      }
      

      //CALENDRIER DE MES CLASSES (todo)
      
      //DOSSIER DE MON CYCLE
      rechercher('ID_RENDUS','Cycle',mon_cycle,"dossier_rendus_cycle").then(snap => {
         stocker('dossier_rendus_cycle', snap[0]['dossier_rendus_cycle'])
      })    



      //envoyer mon log et partir
      mon_role = init_mon_role()
      envoyer_log(le_resultat['Identifiant'], "Connexion valide", ma_classe, mon_role, true)
      
    

    })



  })

  chargement(false)

}

//une fois seulement
function actualiser_en_hash_code(type, identifiant, code, code_hash){
  if (code_hash === undefined || code_hash === "nok" ||code_hash === null){

    var nom_table = type
    var nom_champ_reference = "Identifiant"
    var valeur_champ_reference = valeur_identifiant()
    var nouveau_data = {
      "Code" : code,
      "code_hash" : "ok"
    }

    console.log(nouveau_data)

    actualiser(nom_table, nom_champ_reference, valeur_champ_reference, nouveau_data)

  }
    
  
}


function actualiser_remarque(valeur_remarque, ma_classe, mon_type, sans_envoyer_le_log){
  $("#remarque")[0].innerHTML = valeur_remarque  
  chargement(false)
  
  if (valeur_remarque !=="" ){
    mon_role = init_mon_role()
    if(!sans_envoyer_le_log) envoyer_log(valeur_identifiant(), valeur_remarque, ma_classe, mon_role)
  }


}


 async function chercher_mes_matieres(mon_type, mon_cycle, ma_classe){

  if (mon_type === "Administration"){
    //dans la table Matieres, on cherche toutes les matières dont le cycle est le mien
    return rechercher("Matieres", "Cycle", mon_cycle).then(e => {return e})

  }else if (mon_type === "Profs"){
    //dans la table Matieres, on cherche toutes les matières dont la Classe_Matiere est à moi
    les_classes_matieres = ma_classe.split(";")
    un_retour = []
    for (var i = 0; i< les_classes_matieres.length;i++) {
      await rechercher_contenant_motif("Matieres", "Classe_Matiere", les_classes_matieres[i], "", 1).then(une_matiere => {
        
        //console.log(une_matiere)
        if (une_matiere.length > 0){
          une_matiere = renvoyer_resultat(une_matiere)
          //console.log("on ajoute la matiere " + une_matiere['Classe_Matiere'])
          un_retour.push(une_matiere)
        }
      })    
    }

    //console.log("on renvoie "+ un_retour)
    return un_retour
      

  }else if (mon_type === "Eleves"){
    //dans la table Matieres, on cherche toutes les matières dont la Classe est à moi
    un_retour = await rechercher("Matieres", "Classe", ma_classe)
    console.log(un_retour)
    return un_retour
  }
  
}


function initialisation(){

  //plateforme_prete = get_resultat_brut(racine_data)

  //si plateforme_prete = faux -> initialisation
  
  //sinon -> normal

  chargement(false)
  mettre_mon_mode()
  actualiser_remarque("")
  sans_donnees_initiales()
  mettre_le_bon_focus()
  mettre_le_contact_etablissement()
  sur_valider_se_connecter()
  aucun_API()
  sans_logo_vide()


}

function sans_logo_vide(){
  if($('#logo_etablissement')[0].src.split("/").pop() === "null") $('#logo_etablissement').remove()
}

function aucun_API(){
  effacer("API_KEY_DELETE")
  effacer("API_KEY_DEVOIR")
  effacer("API_KEY_RENAME")
  effacer("API_KEY_UPLOAD")
  effacer("dossier_chargé")
  effacer("dossier_rendus_cycle")
}

function sur_valider_se_connecter(){
  document.addEventListener("keydown", function (e){
    if(e.keyCode === 13){
      se_connecter()
    }
  })

}




function sans_donnees_initiales(){
  stocker('mes_donnees','');
  stocker('mes_matieres','');
  effacer('mes_calendriers');
}

function mettre_le_bon_focus(){
  identifiant.value = recuperer("identifiant_courant")
  if (identifiant.value !== ""){
    code.focus()
  }else{
    identifiant.focus()
  }
}


function valeur_identifiant(){
  return identifiant.value.trim().toLowerCase()
}


$('#connect').on("click", function(e){
  se_connecter()
})


initialisation()

