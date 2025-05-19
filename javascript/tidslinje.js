"use strict";

//Vi opretter et array med objekter, som indeholder alt vores information til vores tidslinje. Hvert objekt repræsenterer et punkt i tidslinjen, og vi genererer dynamisk HTML-elementer ud fra disse oplysninger
const story = [
    {
        titel: "Sarah's tidslinje",
        alder: "",
        text:"Læs om Sarah's liv med endometriose, hvordon hun fik sin diagnose, hvilke problemer hun har haft undervejs, og hvad hun til sidst valgte at gøre.",
        expanded: "Den fiktive person Sarah er en repræsentation af hvordan det kan være at leve med endometriose. Hun er baseret på interviews og information man kan finde online."
    },
    {
        titel: "Puberteten",
        alder: "- 13år",
        text:"Sarah fik sin første menstruation (mens), en uge efter hun blev 13. Den tredje gang hun fik sin mens gjorde det mere ondt og i et lidt større område, men fik at vide fra sin mor at det er bare hendes krop der skulle blive vant til det.",
        expanded:"Endometriosevæv begynder ikke at vokse, når man får menstruation første gang, det kan begynde at vokse fra man er helt lille. Endometriosevævet reagerer på de høje hormonniveauer i kroppen under menstruationen og opfører sig ligesom vævet i livmoderen og begynder at krampe og bløde. Dette gør, at kroppen danner arvæv over de områder, der er ramt af endometriose. Arvæv er et problem fordi det er meget stivt og vil ikke bevæge sig.  Dette medfølger, at når man får menstruation igen, vil det både være endometriosevævet der gør ondt men også arvæv der hiver i kroppen. Arvævet kan også gøre ondt selvom man ikke har menstruation, da det ikke går væk."
    },
    {
        titel: "Slemme smerterne",
        alder: "- 16år",
        text:"Da Sarah var 16 fik hun recept på panodil og ipren mod hendes slemme mens smerter, og da hun luftede ideen om at hendes mens ikke var helt normal, sagde lægen bare at nogle gange var man uheldig og fik mange smerter.",
        expanded:"Mange kvinder oplever ikke at blive hørt af læger, eller at lægerne nedspiller deres symptomer. Dette er uafhænigt af lægens eget køn, og er især et problem med endometriose. Der er to måder at diagnoser endometriose på, enten igennem at patienten fortæller hvor ondt de har, eller at man laver ultralydsskanning for at finde tegn på væv der ikke skal være der. En mere invasiv diagnose form er at operere for at finde vævet, da det kan være svært at se på skanninger. Normalt burde menstruationssmerter ikke påvirke din dagligdag udover ubehag og mild smerte, der kan håndteres med ipren."
    },
    {
        titel: "Hormonbehandling",
        alder: "- 20år",
        text:"Da Sarah var 20 var hun til et tjek for livmoderhalskræft og gynækologen nævnte at det så lidt unormalt ud hos hende. Samme uge fik hun tid til en ultralydsscanning, hvor man kunne se små vækster rundt omkring i hendes underliv, især på livmoderen og æggestokkene. Måneden efter var hun begyndt på hormonbehandling mod sin nye endometriose diagnose.",
        expanded:"Indersiden af livmoderen kan blive påvirket af endometriosevæv, der vokser på ydersiden. Dette kan nogle gange ses hos en gynækolog undersøgelse som små buler der presser ind på livmoderen, eller at livmoderen ikke er helt lige så elastisk som den skal være, pga. arvæv der hiver i den. Det der typisk ses på ultralydsskanninger er de ophobninger af blød, der er tilbage efter menstruationen, også kaldet chokolade cyster. Blodet har ikke nogen steder at komme hen når man bløder indvendigt og pga. arvævet kan kroppen ikke optage blodet, derfor hober det sig op i disse cyster, der skaber mere og mere tryk, som de vokser. Cysterne kommer tit på livmoderen og æggestokkene, netop fordi livmoderen har menstruation og dermed også hiver i det væv, der sidder på ydersiden."
    },
    {
        titel: "Operation",
        alder: "- 24år",
        text:"Da Sarah var 24 blev hun nødt til at få en operation for at få fjernet nogle chokolade cyster, ophobninger af gammelt blod, i hendes underliv da de var vokset for store og havde meget arvæv. Cysterne gav hende meget ømhed i maven og hun følte sig ofte fyldt ud pga det.",
        expanded:"Endometriose er en kronisk betændelsestilstand, men betændelse kan varierer meget i sværhedsgrad og påvirkning. Det er også derfor at nogle med endometriose har smerter konstant fordi deres væv er så betændt og irriteret. De får altså ikke fred når deres menstruation er overstået. Betændelse er desuden sundhedsskadeligt i længden og kan føre til hjerte-kar-sygdomme og et svækket immunforsvar. Typisk bliver endometriosevæv fundet i den nederste del af bughulen, altså omkring livmoderen, tarmen, blæren og nyrerne. Men kan også være andre steder, såsom på lungerne, i halsen, eller i meget sjældne tilfælde udvendigt på huden ved fx. navlen eller omkring negleroden."
    },
    {
        titel: "Gift",
        alder: "- 29år",
        text:"Da Sarah var 29 blev hun gift og ville gerne have et barn med sin mand. Hun tog til lægen og snakkede om hendes muligheder med sin diagnose og fik at vide at hun ville have en lavere chance for at blive gravid pga. arvæv på hendes æggestokke, men det var muligt.",
        expanded:"Endometriosevæv reagerer på østrogen ligesom det væv som sidder i livmoderen, endometrium, som endometriose er navngivet efter. Østrogen er med til at styre kroppens menstruationscyklus. Når østrogenniveauet i kroppen falder, begynder menstruationen, når de yderste lag af endometrium går i stykker og bløder. Når selve menstruationen er ovre, fortsætter menstruationscyklussen og øger østrogenen i kroppen igen, der hjælper livmoderen til at blive klar til muligvis at blive gravid, og gro nyt endometrium væv. På samme måde har endometriosevævet en cyklus, der følger kroppens egen, bløder under menstruationen og vokser bagefter. Grunden til at endometriosevævet kan vokse og sprede sig, er fordi vævet er i stand til at optage aromatase, det stof der bruges til at producere østrogen, og dermed lave sit eget. Sådan promoverer endometriosevævet sin egen vækst, og kan i nogle tilfælde skabe hormon ubalance i kroppen."
    },
    {
        titel: "Gravid",
        alder: "- 31år",
        text:"Da Sarah var 31 lykkedes det hende at blive gravid. Den første måned havde hun ikke smerter fordi hendes mens stoppede, men efter det begyndte det at gøre ondt hele tiden. Hun tog til lægen som konkluderede at hun havde noget arvæv der gjorde at hendes livmoder ikke kunne vokse korrekt. Hun endte med at skulle have en operation mere for at fjerne det arvæv, der sad i vejen.",
        expanded:"Under graviditet stopper den normale menstruationscyklus, og gør at kroppen ikke får et lavt østrogen niveau. Fordi det er det lave østrogen niveau der får endometriosevæv til at bløde. Under graviditeten udvider livmoderen sig for at gøre plads til barnet der vokser. Denne udvidelse og omrokering i bughulen hiver ofte i arvæv, der er dannet pga. endometriose og giver smerter. Hvis arvævet er slemt nok eller sidder dårligt, kan det skabe komplikationer ved graviditeten og give smerter, og typisk vil blive fjernet ved operation. Et normalt niveau af østrogen ligger mellem 30-400 pg/mL og under graviditeten kan nå op på over 6000 pg/mL til sidst i graviditeten. Selvom at østrogen niveauet bliver så højt betyder det ikke at endometriosevævet vokser ekstra meget, og i nogle tilfælde vokser det slet ikke under graviditeten men bliver den størrelse, det var før."
    },
    {
        titel: "Tilbagevendt",
        alder: "- 33år",
        text:"Da Sarah blev 33 var hun lige blevet færdig med at amme sit barn. Kort efter begyndte hendes mens igen og hendes normale endometriose smerter kom tilbage. Pausen fra smerterne havde været god for Sarah, men hun er samtidig meget udmattet over at skulle døje med det igen.",
        expanded:"Efter gradviditet falder østrogenniveauet i kroppen meget, og forbliver lavt så længe man ammer. Dette sker fordi kroppen producerer Prolaktin, som er det hormon der bruges til at producere brystmælk, men Prolaktin går også ind og hæmmer ægløsning. Det vil sige, at menstruationscyklussen ikke kan bevæge sig fra det lave østrogen niveau op til det høje. Lavt østrogen har en negativ effekt på endometriosevæv, hvor enkelte områder kan dø helt pga. manglen på østrogen. Mange oplever en lindring i endometriose smerter efter amning, og lindringen virker til at have en direkte korrelation med længden på amning. Det vil sige, jo længere tid man ammer, jo mindre smerte bagefter. Arvæv og chokolade cyster forsvinder ikke ligesom endometriosevævet, og vil fortsætte med at skabe betændelse og smerte."
    },
    {
        titel: "Valget",
        alder: "- 36år",
        text:"Da Sarah var 36, havde hun og hendes mand besluttet, at de ikke ville have flere børn. Derfor tog hun kontakt til sin læge om at få hendes livmoder opereret ud for at lindre symptomerne på endometriose. Lægen fortalte at det ikke var en mirakelløsning, men det burde hjælpe en del på hendes smerte.",
        expanded:"Endometriose er ikke en livmoder sygdom, men en sygdom der typisk sidder rundt om livmoderen. Ved at fjerne livmoderen kan man stoppe menstruationscyklussen og dermed mindske ens østrogen niveau. Ved at kontrollere sine hormoner på den måde kan man nemmere styre endometriosen og smerter derfra. Kønshormoner som østrogen og testosteron en vigtig del af kroppens normale balance og derfor kan man ikke undvære at have mindst en af dem. Kønshormoner hjælper blandt andet hjernen med at regulere følelser og andre typer for hormoner og signalstoffer i kroppen. Mangel på kønshormon vil også føre til knoglesvind, en tilstand som hedder osteoporosis. Derfor skal nogen tage supplerende hormonbehandling efter fjernelse af livmoderen for at sikre kroppen kan regulere sig selv."
    },
    {
        titel: "Livmoder fjernes",
        alder: "- 37år",
        text:"Året efter fik Sarah operationen. Her fjernede de hendes livmoder og alt det endometriosevæv, de kunne finde. I dag er Sarahs smerte meget mere håndterbar. Sarah fortryder ikke sine valg, og lever sit liv fuldt ud med sin mand og deres barn.",
        expanded:"Endometriose kan ramme alle, ikke kun kvinder, men fordi endometriosevævet reagerer på østrogen er det kun tydeligt hos dem har et højt niveau at østrogen. Det samme væv som udgør endometriose kan også vokse inde i livmoderen, dette hedder adenomyose, og de to sygdomme kan opstå på samme tid. Adenomyose giver også smerter, arvæv og komplikationer, og er også kendt som “intern endometriose”."
    }
]

