// ** Dropdowns Imports
import UserDropdown from "./UserDropdown";
import NotificationDropdown from './NotificationDropdown'
import toast from 'react-hot-toast'
import {io} from 'socket.io-client'
import { useEffect, useState } from "react";

let socket
const NavbarUser = () => {

  const [notificationCount,setNotiCount] = useState(0)
  const [_notificationsArray,setNoti] = useState([{
    avatarContent: "AB",
    color: "light-danger",
    subtitle: "email is not being tracked",
    title: (
      <p className="media-heading">
        <span className="fw-bolder">Email not tracked</span>
      </p>
    ),
  }])

  const handleGet = () => {
    socket.emit('new')
  }
  // socket.on('notification',(data)=>{
  //   console.log('notification')
  //   setNoti([{
  //     avatarContent: data.name,
  //     color: data.color,
  //     subtitle: data.sub,
  //     title: (
  //       <p className="media-heading">
  //         <span className="fw-bolder">{data.title}</span>
  //       </p>
  //     ),
  //   },..._notificationsArray])
  //   setNotiCount(notificationCount  + 1)
  //   toast.success(data.sub, {
  //     position: 'bottom-right'
  //   })    
  // })
  // socket.disconnect()
  useEffect(() =>{
    socket =io("http://localhost:5500")
    // socket.on("connect",()=>{
    //   console.log("socket connected")
    // })
    // const handleGet = () => {
    //   socket.emit('new')
    // }
    socket.on('notification',(data)=>{
      // console.log('noti')
      setNoti([{
        avatarContent: data.name,
        color: data.color,
        subtitle: data.sub,
        title: (
          <p className="media-heading">
            <span className="fw-bolder">{data.title}</span>
          </p>
        ),
      },..._notificationsArray])
      setNotiCount(notificationCount  + 1)
      toast.success(data.sub, {
        position: 'bottom-right'
      })    
    })
  },[notificationCount])
  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
      <button className="btn btn-primary" onClick={()=>handleGet()}>Get notification</button>
      <NotificationDropdown noti={_notificationsArray} count={notificationCount}/>
      <UserDropdown />
    </ul>
  );
};
export default NavbarUser;
