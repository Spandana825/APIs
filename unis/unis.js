let url ="http://universities.hipolabs.com/search?name=";
let btn =document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let colleges=await getunis(country);
    console.log(colleges);
   show(colleges);


});
function show(colleges){
    let col=document.querySelector("ul");
    col.innerText=""
    
    for(college of colleges){
        console.log(college.name);
        let li=document.createElement("li");
        li.innerText=college.name;
        col.append(li);
    }


}

async function getunis(country){
    try{
        let link= await axios.get(url+country);
        return link.data;        

    }
    catch(er){
        console.log(er);
    }
}