let root = document.querySelector('#root');

let render = {
    display : function() {
        user_components.ac_user_prompt();
    }
}

let components = {  
    hello: function(msg) {
        alert(msg);
    },
    ac_prompt: function(msg, name) {
        ac_user_test = prompt(msg);
        
        user_components[name] = ac_user_test;

        console.log(user_components);
    }
}


user_components = {
    ac_user_prompt : function() {
        components.ac_prompt('zgeregh', 'azerty')
    },
    ac_user_hello : function() {
        components.ac_prompt('zgeregh', 'azerty')
    }

    // [components.ac_prompt, ['pmprgrh', 'azerty']]
};


start.addEventListener('click', function() { render.display() })

// hello('Salut le monde !');