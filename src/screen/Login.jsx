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
import { asyncSetAuthUserCreator } from '../redux/auth/action';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(asyncSetAuthUserCreator({ email, password }));
    toast({
      title: 'Login success.',
      description: 'Welcome home!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    navigate('/');
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <div className="flex flex-col gap-4">
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

            <Text fontSize="sm" color={'gray.600'}>
              Didn't have an account?
              <Link to="/register">
                <Text color={'blue.400'}>Register</Text>
              </Link>
            </Text>

            <Stack spacing={10}>
              <Button
                onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </div>
        </Box>
      </Stack>
    </Flex>
  );
}
