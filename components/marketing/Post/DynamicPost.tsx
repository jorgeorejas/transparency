import { Text } from "@design-system/atoms"

export default function DynamicPost({ blocks }) {
  return (
    <article className="prose prose-stone">
      {blocks.blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </article>
  )
}

export type BlockProps = {
  block: {
    id: string
    data: any
    type: string
  }
}

function Block({ block }: BlockProps) {
  switch (block.type) {
    case "header":
      return <BlockHeader data={block.data} />
    case "list":
      return <BlockList data={block.data} />
    case "paragraph":
      return <BlockParagraph data={block.data} />
    case "code":
      return <BlockCode data={block.data} />
    case "table":
      return <BlockTable data={block.data} />
    default:
      return <pre>{JSON.stringify(block)}</pre>
  }
}

function BlockHeader({ data }) {
  switch (data.level) {
    case 1:
      return <Text.Header htmlTag="h1">{data.text}</Text.Header>
    case 2:
      return <Text.Header htmlTag="h2">{data.text}</Text.Header>
    case 3:
      return <Text.Header htmlTag="h3">{data.text}</Text.Header>
    case 4:
      return <Text.Header htmlTag="h4">{data.text}</Text.Header>
    case 5:
      return <Text.Header htmlTag="h5">{data.text}</Text.Header>
    case 6:
      return <Text.Header htmlTag="h6">{data.text}</Text.Header>
    default:
      return <Text.Header htmlTag="h1">{data.text}</Text.Header>
  }
}

function BlockList({ data }) {
  switch (data.style) {
    case "ordered":
      return (
        <ol>
          <BlockListItems items={data.items} />
        </ol>
      )
    case "unordered":
      return (
        <ul>
          <BlockListItems items={data.items} />
        </ul>
      )
    default:
      return (
        <ul>
          <BlockListItems items={data.items} />
        </ul>
      )
  }
}

function BlockListItems({ items }) {
  return items.map((item, i) => <li key={i}>{item}</li>)
}

function BlockParagraph({ data }) {
  return <p dangerouslySetInnerHTML={{ __html: data.text }} />
}

function BlockCode({ data }) {
  return <pre>{data.code}</pre>
}

function BlockTable({ data }) {
  switch (data.withHeaders) {
    case true:
      return (
        <table>
          <thead>
            <tr>
              {data.content[0].map((item, i) => (
                <th key={i}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.content.slice(1).map((row, i) => (
              <tr key={i}>
                {row.map((item, i) => (
                  <td key={i}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    case false:
      return (
        <table>
          <tbody>
            {data.content.map((row, i) => (
              <tr key={i}>
                {row.map((item, i) => (
                  <td key={i}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    default:
      return (
        <table>
          <tbody>
            {data.content.map((row, i) => (
              <tr key={i}>
                {row.map((item, i) => (
                  <td key={i}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
  }
}
