import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, data) => {
  try {
    //await AsyncStorage.setItem(key, JSON.stringify(value));
    await AsyncStorage.setItem(key, data);
    console.log('Veriler kaydedildi.');
  } catch (error) {
    console.log(error);
  }
};

export const getData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      //return JSON.parse(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
