import React,{ useState } from "react";
import "../css/Part4.css";
import axios from "axios"

export default function Updateitems(props){
    // console.log("id",props.data.id)
    const [formData, setformData]=useState({
        id : props.data.id,
        image_src : props.data.src,
        description:props.data.para,
        price: props.data.price ,
        title: props.data.heading
    })
    const [toggle_form, settoggle_form] =useState(false)

    const toggleform=()=>{
        settoggle_form(!toggle_form)
    }

    const changeshandle =(e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handlesubmit =(e)=>{
        e.preventDefault()
        axios.post("/update_item",formData)
        .then(response=>{
            console.log(response.data)})
        .catch(error=>{
            console.log("error",error)
        })
        window.location.reload();
    }
    return(
        <div>
            <button onClick={toggleform} className="update_btn">update</button>
            <div className='outer_update_form'>
                {toggle_form &&
                <form onSubmit={handlesubmit} className="create_update_form">
                    <i className="fa-solid fa-xmark create_form_close" onClick={toggleform}></i>
                    <h3 style={{textAlign:"center",margin:"0",color:"white"}}>Update Item</h3>
                    <label htmlFor="">Title</label>
                    <input name="title" type="text" value={formData.title} onChange={changeshandle}/>
                    <label htmlFor="">Description</label>
                    <textarea name="description" id="" cols="30" rows="10" value={formData.description} onChange={changeshandle}></textarea>
                    <label htmlFor="">Price</label>
                    <input name="price" type="number" value={formData.price} onChange={changeshandle} />
                    <label htmlFor="">Image</label>
                    <input name="image_src" type="text" value={formData.image_src} onChange={changeshandle}/>
                    <button type="submit">Update</button>
                </form>
                }
            </div>
        </div>
    )
}