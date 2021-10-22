import React from 'react';
import '../Home/Signout.css';
import pic from '../Home/pic.jpg';
import UserServices from '../../services/UserServices';
import Popper from '@material-ui/core/Popper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"; 

const obj = new UserServices();

export default function SignOutPop() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const signOut=()=> {
    localStorage.clear();
    obj.signOut().then((response) => {
        console.log(response);
        history.push("/");
      }).catch(error => {
          console.log(error);
      });
    history.push("/");
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Avatar alt="" 
        src={pic} 
        type="button" onClick={handleClick}/>
        <Popper id={id} open={open} anchorEl={anchorEl} placement={'bottom'}>
            <div className="signout_main">
                <div className="profile">
                    <div className="profile_content">
                        <img className="profile_pic1" src={pic} alt=""/>
                    </div>
                    <div className="profile_content profile_name">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</div>
                    <div className="profile_content">{localStorage.getItem('email')}</div>
                    <div className="profile_content profile_pic2">
                        <Button variant="contained" 
                            size="small" 
                            color="primary"
                            onClick={signOut} 
                            className="signout">
                        Sign Out
                        </Button>
                    </div>
                </div>
            </div>
        </Popper>
    </div>
  );
}