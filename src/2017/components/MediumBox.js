import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import '../css/App.css';
import Box from './Box'
import siteData from '../data/songs20-11.json'
import Sidebar from './sidebar/Sidebar.js';
import RightArrow from '../img/arrow-r_1@2x.png'
import LeftArrow from '../img/arrow-l_1@2x.png'
import Close from '../img/icn_close.svg';
import ReactHtmlParser from 'react-html-parser';
// import ReactGA from 'react-ga';
import Modal from 'react-modal';

export default class MediumBox extends Component {
  constructor() {
    super();
    this.state = {
      data: siteData,
      showModal: false,
      currentSong: {}
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = (e, el) => {
    this.setState({ 
      showModal: true,
      currentSong: el
    });
    // ReactGA.event({
    //   category: 'Navigation',
    //   action: 'Selected',
    //   label: 'Medium Box'
    // });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const JSONdesc = this.state.currentSong.description;
    const newDesc = ReactHtmlParser(JSONdesc);
    return (
      <div className="wrapper">
        <Modal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="button" onClick={this.handleCloseModal}><img src={Close} alt="close modal" /></div>
          <Sidebar 
            title={this.state.currentSong.title}
            artist={this.state.currentSong.artist}
            description={newDesc}
            _id={this.state.currentSong._id}
            songURL={this.state.currentSong.songURL}
            photoCredit={this.state.currentSong.photoCredit}
          />
          <div className="Modal-background"></div>
  
        </Modal>

        <div className="song-list grid">
          {this.state.data.songs.map((el) => {
            return (
              <div className="medium-box grid-box opacity" key={el._id}>
                <LazyLoad once={el.once} key={el._id} height={200} offset={[-200, 0]}>
                  <Box 
                    songId={el._id} 
                    imgUrl={el.imgURL}
                    onClick={ ((e) => this.handleOpenModal(e, el)) } 
                  />
                </LazyLoad>
              </div>
            )
          })}
        </div>
        <div className="page-navigation">
          <Link className="page-link-group" to="/50-21">
            <div className="page-link">
              <img src={LeftArrow} alt="previous page"/>
              <p>50-21</p>
            </div>
          </Link>
          <Link className="page-link-group" to="/10-1">
            <div className="page-link">
              <img src={RightArrow} alt="next page"/>
              <p>10-1</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
