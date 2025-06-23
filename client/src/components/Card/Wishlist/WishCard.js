import { useContext } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, Button } from '@mui/material';
import './WishCard.css';
import { WishItemsContext } from '../../../Context/WishItemsContext';

const WishCard = (props) => {
  const wishItems = useContext(WishItemsContext);

  const handleRemoveItem = () => {
    wishItems.removeItem(props.item);
  };

  const handleAddToCart = () => {
    wishItems.addToCart(props.item);
  };

  const imageUrl =
    props.item.image && props.item.image.length > 0
      ? `https://your-backend-url.com/uploads/${props.item.image[0].filename}`
      : null;

  return (
    <div className="wishcard">
      <div className="wish__remove__item__icon">
        <IconButton onClick={handleRemoveItem}>
          <HighlightOffIcon />
        </IconButton>
      </div>

      <div className="wish__item__image">
        {imageUrl ? (
          <img src={imageUrl} alt={props.item.name} className="wish__image" />
        ) : (
          <div className="wish__no__image">No Image Available</div>
        )}
      </div>

      <div className="wish__item__name">{props.item.name}</div>
      <div className="wish__item__price">${props.item.price}</div>

      <div className="add__to__cart">
        <Button
          variant="outlined"
          onClick={handleAddToCart}
          sx={[
            {
              '&:hover': {
                backgroundColor: '#FFE26E',
                borderColor: '#FFE26E',
                color: 'black',
              },
              borderColor: 'black',
              backgroundColor: 'black',
              color: '#FFE26E',
              textTransform: 'none',
              padding: '6px 16px',
              fontWeight: '600',
              fontSize: '14px',
              borderRadius: '20px',
            },
          ]}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default WishCard;
