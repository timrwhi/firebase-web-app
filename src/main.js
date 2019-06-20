import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from '../firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

const fetchEntries = () =>
  new Promise((resolve, reject) => {
    firebase
      .database()
      .ref('entries')
      .once('value')
      .then(data => resolve(data.toJSON()));
  });

const createEntry = entry =>
  new Promise(resolve => {
    firebase
      .database()
      .ref(`entries/${entry.id}`)
      .set(entry)
      .then(data => resolve(entry));
  });

const updateEntry = ({ id, key, value }) => {
  firebase
    .database()
    .ref(`entries/${id}/${key}`)
    .set(value);
};

const deleteEntry = id => {
  firebase
    .database()
    .ref(`entries/${id}`)
    .remove();
};
