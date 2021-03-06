import React, { Component } from "react";
import JustifiedGrid from "react-justified-grid";

const imageList = [
  {
    src:
      "https://i.pinimg.com/564x/85/eb/45/85eb455bb7101551afbd1d9ca20e83bc.jpg",
    width: 320,
    height: 320
  },
  {
    src:
      "https://scontent.cdninstagram.com/vp/f1d729fe57fa4ddc7c18fa346609cdb8/5C838862/t51.2885-15/e35/s320x320/44348158_2491449144206376_3633417851169311676_n.jpg",
    width: 320,
    height: 167
  },
  {
    src:
      "https://scontent.cdninstagram.com/vp/b0f56148b7f7d06ff186a51853888b2f/5C84ACC0/t51.2885-15/e35/s320x320/44724241_2191160064490130_1438494317224719529_n.jpg",
    width: 320,
    height: 240
  },
  {
    src:
      "https://scontent.cdninstagram.com/vp/dcda7878c4a828f0c850b73dc5c6587d/5C728976/t51.2885-15/e35/p320x320/43158355_534503580355624_1875160473904621159_n.jpg",
    width: 320,
    height: 400
  }
];

class MyImageGallery extends Component {
  render() {
    return (
      <JustifiedGrid images={imageList} rows={3} maxRowHeight={64} gutter={1} />
    );
  }
}

export default MyImageGallery;
