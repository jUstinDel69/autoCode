// let root = document.querySelector('#root');

// let ctx = root.getContext("2d");



root.tab();
root.tabCaracter();
// levels.getLevels();


// let render = {
//     ac_commandes : '',
//     display : function() {
//         // this.ac_commandes = document.querySelector('#ac_commandes').value;
        
//         // render.canvas();
//         user_components.ac_user_prompt();
//         user_components.ac_user_hello(user_components.azerty);
//         // render.canvasText(user_components.azerty);
//     },
//     // canvas : function() {
//     //     this.canvasResolution();

//     //     this.canvasImage();

        
//     // },
//     // canvasResolution() {
//     //     root.width = window.innerWidth - (window.innerWidth * 30 / 100);
//     //     root.height = window.innerHeight;
        
//     // },
//     // canvasImage() {
//     //     this.toDataURL('medias/images/spider-man.png', function(dataUrl) {

//     //         img = new Image();

//     //         img.src = dataUrl;
            
//     //         ctx.drawImage(img, 0, 0, root.width, root.height);
//     //     })
//     // },
//     // canvasText : function(valText) {
//     //     ctx.font = '48px serif';
//     //     ctx.fillText(valText, 10, 50);
//     // },

//     //Conversion d'une image vers base64 avec l'URL
//     // toDataURL : function(url, callback) {
//     //     var xhr = new XMLHttpRequest();
//     //     xhr.onload = function() {
//     //         var reader = new FileReader();
//     //         reader.onloadend = function() {
//     //         callback(reader.result);
//     //         }
//     //         reader.readAsDataURL(xhr.response);
//     //     };
//     //     xhr.open('GET', url);
//     //     xhr.responseType = 'blob';
//     //     xhr.send();
//     // },

// }



// let components = {  
//     ac_hello: function(msg) {
//         alert(msg);
//     },
//     ac_prompt: function(msg, name) {
//         ac_user_test = prompt(msg);
        
//         user_components[name] = ac_user_test;
//     }
// }


// user_components = {
//     ac_user_prompt : function() {
//         components.ac_prompt('zgeregh', 'azerty')
//     },
//     ac_user_hello : function(foo) {
//         components.ac_hello(foo)
//     }

//     // [components.ac_prompt, ['pmprgrh', 'azerty']]
// };


// start.addEventListener('click', function() { render.display() })

// // hello('Salut le monde !');