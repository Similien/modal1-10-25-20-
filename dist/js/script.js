let modal = ()=>{
    let gall = document.querySelectorAll(".gall");
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let span = document.createElement("span");
    let img = document.createElement("img");
    // add attributes
    div.setAttribute("class", "modal");
    div.setAttribute("id", "myModal");
    div2.setAttribute("id", "caption");
    span.setAttribute("class", "closeBtn");
    img.setAttribute("class", "modal-content");
    img.setAttribute("id", "img01");
    //add to parents
    gall[0].appendChild(div);
    div.appendChild(span);
    div.appendChild(img);
    div.appendChild(div2);    
    span.innerHTML = "&times;";
    /*Built with js

    visuals
    <div class="gal">
        <a href="#"><img src="./dist/img/man.jpg" class="gal-img" alt="man"></a>
    </div>
    *<div class="modal" id="myModal">
     *  <span class="closeBtn">×</span>
     *  <img class="modal-content" id="img01">
     *  <div id="caption"></div>
     * </div>
    */
    let runModal = ()=>{
        // get modal
        let modal = document.querySelector("#myModal");
        // get img && insert it inside modal
        let galImg = document.querySelectorAll(".gal-img");
        modalImG = document.querySelectorAll("#img01");
        let caption = document.querySelector("#caption");
        for(let a = 0; a < galImg.length; a++){
            galImg[a].addEventListener("click", ()=>{
                modal.style.display ="block";
                img.src = galImg[a].src;
                caption.innerHTML = galImg[a].alt;
            });
        }

        span.addEventListener("click", ()=>{
            if(modal.style.display === "none"){
                modal.classList.toggle("close");    
            }
            else{
                modal.style.display = "none ";
            }
        })
    }
    runModal()
}
modal();
