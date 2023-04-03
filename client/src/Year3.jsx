import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { getDownloadURL, ref} from "firebase/storage";
import storage from './config/firebase'

function Year3() {
    useEffect(()=>{
        getDownloadURL(ref(storage, 'DAA_Book.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'handbook of offshore engineering (PDF).pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'Cloud-Computing handbook.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'Ramesh S. Gaonkar - Microprocessor Architecture, Programming, and Applications with the 8085 (2002, Prentice Hall) - libgen.lc.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'an-introduction-to-formal-languages-and-automata-5th-edition-2011.pdf')).then((url)=>
        console.log(url)
    )})

    return (
        <div className="main">
            <Header />
            {/* Resources */}
            <section id="year-page">
                <h2>List of Books (3rd year)</h2>
                <table className="books-table">
                    <thead>
                        <tr>
                            <th colSpan="2">Your Books</th><th colSpan='2'>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2">DAA Book</td><td><a target= '_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/DAA_Book.pdf?alt=media&token=df04af7f-70ac-43ce-862c-de71ab01160c'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Handbook of Offshore Engineering</td><td><a target= '_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/handbook%20of%20offshore%20engineering%20(PDF).pdf?alt=media&token=49533ba9-6ad2-42c4-aa42-907654863837'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">An Introduction to Formal Languages and Automata</td><td><a target= '_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/an-introduction-to-formal-languages-and-automata-5th-edition-2011.pdf?alt=media&token=ebf439ee-3923-4d96-868c-098b617fb1b2'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Ramesh S. Gaonkar - Microprocessor Architecture, Programming, and Applications with the 8085</td><td><a target= '_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Ramesh%20S.%20Gaonkar%20-%20Microprocessor%20Architecture%2C%20Programming%2C%20and%20Applications%20with%20the%208085%20(2002%2C%20Prentice%20Hall)%20-%20libgen.lc.pdf?alt=media&token=9774c32f-b9b4-41b4-809b-c96b58f29880'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Cloud Computing handbook</td><td><a target= '_blank' href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Cloud-Computing%20handbook.pdf?alt=media&token=96ede332-ae67-46fb-8d12-2af68e8fff17'>View</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <Footer />
        </div>
    )
}

export default Year3;