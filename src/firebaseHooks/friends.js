import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/slices/userSlice';
import Groups from './groups';

const Friends = () => {
  const [isloading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [userList, setUserList] = useState([]);
  const [allGroupMembers, setAllGroupMembers] = useState([]);

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);
  const {updateUserInGroup} = Groups();

  const userUpdate = async data => {
    firestore()
      .collection('Users')
      .doc(userData?.userId)
      .get()
      .then(querySnapshot => {
        console.log('querySnapshot.data()...... ', querySnapshot.data());
        let data = {
          email: querySnapshot.data().email.toLowerCase(),
          currency: querySnapshot.data().currency,
          name: querySnapshot.data().name,
          phone: querySnapshot.data().phone,
          userId: querySnapshot.data().userId,
          profileImage: querySnapshot.data().profileImage,
          country: querySnapshot.data().country,
          passcode: querySnapshot.data().passcode,
          enablePasscode: querySnapshot.data().enablePasscode,
        };
        dispatch(setUser(data));
      });
  };
  const handleDynamicLink = async link => {
    console.log('link......>>>>', link);
    if (link?.url.includes('https://splitwisee/user')) {
      let getId = link.url?.split('user=').pop();
      //creating user table
      if (userData.userId != getId) {
        firestore()
          .collection('friends')
          .doc(getId)
          .get()
          .then(documentSnapshot => {
            console.log('documentSnapshot.exists', documentSnapshot.exists);
            if (!documentSnapshot.exists) {
              firestore()
                .collection('friends')
                .doc(getId)
                .set({
                  data: firestore.FieldValue.arrayUnion(userData.userId),
                });
            } else {
              firestore()
                .collection('friends')
                .doc(getId)
                .update({
                  data: firestore.FieldValue.arrayUnion(userData.userId),
                });
            }
            Snackbar.show({
              text: 'New friend has been added',
              duration: Snackbar.LENGTH_LONG,
            });
          })
          .catch(err => {
            console.log('something went wrong', err);
          });

        //creating my own table
        firestore()
          .collection('friends')
          .doc(userData.userId)
          .get()
          .then(documentSnapshot => {
            if (!documentSnapshot.exists) {
              firestore()
                .collection('friends')
                .doc(userData.userId)
                .set({
                  data: firestore.FieldValue.arrayUnion(getId),
                });
            } else {
              firestore()
                .collection('friends')
                .doc(userData.userId)
                .update({
                  data: firestore.FieldValue.arrayUnion(getId),
                });
            }
          })
          .catch(err => {
            console.log('something went wrong', err);
          });
      }
    } else if (link?.url.includes('https://splitwisee/group')) {
      let groupId = link.url?.split('group=').pop();
      console.log('groupId....> ', groupId);
      updateUserInGroup(userData, groupId, success => {
        Snackbar.show({
          text: 'New group has been added',
          duration: Snackbar.LENGTH_LONG,
        });
      });
    }
  };
  async function getMyFriends() {
    setIsLoading(true);
    try {
      await firestore()
        .collection('friends')
        .doc(userData.userId)
        .onSnapshot(async documentSnapshot => {
          if (documentSnapshot.exists) {
            let allUserData = await getUsers(documentSnapshot.data().data);
            let temp = [];
            allUserData.map((item, index) => {
              // firestore()
              //   .collection('chat')
              //   .doc(documentSnapshot.data().data[index].chatId)
              //   .onSnapshot(async document => {
              //     if (document?.data()?.messages?.length > 0) {
              //       item.lastMessage =
              //         document?.data()?.messages[
              //           document?.data()?.messages?.length - 1
              //         ];
              //     }
              //   });
              item.chatId = documentSnapshot.data().data[index].chatId;
              temp.push(item);
            });
            setUserList(temp);
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function getGroupMembers(groupId) {
    console.log('groupId', groupId);
    setIsLoading(true);
    try {
      await firestore()
        .collection('Groups')
        .doc(groupId)
        .onSnapshot(async documentSnapshot => {
          if (documentSnapshot.exists) {
            setAllGroupMembers(documentSnapshot?.data()?.members);
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function getUserIdwithQuery(email, callbackFunction) {
    const querySnapshot = await firestore()
      .collection('Users')
      .where('email', '==', email)
      .get();
    if (querySnapshot.empty) {
      callbackFunction('No matching documents.', null);
    } else {
      querySnapshot.forEach(doc => {
        callbackFunction(null, doc.id);
      });
    }
  }
  async function getUsers(users) {
    const promises = users?.map(subscriber =>
      firestore().collection('Users').doc(subscriber.user).get(),
    );

    const userList = await Promise.all(promises);
    return userList.map(user => user.data());
  }

  const unFriendUser = async (userId, callbackFunction) => {
    firestore()
      .collection('friends')
      .doc(userId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          let filterdData = documentSnapshot
            .data()
            .data.filter(item => item.user != userData.userId);
          firestore().collection('friends').doc(userId).set({
            data: filterdData,
          });
        }
      })
      .finally(() => {
        firestore()
          .collection('friends')
          .doc(userData.userId)
          .get()
          .then(documentSnapshot => {
            if (documentSnapshot.exists) {
              console.log('documentSnapshot.exists', documentSnapshot.exists);
              console.log(
                'documentSnapshot.exists',
                documentSnapshot.data().data,
              );
              let filterdData = documentSnapshot
                .data()
                .data.filter(item => item.user != userId);
              firestore().collection('friends').doc(userData.userId).set({
                data: filterdData,
              });
            }
          })
          .finally(() => callbackFunction(true));
      });
  };
  async function createFriendRequest(
    opponentId,
    senderId,
    senderName,
    senderEmail,
    receiverEmail,
    status,
    callbackFunction,
  ) {
    firestore()
      .collection('Requests')
      .doc(opponentId)
      .get()
      .then(documentSnapshot => {
        if (!documentSnapshot.exists) {
          firestore()
            .collection('Requests')
            .doc(opponentId)
            .set({
              data: firestore.FieldValue.arrayUnion({
                senderId: senderId,
                senderName: senderName,
                senderEmail: senderEmail,
                receiverEmail: receiverEmail,
                status: status,
              }),
            });
        } else {
          firestore()
            .collection('Requests')
            .doc(opponentId)
            .update({
              data: firestore.FieldValue.arrayUnion({
                senderId: senderId,
                senderName: senderName,
                senderEmail: senderEmail,
                receiverEmail: receiverEmail,
                status: status,
              }),
            });
        }
        callbackFunction(true);
      })
      .catch(err => {
        console.log('something went wrong', err);
      });
  }
  return {
    userUpdate,
    handleDynamicLink,
    getMyFriends,
    getUserIdwithQuery,
    getGroupMembers,
    createFriendRequest,
    unFriendUser,
    //
    isloading,
    errMessage,
    userList,
    allGroupMembers,
  };
};

export default Friends;
