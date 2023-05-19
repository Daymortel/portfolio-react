import React from "react"

export const Skills = () => {

    const [skills, setSkills] = React.useState([])

    React.useEffect(() => {
        setSkills([
                { width: '85%' },
                { width: '60%' },
                { width: '60%' },
                { width: '65%' },
                { width: '75%' },
                { width: '90%' }
        ])
    }, [])

    return (
        <>
            <section id="section">
                <div className="box">
                    <h2 className="title">Compétences</h2>
                    <div className="skills">
                        <div className="skill">
                            <span style={skills[0]}>HTML</span>
                        </div>
                        <div className="skill">
                            <span style={skills[1]}>CSS</span>
                        </div>
                        <div className="skill">
                            <span style={skills[2]}>JavaScript</span>
                        </div>
                        <div className="skill">
                            <span style={skills[3]}>NodeJS</span>
                        </div>
                        <div className="skill">
                            <span style={skills[4]}>Database</span>
                        </div>
                        <div className="skill">
                            <span style={skills[5]}>CMS</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}