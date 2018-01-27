import React from 'react';
import {withRouter} from "react-router";
import queryString from "query-string";
import {AppBar} from "material-ui";
import Toggle from 'material-ui/Toggle';
import CircleLoader from "../../Components/CircleLoader/CircleLoader";
import SuggestResultForm from "../../Components/SuggestResultForm/SuggestResultForm.jsx";
import {getSuggestResults} from "../../API/suggestResults";
import {history} from '../../../react-app';

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
  
  toggleApproved = () => {
    const {search, pathname} = this.props.location;
    const queryObject = queryString.parse(search);
    const newQuery = queryString.stringify({...queryObject, showApproved: queryObject.showApproved ? null : true});
    history.push(`${pathname}?${newQuery}`)
  };
  
  componentWillMount() {
    const {articleURL, showApproved} = queryString.parse(window.location.search);
    getSuggestResults({url: articleURL})
      .then((res) => {
        const {title, paragraphs, articleId} = res.data;
        this.setState({title, paragraphs, articleId, showApproved, articleURL});
      })
      .catch((err) => console.log(err))
  }
  
  render() {
    const {title, paragraphs, articleId} = this.state;
    const showApproved = !!queryString.parse(this.props.location.search).showApproved;
    if (!articleId) {
      return <CircleLoader />
    }
    return (
      <div className='suggest-results'>
        <AppBar style={styles.appBar} title={title} showMenuIconButton={false} />
        <div style={styles.toggle.container}>
          <Toggle
            onToggle={this.toggleApproved}
            toggled={showApproved}
            label='Show approved'
            labelPosition='right'
            style={styles.toggle}/>
        </div>
        {
          paragraphs.map((item, index) => {
            const {originalText, paragraphId, suggestions, approved} = item;
            return <SuggestResultForm
              approved={approved}
              showApproved={showApproved}
              articleId={articleId}
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
  },
  toggle: {
    container: {
      width: '700px',
      margin: '20px auto 10px',
      textAlign: 'left'
    },
    body: {
      display: 'inline-block'
    }
  }
};

export default withRouter(SuggestResults);