"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

// Explicitly typing 'children' and merging with the existing props
export function ThemeProvider({
                                  children,
                                  ...props
                              }: {
    children: React.ReactNode;  // Explicitly typing 'children'
} & Omit<ThemeProviderProps, 'children'>) {  // Excluding 'children' from props
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
