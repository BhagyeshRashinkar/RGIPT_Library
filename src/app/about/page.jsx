"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

function About() {
  return (
    <div className="main">
      <Header />
      <div className="center">
        <div className="container py-5">
          <h2>About RGIPT Virtual Library</h2>
          <p>
            This is a digital repository for Rajiv Gandhi Institute of Petroleum
            Technology.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
