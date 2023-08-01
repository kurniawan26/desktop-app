import React, { useEffect } from 'react';

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Button,
  IconButton,
  useDisclosure,
  Th,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncDeleteProduct,
  asyncGetAllProducts,
} from '../redux/products/action';
import { Link } from 'react-router-dom';
import { FaPen, FaTrash } from 'react-icons/fa';
import ModalDialogue from '../component/ModalDialogue';

export default function Products() {
  const tableHeader = ['Name', 'Price', 'Stock', 'Action'];
  const allProduct = useSelector(state => state.allProduct);

  const [selectId, setSelectId] = React.useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetAllProducts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(asyncDeleteProduct(id));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Box overflowX="auto" className="flex flex-col gap-4">
        <Link to="/products/add">
          <Button className="self-start m-4" color="#fff" bg="#0099EE">
            Add Product
          </Button>
        </Link>
        <Table variant="mytable">
          <Thead>
            {tableHeader.map((col, _i) => (
              <Th key={_i} className="font-bold">
                {col}
              </Th>
            ))}
          </Thead>
          <Tbody className="odd:!bg-white">
            {allProduct.map((product, i) => (
              <Tr key={i} className="text-xs">
                <Td className="font-medium">{product.name}</Td>
                <Td>{product.price}</Td>
                <Td>{product.stock}</Td>
                <Td className="flex gap-2">
                  <IconButton
                    variant="outline"
                    colorScheme="blue"
                    fontSize="14px"
                    icon={<FaPen />}
                  />

                  <IconButton
                    variant="outline"
                    colorScheme="red"
                    fontSize="14px"
                    onClick={() => {
                      setSelectId(product.id);
                      onOpen();
                    }}
                    icon={<FaTrash />}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <ModalDialogue
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        onClick={() => handleDelete(selectId)}
      />
    </>
  );
}
