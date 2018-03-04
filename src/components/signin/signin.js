import React, { Component } from 'react';
import styles from './signin.css';
import FormField from '../widgets/FormFields/formFields';

class SignIn extends Component{
    state={
        registerError: '',
        loading: false,
        formdata:{
            email:{
                element: 'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder: 'Enter email address..'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            password:{
                element: 'input',
                value:'',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder: 'Enter password..'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }

    updateForm = (element)=>{
        
    }

    render(){
        return(
            <div className={styles.logContainer}>
                <form>
                    <FormField 
                    id={'email'}
                    formdata={this.state.formdata.email}
                    change={(element)=>
                        this.updateForm(element)
                    }
                    />
                </form>

            </div>
        )
    }
}
export default SignIn;
