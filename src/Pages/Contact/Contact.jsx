import React from 'react'
import { Footer, Info, Mail,  Map} from '../../Component/index'
import INFO from '../../Config/Contact_Info/info'
import './contact.css'

const Contact = () => {
    return (
        <div data-anchor="page-4" className="pg-page Contact">
            <div className="container">

                <div className="daram__contact__sectionTitle">
                    <h1>GET IN TOUCH</h1>
                </div>

                <div className="daram__contact__group">
                    <div className="daram__contact__groupA">
                        <Mail />
                    </div>
                    <div className="daram__contact__group_middle"></div>
                    {/* <div className="daram__contact__groupB">

                        <Map/>

                        <div className='daram__contact__info'>
                            {INFO.map((item, idx) =>
                                <Info title={item.title} content={item.content} icon={item.icon} key={item.title + idx} />)}
                        </div>
                    </div> */}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Contact;