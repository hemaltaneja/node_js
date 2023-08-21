// const data = [
//     {
//         "id" : 1,
//         "Name" : "Tumbadd",
//         "Description ": "When a family builds a shrine for Hastar, a monster who is never to be worshipped, and attempts to get their hands on his cursed wealth, they face catastrophic consequences.",
//         Image: src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJQMBEQACEQEDEQH/xAAbAAACAwADAAAAAAAAAAAAAAABBQIDBAAGB//EACwQAAICAQIDBwQDAQAAAAAAAAECAxEABBIhMUEFEyJRYZGxMjNxoRRC4Qb/xAAaAQACAwEBAAAAAAAAAAAAAAACBAEDBQAG/8QAKREAAQQBAwIGAgMAAAAAAAAAAQACAxEhBBJRMUETInGxwfBhgQUy4f/aAAwDAQACEQMRAD8A8rmkedt1C6G4jhQAr4GJ1yvR5qmj1QEKrYJ22LVud8q+c7daIQht7jXHfilJo4ze1+p51y4/5kBxRuijN0fbpn/FTJCQfCL8RArqB6YQcqHwkHHNI/y5lgjgLr3cZYqNosXz41Zw7KW2tabPuhFatf8Ab4wCmI7a78rlEngOHmclTV9AuUxY3RHThedgKNric9FIEr6rRBHpkIgSPT79+0oOSXJoV0rJGAgfZddKzZdMb+rpg32V2wHzHlGUCJRvB3NyAF3nDJwikAib5up/ahGXZqYFdo5MtVkuoBUxl7nbXYrkK+aNgA3AULP7wGlNSxkZWSVwrV05jLQLCRkeGupS09y2kjMFPAEdMF/lyEenDpba849kxg0uy4lYICL31bEZQ+S8rXg0u242mhz3RmTTybY9KojkiFuwP1CshpcMuyCokZC93hwgBzep5FfSqtXpzJp0kDFAooitwPE8sNj6dSVngMrbuq7dR+vlJZm3SGvxjbRhYUzreVbFORYaVl/A4YLm/hXRagiwXUnMTQDSNOskkzIpLHoMUcHb9tUvQsl0zIPF3FxAPp8LJpNb9ySQDfwDH3/XA5bJF0AWXptc+3Pd/bFodq9opJAulHfKYWNKTwXzrJhicDuKn+Q1sDmljAQ7vwlAJxmliAlHJXLuXYA0M/8AzGo0xQJPJuWWWrNWD18gPfMfU+K3VNd24W5pImTaUtuj0S3Rdj6loZ9SUBjCNIaPEqPET7YzJqWBwZ36fCiDRSNa6Z/Q5+Up1nckxGJixMY330ayK9gPfGmbs2szUFtiuFlyxLqxtPIshQgbhV0wI5XzyVFpl2a8unglVZEUvYotXSsokiD3AlMxTljSAmUeveGBoo5UC9y0dF+hFZQ7SBztx5BT7v5EGPwwOyTJo4W0WokOpUahGQRxAfcBvcbPljXm3AAYWUS0tvusawSMLtALI8Uij5OWILX/2Q=="

//     }
// ]


// let a = "Hemal Taneja";
// console.log(a);

// let n = 100 
// console.log(n)
//

//----------------------------------------------------------------

// const regex=(html)=>{
//     setTimeout(()=>{
//         console.log("HTML Begin");
//         html();
//     },2000)
// }
// const html=(css)=>{
//     setTimeout(()=>{
//         console.log("CSS Begin");
//         css();
//     },5000)
// }
// const css=(js)=>{
//     setTimeout(()=>{
//         console.log("JS Begin");
//         js();
//     },3000)
// }
// const js=(js)=>{
//     setTimeout(()=>{
//         console.log("Completed");
//         js();
//     },2000)
// }


// console.log("Regex");
//     regex(()=>{
//     console.log("Stated html");
//     html(()=>{
//         console.log("started css");
//         css(()=>{
//             console.log("Started js");
//             js(()=>{
//                 console.log("Course Ended");
//             })

//         })
//     })
// })

//-------------------------------------------------------------------------

burger((burger)=>{
    sauce(burger,(sauce)=>{
        tikki(burger,sauce,(tikki)=>{
            bread(bread,sauce,tikki,(bread)=>{
                console.log("burger is Ready")
            })
        })
    })
})


function burger(callback){
    setTimeout(()=> {
        console.log("order is placed");
        callback(burger);
    },500)
}









