import React, {Component} from "react";

import classes from "./Communities.css";
import Community from "./Community/Community";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";

import categoryBooks from "../../../assets/images/category1.jpg";
// import rightArrow from "../../../assets/images/right-arrow.svg";
import groupPhoto from '../../../assets/images/group.jpg';
import rightArrow from '../../../assets/images/right-arrow.png';

class Communities extends Component {
//  state = {
//    numberOfCardsOnResize: 3
//  }
//   updateDimensions =  function() {
//     console.log('dimensions changed');
//     // this.setState({numberOfCardsOnResize: 1});
//     this.state.numberOfCardsOnResize = 1;
//     // this.setState({numberOfCardsOnResize: 1});
//     console.log(this.state.numberOfCardsOnResize);
//   }
  
  componentWillMount() {
    // const numberOfCardsOnResize = 3;
    this.setState({
      children: [],
      activeItemIndex: 0
    });
    window.addEventListener('resize', this.updateDimensions);
    
    const createChildren = n =>
      range(n).map(i => (
        <Community imageUrl={groupPhoto} key={i}/>
      ));
    setTimeout(() => {
      this.setState({
        children: createChildren(20)
      });
    }, 100);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex, children } = this.state;

    return (
      <div className={"py-5 " + classes.Communities}>
        <h3 className={"primary_heading mb-5 pl-2"}>POPULAR COMMUNITIES</h3>
      <ItemsCarousel
        numberOfCards={3}
        gutter={0}
        showSlither={false}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={"center"}
        rightChevron={<img src={rightArrow}></img>}
        leftChevron={<img style={{transform: 'rotateY(180deg)'}} src={rightArrow}></img>}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
      </div>
    );
  }
}

export default Communities;
// const communities = (props) => {
//   return (
//     <div className="py-5">
//       <h3 className="fs_28 fw_700 cl_pr text-center">POPULAR COMMUNITIES</h3>
//       <div className="row no-gutters">

//       {/* <div className="owl-carousel slider-wrapper owl-theme text-center">
//         <Community
//         imageUrl={categoryBooks}
//         categoryName="NCERT"
//         />
//         <Community
//         imageUrl={categoryBooks}
//         categoryName="Engineering"
//         />
//         <Community
//         imageUrl={categoryBooks}
//         categoryName="Medical"
//         />
//       </div> */}
//       </div>
//     </div>
//   );
// };

// export default communities;
