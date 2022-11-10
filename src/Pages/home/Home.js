import "./home.css"
import TransactionForm from "./TransactionForm"
import TransactionList from "./TransactionList"
import { db } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"

import { collection,getDocs } from "firebase/firestore"
import { async } from "@firebase/util"
import { doc, getDoc} from "firebase/firestore";
import { useEffect,useState } from "react"

export default function Home() {

    const { user } = useAuthContext()

    const [data,setData] = useState([])


    useEffect(() => {
        querySnapshot()
      },[]);

    const querySnapshot = async(e) =>{

        const docRef = doc(db,"transcations",user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setData()
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
    }  


    return (
        <div className="container">
            
            <div className="content">
                {<TransactionList transactions={document}/>}
            </div>
            <div className="sidebar">
            <TransactionForm> </TransactionForm>
            </div>
        </div>
    )
};
