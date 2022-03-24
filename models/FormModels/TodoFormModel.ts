import { Expose } from 'class-transformer'

export class TodoFormModel {
  @Expose()
  mainText: string

  @Expose()
  secondaryText: string

  @Expose()
  status: boolean
}
