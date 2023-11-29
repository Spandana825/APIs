let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";
// fetch(url)
// .then((res) => {
    
//    return res.json();
// })
//  .then((data)=>{
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log(data2.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data3)=>{
//         console.log(data3.fact);
//         return fetch(url);
//     })
//     .then((resp)=>{
//         return resp.json();

//     })
//     .then((data4)=>{
//         console.log(data4.fact);
//     })



// .catch((err)=>{
//     console.log(err)

// });
            //     let btn=document.querySelector("button");
            //     // btn.addEventListener("click",()=>{
            //     //     console.log("clicked");
            //     // });
            //     btn.addEventListener("click",async()=>{
            //         let facts= await getfacts();
                
            //         let p=document.getElementById("fac")
            //         p.innerText=facts;
            //     })

            //     async function getfacts(){
            //         try{
            //         let res= await axios.get(url);
                    
            //         return res.data.fact;
                
            //         }catch(e){
            //             console.log(e);
            //             return "no fact found";
            //         }
                    
            //    }
             let btn=document.querySelector("button");
           
            btn.addEventListener("click",async()=>{
                let link=await getimage();
              
                let img=document.getElementById("img");
                img.setAttribute("src",link);
                let p=document.getElementById("p");
                p.innerText=link;
            })
async function getimage(){
    try{
        let res= await axios.get(url2);
        return (res.data.message);

    }
    catch(e){
        console.log(e);
        return "/";

    }
}

