*/Referece Tutorial point Dad Joke genrator*/

const btnE1=document.getElementById("btn");
const jokeE1=document.getElementById("joke")
const apiKey="+JwKKBmbL7aleKc+eBfoxw==9FgpZHfQ1e6nNmDb";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    }

}
const apiURL="https://api.api-ninjas.com/v1/dadjokes";
 async function getJoke(){
try {
    
jokeE1.innerText="Updating...";
btnE1.disabled=true;
btnE1.innerText="Loading...";
    const response= await fetch(apiURL, options);
        const data= await response.json();

        
    jokeE1.innerText=data[0].joke;
    btnE1.disabled=false;

    btnE1.innerText="Tell me a Joke";
   
} catch (error) {
    console.log("error");
    jokeE1.innerText="An error happend, try again";
    btnE1.disabled=false;
    btnE1.innerText="Tell me a joke";
}
}

btnE1.addEventListener("click", getJoke);

*/ readme 2

const btnE1=document.getElementById("btn");
const apiKey="+JwKKBmbL7aleKc+eBfoxw==9FgpZHfQ1e6nNmDb";
const apiURL="https://api.api-ninjas.com/v1/dadjokes";

const option={
    method:'GET',
    headers: {"X-Api-Key":apiKey}
}

async function getJoke(){    
    const response=await fetch(apiURL, option);
    const data=await response.json();





   
    console.log(data[0].joke);
}

btnE1.addEventListener("click",getJoke);






