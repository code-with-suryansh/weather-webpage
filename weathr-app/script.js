let s_btn = document.getElementById('s-btn');
let res = document.querySelector('.result');

let tFer;
let tCel;


s_btn.addEventListener('click', function(){
    res.style.display = 'block';
    let input = document.getElementById('search').value;
        

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=b06ea2c8992dbd595b6874cffaac2160')
    .then(response => response.json())
    .then(data => {
        
        let tem = data.main.temp;
        tCel = tem - 273.15;
        tFer = (tem - 273.15) * 9/5 + 32;
        let city = data.name;
        let wDec = data.weather[0].description;

        document.querySelector('#t').innerText = tCel.toFixed(0);
        document.querySelector('h3').innerText = city;
        document.querySelector('h5').innerText = wDec;
        
        
    })

})

function fer(){
    document.querySelector('#t').innerText = tFer.toFixed(0); 
    document.querySelector('#change').innerHTML = `<span>&deg;F</span>`;
}

function cel(){
   document.querySelector('#t').innerText = tCel.toFixed(0);
   document.querySelector('#change').innerHTML = `<span>&deg;C</span>`;

}
