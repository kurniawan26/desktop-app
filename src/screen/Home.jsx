import {
  Card,
  CardHeader,
  Divider,
  Heading,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ChartBar from '../component/ChartBar';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetAllReport } from '../redux/report/action';

export default function Home() {
  const report = useSelector(state => state.report);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetAllReport());
  }, [dispatch]);

  return (
    <div className="flex flex-col p-4 gap-9">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <Heading size="md">Product Sold</Heading>
          <Select placeholder="Select Period" maxW={160}>
            <option value="option1">This Week</option>
            <option value="option2">Last Month</option>
          </Select>
        </CardHeader>
        <Divider color={'#F2F7FB'} height={2} />
        <div className="w-full h-[300px]">
          <ChartBar data={report} />
        </div>
      </Card>

      <Card maxW={381}>
        <CardHeader className="flex items-center justify-between">
          <Heading size="sm">Top Selling Product</Heading>
          <Select placeholder="Select Period" maxW={160}>
            <option value="option1">This Week</option>
            <option value="option2">Last Month</option>
          </Select>
        </CardHeader>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th isNumeric>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Item A</Td>
                <Td isNumeric>$25.4</Td>
              </Tr>
              <Tr>
                <Td>Item A</Td>
                <Td isNumeric>$25.4</Td>
              </Tr>
              <Tr>
                <Td>Item A</Td>
                <Td isNumeric>$25.4</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
}
