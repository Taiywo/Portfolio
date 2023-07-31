import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar'
import VisibilitySensor from "react-visibility-sensor";
import 'react-circular-progressbar/dist/styles.css';




const Skills = () => {
    return (
        <>
            {skills.map(({ title, percentage }, index) => {
                return (
                    <div className="progress__box" key={index}>
                        <div className="progress__circle">
                            <VisibilitySensor partialVisibility >
                                {({isVisible})=>{
                                    const percentages = isVisible? percentage: 0;
                                    return(
                                        <CircularProgressbar strokeWidth={5.5} text={`${percentages}%`}
                                        value={percentages} />
                                    )
                                }}
                            </VisibilitySensor>

                        </div>
                        <h3 className="skills__title">
                            {title}
                        </h3>
                    </div>
                )
            })}
        </>

    )
}

export default Skills