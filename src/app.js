    let who = ['Mi tia', 'Mi primo', 'Mi perro', 'Mi hermano'];
    let action = ['daño', 'tiró', 'mordió', 'se llevó'];
    let what = ['mi tarea', 'mi telefono', 'mi libro','mi laptop'];
    let when = ['antes de clase', 'ayer', 'la semana pasada']
    
    let randmWho = Math.floor(Math.random() * who.length);
    let randmAction = Math.floor(Math.random() * action.length);
    let randmWhat = Math.floor(Math.random() * what.length);
    let randmWhen = Math.floor(Math.random() * when.length);

    let excusaFinal = who[randmWho] + " " + action[randmAction]+ " " + what[randmWhat]+ " " + when[randmWhen]+ "."
    document.querySelector("#excusa").innerHTML = excusaFinal;