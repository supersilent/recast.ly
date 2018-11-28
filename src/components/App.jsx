import VideoPlayer from "./VideoPlayer.js";
import VideoList from "./VideoList.js";
import Search from "./Search.js";
import exampleVideoData from "../data/exampleVideoData.js";
import searchYouTube from "../lib/searchYouTube.js";
import YOUTUBE_API_KEY from "../config/youtube.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: []
    };
  }
  componentDidMount() {
    this.searchVideos("Google");
  }
  searchVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };
    this.props.searchYouTube(options, videos =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  playNewVideo(video) {
    this.setState({
      currentVideo: video
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                <Search
                  handleSearchInputChange={this.searchVideos.bind(this)}
                />
              </h5>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <h5>
                <VideoPlayer video={this.state.currentVideo} />
              </h5>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h5>
                <VideoList
                  videos={this.state.videos}
                  onClick={this.playNewVideo.bind(this)}
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
