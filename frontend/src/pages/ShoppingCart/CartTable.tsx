import {
  styled,
  Button,
  ButtonGroup,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useAppSelector } from '../../app/store';
import { ProductEntity } from '../../gql/graphql';
import { useMutation } from '@apollo/client';
import { UPDATE_PRODUCT } from '../../graphql/queries';
import ItemImage from './ItemImage';
import useAuth from '../../hooks/useAuth';
import { useSessionStorage } from '../../hooks/useSessionStorage';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CartTable = ({ products, target }: { products: ProductEntity[]; target: string }) => {
  const { cartCounter, wishlistCounter, sessionCartCounter, sessionWishlistCounter } =
    useAppSelector((store) => store.drawer);
  const [updateProductCounter] = useMutation(UPDATE_PRODUCT);
  const { activeUser } = useAuth();
  const { getLatestStoredValue, setProductCounter } = useSessionStorage('cartProducts');
  const { getLatestStoredValue: getLatestStoredWishlistValue } =
    useSessionStorage('wishlistProducts');

  let tableProducts;
  if (activeUser) tableProducts = products;
  if (!activeUser && target == 'cart') tableProducts = getLatestStoredValue('cartProducts').data;
  if (!activeUser && target == 'wishlist')
    tableProducts = getLatestStoredWishlistValue('wishlistProducts').data;

  const handleProductCounter = (product: ProductEntity, counterFlag: boolean) => {
    const updateCounter = async (cartCounter: number) => {
      try {
        await updateProductCounter({
          variables: {
            id: product.id,
            cartCounter,
          },
          context: {
            headers: {
              Authorization: `Bearer ${activeUser.jwt}`,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    };

    if (counterFlag) {
      if (activeUser) updateCounter(product.attributes!.cartCounter! + 1);
      if (!activeUser) {
        product.attributes!.cartCounter! = product.attributes!.cartCounter! + 1;
        setProductCounter(product, target == 'cart' ? 'cartProducts' : 'wishlistProducts');
      }
    } else {
      if (product.attributes!.cartCounter! > 1) {
        if (activeUser) updateCounter(product.attributes!.cartCounter! - 1);
        if (!activeUser) {
          product.attributes!.cartCounter! = product.attributes!.cartCounter! - 1;
          setProductCounter(product, target == 'cart' ? 'cartProducts' : 'wishlistProducts');
        }
      }
    }
  };

  return (
    <div className='table'>
      <Typography
        variant='h4'
        sx={{
          color: 'white',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>Your {target == 'cart' ? 'shopping cart' : 'wishlist'}</span>
        {activeUser && <span>{target == 'cart' ? cartCounter : wishlistCounter} items</span>}
        {!activeUser && (
          <span>{target == 'cart' ? sessionCartCounter : sessionWishlistCounter} items</span>
        )}
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>PRODUCT</StyledTableCell>
              <StyledTableCell align='center'>DESCRIPTION</StyledTableCell>
              <StyledTableCell align='center'>SIZE</StyledTableCell>
              <StyledTableCell align='center'>COLOR</StyledTableCell>
              <StyledTableCell align='center'>QUANTITY</StyledTableCell>
              <StyledTableCell align='center'>PRICE</StyledTableCell>
              <StyledTableCell align='center'>TOTAL</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableProducts.map((product: ProductEntity) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell align='center'>
                  <ItemImage product={product} target={target} />
                </StyledTableCell>
                <StyledTableCell align='center'>{product.attributes?.name}</StyledTableCell>
                <StyledTableCell align='center'>{product.attributes?.size}</StyledTableCell>
                <StyledTableCell align='center'>{product.attributes?.color}</StyledTableCell>
                <StyledTableCell align='center'>
                  <ButtonGroup>
                    <Button
                      aria-label='reduce'
                      onClick={() => handleProductCounter(product, false)}
                    >
                      <RemoveIcon fontSize='small' />
                    </Button>
                    <Button sx={{ fontSize: '1.8rem !important' }}>
                      {product.attributes?.cartCounter}
                    </Button>
                    <Button
                      aria-label='increase'
                      onClick={() => handleProductCounter(product, true)}
                    >
                      <AddIcon fontSize='small' />
                    </Button>
                  </ButtonGroup>
                </StyledTableCell>
                <StyledTableCell align='center'>{product.attributes?.price}</StyledTableCell>
                <StyledTableCell align='center'>
                  {(product.attributes!.cartCounter! * product.attributes!.price).toFixed(2)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CartTable;
