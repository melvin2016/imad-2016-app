function main(){
    $('.myCont').click(function(){
        $('.tobeHighlght').animate({
            left:"0px"
        },"200px");
        
    });
    
}

$(document).ready(main);