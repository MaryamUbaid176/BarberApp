import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Chat = () => {
  const [isloading, setIsLoading] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const userData = useSelector(state => state.user.userData);

  const [messages, setMessages] = useState([]);

  const getCurrentChat = async chatId => {
    firestore()
      .collection('chat')
      .doc(chatId)
      .onSnapshot(res => {
        if (res?.data()?.messages?.length) {
          setMessages([...res?.data()?.messages].reverse());
        }
      });
  };
  const sendMessage = async (messages, chatId, type, image) => {
    firestore()
      .collection('chat')
      .doc(chatId)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log('Document exists');

          firestore()
            .collection('chat')
            .doc(chatId)
            .update({
              messages: firestore.FieldValue.arrayUnion({
                _id: moment().toDate().getTime(),
                imagePath: (type == 'image' || type == 'multi_image') && image,
                text: type == 'text' && messages[0].text,
                createdAt: moment().format('MM/DD/YYYY HH:mm:ss'),
                type: type,
                user: {
                  _id: userData.userId,
                  name: userData.name,
                  avatar: userData?.profileImage, //'https://placeimg.com/141/141/any',
                },
              }),
            })
            .then(() => {
              console.log('done');
            });
        } else {
          firestore()
            .collection('chat')
            .doc(chatId)
            .set({
              messages: firestore.FieldValue.arrayUnion({
                _id: moment().toDate().getTime(),
                imagePath: (type == 'image' || type == 'multi_image') && image,
                text: type == 'text' && messages[0].text,
                createdAt: moment().format('MM/DD/YYYY HH:mm:ss'),
                type: type,
                user: {
                  _id: userData.userId,
                  name: userData.name,
                  avatar: userData?.profileImage, // 'https://placeimg.com/141/141/any',
                },
              }),
            })
            .then(() => {
              console.log('done');
            });
        }
      });
  };
  //   const getCurrentChat = async (chatId, callbackFunction) => {
  //     const myCollection = firestore().collection('Groups');
  //     myCollection.add(data).then(docRef => {
  //       myCollection
  //         .doc(docRef.id)
  //         .update({
  //           chatId: docRef.id,
  //         })
  //         .then(() => {
  //           console.log('New group has been created.');
  //           callbackFunction(true);
  //         });
  //     });
  //   };

  return {
    getCurrentChat,
    sendMessage,

    //
    messages,
  };
};

export default Chat;
