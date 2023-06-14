import  { useEffect, useState } from 'react'

function PaymentHistory() {
    const [payments,setPayments]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/payments')
        .then(res=>res.json())
        .then(data=>setPayments(data))
    },[])
  return (
    <div>
        <h1 className='uppercase text-3xl text-center'>payment history</h1>
         
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>TransactionId</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
      payments.map((payment,index) => <tr>
        <th>{index+1}</th>
        <td>{payment.email}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.price}</td>
      </tr>)
    }
     
      
    </tbody>
  </table>
</div>



    </div>
  )
}

export default PaymentHistory