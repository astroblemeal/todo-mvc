import { Expose } from 'class-transformer'

export class TodoModel {
  @Expose({ name: 'id' })
  id?: string

  @Expose({ name: 'mainText' })
  mainText: string

  @Expose({ name: 'secondaryText' })
  secondaryText: string

  @Expose({ name: 'status' })
  status: boolean
}
