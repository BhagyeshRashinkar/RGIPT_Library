import NavBar from "./NavBar";
import Image from "next/image";

function Header() {
  return (
    <>
      <section id="header">
        <table className="header-table" cellSpacing="20">
          <tbody>
            <tr>
              <td>
                <img
                  className="rgipt-logo"
                  src="/Images/RGIPT-Logo.png"
                  alt="RGIPT Logo"
                />
              </td>
              <td className="heading-table-data">
                <h1>
                  Rajiv Gandhi Institute of Petroleum Technology <br />
                  Jais, Amethi
                </h1>
                <h3>An Institute of National Importance</h3>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h2>Virtual Library</h2>
        <hr />
        <NavBar />
      </section>
      <marquee className="running">Welcome to Virtual Library of RGIPT</marquee>
    </>
  );
}

export default Header;
