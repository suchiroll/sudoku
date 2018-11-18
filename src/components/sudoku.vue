<template>
  <div> 
 
    <div class = "wrapper"> 

    <h3> game board </h3>
   <div class = "gameBoard">   <div class = "list" v-for="(number,index) in gameNums" :key="index"> <!-- iterate through computed gameNum with empty spaces -->
        <div class = "cell=empty" v-if="number == 0"> 
         <!--<input  type="text" v-on:change="changeVal(index)" v-model="tempval" v-bind:id="'empty'+ index""> -->
         <select v-on:change="changeVal(index)" v-model="tempval" v-bind:id="'empty' + index">  <!-- Bind input val to tempval- bug exists here -->
              <option  value = "1"> 1 </option>
              <option  value = "2"> 2 </option>
              <option value = "3"> 3 </option>
              <option value = "4"> 4 </option>
              <option value = "5"> 5 </option>
              <option value = "6"> 6 </option>
              <option value = "7"> 7 </option>
              <option value = "8"> 8 </option>
              <option value = "9"> 9 </option>
            </select>
          </div>
        <div class = "cell" v-else b> {{number}} </div> <!-- else print number not option -->
      </div> </div>


   <h3> inputs </h3>
   <div class = "inputBoard"> <div class = "list" v-for="(number,index) in gameInput" v-bind:id="'input' + index"> {{number}} </div> </div>

  </div> 

<!-- <cell value="0"> </cell>-->
    <button class = "submit" v-on:click="checkAnswers()">Submit </button>
  </div>
</template>


<script>


export default {
  name: 'sudoku',
  
 
  
  data: function(){
    return{
      //Full game board that works 
      gameAnswer: [4,3,5,2,6,9,7,8,1,6,8,2,5,7,1,4,9,3, 1,9,7,8,3,4,5,6,2, 8,2,6,1,9,5,3,4,7, 3,7,4,6,8,2,9,1,5,9,5,1,7,4,3,6,2,8,5,1,9,3,2,6,8,7,4, 2,4,8,9,5,7,1,3,6,7,6,3,4,1,8,2,5,9], 

      //game board to be edited
      gameBoard: [4,3,5,2,6,9,7,8,1,6,8,2,5,7,1,4,9,3, 1,9,7,8,3,4,5,6,2, 8,2,6,1,9,5,3,4,7, 3,7,4,6,8,2,9,1,5,9,5,1,7,4,3,6,2,8,5,1,9,3,2,6,8,7,4, 2,4,8,9,5,7,1,3,6,7,6,3,4,1,8,2,5,9], 

      //game board to hold user input 
      gameInput: [4,3,5,2,6,9,7,8,1,6,8,2,5,7,1,4,9,3, 1,9,7,8,3,4,5,6,2, 8,2,6,1,9,5,3,4,7, 3,7,4,6,8,2,9,1,5,9,5,1,7,4,3,6,2,8,5,1,9,3,2,6,8,7,4, 2,4,8,9,5,7,1,3,6,7,6,3,4,1,8,2,5,9], 
      tempval : [],

    }
  },
  
  computed: {
    gameNums: function() { 
    //generate empty spaces in board 
      var i = 0;
      while(i < 35){
         var val = Math.floor(Math.random()*81);
          // rand from 0-80
         console.log(i);
         this.gameBoard[val] = 0; 
         //make changes to both gameBoard and input board 
         this.gameInput[val] = 0;
         i = i+1;
       }

       return this.gameBoard;
    }
  },
  methods:{

    changeVal(index, number){ 
    //changes the gameInput based on user input 
      this.gameInput[index]= this.tempval;
      console.log(number + "number");
      
    },

    checkAnswers(){ 
    //validate user input against game answer 
      var i = 0;
      gameWon: true;
      while(i < 81){
         
        if(this.gameInput[i] != this.gameAnswer[i]){
           var id = "empty" + i;
          var inputID = "input" + i; 
          document.getElementById(id).style.color ="red";
          document.getElementById(inputID).style.color ="red";  
          
        } else{
          var id = "empty" + i;
          var inputID = "input" + i; 
          console.log(inputID);
           /**document.getElementById(id).style.color ="black";
            **/
            document.getElementById(inputID).style.color ="black"; 
        }
        i++;
      }


    }

  },
    
};

</script>

<style>

.list{
  display: inline-block;
  margin: 0px;
  width: 40px;
  height: 30px;
  padding: 0px;
  border: 1px black solid;
}

p{
  margin: 0px;
}
.cell{
  
}

.wrapper{
  margin: 0px;
  padding: 0px;
  width: 100%;
  display: inline-block;
}

input{
  margin: 0px;
  width: 40px;
  height: 30px;
  padding: 0px;
 
}

input:hover{
 
}

.inputBoard, .gameBoard{
  display: inline-block;
  width: 400px;
}

</style>