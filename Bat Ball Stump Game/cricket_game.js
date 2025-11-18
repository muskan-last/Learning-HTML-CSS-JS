 
 //object

 let scorestr= localStorage.getItem('Score');
 let score;
 reser_score(scorestr);
 function reser_score(scorestr){
     score = scorestr ? JSON.parse(scorestr) : {
    win : 0,
    lost : 0,
    tie : 0,
 };
   score.display_score = function(){
      return  `WON : ${score.win} LOST : ${score.lost} TIE: ${score.tie}`;
    };
   }

   function generate_computer_choice(){
       let random_number = Math.random() * 3;

       if(random_number > 0 && random_number <= 1){
         computer_choice = 'bat';
       } else if(random_number > 1 && random_number <= 2){
       computer_choice = 'ball';
       }else{
       computer_choice = 'stump';
       }
   }

   function get_results(user_choice , comp_choice){
    let result;
 
    if(user_choice === 'bat'){
       if(comp_choice==='ball'){
        score.win = score.win + 1;
          return 'user won,';
       } else if(comp_choice==='bat'){
        score.tie = score.tie + 1;
           return 'its a tie';
       }else if(comp_choice==='stump'){
        score.lost = score.lost + 1;
        return 'computer won,';
       }
    }else if(user_choice === 'ball'){
        if(comp_choice==='ball'){
        score.tie = score.tie + 1;
        return 'its tie,';
       } else if(comp_choice==='bat'){
        score.lost = score.lost + 1;
        return 'computer won';
       }else if(comp_choice==='stump'){
        score.win = score.win + 1;
        return 'user won,';
       }
    }else{
       if(comp_choice==='ball'){
        score.win = score.win + 1;
        return 'user won,';
       } else if(comp_choice==='stump'){
        score.tie = score.tie + 1;
        return 'its a tie';
       }else if(comp_choice==='bat'){
        score.lost = score.lost + 1;
        return 'computer won,';
       } 
    }
  }
    function show_result(user_move,comp_ch , reulty){
      localStorage.setItem('Score' , JSON.stringify(score));

      document.querySelector('#user_move').innerText=user_move ?`you have chosen :${user_move}`: ' ';
      document.querySelector('#computer_choice').innerText=comp_ch ?`computer choice is: ${comp_ch}`: ' ';
      document.querySelector('#result').innerText=reulty || ' ';
      document.querySelector('#score').innerText=score.display_score();
  
     }


