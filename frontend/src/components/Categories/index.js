import { Categories, Item } from './styles'
import { FaThLarge, FaTshirt } from 'react-icons/fa'
import { GiRunningShoe } from 'react-icons/gi'
import { BsSmartwatch } from 'react-icons/bs'

const CategoriesComponent = () => {
  return (
    <Categories class='categories'>
      <Item className='selected'>
        <FaThLarge />
        <p>Todo</p>
      </Item>
      <Item class='categories__item'>
        <GiRunningShoe />
        <p>Calzado</p>
      </Item>
      <Item class='categories__item'>
        <BsSmartwatch />
        <p>Relojes</p>
      </Item>
      <Item class='categories__item'>
        <FaTshirt />
        <p>Ropa</p>
      </Item>
    </Categories>
  )
}

export default CategoriesComponent
