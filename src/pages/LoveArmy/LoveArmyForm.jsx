import React, { useState } from 'react'
import Select from 'react-select'
import { useNavigate } from "react-router"
import { createLoveArmy } from '../../services/profileService'

const LoveArmyForm = () => {
  const navigate = useNavigate()
  const loveTypesOptions = [
    { value: "Eros", label: "Eros" },
    { value: "Philia", label: "Philia" },
    { value: "Storge", label: "Storge" },
    { value: "Agape", label: "Agape" },
    { value: "Ludus", label: "Ludus" },
    { value: "Pragma", label: "Pragma" },
    { value: "Philautia", label: "Philautia" },
    { value: "Mania", label: "Mania" },
  ]

  const [formData, setFormData] = useState({
    name: '', 
    image: '',
    loveTypes: []
  })

  const handleChange = e => {
    if(typeof e === "object" && !e.target){
      setFormData({...formData, "loveTypes": e })
    } else {
      setFormData({...formData, [e.target?.name]: e.target?.value})
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let finalFormData = { ...formData }
      if (formData.image!=='') {
        const data = new FormData()
        data.append('file', formData.image)
        data.append("upload_preset", "loveyoumore")
        data.append('folder', 'loveyoumore')
        data.append("cloud_name", "allthefeels")
        const res = await (await fetch("https://api.cloudinary.com/v1_1/allthefeels/image/upload", {
          method: "post",
          body: data
        })).json()
        finalFormData['image'] = res.url;
      }
      createLoveArmy(finalFormData)
      navigate('/loveArmy')
    } catch (error) {
      throw error
    }
  }

  return (
    <main>
      <form onSubmit= {handleSubmit}>
        <div className='form-group left'>            
          <label className='label-name'>Add Name: </label>            
          <input className="form-input"
            required
            name="name"
            autoComplete='off'
            placeholder="Enter Name here"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className='form-group right'>
          <label className='label-title'>Add an Image: </label>
          <input className="form-input"
            required
            type='file'
            name="image"
            onChange={handleChange}
          />
        </div>
        
        <div>
          <Select name="loveTypes" onChange={handleChange} isMulti closeMenuOnSelect={false} options={loveTypesOptions}/>
        </div>

        <div className='createBtn-wrapper'>
          <button type="submit" className='createBtn'>Create Post</button>
        </div>
      </form>
    </main>
  )
}

export default LoveArmyForm
