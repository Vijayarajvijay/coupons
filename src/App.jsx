import axios from 'axios'
import { useEffect,useState } from 'react'

function App() {

  let [data,setData] = useState([])

  let getUsers = async()=>{
    try {
      let res = await axios.get(`${import.meta.env.VITE_API_URL}/user`)
      if (res.status===200){
        setData(res.data.users)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
getUsers()
  },[])
  return (
   <>
   <h1> Welcome </h1>
   </>
  )
}

export default App