/* your code should go here */

$(document).ready(function(){
  
    console.log(model.maxtemp("Wednesday"));
    console.log(model.mintemp("Wednesday"));
  
});
var view ={


};

var model = {
     maxtemp: function(giorno){
    var max=0;
    for(var i=0;i<data.length;i++){
    if(data[i].day== giorno)
    if(data[i].temperature>max)
       max=data[i].temperature;

}
return max;
 },
    mintemp: function(giorno){
    
    var min=50;
    for(var i=0;i<data.length;i++){
    if(data[i].day== giorno)
    if(data[i].temperature<min)
       min=data[i].temperature;
    
    }
        return min;

}
    };
var controll={

};








