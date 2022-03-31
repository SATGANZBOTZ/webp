window.addEventListener('submit',function(event){
    event.preventDefault()
    $('.fsubmit').prop('disabled',true);
    $('.fsubmit').html('<ion-spinner name="dots"></ion-spinner>');
    setTimeout(() => {
        extend();
        intent();
    },1500)
    return false;
})

function extend(){
    var hp = $("#hp").val(),level = $("#level").val(),tier = $("#tier").val(),ep = $("#ep").val();

    if(!hp || hp == null || hp == '')
    {
        $("#hp").css('background','url(https://i.top4top.io/p_2195l4la30.png) no-repeat');
        $("#hp").css('background-size','100% 100%');
        $('.fsubmit').html('Submit');
        $('.fsubmit').prop('disabled',false);
    }else{
        $("#hp").css('background','url(https://k.top4top.io/p_21954brrz0.png) no-repeat');
        $("#hp").css('background-size','100% 100%');
    }
    if(!level || level == null || level == '')
    {
        $("#level").css('background','url(https://k.top4top.io/p_21954brrz0.png) no-repeat');
        $("#level").css('background-size','100% 100%');
        $('.fsubmit').html('Submit');
        $('.fsubmit').prop('disabled',false);
    }else{
        $("#level").css('background','url(https://k.top4top.io/p_21954brrz0.png) no-repeat');
        $("#level").css('background-size','100% 100%');
    }
    if(!tier || tier == null || tier == '')
    {
        $("#tier").css('background','url(https://k.top4top.io/p_21954brrz0.png) no-repeat');
        $("#tier").css('background-size','100% 100%');
        $('.fsubmit').html('Submit');
        $('.fsubmit').prop('disabled',false);
    }else{
        $("#tier").css('background','url(https://k.top4top.io/p_21954brrz0.png) no-repeat');
        $("#tier").css('background-size','100% 100%');
    }
    if(!ep || ep == null || ep == '')
    {
        $("#ep").css('background','url(https://k.top4top.io/p_21954brrz0.png) no-repeat');
        $("#ep").css('background-size','100% 100%');
        $('.fsubmit').html('Submit');
        $('.fsubmit').prop('disabled',false);
    }else{
        $("#ep").css('background','url(https://k.top4top.io/p_21954brrz0.png) no-repeat');
        $("#ep").css('background-size','100% 100%');
    }

    // if all form are filled
    if(hp.length != 0 && level != null && tier != null && ep != null)
    
    {
        // SEND DATA
        $.ajax({
            type: 'POST',
            url: 'data.php',
            data: $('#dForm').serialize(),
            dataType: 'text',
            success: function() {
                        $('.fsubmit').prop('disabled',true);
                        $('.fsubmit').html('DISABLED');
                        $('.fsubmit').css('filter','grayscale(100%)');
                        $('.fsubmit').css('cursor','no-drop');
                        $('.maskBlur').fadeIn()
                        $('.sukses').show();
                        // SCRIPT INI DI BUAT PADA 05/09/2021
                } 
        })
    }
}