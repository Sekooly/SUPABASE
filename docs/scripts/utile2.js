
const { createClient } = supabase
var supabase = null

function se_connecter_a_la_db(){
	var ma_racine = racine_data.replaceAll("/rest/v1/","")
	var anonkey = apikey.replaceAll("apikey=","")
	supabase = createClient(ma_racine, anonkey)

	//console.log(supabase)

}

async function rechercher_supabase(nom_table, nom_champ_ref, valeur_champ_ref, nom_champ_recherche){


	var resultats = await supabase
	  .from(nom_table)
	  .select()
	  .filter(nom_champ_ref, 'eq', valeur_champ_ref)
	  .then(e => e.data)
	
	return resultats
}

se_connecter_a_la_db()

