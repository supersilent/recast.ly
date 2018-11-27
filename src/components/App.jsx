// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// import VideoPlayer from 'module';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';



 
class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentPlayerVideo: window.exampleVideoData[0],
    //   videos: window.exampleVideoData
    // }
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                <em>search</em> view goes here
              </h5>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <h5>
                <VideoPlayer video={this.props.data[0]}/>
              </h5>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h5>
                <VideoList videos={this.props.data}/>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
