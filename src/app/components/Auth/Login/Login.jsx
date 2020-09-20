import React from "react";
import {Redirect} from "react-router-dom";
import {FaGoogle} from "react-icons/fa";
import {Formik, Form, Field, ErrorMessage} from "formik";

import {Input, Submit} from "../styles";
import Button from "../../Button";

import FirebaseContext from "../../../FirebaseContext";

export default function Login(){
  const firebaseContext = React.useContext(FirebaseContext);
  const [successful, setSuccessful] = React.useState(false);
  
  if(successful){
    return (<Redirect to="/app/home"/>)
  }
  
  async function handleSignupWithGoogle(){
    try{
      let result = await firebaseContext.signInWithGoogle();
      
      console.log(result);
      
      setSuccessful(true);
      
    }catch(error){
      console.log(error);
    }
  }
  
  return (<>
    <Formik
      initialValues = {{email:'', password:''}}
      validate = {values => {
          const errors = {};
          if(!values.email){
            errors.email = 'An email address is required';
          }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = (<ul>
              <li>Ensure it's a valid email address</li>
            </ul>);
          }
          
          if(!values.password){
            errors.password = "A password is required";
          }
          
          return errors;
        }
      }
      onSubmit = {async (values, { setSubmitting }) => {
          try{
            setSubmitting(true);
            
            let result = await firebaseContext.signInUser(values.email, values.password);
            
            console.log(result);
            
            setSubmitting(false);
            
            setSuccessful(true);
            
          }catch(error){
            console.log(error);
            setSubmitting(false);
          }
        }
      }
    >
    {({isSubmitting}) => (
      <Form>
        <Input>
          <Field type="email" name="email" placeholder="User email"/>
        </Input>
        <div><ErrorMessage name="email" component="div"/></div>
        <Input>
          <Field type="password" name="password" autoComplete="new-password" placeholder="Password"/>
        </Input>
        <div><ErrorMessage name="password" component="div" /></div>
        <Submit type="submit" disabled={isSubmitting} className="primary">
          Login
        </Submit>
      </Form>
      )
    }
    </Formik>
    <Button 
      icon={<FaGoogle/>} 
      style={{height:"40px", lineHeight:"40px", margin:"auto", backgroundColor:"#c62828", color:"white"}}
      onClick={handleSignupWithGoogle}
    >
      Login With Google
    </Button>
    </>
  );
}