export const Footer = () => {

    const affichZero = (nombre) => {
        return nombre < 10 ? '0' + nombre : nombre;
    }
    const dateEtHeure = () => {
        const infos = new Date();
        document.querySelector('#copy').innerHTML = `Copyright &copy; 2020 - ${affichZero(infos.getFullYear())} by Dylan BABONNEAU. All right reserved.`;
        // document.querySelector('#date').innerHTML = `${affichZero(infos.getDate())} / ${affichZero(infos.getMonth() + 1)} / ${affichZero(infos.getFullYear())}`;
        // document.querySelector('#heure_exacte').innerHTML = `${affichZero(infos.getHours())} : ${affichZero(infos.getMinutes())} : ${affichZero(infos.getSeconds())}`;
    }
    setInterval(dateEtHeure);

    return (
        <>
            <footer>
                <div className="social">
                <a href="https://www.github.com/daymortel/" target="_blank"><i className="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/dylan-babonneau/" target="_blank"><i className="bi bi-linkedin"></i></a>
                    <a href="https://www.facebook.com/dylan.babonneau/" target="_blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/dylan.babonneau/" target="_blank"><i className="bi bi-instagram"></i></a>
                </div>
                {/* <div className="temps">
                    <div id="date"></div>
                    <div id="heure_exacte"></div>
                </div> */}
                <div id="copy"></div>
            </footer>
        </>
    )
}