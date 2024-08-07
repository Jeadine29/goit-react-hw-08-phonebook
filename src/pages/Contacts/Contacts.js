// src/pages/Contacts.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/ContactsSlice';
import { Box, Button, Heading, List, ListItem, Stack, Text } from '@chakra-ui/react';

const Contacts = () => {
  const dispatch = useDispatch();
  const { items: contacts, status } = useSelector((state) => state.contacts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchContacts());
    }
  }, [dispatch, status]);

  return (
    <Box maxW="md" mx="auto" mt="8" p="6">
      <Heading mb="6">Contacts</Heading>
      <Stack spacing="4">
        {status === 'loading' ? (
          <Text>Loading...</Text>
        ) : (
          <List spacing="4">
            {contacts.map((contact) => (
              <ListItem key={contact.id} display="flex" justifyContent="space-between" alignItems="center">
                <Text>{contact.name}</Text>
                <Button colorScheme="red" onClick={() => dispatch(deleteContact(contact.id))}>
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        )}
      </Stack>
    </Box>
  );
};

export default Contacts;
