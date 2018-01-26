import React from 'react';
import queryString from 'query-string';
import AppBar from 'material-ui/AppBar';
import {getArticlePharagraphs} from "../../API/articleSuggest";

class SuggestView extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      pharagraphs: [],
      articleID: null
    }
  }
  
  componentWillMount() {
    const {articleURL} = queryString.parse(window.location.search);
    if (articleURL) {
      getArticlePharagraphs(articleURL)
        .then((res) => {
          const {title, pharagraphs, articleID} = res.data;
          this.setState({
            title, pharagraphs, articleID
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  render () {
    const {title, pharagraphs, articleID} = this.state;
    return (
      <div>
        <AppBar title={title} showMenuIconButton={false} />
      </div>
    )
  }
}

export default SuggestView;