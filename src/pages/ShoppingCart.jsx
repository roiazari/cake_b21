import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { myContext } from '../App'
import TableRow from '../components/TableRow'

const ShoppingCart = () => {
  // 1. שלוף גם את updateCount מהקונטקסט (בהנחה שהוספת אותו ב-App.js)
  const { products, deleteProduct, updateCount } = useContext(myContext); 

  return (
    <div className="cart-page">
      <Header title="Shopping Cart" />
      <main className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Count</th>
              <th>Total</th> {/* כדאי להוסיף עמודה למחיר סופי */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <TableRow
                key={item.id} // עדיף להשתמש ב-id במקום ב-index
                name={item.name}
                price={item.price}
                count={item.count} // 2. העברת הכמות האמיתית מה-item
                onDelete={() => deleteProduct(item.id)}
                // 3. העברת פונקציית העדכון ל-TableRow
                onCountChange={(newVal) => updateCount(item.id, newVal)} 
              />
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  )
}

export default ShoppingCart