import { useFormik } from 'formik';
import * as Yup from 'yup'

const YoutubeForm = () => {


  const onSubmit=(values) => {
    console.table('Form Values', values)
  }

  const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Invalid email format').required('Required'),
    channel:Yup.string().required("Required")
  })
  
  const initialValues=
  {
    name: '',           //the key name must be same of the name of input tag's name property's value
    email: '',
    channel: '',
  }

  const formik = useFormik({
    initialValues,    
    onSubmit,
    validationSchema
  })
  //console.table('Form Values', formik.values)
  //console.log('Form error',formik.errors)
  //console.log('Visited field',formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"
        //onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} 
        {...formik.getFieldProps('name')}  //here name parameter value is the name of this input element,It automatically manage onBlur,onChange,value property
         />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div>: null }
        </div>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"
        // onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  
          {...formik.getFieldProps("email")}  //here email parameter value is the name of this input element,It automatically manage onBlur,onChange,value property
        />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>: null }
        </div>

        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" id="channel" 
        // onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} 
        {...formik.getFieldProps("channel")}  //here channel parameter value is the name of this input element,It automatically manage onBlur,onChange,value property
        />
        { formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div>: null }
        </div>

        {/* onBlur event help to track any component are already visited or not */}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm