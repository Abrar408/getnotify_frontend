// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Input, Label, Button } from 'reactstrap'

// import CustomCheckboxBasic from 'src/@core/components/custom-checkbox/basic';

const data= [
    {
      meta: '20%',
      isSelected: true,
      value: 'discount',
      title: 'Discount',
      content: 'Wow! Get 20% off on your next purchase!'
    },
    {
      meta: 'Free',
      value: 'updates',
      title: 'Updates',
      content: 'Get Updates regarding related products.'
    }
  ]

// ** Icons Imports
import { Check, X, Link } from 'react-feather'
import { useRef, useState } from 'react'
import axios from 'axios'
// import Select from 'react-select/dist/declarations/src/Select'

const PreferencesTabContent = ({data}) => {
    // console.log(data)
    const mode = useRef()
    const events = useRef([{read:true,link:false,attachment:true}])
    const send = useRef()
    const notification = useRef()
    // const [readCount,setReadCount] = useState(data.emailReadCount)
    // const [linkCount,setLinkCount] = useState(data.linkClickedCount)
    const readCount = useRef()
    const linkCount = useRef()

    // console.log(mode,events,send)
    const handleSubmit = async () => {
        await axios.post('https://stormy-worm-scrubs.cyclic.app/update',{mode:mode.current,events:events.current,send:send.current,notification:notification.current,readCount:readCount.current,linkCount:linkCount.current})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <Row>
            <button onClick={()=>handleSubmit()}>check refrences</button>
            <Col md='12' >
                <Card >
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Tracking Mode</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                        <p>{`Basic mode (default)`}</p>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Advanced mode`}</p>
                                    <span>{`advanced mode lets you keep track of ...`}</span>
                                </div>
                                <div className='form-switch'>
                                    <Input type='switch' defaultChecked={`${data.mode}`} onChange={(e)=>mode.current=e.target.checked} id={`advanced`} />
                                    <Label className='form-check-label' for={`advanced`}>
                                    <span className='switch-icon-left'>
                                        <Check size={14} />
                                    </span>
                                    <span className='switch-icon-right'>
                                        <X size={14} />
                                    </span>
                                    </Label>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Tracking Events</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                        {/* <p>{`Basic mode (default)`}</p> */}
                        <div>
                        <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Read duration`}</p>
                                    {/* <span>{item.subtitle}</span> */}
                                </div>
                                <div className='form-check'>
                                    <Input type='checkbox' defaultChecked={data.events[0].read} onChange={(e)=>events.current[0].read=e.target.checked} id='read_duration' />
                                    {/* <Label className='form-check-label' for={`read_duration`}>
                                    <span className='switch-icon-left'>
                                        <Check size={14} />
                                    </span>
                                    <span className='switch-icon-right'>
                                        <X size={14} />
                                    </span>
                                    </Label> */}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    {/* <span>|</span> */}
                                    <p className='fw-bolder mb-0'>{`Link clicked`}</p>
                                    {/* <span>{item.subtitle}</span> */}
                                </div>
                                <div className='form-check'>
                                    <Input type='checkbox' defaultChecked={data.events[0].link} onChange={(e)=>events.current[0].link=e.target.checked} id='link_clicked' />
                                    
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Attachment downloaded`}</p>
                                    {/* <span>{item.subtitle}</span> */}
                                </div>
                                <div className='form-check'>
                                    <Input type='checkbox' defaultChecked={data.events[0].attachment} onChange={(e)=>events.current[0].attachment=e.target.checked} id='attachment_downloaded' />
                                </div>
                            </div>
                        </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Send Emails</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                        <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Individually`}</p>
                                    <span>{`Every recipient will see only his own email address. This option is ideal for Marketing Emails`}</span>
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio' name='to' id={`individually`} defaultChecked={data.send.includes('individually')} onChange={(e)=>send.current=e.target.id}/>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Keep "To" and "CC" intact`}</p>
                                    <span>{`Every recipient will be able to see other recipient's email addresses to whom you sent email as "To" or "CC". This option is ideal for personal and business emails. `}</span>
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='to' id={`intact`} defaultChecked={data.send.includes('intact')} onChange={(e)=>send.current=e.target.id}/>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Send Notifications To</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                    <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Originating email address`}</p>
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='notification' id={`originating`} defaultChecked={data.notification.includes('originating')} onChange={(e)=>notification.current=e.target.id}/>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Primary email Address`}</p>
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='notification' id={`primary`} defaultChecked={data.notification.includes('primary')} onChange={(e)=>notification.current=e.target.id}/>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`SMS to mobile number`}</p>
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='notification' id={`sms`} defaultChecked={data.notification.includes('sms')} onChange={(e)=>notification.current=e.target.id}/>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader className='border-bottom'>
                        <CardTitle tag='h4'>Notification count</CardTitle>
                    </CardHeader>
                    <CardBody className='pt-2'>
                        <div className='d-flex mt-1'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Required Email Read Notifications`}</p>
                                </div>
                                <div>
                                    {/* <Input type='number' value={readCount} onChange={(e)=>setReadCount(e.target.value<0?0:e.target.value)} id={`email_opened_count`} /> */}
                                    <Input type='number' defaultValue={data.emailReadCount} onChange={(e)=>readCount.current=e.target.value} id={`email_opened_count`} />
                                    
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Required Link Clicked Notifications`}</p>
                                </div>
                                <div>
                                    {/* <Input type='number' value={linkCount} onChange={(e)=>setLinkCount(e.target.value<0?0:e.target.value)} id={`link_clicked_count`} /> */}
                                    <Input type='number' defaultValue={data.linkClickedCount} onChange={(e)=>linkCount.current=e.target.value} id={`link_clicked_count`} />
                                    
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                
            </Col>            
        </Row>
    )
}
export default PreferencesTabContent