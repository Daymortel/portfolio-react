import { Studies } from '../components/home/studies';
import { Experiences } from '../components/home/experiences';
import { Hobbies } from '../components/home/hobbies';
import { Projects } from '../components/home/projects';
import { Skills } from '../components/home/skills';

export const Home = () => {

    let charIndex = 0;
    const text = 'Dylan<br>BABONNEAU'; // texte à afficher

    const taperTexte = () => {
        document.querySelector('#typeText').innerHTML = text.substr(0, charIndex); // Obtenir l'endroit où va s'afficher le texte
        charIndex++;
    }
    setInterval(taperTexte, 100); // interval de temps entre l'affichage de chaque lettre

    return (
        <>
            <main>
                <div className="header">
                    <div className="name">
                        <h1 id="typeText"></h1>
                    </div>
                </div>
                <Studies />
                <Skills />
                <Projects />
                <Experiences />
                <Hobbies />
            </main>
        </>
    )
}