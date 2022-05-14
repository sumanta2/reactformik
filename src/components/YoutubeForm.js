import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import * as Yup from 'yup'

const YoutubeForm = () => {


  const onSubmit = (values) => {
    console.table('Form Values', values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required("Required")
  })

  const initialValues =
  {
    name: '',           //the key name must be same of the name of input tag's name property's value
    email: '',
    channel: '',
    comments: '',
    address: '',
    social:{
      facebook:'',
      twitter:'',
    },
  }


  //console.table('Form Values', formik.values)
  //console.log('Form error',formik.errors)
  //console.log('Visited field',formik.touched)
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form >
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name"   //Field tag of Formik work same as getFieldProps method
          //onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} 
          // {...formik.getFieldProps('name')}  //here name parameter value is the name of this input element,It automatically manage onBlur,onChange,value property
          />
          {/* {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null} */}
          <ErrorMessage name='name' component={TextError} />   {/* here component used to mention the component where css style of error message are mentioned */}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email"       //Field tag of Formik work same as getFieldProps method
          // onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  
          // {...formik.getFieldProps("email")}  //here email parameter value is the name of this input element,It automatically manage onBlur,onChange,value property
          />
          {/* {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null} */}

          {/* also using this way we can add css external style in error message  next line component*/}
          <ErrorMessage name='email' >   
          {
             (errorMsg)=> (<div className='error'>{errorMsg}</div>  )
          } 
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field as='textarea' placeholder="Youtube channel Name" type="text" name="channel" id="channel"      //Field tag of Formik work same as getFieldProps method
          // onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} 
          // {...formik.getFieldProps("channel")}  //here channel parameter value is the name of this input element,It automatically manage onBlur,onChange,value property
          />
          {/* {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null} */}
          <ErrorMessage name='channel' component={TextError} />   {/* it work same as previous line but message display as a text */}
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as='textarea' placeholder="Your Comments" type="text" name="comments" id="comments"
          />
          <ErrorMessage name='comments' component={TextError}/>
        </div>

        <div className="form-control">
          <label htmlFor="address">Comments</label>
          <Field placeholder="Your Address" type="text" name="address" id="address">
            {
              (props) => {
                const { field, form, meta } = props
                console.log('Render props:', props)
                return (
                  <div >
                    <input type='text' id='address' {...field} />
                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                  </div>
                )
                {/* Custom formik component *
                *  filed manage handleBlur handleChange and value property *
                * meta manage error message  */ }
              }
            }
          </Field>

          <ErrorMessage name='address' component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Comments</label>
           <Field  placeholder="Facebook" type="text" name="social.facebook" id="facebook" /> {/* in the name property social.facebook means here we store the facebook value in a nested object*/}
          <ErrorMessage name='comments' component={TextError}/>
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Comments</label>
          <Field placeholder="Twitter" type="text" name="social.twitter" id="twitter"/>  {/* in the name property social.twitter means here we store the twitter value in a nested object*/}
          <ErrorMessage name='comments' component={TextError}/>
        </div>

        {/* onBlur event help to track any component are already visited or not */}

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm