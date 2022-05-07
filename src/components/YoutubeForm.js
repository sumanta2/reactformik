import { useFormik } from 'formik';
const YoutubeForm = () => {


  const onSubmit=(values) => {
    console.table('Form Values', values)
  }

  const validate =(values) => {

    let errors = {}
    if (!values.name) {
      errors.name = "Required"
    }
    if (!values.email) {
      errors.email = "Required"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    {
      errors.email = 'Invalid email format'
    }
    if (!values.channel) {
      errors.channel = "Required"
    }

    return errors

  }
  
  const initialValues=
  {
    name: '',           //the key name must be same of the name of input tag's name property's value
    email: '',
    channel: '',
  }

  const formik = useFormik({
    initialValues,    
    onSubmit,
    validate
  })
  //console.table('Form Values', formik.values)
  //console.log('Form error',formik.errors)
  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} id="name" />
        {formik.errors.name ? <div className="error">{formik.errors.name}</div>: null }
        </div>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} id="email" />
        {formik.errors.email ? <div className="error">{formik.errors.email}</div>: null }
        </div>

        <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" onChange={formik.handleChange} value={formik.values.channel} id="channel" />
        {formik.errors.channel ? <div className="error">{formik.errors.channel}</div>: null }
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm