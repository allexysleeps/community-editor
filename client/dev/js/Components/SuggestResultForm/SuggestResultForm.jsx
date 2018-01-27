import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import UsersTextForm from "../UsersTextForm/UsersTextForm.jsx";

class SuggestResultForm extends React.Component {
  constructor () {
    super();
    this.state = {
      customSuggest: '',
      expanded: false,
      hide: false
    }
  }
  
  handleExpandChange = (expanded) => {
    this.setState({expanded})
  };
  
  approveSuggestion = (suggestionId) => {
    console.log(suggestionId);
  };
  
  render() {
    const {expanded} = this.state;
    const {originalText, suggestions} = this.props;
    return (
      <div style={styles.wrapper}>
        <Card
          style={styles.container}
          expanded={expanded}
          onExpandChange={this.handleExpandChange}>
          <CardHeader
            title='Original text'
            subtitle={originalText}
            titleStyle={styles.header.title}
            showExpandableButton/>
          <CardText expandable>
            <p style={styles.header.title}>users suggestions:</p>
            {
              suggestions.map((item, index) => {
                const {usersText, suggestionId} = item;
                return <UsersTextForm
                  key={index}
                  onClick={() => this.approveSuggestion(suggestionId)}
                  usersText={usersText}/>
              })
            }
          </CardText>
        </Card>
        <RaisedButton label='Delete' backgroundColor='#B71C1C' labelColor='#fff'/>
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