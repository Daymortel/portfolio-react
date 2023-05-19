import huppy from '../../images/projects/huppy.png';
import ponthual from '../../images/projects/ponthual.png';
import droneInvaders from '../../images/projects/drone-invaders.png';
import moneyRender from '../../images/projects/money-render.jpg';
import nextGen from '../../images/projects/next-gen.jpg';

export const Projects = () => {

    return (
        <>
            <section id="section">
                <div className="box">
                    <h2 className="title">Projets</h2>
                    <div className='projects'>
                        <a href="https://huppy-conseil.fr/" target="_blank"><img src={huppy} /></a>
                        <a href="https://www.ecuriedeponthual.com/" target="_blank"><img src={ponthual} /></a>
                        <a href="https://github.com/Daymortel/drones-invaders" target="_blank"><img src={droneInvaders} /></a>
                    </div>
                </div>
            </section>
        </>
    )
}