const username = "Aakfan";
const apiKey = "FpWeLN1Ef9BCstduSs9MyEnX"; // Not an actual API key lol
const response = await fetch("https://e621.net/posts.json?tags=rating:s&limit=10", {
  headers: { "Authorization": "Basic " + btoa(`${username}:${apiKey}`) }
});

let display = "";

const final = await response.json();
console.log(final);
for (let i = 0; i < 10; i++) {
final.posts.map(() => {
    let toBeDisplayed = final.posts[i++].file.url;
    display += "</br><img loading='lazy' src='" + toBeDisplayed + "'/>";
});}

document.getElementById("display").innerHTML = display;


