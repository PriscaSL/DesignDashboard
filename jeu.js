 var img=null;
 var i=0;
 var h=null;var h2=null;
 var anime;
 var p1;
 var leftR = 0;
 var sea;
 var btn;
 var b=null;var b2=null;

 function init(){
    img=document.getElementById("image");
    img.style.position='relative';
    img.style.left='70px';
    img.style.top='656.5px';


    //heart1
    h=document.getElementById('h1');
    h.style.left='470px';
    h.style.position='relative';
    h.style.top='30px';
    h.style.display='none';

    //+1
    p1=document.getElementById('un');
    p1.style.display='none';
    p1.style.top='600px';
    document.getElementById('un').innerHTML='+1';

    //bombe1
    b=document.getElementById('b1');
    b.style.position='relative';
    b.style.top='2px';
    b.style.display='none';
   
    
   //bombe2
    b2=document.getElementById('b2');
    b2.style.position='relative';
    b2.style.top='4px';
    b2.style.display='none';

    //heart2
    h2=document.getElementById('h2');
    h2.style.position='relative';
    h2.style.top='30px';
    h2.style.display='none';
    
    //startbtn
    btn=document.getElementById('btn');
    btn.style.display='block';

    document.getElementById('score').innerHTML= i;
  
 }

 //droite
 function moveright(){
    leftR=(img.style.left=parseInt(img.style.left)+50+'px');
    document.getElementById('id').innerHTML=leftR;
    return leftR;
 }

 //gauche
 function moveleft(){
   leftR=(img.style.left=parseInt(img.style.left)+(-50)+'px');
   document.getElementById('id').innerHTML=leftR;
   return leftR;
 }

 //descente
 function movedown(){
   img.style.top='469px';
   h.style.top=parseInt(h.style.top)+10+'px';
   h2.style.top=parseInt(h2.style.top)+5+'px';
   b.style.top=parseInt(b.style.top)+10+'px';
   b2.style.top=parseInt(b2.style.top)+8+'px';
   anime=setTimeout(movedown,60);
   h.style.display='block';
   h.style.left='70px';
   h2.style.display='block';
   b.style.display='block';
   b2.style.display='block';
   btn.style.display='none';
   console.log( h.style.left + " - " + leftR);
  
   //score +1
   if(h.style.top=='750px' && leftR=='470px'){ 
      clearTimeout(anime);
      h.style.display='none';
      i=i+1;
      document.getElementById('score').innerHTML=i;
      p1.style.display='block';
      img.style.top='423px';
      setTimeout(function(){
         document.getElementById('un').innerHTML='';
         img.style.top='488px';
      },1000);
   }
  else if(h.style.top=='740px' && h.style.left=='70px' && leftR!='70px'){ 
      clearTimeout(anime);
      h.style.display='none';
      h2.style.display='none';
      b.style.display='none';
      b2.style.display='none';
      img.style.top='657px';
   }
   
 }
 window.onload=init;
 
  

 