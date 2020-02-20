

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
   document.getElementById('li-1').classList.add('active');
   document.getElementById('li-2').classList.remove('active');
   document.getElementById('li-3').classList.remove('active');
   document.getElementById('li-4').classList.remove('active');
   document.getElementById('li-5').classList.remove('active');
   document.getElementById('li-6').classList.remove('active');
   document.getElementById('li-7').classList.remove('active');
   document.getElementById('li-8').classList.remove('active');
   
   break
   case 'mostra_aba2':
   document.getElementById('div_aba2').style.display="block";
   document.getElementById('li-1').classList.remove('active');
   document.getElementById('li-2').classList.add('active');
   document.getElementById('li-3').classList.remove('active');
   document.getElementById('li-4').classList.remove('active');
   document.getElementById('li-5').classList.remove('active');
   document.getElementById('li-6').classList.remove('active');
   document.getElementById('li-7').classList.remove('active');
   document.getElementById('li-8').classList.remove('active');

   break
   case 'mostra_aba3':
   document.getElementById('div_aba3').style.display="block";
   document.getElementById('li-1').classList.remove('active');
   document.getElementById('li-2').classList.remove('active');
   document.getElementById('li-3').classList.add('active');
   document.getElementById('li-4').classList.remove('active');
   document.getElementById('li-5').classList.remove('active');
   document.getElementById('li-6').classList.remove('active');
   document.getElementById('li-7').classList.remove('active');
   document.getElementById('li-8').classList.remove('active');
   break
   case 'mostra_aba4':
   document.getElementById('div_aba4').style.display="block";
   document.getElementById('li-1').classList.remove('active');
   document.getElementById('li-2').classList.remove('active');
   document.getElementById('li-3').classList.remove('active');
   document.getElementById('li-4').classList.add('active');
   document.getElementById('li-5').classList.remove('active');
   document.getElementById('li-6').classList.remove('active');
   document.getElementById('li-7').classList.remove('active');
   document.getElementById('li-8').classList.remove('active');
   break
   case 'mostra_aba5':
   document.getElementById('div_aba5').style.display="block";
   document.getElementById('li-1').classList.remove('active');
   document.getElementById('li-2').classList.remove('active');
   document.getElementById('li-3').classList.remove('active');
   document.getElementById('li-4').classList.remove('active');
   document.getElementById('li-5').classList.add('active');
   document.getElementById('li-6').classList.remove('active');
   document.getElementById('li-7').classList.remove('active');
   document.getElementById('li-8').classList.remove('active');
   break
   case 'mostra_aba6':
   document.getElementById('div_aba6').style.display="block";
   document.getElementById('li-1').classList.remove('active');
   document.getElementById('li-2').classList.remove('active');
   document.getElementById('li-3').classList.remove('active');
   document.getElementById('li-4').classList.remove('active');
   document.getElementById('li-5').classList.remove('active');
   document.getElementById('li-6').classList.add('active');
   document.getElementById('li-7').classList.remove('active');
   document.getElementById('li-8').classList.remove('active');
   break
   case 'mostra_aba7':
   document.getElementById('div_aba7').style.display="block";
   document.getElementById('li-1').classList.remove('active');
   document.getElementById('li-2').classList.remove('active');
   document.getElementById('li-3').classList.remove('active');
   document.getElementById('li-4').classList.remove('active');
   document.getElementById('li-5').classList.remove('active');
   document.getElementById('li-6').classList.remove('active');
   document.getElementById('li-7').classList.add('active');
   document.getElementById('li-8').classList.remove('active');
   break
   case 'mostra_aba8':
   document.getElementById('div_aba8').style.display="block";
   document.getElementById('li-1').classList.remove('active');
   document.getElementById('li-2').classList.remove('active');
   document.getElementById('li-3').classList.remove('active');
   document.getElementById('li-4').classList.remove('active');
   document.getElementById('li-5').classList.remove('active');
   document.getElementById('li-6').classList.remove('active');
   document.getElementById('li-7').classList.remove('active');
   document.getElementById('li-8').classList.add('active');
   break
}
} 

