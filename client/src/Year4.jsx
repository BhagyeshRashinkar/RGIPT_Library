import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import storage from './config/firebase'

function Year4() {
    useEffect(() => {
        getDownloadURL(ref(storage, 'Mass Transfer.pdf')).then((url) =>
            console.log(url)
        )
    })

    useEffect(() => {
        getDownloadURL(ref(storage, 'PLANT DESIGN AND ECONOMICS FOR CHEMICAL ENGINEERS.pdf')).then((url) =>
            console.log(url)
        )
    })

    useEffect(() => {
        getDownloadURL(ref(storage, 'chemical-process-safety-2nd-ed-daniel-a-crowl-joseph-f-louvar.pdf')).then((url) =>
            console.log(url)
        )
    })

    useEffect(() => {
        getDownloadURL(ref(storage, 'applied_process_design_for chemical and petrochemical plantsvolume1_3e.pdf')).then((url) =>
            console.log(url)
        )
    })

    useEffect(() => {
        getDownloadURL(ref(storage, '136649035-process-systems-analysis-and-control-d-coughanowr-3rd-ed (1).pdf')).then((url) =>
            console.log(url)
        )
    })
    return (
        <div className="main">
            <Header />
            {/* Resources */}
            <section id="year-page">
                <h2>List of Books (4th year)</h2>
                <table className="books-table">
                    <thead>
                        <tr>
                            <th colSpan="2">Your Books</th><th colSpan='2'>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2">Mass Transfer</td><td><a target='_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Mass%20Transfer.pdf?alt=media&token=d99ec3bb-bdc0-4403-9736-43967567314f'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">PLANT DESIGN AND ECONOMICS FOR CHEMICAL ENGINEERS</td><td><a target='_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/PLANT%20DESIGN%20AND%20ECONOMICS%20FOR%20CHEMICAL%20ENGINEERS.pdf?alt=media&token=09e733de-52ec-4739-a21d-75e0dd7246c2'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Chemical Process Safety Daniel A Crowl Joseph F Louvar</td><td><a target='_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/chemical-process-safety-2nd-ed-daniel-a-crowl-joseph-f-louvar.pdf?alt=media&token=a7e4856c-e844-49c4-80ae-b2b46bf5e80f'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Applied Process Design for Chemical and Petrochemical Plants</td><td><a target='_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/applied_process_design_for%20chemical%20and%20petrochemical%20plantsvolume1_3e.pdf?alt=media&token=69cc977b-5b07-4910-9d20-7f2394a4887a'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Process Systems Analysis and Control D Coughanowr</td><td><a target='_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/136649035-process-systems-analysis-and-control-d-coughanowr-3rd-ed%20(1).pdf?alt=media&token=5cfbf8bb-378d-4086-aec0-1350e49b1f5b'>View</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <Footer />
        </div>
    )
}

export default Year4;