import type { Input as BaseInput } from "@base-ui/react/input"
import type { Icon } from "@phosphor-icons/react"
import type { ComponentProps } from "react"

export type InputProps = ComponentProps<typeof BaseInput> & {
	leadingIcon?: Icon
	showSeparator?: boolean
}
