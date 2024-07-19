import React from 'react'
import type { NodeRenderer } from '@myst-theme/providers'
import type { GenericNode } from 'myst-common'
import * as scicon from '@scienceicons/react/24/solid'
import { CircleAlert } from 'lucide-react'

function UnknownIcon({ value }: { value: React.ReactNode }) {
  return (
    <span className="text-yellow-600" title={`${value} is unknown`}>
      <CircleAlert width="1rem" height="1rem" className="inline" />
    </span>
  )
}

export const ScienceIconRenderer: NodeRenderer = ({ node }: { node: GenericNode }) => {
  const names = scicon.names.map((icon) => icon.name)
  if (node.value && names.includes(node.value)) {
    const componentName = scicon.names.find((i) => i.name === node.value)?.componentName
    if (!componentName) return <UnknownIcon value={node.value} />
    const { names, ...components } = scicon
    const Component = components[componentName as keyof typeof components] as React.FC<
      React.SVGProps<SVGSVGElement>
    >
    return (
      <span className="inline-flex align-text-bottom" title={node.value}>
        <Component width="1rem" height="1rem" />
      </span>
    )
  }

  return <UnknownIcon value={node.value} />
}
