console.log($('caixa'))

$('#caixa').text('aaa')
$('#caixa').html('<h1>BASED</h1>')

$('#teste1').on('click',function(){
    alert('FUNFO')
})


$('#teste2').on('click', function(){
    $('#caixa').css('width','1000px')
    $('#caixa').css('backgroundColor','red')
})

$('#teste3').on('click',function(){
    if($('#caixa').hasClass('primeiroEstado')){
        $('caixa').addClass('segundoEstado')
        $('#caixa').removeClass('primeiroEstado')
    }else{
        $('#caixa').toggleClass('primeiroEstado')
        $('#caixa').toggleClass('segundoEstado')
    }
})

$('#teste4').on('click',function(){
    $('#caixa').fadeIn(500)
})

$('#teste4').on('click',function(){
    $('#caixa').fadeOut(500)
})