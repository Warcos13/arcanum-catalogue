import firebase from 'firebase/app';
import 'firebase/storage';
import { from } from 'rxjs';

let imageFile = '';

export const getStorageRef = (category, imageName = '') => {
  return firebase
    .storage()
    .ref(`products/${category}${imageName ? '/' + imageName : ''}`);
};

export const getUrlHelper = (category, fileName) => {
  return from(getStorageRef(category).child(fileName).getDownloadURL());
};

export const setImageFile = (imageAsFile) => {
  imageFile = imageAsFile;
};

export const uploadImage = (category, onUpload, onError, onUpdate) => {
  const task = imageFile
    ? getStorageRef(category, imageFile.name).put(imageFile)
    : '';
  if (task) {
    task.on(
      'state_changed',
      (snapshot) =>
        onUpdate
          ? onUpdate((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          : null,
      (error) => (onError ? onError(error) : (error) => console.log(error)),
      () => {
        onUpload(getUrlHelper(category, imageFile.name));
        imageFile = '';
      }
    );
  }
};

export const getImageFile = () => imageFile;
