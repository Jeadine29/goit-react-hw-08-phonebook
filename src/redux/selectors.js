import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items; 
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter], 
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);