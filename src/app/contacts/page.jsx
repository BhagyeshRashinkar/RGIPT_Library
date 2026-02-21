"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Contacts() {
  return (
    <div className="main">
      <Header />
      <div className="center">
        <div className="container py-5">
          <h2>Contact Us</h2>
          <p>
            For any queries related to the library, please contact the
            administration.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
