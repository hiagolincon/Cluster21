function mostrar_abas(obj) {
    
   document.getElementById('div_aba1').style.display="none";
   document.getElementById('div_aba2').style.display="none";
   document.getElementById('div_aba3').style.display="none";
   document.getElementById('div_aba4').style.display="none";
   document.getElementById('div_aba5').style.display="none";
   document.getElementById('div_aba6').style.display="none";
   document.getElementById('div_aba7').style.display="none";
   document.getElementById('div_aba8').style.display="none";


switch (obj.id) {
   case 'mostra_aba1':
   document.getElementById('div_aba1').style.display="block";
   break
   case 'mostra_aba2':
   document.getElementById('div_aba2').style.display="block";
   break
   case 'mostra_aba3':
   document.getElementById('div_aba3').style.display="block";
   break
   case 'mostra_aba4':
   document.getElementById('div_aba4').style.display="block";
   break
   case 'mostra_aba5':
   document.getElementById('div_aba5').style.display="block";
   break
   case 'mostra_aba6':
   document.getElementById('div_aba6').style.display="block";
   break
   case 'mostra_aba7':
   document.getElementById('div_aba7').style.display="block";
   break
   case 'mostra_aba8':
   document.getElementById('div_aba8').style.display="block";
   break
}
} 




