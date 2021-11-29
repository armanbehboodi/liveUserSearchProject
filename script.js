let pTags = $(".main__text");
$(function (){
    $(".main__input").on("keyup",function (){
        let inputValue = $(".main__input")[0].value.toUpperCase();
        for (let i=0 ; i< pTags.length ; i+=2){
            if (pTags[i].innerHTML.toUpperCase().includes(inputValue) || pTags[i+1].innerHTML.toUpperCase().replace(/,/g,"").replace(/\s/g, '').includes(inputValue)){
                pTags[i].parentElement.style.display = "block";
            } else {
                pTags[i].parentElement.style.display = "none";
            }
        }
    })
})