//Finder vores beholder der har hele tidslinjene.
const timelineContainer = document.getElementById("timeline-container")

//Denne function gør 2 ting, laver vores tidslinje med alle items fra arrayen, og 3 ekstra i starten og slutningen. requestAnimationFrame bliver brugt til at sikre når vi bruger vores infiniteScroll function længere nede at DOMen opdatere flydende og ikke skaber et brat hop og istedet visuelt flyder sammen. Dette gør den ved at tage positionen i den forkortede array og hopper usynligt hen til den tilsvarende position i den fulde array.
function timelineStart(timePoints){
    const prependItems = timePoints.slice(-3);
    const appendItems = timePoints.slice(0, 3);
    const extendedTimeline = [...prependItems, ...timePoints, ...appendItems];

    timelineContainer.innerHTML = "";

    extendedTimeline.forEach((point, index) => {
        const timeElement = document.createElement("article");
        timeElement.classList.add("timeline-item");
        timeElement.innerHTML = `
        <section class="time-box">
            <h2 class="main-titel">${point.titel}</h2>
            <h2 class="age-titel">${point.alder}</h2>
            <p class="main-text">${point.text}</p>
            <button class="text-btn" onclick="expand()">Læs mere</button>
        </section>`;
        timelineContainer.appendChild(timeElement);
    })

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const middleIndex = prependItems.length;
            const middleChild = timelineContainer.children[middleIndex];
            const centerOffset = middleChild.offsetLeft - (timelineContainer.offsetWidth / 2) + (middleChild.offsetWidth / 2);
            timelineContainer.scrollLeft = centerOffset;
            });
    });
};

