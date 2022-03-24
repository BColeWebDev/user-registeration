import React, { useState } from 'react';
const Form = ({ handleSubmit }) => {
    const initialState = { firstname: "", lastname: "", email: "", development: "font end developer" }

    const [inputfield, setInputField] = useState(initialState)
    const values = [
        ['front end developer ', 'Front End Developer'],
        ['back end developer', 'Back End Developer'],
        ['full stack developer', 'Full Stack Developer'],

    ];
    const handleInputChange = (event) => {

        const { name, value } = event

        setInputField({ ...inputfield, [name]: value })
    }

    return (
        <form onSubmit={e => {
            setInputField(initialState)
            handleSubmit(inputfield)
        }}>
            <div className='form-group'>
                <label htmlFor='firstname'>First Name</label>
                <input type="text" name='firstname' value={inputfield.firstname} onChange={e => handleInputChange(e.target)} required />
            </div>
            <div className='form-group'>
                <label htmlFor='lastname'>Last Name</label>
                <input type="text" name='lastname' value={inputfield.lastname} onChange={e => handleInputChange(e.target)} required />

            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' value={inputfield.email} onChange={e => handleInputChange(e.target)} required />
            </div>
            <div className='form-group'>
                <label htmlFor="development">Development Jobs:</label>
                <select
                    name="development"
                    onChange={e => handleInputChange(e.target)}
                >
                    {values.map(([value, text]) => (
                        <option key={value} value={value}>
                            {text}
                        </option>
                    ))}
                </select>
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>

        </form>);
}

export default Form;