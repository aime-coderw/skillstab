import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createClient } from "@supabase/supabase-js";
import "./AdminDashboard.css";

// Initialize Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("orders"); // 🧭 current tab
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Orders
  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select(
        `id, customer_name, customer_phone, customer_email, buyer_name, phone, address, payment_method, payment_code, items, subtotal, tax, total, status, created_at`
      )
      .order("created_at", { ascending: false });
    if (error) console.error("Error fetching orders:", error);
    else setOrders(data);
  };

  // Fetch Messages
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("id, name, email, phone, message, created_at")
      .order("created_at", { ascending: false });
    if (error) console.error("Error fetching messages:", error);
    else setMessages(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (activeTab === "orders") await fetchOrders();
      else await fetchMessages();
      setLoading(false);
    };
    fetchData();
  }, [activeTab]);

  // Update order status
  const markAsDelivered = async (orderId) => {
    const { error } = await supabase
      .from("orders")
      .update({ status: "Delivered" })
      .eq("id", orderId);

    if (error) {
      console.error("Error updating order:", error);
      alert("Failed to update order status.");
    } else {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, status: "Delivered" } : order
        )
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>

        {/* 🧭 Tabs Navigation */}
        <div className="tabs">
          <button
            className={activeTab === "orders" ? "active" : ""}
            onClick={() => setActiveTab("orders")}
          >
            🛍 Orders
          </button>
          <button
            className={activeTab === "messages" ? "active" : ""}
            onClick={() => setActiveTab("messages")}
          >
            💬 Messages
          </button>
        </div>

        {loading ? (
          <p>Loading {activeTab}...</p>
        ) : activeTab === "orders" ? (
          // 🛍 Orders Table
          orders.length === 0 ? (
            <p>No purchase requests yet.</p>
          ) : (
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Products</th>
                  <th>Totals</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <strong>{order.customer_name}</strong>
                      <br />
                      <small>{order.customer_email || "No email"}</small>
                    </td>
                    <td>
                      📞 {order.customer_phone}
                      <br />
                      🧍 {order.buyer_name}
                      <br />
                      ☎️ {order.phone}
                    </td>
                    <td>{order.address || "N/A"}</td>
                    <td>
                      <ul>
                        {Array.isArray(order.items) &&
                          order.items.map((item, idx) => (
                            <li key={idx}>
                              {item.name} × {item.qty} = $
                              {(item.price * item.qty).toFixed(2)}
                            </li>
                          ))}
                      </ul>
                    </td>
                    <td>
                      Subtotal: ${order.subtotal.toFixed(2)}
                      <br />
                      Tax: ${order.tax.toFixed(2)}
                      <br />
                      <strong>Total: ${order.total.toFixed(2)}</strong>
                    </td>
                    <td>
                      <strong>{order.payment_method}</strong>
                      <br />
                      Code: {order.payment_code}
                    </td>
                    <td>
                      <span
                        className={`status-badge ${
                          order.status === "Delivered"
                            ? "delivered"
                            : "pending"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      {order.status !== "Delivered" && (
                        <button onClick={() => markAsDelivered(order.id)}>
                          Mark Delivered
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        ) : messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          // 💬 Messages Table
          <table className="orders-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id}>
                  <td>{msg.name}</td>
                  <td>
                    📧 {msg.email}
                    <br />
                    📞 {msg.phone}
                  </td>
                  <td>{msg.message}</td>
                  <td>{new Date(msg.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
}
