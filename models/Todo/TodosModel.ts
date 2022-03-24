import { TodoModel } from '@models/Todo/TodoModel'
import { Expose, Type } from 'class-transformer'

export class TodosModel {
  @Expose({ name: 'entries' })
  @Type(() => TodoModel)
  entries: TodoModel[]

  @Expose({ name: 'links' })
  links: string

  @Expose({ name: 'size' })
  size: number
}
