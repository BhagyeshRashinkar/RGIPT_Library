import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="main">
            <Header />
            {/* Resources */}
            <section id="year-page">
                <h2>Select Your Year</h2>
                <hr />
                    <div className=" selector-buttons row">
                        <div className=" col col-lg-3 col-sm-6">
                            <h3><Link to="/1st_year" target='_blank'>1st Year</Link></h3>
                        </div>

                        <div className=" col col-lg-3  col-sm-6">
                            <h3><Link to="/2nd_year" target='_blank'>2nd Year</Link></h3>
                        </div>
                        <div className=" col  col-lg-3 col-sm-6">
                            <h3><Link to="/3rd_year" target='_blank'>3rd Year</Link></h3>
                        </div>
                        <div className=" col col-lg-3  col-sm-6">
                            <h3><Link to="/4th_year" target='_blank'>4th Year</Link></h3>
                        </div>
                    </div>
                    {/* <table className="books-table">
                        <thead>
                            <tr>
                                <th colspan="2">Your Books</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Book 1</td>

                            </tr>
                            <tr>
                                <td>Book 2</td>

                            </tr>
                            <tr>
                                <td>Book 3</td>

                            </tr>
                            <tr>
                                <td>Book 4</td>

                            </tr>
                            <tr>
                                <td>Book 5</td>

                            </tr>
                        </tbody>
                    </table> */}

            </section>
            <Footer />
        </div>
    )
}

export default Home