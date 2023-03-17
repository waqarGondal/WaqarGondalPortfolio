
   const slides = document.querySelectorAll( ".slide" )
   var counter = 0;
   
   slides.forEach(
       ( slide, index ) => {
           slide.style.bottom = `${index * 100}%`
       }
   )
   
   const goPrev = () =>{
       counter--
       slideimge()
       
   }
   
   const goNext = () =>{
         counter++
         slideimge()
   
   }
   
   
   const slideimge = () => {
       slides.forEach(
           (slide) => {
               slide.style.transform = `translateY(${counter * 100}%)`
           }
       )
   }


   