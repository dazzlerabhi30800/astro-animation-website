import data from './AccordianData.json';
import { useState } from 'react';

function Accordian() {
    interface accordian {
        id: number,
        question: string,
        expand: boolean,
        answers: string[],
    }
    const [accData, setAccData] = useState<accordian[]>(data);

    function handleAccordian(id: number) {
        setAccData(accData.map((acc) => {
            if (acc.id === id) {
                return { ...acc, expand: !acc.expand };
            }
            return { ...acc, expand: false }
        }))
    }
    return (
        <section className="section faq-section">
            <h2>FAQ</h2>
            <div className="accordian-wrapper">
                {accData.map((acc, index) => {
                    let { id, question, expand, answers } = acc;
                    return (
                        <div key={index} className="accordian">
                            <div onClick={() => handleAccordian(id)} className='question'>
                                <h4>{question}</h4>
                                <span className={`symbol ${expand && "expand"}`}></span>
                            </div>
                            <div className={`answers ${expand && "show"}`}>
                                {answers.map((answer, index) => {
                                    return (
                                        <p key={index}>{answer}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}


export default Accordian;