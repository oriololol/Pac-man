document.addEventListener("DOMContentLoaded", () => {
    const scoreDisplay = document.getElementById("score");
    const grid = document.querySelector('.grid');
   const levelDisplay = document.getElementById("level")
   

    const width = 28;
    let score = 0;
    let level = 1;
    

    //0-punts
    //1-muro
    //2-fantasma
    //3-poder
    //4-buit
    const layout1 = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 4, 4, 4, 4, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 2, 2, 2, 2, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        4, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 4,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 4, 4, 4, 4, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
    const layout2 = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    const layout3 = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
        1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1,
        1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1,
        1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 3, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1,
        1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1,
        1, 0, 1, 0, 1, 3, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
       

    ]
    const cuadrados = []
    function createboard(layout) {
        
        for (let i = 0; i<layout.length; i++) {
            const cuadro = document.createElement('div')
            cuadro.id = i
            grid.appendChild(cuadro);
            cuadrados.push(cuadro)
            if (layout[i] == 0) {
                cuadrados[i].classList.add('puntets')
            }
            if (layout[i] === 1) {
                cuadrados[i].classList.add('muro')
            }
            if (layout[i] === 2) {
                cuadrados[i].classList.add('fantasma')
            }
            if (layout[i] === 3) {
                cuadrados[i].classList.add('poder')
            }
            if (layout[i] === 4) {
                cuadrados[i].classList.add('buit')
            }

        }
    }
    createboard(layout1);
   
    let pacmanIndex = 490
    cuadrados[pacmanIndex].classList.add('pac-man')
    function movePacman(tecla){
        cuadrados[pacmanIndex].classList.remove('pac-man')
        if(tecla.key === 'w' && !cuadrados[pacmanIndex-width].classList.contains("muro")){
            pacmanIndex -= width
        }
        
        if(tecla.key === 's' && !cuadrados[pacmanIndex+width].classList.contains("muro")){
            pacmanIndex += width
        }
        
        if(tecla.key === 'a' && !cuadrados[pacmanIndex-1].classList.contains("muro")){
            pacmanIndex -= 1
            if(pacmanIndex==364){
                pacmanIndex=391
            }
            
        }
        
        if(tecla.key === 'd' && !cuadrados[pacmanIndex+1].classList.contains("muro")){
            pacmanIndex += 1
            if(pacmanIndex==391){
                pacmanIndex=364
            }
            
        }

        cuadrados[pacmanIndex].classList.add('pac-man')

        menjaPunts()
        menjaPoder()
        guanyar()
        gameover()
  
    }
        function menjaPunts(){
            if(cuadrados[pacmanIndex].classList.contains("puntets")){
                score++;
                scoreDisplay.innerHTML=score;
                cuadrados[pacmanIndex].classList.remove("puntets")
            }

        }
        function menjaPoder(){

            if(cuadrados[pacmanIndex].classList.contains("poder")){
                score=score+10
                scoreDisplay.innerHTML=score;
                ghosts.forEach(fantasma => fantasma.asustat = true);
                setTimeout(relax,10000)
                cuadrados[pacmanIndex].classList.remove("poder")

            }
        }
        function relax(){
            ghosts.forEach(fantasma => fantasma.asustat = false);
        }
        
        
        class Ghost{
            constructor(className, startIndex, vel){
                this.className = className;
                this.startIndex = startIndex;
                this.vel = vel;
                this.ghostIndex = startIndex;
                this.asustat = false;
                this.timerId = NaN;          
            }
        }
            ghosts = [
                new Ghost('fantasma1', 319, 250),
                new Ghost('fantasma2', 321, 400),
                new Ghost('fantasma3', 323, 500),
                new Ghost('fantasma4', 294, 550)
            ]

            ghosts.forEach(ghost => {
                cuadrados[ghost.ghostIndex].classList.add(ghost.className);
                cuadrados[ghost.ghostIndex].classList.add('ghost');
            });
            ghosts.forEach(ghost => moveGhost(ghost))
         
            function moveGhost(ghost){
                
                const directions = [-1,1,-width,+width]
                let direction = directions[Math.floor(Math.random()*directions.length)]
                ghosts.timerId = setInterval(function(){
                    
                    if(!cuadrados[ghost.ghostIndex+direction].classList.contains("muro") && !cuadrados[ghost.ghostIndex+direction].classList.contains("ghost")){
                    cuadrados[ghost.ghostIndex].classList.remove(ghost.className,'ghost','fasustado')
                    ghost.ghostIndex += direction
                    cuadrados[ghost.ghostIndex].classList.add(ghost.className,'ghost')
                    }else{
                        direction = directions[Math.floor(Math.random()*directions.length)]
                    }
                    if(ghost.asustat){
                        cuadrados[ghost.ghostIndex].classList.add(ghost.className,'fasustado');

                    }
                    if(ghost.asustat && cuadrados[ghost.ghostIndex].classList.contains('pac-man') ||cuadrados[ghost.ghostIndex].classList.contains('pac-man2') ){
                        cuadrados[ghost.ghostIndex].classList.remove(ghost.className,'fasustado','ghost',ghost.className);
                        ghost.ghostIndex = ghost.startIndex
                        ghost.asustat = false
                        //score += 15
                       // scoreDisplay.innerHTML = score;
                        //cuadrados[ghost.ghostIndex].classList.add(ghost.className,'ghost')
                    }
                   
                },ghost.vel)

            }
 
    document.addEventListener('keyup',movePacman)
    function gameover(){
        if(cuadrados[pacmanIndex].classList.contains('ghost') && !cuadrados[pacmanIndex].classList.contains('fasustado') || cuadrados[pacmanIndex].classList.contains('ghost') && !cuadrados[pacmanIndex].classList.contains('fasustado') ){
           
            ghosts.forEach(f => clearInterval(f.timerId))
            document.removeEventListener('keyup',movePacman)
            setTimeout(function(){
                
                alert("Has perdut")

                cuadrados.forEach(c => {
                    c.classList = '';
                });
                createboard(layout1)
                score = 0
                scoreDisplay.innerHTML = score;
                document.getElementsByClassName("audio").src = "./pacman-dies.mp3"
            })
            
            
        }
    }

    function guanyar(){
        if(score==170){
            ghosts.forEach(f => clearInterval(f.timerId))
            ghosts.forEach(ghost => {
                ghost.vel += 50
                score += 1
                level = 2
                levelDisplay.innerHTML = level
                cuadrados[ghost.ghostIndex].classList.remove(ghost.className,'ghost','fasustado')
                ghost.ghostIndex = ghost.startIndex;
                ghost.asustat = false;
                cuadrados[ghost.startIndex].classList.add(ghost.className, 'ghost');
            });
            setTimeout(function(){
                alert("Has guanyat")
                cuadrados.forEach(c=>{
                    c.classList = ''
                });
                
                createboard(layout2)
                pacmanIndex = 486
               
                cuadrados[pacmanIndex].classList.add('pac-man')
              
            },500)
            
        }

        if(score==450){
            ghosts.forEach(f => clearInterval(f.timerId))
           level=3
           score += 1
           ghost.vel += 50
            setTimeout(function(){
                alert("Has guanyat")
                cuadrados.forEach(c=>{
                    c.classList = ''
                });
                
                createboard(layout3)
                pacmanIndex = 462
             
                cuadrados[pacmanIndex].classList.add('pac-man')
                
            },500)
        }
        if(score==1000){
            alert("has guanyat")
        }
    }
   
    
    const btn = document.getElementById("boton");

    btn.addEventListener("click", function() {
        window.location.reload()
      /*  ghosts.forEach(f => clearInterval(f.timerId));
        document.addEventListener('keyup', movePacman);
        scoreDisplay.innerHTML = score;
        ghosts.forEach(ghost => {
            
            cuadrados[ghost.ghostIndex].classList.remove(ghost.className,'ghost','fasustado')
            ghost.ghostIndex = ghost.startIndex;
            ghost.asustat = false;
            cuadrados[ghost.startIndex].classList.add(ghost.className, 'ghost');
        });
        createboard(layout1);
        cuadrados.forEach(c => {
            c.classList = '';
        });
        
        createboard(layout1);
        score = 0;
        pacmanIndex = 490;
        pacmanIndex2 = 487;
        cuadrados[pacmanIndex].classList.add('pac-man');
        cuadrados[pacmanIndex2].classList.add('pac-man2');
    */
    });
    const btn2 = document.getElementById("boton2");

    btn2.addEventListener("click", function() {
        let pacmanIndex2 = 487
    cuadrados[pacmanIndex2].classList.add('pac-man2')
    function movePacman2(tecla){
        cuadrados[pacmanIndex2].classList.remove('pac-man2')
        if(tecla.key === 'ArrowUp' && !cuadrados[pacmanIndex2-width].classList.contains("muro")){
            pacmanIndex2 -= width
        }
        
        if(tecla.key === 'ArrowDown' && !cuadrados[pacmanIndex2+width].classList.contains("muro")){
            pacmanIndex2 += width
        }
        
        if(tecla.key === 'ArrowLeft' && !cuadrados[pacmanIndex2-1].classList.contains("muro")){
            pacmanIndex2 -= 1
            if(pacmanIndex2==364){
                pacmanIndex2=391
            }
            
        }
        
        if(tecla.key === 'ArrowRight' && !cuadrados[pacmanIndex2+1].classList.contains("muro")){
            pacmanIndex2 += 1
            if(pacmanIndex2==391){
                pacmanIndex2=364
            }
            
        }

        cuadrados[pacmanIndex2].classList.add('pac-man2')

        menjaPunts()
        menjaPoder()
        guanyar()
        gameover()
  
    }
        function menjaPunts(){
            if(cuadrados[pacmanIndex2].classList.contains("puntets")){
                score++;
                scoreDisplay.innerHTML=score;
                cuadrados[pacmanIndex2].classList.remove("puntets")
            }

        }
        function menjaPoder(){
            if(cuadrados[pacmanIndex2].classList.contains("poder")){
                score=score+10
                scoreDisplay.innerHTML=score;
                ghosts.forEach(fantasma => fantasma.asustat = true);
                setTimeout(relax,10000)
                cuadrados[pacmanIndex2].classList.remove("poder")

            }
        }
        function relax(){
            ghosts.forEach(fantasma => fantasma.asustat = false);
        }
        
        
        
            
            
 
    document.addEventListener('keyup',movePacman2)
    function gameover(){
        if(cuadrados[pacmanIndex2].classList.contains('ghost') && !cuadrados[pacmanIndex2].classList.contains('fasustado') || cuadrados[pacmanIndex2].classList.contains('ghost') && !cuadrados[pacmanIndex2].classList.contains('fasustado') ){
           
            ghosts.forEach(f => clearInterval(f.timerId))
            document.removeEventListener('keyup',movePacman)
            setTimeout(function(){
                
                alert("Has perdut")

                cuadrados.forEach(c => {
                    c.classList = '';
                });
                createboard(layout1)
                score = 0
                scoreDisplay.innerHTML = score;
                document.getElementsByClassName("audio").src = "./pacman-dies.mp3"
            })
            
            
        }
    }

    function guanyar(){
        if(score==170){
            ghosts.forEach(f => clearInterval(f.timerId))
            ghosts.forEach(ghost => {
                ghost.vel += 50
                score += 1
                level = 2
                levelDisplay.innerHTML = level
                cuadrados[ghost.ghostIndex].classList.remove(ghost.className,'ghost','fasustado')
                ghost.ghostIndex = ghost.startIndex;
                ghost.asustat = false;
                cuadrados[ghost.startIndex].classList.add(ghost.className, 'ghost');
            });
            setTimeout(function(){
                alert("Has guanyat")
                cuadrados.forEach(c=>{
                    c.classList = ''
                });
                
                createboard(layout2)
                pacmanIndex = 486
                pacmanIndex2 = 484
                cuadrados[pacmanIndex].classList.add('pac-man')
                cuadrados[pacmanIndex2].classList.add('pac-man2')
            },500)
            
        }

        if(score==450){
            ghosts.forEach(f => clearInterval(f.timerId))
            level=3
            score += 1
            ghost.vel += 50
            setTimeout(function(){
                alert("Has guanyat")
                cuadrados.forEach(c=>{
                    c.classList = ''
                });
                
                createboard(layout3)
                pacmanIndex = 462
                pacmanIndex2 = 480
                cuadrados[pacmanIndex].classList.add('pac-man')
                cuadrados[pacmanIndex2].classList.add('pac-man2')
            },500)
        }
        if(score==1000){
            alert("has guanyat")
        }
    }
    
    }
    
    );
});





/*
gameover
win tres nivels
boto reinicio
*/