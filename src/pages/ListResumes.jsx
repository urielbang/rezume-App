import { useState, useEffect, useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import CardResume from "../components/CardResume";
import { UserContext } from "../context/User";

import db from "../config";

export default function ListResumex() {
  const [currentResume, srtCurrentResume] = useState({});

  const { user } = useContext(UserContext);

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
    if (user) {
      searchCurrentResume();
    }
  }, [user]);

  return (
    <div className="conainerTamplates">
      <CardResume currentResume={currentResume} />
    </div>
  );
}
