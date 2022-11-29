import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
          <Topbar />
        <div className="Profile">
          <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                <div className="profileBottom">
                    <div className="profileCover">
                        <img className="profileCoverImg" src="/assets/post/3.jpeg" alt="" />
                        <img className="profileUserImg" src="/assets/person/7.jpeg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">John Doe</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                        </div>

                  
                        <Feed />
                        <Rightbar profile />
        
                    </div>
                 </div>
            </div>
                    <div className="profileCover">
                        <img className="profileCoverImg" src="/assets/post/3.jpeg" alt="" />
                        <img className="profileUserImg" src="/assets/person/7.jpeg" alt="" />
                    </div>
                 

          <Feed />
          <Rightbar />
        </div>
    
        </>
      );
    }