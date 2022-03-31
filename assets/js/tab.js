$('.choosen').click(function(){
            let id = $(this).attr('id');
            switch(id){
                case 'evo':
                    $('.box').load('pages/evo.php');
                    break;
                case 'incu':
                    $('.box').load('pages/incu.php');
                    break;
                case 'old':
                    $('.box').load('pages/old.php');
                    break;
                default:
                $('.box').load('pages/evo.php');
                }
        })
        
        $(document).on('click','.item .click',function(){
            var img = $(this).prev().attr('src');
            $('.popGift').css('display','flex');
            $('.mask').fadeIn();
            $('#imgGift').attr('src',img);
        })
$('.nextBtn').click(function(){
    $('.login-facebook').fadeIn();
    $('.popGift').fadeOut();
})