if (process.env.NODE_ENV !== 'development') {
  process.on('unhandledRejection', (err) => {
    console.error(err instanceof Error ? err.message : err)
    process.exit(-1)
  })
}
;(async () => {
  try {
    console.log('Hello World!')
    process.exit(0)
  } catch (e) {
    throw e
  }
})()
