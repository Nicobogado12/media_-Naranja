//capturar los valores de los id

const $btnYes = document.querySelector("#btnYes"),
      $btnNo = document.querySelector("#btnNo");


//escuchador de evento

$btnNo.addEventListener("mouseover", () => {
    let x=window.innerWidth,              //para saber en ue ancho de la vetana se encuentra 
        y=window.innerHeight;

    let newX=Math.random()*x,
        newY=Math.random()*y;


    $btnNo.style.position="absolute"
    $btnNo.style.left= newX + "px";
    $btnNo.style.top= newY + "px";


    //si se coloca por fuera de la patalla nuestro btnNo, hay que redondear dicho valor
    /*
        let newX=Math.floor(Math.random()*x)+1,
            newY=Math.floor(Math.random()*Y)+1,
    
    */
})


$btnYes.addEventListener("click" , () =>{
    let $div=document.createElement("div"),
        $fragment=document.createDocumentFragment();

    $div.innerHTML= "<h1>Gracia por decir que si!!!</h1>";
    $div.style.backgroundColor="#ff99cc";
    $fragment.appendChild($div);


    document.querySelector("h1").appendChild($fragment)

})