let nm=document.getElementById("name")
let ag=document.getElementById("age")
let mb=document.getElementById("mob")
let bt=document.getElementById("clc")
let wr=document.getElementById("wrn")


bt.addEventListener('click',function(){
    event.preventDefault()
    let pro = new Promise(function(resolve,reject)
            { setTimeout(function (){

                if(nm.value==="" || ag.value==="" || mb==="")
                {
                    reject(
                            wr.innerHTML="",
                            h1t=document.createElement("h1"),
                            h1n=document.createTextNode("Please fill the form"),
                            h1t.appendChild(h1n),
                            wr.appendChild(h1t)
                        )
                }
                else
                {
                    resolve(
                            wr.innerHTML="",
                            u={},
                            u.Name=nm.value,
                            u.Age=ag.value,
                            u.Mobile=mb.value,
                            localStorage.setItem("u",JSON.stringify(u)),
                            window.location.href="./displaydata1.html"
                        )
                }
            })
        })
})