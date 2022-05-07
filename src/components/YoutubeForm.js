import { useFormik } from 'formik';
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues:
    {
      name: '',
      email: '',
      channel: '',
    }      //the key name must be same of the name of input tag's name property's value
  })
  console.table('Form Values', formik.values)
  return (
    <div>
      <form >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} id="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" name="channel" onChange={formik.handleChange} value={formik.values.channel} id="channel" />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm