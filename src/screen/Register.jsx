'use client';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../redux/auth/action';
import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const toast = useToast();
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(asyncRegisterUser({ name, email, password, phone }));
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 5000,
      isClosable: true,
      onCloseComplete: () => {
        window.location.href = '/login';
      },
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Register Your Account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <div className="flex flex-col gap-4">
            <FormControl id="name">
              <FormLabel>Full Name</FormLabel>
              <Input type="name" onChange={e => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>

            <FormControl id="phone">
              <FormLabel>Phone</FormLabel>
              <Input
                type="text"
                prefix="+62"
                onChange={e => setPhone(e.target.value)}
              />
            </FormControl>

            <Text fontSize="sm" color={'gray.600'}>
              Already have an account?{' '}
              <Link to="/login">
                <Text color={'blue.400'}>Login</Text>
              </Link>
            </Text>

            <Button
              onClick={handleRegister}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Sign Up
            </Button>
          </div>
        </Box>
      </Stack>
    </Flex>
  );
}
