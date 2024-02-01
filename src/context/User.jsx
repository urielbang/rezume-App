import { createContext } from "react";
import { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../config";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentResume, srtCurrentResume] = useState({});
  const auth = getAuth();
  const searchCurrentResume = async () => {
    const q = query(
      collection(db, "ResumeData"),
      where("userId", "==", user.uid)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.docs.forEach((doc) => {
      srtCurrentResume({ ...currentResume, ...{ ...doc.data() } });
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      searchCurrentResume();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, currentResume }}>
      {children}
    </UserContext.Provider>
  );
}
