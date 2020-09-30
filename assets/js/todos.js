//check off specific todos by clicking
// $("li").on("click",function(){
//     $(this).css("color","gray");
//     $(this).css("text-decoration","line-through")
// });

//OR

//  $("li").on("click",function(){
//     //if li is gray
//     if($(this).css("color")==="rgb(128, 128, 128)"){
//         //turn it black
//         $(this).css({
//             color:"black",
//             textDecoration:"none"
//            });

        
//     }
//     //if li isn't gray,turn the gray
//     else{
//         $(this).css({
//             color:"gray",
//             textDecoration:"line-through"
//            });

//     }
     
//       });

//or if class completed is used

// $('li').on("click",function(){
//     $(this).toggleClass("completed");
// });

//in order to provide dynamic li(s),
$('ul').on("click","li",function(){
    $(this).toggleClass("completed");
});

//clicking on X deletes the todo
$("ul").on("click",".abc",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

//creation of new todos
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        //extracting the data from the text box 
        var todoText=$(this).val();

        //clear the text field
        $(this).val("");
         //create a new li and add to ul
            $("ul").append("<li><span class='abc'><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
    }
});
$(".fa-plus-square").on("click",function(){
    $("input[type='text']").fadeToggle();
})