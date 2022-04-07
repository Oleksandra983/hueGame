//Благодаря этой функции, когда пользователь пытается двигать(кликает на) зафиксированные квадратики (с точками),
//всплывает окно, в котором сообщается, что эти квадратики зафиксированы, поэтому их нельзя двигать
function NoMoving(){
    alert("You can't move fixed squares");
}

let firstClick = true;
let clas1;
let clas2;
let square1;
let square2;
let winTimeout1;
let winTimeout2;

//С помощью этого EventListener, при клике на элементы класса 'cell'(это незафиксированные квадратики) вызывается функция,
//с помощью которой при первом клике (из двух) запоминается элемент (квадрат), на который кликнули и его класс(который 'закрашивает' квадрат);
//при втором клике первый и второй элементы (на которые кликнули), меняются классами и, соответственно, цветами (создается впечатление, что квадратики поменялись местами)
document.addEventListener('click', (event)=> {
    if(event.target.classList.contains('cell')){
        if(firstClick){
            square1 = event.target;
            event.target.classList.remove('cell');
            clas1 = event.target.getAttribute('class');
            square1.style.width = '104px';
            firstClick = false;
        } else{
            square2 = event.target;
            square2.classList.remove('cell');
            clas2 = square2.getAttribute('class');
            square1.classList.remove(clas1);
            square1.classList.add('cell');
            square1.classList.add(clas2);
            square2.classList.remove(clas2);
            square2.classList.add('cell');
            square2.classList.add(clas1);
            square1.style.width = '100px';
            firstClick = true;

            let cells = document.getElementsByClassName('cell');
            console.log(cells);
            let fixdots = document.querySelectorAll('svg');
            let fixedcells = document.querySelectorAll('.fixedcell');


            //Если все квадратики правильных цветов, то пользователь выиграл; тогда прпадают точки зафиксированных 
            //и промежутки между ними, пользователь переходит на страницу,на которой сообщается, что он выиграл
            if(cells[0].classList.contains('h2') && cells[1].classList.contains('h2') && cells[2].classList.contains('h2') && cells[3].classList.contains('h2') && 
            cells[4].classList.contains('h3') && cells[5].classList.contains('h3') && cells[6].classList.contains('h3') && cells[7].classList.contains('h3') && 
            cells[8].classList.contains('h4') && cells[9].classList.contains('h4') && cells[10].classList.contains('h4') && cells[11].classList.contains('h4') && 
            cells[12].classList.contains('h5') && cells[13].classList.contains('h5') && cells[14].classList.contains('h5') && cells[15].classList.contains('h5')){
                winTimeout1 = setTimeout(function(){
                    for(let i = 0; i < cells.length; i++){
                        cells[i].style.marginBottom = '-2px';
                        cells[i].style.marginTop = '-2px';
                        cells[i].style.marginLeft = '0px';
                        cells[i].style.marginRight = '0px';
                        cells[i].style.width = '104px';
                        cells[i].style.height = '104px';
                    }
                    for(let i = 0; i < fixdots.length; i++){
                        fixdots[i].style.display = 'none';
                    }
                    for(let i = 0; i < fixedcells.length; i++){
                        fixedcells[i].style.margin = '-2px';
                        fixedcells[i].style.width = '104px';
                        fixedcells[i].style.height = '104px';
                    }
                    clearTimeout(winTimeout1);
                }, 250);
                winTimeout2 = setTimeout(Winning, 2500);
            }
        }
    }
})

function Winning(){
    clearTimeout(winTimeout2);
    window.location.href = '../endpage/endpage.html';
}