//Her kalder vi vores timeline så den er synlig med det samme man er på siden.
timelineStart(story)

const overlay = document.getElementById("info-box");
const overlayText = document.getElementById("udvidet-tekst");
const closeOverlayBtn = document.getElementById("luk");

//Denne variable holder styr på om der trækkes (dragges), hvor brugeren startede, og hvor tidslinjen var scroll'et til ved starten af drag. Bruges til både mus og touch.
let isDragging = false, startX, startScrollLeft;

//Her starter vi en drag-handling ved at registrere brugerens startposition med enten mus eller touch. Gemmer også scrollpositionen, så vi kan beregne ny position under drag.
const dragStart = (e) =>{
    if (e.type === "touchstart") {
        isDragging = true;
        timelineContainer.classList.add("dragging");
        startX = e.touches[0].pageX;
        startScrollLeft = timelineContainer.scrollLeft;
        e.preventDefault();
    } else if (e.type === "mousedown"){
    isDragging = true;
    timelineContainer.classList.add("dragging");
    startX = e.pageX
    startScrollLeft = timelineContainer.scrollLeft
    }
}

//Her får vi så opdateret positionen som man bevæger mus eller finger og oversætter det til bevægelse på skærmen.
const dragging = (e) => {
    if(!isDragging) return;

    if (e.type === "touchmove") {
        const currentX = e.touches[0].pageX;
        timelineContainer.scrollLeft = startScrollLeft - (currentX - startX);
        e.preventDefault();
    } else if (e.type === "mousemove") {
        const currentX = e.pageX;
        timelineContainer.scrollLeft = startScrollLeft - (currentX - startX);
    }
}

