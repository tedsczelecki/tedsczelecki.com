import React, { KeyboardEventHandler, useEffect, useState } from 'react';
import VStack from '../Global/VStack';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { PINK, PURPLE, RED, YELLOW } from '../../constants';
import { navigate } from 'gatsby';
import HStack from '../Global/HStack';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const inputCommonProps = {
  focusBorderColor: PURPLE,
  errorBorderColor: RED,
};

type SubmitData = {
  name: string;
  email: string;
  message: string;
};

const submitForm = (data: SubmitData) =>
  axios.post('https://api.rebelpixel.ca/contact', {
    ...data,
  });

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<string[]>([]);
  const [emailSendError, setEmailSendError] = useState(
    'Here is a email from the server',
  );
  const [emailSent, setEmailSent] = useState(false);

  const {
    mutate: submit,
    data,
    isLoading,
  } = useMutation(() => submitForm({ email, message, name }));

  const onFocus = (field: string) => {
    if (errors.length) {
      setErrors(errors.filter(err => err !== field));
    }
  };

  const onKeyDown = (event: KeyboardEventHandler<HTMLInputElement>) => {
    // @ts-ignore
    if (event.code === 'Enter') {
      onSubmitForm();
    }
  };

  const onSubmitForm = () => {
    const newErrors = [];
    if (!name) {
      newErrors.push('name');
    }
    if (!email) {
      newErrors.push('email');
    }
    if (!message) {
      newErrors.push('message');
    }

    if (newErrors.length) {
      setErrors(newErrors);
      return;
    }
    submit();
  };

  useEffect(() => {
    if (data?.status === 200) {
      setEmailSent(true);
    } else {
      setEmailSendError(data?.data?.input);
    }
  }, [data]);

  if (emailSent) {
    return (
      <VStack maxWidth="400px" alignItems="center">
        <Text textAlign="center">
          Thanks for the message,
          <br />I will get back to you shortly.
        </Text>
      </VStack>
    );
  }

  return (
    <VStack maxWidth="400px">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          isInvalid={errors.includes('name')}
          value={name}
          onChange={evt => setName(evt.target.value)}
          onFocus={() => onFocus('name')}
          // @ts-ignore
          onKeyDown={onKeyDown}
          {...inputCommonProps}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          isInvalid={errors.includes('email')}
          value={email}
          onChange={evt => setEmail(evt.target.value)}
          onFocus={() => onFocus('email')}
          // @ts-ignore
          onKeyDown={onKeyDown}
          {...inputCommonProps}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea
          isInvalid={errors.includes('message')}
          value={message}
          onChange={evt => setMessage(evt.target.value)}
          onFocus={() => onFocus('message')}
          // @ts-ignore
          onKeyDown={onKeyDown}
          {...inputCommonProps}
        />
      </FormControl>
      {emailSendError && (
        <Box>
          <Text color={RED.replace('.400', '')}>{emailSendError}</Text>
        </Box>
      )}
      <HStack justifyContent="flex-end">
        <Button
          colorScheme={YELLOW.replace('.400', '')}
          isLoading={isLoading}
          size="lg"
          onClick={onSubmitForm}
          variant="outline"
        >
          Submit
        </Button>
      </HStack>
    </VStack>
  );
};

export default ContactForm;
