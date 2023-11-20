import React, { Component } from 'react';
import './OrgDataStyles.css';
import { Link } from 'react-router-dom';
import Img1 from "../assets/green.png";
import Img2 from "../assets/blue.png";
import Img3 from "../assets/orange.png";
import Img4 from "../assets/ambasador.jpeg";


export class OrgData extends Component {

  render() {

    return (
      <div className='OrgData'>
        <h1>Une organisation structuree pour vous servir</h1>

        <div className='tree'>
            <ul>
                <li><Link to="/ambassador" className='amb_col'><img src={Img4} alt=''/><span>Ambassadeur</span></Link>
                <h3 className='float'><span>Protocole</span></h3>
                    <ul>
                        <li><Link to="#"><img src={Img1} alt=''/><span>Secretariat particulier</span></Link></li>
                        {/* <li><Link to="#"><img src={Img2} alt=''/><span>Communication et relations publiques</span></Link></li> */}

                        <li><Link to="#"><img src={Img1} alt=''/><span>Premier conseiller</span></Link>
                            <ul>
                                <li><Link to="#"><img src={Img2} alt=''/><span>Mission militaire et de securite</span></Link>
                                    <ul>
                                        <li><Link to="#"><img src={Img3} alt=''/><span>Adjoint</span></Link></li>
                                    </ul>
                                </li>
                                <li><Link to="#"><img src={Img2} alt=''/><span>Departement economique et commercial</span></Link></li>
                                <li><Link to="#"><img src={Img2} alt=''/><span>Departement consulaire</span></Link></li>
                                <li><Link to="#"><img src={Img2} alt=''/><span>Departement culturel</span></Link></li>
                                <li><Link to="#"><img src={Img2} alt=''/><span>Departement politique</span></Link></li>
                                <li><Link to="#"><img src={Img2} alt=''/><span>La tresorerie</span></Link></li>
                                <li><Link to="#"><img src={Img2} alt=''/><span>Service interpretariat et traduction</span></Link></li>
                            </ul>
                        </li>
                        <li><Link to="#"><img src={Img1} alt=''/><span>Communication et relations publiques</span></Link>
                            {/* <ul>
                                <li><Link to="#"><img src={Img2} alt=''/><span>G Grand Child 1</span></Link></li>
                                <li><Link to="#"><img src={Img2} alt=''/><span>G Grand Child 2</span></Link></li>
                            </ul> */}
                        </li>
                    </ul>
                </li>
                
            </ul>
            {/* <h3 className='floatSpan1'>Protocole</h3> */}
            <h3 className='floatSpan2'>Agents de l'ambassade</h3>
        </div>


        {/* <div className='tree'>
            <ul>
                <li><Link to="#"><img src={Img4} alt=''/><span>Ambassador</span></Link>
                    <ul>
                        <li><Link to="#"><img src={Img1} alt=''/><span>Grand Child 1</span></Link>
                            <ul>
                                <li><Link to="#"><img src={Img1} alt=''/><span>G Grand Child 1</span></Link></li>
                                <li><Link to="#"><img src={Img1} alt=''/><span>G Grand Child 2</span></Link></li>
                            </ul>
                        </li>
                        <li><Link to="#"><img src={Img2} alt=''/><span>Grand Child 2</span></Link>
                            <ul>
                                <li><Link to="#"><img src={Img2} alt=''/><span>G Grand Child 1</span></Link></li>
                                <li><Link to="#"><img src={Img2} alt=''/><span>G Grand Child 2</span></Link></li>
                            </ul>
                        </li>

                        <li><Link to="#"><img src={Img3} alt=''/><span>Grand Child 3</span></Link>
                            <ul>
                                <li><Link to="#"><img src={Img2} alt=''/><span>G Grand Child 1</span></Link></li>
                                <li><Link to="#"><img src={Img2} alt=''/><span>G Grand Child 2</span></Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div> */}
      </div>
    )
  }
}

export default OrgData