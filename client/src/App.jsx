import TestimonialCard from "./Components/TestimonialCard"


function App() {
  const data = [
    {
      id: 1,
      name: "Emily Watson",
      review: "This service was amazing! Highly recommeded.",
    },
    {
      id:2,
      name: "Manoj",
      review : "This service was good! recommended.",
    },
    {
      id:3, 
      name:"Anne Jones",
      review: "This service was average ! not recommended.",
    }
  ]


  return (
    <div>
      <h1>Reviews of the client</h1>
      {data.map((e)=>(
        <TestimonialCard key = {e.id} {...e}/>
      ))}
    </div>

  )
}

export default App
