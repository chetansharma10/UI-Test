var hamburgerBtn=document.querySelector(".hamburger");
var extrasUrls=document.querySelector(".extrasUrls");
var toggleValue=false;
hamburgerBtn.addEventListener('click',(event)=>{
  toggleValue=!toggleValue;
  if(toggleValue){
    event.target.src="Assets/cross.png";
    extrasUrls.style.display="flex";
    
  }
  else{
    event.target.src="Assets/bars.png"
    extrasUrls.style.display="none";
  }
})









window.addEventListener("resize",(e)=>{
  var mainPriceContainer=
  document.querySelector(".mainPrice");

  var contentWidth=document.querySelector(".itemx").clientWidth*3;
  var wrapperWidth=mainPriceContainer.clientWidth
  mainPriceContainer.scrollLeft=
   ( contentWidth-wrapperWidth)/2+40

});