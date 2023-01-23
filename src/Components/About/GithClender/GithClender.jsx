
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitCalendar = () => {
  return (
    <div style={{display:"flex",alignItems:"center", flexDirection:"column",color:"white", gap:"50px" ,marginTop:"80px"}}>
      <h1>
        Git Calendar
      </h1>
      <div m='auto' mt={10} mb={10} w='95%'>
        <GitHubCalendar username="Mritunjay0001
" blockSize={15} blockMargin={5} fontSize={15}/>
      </div>


      <div  mb="25px" mt="5rem" >
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Mritunjay0001
&theme=github" />
      </div>
      <div>
        <div >
          <div>
            <img src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=Mritunjay0001
&theme=github" />
          </div>
          <div mb="1rem">
            <img src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Mritunjay0001
&theme=github&utcOffset=8" />
          </div>
        </div>
        </div>







    </div>
  );
};

export default GitCalendar;