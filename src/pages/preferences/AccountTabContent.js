// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import Select from 'react-select'
import Cleave from 'cleave.js/react'
import { useForm, Controller } from 'react-hook-form'
import 'cleave.js/dist/addons/cleave-phone.us'
import avatar11 from '@src/assets/images/portrait/small/avatar-s-11.jpg'
// ** Reactstrap Imports
import { Row, Col, Form, Card, Input, Label, Button, CardBody, CardTitle, CardHeader, FormFeedback } from 'reactstrap'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Demo Components
import DeleteAccount from './DeleteAccount'
import axios from 'axios'

const countryOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]

const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'dutch', label: 'Dutch' }
]

const currencyOptions = [
  { value: 'usd', label: 'USD' },
  { value: 'euro', label: 'Euro' },
  { value: 'pound', label: 'Pound' },
  { value: 'bitcoin', label: 'Bitcoin' }
]

const timeZoneOptions = [
  { value: '(GMT-12:00) International Date Line West', label: '(GMT-12:00) International Date Line West' },
  { value: '(GMT-11:00) Midway Island, Samoa', label: '(GMT-11:00) Midway Island, Samoa' },
  { value: '(GMT-10:00) Hawaii', label: '(GMT-10:00) Hawaii' },
  { value: '(GMT-09:00) Alaska', label: '(GMT-09:00) Alaska' },
  { value: '(GMT-08:00) Pacific Time (US & Canada)', label: '(GMT-08:00) Pacific Time (US & Canada)' },
  { value: '(GMT-08:00) Tijuana, Baja California', label: '(GMT-08:00) Tijuana, Baja California' },
  { value: '(GMT-07:00) Arizona', label: '(GMT-07:00) Arizona' },
  { value: '(GMT-07:00) Chihuahua, La Paz, Mazatlan', label: '(GMT-07:00) Chihuahua, La Paz, Mazatlan' },
  { value: '(GMT-07:00) Mountain Time (US & Canada)', label: '(GMT-07:00) Mountain Time (US & Canada)' },
  { value: '(GMT-06:00) Central America', label: '(GMT-06:00) Central America' },
  { value: '(GMT-06:00) Central Time (US & Canada)', label: '(GMT-06:00) Central Time (US & Canada)' },
  {
    value: '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
    label: '(GMT-06:00) Guadalajara, Mexico City, Monterrey'
  },
  { value: '(GMT-06:00) Saskatchewan', label: '(GMT-06:00) Saskatchewan' },
  { value: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco', label: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco' },
  { value: '(GMT-05:00) Eastern Time (US & Canada)', label: '(GMT-05:00) Eastern Time (US & Canada)' },
  { value: '(GMT-05:00) Indiana (East)', label: '(GMT-05:00) Indiana (East)' },
  { value: '(GMT-04:00) Atlantic Time (Canada)', label: '(GMT-04:00) Atlantic Time (Canada)' },
  { value: '(GMT-04:00) Caracas, La Paz', label: '(GMT-04:00) Caracas, La Paz' },
  { value: '(GMT-04:00) Manaus', label: '(GMT-04:00) Manaus' },
  { value: '(GMT-04:00) Santiago', label: '(GMT-04:00) Santiago' },
  { value: '(GMT-03:30) Newfoundland', label: '(GMT-03:30) Newfoundland' }
]

