

let templateInfo = document.querySelector(".templateInfo");



function getUserInput(){
    //text input
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;

    //radio buttons
    let selectedSA;
    let selectedTHW;

    let seamAllowance = [...document.getElementsByName("seamAllowance")] //storing node list into an array
    for(let i=0;i<seamAllowance.length;i++){
        if(seamAllowance[i].checked){
            selectedSA = seamAllowance[i].value;
        }
    }
    let topHemWidth = [...document.getElementsByName("topHemWidth")];
    for(let j=0;j<topHemWidth.length;j++){
        if(topHemWidth[j].checked){
            selectedTHW = topHemWidth[j].value;
        }
    }

    console.log({selectedSA,selectedTHW,height, width, length});
}
