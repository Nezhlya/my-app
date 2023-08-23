import React , {Component} from "react";
import "./Dumpling.css";
import Body from "./Body.js";
import CommentBox from "./CommentBox.js";
import "./Body.css"



class Dumpling extends Component  {
   componentDidMount() {
    window.scrollTo(0, 0); 
  }
  render (){
    return (
      <div>
        
        <div className="page1"><div className="mouse_scroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="m_scroll_arrows unu"></span>
            <span className="m_scroll_arrows doi"></span>
            <span className="m_scroll_arrows trei"></span>
          </div>
        </div></div>
        <div className="page2wrapper">
          <div className="page2">
            <div className="content">
              <Body />
              <div className="commentBox">
                <h3>
                  {" "}
                  Hey there! We'd love to hear what you think! Drop us a comment
                  and share your thoughts with us!
                </h3>
                <CommentBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    );};
}

export default Dumpling;
