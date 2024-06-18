let joke= document.getElementById("content");
let btn=document.getElementById("btn");

async function fetchJoke(){try{
    let result = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    result = await result.json();
    joke.innerHTML = result.joke;
}
    catch(error){
        console.error("Error fetching joke:", error);

    }
    

}
fetchJoke()

function copyJoke(){
    copyText=joke.textContent;
    navigator.clipboard.writeText(copyText)
    alert(copyText)
}

function ListenJoke(){
    let speech = new SpeechSynthesisUtterance(joke.textContent);
    window.speechSynthesis.speak(speech)
}