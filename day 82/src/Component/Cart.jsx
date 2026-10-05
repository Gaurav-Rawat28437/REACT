import React, { useContext } from 'react'
import { mycontect } from '../App'

function Cart() {
  const { carts, setCarts } = useContext(mycontect)

  let totalQuantity = 0
  for (let item of carts) {
    totalQuantity += item.quantity
  }

  let totalPrice = 0
  for (let item of carts) {
    totalPrice += item.quantity * item.price
  }

  return (
    <main className="h-[90vh] bg-gray-100 p-6 flex gap-10 items-start mt-10">

      {/* Products */}
      <div className="flex flex-col gap-6 flex-1">

        {carts.length === 0 ? (
          <h1 className="text-3xl font-bold text-center text-gray-700">
            Cart is Empty
          </h1>
        ) : (
          carts.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white p-5 rounded-lg shadow-md flex gap-6 items-center"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-32 w-32 object-cover rounded"
                />

                <div className="flex flex-col gap-2 flex-1">

                  <p className="text-lg font-semibold">{item.title}</p>

                  <p className="text-gray-600">Quantity: {item.quantity}</p>

                  <button
                    onClick={() => {
                      const filterCarts = carts.filter((p) => {
                        return p != item
                      })
                      setCarts(filterCarts)
                    }}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 w-fit"
                  >
                    Remove Item
                  </button>

                  <div className="flex items-center gap-3">
                    <p className="font-medium">Quantity</p>

                    <button
                      onClick={() => {
                        const filterItem = carts.find((cp) => {
                          return cp.id == item.id
                        })

                        const kyaHiBolu = carts.map((p) => {
                          return p == filterItem ? { ...p, quantity: p.quantity + 1 } : p
                        })
                        setCarts(kyaHiBolu)
                      }}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      +
                    </button>

                    <button
                      disabled={item.quantity <= 1}
                      onClick={() => {
                        if (item.quantity > 1) {
                          const filterItem = carts.find((cp) => {
                            return cp.id == item.id
                          })

                          const kyaHiBolu = carts.map((p) => {
                            return p == filterItem ? { ...p, quantity: p.quantity - 1 } : p
                          })
                          setCarts(kyaHiBolu)
                        }
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 disabled:bg-gray-300"
                    >
                      -
                    </button>
                  </div>

                  <p className="text-gray-700">Price: ₹{item.price.toFixed(2)}</p>

                  <p className="font-semibold text-blue-600">
                    Total: ₹{(item.price * item.quantity).toFixed(2)}
                  </p>

                </div>
              </div>
            )
          })
        )}

      </div>

      {/* Cart Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80 sticky top-20 h-fit">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Cart Summary
        </h2>

        <p className="text-lg text-gray-600">
          Total Items:
          <span className="font-semibold text-black ml-2">
            {totalQuantity}
          </span>
        </p>

        <p className="text-xl font-bold text-green-600 mt-2">
          Total Price: ₹{Math.ceil(totalPrice)}
        </p>

      </div>

    </main>
  )
}

export default Cart