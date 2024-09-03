let score=JSON.parse(localStorage.getItem('score'))
if(!score){
    score={
        Win:0,
        Loose:0,
        Tie:0
    };
}

updateScore()

function function1(){
    let Comnputermove='';
    Comnputermove=Math.random();
    if(Comnputermove>=0 && Comnputermove<1/3){
        Comnputermove='rock'
    }
    else if(Comnputermove>=1/3 && Comnputermove<2/3){
        Comnputermove='paper'
    }
    else if(Comnputermove>2/3 && Comnputermove<1){
        Comnputermove='scissors'
    }
    return Comnputermove;
}

function updateScore(){
    document.querySelector('.js-score').innerHTML=`win: ${score.Win} Loose: ${score.Loose} Tie: ${score.Tie}`;
}

function function2(playermove){
    let result='';
    if(playermove==='rock'){
        if(Comnputermove==='rock'){
            result='Tie'
        }
        else if(Comnputermove==='paper'){
            result='You Loose'
        }
        else if(Comnputermove==='scissors'){
            result='You Win'
        }
    }
    else if(playermove==='paper'){
        if(Comnputermove==='rock'){
            result='You Win'
        }
        else if(Comnputermove==='paper'){
            result='Tie'
        }
        else if(Comnputermove==='scissors'){
            result='You Loose'
        }
    }
    else if(playermove==='scissors'){
        if(Comnputermove==='rock'){
            result='You Loose'
        }
        else if(Comnputermove==='paper'){
            result='You Win'
        }
        else if(Comnputermove==='scissors'){
            result='Tie'
        }
    }
    if(result==='You Win'){
        score.Win+=1;
    }
    else if(result==='You Loose'){
        score.Loose+=1;
    }
    else if(result=='Tie'){
        score.Tie+=1;
    }
    
    localStorage.setItem('Score',JSON.stringify(score));

    updateScore()

    document.querySelector('.js-result').innerHTML=result;

    document.querySelector('.js-compare').innerHTML=`You <img src="${playermove}-emoji.png"  class="image"> <img src="${Comnputermove}-emoji.png" class="image"> Computer`;
}