console.log("hello ")

let btnchange = document.getElementsByClassName('btnchange');

console.log(btnchange);

for (let i=0 ; i<btnchange.length ; i++){
    btnchange[i].addEventListener("mouseover",()=>{
    btnchange[i].style.backgroundColor = "#b11313";
    btnchange[i].style.color= "#ffffff";
    btnchange[i].style.fontWeight= "bold";
    btnchange[i].style.boxShadow= "5px 5px 30px";
    console.log (btnchange)
 });
    btnchange[i].addEventListener("mouseout",()=>{
    btnchange[i].style.backgroundColor = "#ffffff";
    btnchange[i].style.color= "#b11313";
    btnchange[i].style.boxShadow= "none";
 });
    
};
//Footer logo


let footericones = document.getElementsByClassName('footer-icones');

   for (let i=0 ; i<footericones.length ; i++){
         footericones[i].addEventListener("mouseover",()=>{
         footericones[i].style.color = "#ffffff";
         
      });
         footericones[i].addEventListener("mouseout",()=>{
         footericones[i].style.color = "#000000";
         
      });
      
   };

   //les menu

   let menu = document.querySelectorAll('li');
   console.log(menu)
   menu. forEach(function(li){
      li.addEventListener('mouseover',()=>{
         li.style.textDecoration = 'line-through';
      });
      li.addEventListener('mouseout',()=>{
         li.style.textDecoration = 'none';
      });
   });

   //fade

$ (document).ready(function(){
   $(".box").animate({
      left: '30px'
   }, "slow");
   $(".description").fadeIn(5000);
})
