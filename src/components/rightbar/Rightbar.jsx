import "./rightbar.css";

export default function Rightbar() {
    return (

    <div className="rightbar">
        <div className="rightbarWrapper">
        
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/2.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Carl Banks</span>
                    </li>
                </ul>
                
        </div>
    </div> 


    
    )

}
