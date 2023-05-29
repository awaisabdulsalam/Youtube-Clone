import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { categories } from '../Utils/constants';



const SideBar = ({ selectedCategory, setSelectedCategory }) => {

  return (
    <Stack 
    direction="row"
    sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" }
    }}
    >
        {categories.map((category, index) => {
           return (
           <button 
           key={index} 
           className='category-btn'
           style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white"
           }}
           onClick={()=> setSelectedCategory(category.name)}
           >
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
            )
        })
        }
        </Stack>
  )
}
SideBar.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default SideBar