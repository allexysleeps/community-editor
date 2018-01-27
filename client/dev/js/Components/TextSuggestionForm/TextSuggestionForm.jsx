import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/done';
import {sendSuggestionText} from "../../API/articleSuggest";

class TextSuggestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersText: props.originalText,
      expanded: false
    }
  }
  
  handleTextChange = (e) => {
    this.setState({
      usersText: e.target.value
    })
  };
  
  handleExpandChange = (expanded) => {
    this.setState({expanded})
  };
  
  sendChanges = () => {
    const {articleId, paragraphId, articleURL, originalText} = this.props;
    const {usersText} = this.state;
    sendSuggestionText({articleId, articleURL, paragraphId, usersText, originalText})
      .then((res) => {
        console.log(res);
        this.setState({
          expanded: false
        });
      })
      .catch((err) => {
        console.log(err);
      })
    
  };
  
  render() {
    const {originalText} = this.props;
    const {expanded, usersText} = this.state;
    return (
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
          <p style={styles.header.title}>users version</p>
          <TextField
            value={usersText}
            onChange={this.handleTextChange}
            style={styles.textField}
            id='suggestion-text'
            multiLine
            underlineShow={false}
            rows={2}
            rowsMax={6}/>
          <CardText style={styles.submitBlock}>
            <FloatingActionButton
              disabled={!usersText || usersText === originalText}
              onClick={this.sendChanges}
              style={styles.button}
              mini>
              <ContentAdd />
            </FloatingActionButton>
            send changes
          </CardText>
        </CardText>
      </Card>
    )
  }
}

const styles = {
  container: {
    width: '600px',
    margin: '30px auto 0'
  },
  header: {
    title: {
      fontSize: '12px',
      margin: '0 0 10px 0',
      textTransform: 'uppercase'
    }
  },
  textField: {
    width: '100%',
    fontSize: '14px',
    border: '1px solid #cacaca',
    margin: '10px 0 0 0',
    padding: '0 5px',
    borderRadius: '3px'
  },
  submitBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    margin: '0 10px 0 0',
  }
};

TextSuggestionForm.propTypes = {
  onSubmit: PropTypes.func,
  originalText: PropTypes.string,
  articleURL: PropTypes.string,
  articleId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  paragraphId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default TextSuggestionForm;