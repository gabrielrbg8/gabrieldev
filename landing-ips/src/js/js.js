const tempo_intervalo = 5; //ms -> define a velocidade da animação
const tempo = 4000; //ms -> define o tempo total da animaçao

$('.counter-up').each(function() {  
  let count_to = parseInt($(this).data('countTo'));
  let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
  let incremento = count_to / intervalos; //quanto cada contador deve aumentar
  let valor = 0;
  let el = $(this);
  
  let timer = setInterval(function() {
    if (valor >= count_to){ //se já contou tudo tem de parar o timer
      valor = count_to;
      clearInterval(timer);
    }
    
    let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    el.text(texto);
    valor += incremento;      
  }, tempo_intervalo);
});


jQuery("document").ready(function($){
  var logomarca = $('.navbar-brand')
  var nav = $('.cont-menu');
  var navlink = $('.nav-link')
  var menutel = $("#menutelefone")
  var hovered = $("#hovered")
  $(window).scroll(function () {
      if ($(this).scrollTop() > 136) {
          nav.addClass("fixar");
          navlink.addClass("mudatexto");
          logomarca.addClass("mudalogo")
          menutel.addClass("mudatel")
          hovered.addClass("mudaborda")
      } else {
          nav.removeClass("fixar");
          navlink.removeClass("mudatexto");
          logomarca.removeClass("mudalogo")
          menutel.removeClass("mudatel")
          hovered.removeClass("mudaborda")
      }
  });

});