//Her kan vi se når drag eventet er slut og kan retuner til normal opførelse.
const dragStop = () =>{
    isDragging = false;
    timelineContainer.classList.remove("dragging");
}

//Det er denne variable der gør os i stand til at stimulere en uendelig tidslinje, ved at finde en masse information såsom mængden af items, størrelsen på items, sætte en max og min scroll og definere hvor den skal hoppe hen.
const infiniteScroll = () => {
    const items = document.querySelectorAll(".timeline-item");
    if (!items.length) return;

    const itemWidth = items[0].offsetWidth + 64;
    const totalRealItems = story.length;
    const buffer = itemWidth;
    const scrollLeft = timelineContainer.scrollLeft;
    const maxScroll = itemWidth * (totalRealItems + 3);
    const minScroll = itemWidth * 3;

    if (scrollLeft < minScroll - buffer) {
        timelineContainer.scrollLeft += itemWidth * totalRealItems;
    }

    if (scrollLeft > maxScroll - buffer) {
        timelineContainer.scrollLeft -= itemWidth * totalRealItems;
    }
};

const textButton = document.querySelector(".text-btn");
const closeButton = document.getElementById("luk");
console.log(textButton);
console.log(closeButton);

function expand() {
    console.log("hej Bertram");
    
    const infoBox = document.getElementById("info-box");
    const exBox = document.getElementById("udvidet-kasse");
    const expandedText = document.getElementById("udvidet-tekst");

    console.log("0");



    console.log("1");

    infoBox.classList.remove("hidden");
    exBox.classList.remove("hidden");
    expandedText.classList.remove("hidden");
    closeButton.classList.remove("hidden");
    infoBox.classList.add("show");
    exBox.classList.add("show");
    expandedText.classList.add("show");
    closeButton.classList.add("show");
}

function close(){
    const infoBox = document.getElementById("info-box");
    const exBox = document.getElementById("udvidet-kasse");
    const expandedText = document.getElementById("udvidet-tekst");

    infoBox.classList.remove("show");
    exBox.classList.remove("show");
    expandedText.classList.remove("show");
    closeButton.classList.remove("show");
    infoBox.classList.add("hidden");
    exBox.classList.add("hidden");
    expandedText.classList.add("hidden");
    closeButton.classList.add("hidden");
}

//Vores eventListeners sikre at vores script køre responsivt og er interaktivt, uanset om du er på computer eller en tablet.
timelineContainer.addEventListener("scroll", infiniteScroll);
textButton.addEventListener("click", expand);
closeButton.addEventListener("click", close);

timelineContainer.addEventListener("mousedown", dragStart);
timelineContainer.addEventListener("mousemove", dragging);
timelineContainer.addEventListener("mouseup", dragStop);

//passive: false, gør det muligt at kalde e.preventDefault() under touch-events, hvilket forhindrer browserens standard scrolling og giver en glidende og kontrolleret brugeroplevelse.
timelineContainer.addEventListener("touchstart", dragStart, {passive: false});
timelineContainer.addEventListener("touchmove", dragging, {passive: false});
timelineContainer.addEventListener("touchend", dragStop);