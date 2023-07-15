console.log("Hello");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const bar = document.querySelector(".progress-bar");
 const steps = document.querySelectorAll(".step");

 let count = 1;


    next.addEventListener("click", () => {
        count++;
         

         if(count > steps.length){
            count = steps.length;
            console.log(count);
         }

         update();
       

    })

    prev.addEventListener("click", () =>{
        count--;
        if(count<1){
            count = 1;
        }

        update();
    })

    





    function update(){
        steps.forEach((step, ind) => {
            if(ind < count){
                step.classList.add("active");
            }else{
                step.classList.remove("active")
            }

        })

        bar.style.width = ((count-1)*33) + '%';

        if(count === steps.length){
            next.disabled = true;
            next.style.backgroundColor = '#e9e3e3';
            next.style.cursor = 'not-allowed';
            prev.disabled = false;
            prev.style.backgroundColor = '#51a5dd';
            prev.style.cursor = 'pointer';

        }

        if(count === 1){
            prev.disabled = true;
            prev.style.backgroundColor = '#e9e3e3';
            prev.style.cursor = 'not-allowed';
            next.disabled = false;
            next.style.backgroundColor = '#51a5dd';
            next.style.cursor = 'pointer';




        }

        
    }


