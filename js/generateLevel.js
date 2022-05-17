let generate = {
    autoSave: function () {
        inputToSave = document.querySelectorAll('.save');

        for (let i = 0; i < inputToSave.length; i++) {
            inputToSave[i].addEventListener('change', function () {
                level[inputToSave[i].id] = inputToSave[i].value;


                root.setCookie(inputToSave[i].id, inputToSave[i].value, 30);
            });
        }
    },
}

let level = {
    nameLevel: ""
}

let root = {
    valueSplit: [],
    inputNameLevel: document.querySelector('#nameLevel'),

    getSave: function () {

        this.valueSplit = document.cookie.split(`;`)

        for (i = 0; i < this.valueSplit.length; i++) {
            valueSave = this.valueSplit[i].split(`=`)


            id = valueSave[0].trim();
            value = valueSave[1].trim();

            document.querySelector('#' + id).value = value;
            level[id] = value;
        }
    },
    setCookie: function (cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
}
let generateJSON = {
    data: [],

    toJSON: function () {
        objData = {
            title: level.nameLevel,
            description: level.descriptionLevel,
            etapes: []
        }

        etapeComponents = document.querySelector('.saveEtape');

        this.data['level_2'] = objData;
        
        arrayEtape = [];
        
        for (let i = 0; i < etapeComponents.length; i++) {
            inputPersonnage = document.querySelector('#etape_' + i + '_caracter');
            inputParoles = document.querySelector('#etape_' + i + '_parole');
            
            this.data.level_2.etapes.push([inputPersonnage.value, inputParoles.value, []]);
        }

        // this.data['level_2'] = json;
        // console.log();

        json = JSON.stringify(this.data);


        //Dowlading json file 

        var hiddenElement = document.createElement('a');

        hiddenElement.href = 'data:attachment/json,' + encodeURI(json);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'autoCode_evels.json';
        hiddenElement.click();

    },
    getJSON: function () {
        fetch('js/levels.json')
            .then((response) => response.json())
            .then(function (json) {
                generateJSON.data = json;
                generateJSON.toJSON();
            });
    }
}
root.getSave();
generate.autoSave();

document.querySelector('#buttonCreate').addEventListener('click', function () {
    generateJSON.getJSON();
});