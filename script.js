function prviZad(){
    console.log("Slavojka_Klincov")
}

function drugiZad(){
    var ime_i_prezime = "SlavojkaKlincov"
    console.log(ime_i_prezime)
        
}

function treciZad(){
    var broj1 = 6
    var broj2 = 3
function suma (broj1, broj2){
    var zbir = broj1 + broj2
    console.log("Zbir je: " + zbir)
    var razlika = broj1 - broj2
    console.log("Razlika je: " + razlika)
    var proizvod = broj1 * broj2
     console.log("Proizvod je: " + proizvod)
      var kolicnik = broj1 / broj2
     console.log("Kolicnik je: " + kolicnik)
}
suma(10,5)

}

function cetvrtiZad(){
    function suma (a, b, c, d, e){
        var zbir = a + b + c + d + e
        console.log("Zbir je " + zbir)
        var razlika = a - b - c - d - e
         console.log("Razlika je " + razlika)
         var proizvod = a * b * c * d * e
         console.log("Proizvod je " + proizvod)
    }
    suma(2,3,15,12,5)
    
}

function petiZad(){
    function peti(){
    
        var a = "Slavojka"
        var b = " Klincov"
        console.log(a + b)
        
        }
        peti()
        
}

function sestiZad(){
    function dan(danUsedmici){
  
        switch(danUsedmici) {
            case 1:
                console.log("ponedjeljak")
                break
            case 2:
                console.log("utorak")
                break
            case 3:
                console.log("srijeda")
                break
            case 4:
                console.log("cetvrtak")
                break
            case 5:
                console.log("petak")
                break
            case 6:
                console.log("subota")
                break
            case 7:
                console.log("nedjelja")
                break
            default:
            console.log("greska")
        }
        
        }
        dan(15)

        function dan1 (danUsedmici){
 
            if(danUsedmici==1){
                console.log("ponedjeljak")
            }
            else if(danUsedmici==2){
                console.log("utorak")
            }
            else if(danUsedmici==3){
                console.log("srijeda")
            }
            else if(danUsedmici==4){
                console.log("cetvrtak")
            }
            else if(danUsedmici==5){
                console.log("petak")
            }
            else if(danUsedmici==6){
                console.log("subota")
            }
            else if(danUsedmici==7){
                console.log("nedjelja")
            }
            else{
                console.log("greska")
            }
            
            }
            
            dan1(3)
            
}

function sedmiZad(){
    function parnost (broj){
    
        if(broj%2 == 0){
            console.log("broj je paran")
        }
        else if(broj%2 !=0){
            console.log("broj je neparan")
        }
        
        }
        parnost(8)
        
}

function osmiZad(){
    function osmi (x){
        if(x%3 == 0 && x%5 == 0)
        console.log("FizzBuzz")
        else if(x%3 == 0)
        console.log("Fizz")
        else if(x%5 == 0)
        console.log("Buzz")
        else{
            console.log(x + " nije djeljiv ni sa 3 ni sa 5")
        }
        
    }
    osmi(5)
    
}

function devetiZad(){
    function deveti(secs){
        var dani = Math.floor (secs / (60 * 60 * 24))
     console.log(dani)
     var sati = Math.floor ((secs % (60 * 60 * 24)) / 3600)
     console.log(sati)
     var minute = Math.floor ((secs % 3600) / 60)
     console.log(minute)
     var sekunde = secs % 60
     console.log(sekunde)
     }
     deveti(3600)
     
}