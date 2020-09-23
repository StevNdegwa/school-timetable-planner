import React from "react";
import PropTypes from "prop-types";
import {FaGoogle} from "react-icons/fa";
import {Formik, Form, Field, ErrorMessage} from "formik";

import {Input, Submit} from "../styles";
import Button from "../../Button";

import FirebaseContext from "../../../FirebaseContext";

export default function Login({setSuccessful, setLoading, setError}){
  const firebaseContext = React.useContext(FirebaseContext)
  
  async function handleSignupWithGoogle(){
    try{
      setLoading(true);
      await firebaseContext.signInWithGoogle();
      setSuccessful(true);
    }catch(error){
      console.log(error);
      setError("User login failed");
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
            setLoading(true);
            setSubmitting(true);
            await firebaseContext.signInUser(values.email, values.password);
            setSuccessful(true);
          }catch(error){
            console.log(error);
            setSubmitting(false);
            switch(error.code){
              case "auth/wrong-password":
                setError("Incorrect password");
                break;
              default:
                setError("User login failed");
            }
            
          }
        }
      }
    >
    {({isSubmitting}) => {
        return (
          <Form>
            <UserInput type="email" name="email" placeholder="User email"/>
            <UserInput type="password" name="password" placeholder="Password" autoComplete="new-password"/>
            <Submit type="submit" disabled={isSubmitting} className="primary">
              Login
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
      Login With Google
    </Button>
    </>
  );
}

Login.propTypes = {
  setSuccessful:PropTypes.func.isRequired,
  setError:PropTypes.func.isRequired
}