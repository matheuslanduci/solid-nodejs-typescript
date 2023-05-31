import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection<AccountModel>('accounts')

    const result = await accountCollection.insertOne(accountData as AccountModel)

    const account = await accountCollection.findOne({ _id: result.insertedId })

    const { _id, ...accountWithoutId } = account

    return Object.assign({}, accountWithoutId, { id: _id })
  }
}
