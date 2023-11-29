export function helperTable(data: any) {
  const raw = data
  let title,
    content: any = []

  const rawField = raw?.fields?.filter((f: any) => f?.name !== 'doc_count')

  const redraw: any = modelingDataset(raw?.features, rawField) || []
  redraw?.map((val: any) => {
    title = Object.keys(val)?.filter((f: any) => f != 'doc_count')

    content.push(Object.values(convert(val, rawField)))
  })
  const draw = {
    title: title,
    content: content,
  }

  return draw
}

export function convert(raw: any, fields: any) {
  let obj: any = {}
  fields.map((field: any) => {
    obj[field.name] = Boolean(convertyByType(raw[field.name], field?.type)) ? convertyByType(raw[field.name], field?.type) : raw[field.name]
  })
  return obj
}

export function convertyByType(data: any, type: any) {
  let result: any
  switch (type) {
    case 'date':
      result = new Date(data).toLocaleDateString()
      break
    case 'number':
      result = Number(data)
      break
    case 'float':
      result = parseFloat(data)
      break

    default:
      result = data
      break
  }
  return result
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function modelingDataset(reff: any[] = [], fields: any[] = []) {
  let drawArray: any = []

  reff?.map((val: any) => {
    const raw = val
    const { ...redraw } = raw
    drawArray.push(redraw)
  })
  return drawArray
}
