function updateReport(context, request) {
  const {body} = request

  if (body.challenge) {
    return {challenge: body.challenge}
  }
}

module.exports = functionFactory =>
  functionFactory.withNamespace('pd-oncall-summary')
                 .addWebFunction('POST',
                                 '/report',
                                 updateReport);
