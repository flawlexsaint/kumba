import OrderImg from "../assets/images/order.svg";

const OrderSummary = ({ orderInformation }) => {
  const orderInfo = orderInformation;
  let totalItem = 0;
  let totalBill = 0;
  let totalTax = 0;

  orderInfo.items.forEach((element) => {
    totalItem += element.quantity;
    totalTax += element.tax_pct;
    totalBill += element.price * element.quantity;
  });

  return (
    <div className="_customer_info_">
      <div className="container">
        {orderInfo ? (
          <div className="row mt-5">
            <div className="col-md-10 col-lg-9 mx-auto _profile_card_ shadow">
              {orderInfo.items.map((item) => (
                <div className="row items" key={item.name}>
                  <div className="col-md-1 mb-3 me-3">
                    <img src={OrderImg} className="order_img" alt="" />
                  </div>
                  <div className="col-md-3 mb-3">
                    <span>Name:</span>
                    <p className="">{item.name}</p>
                  </div>
                  <div className="col-md-3 mb-3">
                    <span>Category:</span>
                    <p className="">{item.category}</p>
                  </div>
                  <div className="col-md-2 mb-3">
                    <span>Quantity:</span>
                    <p className="">{item.quantity}</p>
                  </div>
                  <div className="col-md-2 mb-3">
                    <span>Price:</span>
                    <p className="">{item.price}</p>
                  </div>
                </div>
              ))}
              <div className="row">
                <h3 className="restaurant_title">Restaurant Info</h3>
                <div className="col-md-6 restaurant_text d-flex align-items-center">
                  <div className="">
                    <h4>{orderInfo.restaurant.name}</h4>
                    <p>
                      {orderInfo.restaurant.street}, {orderInfo.restaurant.city}
                      , {orderInfo.restaurant.state}
                    </p>
                    <p>Zipcode: {orderInfo.restaurant.zipcode}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="restaurant_title _profile_card_">
                    <div className="d-flex">
                      <span>Total Item:</span>
                      <p className="ms-3">{totalItem}</p>
                    </div>
                    <div className="d-flex">
                      <span>Tax:</span>
                      <p className="ms-3">{totalTax}%</p>
                    </div>
                    <div className="d-flex">
                      <span>Total Bill:</span>
                      <p className="ms-3">{totalBill}INR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-white" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
