var f=0;
var start=0;
var result=0;

var counter={
    max:5000,
    min:3000,
    settout:0,
    start:0,
    delay:0,
    tmp:0,
    
    //-1 mean no click, 0 mean ready to start, 1 mean time to response

    
    starting: function() {
        this.delay= Math.floor(Math.random() * (this.max - this.min + 1) ) + this.min;
        this.settout =setTimeout(this.responseclick,this.delay);
        f=1;
        $(".button1").text("Please wait...");
        $(".button1").css({"background":"red"});
        
 
    },
    
    toofast: function(){
        
        clearTimeout(this.settout);
        $(".button1").css({"background":"black","color":"white"});
        $(".button1").text("Too Fast!");
        f=0;
        
    },

    responseclick: function(){
        start=Date.now();
        f=2;
        $(".button1").css({"background":"green"});
        $(".button1").text("Click Now!");
        $("#demo").html(f,"<br>" );
        

    },

    clicked: function(){
        
        var end=Date.now();
        
        $(".button1").css({"background":"white","color":"black"});
        $(".button1").text("Click to start");
        
        var tmp = end - start;
        f=0;
        return tmp;

    }


    
    
};







$(document).ready(function() {
    $(".button1").mousedown(function(){
        
        switch(f){
            case 0:
            
                $("#panel").slideUp("slow");
            counter.starting();
            break;

            case 1:
            counter.toofast();
            $("#panel").slideUp("slow");
            break;

            case 2:
                result=counter.clicked();
                $("#result").html("Result<br>"+result+"ms");
                $("#panel").slideDown("slow");
            break;

            default:
                $("#result").html("wrong<br>" );
        
    }


        
    });
});



    


    
    


