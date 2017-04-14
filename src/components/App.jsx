class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    }

    this.done = this.done.bind(this);
    this.onTitleClicked = this.onTitleClicked.bind(this);
    this.onSearchInserted = this.onSearchInserted.bind(this);
}

  componentDidMount(){
    var options = {
      key: window.API_KEY,
      query: 'gundam',
      max: 5
    };
    this.props.searchYouTube(options, this.done);
  };

  done(data){
    this.setState ({
      currentVideo: data[0],
      videoList: data
    });
  };

  onTitleClicked(newVideo){
    this.setState({currentVideo : newVideo});
  };

  onSearchInserted (text) {
    var options = {};
      options.key = window.API_KEY;
      options.query = text;
      options.max = 5;
    this.props.searchYouTube(options, this.done);
  };

  render() {
    return (
      <div>
        <Nav onSearchInserted={this.onSearchInserted} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} cb={this.onTitleClicked}/>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
