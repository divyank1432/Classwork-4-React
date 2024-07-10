
import React from "react";
import '../components/Sections.css'
function Section({data, author}){
    return(
        <section className="section">
            <div  className="section1">
            {data} <br />
            <p className="font-light font-sans text-gray-200">{author}</p>
            </div>
        </section>
    )
}
export default Section
