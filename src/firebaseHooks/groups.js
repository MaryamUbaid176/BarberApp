import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Groups = () => {
  const [isloading, setIsLoading] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const userData = useSelector(state => state.user.userData);

  const createMyGroup = async (data, callbackFunction) => {
    // firestore()
    //   .collection('Groups')
    //   .doc()
    //   .set(data)
    //   .then(res => {
    //     callbackFunction(true);
    //   });
    const myCollection = firestore().collection('Groups');
    myCollection.add(data).then(docRef => {
      myCollection
        .doc(docRef.id)
        .update({
          chatId: docRef.id,
        })
        .then(() => {
          console.log('New group has been created.');
          callbackFunction(true);
        });
    });
  };

  const getUserGroups = async () => {
    setIsLoading(true);
    let temp = [];
    firestore()
      .collection('Groups')
      // .onSnapshot(querySnapshot => console.log('querySnapshot', querySnapshot));
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          documentSnapshot?.data()?.members?.map((item, index) => {
            if (item?.user?.userId == userData?.userId) {
              documentSnapshot.data().documentId = documentSnapshot.id;

              temp.push(documentSnapshot.data());
            }
          });
        });
      })
      .finally(() => {
        setFilterData(temp);
        setIsLoading(false);
      });
  };

  const updateUserInGroup = async (user, groupId, callbackFunction) => {
    firestore()
      .collection('Groups')
      .doc(groupId)
      .update({
        members: firestore.FieldValue.arrayUnion({user}),
      })
      .then(() => {
        callbackFunction(false);
      });
  };

  const leaveGroup = async (documentId, userToDeleteId, callbackFunction) => {
    firestore()
      .collection('Groups')
      .doc(documentId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          let temp = documentSnapshot
            .data()
            .members.filter(item => item.user.userId != userToDeleteId);
          firestore()
            .collection('Groups')
            .doc(documentId)
            .update({
              members: temp,
            })
            .then(() => {
              callbackFunction(true);
            });
        }
      })
      .catch(err => {
        console.log('something went wrong', err);
      });
  };

  const deleteGroup = async (documentId, callbackFunction) => {
    firestore()
      .collection('Groups')
      .doc(documentId)
      .delete()
      .then(() => {
        callbackFunction(true);
      })
      .catch(err => {
        console.log('something went wrong', err);
      });
  };
  return {
    createMyGroup,
    getUserGroups,
    updateUserInGroup,
    leaveGroup,
    deleteGroup,
    //
    filterData,
    isloading,
  };
};

export default Groups;
