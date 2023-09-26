

function updatePrices() {

    setTimeout(function() {
   
        var goldPrice = 12516; 
        var silverPrice = 3932; 

       
        document.getElementById('goldRatePlaceholder').textContent = goldPrice;
        document.getElementById('silverRatePlaceholder').textContent = silverPrice;
    }, 100); 
}


updatePrices();
