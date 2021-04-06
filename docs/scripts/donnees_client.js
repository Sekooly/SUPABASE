var racine_initiale = CryptoJS.AES.decrypt("U2FsdGVkX1+qVhXtmzuyvtxmZTuvxGQ2QPShnrhive7hBJythO8qt49+JUGsU4ZR1QRcbnfq6DKx99A1cJT4ONISOmvFNL3qvMuGNO+gX8A=","Sekooly").toString(CryptoJS.enc.Utf8)
var api_initial = CryptoJS.AES.decrypt("U2FsdGVkX19+C33B2kOwfoYtDZ+ZKPTmOByBFIxifMImy7qLsskt0qK1z00tlzOB4Lbdf8ag8BS+MbImCxVGy+OxlD3EdcL0OkT2gvtTOmRq8TW3tfcpQc/3FEztsr+u/Sh+OfLBBTrYheKiU5Rw8w7qYzzD+XljpMzS8FVXhrJ95Ga/uzm74wNE2xmqhCKUvMXm2/v4XxPk+1OvoP1lYr/+nSAEGE5qpobtY8Y56Tw=","Sekooly").toString(CryptoJS.enc.Utf8)




var site_actuel = window.location.href.split(".")[0]
var nom_etablissement = site_actuel.includes("localhost") ? "hibiscus" : site_actuel.split('https://')[1]
console.log(nom_etablissement)
var url = racine_initiale + "Etablissements?nom_etablissement=eq." + nom_etablissement + "&" + api_initial
//console.log(url)
var data_etablissement = get_resultat(url)
if(data_etablissement) data_etablissement = data_etablissement[0]



var racine_data = data_etablissement["racine_data"] 
//console.log(racine_data)
var apikey = "apikey=" + data_etablissement["apikey"]
var contact_etablissement = data_etablissement["contact_etablissement"]
var nom_fichier_logo =  data_etablissement["nom_fichier_logo"]
var site_etablissement =  data_etablissement["site_etablissement"]
//console.log(apikey)


//pour savoir comment fonctionne l'api, faire get_resultat_asynchrone(racine_data+"?"+apikey)
