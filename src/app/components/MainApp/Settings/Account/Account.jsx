import React from "react";
import PropTypes from "prop-types";
import {MdEdit} from "react-icons/md";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {Wrapper, Basic, Input, Button, Advanced} from "./styles";

import FirebaseContext from "../../../../FirebaseContext";

export default function Account({user}){
  const [edit] = React.useState({name:true, email:true, password:true});
  const firebaseContext = React.useContext(FirebaseContext);
  
  return (<Wrapper>
    <Basic>
      <Formik
      initialValues = {{name:user.displayName, email:user.email, password:'random'}}
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
            let u = firebaseContext.getAuth().currentUser;
        
            await Promise.all([
              u.updateProfile({
                displayName:values.name
              }),
              u.updateEmail(values.email),
              user.updatePassword(values.password)
            ])
          }catch(error){
            console.log(error);
          }
        }
      }
    >
    {({isSubmitting}) => (
      <Form>
        <Input>
          <div>Name:</div>
          <Field type="text" name="name" placeholder="New name" disabled={edit.name}/>
          <div><MdEdit/></div>
        </Input>
        <div><ErrorMessage name="name" component="div"/></div>
        <Input>
          <div>Email:</div>
          <Field type="email" name="email" placeholder="New email" disabled={edit.email}/>
          <div><MdEdit/></div>
        </Input>
        <div><ErrorMessage name="email" component="div"/></div>
        <Input>
          <div>Password:</div>
          <Field type="password" name="password" autoComplete="new-password" placeholder="New password" disabled={edit.password}/>
          <div><MdEdit/></div>
        </Input>
        <div><ErrorMessage name="password" component="div" /></div>
        <Input>
          <div></div>
          <Field type="password" name="confirmPassword" autoComplete="new-password" placeholder="Confirm password" disabled={edit.password}/>
          <div></div>
        </Input>
        <div><ErrorMessage name="confirmPassword" component="div" /></div>
        <Button type="submit" disabled={isSubmitting || !Object.values(edit).includes(false)} className="primary">
          Save Changes
        </Button>
      </Form>
      )
    }
    </Formik>
    </Basic>
    <Advanced>
      <Button>Delete User Account</Button>
    </Advanced>
  </Wrapper>)
}

Account.propTypes = {
  user:PropTypes.object.isRequired
}