const AccountTabs = ({ data }) => {
  // ** Hooks
  const defaultValues = {
    lastName: data.lastname,
    firstName: data.firstname
  }
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** States
  // const [avatar, setAvatar] = useState(data.avatar ? data.avatar : '')
  const avatar = avatar11
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
      // setUser({...user, avatar: reader.result})
      console.log(files,reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      return null
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  const handleImgReset = () => {
    setAvatar('@src/assets/images/avatars/avatar-blank.png')
  }
  const [user,setUser] = useState(
    {
      avatar: data.avatar,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      company: data.company,
      phone: data.phone,
      address: data.address,
      state: data.state,
      zipCode: data.zipCode,
      country: data.country,
      language: data.language,
      timezone: data.timezone,
      currency: data.currency,
      }
)
// console.log(user)
const handleCountryChange = (e) => {
  setUser({...user, country: e})
}
const handleLanguageChange = (e) => {
  setUser({...user, language: e})
}
const handleTimezoneChange = (e) => {
  setUser({...user, timezone: e})
}
const handleCurrencyChange = (e) => {
  setUser({...user, currency: e})
}
const updateInfo = async (e) => {
  e.preventDefault()
  await axios.post('https://stormy-worm-scrubs.cyclic.app/update/info',user)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Profile Details</CardTitle>
        </CardHeader>
        <CardBody className='py-2 my-25'>
          <div className='d-flex'>
            <div className='me-25'>
              <img className='rounded me-50' src={avatar} alt='Generic placeholder image' height='100' width='100' />
            </div>
            <div className='d-flex align-items-end mt-75 ms-1'>
              <div>
                <Button disabled tag={Label} className='mb-75 me-75' size='sm' color='primary'>
                  Upload
                  <Input type='file' onChange={onChange} hidden accept='image/*' />
                </Button>
                {/* <Button className='mb-75' color='secondary' size='sm' outline onClick={handleImgReset}>
                  Reset
                </Button> */}
                <p className='mb-0'>Allowed JPG, GIF or PNG. Max size of 800kB</p>
              </div>
            </div>
          </div>
          <Form className='mt-2 pt-50' onSubmit={(e)=>updateInfo(e)}>
            <Row>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='firstName'>
                  First Name
                </Label>
                <Input id='firstname' type='text' name='firstname' placeholder='John' defaultValue={data.firstname} onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}/>
                {/* <Controller
                  name='firstName'
                  control={control}
                  render={({ field }) => (
                    <Input id='firstname' placeholder='John' invalid={errors.firstName && true} {...field} onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})} />
                  )}
                /> */}
                {errors && errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='lastName'>
                  Last Name
                </Label>
                <Input id='lastname' type='text' name='lastname' placeholder='Doe' defaultValue={data.lastname} onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}/>
                {/* <Controller
                  name='lastName'
                  control={control}
                  render={({ field }) => (
                    <Input id='lastname' placeholder='Doe' invalid={errors.lastName && true} {...field} onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}/>
                  )}
                /> */}
                {errors.lastName && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='emailInput'>
                  E-mail
                </Label>
                <Input id='email' type='email' name='email' placeholder='Email' defaultValue={data.email} onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}/>
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='company'>
                  Company
                </Label>
                <Input defaultValue={data.company} id='company' name='company' placeholder='Company Name' onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}/>
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='phone'>
                  Phone Number
                </Label>
                <Input defaultValue={data.phone} id='phone' name='phone' placeholder='111 111 111' onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}/>
                {/* <Cleave
                  id='contact'
                  name='phNumber'
                  className='form-control'
                  placeholder='1 234 567 8900'
                  options={{ phone: true, phoneRegionCode: 'US' }}
                  defaultValue={data.contact}
                  onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}
                /> */}
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='address'>
                  Address
                </Label>
                <Input id='address' name='address' placeholder='12, Business Park' defaultValue={data.address} onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}/>
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='accountState'>
                  State
                </Label>
                <Input id='state' name='state' placeholder='California' defaultValue={data.state} onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}/>
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='zipCode'>
                  Zip Code
                </Label>
                <Input id='zipCode' name='zipCode' placeholder='123456' maxLength='6' defaultValue={data.zipCode} onChange={(e)=>setUser({...user,[e.target.id]:e.target.value})}/>
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='country'>
                  Country
                </Label>
                <Select
                  id='country'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={countryOptions}
                  theme={selectThemeColors}
                  defaultValue={countryOptions.filter(country => country.value === data.country)}
                  onChange={(e)=>handleCountryChange(e.value)}
                />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='language'>
                  Language
                </Label>
                <Select
                  id='language'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={languageOptions}
                  theme={selectThemeColors}
                  defaultValue={languageOptions.filter(language => language.value === data.language)}
                  onChange={(e)=>handleLanguageChange(e.value)}
                />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='timeZone'>
                  Timezone
                </Label>
                <Select
                  id='timezone'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={timeZoneOptions}
                  theme={selectThemeColors}
                  defaultValue={timeZoneOptions.filter(timezone => timezone.value === data.timezone)}
                  onChange={(e)=>handleTimezoneChange(e.value)}
                />
              </Col>
              <Col sm='6' className='mb-1'>
                <Label className='form-label' for='currency'>
                  Currency
                </Label>
                <Select
                  id='currency'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={currencyOptions}
                  theme={selectThemeColors}
                  defaultValue={currencyOptions.filter(currency => currency.value === data.currency)}
                  onChange={(e)=>handleCurrencyChange(e.value)}
                />
              </Col>
              <Col className='mt-2' sm='12'>
                <Button type='submit' className='me-1' color='primary'>
                  Save changes
                </Button>
                {/* <Button color='secondary' outline>
                  Discard
                </Button> */}
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <DeleteAccount />
    </Fragment>
  )
}

export default AccountTabs
