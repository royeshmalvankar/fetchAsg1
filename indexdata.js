let tb=document.querySelector('tbody')
let dt=JSON.parse(localStorage.getItem("u"))||{}
let fm=[]
fm.push(dt)
console.log(fm);
fm.map((ele)=>
{

    let row = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')

    td1.innerText=ele.Name
    td2.innerText=ele.Age
    td3.innerText=ele.Mobile
    row.append(td1,td2,td3)
    tb.append(row)

})