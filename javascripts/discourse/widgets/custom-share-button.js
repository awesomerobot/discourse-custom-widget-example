import { iconNode } from 'discourse-common/lib/icon-library'
import { createWidget } from 'discourse/widgets/widget'

export default createWidget('custom-share-widget', {
  tagName: 'button',

  buildClasses() {
    return ['widget-button', 'btn-flat', 'no-text', 'btn-icon']
  },

  html() {
    return iconNode('asterisk')
  },

  click(attrs) {
    const post = this.findAncestorModel()
    console.log(attrs)
    console.log(post)
    alert(
      `Custom share button clicked.\n\nThe post ID is ${post.id}, the topic is called "${post.topic.fancy_title}."\n\nTake a look at some of the data made available to this widget in your browser's console.`
    )
  },
})
