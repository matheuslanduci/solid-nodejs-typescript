export class ServerError extends Error {
  constructor(stackTrace?: string) {
    super('Internal server error')
    this.name = 'ServerError'
    this.stack = stackTrace
  }
}
