let memoire = -1;
let position = -1;
let win =0;
//-------------------------------------------------------------
// Fonction qui melange les données d'un tableau
//-------------------------------------------------------------
function melange(tableau){
	// je créer le tableau qui sera mélangé
	let tableau2 =[];
	let taille = tableau.length;
	for(let i =0;i<taille;i++){
		do{
			// x est généré au hazard 0 et 15 (16-1) taille -1
			x = Math.floor(Math.random() * taille);
		}while(tableau2[x] != undefined);
		// tableau2[x] <- tableau[i]
		tableau2[x] = tableau[i];
	}
	return tableau2;
}
//-------------------------------------------------------------

// ETAPE 3 
// Afficher 16 paires de tuiles(prises parmi les 42 tuiles) mélangées
//-------------------------------------------------------------
// Création du tableau de 0 à 
//-------------------------------------------------------------
let tab42=[]; // je declare un tableau	
for (let i =0; i<42;i++) // i varie de 0 à 31
{
	tab42.push(i);
}
// j'ai pris toutes les tuiles
// et je les mélange
tab42 = melange(tab42);
//-------------------------------------------------------------
// je prends 16 tuiles
// à partire de lindice 0 , je prends 16 tuiles

let tab16 = tab42.splice(0,16);
console.log(tab16);
// tab32 = tab +tab16
let tab32 = tab16.concat(tab16);
// on re mélange
tab32 = melange(tab32);
//-------------------------------------------------------------
// affichage du tableau
//-------------------------------------------------------------
// console.log(tab);
for (let i =0; i<tab32.length;i++)
{
	// je met le selecteur sur la div container
	let container = document.querySelector('.container');
	// je met le selecteur sur le template
	let template = document.querySelector('#tuile');
	let clone 	= template.content.cloneNode(true);
	// clone = <div><img src="" width="80"></div>
	// objectif mettre l attribut src de l image à ./classic/0.jpg
	let str = './classic/'+ tab32[i] +'.jpg';
	clone.querySelector('img').setAttribute('src',str);
    clone.querySelector('img').setAttribute('data-indice',i);
    clone.querySelector('img').onclick = function()
    {
        //this.remove(); // etape 4 effacer une tuile
        // si premier clique -> je memorise
        if(memoire == -1)
        {
            memoire = this.getAttribute('src');
            position = this.getAttribute('data-indice');
            console.log(position);
        }
         // sinon je compare
        // j'efface
        else
        {
            let memoire2 = this.getAttribute('src');
            let position2 = this.getAttribute('data-indice');
            if (( memoire == memoire2) && (position != position2))
            {
                // if ...
                console.log('trouvé !!!!');
                //memoire = './classic/4.jpg'
                // position data-num="position"
                this.remove();
                // pour selectionner la 1ere tuile
                // le selecteur en fonction d'un attribut
                console.log(position);
                document.querySelector('img[data-indice="'+position+'"]').remove();
                win++;
            }
            position = -1;
            memoire = -1; // vider la memoire
            if (win == 16)
            {
                alert('GAGNE !!!');
            }
        }
       
    }
	container.appendChild(clone);
}
//-------------------------------------------------------------

