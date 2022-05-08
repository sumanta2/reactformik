import { useFormik, Formik, Form,Field,ErrorMessage } from 'formik';
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
  }

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema
  // })
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
          <ErrorMessage name='name'/>   {/* it work same as previous line but message display as a text */}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email"       //Field tag of Formik work same as getFieldProps method
            // onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  
            // {...formik.getFieldProps("email")}  //here email parameter value is the name of this input element,It automatically manage onBlur,onChange,value property
          />
          {/* {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null} */}
          <ErrorMessage name='email'/>    {/* it work same as previous line but message display as a text */}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field as='textarea' type="text" name="channel" id="channel"      //Field tag of Formik work same as getFieldProps method
            // onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} 
            // {...formik.getFieldProps("channel")}  //here channel parameter value is the name of this input element,It automatically manage onBlur,onChange,value property
          />
          {/* {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null} */}
           <ErrorMessage name='channel'/>   {/* it work same as previous line but message display as a text */}
        </div>

        {/* onBlur event help to track any component are already visited or not */}

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm