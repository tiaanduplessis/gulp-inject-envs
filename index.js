const replaceTask = require('gulp-replace-task')

module.exports = function injectEnvs (envVars = {}, { prefix = 'ENV::', warn = true } = {}) {
  const pattern = `<${prefix}(.*?)>`
  const regex = new RegExp(pattern, 'g')

  return replaceTask({
    patterns: [
      {
        match: regex,
        replacement: function (_, current) {
          const val = envVars[current]
          if (val === undefined || val === null) {
            if (warn) {
              console.warn(`Environment not provided for ${current}`)
            } else {
              throw new Error(`Environment not provided for ${current}`)
            }
          } else {
            return val
          }
        }
      }
    ]
  })
}
