import React from 'react';
import "../TakeNotes/TakeNotes.css"
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

  
const colors=[{
    code: '#FFFFFF',
},{
    code: '#f28b82',
},{
    code: '#fbbc04',
},{
    code: '#fff475',
},{
    code: '#ccff90',
},{
    code: '#a7ffeb',
},{
    code: '#cbf0f8',
},{
    code: '#aecbfa',
},{
    code: '#d7aefb',
},{
    code: '#fdcfe8',
},{
    code: '#e6c9a8',
},{
    code: '#e8eaed',
}]
  
const ColorPalette = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
  
    const colordemo=(val)=>{
        return ( 
            <div className="color">
                <div className="palette_main"
                    style={{
                    backgroundColor:val.code,
                    color:val.code,
                    }}
                    // onClick={()=>{
                    //     props.putColor(val);
                    //     handleClick()}}
                >
                </div>
            </div> )
    }
  
    return (
        <>
        <ColorLensOutlinedIcon  onClick={handleClick}/>
            <Popper  open={open} anchorEl={anchorEl} placement={'top-start'} transition>
                <div className="pop">{colors.map(colordemo)}</div>
            </Popper>
        </>
    );
}

export default ColorPalette
