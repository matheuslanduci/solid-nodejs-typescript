import { MongoClient, Collection } from 'mongodb'

export class MongoHelper {
  static client: MongoClient
  static uri: string

  static async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
    this.uri = uri
  }

  static async disconnect() {
    await this.client.close()
    this.client = null
  }

  static async getCollection<T = any>(name: string): Promise<Collection<T>> {
    if (!this.client) {
      await this.connect(this.uri)
    }    

    return this.client.db().collection<T>(name)
  }

  static map<T = any>(data: any): T {
    const { _id, ...documentWithoutId } = data

    return { id: _id, ...documentWithoutId }
  }
}
