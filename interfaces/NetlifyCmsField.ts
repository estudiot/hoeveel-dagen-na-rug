// Based on https://gist.github.com/marcveens/c723f6ce70f7f231ebde323b71ce7954.

type WidgetType =
  | 'boolean'
  | 'date'
  | 'datetime'
  | 'file'
  | 'hidden'
  | 'image'
  | 'list'
  | 'map'
  | 'markdown'
  | 'number'
  | 'object'
  | 'relation'
  | 'select'
  | 'string'
  | 'text'
  | 'string'

type MarkdownButtonType =
  | 'bold'
  | 'italic'
  | 'code'
  | 'link'
  | 'heading-one'
  | 'heading-two'
  | 'quote'
  | 'code-block'
  | 'bulleted-list'
  | 'numbered-list'

type ValueType = 'int' | 'float'
type MapType = 'Point' | 'LineString' | 'Polygon'

export default interface NetlifyCmsField {
  name: string
  label?: string
  widget: WidgetType
  default?: string | string[] | number
  required?: boolean
  hint?: string
  pattern?: string

  // date | datetime
  format?: string
  dateFormat?: boolean | string
  timeFormat?: boolean | string

  // file | image
  media_library?: {
    config: {
      multiple?: boolean
    }
  }

  // list | object
  allow_add?: boolean
  field?: NetlifyCmsField
  fields?: NetlifyCmsField[] // actually required in case of object

  // map
  type?: MapType

  // markdown
  buttons?: MarkdownButtonType[]

  // number
  valueType?: ValueType | string
  min?: number
  max?: number
  step?: number

  // relation
  collection?: string
  displayFields?: string[]
  searchFields?: string
  valueField?: string
  multiple?: boolean

  // select
  options?: string[] | { label: string; value: string }[]
}
