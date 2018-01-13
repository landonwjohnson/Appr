import React, { Component } from 'react';
import LinkAvatar from '../../../../../../../img/User_Customization/avatars/link_avatar.svg';
import BanjoAvatar from '../../../../../../../img/User_Customization/avatars/banjokazooie_avatar.svg';
import HaloAvatar from '../../../../../../../img/User_Customization/avatars/mastercheif_avatar.svg';
import SonicAvatar from '../../../../../../../img/User_Customization/avatars/sonic_avatar.svg';
import { findAvatars} from '../../../../../../../services/avatar.services';
import AvatarItem from './AvatarItem/AvatarItem';

class AvatarIconGallery extends Component {
    constructor(props){
        super(props);
        this.state ={
            avatars: []
        }
    }

    componentWillMount(){
        findAvatars()
            .then( res => {
                if (res.status !== 200){
                    console.log(res);
                }
                else{
                    this.setState({ avatars: res.data })
                }
            })
    }

    avatars = [LinkAvatar, BanjoAvatar, HaloAvatar, SonicAvatar];
    render() {
        const { handleAvatarChange, toggleChangeURL, oldAvatar, handleFalse, selectedAvatar} = this.props;
      return (
                <div className="modal-body-avatar">
                    <section className="avatarPicContainer">
                       <ul className="avatarPicList">
                            <li className="avatarURLItem" onClick={e => {toggleChangeURL()}}></li>
                            {this.avatars.map( avatarImage => {
                                return(
                                    <AvatarItem selected={avatarImage === selectedAvatar} backgroundSource={avatarImage} creatorName='Landon Johnson' portfolio="http://bit.ly/landonwjohnson-on-behance" handleAvatarChange={handleAvatarChange} oldAvatar={oldAvatar}  />
                                )
                            })}
                        </ul>
                    </section> 
               </div>
      );
    }
  }

export default AvatarIconGallery


