document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr=new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);
    xhr.onload=function(){
        if(this.status){
            const response=JSON.parse(this.responseText);

            const rate=response.rates.TRY;
            const amount=Number(document.getElementById("amount").value);//bunun değeri string numbera çevirmemiz lazım
            
            document.getElementById("tl").value=amount*rate;
            


        }
    }
    xhr.send();
}