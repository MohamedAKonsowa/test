function quantity(){
    let select = document.getElementById('years');
    for (var i = 0; i < 100; i++){
    select.options[select.options.length] = new Option(i+1, i);
  }
}
function calculate(){
        let p=document.getElementById('input1').value;
        let t=document.getElementById('years').value ;
        let r=document.getElementById('range1').value;

        let  SI=p*(r/100)*t + p*(r/100);

        document.getElementById("p1").innerHTML = "" + SI;
}

