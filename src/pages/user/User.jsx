import './user.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <div className="userTitle">Edit User</div>
                <Link to="/newUser" >
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Ann Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearchingIcon className='userShowIcon' />
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <div className="userUpdateTitle">Edit</div>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" className="userUpdateInput" placeholder='annabeck99' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" className="userUpdateInput" placeholder='Anna Becker' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" className="userUpdateInput" placeholder='annabeck99@gmail.com' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" className="userUpdateInput" placeholder='+1 123 456 67' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" className="userUpdateInput" placeholder='New York | USA' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><PublishIcon className='userUpdateIcon' /></label>
                                <input type="file" id='file' style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}