export const addNote = (note) => {
      console.log(note)
      return (dispatch, getState, { getFirestore }) => {
          // make async call to database
          const firestore = getFirestore();
          firestore
              .collection("notes")
              .add({
                  ...note,
                  favorite: false,
                  createdAt: new Date(),
              })
              .then(() => {
                  // dispatch({ type: "CREATE_PROJECT_SUCCESS", project });
              })
              .catch((err) => {
                  console.log(err)
              });
      };
  };

  export const deleteNote=(note)=>{
    console.log(note)
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).delete()
            .then(() => {
                console.log("Deteted")
            })
            .catch((err) => {
                console.log(err)
            });
    };

  }

  export const toggleFavorite=(note)=>{
    console.log(note)
    return (dispatch, getState, { getFirestore }) => {
        const favStatus=!note.favorite
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).update({ favorite:favStatus})
        .then(()=>{
            console.log("Toggle favorite Success")
        })
        .catch((err)=>{console.log(err)})
    };

  }

  export const updateNote=(note)=>{
    console.log(note)
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).update({title:note.title, content: note.content})
            .then(() => {
                console.log("Deteted")
            })
            .catch((err) => {
                console.log(err)
            });
    };

  }
