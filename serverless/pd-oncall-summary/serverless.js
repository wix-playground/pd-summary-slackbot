function updateReport(context, request) {
  const {body} = request

  if (body.challenge) {
    return {challenge: body.challenge}
  }
}

function greet() {
  return 'Yo man!'
}

module.exports = functionFactory =>
  functionFactory.withNamespace('pd-oncall-summary')

                 .addWebFunction('GET', '/hello', greet)
                 .addWebFunction('POST',
                                 '/report',
                                 updateReport);
