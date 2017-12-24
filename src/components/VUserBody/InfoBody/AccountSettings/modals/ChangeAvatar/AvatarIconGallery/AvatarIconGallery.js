import React, { Component } from 'react';
import LinkAvatar from '../../../../../../../img/User_Customization/avatars/LinkAvatar.JPG';
import BanjoAvatar from '../../../../../../../img/User_Customization/avatars/BanjoAvatar.JPG';
import HaloAvatar from '../../../../../../../img/User_Customization/avatars/MasterChiefAvatar.JPG';
import SonicAvatar from '../../../../../../../img/User_Customization/avatars/SonicAvatar.JPG';
import { Link } from 'react-router-dom';

class AvatarIconGallery extends Component {
    render() {
        const { userInfo, handleAvatarChange, toggleChangeURL } = this.props;
      return (
                <div className="modal-body-avatar">
                    {/* <label class="modal-input-tag">Choose your avatar</label> */}
                    <section class="avatarPicContainer">
                       <ul className="avatarPicList">
                            <li className="avatarURLItem" onClick={e => {toggleChangeURL()}}> <label>Image URL</label></li>
                            <li className="avatarPicItem" onClick={(e) => handleAvatarChange(LinkAvatar)} style ={{ backgroundImage: `url(${LinkAvatar})` }}> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>
                            <li className="avatarPicItem" onClick={(e) => handleAvatarChange(HaloAvatar)} style ={{ backgroundImage: `url(${HaloAvatar})` }}> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>
                            <li className="avatarPicItem" onClick={(e) => handleAvatarChange(BanjoAvatar)} style ={{ backgroundImage: `url(${BanjoAvatar})` }}> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>

                            
                                {/* <li className="avatarPicItem"   />
                                <li className="avatarPicItem" style ={{ backgroundImage: `url(${SonicAvatar})` }}  />
                                <li className="avatarPicItem" style ={{ backgroundImage: `url(${HaloAvatar})` }}  />
                                <li className="avatarPicItem" style ={{ backgroundImage: `url(${BanjoAvatar})` }}  /> */}
                        
                        </ul>
                    </section> 
               </div>
      );
    }
  }

export default AvatarIconGallery


