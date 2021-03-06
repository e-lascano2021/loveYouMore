import React, { useState } from 'react'
import Select from 'react-select'
import { useNavigate } from "react-router"
import { createLoveArmy } from '../../services/profileService'

const LoveArmyForm = (props) => {
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
  const loveLanguagesOptions = [
    { value: "Words of Affirmation", label: "Words of Affirmation" },
    { value: "Acts of Service", label: "Acts of Service" },
    { value: "Receiving Gifts", label: "Receiving Gifts" },
    { value: "Quality Time", label: "Quality Time" },
    { value: "Physical Touch", label: "Physical Touch" },
  ]

  const [formData, setFormData] = useState({
    name: '', 
    image: {},
    loveTypes: [],
    loveLanguages: []
  })
  
  const handleLoveLanguages = e => {
    setFormData({...formData, "loveLanguages": e })
  }

  const handleLoveTypes = e => {
    setFormData({...formData, "loveTypes": e })
  }

  const handleChange = e => {  
    setFormData({...formData, [e.target?.name]: e.target?.value}) 
  }
  
  const handleImage = e => {
    setFormData({...formData, [e.target?.name]: e.target?.files[0]}) 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let finalFormData = { ...formData }
      if (formData.image) {
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
      const data = await createLoveArmy(finalFormData)
      props.setArmy([...props.army, data])
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
            onChange={handleImage}
          />
        </div>
        
        <div>
          <label> Add Love Types</label>
          <Select name="loveTypes" onChange={handleLoveTypes} isMulti closeMenuOnSelect={false} options={loveTypesOptions}/>
        </div>

        <div>
        <label> Add Love Languages</label>
          <Select name="loveLanguages" onChange={handleLoveLanguages} isMulti closeMenuOnSelect={false} options={loveLanguagesOptions}/>
        </div>

        <div className='createBtn-wrapper'>
          <button type="submit" className='createBtn'>Create Post</button>
        </div>
      </form>
    </main>
  )
}

export default LoveArmyForm