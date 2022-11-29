import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
  return (
      <div className="share">
          <div className="sharewrapper">
              <div className="sharetop">
                  <img className="shareprofileimg" src={'/assets/person/1.jpeg'} alt="" />
                  <input placeholder="What's on your mind?" className="shareinput" />
              </div>
              <hr className="sharehr" />
                  <div className="sharebottom">

                      <div className="shareoptions">
                        <PermMedia htmlColor="tomato" className="shareicon" />
                          <span className="shareoptionText">Photo or Video</span>
                        </div>

                        <div className="shareoptions">
                            <Label htmlColor="blue" className="shareoptionIcon" />
                            <span className="shareoptionText">Tag</span>
                            </div>

                            <div className="shareoptions">
                                <Room htmlColor="green"className="shareIcon" />
                                <span className="shareoptionText">Location</span>
                                </div>

                                <div className="shareoptions">
                                    <EmojiEmotions htmlColor="Golden"className="shareicon" />
                                    <span className="shareoptionText">Feelings</span>
                                    </div>
                                 </div>
                                    <button className="sharebutton">Share</button>
           </div>
          </div>
  );
}
