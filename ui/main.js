function main(){
    $('.myCont').click(function(){
        $('.tobeHighlight').animate({
            left:"0px"
        },200);
        
    });
    
}

$(document).ready(main);