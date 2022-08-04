import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import category1 from "../assets/Fruits-and-Vegetables.jpg";
import category2 from "../assets/beverages.jpg";
import category3 from "../assets/dairy.png";
import category4 from "../assets/ssnacks.jpg";
import { Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const categoryData = [
  {
    name: 'Ready To Eat', subCategory: [
      {
        url: `${category1}`,
        title: 'Fruits & Vegetables',
        width: '100%',
      },
      {
        url: `${category2}`,
        title: 'Beverages',
        width: '100%',
      },
      {
        url: `${category3}`,
        title: 'Dairy',
        width: '100%',
      },
      {
        url: `${category4}`,
        title: 'Snacks',
        width: '100%',
      }
    ]
  },
  {
    name: 'Personal Care', subCategory: [
      {
        url: 'https://media.vogue.in/wp-content/uploads/2021/10/Shankara1.jpg',
        title: 'Face',
        width: '100%',
      },
      {
        url: 'https://lh3.googleusercontent.com/bIkCy-pRQAY8zlCY9yj4r8ua8ndoxZUxA9y5mUWs66syAV42rNYAdcWmqKY6hd5PNH2tSbAJ7auBvWNC6T-HXdrM6Sh3oRQST1oIDUM8=w1000',
        title: 'Body',
        width: '100%',
      },
      {
        url: 'https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2020/04/1140-hair-products-on-table.jpg',
        title: 'Hair',
        width: '100%',
      }
    ]
  }

]

// const images = [
//   {
//     url: `${category1}`,
//     title: 'Fruits & Vegetables',
//     width: '100%',
//   },
//   {
//     url: `${category2}`,
//     title: 'Beverages',
//     width: '100%',
//   },
//   {
//     url: `${category3}`,
//     title: 'Dairy',
//     width: '100%',
//   },
//   {
//     url: `${category4}`,
//     title: 'Snacks',
//     width: '100%',
//   }
// ];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 80,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


export default function SubCategoryBtn(props) {
  const navigate = useNavigate();
  const params = useParams();

  return (
    // <Grid container >

    <Grid container>
      {categoryData.map((data) => {
        if (data.name == props.category) {
          return (
            <Box sx={{ display: 'flex', minWidth: 700, width: '100%', marginBottom: '20px' }}>
              {
                data.subCategory.map((image) => (
                  <ImageButton
                    focusRipple
                    key={image.title}
                    style={{ width: image.width, }}
                    onClick={()=> navigate(`${image.title}`)}
                  >
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                          position: 'relative',
                          p: 4,
                          pt: 2,
                          pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                      >
                        {image.title}
                        <ImageMarked className="MuiImageMarked-root" />
                      </Typography>
                    </Image>
                  </ImageButton>
                ))}
            </Box>

          )
        }
      })}
    </Grid>

  );
}
