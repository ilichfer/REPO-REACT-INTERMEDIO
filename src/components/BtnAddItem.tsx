import { IconButton } from '@mui/material'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface Props{
    isCheck: boolean, 
    changeIcon:()=> void
    handleClickOpen:()=> void,

}

export default function BtnAddItem({isCheck,changeIcon,handleClickOpen}:Props) {

  return (
    <>  
    <div>
      <IconButton onClick={changeIcon}>
        {isCheck ? <LibraryAddCheckIcon color='primary'/> : <LibraryAddIcon color='success'/>  }
        </IconButton>
    </div>
    <IconButton onClick={handleClickOpen}>
        { <VisibilityIcon color='info'/>  }
        </IconButton>
    </>
  )
}
