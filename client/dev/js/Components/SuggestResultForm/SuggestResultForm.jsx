import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import UsersTextForm from "../UsersTextForm/UsersTextForm.jsx";
import {deleteAllSuggestions, sendSuggestion} from "../../API/suggestResults";

class SuggestResultForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentText: props.originalText,
      customSuggest: '',
      expanded: false,
      approved: props.approved,
      deleted: false
    }
  }
  
  handleExpandChange = (expanded) => {
    this.setState({expanded})
  };
  
  approveSuggestion = (text) => {
    const {paragraphId, articleId} = this.props;
    sendSuggestion({paragraphId, articleId, text})
      .then((res) => {
        this.setState({
          currentText: text,
          approved: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
  };
  
  deleteSuggestions = () => {
    const {paragraphId, articleId} = this.props;
    deleteAllSuggestions({articleId, paragraphId})
      .then((res) => {
        this.setState({deleted: true})
      })
      .catch((err) => {
        console.log(err);
      })
  };
  
  
  
  render() {
    const {currentText, expanded, approved, deleted} = this.state;
    const {suggestions, showApproved} = this.props;
    if (deleted || (approved && !showApproved)) {
      return null;
    }
    return (
      <div style={styles.wrapper}>
        <Card
          style={styles.container}
          expanded={expanded}
          onExpandChange={this.handleExpandChange}>
          <CardHeader
            title='Original text'
            subtitle={currentText}
            titleStyle={styles.header.title}
            showExpandableButton/>
          <CardText expandable>
            <p style={styles.header.title}>users suggestions:</p>
            {
              suggestions.map((item, index) => {
                const {usersText} = item;
                return <UsersTextForm
                  disabled={usersText === currentText}
                  key={index}
                  onClick={() => this.approveSuggestion(usersText)}
                  usersText={usersText}/>
              })
            }
          </CardText>
        </Card>
        <RaisedButton
          onClick={this.deleteSuggestions}
          label='Delete'
          backgroundColor='#B71C1C'
          labelColor='#fff'/>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    width: '700px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '30px auto 0'
  },
  container: {
    width: '600px',
  },
  header: {
    title: {
      fontSize: '12px',
      margin: '0 0 10px 0',
      textTransform: 'uppercase',
      color: '#651FFF'
    }
  },
};

export default SuggestResultForm;