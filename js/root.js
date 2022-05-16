
let root = {
    tab : function() {
        document.querySelector('.tab').addEventListener('click', function() {
            console.log('zgrg');
            document.querySelector('#Container' + this.id).classList.toggle('display-none');
        });
    },
    tabCaracter : function() {
        for(i = 0; i < personnages.person.length; i++) {
            document.querySelector('#ContainertabCaracters').innerHTML += (`
            
            <h4>${personnages[personnages.person[i]].name} ${personnages[personnages.person[i]].surname}</h4>
            <hr>
            ${personnages[personnages.person[i]].age} ans.  
            `);
        }
    }
}