import './App.css';
import {useFormik } from 'formik';


function App() {
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
      hobies: [],
      country:"Turkey",
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
          <form onSubmit={handleChange}>
            <label htmlFor="firstName">First Name</label>
            <input  
            name="firstName" 
            value={values.firstName} 
            onChange={handleChange} 
            /> 
            <br/><br/>
    
            <label htmlFor="lastName">Last Name</label>
            <input  
            name="lastName" 
            value={values.lastName} 
            onChange={handleChange}  
            /> 
            <br/><br />

            <label htmlFor="email">Email</label> 
            <input  
            name="email" 
            value={values.email} 
            onChange={handleChange}  
            /> 
            <br/><br/>
                
            <span>Male</span>
            <input 
            type={'radio'} 
            name="gender" 
            value="male" 
            onChange={handleChange} 
            checked={values.gender === "male"}
            />
            <span>Female</span>
            <input 
            type={'radio'} 
            name="gender" 
            value="female" 
            onChange={handleChange} 
            checked={values.gender === "female"}

            />
            <br /><br />
              <div> 
                <input 
                type="checkbox"  
                name='hobbies' 
                value="Football" 
                onChange={handleChange}
                />
                Football
              </div>
              <div>
                <input 
                type="checkbox"  
                name='hobbies' 
                value="Cinema" 
                onChange={handleChange} 
                />  
                 Cinema  
              </div>
              <div>
                <input 
                type="checkbox"  
                name='hobbies' 
                value="Photography" 
                onChange={handleChange} 
                />
                Photography
              </div>

              <select name="country" onChange={handleChange} >
                <option value="Turkey">Turkey</option>
                <option value="England">England</option>
                <option value="USA  ">USA</option>
              </select>
    
            <button type="submit">Submit</button> <br /> <br />
            
            <code>{  JSON.stringify(values)}</code>
          </form>  )
    </div>
  );
}

export default App;
