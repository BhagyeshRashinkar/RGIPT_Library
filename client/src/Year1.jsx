import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { getDownloadURL, ref} from "firebase/storage";
import storage from './config/firebase'

function Year1() {
    useEffect(()=>{
        getDownloadURL(ref(storage, 'Concepts Of Modern Physics.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'Classical Physics Book_Mechanics_Goldstein_Classical_Mechanics_optimized.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'Heterocyclic chemistry - Gilchrist, T. L. (Thomas Lonsda.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'Organic Synthesis. Strategy and Control.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'RAC Robert G Batle.pdf')).then((url)=>
        console.log(url)
    )})

    return (
        <div className="main">
            <Header />
            {/* Resources */}
            <section id="year-page">
                <h2>List of Books (1st year)</h2>
                <table className="books-table">
                <thead>
                        <tr>
                            <th colSpan="2">Your Books</th><th colSpan='2'>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2">Concepts Of Modern Physics.pdf</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Concepts%20Of%20Modern%20Physics.pdf?alt=media&token=218730ba-c914-4e29-bcbf-918dcb032e36'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Classical Physics Book Goldstein</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Classical%20Physics%20Book_Mechanics_Goldstein_Classical_Mechanics_optimized.pdf?alt=media&token=d0862872-ee67-4ccd-808f-a2177e1f0eb4'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Heterocyclic chemistry - Gilchrist, T. L.</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Heterocyclic%20chemistry%20-%20Gilchrist%2C%20T.%20L.%20(Thomas%20Lonsda.pdf?alt=media&token=4f0fc543-9910-4a13-93ce-57f3491e114b'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Organic Synthesis, Strategy and Control</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Organic%20Synthesis.%20Strategy%20and%20Control.pdf?alt=media&token=2d482fb0-84cb-47b9-b918-bc21603ff11d'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Real Analysis & Calculus Robert G Batle</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/RAC%20Robert%20G%20Batle.pdf?alt=media&token=aa41a654-5dea-461b-bc0c-d39c13fdaddc'>View</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <Footer />
        </div>
    )
}

export default Year1