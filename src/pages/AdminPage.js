import { React, useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MyContext } from "../ContextProvider";
import AddItemForm from "../components/AddItemForm";

const AdminPage = () => {
  const { revenue, orders} = useContext(MyContext);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const mappedData = orders.map((item) => {
    const userName = item.user.name;
    const address = item.user.address;
    const orderIdList = item.order.map((order) => order);

    return {
      userName,
      orderIdList,
      address,
    };
  });

  return (
    <>
      <Navbar />
      <div className="admin-page">
        <div className="dashboard">
          <div className="revenue">
            <p>Total Revenue: {revenue}</p>
          </div>
          <div className="total-orders">
            <p>Total Orders: {orders.length}</p>
          </div>
          <div className="site-interaction">Site Interaction: 67%</div>
        </div>
        <div className="orders">

          <div className="cart-item">
            <table>

              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Address</th>
                  <th>Order IDs</th>
                  <th>Process Update</th>
                </tr>
              </thead>
              <tbody>
                {mappedData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.userName}</td>
                    <td>{item.address}</td>
                    <td>
                      {item.orderIdList
                        .map((orderId) => orderId.toString())
                        .join(", ")}
                    </td>
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    >
                      <option value="">-- Select --</option>
                      <option value="pending">Pending</option>
                      <option value="shipped">Shipped</option>
                      <option value="finished">Finished</option>
                    </select>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="add-items">
          <AddItemForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
