const add = document.getElementById("add");

const position = document.getElementById("position");

function goalkeeper() {
    const statistiqueGK = document.querySelector(".statistiqueGK")
    const statistique = document.querySelector(".statistique")
    if (position.value === "GK") {
        statistique.style.display = 'none';
        statistiqueGK.style.display = 'grid';
    } else {
        statistiqueGK.style.display = 'none';
        statistique.style.display = 'grid';
    }
}
position.addEventListener('change', goalkeeper)
goalkeeper();

const counter = {
    "GK": 0,
    "CMR": 0,
    "CML": 0,
    "CM": 0,
    "CBL": 0,
    "CBM": 0,
    "LB": 0,
    "RB": 0,
    "LW": 0,
    "RW": 0,
    "ST": 0,
}

const max = {
    "GK": 1,
    "CMR": 1,
    "CML": 1,
    "CM": 1,
    "CBL": 1,
    "CBM": 1,
    "LB": 1,
    "RB": 1,
    "LW": 1,
    "RW": 1,
    "ST": 1,
}

add.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const nomExiste = document.querySelectorAll('.nomJoueur');
    for (let i = 0; i < nomExiste.length; i++) {
        if (nomExiste[i].textContent === name) {
            alert("le nom existe deja, saisir un autre nom");
            return;
        }
    }
    counter[position.value]++;
    if (counter[position.value] > max[position.value]) {
        const carteReserve = document.querySelectorAll(".carteReserve")
        for (let i = 0; i < carteReserve.length; i++) {
            const card = carteReserve[i];
            const photo = document.getElementById("photo").value;
            const Nationalite = document.getElementById("Nationalite").value;
            const flag = document.getElementById("flag").value;
            const logo = document.getElementById("logo").value;
            const rating = document.getElementById("rating").value;

            const infos = card.querySelector(".infos")
            const ratingJoueur = infos.querySelector('.ratingJoueur')
            const positionJoueur = infos.querySelector('.positionJoueur')
            const flagImg = infos.querySelector('#flagImg')
            const logoImg = infos.querySelector('#logoImg')

            const img = card.querySelector(".img")
            const photoImg = img.querySelector('#photoImg')

            const nomStat = card.querySelector(".nomStat")
            const nomJoueur = nomStat.querySelector('.nomJoueur')

            const stats = card.querySelector(".stats")

            const button=card.querySelector(".button")
            const modifier=button.querySelector(".edit")
            const supprimer=button.querySelector(".delete")

            if (ratingJoueur.textContent === '' &&
                positionJoueur.textContent === '' &&
                nomJoueur.textContent === '' ){
                modifier.src = './images/editer (1).png'
                supprimer.src = './images/supprimer (1).png'
                ratingJoueur.textContent = rating
                positionJoueur.textContent = position.value
                flagImg.src = flag
                logoImg.src = logo
                photoImg.src = photo
                nomJoueur.textContent = name

                if (position.value === "GK") {
                    const diving = document.getElementById("diving").value;
                    const handling = document.getElementById("handling").value;
                    const kicking = document.getElementById("kicking").value;
                    const reflexes = document.getElementById("reflexes").value;
                    const speed = document.getElementById("speed").value;
                    const positioning = document.getElementById("positioning").value;

                    const divingJoueur = stats.querySelector('.divingJoueur')
                    const handlingJoueur = stats.querySelector('.handlingJoueur')
                    const kickingJoueur = stats.querySelector('.kickingJoueur')
                    const reflexesJoueur = stats.querySelector('.reflexesJoueur')
                    const speedJoueur = stats.querySelector('.speedJoueur')
                    const positioningJoueur = stats.querySelector('.positioningJoueur')

                    divingJoueur.textContent = diving
                    handlingJoueur.textContent = handling
                    kickingJoueur.textContent = kicking
                    reflexesJoueur.textContent = reflexes
                    speedJoueur.textContent = speed
                    positioningJoueur.textContent = positioning
                
                } else {

                    const pace = document.getElementById("pace").value;
                    const shooting = document.getElementById("shooting").value;
                    const passing = document.getElementById("passing").value;
                    const dribbling = document.getElementById("dribbling").value;
                    const defending = document.getElementById("defending").value;
                    const physical = document.getElementById("physical").value;

                    const paceJoueur = stats.querySelector('.paceJoueur')
                    const shootingJoueur = stats.querySelector('.shootingJoueur')
                    const passingJoueur = stats.querySelector('.passingJoueur')
                    const dribblingJoueur = stats.querySelector('.dribblingJoueur')
                    const defendingJoueur = stats.querySelector('.defendingJoueur')
                    const physicalJoueur = stats.querySelector('.physicalJoueur')

                    paceJoueur.textContent = pace
                    shootingJoueur.textContent = shooting
                    passingJoueur.textContent = passing
                    dribblingJoueur.textContent = dribbling
                    defendingJoueur.textContent = defending
                    physicalJoueur.textContent = physical
                }
            document.querySelector(".form").reset();
            goalkeeper();
                    return;
            }
        }
    } else {
        const photo = document.getElementById("photo").value;
        const Nationalite = document.getElementById("Nationalite").value;
        const flag = document.getElementById("flag").value;
        const logo = document.getElementById("logo").value;
        const rating = document.getElementById("rating").value;


        const carte = document.getElementById("carte" + position.value)
        const infos = carte.querySelector(".infos")
        const ratingJoueur = infos.querySelector('.ratingJoueur')
        const positionJoueur = infos.querySelector('.positionJoueur')
        const flagImg = infos.querySelector('#flagImg')
        const logoImg = infos.querySelector('#logoImg')

        const img = carte.querySelector(".img")
        const photoImg = img.querySelector('#photoImg')

        const nomStat = carte.querySelector(".nomStat")
        const nomJoueur = nomStat.querySelector('.nomJoueur')

        const stats = carte.querySelector(".stats")
        const button=carte.querySelector(".button")
        const modifier=button.querySelector(".edit")
        const supprimer=button.querySelector(".delete")


        ratingJoueur.textContent = rating
        positionJoueur.textContent = position.value
        flagImg.src = flag
        logoImg.src = logo
        photoImg.src = photo
        nomJoueur.textContent = name
        modifier.src = './images/editer (1).png'
        supprimer.src = './images/supprimer (1).png'

        if (position.value === "GK") {
            const diving = document.getElementById("diving").value;
            const handling = document.getElementById("handling").value;
            const kicking = document.getElementById("kicking").value;
            const reflexes = document.getElementById("reflexes").value;
            const speed = document.getElementById("speed").value;
            const positioning = document.getElementById("positioning").value;

            const divingJoueur = stats.querySelector('.divingJoueur')
            const handlingJoueur = stats.querySelector('.handlingJoueur')
            const kickingJoueur = stats.querySelector('.kickingJoueur')
            const reflexesJoueur = stats.querySelector('.reflexesJoueur')
            const speedJoueur = stats.querySelector('.speedJoueur')
            const positioningJoueur = stats.querySelector('.positioningJoueur')

            divingJoueur.textContent = diving
            handlingJoueur.textContent = handling
            kickingJoueur.textContent = kicking
            reflexesJoueur.textContent = reflexes
            speedJoueur.textContent = speed
            positioningJoueur.textContent = positioning
        } else {
            const pace = document.getElementById("pace").value;
            const shooting = document.getElementById("shooting").value;
            const passing = document.getElementById("passing").value;
            const dribbling = document.getElementById("dribbling").value;
            const defending = document.getElementById("defending").value;
            const physical = document.getElementById("physical").value;

            const paceJoueur = stats.querySelector('.paceJoueur')
            const shootingJoueur = stats.querySelector('.shootingJoueur')
            const passingJoueur = stats.querySelector('.passingJoueur')
            const dribblingJoueur = stats.querySelector('.dribblingJoueur')
            const defendingJoueur = stats.querySelector('.defendingJoueur')
            const physicalJoueur = stats.querySelector('.physicalJoueur')

            paceJoueur.textContent = pace
            shootingJoueur.textContent = shooting
            passingJoueur.textContent = passing
            dribblingJoueur.textContent = dribbling
            defendingJoueur.textContent = defending
            physicalJoueur.textContent = physical
        }
        document.querySelector(".form").reset();
        goalkeeper();
    }




});


    const edits=document.querySelectorAll(".edit");
    edits.forEach(edit=>{
        edit.addEventListener('click',(event)=>{
            event.preventDefault();
           

            const joueurs = document.querySelectorAll(".joueur")
            joueurs.forEach(joueur=>{
                joueur.addEventListener('click',(event)=>{

                const name = joueur.querySelector('.nomJoueur').textContent;
                const photo = joueur.querySelector('#photoImg').src;
                const flag = joueur.querySelector('#flagImg').src;
                const logo = joueur.querySelector('#logoImg').src;
                const rating = joueur.querySelector('.ratingJoueur').textContent;
                const positionJoueur=joueur.querySelector('.positionJoueur').textContent

                document.getElementById("name").value = name;
                document.getElementById("photo").value = photo;
                document.getElementById("flag").value = flag;
                document.getElementById("logo").value = logo;
                document.getElementById("rating").value = rating;
                document.getElementById("position").value = positionJoueur;
                    console.log(positionJoueur);
                    
                if (positionJoueur === "GK") {
                    alert('fcdxs')

                    const diving = joueur.querySelector("#diving").textContent;
                    const handling = joueur.querySelector("#handling").textContent;
                    const kicking = joueur.querySelector("#kicking").textContent;
                    const reflexes = joueur.querySelector("#reflexes").textContent;
                    const speed = joueur.querySelector("#speed").textContent;
                    const positioning = joueur.querySelector("#positioning").textContent;

                    document.getElementById("diving").value=diving;
                    document.getElementById("handling").value=handling;
                    document.getElementById("kicking").value=kicking;
                    document.getElementById("reflexes").value=reflexes;
                    document.getElementById("speed").value=speed;
                    document.getElementById("positioning").value=positioning;
                    console.log(diving);
                    
                } else {
                    
                    const pace = joueur.querySelector("#pace").textContent;
                    const shooting = joueur.querySelector("#shooting").textContent;
                    const passing = joueur.querySelector("#passing").textContent;
                    const dribbling = joueur.querySelector("#dribbling").textContent;
                    const defending = joueur.querySelector("#defending").textContent;
                    const physical = joueur.querySelector("#physical").textContent;

                    document.getElementById("pace").value=pace;
                    document.getElementById("shooting").value=shooting;
                    document.getElementById("passing").value=passing;
                    document.getElementById("dribbling").value=dribbling;
                    document.getElementById("defending").value=defending;
                    document.getElementById("physical").value=physical;

                    alert('hey')
                
                }
                })
            })
        })
    })


    
    













