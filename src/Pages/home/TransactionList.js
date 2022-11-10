export default function TransactionList({transcations})

{
    return(
        <ul className="transactions">
            {transcations?.map((transaction)=>(
                <li key={transaction.id}>
                    <p className="name">{transaction.name}</p>
                    <p className="amount">{transaction.amount}</p>
                    {/* <button onClick={()=>deleteDocument(transaction.id)}>x</button> */}

                </li>
            ))}



        </ul>
            )
}