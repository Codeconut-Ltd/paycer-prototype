import React from 'react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * Portal HTML element ID.
 *
 * @todo P314 | Should a hardcoded ID be part of this component?
 */
export const portalRootIdSelector: string = 'portal-root'

interface PortalProps {
  rootElement: HTMLElement | null
  children: any
}

/**
 * Purely functional, design agnostic portal component.
 */
const Portal: React.FC<PortalProps> = (props: PortalProps) => {
  const { rootElement, children } = props

  if (!rootElement) {
    throw 'Property `element` be of type `HTMLElement` (not: null). Does the element exist in DOM?'
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return isMounted
    ? createPortal(children, rootElement)
    : null
}

export default Portal
