import "./home.css"
import TransactionForm from "./TransactionForm"
import TransactionList from "./TransactionList"
import { db } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"
import { collection, query, where, getDocs } from "firebase/firestore";
// import { collection,getDocs } from "firebase/firestore"
import { async } from "@firebase/util"
import { doc, getDoc} from "firebase/firestore";
import { useEffect,useState } from "react"

export default function Home() {

    const { user } = useAuthContext()

    const [data,setData] = useState([])


    useEffect(() => {
        querySnapshot()
        console.log(data);
      }, []);

    const querySnapshot = async(e) =>{

        // const docRef = doc(db,"transcations","h");
        const q = query(collection(db, "transcations"))
        // const docSnap = await getDoc(docRef);
        const list = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          if(doc.data().uid === user.uid){
            list.push(doc.data())
          }

        })
        setData(list)
        
        
    }  


    return (
        <div className="container">
            
            <div className="content">
                {<TransactionList transactions={data}/>}
            </div>
            <div className="sidebar">
            <TransactionForm> </TransactionForm>
            </div>
        </div>
    )
};