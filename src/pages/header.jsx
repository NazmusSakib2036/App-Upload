import '../assets/style/header.css';
import Logo from '../assets/image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const header = () => {
    return (
        <>
          <div className="header">



            <div className="top_head">
                <div className="head">

                <div className="header_logo">
                <img src={Logo} alt="App logo" />
            </div>
            <div className="header_title">
                <p className='app_name'>NUB SawmApp</p>
                <p className='Company_name'>Sakib Platforms, Inc.</p>
                </div>

            </div>
            <div className="header_btn">
                <a href='' className="install_btn">Download</a>
                </div>
            </div>

            <div className="header_all_con">
                <div className="review">
                    <p className='star'>5.0*</p>
                    <p className='star_count'>1M+ Reviews</p>
                </div>
                <div className="size">
                <FontAwesomeIcon style={{color:'blue'}} icon={faDownload} />
                    <p className='size_count'>10MB</p>
                </div>

                <div className="download">
                    <p className='star'>5M+</p>
                    <p className='star_count'>Download</p>
                </div>


            </div>



            </div> 
        </>
    );
};

export default header;