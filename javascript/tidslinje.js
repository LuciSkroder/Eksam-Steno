"use strict";

const story = [
    {
        titel: "Sarah's tidslinje", 
        text:"Læs om Sarah's liv med endometriose, hvordon hun fik sin diagnose, hvilke problemer hun har haft undervejs, og hvad hun til sidst valgte at gøre."
    },
    {
        titel: "Puberteten",
        alder: "- 13år",
        text:"Sarah fik sin første menstruation (mens), en uge efter hun blev 13. Den tredje gang hun fik sin mens gjorde det mere ondt og i et lidt større område, men fik at vide fra sin mor at det er bare hendes krop der skulle blive vant til det.",
        expanded:""
    },
    {
        titel: "Slemme smerterne",
        alder: "- 16år",
        text:"Da Sarah var 16 fik hun recept på panodil og ipren mod hendes slemme mens smerter, og da hun luftede ideen om at hendes mens ikke var helt normal, sagde lægen bare at nogle gange var man uheldig og fik mange smerter.",
        expanded:""
    },
    {
        titel: "Hormonbehandling",
        alder: "- 20år",
        text:"Da Sarah var 20 var hun til et tjek for livmoderhalskræft og gynækologen nævnte at det så lidt unormalt ud hos hende. Samme uge fik hun tid til en ultralydsscanning, hvor man kunne se små vækster rundt omkring i hendes underliv, især på livmoderen og æggestokkene. Måneden efter var hun begyndt på hormonbehandling mod sin nye endometriose diagnose.",
        expanded:""
    },
    {
        titel: "Operation",
        alder: "- 24år",
        text:"Da Sarah var 24 blev hun nødt til at få en operation for at få fjernet nogle chokolade cyster, ophobninger af gammelt blod, i hendes underliv da de var vokset for store og havde meget arvæv. Cysterne gav hende meget ømhed i maven og hun følte sig ofte fyldt ud pga det.",
        expanded:""
    },
    {
        titel: "Gift",
        alder: "- 29år",
        text:"Da Sarah var 29 blev hun gift og ville gerne have et barn med sin mand. Hun tog til lægen og snakkede om hendes muligheder med sin diagnose og fik at vide at hun ville have en lavere chance for at blive gravid pga. arvæv på hendes æggestokke, men det var muligt.",
        expanded:""
    },
    {
        titel: "Gravid",
        alder: "- 31år",
        text:"Da Sarah var 31 lykkedes det hende at blive gravid. Den første måned havde hun ikke smerter fordi hendes mens stoppede, men efter det begyndte det at gøre ondt hele tiden. Hun tog til lægen som konkluderede at hun havde noget arvæv der gjorde at hendes livmoder ikke kunne vokse korrekt. Hun endte med at skulle have en operation mere for at fjerne det arvæv, der sad i vejen.",
        expanded:""
    },
    {
        titel: "Tilbagevendt",
        alder: "- 33år",
        text:"Da Sarah blev 33 var hun lige blevet færdig med at amme sit barn. Kort efter begyndte hendes mens igen og hendes normale endometriose smerter kom tilbage. Pausen fra smerterne havde været god for Sarah, men hun er samtidig meget udmattet over at skulle døje med det igen.",
        expanded:""
    },
    {
        titel: "Valget",
        alder: "- 36år",
        text:"Da Sarah var 36, havde hun og hendes mand besluttet, at de ikke ville have flere børn. Derfor tog hun kontakt til sin læge om at få hendes livmoder opereret ud for at lindre symptomerne på endometriose. Lægen fortalte at det ikke var en mirakelløsning, men det burde hjælpe en del på hendes smerte.",
        expanded:""
    },
    {
        titel: "Livmoder fjernes",
        alder: "- 37år",
        text:"Året efter fik Sarah operationen. Her fjernede de hendes livmoder og alt det endometriosevæv, de kunne finde. I dag er Sarahs smerte meget mere håndterbar. Sarah fortryder ikke sine valg, og lever sit liv fuldt ud med sin mand og deres barn.",
        expanded:""
    }
]

const timelineContainer = document.getElementById("timeline-container")

function timelineStart(timePoints){
    timelineContainer.innerHTML = "",

    timePoints.forEach((point) => {
        const timeElement = document.createElement("article");
        timeElement.innerHTML = `
        <h2>${point.titel}</h2>
        <p>${point.text}</p>
        <button>Læs mere</button>`;

        timelineContainer.appendChild(timeElement);
    })
};

timelineStart(points)