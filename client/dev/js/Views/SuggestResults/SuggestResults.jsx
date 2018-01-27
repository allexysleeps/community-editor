import React from 'react';
import {getSuggestResults} from "../../API/getSuggestResults";
import queryString from "query-string";
import CircleLoader from "../../Components/CircleLoader/CircleLoader";
import {AppBar} from "material-ui";
import SuggestResultForm from "../../Components/SuggestResultForm/SuggestResultForm.jsx";

class SuggestResults extends React.Component {
  constructor () {
    super();
    this.state = {
      title: null,
      paragraphs: null,
      articleId: null,
      showApproved: null,
      articleURL: null
    }
  }
  
  componentWillMount() {
    const {articleURL, showApproved} = queryString.parse(window.location.search);
    getSuggestResults({url: articleURL, showApproved})
      .then((res) => {
        const {title, paragraphs, articleId} = res.data;
        this.setState({title, paragraphs, articleId, showApproved, articleURL});
      })
      .catch((err) => console.log(err))
  }
  
  render() {
    const {title, paragraphs, articleId, articleURL} = this.state;
    if (!articleId) {
      return <CircleLoader />
    }
    return (
      <div className='suggest-results'>
        <AppBar style={styles.appBar} title={title} showMenuIconButton={false} />
        {
          paragraphs.map((item, index) => {
            const {originalText, paragraphId, suggestions} = item;
            return <SuggestResultForm
              originalText={originalText}
              paragraphId={paragraphId}
              suggestions={suggestions}
              key={index}/>
          })
        }
      </div>
    )
  }
}

const styles = {
  appBar: {
    background: '#F44336'
  }
};

export default SuggestResults;