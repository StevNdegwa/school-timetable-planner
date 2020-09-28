import React from "react";
import PropTypes from "prop-types";
import {FaGoogle} from "react-icons/fa";
import {Formik, Form, Field, ErrorMessage} from "formik";

import {Input, Submit} from "../styles";
import Button from "../../Button";

import FirebaseContext from "../../../FirebaseContext";

export default function Signup({setSuccessful, setLoading,setError}){
  const firebaseContext = React.useContext(FirebaseContext);
  
  async function handleSignupWithGoogle(){
    try{
      setLoading(true);
      await firebaseContext.signInWithGoogle();
      setSuccessful(true);
    }catch(error){
      switch(error.code){
        case "auth/popup-closed-by-user":
          setError("An error occured. Please try again");
          break;
        default:
          setError("User signup failed")
      }
      setError("User signup failed");
    }
  }
  
  const UserInput = ({type, name, placeholder, autoComplete}) =>(<>
    <Input>
      <Field type={type} name={name} placeholder={placeholder}  autoComplete={autoComplete}/>
    </Input>
    <div><ErrorMessage name={name} component="div"/></div>
  </>);
  
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
            setLoading(true);
            setSubmitting(true);
            await firebaseContext.signUpNewUser(values.email, values.password, values.name);
            setSubmitting(false);
            setSuccessful(true);
          }catch(error){
            switch(error.code){
              case "auth/email-already-in-use":
                setError("An User by that email exists");
                break;
              default:
                setError("User signup failed")
            }
            setSubmitting(false);
          }
        }
      }
    >
    {({isSubmitting}) => {
        return(
          <Form>
            <UserInput type="text" name="name" placeholder="User full name"/>
            <UserInput type="email" name="email" placeholder="User email"/>
            <UserInput type="password" name="password" placeholder="Password" autoComplete="new-password"/>
            <UserInput type="password" name="confirmPassword" placeholder="Confirm Password" autoComplete="new-password"/>
            <Submit type="submit" disabled={isSubmitting} className="primary">
              Create Account
            </Submit>
          </Form>
        ) 
      }
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

Signup.propTypes = {
  setSuccessful:PropTypes.func.isRequired,
  setLoading:PropTypes.func.isRequired,
  setError:PropTypes.func.isRequired
}