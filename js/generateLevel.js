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
    valueSplit : [],
    inputNameLevel : document.querySelector('#nameLevel'),

    getSave : function() {
        
        this.valueSplit = document.cookie.split(`;`)
        
        for(i = 0; i < this.valueSplit.length; i++) {
            valueSave = this.valueSplit[i].split(`=`)

            
            id = valueSave[0].trim();
            value = valueSave[1].trim();
            
            document.querySelector('#' + id).value = value;
            level.nameLevel = valueSave[1];
        }
    },
    setCookie: function (cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
}

root.getSave();
generate.autoSave();