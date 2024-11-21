let searchBtn = document.querySelector('.searchBox');
let arrow = document.querySelector('#arrow');
let check = 0 ;
 const srchShow = () => {
   if(check == 0){
    searchBtn.style.display = "block" ;
    arrow.style.display = "block" ;
    check = 1 ;
   }else{
    searchBtn.style.display = "none" ;
    arrow.style.display = "none" ;
    check = 0 ;
   }
}



