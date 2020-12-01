import firebase from 'firebase';

export const timestampToDateRecursively = (value: any): any => {
  const Firestore = firebase.firestore;

  if (value == null) {
    return value;
  } else if (value.constructor === Firestore.Timestamp) {
    return value.toDate();
  } else if (Array.isArray(value)) {
    return value.map(timestampToDateRecursively);
  } else if (value.constructor === Object) {
    const converted: any = {};
    for (const key in value) {
      converted[key] = timestampToDateRecursively(value[key]);
    }
    return converted;
  } else {
    return value;
  }
}