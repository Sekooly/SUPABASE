var identifiant = document.getElementById('Identifiant')
var code = document.getElementById('Code')
var remarque = document.getElementById('remarque')
var connect = document.getElementById('connect')



function se_connecter(){

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

                    actualiser_remarque("Frais de scolarité non régularisés. <br> Veuillez contacter l'Économat ou de l'Administration de votre établissement.",recuperer_donnee(snapshot, 'Classe'), "Eleves")

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
  ///return le_resultat["Ecolage_OK"] === "oui"
  return true
}

function recuperer_donnee(snapshot, nom_donnee){

  var le_resultat = renvoyer_resultat(snapshot)
  return le_resultat[nom_donnee]

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
    rechercher("API", "id", "1").then(snap => {
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


function actualiser_remarque(valeur_remarque, ma_classe, mon_type){
  $("#remarque")[0].innerHTML = valeur_remarque
  
  if (valeur_remarque !=="" ){
    mon_role = init_mon_role()
    envoyer_log(valeur_identifiant(), valeur_remarque, ma_classe, mon_role)
  }


  chargement(false)
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



function recuperer_contact_etablissement(){
  /*const requete = firebase.database().ref(nom_etablissement+"/Contact")
  return retour_promise(requete)*/
  hey = function(){
    return ""
  }
  return new Promise(hey)
}



function initialisation(){
  chargement(false)
  actualiser_remarque("")
  sans_donnees_initiales()
  mettre_le_bon_focus()
  mettre_le_contact_etablissement()
  sur_valider_se_connecter()
  aucun_API()

}

function aucun_API(){
  effacer("API_KEY_DELETE")
  effacer("API_KEY_DEVOIR")
  effacer("API_KEY_RENAME")
  effacer("API_KEY_UPLOAD")
  effacer("dossier_rendus_cycle")
}

function sur_valider_se_connecter(){
  document.addEventListener("keydown", function (e){
    if(e.keyCode === 13){
      se_connecter()
    }
  })

}

function mettre_le_contact_etablissement(){
  var le_contact = recuperer('contact_etablissement')

  if (le_contact === null || le_contact === "null" || le_contact === undefined || le_contact === ""){
    recuperer_contact_etablissement().then(snapshot => {
      le_contact = snapshot      
      $("#contact_etablissement")[0].href = "mailto:"+le_contact
      $("#contact_etablissement")[0].innerText = le_contact
      stocker('contact_etablissement',le_contact)
    })
  }


  $("#contact_etablissement")[0].href = "mailto:"+le_contact
  $("#contact_etablissement")[0].innerText = le_contact
  stocker('contact_etablissement',le_contact)

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

