let tmp = require('tmp')

test('stack upgrade', async () => {
  jest.setTimeout(60 * 1000)
  let execute = require('../index')
  let dir = tmp.dirSync()
  await execute({
    destDir: dir.name,
    answers: {
      'stack-name': 'test',
      'stack-desc': 'desc'
    }
  })
})
