import { Row, Col, Card, CardHeader, CardBody, CardTitle, Input, Label, Button } from 'reactstrap'
import { Check, X, Link } from 'react-feather'
import { useState } from 'react' 
import axios from 'axios'

const PreferencesTabContent = ({data}) => {
    
    const [updated,setUpdated] = useState(false)
    const [pref,setPref] = useState({
        mode: data.mode,
        read: data.read,
        link: data.link,
        attachment: data.attachment,
        send: data.send,
        notification: data.notification,
        readCount: data.readCount,
        linkCount: data.linkCount
    })
    const handleBooleanChange = (e) => {
        setUpdated(true)  
        setPref({...pref,[e.target.id]:e.target.checked})
    }
    const handleStringChange = (e) => {
        setUpdated(true) 
        setPref({...pref,[e.target.name] : e.target.id})
    }
    const handleNumberChange = (e) => {
        setUpdated(true) 
        setPref({...pref,[e.target.id] : e.target.value})
    }
    // console.log(pref)
    const handleSubmit = async () => {
        // 'https://stormy-worm-scrubs.cyclic.app'
        await axios.post('http://localhost:3002/update/preferences',pref)
        .then(res => setUpdated(false))
        .catch(err => console.log(err))
    }
    return (
        <>        
        <Row>
            <div style={{display:'flex',justifyContent:'flex-end',padding:'14px'}}>
            <button disabled={!updated} className='btn btn-primary' onClick={()=>handleSubmit()}>Update</button>
            </div>
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
                                    <p className='fw-bolder mb-0'>{`Advance mode`}</p>
                                    <span>{`advance mode lets you keep track of ...`}</span>
                                </div>
                                <div className='form-switch'>
                                    <Input type='switch' defaultChecked={data.mode} onChange={(e)=>handleBooleanChange(e)} id={`mode`} />
                                    <Label className='form-check-label' for={`mode`}>
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
                                    <Input type='checkbox' defaultChecked={data.read} onChange={(e)=>handleBooleanChange(e)} id='read' />
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
                                    <Input type='checkbox' defaultChecked={data.link} onChange={(e)=>handleBooleanChange(e)} id='link' />
                                    
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
                                    <Input type='checkbox' defaultChecked={data.attachment} onChange={(e)=>handleBooleanChange(e)} id='attachment' />
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
                                    <Input type='radio' name='send' id={`individually`} defaultChecked={data.send.includes('individually')} onChange={(e)=>handleStringChange(e)}/>
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
                                    <Input type='radio'name='send' id={`intact`} defaultChecked={data.send.includes('intact')} onChange={(e)=>handleStringChange(e)}/>
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
                                    <Input type='radio'name='notification' id={`originating`} defaultChecked={data.notification.includes('originating')} onChange={(e)=>handleStringChange(e)}/>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`Primary email Address`}</p>
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='notification' id={`primary`} defaultChecked={data.notification.includes('primary')} onChange={(e)=>handleStringChange(e)}/>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mt-2'>
                            <div className='d-flex align-item-center justify-content-between flex-grow-1'>
                                <div className='me-1'>
                                    <p className='fw-bolder mb-0'>{`SMS to mobile number`}</p>
                                </div>
                                <div className='form-radio'>
                                    <Input type='radio'name='notification' id={`sms`} defaultChecked={data.notification.includes('sms')} onChange={(e)=>handleStringChange(e)}/>
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
                                    <Input type='number' defaultValue={data.readCount} onChange={(e)=>handleNumberChange(e)} id={`readCount`} />
                                    
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
                                    <Input type='number' defaultValue={data.linkCount} onChange={(e)=>handleNumberChange(e)} id={`linkCount`} />
                                    
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                
            </Col>            
        </Row>
        </>
    )
}
export default PreferencesTabContent