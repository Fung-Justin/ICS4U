<template>

      <div class="container">
          <div> </div>
            <div id="pagination" class="card card-body"  >
                
                <div class="btn-group"  role="group" id="btnGroup">
                  
                   <button class = "btn btn-primary m-1" id="front" @click="decreaseWeek()"> &lt; </button>
                    <button class = "btn btn-primary m-1">  Week: {{Week}}  </button>
                   <button class = "btn btn-primary m-1" id="end" @click="increaseWeek()"> &gt; </button>
                   
                  </div>    
               
               
                
                
            </div>

      </div>
</template>

<script>
export default {
    props: {
        Week:Number
    },


    data() {
        return{
            
        }
    },
    
    methods: {


    increaseWeek(){
         this.$emit('increase-Week')
    },
    decreaseWeek(){
        this.$emit('decrease-Week')
    },
      
changeWeek(week){
    
    games.forEach(game => {
        let section = document.getElementById('sections');
        let cards = document.getElementById('card');
        section.removeChild(cards);
        
    });
   
    
     Week= week;
    console.log();
    createSchedule();
}
    },
     mounted() {
        //this.pagination(this.Week)
    }
}
</script>