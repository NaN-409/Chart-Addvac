import './user.css'
import {CalendarToday, LocationCity, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons'
import {Link} from 'react-router-dom'


export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className="userShowImg" src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Nurbek Johns</span>
                        <span className="userShowUserTitle">Web Developer</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="useShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">Abduhamidov409</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">23 10 1998 </span>
                        </div>
                        <span className="useShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+998 93 401 04 03</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">nurbek@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationCity className="userShowIcon"/>
                            <span className="userShowInfoTitle">Namangan City</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Now Tashkent City</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>User name</label>
                                <input type="text" placeholder="NURBEK" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Birthday</label>
                                <input type="text" placeholder="23 10 1998" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+998 93 401 04 03" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="Email" className="userUpdateInput" />
                            </div>
                            
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateUploadImg" src="https://images.pexels.com/photos/6207217/pexels-photo-6207217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            
            

        </div>
    )
}
