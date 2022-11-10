import { useEffect,useState } from "react"
import { db } from "../../firebase/config"
import { collection, addDoc,setDoc, doc } from "firebase/firestore"
import { useAuthContext } from "../../hooks/useAuthContext"
export default function TransactionForm(){
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { user } = useAuthContext()
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log("user id is ",user.uid);
        console.log("name:",name)
        console.log("amount:",amount)
        let dataObj = {
            name : name,
            amount : amount
        }
        try {
            // const docRef = await setDoc(doc(db, "transcations"))
            // console.log("Document");
            // console.log("Document", docRef);

            const docRef = await addDoc(collection(db, "transcations"), {
                uid : user.uid,
                name : name,
                amount : amount
              });
              console.log("DOcument", docRef);

        } catch (error) {
            console.log("error is ",error.message);
        }
       
    }

return(
    <>
    <h3> Add a Transaction</h3>
    <form onSubmit={handleSubmit}>
        <label>
            <span>Transaction name:</span>
            <input
                type="text"
                required
                onChange={(e)=>setName(e.target.value)}
                value={name}/>
        </label>

        <label>
            <span>Amount (€)</span>
            <input
                type="number"
                required
                onChange={(e)=>setAmount(e.target.value)}
                value={amount}/>
        </label>
        <button>Add Transaction</button>
    </form>
    </>
)
}