// old code
  // var weekday = new Array(7);
  // weekday[0] = "Dimanche";
  // weekday[1] = "Lundi";
  // weekday[2] = "Mardi";
  // weekday[3] = "Mercredi";
  // weekday[4] = "Jeudi";
  // weekday[5] = "Vendredi";
  // weekday[6] = "Samedi";
  // var month = new Array(12);
  // month[0] = "Janvier" ;
  // month[1] = "Fevrier";
  // month[2] = "Mars";
  // month[3] = "Avril";
  // month[4] = "Mai";
  // month[5] = "Juin";
  // month[6] = "Juillet";
  // month[7] = "Aout";
  // month[8] = "Septembre";
  // month[9] = "Octobre";
  // month[10] = "Novembre";
  // month[11] = "Decembre";
  // var addmin = "";
  // if( min < 10) {  addmin = "0" }


// up to date
  var t = new Date();

  joursemaine = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
  mois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
  var j = joursemaine[t.getDay()];
  var d = t.getDate();
  var m = mois[t.getMonth()];
  var h = t.getHours();
  var min = t.getMinutes();
  var addmin = ((min < 10) ? "0" : "" );
  var temps = h + (min / 60);
  var tday = new Object();

switch (j) {
    case "Dimanche":
        tday.matin = "ferme";
        tday.aprem = "ferme";
        break;
    case "Lundi":
        tday.matin = "ouvert";
        tday.aprem = "ouvert";
        break;
    case "Mardi":
        tday.matin = "ouvert";
        tday.aprem = "ouvert";
        break;
    case "Mercredi":
        tday.matin = "ouvert";
        tday.aprem = "ouvert";
        break;
    case "Jeudi":
        tday.matin = "ouvert";
        tday.aprem = "ouvert";
        break;
    case "Vendredi":
        tday.matin = "ouvert";
        tday.aprem = "ouvert";
        break;
    case "Samedi":
        tday.matin = "ouvert";
        tday.aprem = "ferme";
};
    var message = "";
    // function isOpen(temps) {
    if( (temps >= 8.5 && temps <= 12 && tday.matin == "ouvert") || (temps >= 14 && temps <= 17.5 && tday.aprem == "ouvert" ) ){
      message = "le cabinet est ouvert";
    } else {
    message = "le cabinet est ferme";
    };
  // }

// isOpen(hmin);
// isOpen(hmin);

// if < 8.5 else if < 17.5 else le cabinet est ferme

// weekday.attributes(matin,apresmidi)

// objet jour attribut matin apres midi valeur permanence, activite normale, ferme, radio uniquement( resultat le lendemain s)


// exception db, into array, if t = exception break
// exception2 jour ferie


// si le cabinet est ferme = envoyez nous un mail
// si le cabinet est ouvert, envoyez un mail pour quon vous appelle (mailer) OU appelez nous
// devise add exception
