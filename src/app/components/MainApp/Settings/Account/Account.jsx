import React from "react";
import {MdEdit} from "react-icons/md";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {Wrapper, Basic, Input, Button, Advanced} from "./styles";


export default function Account(){
  const [edit, setEdit] = React.useState({name:true, email:true, password:true});
  return (<Wrapper>
    <Basic>
      <Formik
      initialValues = {{name:'Stephen Ndegwa', email:'sndegwa.n@outlook.com', password:'AbsoluteTalk'}}
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
        
        }
      }
    >
    {({isSubmitting}) => (
      <Form>
        <Input>
          <div>Name:</div>
          <Field type="text" name="name" placeholder="New name" disabled={edit.name}/>
          <div onClick={()=>setEdit((e)=>({...e, name:!edit.name}))}><MdEdit/></div>
        </Input>
        <div><ErrorMessage name="name" component="div"/></div>
        <Input>
          <div>Email:</div>
          <Field type="email" name="email" placeholder="New email" disabled={edit.email}/>
          <div onClick={()=>setEdit((e)=>({...e, email:!edit.email}))}><MdEdit/></div>
        </Input>
        <div><ErrorMessage name="email" component="div"/></div>
        <Input>
          <div>Password:</div>
          <Field type="password" name="password" autoComplete="new-password" placeholder="New password" disabled={edit.password}/>
          <div onClick={()=>setEdit((e)=>({...e, password:!edit.password}))}><MdEdit/></div>
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