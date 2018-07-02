module.exports = app => {
  app.on('issues.opened', async context => {
    const params = context.issue({body: 'Hello World!'})
    return context.github.issues.createComment(params)
  })
}
