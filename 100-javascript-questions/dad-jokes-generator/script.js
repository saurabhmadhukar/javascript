const btnE1=document.getElementById("btn");
const apiKey="+JwKKBmbL7aleKc+eBfoxw==9FgpZHfQ1e6nNmDb";
const jokeE1=document.getElementById("joke");
const apiURL="https://api.api-ninjas.com/v1/dadjokes";

const optionData={
    method:'GET',
    headers:{'X-Api-key':apiKey},
}


async function joke(){
try {
    btnE1.disabled=true;
    btnE1.innerText="wait..";
    jokeE1.innerText="Loading..."
    const response=await fetch(apiURL, optionData);
    const data=await response.json();
    btnE1.innerText="Tell me a joke";
    console.log(data[0].joke);
    jokeE1.innerText=data[0].joke;
   btnE1.disabled=false;
} catch (error) {
  console.log(error);

    if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
      jokeE1.innerText = "Network issue. Try again later.";
    } else if (error.name === 'SyntaxError') {
      jokeE1.innerText = "Oops! Couldn't understand the response.";
    } else if (error.name === 'ReferenceError') {
      jokeE1.innerText = "Something's missing in the code.";
    } else {
      jokeE1.innerText = "Unexpected error occurred. Please try again.";
    }

    btnE1.innerText = "Tell me a joke";
    btnE1.disabled = false;
    }
    
}


btnE1.addEventListener("click",joke);