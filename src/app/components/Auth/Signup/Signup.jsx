import React from "react";
import {Redirect} from "react-router-dom";
import {FaGoogle} from "react-icons/fa";
import {Formik, Form, Field, ErrorMessage} from "formik";

import {Input, Submit} from "../styles";
import Button from "../../Button";

import FirebaseContext from "../../../FirebaseContext";

export default function Signup(){
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
      initialValues = {{name:'', email:'', password:'', confirmPassword:''}}
      validate = {values => {
          const errors = {};
          
          if(!values.name){
            errors.name = "Your name is required";
          }
          
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
          
          if(values.confirmPassword !== values.password){
            errors.confirmPassword = "Passwords should be identical";
          }
          
          return errors;
        }
      }
      onSubmit = {async (values, { setSubmitting }) => {
          try{
            setSubmitting(true);
            
            let result = await firebaseContext.signUpNewUser(values.email, values.password);
            
            result.user.updateProfile({
              displayName:values.name
            });
            
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
          <Field type="text" name="name" placeholder="User full name"/>
        </Input>
        <div><ErrorMessage name="name" component="div"/></div>
        <Input>
          <Field type="email" name="email" placeholder="User email"/>
        </Input>
        <div><ErrorMessage name="email" component="div"/></div>
        <Input>
          <Field type="password" name="password" autoComplete="new-password" placeholder="Password"/>
        </Input>
        <div><ErrorMessage name="password" component="div" /></div>
        <Input>
          <Field type="password" name="confirmPassword" autoComplete="new-password" placeholder="Confirm Password"/>
        </Input>
        <div><ErrorMessage name="confirmPassword" component="div" /></div>
        <Submit type="submit" disabled={isSubmitting} className="primary">
          Create Account
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
      Signup With Google
    </Button>
    </>
  );
}