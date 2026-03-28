export function parseMarkdown(text) {
  if (!text) return ''
  
  let html = text
  
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
  
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
  html = html.replace(/~~(.*?)~~/g, '<del>$1</del>')
  
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
  html = html.replace(/`(.*?)`/g, '<code class="inline">$1</code>')
  
  html = html.replace(/^\* (.*$)/gim, '<li>$1</li>')
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
  html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
  
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
  
  html = html.replace(/\n\n/g, '</p><p>')
  html = '<p>' + html + '</p>'
  
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/<p>(<h[1-6]>)/g, '$1')
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1')
  html = html.replace(/<p>(<ul>)/g, '$1')
  html = html.replace(/(<\/ul>)<\/p>/g, '$1')
  html = html.replace(/<p>(<pre>)/g, '$1')
  html = html.replace(/(<\/pre>)<\/p>/g, '$1')
  html = html.replace(/<p>(<li>)/g, '$1')
  html = html.replace(/(<\/li>)<\/p>/g, '$1')
  
  return html
}
