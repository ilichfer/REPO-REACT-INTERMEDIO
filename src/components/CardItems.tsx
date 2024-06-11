import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ChipButton from './ChipButton';
import { Rating } from '@mui/material';
import BtnAddItem from './BtnAddItem';
import { useState } from 'react';
import AlertDialog from './AlertDialog';
import { ItemStructure } from '../Interfaces/ItemStructure';

interface Props{  
  item:ItemStructure,
}

export default function CardItems({item}:Props) {

  const [isCheck, setCheck] = useState(false);
    
  const handleAddItem = () => {
    console.log('Item added to cart');
    if (isCheck==false) {
        setCheck(true);
    }else{
        setCheck(false);
    }
  };


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>  
    <Card sx={{ maxWidth: 345,
     }}>
      <CardMedia
        sx={{ height: 500 }}
        component={'img'}
        image={item.image}
        title={item.title}
        style={{width:'200',
          height:'200',
          objectFit:'contain',
        }}
        alt='bag'
      />
      <CardContent>
      <ChipButton></ChipButton>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.description}
        </Typography>
        <Rating defaultValue={item.rating.rate}>
        </Rating>
      </CardContent>
      <CardActions>
        <BtnAddItem 
        isCheck={isCheck} 
        changeIcon={handleAddItem} 
        handleClickOpen={handleClickOpen}
        />
      </CardActions>
    </Card>
    <AlertDialog
    handleClose={handleClose}
    open={open}
    item={item}
    />
    </>
  );
}
