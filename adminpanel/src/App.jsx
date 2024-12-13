import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from './config/firebaseConfig'
import Header from './component/AppBar';
import FastingChart from './component/Chart';
import AppSelect from './component/AppSelect';

function App() {
  const [users, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [showGraph, setShowGraph] = useState(false)
  const [fastingData, setFastingData] = useState([])


  useEffect(() => {
    getUserList()
  }, [])

  const getUserList = async () => {
    const userCollectionRef = collection(FIREBASE_DB, 'users');
    const querySnapshot = await getDocs(userCollectionRef)
    const userList = querySnapshot.docs.map(
      doc => doc.data(),
    );
    setUser(userList)
  }

  const handleSelectedUser = (user_email) => {
    setSelectedUser(user_email)
    getUserFastingData(user_email)
  }

  const getUserFastingData = async (email) => {
    try {
      // Reference the collection
      const fastingCollection = collection(FIREBASE_DB, "fasting_records");

      // Create a query to filter by email
      const q = query(fastingCollection, where("email", "==", email));

      // Execute the query
      const querySnapshot = await getDocs(q);

      // Map through the documents and get data
      const fastingData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(fastingData)
      setShowGraph(true)
      setFastingData(fastingData)
      return fastingData;
    } catch (error) {
      console.error("Error fetching user fasting data:", error);
      return [];
    }
  };
  return (
    <>
      <Header />
      <AppSelect userList={users} selectedUser={selectedUser} handleSelectedUser={handleSelectedUser} />
      {showGraph && <FastingChart fastingData={fastingData} />}
    </>
  )
}

export default App
