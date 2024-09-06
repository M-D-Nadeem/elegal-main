import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { currentUsername, setCurrentUsername } from "./gloabalValues";

export const SignUpUsername = async (username, email) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, email);
    const docSnap = await setDoc(docRef, {
      username,
    });

    setCurrentUsername(username);

    console.log("Done baby");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const UploadProviderDetails = async (details, email) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, email);
    const docSnap = await setDoc(
      docRef,
      {
        details,
      },
      { merge: true }
    );

    const docSnap2 = await setDoc(
      docRef,
      {
        type: "provider",
      },
      { merge: true }
    );

    console.log("Uploaded user details succ");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const UploadClientDetails = async (details, email) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, email);
    const docSnap = await setDoc(
      docRef,
      {
        details,
      },
      { merge: true }
    );

    const docSnap2 = await setDoc(
      docRef,
      {
        type: "client",
      },
      { merge: true }
    );

    console.log("Uploaded user details succ");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const UploadAppointmentDetails = async (currentEmail, providerDeets, caseDetails) => {
    currentEmail = caseDetails.email;
    const providerEmail = providerDeets.providerEmail;
    const timeSlot = {date: providerDeets.date, time: providerDeets.time};
    try {
        const collectionRef = collection(db, "appointments");
        const docSnap = await addDoc(
          collectionRef,
          {
            requestedBy: currentEmail,
            requestedTo: providerEmail,
            timeSlot: timeSlot,
            caseDetails: caseDetails,
            accepted: false
          }
        );
    
        console.log("Uploaded appointment details");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const AcceptAppointment = async (caseID) => {
    try {
        const collectionRef = collection(db, "appointments");
        const docRef = doc(collectionRef, caseID)
        const docSnap = await setDoc(
          docRef,
          {
            accepted: true
          },
          {
            merge: true
          }
        );
    
        console.log("Acepted succesfully");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const DeclineAppointment = async (caseID) => {
    try {
        const collectionRef = collection(db, "appointments");
        const docRef = doc(collectionRef, caseID)
        
        await deleteDoc(docRef); 
    
        console.log("Declined succesfully");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}


export const FetchProviderDetails = async (email) => {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return {};
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const FetchAppointmentDetails = async (email) => {
    try {
      const collectionRef = collection(db, "appointments");
      const q = query(collectionRef, where("requestedTo", "==", email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const formattedData = querySnapshot.docs.reduce((acc, doc) => {
          acc[doc.id] = doc.data();
          return acc;
        }, {});
  
        console.log("Document data:", formattedData);
        return formattedData;
      } else {
        console.log("No such document!");
        return {};
      }
    } catch (e) {
      console.error("Error fetching documents: ", e);
      return {};
    }
  };
  