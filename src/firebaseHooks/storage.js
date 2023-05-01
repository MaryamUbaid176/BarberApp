import storage from '@react-native-firebase/storage';

const Storage = () => {
  const uploadImage = async (
    profileImage,
    storagePath,
    callbackFunction,
    imgProgress,
  ) => {
    let reference = storage().ref(`${storagePath}${profileImage.name}`);
    let task = reference.putFile(profileImage.uri);

    task.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        imgProgress(progress);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('Upload complete');
      },
    );
    task
      .then(res => {
        reference.getDownloadURL().then(url => {
          callbackFunction(url);
        });
      })
      .catch(e => {
        console.log('uploading image error => ', e);
      });
  };
  return {
    uploadImage,
  };
};

export default Storage;
