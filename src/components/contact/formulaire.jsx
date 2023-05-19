import { ToastContainer, toast } from "react-toastify";
import { useForm, ValidationError } from '@formspree/react';
import 'react-toastify/dist/ReactToastify.css';

export const Formulaire = () => {

    const [state, handleSubmit] = useForm("mrgvprrg");

    state.succeeded &&
        toast.success('Merci d\'avoir fait appel à mes services !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })

    return (
        <>
            <section id="section" className="contact">
                <div className="box">
                    <h2>Contacts</h2>
                    <form name="contact" id="form" onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="name" id="name" placeholder="Nom" required />
                            <input type="email" name="email" id="email" placeholder="Email" required />
                            {/* <select name="job" id="job">
                                <option value="front-end">Front-end</option>
                                <option value="back-end">Back-end</option>
                                <option value="full-stack">Full-stack</option>
                            </select> */}
                            <input type="text" name="title" id="title" placeholder="Titre" required />
                            <textarea name="message" id="message" placeholder="Message" cols="40" rows="10" required></textarea>
                        </div>
                        <div>
                            <button type="submit" className="submit">Envoyer</button>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </section>
        </>
    )
}