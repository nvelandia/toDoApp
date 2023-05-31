import EncryptedStorage from 'react-native-encrypted-storage';

export const setAsyncStorage = async (key, value) => {
  return await EncryptedStorage.setItem(key, value);
};

export const getAsyncStorage = async key => {
  return await EncryptedStorage.getItem(key);
};

export const removeAsyncStorage = async key => {
  return await EncryptedStorage.removeItem(key);
};

export const clearAsyncStorage = async key => {
  return await EncryptedStorage.clear();
};
