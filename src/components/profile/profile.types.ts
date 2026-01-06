import type { ComponentProps } from "react"

export type ProfileProps = ComponentProps<"button"> & {
	imageUrl: string
	fallbackText: string
	profileName: string
	profileEmail?: string
	compact?: boolean
}
