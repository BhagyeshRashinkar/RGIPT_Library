"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import storage from "@/lib/firebase";

const fetchBooks = async (yearFolder) => {
  const folderRef = ref(storage, yearFolder);
  try {
    const booksList = await listAll(folderRef);
    return booksList.items.map((item) => ({
      name: item.name,
      displayName: item.name.replace(".pdf", ""),
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const fetchDownloadURL = async (yearFolder, fileName) => {
  try {
    const url = await getDownloadURL(ref(storage, `${yearFolder}/${fileName}`));
    return url;
  } catch (error) {
    console.error("Error fetching download URL:", error);
    return null;
  }
};

function YearPage({ year, folderName }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksData = await fetchBooks(folderName);
      setBooks(booksData);
    };
    fetchData();
  }, [folderName]);

  const handleViewClick = async (fileName) => {
    const url = await fetchDownloadURL(folderName, fileName);
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("Error: Unable to open the book.");
    }
  };

  return (
    <div className="main">
      <Header />
      <section id="year-page">
        <h2>List of Books ({year})</h2>
        <table className="books-table">
          <thead>
            <tr>
              <th colSpan="2">Your Books</th>
              <th colSpan="2">Links</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td colSpan="2">{book.displayName}</td>
                <td>
                  <button onClick={() => handleViewClick(book.name)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
}

export default YearPage;
