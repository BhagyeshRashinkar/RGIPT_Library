import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { getDownloadURL, ref} from "firebase/storage";
import storage from './config/firebase'

function Year2() {
    
    useEffect(()=>{
        getDownloadURL(ref(storage, 'Data Structures With C - by schaum lipschutz.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'ENGINEERING DRAWING BY N.D BHATT.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'Learning_Python.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'Linear Algebra and Its Applications.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'material-science-and-engineering-v-raghavanpdf-pr_dbbff24bdad78633ad30dd9bfbf9f7af.pdf')).then((url)=>
        console.log(url)
    )})

    useEffect(()=>{
        getDownloadURL(ref(storage, 'Statistical and mathematics.pdf')).then((url)=>
        console.log(url)
    )})
    return (
        <div className="main ">
            <Header />
            {/* Resources */}
            <section id="year-page">
                <h2>List of Books (2nd year)</h2>
                <table className="books-table">
                     <thead>
                        <tr>
                            <th colSpan="2">Your Books</th><th colSpan='2'>Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2">Data Structures With C - by Schaum Lipschutz</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Data%20Structures%20With%20C%20-%20by%20schaum%20lipschutz.pdf?alt=media&token=1d3eb902-f4c9-429b-b0fb-15c9b5e28401'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">ENGINEERING DRAWING BY N.D BHATT</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/ENGINEERING%20DRAWING%20BY%20N.D%20BHATT.pdf?alt=media&token=d1eb432d-d2d1-4928-8e74-6ab71bd0fafc'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Learning_Python.pdf</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Learning_Python.pdf?alt=media&token=1310a87f-9800-4514-a92e-4e5ca46ff6a1'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Linear Algebra and Its Applications</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Linear%20Algebra%20and%20Its%20Applications.pdf?alt=media&token=e84d148c-1b93-4867-bd88-81786093e7a4'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Material Science and Engineering-V Raghavan</td><td><a target= '_blank' rel="noreferrer" href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/material-science-and-engineering-v-raghavanpdf-pr_dbbff24bdad78633ad30dd9bfbf9f7af.pdf?alt=media&token=3b060e2b-438d-4ecd-b6aa-18287c418ee1'>View</a></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Statistical and mathematics</td><td><a target= '_blank'rel="noreferrer"  href='https://firebasestorage.googleapis.com/v0/b/test-23c29.appspot.com/o/Statistical%20and%20mathematics.pdf?alt=media&token=2c9161fc-f2a0-4b75-8872-da9e320adb0a'>View</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <Footer />
        </div>
    )
}

export default Year2