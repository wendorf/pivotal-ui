import React from 'react'
import MarkdownViewer from './code_area/MarkdownViewer'

export default class Content extends React.PureComponent {
  render() {
    return <div className="content">
      <MarkdownViewer html={this.props.content}/>
    </div>
  }
}