import React, { useState } from 'react'



const allJobData=[
  {
    "id":1,
    "title":"Java Developer",
    "location":"Remote",
    "description":"Design, development, and management of Java-based applications." 
    
},
{
    "id":2,
    "title":"DataBase Engineer",
    "location":"Noida",
    "description":"Develop and maintain database using oracle Sql." 
    
},
{
    "id":3,
    "title":"Full Stack Developer",
    "location":"Jaipur",
    "description":"Work on both frontend and backend with React and Spring boot." 
    
},
{
    "id":4,
    "title":"Frontend Developer",
    "location":"Pune",
    "description":"Develop frontend web application using React." 
    
},
]
const JobDetail = () => {
  let [filterLocation,setFilterLocation]=useState(" ");
  let [filterTitle,setFilterTitle]=useState("");

  const filterJob=allJobData.filter((job)=>{
   const mathchedData=filterLocation?job.location===filterLocation:true;
   const matchedTitle=filterTitle?job.title===filterLocation:true;
      return mathchedData && matchedTitle;
    
    
  });
  //this handle change is for filteration by title .
  let handleChangeTitle=(e)=>{
    let {name,value}=e.target;
    setFilterTitle({...filterTitle,[name]:value});
  }
  //this handle change is for filteration of job by location.
  let handleChangeLocation=(e)=>{
    let {name,value}=e.target;
    setFilterLocation({...filterLocation,[name]:value});
  }

  
  return (
    <section>
      <div className='w-[100vw] h-[5vh] border-2 '>
      <label htmlFor="title">Filter by job name:</label>
     <select className='w-[10vw] ml-8'  name='title' value={filterTitle} onChange={handleChangeTitle}>
      {/* this is by default  selection*/}
     <option value="" disabled selected>No Selection</option>
     {/* these are the four option that i have given  for title*/}
      <option value="Java Developer">Java Developer</option>
      <option value="DataBase Engineer">DataBase Engineer</option>
      <option value="Full Stack Developer">Full Stack Developer</option>
      <option value="Frontend Developer">Frontend Developer</option>
     </select>
     <label htmlFor="location" className='ml-8'>Filter by location:</label>
     <select className='w-[10vw] ml-8 ' name='location'  value={filterLocation} onChange={handleChangeLocation}>
       {/* this is by default  selection*/}
     <option value="" disabled selected>No Selection</option>
     {/* these are the four option that i have given for location*/}
     <option value="Remote">Remote</option>
      <option value="Noida">Noida</option>
      <option value="Jaipur">Jaipur</option>
      <option value="Pune">Pune</option>
     </select>
      </div>
       <div className='flex flex-wrap  justify-start  items-stretch border border-black h-auto w-full px-[1rem] md:px-[6rem]  py-[2rem] space-x-0 md:space-x-2' >
          
          {/*  we can use the map function to iterate over the  array and generate the cards dynamically  */}
          {filterJob.map((job)=>(
                   
                   
   // Item Width: Each item is given a width of 30% to fit three items per row.
              <div key={job.id}
               className='w-full md:w-[30%] h-[50%]   border-gray-500 border-[2px] rounded-xl space-x-4  bg-slate-200 mt-0 mb-4 p-5 '>
                <h1 className='font-semibold text-center md:text-left'>{job.title}</h1>
                <div className='flex justify-center md:justify-start flex-row '>
                  <span className='mx-1 font-light'>{job.location}</span>
                </div>
                <div className="text-center md:text-left px-2">
                  <p>{job.description}
                  </p>
                  <button className='relative bg-blue-500 w-[6rem] h-[2rem] rounded-2xl  mt-6 mb-2'>Apply Now
                  </button> 
                </div>
       </div>
          ))}
          </div>
    </section>
  )
}

export default JobDetail