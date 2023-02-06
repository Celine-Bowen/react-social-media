import React from 'react'
import './Leftbar.scss'
import Friends from "../../assets/friends.png"
import Groups from "../../assets/groups.jpeg"
import Market from "../../assets/market.png"
import Watch from "../../assets/watch.jpeg"
import Memories from "../../assets/memories.jpeg"
import Events from "../../assets/events.png"
import Gaming from "../../assets/gaming.png"
import Gallery from "../../assets/gallery.png"
import Videos from "../../assets/videos.jpeg"
import Messages from "../../assets/messages.png"
import Tutorials from "../../assets/tutorials.png"
import Courses from "../../assets/courses.jpeg"
import Fund from "../../assets/fund.png"

const LeftBar = () => {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src="https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          <span>John Doe</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Your shortcuts</span>
        <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>  
        <hr/>
        <div className="menu">
        <span>Others</span>
        <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default LeftBar