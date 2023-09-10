


const postData = (event) => {
    event.preventDefault()
    const teamname = document.getElementById("teamname")
    const name1=document.getElementById("name1")
    const dept1=document.getElementById("dept1")
    const mail1=document.getElementById("mail1")
    const reg1=document.getElementById("reg1")
    const phone1=document.getElementById("phone1")

    const name2=document.getElementById("name2")
    const dept2=document.getElementById("dept2")
    const mail2=document.getElementById("mail2")
    const reg2=document.getElementById("reg2")
    const phone2=document.getElementById("phone2")

    const name3=document.getElementById("name3")
    const dept3=document.getElementById("dept3")
    const mail3=document.getElementById("mail3")
    const reg3=document.getElementById("reg3")
    const phone3=document.getElementById("phone3")


    const data = {
        team_name: `${teamname.value}`,

        team_member_1_name:`${name1.value}`,
        team_member_1_department:`${dept1.value}`,
        team_member_1_phone:`${phone1.value}`,
        team_member_1_email:`${mail1.value}`,
        team_member_1_register_number:`${reg1.value}`,

        team_member_2_name:`${name2.value}`,
        team_member_2_department:`${dept2.value}`,
        team_member_2_phone:`${phone2.value}`,
        team_member_2_email:`${mail2.value}`,
        team_member_2_register_number:`${reg2.value}`,

        team_member_3_name:`${name3.value}`,
        team_member_3_department:`${dept3.value}`,
        team_member_3_phone:`${phone3.value}`,
        team_member_3_email:`${mail3.value}`,
        team_member_3_register_number:`${reg3.value}`,
    }

    const jsonData = JSON.stringify(data)
    console.log(jsonData);


   try{
    fetch("https://web-it-like-spider.onrender.com/hackathon/register/", {
	method: "POST",
	body: jsonData,
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})


.then(response => response.json())
.then(json => console.log(json));
   }

   catch(e){
       console.log(e.message);
   }
  
}
