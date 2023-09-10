
if (typeof document !== 'undefined') {
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
}

const hackathonElement =document.getElementById("hn")
const hackathonElement1 =document.getElementById("hsd")
const hackathonElement2 =document.getElementById("hed")
// const hackathonElement3 =document.getElementById("rsd")
// const hackathonElement4 =document.getElementById("red")
const hackathonElement5 =document.getElementById("cn")
const hackathonElement6 =document.getElementById("ann1")
const hackathonElement7 =document.getElementById("ann2")
const hackathonElement8 =document.getElementById("orgn1")
const hackathonElement9 =document.getElementById("orgn2")



 console.log(hackathonElement);
 console.log(hackathonElement1);
 console.log(hackathonElement2);
//  console.log(hackathonElement3);
//  console.log(hackathonElement4);
 console.log(hackathonElement5);
 console.log(hackathonElement6);
 console.log(hackathonElement7);
 console.log(hackathonElement8);
 console.log(hackathonElement9);
 


    const getData=async() =>{
    const res = await fetch("https://web-it-like-spider.onrender.com/hackathon/home/")
    
    const data =  await res.json()
    console.log(data.name);
     hackathonElement.innerText=data.name;
     hackathonElement1.innerText=data.start_date;
     hackathonElement2.innerText=data.end_date;
    //  hackathonElement3.innerText=data.registration_start_date;
    //  hackathonElement4.innerText=data.registration_end_date;
     hackathonElement5.innerText=data.contact_number;
     hackathonElement6.innerText=data.announcements[0].announcement_text;
     hackathonElement7.innerText=data.announcements[1].announcement_text;
     hackathonElement8.innerText=data.organizers[0].organizer_info;
     hackathonElement9.innerText=data.organizers[1].organizer_info;
   

   }
  
    getData();





