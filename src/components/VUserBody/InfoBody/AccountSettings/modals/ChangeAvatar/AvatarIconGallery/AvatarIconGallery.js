import React, { Component } from 'react';
import LinkAvatar from '../../../../../../../img/User_Customization/avatars/link_avatar.svg';
import BanjoAvatar from '../../../../../../../img/User_Customization/avatars/banjokazooie_avatar.svg';
import HaloAvatar from '../../../../../../../img/User_Customization/avatars/mastercheif_avatar.svg';
import SonicAvatar from '../../../../../../../img/User_Customization/avatars/sonic_avatar.svg';
import AvatarItem from './AvatarItem/AvatarItem';

class AvatarIconGallery extends Component {



    render() {
        const { handleAvatarChange, toggleChangeURL, oldAvatar, handleFalse } = this.props;
        
      return (
                <div className="modal-body-avatar">
                   
                    
                    <section className="avatarPicContainer">
                       <ul className="avatarPicList">
                            <li className="avatarURLItem" onClick={e => {toggleChangeURL()}}></li>
                            <AvatarItem backgroundSource={LinkAvatar} creatorName='Landon Johnson' portfolio="http://bit.ly/landonwjohnson-on-behance" handleAvatarChange={handleAvatarChange} oldAvatar={oldAvatar}  />
                            <AvatarItem backgroundSource={SonicAvatar} creatorName='Landon Johnson' portfolio="http://bit.ly/landonwjohnson-on-behance" handleAvatarChange={handleAvatarChange} oldAvatar={oldAvatar}  />
                            <AvatarItem backgroundSource={HaloAvatar} creatorName='Landon Johnson' portfolio="http://bit.ly/landonwjohnson-on-behance" handleAvatarChange={handleAvatarChange} oldAvatar={oldAvatar}  />
                            <AvatarItem backgroundSource={BanjoAvatar} creatorName='Landon Johnson' portfolio="http://bit.ly/landonwjohnson-on-behance" handleAvatarChange={handleAvatarChange} oldAvatar={oldAvatar} />
                        </ul>
                
                    </section> 
               </div>
      );
    }
  }

export default AvatarIconGallery


