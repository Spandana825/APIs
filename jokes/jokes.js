let url="https://icanhazdadjoke.com/";
async function getjokes(){
    try{
        let res=await axios.get(url,{headers: {'Accept': 'application/json',}});
        console.log(res.data.joke);
        let p=document.getElementById("joke");
        p.innerText=res.data.joke;

    }
    
    catch(er){
        console.log(er);
    }
}
getjokes();






// function getJoke() {
//     // API endpoint for a random dad joke
//     const apiUrl = 'https://icanhazdadjoke.com/';

//     // Fetch the joke from the API
//     fetch(apiUrl, {
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Display the joke in the HTML
//         const jokeText = document.getElementById('joke-text');
//         jokeText.textContent = data.joke;
//     })
//     .catch(error => {
//         console.error('Error fetching joke:', error);
//     });
// }
