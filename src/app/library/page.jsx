"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Library() {
  return (
    <div className="main">
      <Header />
      <div className="center">
        <div className="container py-5 text-center">
          <h2>Virtual Library Repository</h2>
          <p>Access all digital resources and books here.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Library;
