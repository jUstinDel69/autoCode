let levels = {
    now: Date.now(),

    levelsData: [],

    idEtape: 0,

    responseIdEtape: 0,

    getLevels: function () {
        fetch('js/levels.json')
            .then((response) => response.json())
            .then(function (json) {
                levels.levelsData = json;

                // levels.thisLevel(0);

                levels.response(0);
            });
    },

    thisLevel: function (newId) {
        levels.idEtape = newId;

        // document.querySelector('#levelTitle').innerHTML = levels.levelsData['level_1'].title;


    },

    addEtapeDiscussion: function () {

        if (levels.levelsData['level_1'].etapes[levels.idEtape][0] == 'José') {
            classParoles = 'playerNameCaracter';
        } else {
            classParoles = 'caracterNameCaracter';
        }


        date = new Date(this.now);

        testDiv = document.createElement("li");
        testDiv.classList.add(classParoles);

        testDiv.innerHTML = '<div class="nameCaracter">' + levels.levelsData['level_1'].etapes[levels.idEtape][0] + '</div><div class="paroles">' + levels.levelsData['level_1'].etapes[levels.idEtape][1] + '</div><div class="time">' + date.getHours() + 'h ' + date.getMinutes() + 'min</div>';

        document.querySelector('#levelText').appendChild(testDiv);

        // document.querySelector('#levelText').innerHTML += '<li class="' + classParoles + '"><div class="nameCaracter">' + levels.levelsData['level_1'].etapes[levels.idEtape][0] + '</div><div class="paroles">' + levels.levelsData['level_1'].etapes[levels.idEtape][1] + '</div><div class="time">' + date.getHours() + 'h ' + date.getMinutes() + 'min</div></li>';

        //Scrool tout en bas
        element = document.querySelector('#levelText');
        element.scrollTop = element.scrollHeight;
    },



    response: function (setIdEtape) {
        html = '';
        this.idEtape = setIdEtape;

        this.responseIdEtape = setIdEtape;


        //Si le joueur doit répondre

        if (levels.levelsData['level_1'].etapes[setIdEtape][0] != 'José') {
            //Vibrate
            window.navigator.vibrate(200);
            //Ding
            var audioNotif = new Audio('/medias/sound/notif.wav');
            audioNotif.play();

            for (let i = 0; i < levels.levelsData['level_1'].etapes[this.responseIdEtape][2].length; i++) {
                responseIdEtape = this.responseIdEtape + 1;

                html += '<li id="" onclick="levels.response(' + levels.levelsData['level_1'].etapes[this.responseIdEtape][2][i] + ')">' + levels.levelsData['level_1'].etapes[levels.levelsData['level_1'].etapes[this.responseIdEtape][2][i]][1] + '</li>';
            }
            document.querySelector('#levelOptions').innerHTML = html;

            //Affichage du nouveau message
            this.addEtapeDiscussion();
        } else {
            //Sinon reponse de l'ordinateur


            // document.querySelector('#fakeInput').innerHTML = 'test';



                document.querySelector('#levelOptions').innerHTML = "Entrain de répondre";

                this.addEtapeDiscussion();

                setTimeout(() => {
                    this.response(levels.levelsData['level_1'].etapes[this.idEtape][2][0])
                }, Math.floor(Math.random() * (1000 - 0 + 1) + 0));
            
        }
        // } else {
        //     console.log('Player attend réponse')


        // }

    }
}

levels.getLevels();