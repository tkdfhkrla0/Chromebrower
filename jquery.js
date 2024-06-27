$(function(){
    $(window).scroll(function(){

        if($(window).scrollTop() > 500){
            $('.download').addClass('active')
        }else{
            $('.download').removeClass('active')
        }
    })
    
    $('.link-item-title').click(function(){
        $(this).next().slideDown()
        $(this).parent().siblings().children('.link-item-content').slideUp()
        $(this).addClass('active')
        $(this).parent().siblings().children('.link-item-title').removeClass('active')
    })
})
