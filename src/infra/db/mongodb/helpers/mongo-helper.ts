import { MongoClient, Collection } from 'mongodb'

export class MongoHelper {
  static client: MongoClient

  static async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  }

  static async disconnect() {
    await this.client.close()
  }

  static getCollection<T = any>(name: string): Collection<T> {
    return this.client.db().collection<T>(name)
  }

  static map<T = any>(data: any): T {
    const { _id, ...documentWithoutId } = data

    return { id: _id, ...documentWithoutId }
  }
}
