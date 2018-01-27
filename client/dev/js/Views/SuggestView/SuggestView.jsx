import React from 'react';
import queryString from 'query-string';
import AppBar from 'material-ui/AppBar';
import {getArticlePharagraphs} from "../../API/articleSuggest";
import TextSuggestionForm from "../../Components/TextSuggestionForm/TextSuggestionForm";
import CircleLoader from "../../Components/CircleLoader/CircleLoader";
require('./SuggestView.sass');

class SuggestView extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      paragraphs: [],
      articleId: null,
      articleURL: null
    }
  }
  
  componentWillMount() {
    const {articleURL} = queryString.parse(window.location.search);
    if (articleURL) {
      this.setState({articleURL});
      getArticlePharagraphs(articleURL)
        .then((res) => {
          const {title, paragraphs, articleId} = res.data;
          this.setState({
            title, paragraphs, articleId
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  render () {
    const {title, paragraphs, articleId, articleURL} = this.state;
    if (!articleId) {
      return <CircleLoader />
    }
    return (
      <div className='suggest-view'>
        <AppBar title={title} showMenuIconButton={false} />
        <div className='suggest-view_wrapper'>
          {
            paragraphs.map((item, index) => (
              <TextSuggestionForm
                key={index}
                articleId={articleId}
                articleURL={articleURL}
                paragraphId={item.paragraphId}
                originalText={item.text}/>
            ))
          }
        </div>
      </div>
    )
  }
}

export default SuggestView;