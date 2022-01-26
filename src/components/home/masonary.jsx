import * as React from 'react';
import Box from '../../../node_modules/@mui/material/Box';
import { styled } from '../../../node_modules/@mui/material/styles';
import Paper from '../../../node_modules/@mui/material/Paper';
import Masonry from '../../../node_modules/@mui/lab/Masonry';


//import images
import hostel from "../../assets/hostel.jpg"
import cover from "../../assets/cover.jpg"
import audi from "../../assets/audi.jpg"
import home from "../../assets/home.jpg"

const heights = [270, 180, 220, 270, 400, 430, 230, 280, 350, 290, 200, 250, 300, 250];
const imgs = [hostel, hostel, audi, home, cover, cover, audi, home,hostel, cover, audi, home,hostel, cover, audi]

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function BasicMasonry() {
  return (
    <Box className='flex justify-center' sx={{ width: 1500, minHeight: 393 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index}>
            <img src={imgs[index]} sx={{ height }} alt="achievements" />
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
