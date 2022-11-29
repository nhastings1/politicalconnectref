import "./sidebar.css";
import { RssFeed, Group, Event} from "@material-ui/icons";


export default function Sidebar() {
    return (

    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon" />
                    
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                    <span className="sidebarListItemText">Followers</span>
                </li>
                <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                <Group className="sidebarIcon" />
                    <span className="sidebarListItemText">Politicians</span>
                </li>
                <li className="sidebarListItem">
                <RssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">Photos</span>
                </li>
                <li className="sidebarListItem">
                <RssFeed className="sidebarIcon" />
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarIcon" />
                    
                    <span className="sidebarListItemText">Events</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Donald Trump</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Carl Banks</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Dennis Burns</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Sarah Palin</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">Mich McConnell</span>
                </li>

            </ul>
            
        </div>
    </div>
    );

}

