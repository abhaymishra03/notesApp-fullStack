import axios from "axios";
import "./CreatePage.css";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";

const CreatePage = ({setnotes}) => {

  let navigate = useNavigate();

      const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) =>{

    const response = await axios.post("/api/create-note",{

        title:data.title,
        content:data.content,
    })

    setnotes(prev=>[...prev,response.data.note]);

  }

  const handleclick = (e)=>{
    e.preventDefault;

    navigate("/");
  }
  return (
    <div className='create-page'>

        <h1>Create Post</h1>
        <form className="create-form" onSubmit={handleSubmit(onSubmit)}>


            <label htmlFor="i-title">Enter the title :</label>
            <input id='i-title' type="text" {...register("title")}/>
            <label htmlFor="i-content">Enter the content :</label>
            <textarea id='i-content' type="text" {...register("content")}></textarea>

            <button onClick={handleclick}>Create</button>
        </form>


    </div>
  );
};

export default CreatePage;