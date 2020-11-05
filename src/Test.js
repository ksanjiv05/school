import React,{useState} from 'react'
import axios from 'axios'
let movies={movies:[]};

export const Test = () => {
  const [movie, setMovie] = useState({})
  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [data,setData] = useState(null);
  const handelClick=()=>{
  // movies.movies=[...movies.movies,movie]
  //  console.log(movies)
    const formData = new FormData()
        formData.append('file1', img)
        formData.append('file2', img2)
        // const data={
        //   formData:formData,
        //   email:"ksanjiv0005@gmail.com"
        // }
        axios.post("http://localhost:3000/api/uploads?roll=TSM00012020", formData, {
        }).then(res => {
            console.log(res)
            setData(res.data)
        })
  
  }
  const handleChange =(ev)=>{
    const { name, value } = ev.target;
    setMovie((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleFile=(ev)=>{
    setImg(ev.target.files[0])
  }
  return (
    <div>
      <input name="title"  onChange={ev=>handleChange(ev)}/>
      
      <input name="director" onChange={ev=>handleChange(ev)} />
      <input type='file' name='file1' onChange={ev=>{setImg(ev.target.files[0])}} />
      <input type='file' name='file2' onChange={ev=>{setImg2(ev.target.files[0])}} />
      <img src={data?`http://localhost:3001/image/`+data:""} width={400} height={400} />
      <button onClick ={handelClick}>add Movie</button>
    </div>
  )
}
