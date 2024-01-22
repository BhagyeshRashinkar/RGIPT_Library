import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import storage from "./config/firebase";

const fetchBooks = async () => {
  const year1FolderRef = ref(storage, "year3"); // Replace 'year1' with your actual subfolder name

  try {
    const booksList = await listAll(year1FolderRef);
    return booksList.items.map((item) => ({
      name: item.name,
      displayName: item.name.replace(".pdf", ""),
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const fetchDownloadURL = async (fileName) => {
  try {
    const url = await getDownloadURL(ref(storage, `year3/${fileName}`));
    return url;
  } catch (error) {
    console.error("Error fetching download URL:", error);
    return null; // Return null or handle the error appropriately
  }
};

function Year3() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };

    fetchData();
  }, []); // Run once on component mount

  const handleViewClick = async (fileName) => {
    const url = await fetchDownloadURL(fileName);

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
        <h2>List of Books (3rd year)</h2>
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

export default Year3;
