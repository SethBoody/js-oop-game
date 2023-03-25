function Character(name , stringth, health){
    this.name = name;
    this.stringth = stringth;
    this.health = health;
    this.element= new UIElement(this.name);
};

function UIElement(name){
    this.attackBtn = document.querySelector(`#${name}-attack`);
    this.healthBtn = document.querySelector(`#${name}-make-health`);
    this.alive = document.querySelector(`#${name}-alive`);
    this.progress = document.querySelector(`.${name}-health span`);

}

Character.prototype.attack = function(opponent){//like this methodes put it in the prototype better than another place
    
    if(opponent.health > 0){
        opponent.health -= this.stringth;
        opponent.element.progress.style.width = `${opponent.health}%`;

    } else{
        opponent.element.attackBtn.remove();
        opponent.element.healthBtn.remove();
        opponent.element.alive.innerHTML = `${opponent.name } is died`
    }
};

Character.prototype.stuts = function(){
    console.log(`Name : ${this.name}`);
    console.log(`Stingth : ${this.stringth}`);
    console.log(`Health : ${this.health}`);
};

Character.prototype.makeHealth = function(){
    if(this.health < 100){
        this.health += 10
        this.element.progress.style.width = `${this.health}%`;

    }

    if(this.health>100){
        this.health=100;
    }
};

let nartoo = new Character('nartoo',10 , 100);
let sasakii = new Character('sasakii',10 , 100);


nartoo.element.attackBtn.addEventListener("click", function(){
    nartoo.attack(sasakii);
});

sasakii.element.attackBtn.addEventListener("click", function(){
    sasakii.attack(nartoo);
});

nartoo.element.healthBtn.addEventListener("click", function(){
    nartoo.makeHealth();
});

sasakii.element.healthBtn.addEventListener("click", function(){
    sasakii.makeHealth();
});