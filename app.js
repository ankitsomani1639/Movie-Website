const arrows = document.querySelectorAll(".arrow"); /* query selector means choosing any item inside this html file */
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow,i)=> {
    const itemNumber = movieLists[i].querySelectorAll("img").length;   /* total ek row m kitni movies h uski length btaega */
    let clickCounter = 0;   /* ek varibale bnaya click counter initially 0 set kiya   */
   arrow.addEventListener("click",() => {     /* iss se hum button pr click kr paa rhe hai */
   const ratio = Math.floor(window.innerWidth / 270);  // screen ko choti krne k baad arrow wala button kaam kr paega 
   clickCounter++;   /* iss se hme pta chlega ki hmne arrow pr kitni baar click kiya */
   if(itemNumber - (4 + clickCounter) +(4 - ratio) >= 0) {   /* ye bola rha hai total length of movies - (4 + kitni baar click kiya) + (4 - screen ka size ) >=0 " agr ye condition true hai toh isko aage scroll krega"*/
    movieLists[i].style.transform = ` translateX(${   /* aage scroll krwane m use aaega */
        movieLists[i].computedStyleMap().get("transform")[0].x.value     
    -300}px)`;
   } else{
    movieLists[i].style.transform = "translateX(0)"  /* agr condition false hai toh ussey starting pr leke jaega */
    clickCounter = 0;
   }
   }); 

   console.log(movieLists[i].querySelectorAll("img").length)
});

// Toggle 
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title, .navbar-container,.sidebar,.left-menu-icon,.toggle"
    );

ball.addEventListener("click",()=>{   /* toggle ball ko clickable bana ta hai */
    items.forEach(item=>{
        item.classList.toggle("active")   /* click krne pr items k saare functions ko execute krega or light mode m aa jayega */

    }) ; 
    ball.classList.toggle("active")    /* new active wale  toggle ball ko use krne k liye */
});

