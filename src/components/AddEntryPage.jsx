import React from "react"

export const AddEntryPage = () => {
    
    const [formData, setFormData] = React.useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            degree: '',
            additionalInfo: '',
            experience: '',
            achievements: '',
            skills: ''
        }
    )

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
          return {
            ...prevFormData, 
            [name]: value
          }
        }) 
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // submit to Database 
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          degree: '',
          additionalInfo: '',
          experience: '',
          achievements: '',
          skills: ''
        });
      };
  
    return (
    <>
      <h4 style={{ textAlign: 'center', color: "white" }}>Add Entry Page</h4>
      <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="firstName">First Name:</label>
              <input
                id='firstName'
                type="text"
                placeholder="John"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                placeholder="Doe"
                onChange={handleChange}
                id="lastName"
                value={formData.lastName}
                required
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                placeholder="(555)-555-5555"
                onChange={handleChange}
                id="phoneNumber"
                value={formData.phoneNumber}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="JohnDoe@email.com"
                onChange={handleChange}
                id="email"
                value={formData.email}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px'}}>
            <div>
              <label htmlFor="degree">Degree:</label>
              <input
                type='text'
                id="degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="additionalInfo">Additional Info:</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="experience">Experience:</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="achievements">Achievements:</label>
              <textarea
                id="achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="skills">Skills:</label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit">Add New Alumni</button>
          </div>
        </form>
      </div>
    </>
  )
}
